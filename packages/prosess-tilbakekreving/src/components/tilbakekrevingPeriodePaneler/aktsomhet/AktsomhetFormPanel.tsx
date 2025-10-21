import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, removeSpacesFromNumber } from '@navikt/ft-utils';

import { type Aktsomhet, AKTSOMHET_REKKEFØLGE } from '../../../kodeverk/aktsomhet';
import type { KodeverkMedNavnTilbakekreving } from '../../../types/KodeverkTilbakeForPanel';
import type { AktsomhetInfo } from '../../../types/VilkårsvurdertePerioder';
import { AktsomhetGradFormPanel } from './AktsomhetGradFormPanel';
import { ANDELER, EGENDEFINERT } from './aktsomhetUtils';

const forstoBurdeForstattTekster = {
  FORSETT: 'AktsomhetFormPanel.AktsomhetTyperLabel.Forsett',
  GROVT_UAKTSOM: 'AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt',
  SIMPEL_UAKTSOM: 'AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom',
} as Record<Aktsomhet, string>;

interface AktsomhetData {
  andelSomTilbakekreves: number | string;
  andelSomTilbakekrevesManuell: number;
  harGrunnerTilReduksjon: boolean;
  skalDetTilleggesRenter: boolean;
  belopSomSkalTilbakekreves: number;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
}

type AktomhetMap = {
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
};

export type InitialValuesAktsomhetForm = {
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>;

interface Props {
  readOnly: boolean;
  resetFields: () => void;
  harGrunnerTilReduksjon?: boolean;
  erSerligGrunnAnnetValgt?: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  handletUaktsomhetGrad?: Aktsomhet;
  antallYtelser: number;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  aktsomhetTyper: KodeverkMedNavnTilbakekreving<'Aktsomhet'>[];
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[];
  andelSomTilbakekreves?: string;
  name: string;
}

export const AktsomhetFormPanel = ({
  readOnly,
  resetFields,
  handletUaktsomhetGrad,
  harGrunnerTilReduksjon,
  erSerligGrunnAnnetValgt = false,
  erValgtResultatTypeForstoBurdeForstaatt = false,
  aktsomhetTyper,
  sarligGrunnTyper,
  antallYtelser,
  feilutbetalingBelop,
  erTotalBelopUnder4Rettsgebyr,
  andelSomTilbakekreves,
  name,
}: Props) => {
  // TODO (TOR) Manglar type
  const { control } = useFormContext();
  return (
    <VStack gap="space-12">
      <RhfRadioGroup
        name={`${name}.handletUaktsomhetGrad`}
        control={control}
        legend={<FormattedMessage id="AktsomhetFormPanel.HandletUaktsomhetGrad" />}
        validate={[required]}
        readOnly={readOnly}
        onChange={resetFields}
      >
        <HStack gap="space-20">
          {aktsomhetTyper.map(vrt => (
            <Radio key={vrt.kode} value={vrt.kode} size="small">
              {erValgtResultatTypeForstoBurdeForstaatt ? (
                <FormattedMessage id={forstoBurdeForstattTekster[vrt.kode]} />
              ) : (
                vrt.navn
              )}
            </Radio>
          ))}
        </HStack>
      </RhfRadioGroup>
      {AKTSOMHET_REKKEFØLGE.some(uc => uc === handletUaktsomhetGrad) && (
        <AktsomhetGradFormPanel
          name={`${name}.${handletUaktsomhetGrad}`}
          harGrunnerTilReduksjon={harGrunnerTilReduksjon}
          readOnly={readOnly}
          handletUaktsomhetGrad={handletUaktsomhetGrad}
          erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
          erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
          sarligGrunnTyper={sarligGrunnTyper}
          harMerEnnEnYtelse={antallYtelser > 1}
          feilutbetalingBelop={feilutbetalingBelop}
          erTotalBelopUnder4Rettsgebyr={erTotalBelopUnder4Rettsgebyr}
          andelSomTilbakekreves={andelSomTilbakekreves}
        />
      )}
    </VStack>
  );
};

const parseIntAndelSomTilbakekreves = (andelSomTilbakekreves: string, harGrunnerTilReduksjon: boolean) => {
  const parsedValue = parseInt(andelSomTilbakekreves, 10);
  return !harGrunnerTilReduksjon || Number.isNaN(parsedValue) ? {} : { andelTilbakekreves: parsedValue };
};

const parseFloatAndelSomTilbakekreves = (andelSomTilbakekreves: string, harGrunnerTilReduksjon: boolean) => {
  const parsedValue = parseFloat(andelSomTilbakekreves);
  return !harGrunnerTilReduksjon || Number.isNaN(parsedValue) ? {} : { andelTilbakekreves: parsedValue };
};

const formatAktsomhetData = (aktsomhet: any, sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]) => {
  if (aktsomhet.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false) {
    return {
      tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: aktsomhet.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,
    };
  }

  const sarligeGrunner = sarligGrunnTyper.reduce(
    (acc: string[], type) => (aktsomhet[type.kode] ? acc.concat(type.kode) : acc),
    [],
  );

  const { harGrunnerTilReduksjon } = aktsomhet;
  const andelSomTilbakekreves =
    aktsomhet.andelSomTilbakekreves === EGENDEFINERT
      ? parseFloatAndelSomTilbakekreves(aktsomhet.andelSomTilbakekrevesManuell, harGrunnerTilReduksjon)
      : parseIntAndelSomTilbakekreves(aktsomhet.andelSomTilbakekreves, harGrunnerTilReduksjon);

  return {
    harGrunnerTilReduksjon,
    ileggRenter: harGrunnerTilReduksjon ? undefined : aktsomhet.skalDetTilleggesRenter,
    sarligGrunner: sarligeGrunner.length > 0 ? sarligeGrunner : undefined,
    tilbakekrevesBelop: aktsomhet.harGrunnerTilReduksjon
      ? removeSpacesFromNumber(aktsomhet.belopSomSkalTilbakekreves)
      : undefined,
    annetBegrunnelse: aktsomhet.annetBegrunnelse,
    sarligGrunnerBegrunnelse: aktsomhet.sarligGrunnerBegrunnelse,
    tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: aktsomhet.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,
    ...andelSomTilbakekreves,
  };
};

AktsomhetFormPanel.transformValues = (
  info: { handletUaktsomhetGrad: string },
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[],
  vurderingBegrunnelse: string,
) => {
  // @ts-expect-error Fiks
  const aktsomhet = info[info.handletUaktsomhetGrad];
  return {
    '@type': 'annet',
    aktsomhet: info.handletUaktsomhetGrad,
    begrunnelse: vurderingBegrunnelse,
    aktsomhetInfo: aktsomhet ? formatAktsomhetData(aktsomhet, sarligGrunnTyper) : null,
  };
};

const lagAktsomhetData = (
  aktsomhetInfo: AktsomhetInfo,
  andelSomTilbakekreves?: string,
): InitialValuesAktsomhetForm => ({
  andelSomTilbakekreves:
    andelSomTilbakekreves === undefined || ANDELER.includes(andelSomTilbakekreves)
      ? andelSomTilbakekreves
      : EGENDEFINERT,
  andelSomTilbakekrevesManuell:
    andelSomTilbakekreves && ANDELER.includes(andelSomTilbakekreves) ? undefined : aktsomhetInfo.andelTilbakekreves,
  harGrunnerTilReduksjon: aktsomhetInfo.harGrunnerTilReduksjon,
  skalDetTilleggesRenter: aktsomhetInfo.ileggRenter,
  belopSomSkalTilbakekreves: aktsomhetInfo.tilbakekrevesBelop,
  annetBegrunnelse: aktsomhetInfo.annetBegrunnelse,
  sarligGrunnerBegrunnelse: decodeHtmlEntity(aktsomhetInfo.sarligGrunnerBegrunnelse),
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: aktsomhetInfo.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,
  ...(aktsomhetInfo.sarligGrunner
    ? aktsomhetInfo.sarligGrunner.reduce((acc: any, sg: any) => ({ ...acc, [sg.kode ?? sg]: true }), {})
    : {}),
});

AktsomhetFormPanel.buildInitalValues = (vilkarResultatInfo: {
  aktsomhet: string | any;
  aktsomhetInfo?: AktsomhetInfo;
}) => {
  const { aktsomhet, aktsomhetInfo } = vilkarResultatInfo;
  const andelSomTilbakekreves =
    aktsomhetInfo && aktsomhetInfo.andelTilbakekreves !== undefined ? `${aktsomhetInfo.andelTilbakekreves}` : undefined;
  const aktsomhetData = aktsomhetInfo
    ? {
        [aktsomhet.kode && 'kode' in aktsomhet ? aktsomhet.kode : aktsomhet]: lagAktsomhetData(
          aktsomhetInfo,
          andelSomTilbakekreves,
        ),
      }
    : {};

  return {
    handletUaktsomhetGrad: aktsomhet && aktsomhet.kode && 'kode' in aktsomhet ? aktsomhet.kode : aktsomhet,
    ...aktsomhetData,
  };
};

import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, removeSpacesFromNumber } from '@navikt/ft-utils';

import { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { KodeverkMedNavnTilbakekreving } from '../../../types/KodeverkTilbakeForPanel';
import type { AktsomhetInfo } from '../../../types/VilkårsvurdertePerioder';
import { AktsomhetGradFormPanel } from './AktsomhetGradFormPanel';
import { ANDELER, EGENDEFINERT } from './aktsomhetUtils';

const uaktsomhetCodes = [Aktsomhet.GROVT_UAKTSOM, Aktsomhet.SIMPEL_UAKTSOM, Aktsomhet.FORSETT];

const forstoBurdeForstattTekster = {
  [Aktsomhet.FORSETT]: 'AktsomhetFormPanel.AktsomhetTyperLabel.Forsett',
  [Aktsomhet.GROVT_UAKTSOM]: 'AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt',
  [Aktsomhet.SIMPEL_UAKTSOM]: 'AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom',
} as Record<string, string>;

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

export interface InitialValuesAktsomhetForm {
  handletUaktsomhetGrad: Aktsomhet;
  [Aktsomhet.FORSETT]?: AktsomhetData;
  [Aktsomhet.GROVT_UAKTSOM]?: AktsomhetData;
  [Aktsomhet.SIMPEL_UAKTSOM]?: AktsomhetData;
}

export interface Props {
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
    <>
      <RhfRadioGroup
        name={`${name}.handletUaktsomhetGrad`}
        control={control}
        label={<FormattedMessage id="AktsomhetFormPanel.HandletUaktsomhetGrad" />}
        validate={[required]}
        radios={aktsomhetTyper.map(vrt => ({
          label: erValgtResultatTypeForstoBurdeForstaatt ? (
            <FormattedMessage id={forstoBurdeForstattTekster[vrt.kode]} />
          ) : (
            vrt.navn
          ),
          value: vrt.kode,
        }))}
        isReadOnly={readOnly}
        onChange={resetFields}
        isHorizontal
      />
      {uaktsomhetCodes.some(uc => uc === handletUaktsomhetGrad) && (
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
    </>
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

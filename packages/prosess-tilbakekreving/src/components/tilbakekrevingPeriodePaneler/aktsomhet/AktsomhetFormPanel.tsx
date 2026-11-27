import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { decodeHtmlEntity, removeSpacesFromNumber } from '@navikt/ft-utils';

import { type Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { MessageId } from '../../../messageIds';
import type { KodeverkMedNavnTilbakekreving, KodeverkTilbakeForPanel } from '../../../types/kodeverkTilbakeForPanel';
import type { AktsomhetInfo } from '../../../types/vilkårsvurdertePerioder';
import type { AktsomhetFormValues, AktsomhetsFelter, InitialValuesAktsomhetForm } from './aktsomhetFormTypes';
import { AktsomhetGradForsettFormPanel } from './AktsomhetGradForsettFormPanel';
import { AktsomhetGradUaktsomhetFormPanel } from './AktsomhetGradUaktsomhetFormPanel';
import { ANDELER, EGENDEFINERT } from './aktsomhetUtils';

const forstoBurdeForstattTekster: Record<Aktsomhet, MessageId> = {
  FORSETT: 'AktsomhetFormPanel.AktsomhetTyperLabel.Forsett',
  GROVT_UAKTSOM: 'AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt',
  SIMPEL_UAKTSOM: 'AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom',
};

interface Props {
  readOnly: boolean;
  resetFields: () => void;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  antallYtelser: number;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  name: 'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING';
}

export const AktsomhetFormPanel = ({
  readOnly,
  resetFields,
  erValgtResultatTypeForstoBurdeForstaatt = false,
  kodeverkSamlingFpTilbake,
  antallYtelser,
  feilutbetalingBelop,
  erTotalBelopUnder4Rettsgebyr,
  name,
}: Props) => {
  const { control } = useFormContext<AktsomhetFormValues>();

  const handletUaktsomhetGrad = useWatch({ control, name: `${name}.handletUaktsomhetGrad` });

  const aktsomhetTyper = kodeverkSamlingFpTilbake['Aktsomhet'].toSorted((a, b) => b.navn.localeCompare(a.navn));

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

      {handletUaktsomhetGrad === 'FORSETT' && (
        <AktsomhetGradForsettFormPanel
          name={`${name}.${handletUaktsomhetGrad}`}
          readOnly={readOnly}
          erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
        />
      )}

      {(handletUaktsomhetGrad === 'SIMPEL_UAKTSOM' || handletUaktsomhetGrad === 'GROVT_UAKTSOM') && (
        <AktsomhetGradUaktsomhetFormPanel
          name={`${name}.${handletUaktsomhetGrad}`}
          readOnly={readOnly}
          handletUaktsomhetGrad={handletUaktsomhetGrad}
          kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
          harMerEnnEnYtelse={antallYtelser > 1}
          feilutbetalingBelop={feilutbetalingBelop}
          erTotalBelopUnder4Rettsgebyr={erTotalBelopUnder4Rettsgebyr}
          erValgtResultatTypeForstoBurdeForstaatt={erValgtResultatTypeForstoBurdeForstaatt}
        />
      )}
    </VStack>
  );
};

const parseIntAndelSomTilbakekreves = (andelSomTilbakekreves: string, harGrunnerTilReduksjon: boolean) => {
  const parsedValue = Number.parseInt(andelSomTilbakekreves, 10);
  return !harGrunnerTilReduksjon || Number.isNaN(parsedValue) ? {} : { andelTilbakekreves: parsedValue };
};

const parseFloatAndelSomTilbakekreves = (andelSomTilbakekreves: string, harGrunnerTilReduksjon: boolean) => {
  const parsedValue = Number.parseFloat(andelSomTilbakekreves);
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
  info: InitialValuesAktsomhetForm,
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[],
  vurderingBegrunnelse: string,
) => {
  const aktsomhet = info[info.handletUaktsomhetGrad];
  return {
    '@type': 'annet',
    aktsomhet: info.handletUaktsomhetGrad,
    begrunnelse: vurderingBegrunnelse,
    aktsomhetInfo: aktsomhet ? formatAktsomhetData(aktsomhet, sarligGrunnTyper) : null,
  };
};

const lagAktsomhetData = (aktsomhetInfo: AktsomhetInfo, andelSomTilbakekreves?: string): AktsomhetsFelter => ({
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
  aktsomhet: Aktsomhet | { kode: Aktsomhet };
  aktsomhetInfo?: AktsomhetInfo;
}) => {
  const { aktsomhet, aktsomhetInfo } = vilkarResultatInfo;
  const andelSomTilbakekreves =
    aktsomhetInfo?.andelTilbakekreves !== undefined ? `${aktsomhetInfo.andelTilbakekreves}` : undefined;
  const aktsomhetData = aktsomhetInfo
    ? {
        [typeof aktsomhet === 'object' ? aktsomhet.kode : aktsomhet]: lagAktsomhetData(
          aktsomhetInfo,
          andelSomTilbakekreves,
        ),
      }
    : {};

  return {
    handletUaktsomhetGrad: typeof aktsomhet === 'object' ? aktsomhet.kode : aktsomhet,
    ...aktsomhetData,
  };
};

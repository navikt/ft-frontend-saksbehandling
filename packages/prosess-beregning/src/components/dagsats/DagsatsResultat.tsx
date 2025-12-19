import { FormattedMessage } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Table } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, formatCurrencyNoKr } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { Vilkårperiode } from '../../types/Vilkår';
import {
  erBruttoOver6G,
  erMidlertidigInaktiv,
  finnDagsats,
  finnTotalInntektEllerAvkortetInntekt,
} from './dagsatserUtils';
import type { TabellData } from './dagsatsTabell';

import styles from './dagsats.module.css';

const DEKNINGSGRAD_HUNDRE = 100;

interface Props {
  tabellData: TabellData;
  vilkårsperiode: Vilkårperiode;
  beregningsgrunnlag: Beregningsgrunnlag;
}

export const DagsatsResultat = ({ tabellData, vilkårsperiode, beregningsgrunnlag }: Props) => {
  const erIkkeOppfylt = vilkårsperiode.vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT;

  const harBruttoOver6G = erBruttoOver6G(tabellData.andeler, beregningsgrunnlag.grunnbeløp);
  const harDekningsgradUlik100 = beregningsgrunnlag.dekningsgrad !== DEKNINGSGRAD_HUNDRE;

  // TODO: Vurder en annen type varsel for ikke oppfylt vilkår, denne er bare kopiert fra forrige
  return (
    <tfoot>
      {erIkkeOppfylt ? (
        <Table.Row>
          <Table.DataCell colSpan={2}>
            <HStack gap="space-8">
              <XMarkOctagonFillIcon className={styles.avslåttIkon} />
              <BodyShort size="small" className={styles.avslåttIkon}>
                <FormattedMessage
                  id={
                    erMidlertidigInaktiv(beregningsgrunnlag)
                      ? 'Dagsats.VilkårIkkeOppfyltMidlertidigInaktiv'
                      : 'Dagsats.VilkårIkkeOppfylt'
                  }
                  values={{
                    grunnbeløp: formatCurrencyNoKr(beregningsgrunnlag.grunnbeløp),
                    b: BTag,
                  }}
                />
              </BodyShort>
            </HStack>
          </Table.DataCell>
        </Table.Row>
      ) : (
        <>
          {harBruttoOver6G && (
            // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
            <Table.Row>
              <Table.DataCell>
                <FormattedMessage id="Dagsats.Avkortet" />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BodyShort size="small">
                  <BeløpLabel beløp={tabellData.avkortetPrÅr} kr />
                </BodyShort>
              </Table.DataCell>
            </Table.Row>
          )}
          {harDekningsgradUlik100 && (
            // TODO: Legg inn et skille over denne slik at man skjønner at det er en sum
            <Table.Row>
              <Table.DataCell>
                <FormattedMessage id="Dagsats.Redusert" />
              </Table.DataCell>
              <Table.DataCell align="right">
                <BodyShort size="small">
                  <BeløpLabel beløp={tabellData.redusertPrÅr} kr />
                </BodyShort>
              </Table.DataCell>
            </Table.Row>
          )}
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage
                id="Dagsats.BeregnetDagsats"
                values={{
                  inntekt: (
                    <BeløpLabel
                      beløp={finnTotalInntektEllerAvkortetInntekt(tabellData, harBruttoOver6G, harDekningsgradUlik100)}
                      kr
                    />
                  ),
                }}
              />
            </Table.HeaderCell>
            <Table.HeaderCell align="right">
              <BodyShort size="small">
                <BeløpLabel beløp={finnDagsats(tabellData, beregningsgrunnlag.ytelsesspesifiktGrunnlag)} kr />
              </BodyShort>
            </Table.HeaderCell>
          </Table.Row>
        </>
      )}
    </tfoot>
  );
};

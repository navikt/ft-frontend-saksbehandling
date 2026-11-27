import type { RefusjonsperiodeDto } from '../../types/dataTypes';

export const erAvslåttEtterFrist = (periode: Pick<RefusjonsperiodeDto, 'utfall' | 'utfallÅrsak'>) =>
  periode.utfall === 'AVSLÅTT' && periode.utfallÅrsak === 'IKKE_INNENFOR_FRIST';

import type { RefusjonsandelDto } from '../../types/dataTypes';

export const refusjonsandelNøkkel = ({
  arbeidsgiverIdent,
  arbeidsforholdId,
  kilde,
}: Omit<RefusjonsandelDto, 'refusjonsperioder'>) => JSON.stringify([arbeidsgiverIdent, arbeidsforholdId, kilde]);

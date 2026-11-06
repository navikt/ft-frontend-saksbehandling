import type { RefusjonsandelDto } from '../../types/dataTypes';

export const refusjonsandelNøkkel = ({
  arbeidsgiverIdent,
  arbeidsgiverId,
  kilde,
}: Omit<RefusjonsandelDto, 'refusjonsperioder'>) => JSON.stringify([arbeidsgiverIdent, arbeidsgiverId, kilde]);

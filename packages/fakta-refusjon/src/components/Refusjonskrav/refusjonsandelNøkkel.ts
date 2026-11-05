import type { RefusjonsandelDto } from '../../types/dataTypes';

export const refusjonsandelNøkkel = ({ arbeidsgiverIdent, kilde }: Omit<RefusjonsandelDto, 'refusjonsperioder'>) =>
  JSON.stringify([arbeidsgiverIdent, kilde]);

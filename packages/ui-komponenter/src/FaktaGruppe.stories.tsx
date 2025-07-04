import { FaktaGruppe } from './FaktaGruppe';

export default {
  component: FaktaGruppe,
};

export const VisDefaultFaktagruppe = () => <FaktaGruppe>Dette er en tekst</FaktaGruppe>;

export const VisFaktagruppeMedTittel = () => <FaktaGruppe title="Dette er en tittel">Dette er en tekst</FaktaGruppe>;

export const VisFaktagruppeUtenKantlinje = () => (
  <FaktaGruppe title="Dette er en tittel" withoutBorder>
    Dette er en tekst
  </FaktaGruppe>
);

export const VisFaktagruppeMedMerknadFraBeslutter = () => (
  <FaktaGruppe title="Dette er en tittel" merknaderFraBeslutter={{ notAccepted: true }}>
    Dette er en tekst
  </FaktaGruppe>
);

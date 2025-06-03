import { AksjonspunktBox } from './AksjonspunktBox';

export default {
  component: AksjonspunktBox,
};

export const VisBoksDerAksjonspunktErÅpent = () => (
  <AksjonspunktBox erAksjonspunktApent erIkkeGodkjentAvBeslutter={false}>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

export const VisBoksDerAksjonspunktErLukket = () => (
  <AksjonspunktBox erAksjonspunktApent={false} erIkkeGodkjentAvBeslutter={false}>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

export const VisBoksDerAksjonspunktetIkkeErGodkjentAvBeslutter = () => (
  <AksjonspunktBox erAksjonspunktApent erIkkeGodkjentAvBeslutter>
    <div>Dette er en aksjonspunktboks</div>
  </AksjonspunktBox>
);

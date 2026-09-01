import { ArrowBox } from './ArrowBox';

export default {
  component: ArrowBox,
};

export const MedPilPåToppen = () => (
  <div style={{ width: '200px' }}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>
);

export const MedFlyttetPilPåToppen = () => (
  <div style={{ width: '200px' }}>
    <ArrowBox alignOffset={80}>Dette er en tekst</ArrowBox>
  </div>
);

export const MedPilTilVenstre = () => (
  <div style={{ marginLeft: '20px', width: '200px' }}>
    <ArrowBox alignLeft alignOffset={20}>
      Dette er en tekst
    </ArrowBox>
  </div>
);

import { useEffect, useState } from 'react';

interface Props {
  key?: string;
  storageArea?: Storage;
}

export const defaultStorageKey = 'storagetoggle';

/**
 * Egendefinert hook for å toggle funksjonalitet av og på  ved å sette boolske-flagg i browser-storage.
 *
 * @param {string} [key='storagetoggle'] - Nøkkelen som brukes til å lagre utviklingsmodus-flagget.
 * @param {Storage} [storageArea=localStorage] - Storage-området som brukes til å lagre utviklingsmodus-flagget,
 * dette vil være `localStorage` eller `sessionStorage`.
 * @returns {boolean} - Returnerer `true` hvis utviklingsmodus er aktivert, ellers `false`.
 *
 * Denne hooken lytter etter endringer for den spesifiserte storage-nøkkelen og oppdaterer tilstanden deretter.
 *
 * Eksempel på bruk:
 * ```jsx
 * const isDevMode = useStorageToggle({ key: 'devmode' });
 * if (isDevMode) {
 *   // Utfør handlinger som er spesifikke for utviklingsmodus
 * }
 */
export const useStorageToggle = ({ key = defaultStorageKey, storageArea = localStorage }: Props = {}): boolean => {
  const [toggleState, setToggleState] = useState(storageArea.getItem(key) === 'true');

  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key === key) setToggleState(event.newValue === 'true');
    };
    window.addEventListener('storage', handleStorageEvent);
    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  return toggleState;
};

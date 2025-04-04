interface OnePersonOutlineGrayProps {
  classname?: string;
}

/**
 * @deprecated Bruk heller ikona frå Aksel: https://aksel.nav.no/ikoner
 */
export const OnePersonOutlineGray = ({ classname }: OnePersonOutlineGrayProps) => (
  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      // eslint-disable-next-line max-len
      d="M29.4583 12.5417C29.4583 17.4892 25.4475 21.5 20.5 21.5C15.5524 21.5 11.5416 17.4892 11.5416 12.5417C11.5416 7.59412 15.5524 3.58333 20.5 3.58333C25.4475 3.58333 29.4583 7.59412 29.4583 12.5417ZM33.0416 12.5417C33.0416 19.4682 27.4265 25.0833 20.5 25.0833C13.5734 25.0833 7.95829 19.4682 7.95829 12.5417C7.95829 5.6151 13.5734 0 20.5 0C27.4265 0 33.0416 5.6151 33.0416 12.5417ZM20.5 30.4583C28.3026 30.4583 34.8323 35.819 36.489 43H40.2083C38.495 33.8262 30.3228 26.875 20.5 26.875C10.6771 26.875 2.50496 33.8262 0.791626 43H4.51089C6.16765 35.819 12.6973 30.4583 20.5 30.4583Z"
      fill="#262626"
    />
  </svg>
);

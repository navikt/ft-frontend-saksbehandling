import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import React from 'react';
import Clipboard from '../clipboard/Clipboard';
import Popover from '../popover/Popover';
import Card from './Card';
import GenderIcon, { GenderType } from './GenderIcon';
import Menu from './Menu';
import styles from './personCard.module.css';

export enum Gender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}

export interface PersonCardData {
  name: string;
  fodselsnummer: string;
  gender: GenderType;
  url?: string;
  isActive?: boolean;
  renderMenuContent?: () => React.ReactNode;
  renderLabelContent?: () => React.ReactNode;
  isChild?: boolean;
  childAge?: string | React.ReactNode;
}

const personCardCls = bemUtils('personCard');

const PersonCard = ({
  name,
  gender,
  fodselsnummer,
  isActive,
  url,
  renderMenuContent,
  renderLabelContent,
  isChild,
  childAge,
}: PersonCardData): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<any>(null);
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const onClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  const userDetails = (
    <BodyShort
      size="small"
      as="span"
      className={
        isActive
          ? `${styles.personCard__name} ${styles['personCard__name--active']}`
          : styles[personCardCls.element('name')]
      }
    >
      {name}
    </BodyShort>
  );

  return (
    <Card active={isActive}>
      <div className={styles[personCardCls.element('name-gender-container')]}>
        <GenderIcon gender={gender} isChild={isChild} />
        {url ? (
          <a
            className={styles[personCardCls.element('selector')]}
            aria-current={isActive}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userDetails}
          </a>
        ) : (
          <p className={`${styles.personCard__selector} ${styles['personCard__selector--inactive']}`}>{userDetails}</p>
        )}
      </div>
      {isChild ? (
        <div>
          {childAge && (
            <div className={styles[personCardCls.element('child-age')]}>
              <BodyShort size="small" as="span">
                ({childAge})
              </BodyShort>
            </div>
          )}
        </div>
      ) : (
        <>
          <BodyShort size="small" as="span">
            /
          </BodyShort>
          <div className={styles[personCardCls.element('container')]}>
            <Clipboard buttonLabel={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
              <BodyShort size="small">{fodselsnummer}</BodyShort>
            </Clipboard>

            {!!renderMenuContent && (
              <div ref={menuRef}>
                <Popover
                  popperIsVisible={isMenuOpen}
                  renderArrowElement
                  customPopperStyles={{ top: '6px', left: '-1px', zIndex: 2 }}
                  popperProps={{
                    children: (): React.ReactNode =>
                      renderMenuContent && (
                        <div className={styles[personCardCls.element('menu-container')]}>{renderMenuContent()}</div>
                      ),
                    placement: 'bottom-start',
                  }}
                  referenceProps={{
                    children: ({ ref }): React.ReactNode => (
                      <div className={styles[personCardCls.element('menu-button-container')]} ref={ref}>
                        <Menu onClick={onClick} isOpen={isMenuOpen} />
                      </div>
                    ),
                  }}
                  arrowProps={{ style: { left: '8px' } }}
                />
              </div>
            )}
            {renderLabelContent && (
              <div className={styles[personCardCls.element('labelContainer')]}>{renderLabelContent()}</div>
            )}
          </div>
        </>
      )}
    </Card>
  );
};
export default PersonCard;

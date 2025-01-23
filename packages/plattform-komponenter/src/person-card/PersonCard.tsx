import React from 'react';
import { BodyShort, Button, CopyButton, HStack, Link, Popover, Tooltip } from '@navikt/ds-react';
import { MenuElipsisHorizontalCircleIcon } from '@navikt/aksel-icons';

import { VisittKort } from './VisittKort';
import { GenderIcon } from './GenderIcon';

export enum Gender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}

export interface Props {
  name: string;
  fodselsnummer: string;
  gender: Gender;
  url?: string;
  isActive?: boolean;
  renderMenuContent?: () => React.ReactNode;
  renderLabelContent?: () => React.ReactNode;
  isChild?: boolean;
  childAge?: string | React.ReactNode;
}

function formaterFnr(fnr: string) {
  return fnr.slice(0, 6) + ' ' + fnr.slice(6);
}

export const PersonCard = ({
  name,
  gender,
  fodselsnummer,
  isActive,
  url,
  renderMenuContent,
  renderLabelContent,
  isChild,
  childAge,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLButtonElement>(null);
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

  return (
    <VisittKort active={isActive} icon={<GenderIcon gender={gender} isChild={isChild} />}>
      {url ? (
        <BodyShort
          as={Link}
          variant="neutral"
          aria-current={isActive}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          weight="semibold"
          truncate
          style={{ display: 'block', minWidth: '80px' }}
        >
          {name}
        </BodyShort>
      ) : (
        <BodyShort weight="semibold" truncate style={{ minWidth: '80px' }}>
          {name}
        </BodyShort>
      )}
      {isChild ? (
        <>{childAge && <BodyShort>({childAge})</BodyShort>}</>
      ) : (
        <>
          <HStack align="center" wrap={false} gap="2">
            <BodyShort textColor="subtle" style={{ whiteSpace: 'nowrap' }}>
              {formaterFnr(fodselsnummer)}
            </BodyShort>
            <Tooltip content={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
              <CopyButton copyText={fodselsnummer} style={{ padding: 0 }} />
            </Tooltip>

            {!!renderMenuContent && (
              <>
                <Button
                  variant="tertiary-neutral"
                  icon={<MenuElipsisHorizontalCircleIcon />}
                  ref={menuRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  style={{ padding: 0 }}
                />
                <Popover
                  anchorEl={menuRef.current}
                  onClose={() => setIsMenuOpen(false)}
                  open={isMenuOpen}
                  style={{ top: '6px', left: '-1px', zIndex: 2 }}
                  placement="bottom-start"
                >
                  <Popover.Content>{renderMenuContent()}</Popover.Content>
                </Popover>
              </>
            )}
            {renderLabelContent && renderLabelContent()}
          </HStack>
        </>
      )}
    </VisittKort>
  );
};

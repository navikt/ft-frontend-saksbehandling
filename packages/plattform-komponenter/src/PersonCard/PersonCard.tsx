import React from 'react';

import { MenuElipsisHorizontalCircleIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, HStack, Link, Popover, Tooltip } from '@navikt/ds-react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Gender } from './Gender';
import { GenderIcon } from './GenderIcon';
import { VisittKort } from './VisittKort';

dayjs.extend(customParseFormat);

interface Props {
  name: string;
  fodselsnummer: string;
  gender: Gender;
  url?: string;
  isActive?: boolean;
  renderMenuContent?: () => React.ReactNode;
  renderLabelContent?: () => React.ReactNode;
  isChild?: boolean;
  childAge?: string | React.ReactNode;
  showPersonAge?: boolean;
  age?: number;
}

function formaterFnr(fnr: string) {
  return fnr.slice(0, 6) + ' ' + fnr.slice(6);
}

const getPersonAge = (fnr: string, age?: number) => {
  let alder = age;
  if (alder == undefined) {
    const fnrDate = dayjs(`${fnr.substring(0, 2)}-${fnr.substring(2, 4)}-${fnr.substring(4, 6)}`, 'DD-MM-YY');
    const adjustedDate = fnrDate.year() > dayjs().year() ? fnrDate.subtract(100, 'year') : fnrDate;
    alder = dayjs().diff(adjustedDate, 'year');
  }
  return ` (${new Intl.NumberFormat('nb-NO', { style: 'unit', unit: 'year' }).format(alder)})`;
};

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
  showPersonAge,
  age,
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

  const personAge = showPersonAge ? getPersonAge(fodselsnummer, age) : '';
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
          {personAge}
        </BodyShort>
      ) : (
        <BodyShort weight="semibold" truncate style={{ minWidth: '80px' }}>
          {name}
          {personAge}
        </BodyShort>
      )}
      {isChild ? (
        <>{childAge && <BodyShort>({childAge})</BodyShort>}</>
      ) : (
        <>
          <HStack align="center" wrap={false} gap="space-8">
            <BodyShort textColor="subtle" style={{ whiteSpace: 'nowrap' }}>
              {formaterFnr(fodselsnummer)}
            </BodyShort>
            <Tooltip content={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
              <CopyButton copyText={fodselsnummer} style={{ padding: 0 }} />
            </Tooltip>

            {!!renderMenuContent && (
              <>
                <Button
                  data-color="neutral"
                  variant="tertiary"
                  icon={<MenuElipsisHorizontalCircleIcon />}
                  ref={menuRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  style={{ padding: 0 }}
                />
                <Popover
                  /* eslint-disable-next-line react-hooks/refs */
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

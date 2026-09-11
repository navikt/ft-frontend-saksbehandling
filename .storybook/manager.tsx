import { SidebarIcon } from '@storybook/icons';
import { IconButton } from 'storybook/internal/components';
import { addons, types, useGlobals } from 'storybook/manager-api';

const ADDON_ID = 'panelramme';
const TOOL_ID = `${ADDON_ID}/tool`;

/**
 * Enslig toggle-knapp i verktøylinjen som skrur app-rammen av/på. Rammen er av når knappen
 * ikke er aktiv, og på når den er trykket inn.
 */
const PanelrammeToggle = () => {
  const [globals, updateGlobals] = useGlobals();
  const på = globals['panelramme'] === 'på';

  return (
    <IconButton
      key={TOOL_ID}
      active={på}
      title="Vis app-ramme rundt panelet"
      onClick={() => updateGlobals({ panelramme: på ? 'av' : 'på' })}
    >
      <SidebarIcon />
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Vis app-ramme',
    match: ({ tabId }) => !tabId,
    render: () => <PanelrammeToggle />,
  });
});

import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { reducer as formReducer, reduxForm } from 'redux-form';
import { mount } from 'enzyme';
import RadioGroupField from './RadioGroupField';
import RadioOption from './RadioOption';

const MockForm = reduxForm({ form: 'mock' })(({ handleSubmit, children }) => (
  <form onSubmit={handleSubmit}>{children}</form>
));
const mountFieldInForm = field =>
  mount(
    <Provider store={createStore(combineReducers({ form: formReducer }))}>
      <IntlProvider locale="nb-NO" messages={{}}>
        <MockForm>{field}</MockForm>
      </IntlProvider>
    </Provider>,
  );

describe('<RadioGroupField>', () => {
  it('Skal rendre radio inputs', () => {
    const wrapper = mountFieldInForm(
      <RadioGroupField label="label" columns={4} name="name">
        <RadioOption label="label" value />
        <RadioOption label="label" value={false} />
      </RadioGroupField>,
    );
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('input[type="radio"]')).toHaveLength(2);
  });

  it('Skal rendre med fullbredde', () => {
    const wrapper = mountFieldInForm(
      <RadioGroupField label="label" bredde="fullbredde" name="name">
        <RadioOption label="label" value />
        <RadioOption label="label" value={false} />
      </RadioGroupField>,
    );
    expect(wrapper.find('[className="skjemagruppe input--fullbredde radioGroup"]')).toHaveLength(1);
  });
});

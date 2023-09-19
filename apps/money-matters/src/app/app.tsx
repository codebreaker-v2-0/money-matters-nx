import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import { LoginController } from '@org/login-lib';
import { MoneyMattersStoresProvider } from '@org/shared';

export function App() {
  return (
    <MoneyMattersStoresProvider>
      <I18nextProvider i18n={i18n}>
        <LoginController />
      </I18nextProvider>
    </MoneyMattersStoresProvider>
  );
}

export default App;

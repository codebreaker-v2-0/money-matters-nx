import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import { LoginController } from '@org/login-lib';

export function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LoginController />
    </I18nextProvider>
  );
}

export default App;

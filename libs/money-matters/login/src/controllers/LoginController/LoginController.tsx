import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserStore } from '@org/shared';
import { APIHeaders } from '@org/shared';
import Login from '../../components/Login/Login';

const LoginController: React.FC = () => {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = 'https://bursting-gelding-24.hasura.app/api/rest/get-user-id';
    const options = {
      method: 'POST',
      headers: {
        ...APIHeaders,
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      return;
    }

    const fetchedData = await response.json();
    const data = fetchedData.get_user_id;

    if (data.length === 0) {
      setShowError(true);
      setErrorMsg('*User Credentials Incorrect');
    } else {
      userStore.userId = JSON.stringify(data[0]['id']);
      setShowError(false);
      navigate('/');
    }
  };

  useEffect(() => {
    if (userStore.userId) {
      navigate('/');
    }
  }, []);

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      showError={showError}
      errorMsg={errorMsg}
      onLoginHandler={onLoginHandler}
    />
  );
};

export default LoginController;

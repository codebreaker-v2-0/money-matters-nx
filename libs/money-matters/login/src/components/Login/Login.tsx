import { BiHide, BiShow } from 'react-icons/bi';
import { FaLock, FaUserAlt, FaUserAstronaut } from 'react-icons/fa';

interface LoginProps {
  email: string;
  password: string;
  showPassword: boolean;
  showError: boolean;
  errorMsg: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setShowPassword: (fn: (value: boolean) => boolean) => void;
  onLoginHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Login = (props: LoginProps) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    onLoginHandler,
    showError,
    errorMsg
  } = props;

  return (
    <div className="h-screen p-4 flex justify-center items-center bg-gradient-to-br from-loginGradient1 to-loginGradient2">
      {/* Card */}
      <form
        className="md:w-full max-w-[400px] relative pt-[64px] pb-8 px-8 flex flex-col gap-4 bg-lightColor shadow-lg rounded-[24px]"
        onSubmit={onLoginHandler}
      >
        {/* User Logo */}
        <FaUserAstronaut
          className="p-4 text-[96px] text-lightColor rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-loginPrimaryColor"
        />

        {/* Nxt Watch Logo */}
        <img
          className="w-[250px] md:w-[300px] self-center mb-4"
          alt="nxt-watch-logo"
          src="https://res.cloudinary.com/dojcknl66/image/upload/v1690631981/logo-lg_bjjl2m.png"
        />

        {/* INPUT: Email Id  */}
        <div className="flex rounded overflow-hidden border boder-solid border-loginPrimaryColor">
          <label
            className="flex justify-center items-center p-3 text-lightColor text-xl bg-loginPrimaryColor"
            htmlFor="email"
          >
            <FaUserAlt />
          </label>
          <input
            required
            autoFocus
            className="px-2 text-base text-inputColor flex-1 bg-loginPrimaryColorLight autofill:!bg-white placeholder:text-placeholderColor"
            id="email"
            name="email"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* INPUT: Password */}
        <div className="flex rounded overflow-hidden border boder-solid border-loginPrimaryColor">
          <label
            className="flex justify-center items-center p-3 text-lightColor text-xl bg-loginPrimaryColor"
            htmlFor="password"
          >
            <FaLock />
          </label>
          <input
            required
            className="px-2 text-base text-inputColor flex-1 bg-loginPrimaryColorLight placeholder:text-placeholderColor"
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="button"
            className="pe-2 bg-loginPrimaryColorLight"
            onClick={() => {
              setShowPassword((prevState: boolean) => !prevState);
            }}
            aria-label="toggle show password"
          >
            {showPassword ? <BiHide /> : <BiShow />}
          </button>
        </div>

        <p
          id="errorMsg"
          className="text-errorColor text-sm"
          aria-live="assertive"
        >
          {showError && errorMsg}
        </p>

        {/* BUTTON: Login */}
        <button
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-xl w-4/5 p-3 rounded-b-[24px] tracking-[5px] font-black text-loginSecondaryColor bg-gradient-to-b from-transparent from-0% to-lightColor to-20%"
          type="submit"
          aria-label="submit login details"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;

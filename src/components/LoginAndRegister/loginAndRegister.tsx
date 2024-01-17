import { ChangeEvent, useState } from "react";
import axios from "axios";
import WOMAN from "./Img/WOMAN.webp";
import VISIBLE from "./Icons/VISIBLE.png";
import INVISIBLE from "./Icons/INVISIBLE.png";
import GOOGLE from "./Icons/GOOGLE.svg";
import styles from "./loginAndRegister.module.css";
import {
  loginDenied,
  loginError,
  loginPasswordIncorrect,
  loginSuccess,
  loginUserNotFound,
  RegisterSuccess,
  RegisterUserRegistered,
  RegisterError,
} from "../../assets/NotiStack";

export default function LoginAndRegister() {
  // Indica si es iniciar sesión o registrarse
  const [isSignIn, setIsSignIn] = useState(true);

  // Indica si se muestra la contrasena
  const [showPassword, setShowPassword] = useState(false);

  // Obtiene los valores de los inputs del Login
  const [valueLogin, setValueLogin] = useState({
    email: "",
    password: "",
  });

  // Obtiene los valores de los inputs del Register
  const [valueRegister, setValueRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Cambia los valores de los inputs del Login
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    // Obtiene el valor del input y el name
    const { value, name } = e.target;
    const uptadeValueLogin = {
      ...valueLogin,
      [name]: value,
    };
    // Actualiza el state del Login
    setValueLogin(uptadeValueLogin);
  };

  // Cambia el type de la contrasena
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Envia los datos del Login
  const handleSubmitLogin = async () => {
    try {
      const endpoint = "http://localhost:3000/login";
      const { status } = await axios.post(endpoint, valueLogin);

      if (status === 200) {
        return loginSuccess();
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;

        switch (status) {
          case 404:
            loginUserNotFound();
            break;
          case 400:
            loginError();
            break;
          case 401:
            loginPasswordIncorrect();
            break;
          case 500:
            loginDenied();
            break;
          default:
            break;
        }
      }
    }
  };

  // Cambia los valores de los inputs del Register
  const handleChangeValueRegister = (e: ChangeEvent<HTMLInputElement>) => {
    // Obtiene el valor del input y el name
    const { value, name } = e.target;
    const uptadeValueRegister = {
      ...valueRegister,
      [name]: value,
    };
    // Actualiza el state del Register
    setValueRegister(uptadeValueRegister);
  };

  const handleSubmitRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const endpoint = "http://localhost:3000/register";
      const { data, status } = await axios.post(endpoint, valueRegister);
      console.log(data);
      if (status === 201) {
        return RegisterSuccess();
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;

        switch (status) {
          case 401:
            RegisterError();
            break;
          case 400:
            RegisterUserRegistered();
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideLeft}>
        <img src={WOMAN} alt="WOMAN..." draggable="false" />
      </div>
      <div className={styles.sideRigth}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Entrar a ChiCouture</h2>
          </div>
          <div className={styles.buttons}>
            <button
              className={isSignIn ? styles.select : ""}
              onClick={() => setIsSignIn(true)}
            >
              INICIA SESIÓN
            </button>
            <button
              className={!isSignIn ? styles.select : ""}
              onClick={() => setIsSignIn(false)}
            >
              REGÍSTRATE
            </button>
          </div>
          {isSignIn ? (
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Dirección de correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={valueLogin.email}
                  onChange={handleChangeValue}
                  autoComplete="email"
                  required
                />
                <label>Contraseña</label>
                <div className={styles.passwordButton}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={valueLogin.password}
                    onChange={handleChangeValue}
                    autoComplete="current-password"
                    required
                  />
                  <button type="button" onClick={togglePasswordVisibility}>
                    <img
                      src={showPassword ? VISIBLE : INVISIBLE}
                      alt={showPassword ? "VISIBLE" : "INVISIBLE"}
                    />
                  </button>
                </div>
                <p className={styles.textPassword}>
                  ¿Se te ha olvido tu contraseña?
                </p>
                <button
                  type="button"
                  className={styles.buttonLogin}
                  onClick={handleSubmitLogin}
                >
                  Iniciar sesión
                </button>
                <p className={styles.text}>O</p>
                <button type="button" className={styles.buttonLoginGoogle}>
                  <>
                    <img src={GOOGLE} alt="Google..." draggable="false" />
                    <p>Google</p>
                  </>
                </button>
                <p
                  className={styles.textPassword2}
                  onClick={() => setIsSignIn(false)}
                >
                  ¿Es tu primera vez en ChiCouture? REGÍSTRATE!
                </p>
              </div>
            </form>
          ) : (
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={valueRegister.name}
                  onChange={handleChangeValueRegister}
                  autoComplete="name"
                  required
                />
                <label>Dirección de correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={valueRegister.email}
                  onChange={handleChangeValueRegister}
                  autoComplete="email"
                  required
                />
                <label>Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={valueRegister.password}
                  onChange={handleChangeValueRegister}
                  autoComplete="current-password"
                  required
                />
              </div>
              <p className={styles.textPassword}>
                Al registrate estás aceptando nuestras condiciones de uso y
                privacidad.
              </p>
              <button
                className={styles.buttonLogin}
                onClick={handleSubmitRegister}
              >
                Registrarte
              </button>
              <p className={styles.text}>O</p>
              <button type="button" className={styles.buttonLoginGoogle}>
                <>
                  <img src={GOOGLE} alt="Google..." draggable="false" />
                  <p>Google</p>
                </>
              </button>
              <p
                className={styles.textPassword2}
                onClick={() => setIsSignIn(true)}
              >
                ¿Ya tienes cuenta en ChiCouture? INICIA SESIÓN!
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

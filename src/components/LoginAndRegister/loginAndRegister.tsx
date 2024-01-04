import { ChangeEvent, useEffect, useState } from "react";
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
    lastName: "",
    age: "",
    country: "",
    email: "",
    password: "",
    tel: "",
  });

  // Guarda los paises en el estado
  const [allCountrys, setAllCountrys] = useState([]);

  // Obtiene todos los paises
  useEffect(() => {
    const getCountrys = async () => {
      const endpoint = "https://restcountries.com/v3.1/all";
      const { data } = await axios.get(endpoint);
      setAllCountrys(data);
    };
    getCountrys();
  }, []);

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
      const { data, status } = await axios.post(endpoint, valueLogin);
      console.log(data);
      // Si se inicia sesion correctamente
      if (status === 200) {
        // Alerta de inicio de sesion
        loginSuccess();
      }
    } catch (error: any) {
      // Si no se inicia sesion
      if (error.response) {
        const { status } = error.response;
        if (status === 404) {
          // Alerta de usuario no encontrado
          loginUserNotFound();
        } else if (status === 400) {
          // Alerta de credenciales faltante
          loginError();
        } else if (status === 401) {
          // Alerta de contraseña incorrectas
          loginPasswordIncorrect();
        } else if (status === 500) {
          // Alerta de servidor no disponible
          loginDenied();
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

  const handleSubmitRegister = async () => {
    try {
      const endpoint = "http://localhost:3000/register";
      const { data, status } = await axios.post(endpoint, valueRegister);
      console.log(data);

    } catch (error: any) {
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          // Alerta de servidor no disponible
          loginDenied();
        }
      }
    }
  }

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
            <form className={styles.form2}>
              <p>Ingresa tus datos</p>
              <div className={styles.form2_1}>
                <div className={styles.formGroup2}>
                  <div className={styles.labelAndInput2}>
                    <input
                      type="text"
                      name="name"
                      value={valueRegister.name}
                      onChange={handleChangeValueRegister}
                      placeholder="Nombre..."
                      required
                    />
                  </div>
                  <div className={styles.labelAndInput2}>
                    <input
                      type="text"
                      name="lastName"
                      value={valueRegister.lastName}
                      onChange={handleChangeValueRegister}
                      placeholder="Apellido..."
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup2}>
                <div className={styles.labelAndInput2}>
                  <input
                    type="number"
                    name="age"
                    value={valueRegister.age}
                    onChange={handleChangeValueRegister}
                    min={18}
                    max={99}
                    placeholder="Edad..."
                    required
                  />
                </div>
                <div className={styles.labelAndInput2}>
                  <input
                    type="number"
                    name="tel"
                    value={valueRegister.tel}
                    onChange={handleChangeValueRegister}
                    placeholder="Telefóno..."
                    required
                  />
                </div>
                <div className={styles.labelAndInput2}>
                  <select
                    name="country"
                    value={valueRegister.country}
                    onChange={handleChangeValueRegister}
                    placeholder="Pais..."
                  >
                    {allCountrys &&
                      allCountrys.map((country: any) => (
                        <option
                          key={country.name.common}
                          value={country.name.common}
                        >
                          {country.name.common}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className={styles.formGroup2}>
                <div className={styles.labelAndInput2}>
                  <input
                    type="email"
                    name="email"
                    value={valueRegister.email}
                    onChange={handleChangeValueRegister}
                    placeholder="Correo electrónico..."
                    required
                  />
                </div>
                <div className={styles.labelAndInput2}>
                  <input
                    type="password"
                    name="password"
                    value={valueRegister.password}
                    placeholder="Contraseña..."
                    onChange={handleChangeValueRegister}
                  />
                </div>
              </div>
              <button className={styles.buttonLogin2} onClick={handleSubmitRegister}>Registrarte</button>
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

import { ChangeEvent, useState } from "react";
import WOMAN from "./Img/WOMAN.webp";
import VISIBLE from "./Icons/VISIBLE.png";
import INVISIBLE from "./Icons/INVISIBLE.png";
import styles from "./loginAndRegister.module.css";

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

  const [valueRegister, setValueRegister] = useState("");

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                  required
                />
                <label>Contraseña</label>
                <div>
                  <>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={valueLogin.password}
                      onChange={handleChangeValue}
                      required
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      <img
                        src={
                          showPassword
                            ? VISIBLE
                            : INVISIBLE
                        }
                        alt={showPassword ? "VISIBLE" : "INVISIBLE"}
                      />
                    </button>
                  </>
                </div>
              </div>
            </form>
          ) : (
            <form className={styles.form}>
              <div>
                <h1>Hola</h1>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

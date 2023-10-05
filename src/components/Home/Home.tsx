import styles from "./Home.module.css";
import FirstImg from "./Img/1.webp";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.land}>
          <div className={styles.sideLeft}>
            <div className={styles.textLeft}>
              <h1>
                <span>REDEFINIENDO EL LUJO:</span>
                <br />
                TU DESTINO PARA LA ROPA DE ALTA GAMA
              </h1>
              <p>
                Bienvenido al mundo de la <b>elegancia sin igual</b>. En nuestra
                empresa de ropa de lujo, cada prenda es una obra maestra, creada
                con atención meticulosa a los detalles y los materiales más
                finos. <br />
                Descubre una selección cuidadosamente curada de prendas que son
                un testimonio del lujo auténtico y la artesanía excepcional.
              </p>
              <Link to={"/shooping"}>
                <button>Descubre más</button>
              </Link>
            </div>
          </div>
          <div className={styles.sideRigth}>
            <img className={styles.img1} src={FirstImg} alt="FirsImg..." />
          </div>
        </div>
        <div className={styles.lifeL}>
          <div className={styles.line}></div>
          <h2>VIVE LA VIDA CON LUJOS</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.textU}>
          <h2>
            LA MODA COMO TÚ <br />
            QUIERES QUE SEA
          </h2>
          <p>
            ¡Estamos revolucionando el mundo de la moda con inteligencia en
            ChicCouture! Pide todo lo que quieras y necesites para tu look
            perfecto, encuéntralo en pocos clics y las 24 horas del día, con
            servicio de entrega nacional. ChicCouture es el mayor e-commerce de
            moda y estilo de vida en Latinoamérica, contamos con productos
            divididos en 5 categorías: ropa, zapatos, accesorios, deportes y
            belleza. <br /> <br /><b>¡Ahora es el momento de refrescar tu look! Regístrate y
            descubre el mundo de la moda con ChicCouture.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

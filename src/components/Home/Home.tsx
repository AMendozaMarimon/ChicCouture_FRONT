import styles from './Home.module.css';
import FirstImg from './Img/1.webp';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <div className={styles.land}>
                    <div className={styles.sideLeft}>
                        <div className={styles.textLeft}>
                            <h1><span>REDEFINIENDO EL LUJO:</span><br />TU DESTINO PARA LA ROPA DE ALTA GAMA</h1>
                            <p>Bienvenido al mundo de la <b>elegancia sin igual</b>. En nuestra empresa de ropa de lujo, cada prenda es una obra maestra, creada con atención meticulosa a los detalles y los materiales más finos. <br />Descubre una selección cuidadosamente curada de prendas que son un testimonio del lujo auténtico y la artesanía excepcional. </p>
                            <Link to={'/shooping'}>
                                <button>Descubre más</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.sideRigth}>
                        <img className={styles.img1} src={FirstImg} alt="FirsImg..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
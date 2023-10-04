import Fav from "./Img/Fav.png";
import User from "./Img/User.png";
import Bag from "./Img/Bag.png";
import Logo from "./Img/LOGOCC.png";
import Menu from "./Img/MENU.svg";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        const handleRealize = () => {
            //Cuando el tamaño de la pantalla es menor que 768 se cambia el estado a TRUE
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleRealize);
        handleRealize();

        return () => {
            window.removeEventListener("resize", handleRealize);
        }
    }, []);

    const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Obtengo el valor del input para futuras solicitudes
        const { value } = e.target;
        setValue(value);
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.containerAD}>
                <p>Proyecto hecho por: <b>Aimar Mendoza ❤️</b></p>
            </div>
            <div className={styles.container}>
                <div>
                    {
                        isMobile ? (    
                        //Si la relación de aspecto es isMobile('768px') entonces mostrará el boton de MENÚ
                            <>
                                <div className={styles.divMenu} >
                                    <img className={styles.menu}
                                        src={Menu}
                                        alt="Menú..."
                                        draggable="false" />
                                </div>
                            </>
                        ) : (
                            //Si no es isMobile muestra los botones por defectos
                            <div className={styles.btnUl}>
                                <ul>
                                    <li>Hombre</li>
                                    <li>Mujer</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className={styles.divLogo}>
                    <img className={styles.logo}
                        draggable="false"
                        src={Logo}
                        alt="Logo.." />
                </div>
                <div>
                    {
                        isMobile ? (
                        //Si la relación de aspecto es isMobile('768px') entonces mostrará solo un botón
                            <div className={styles.btn}>
                                <button><img
                                    src={Fav}
                                    alt="Favorite..."
                                    draggable="false"
                                    title="Favorites" /></button>
                            </div>
                        ) : (
                            //Si no es isMobile mostrará todos los botonesS
                            <div className={styles.btn}>
                                <button><img
                                    src={User}
                                    alt="User..."
                                    draggable="false"
                                    title="User" /></button>
                                <button><img
                                    src={Fav}
                                    alt="Favorite..."
                                    draggable="false"
                                    title="Favorites" /></button>
                                <button><img
                                    src={Bag}
                                    alt="Bag..."
                                    draggable="false"
                                    title="Shopping Bag" /></button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.container2}>
                <div className={styles.btnUl2}>
                    <ul>
                        <li>Novedades</li>
                        <li>Marcas</li>
                        <li>Ropa</li>
                        <li>Zapatos</li>
                        <li>Bolsas</li>
                        <li>Joyas</li>
                    </ul>
                </div>
                <div>
                    <input className={styles.input} onChange={handleValueInput}
                        type="search"
                        placeholder="Buscar..."
                        value={value} />
                </div>
            </div>
        </div>
    )
}
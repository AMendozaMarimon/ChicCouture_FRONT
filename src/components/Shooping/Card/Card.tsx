import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../../../Redux/reducer";
import { addProdNoti, removeProdNoti } from "../../../assets/NotiStack";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import Fav from "./Img/Fav.png";
import notFav from "./Img/notFav.png";
import { addFav, removeFav } from "../../../Redux/action";

interface CardsProps {
  id: string;
  name: string;
  image: string[];
  price: number;
  brand: string;
}

export default function Card(props: CardsProps) {
  const { id, name, image, price, brand } = props;
  const [isFav, setIsFav] = useState<boolean>(false);
  const Favs = useSelector((state: productReducer) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    Favs.forEach((fav: CardsProps) => {
      fav.id === props.id ? setIsFav(true) : []; //Verifica si la Cards ya es Fav
    });
  }, [Favs, props.id]);

  const handleFavorites = async () => {
    const isProductInFavorites = Favs.some(
      (fav: CardsProps) => fav.id === props.id
    );

    if (isProductInFavorites) {
      await dispatch(removeFav({ id: props.id }));
      setIsFav(false);
      removeProdNoti(); //Alerta de aviso de eliminación del producto
    } else {
      await dispatch(addFav(props));
      addProdNoti(); //Alerta de aviso del añadido del producto
    }
  };

  //Actualiza los números a formato
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  //Siempre mostrará la primera imagen por default
  const [currentImg, setCurrentImg] = useState(image[0]);

  //Se cambia la imagen cuando se pasa el mouse por encima
  const handleMouseEnter = () => {
    setCurrentImg(image[1]);
  };

  //Regresa a la imagen por default cuando el mouse sale
  const handleMouseLeave = () => {
    setCurrentImg(image[0]);
  };

  return (
    <div className={styles.containerP}>
      <div className={styles.containerCard}>
        <div className={styles.imageContainer}>
          <Link to={`/shooping/${id}`} className={styles.link}>
            <img
              className={styles.img}
              src={currentImg} //Utiliza la imagen actual
              alt={name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
          <button className={styles.fav} onClick={handleFavorites}>
            {isFav ? (
              <img src={Fav} alt="Fav..." />
            ) : (
              <img src={notFav} alt="notFav" />
            )}
          </button>
        </div>
        <div className={styles.text}>
          <Link to={`/shooping/${id}`} className={styles.link}>
            <p className={styles.brand}>{brand}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>$ {formatPrice(price)}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

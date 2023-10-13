import axios from "axios";
import { useState, useEffect } from "react";
import { productReducer } from "../../../Redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { addFav, removeFav } from "../../Redux/action";
import { addProdNoti, removeProdNoti } from "../../assets/NotiStack";
import Fav from "./Img/Fav.png";
import notFav from "./Img/notFav.png";

interface Product {
  id: string;
  name: string;
  image: string[];
  price: number;
  composition: string;
  description: string;
  brandName: string;
}

interface CardsProps {
  id: string;
  name: string;
  image: string[];
  price: number;
  brand: string;
}

export default function Detail() {
  const { id } = useParams<string>(); //Obtengo el ID del producto
  const Favs = useSelector((state: productReducer) => state.favorites);

  const [isFav, setIsFav] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(undefined); //Guardo la información del producto

  const dispatch = useDispatch();

  useEffect(() => {
    //Solicito los datos del producto mediante su ID
    const fetchProduct = async () => {
      try {
        const endpoint = `http://localhost:3000/products/${id}`;
        const { data } = await axios.get<Product>(endpoint);
        return setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    Favs.forEach((fav: CardsProps) => {
      fav.id === id ? setIsFav(true) : []; //Verifica si la Cards ya es Fav
    });
  }, [Favs, id]);

  const handleFavorites = async () => {
    const isProductInFavorites = Favs.some((fav: CardsProps) => fav.id === id);

    if (isProductInFavorites && id) {
      await dispatch(removeFav({ id: id }));
      setIsFav(false);
      removeProdNoti(); //Alerta de aviso de eliminación del producto
    } else {
      if (product) {
        const productProps = {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          brand: product.brandName,
        }
        await dispatch(addFav(productProps));
      }
      addProdNoti(); //Alerta de aviso del añadido del producto
    }
  };

  console.log(product);

  //Actualiza los números a formato
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={styles.containerP}>
      <div className={styles.photosAndName}>
        <div className={styles.photos}>
          {product &&
            product.image.map((img, index) => (
              <img key={index} src={img} alt={img} />
            ))}
        </div>
        <div className={styles.titles}>
          <p className={styles.brand}>{product && product.brandName}</p>
          <p className={styles.name}>{product && product.name}</p>
          <p className={styles.price}>
            $ {product && formatPrice(product.price)}
          </p>
          <p className={styles.imp}>
            Impuestos aduaneros incluidos. <br /> Precio sujeto a cambio.
          </p>
          <div className={styles.containerButtons}>
            <button>
              <p>Añadir a la bolsa</p>
            </button>
            <button onClick={handleFavorites}>
              {isFav ? (
                <>
                  <p>Añadir a Favoritos</p>
                  <img src={Fav} alt="Fav..." />
                </>
              ) : (
                <>
                  <p>Añadir a Favoritos</p>
                  <img src={notFav} alt="notFav" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

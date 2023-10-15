import axios from "axios";
import { useState, useEffect } from "react";
import { productReducer } from "../../../Redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { addBagS, addFav, removeFav } from "../../Redux/action";
import {
  addProdBag,
  addProdNoti,
  productInBagNoti,
  removeProdNoti,
} from "../../assets/NotiStack";
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
  const BagS = useSelector((state: productReducer) => state.bag);
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(undefined); //Guardo la información del producto
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleRealize = () => {
      //Cuando el tamaño de la pantalla es menor que 768 se cambia el estado a TRUE
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleRealize);
    handleRealize();

    return () => {
      window.removeEventListener("resize", handleRealize);
    };
  }, []);

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
        };
        await dispatch(addFav(productProps));
      }
      addProdNoti(); //Alerta de aviso del añadido del producto
    }
  };

  //Actualiza los números a formato
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  //Configuración del Slider
  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBagShooping = async () => {
    const isProductInBagS = BagS.some((bag: CardsProps) => bag.id === id);

    if (isProductInBagS && id) {
      productInBagNoti(); //Alerta de aviso que el producto ya se encuentra en la bolsa
    } else {
      if (product) {
        const productProps = {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          brand: product.brandName,
        };
        await dispatch(addBagS(productProps));
        addProdBag(); //Alerta de aviso del añadido del producto
      }
    }
  };

  return (
    <div className={styles.containerP}>
      <div className={styles.photosAndName}>
        {isMobile ? (
          <Slider {...sliderSetting}>
            {product &&
              product.image.map((img, index) => (
                <div className={styles.slick} key={index}>
                  <img src={img} alt={img} />
                </div>
              ))}
          </Slider>
        ) : (
          <div className={styles.photos}>
            {product &&
              product.image.map((img, index) => (
                <img key={index} src={img} alt={img} />
              ))}
          </div>
        )}
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
            <button onClick={handleBagShooping}>
              <p>Añadir a la bolsa</p>
            </button>
            <button onClick={handleFavorites}>
              {isFav ? ( //Dependiendo si ya es Favorito o no, mostrará un boton diferente
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
          <p className={styles.delivery}>ENTREGA INMEDIATA</p>
          <p className={styles.pay}>
            *Utilizo MercadoPago Sandbox para simular una compra y probar la
            integración de pagos en mi proyecto antes de su finalización
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.details}>DETALLES DEL PRODUCTO</p>
          <div className={styles.info2}>
            <div className={styles.slideLeft}>
              <div className={styles.infoP}>
                <p className={styles.brand2}>{product && product.brandName}</p>
                <p className={styles.name2}>{product && product.name}</p>
                <p className={styles.description}>
                  {product && product.description}
                </p>
              </div>
              <div className={styles.infoP}>
                <span className={styles.span}>Composición</span>
                <p className={styles.p}>{product && product.composition}</p>
                <span className={styles.span}>ID del producto</span>
                <p className={styles.p}>{product && product.id}</p>
              </div>
            </div>
            <div className={styles.slideRight}>
              {isMobile
                ? []
                : product &&
                  product.image &&
                  (product.image[2] ? (
                    <img src={product.image[2]} alt={product.image[2]} />
                  ) : (
                    <img src={product.image[1]} alt={product.image[1]} />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>COMENTARIOS</p>
      </div>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../../Redux/reducer";
import { Link } from "react-router-dom";
import buttonDelete from "./Icons/delete.svg";
import styles from "./ShoopingBag.module.css";
import { removeBagS } from "../../Redux/action";
import { removeProdBagNoti } from "../../assets/NotiStack";

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string[];
  price: number;
}

interface ProductId {
  id: string;
}

export default function ShoopingBag() {
  const ShopBag = useSelector((state: productReducer) => state.bag);
  const dispatch = useDispatch();

  //Actualiza los números a formato
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleDeleteShopBag = async (id: ProductId) => {
    await dispatch(removeBagS(id)); //Envía el ID para poder eliminar el producto
    removeProdBagNoti();
  };

  const totalPrice = () => {
    let total = 0;
    ShopBag.forEach((product: Product) => {
      total += product.price;
    });
    return total; //Devuelve el precio total
  };

  return (
    <div className={styles.containerP}>
      <div className={styles.title}>
        <h2>TU BOLSA DE COMPRAS</h2>
      </div>
      <div className={styles.containerInfoAndPrice}>
        <div className={styles.conLeft}>
          {ShopBag &&
            ShopBag.map((product: Product) => (
              <div className={styles.products} key={product.id}>
                <div className={styles.prodSlideLeft}>
                  <div className={styles.imgP}>
                    <Link to={`/shooping/${product.id}`}>
                      <img
                        src={product.image[0]}
                        alt={product.image[0]}
                        draggable="false"
                      />
                    </Link>
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.brand}>{product.brand}</p>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.idP}>ID del producto:</p>
                    <p className={styles.id}>{product.id}</p>
                  </div>
                </div>
                <div className={styles.productPrice}>
                  <p>${formatPrice(product.price)}</p>
                </div>
                <div className={styles.deleteButtonCont}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteShopBag({ id: product.id })}
                  >
                    <img
                      src={buttonDelete}
                      alt={buttonDelete}
                      draggable="false"
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.conRigth}>
          <div className={styles.contLeftT}>
            <div className={styles.resumen}>
              <p>Resumen</p>
            </div>
            <div className={styles.subtotal}>
              <div>
                <p>Subtotal</p>
              </div>
              <div>${formatPrice(totalPrice())}</div>
            </div>
          </div>
          <div className={styles.contRigthT}>
            <div className={styles.total}>
              <div className={styles.totalP}>
                <p>Total</p>
              </div>
              <div className={styles.priceT}>
                <p>
                  COP <b>${formatPrice(totalPrice())}</b>
                </p>
                <span>Impuestos aduaneros incluidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import { productReducer } from "../../Redux/reducer";
import { Link } from "react-router-dom";
import buttonDelete from "./Icons/delete.svg";
import styles from "./ShoopingBag.module.css";
import { deleteBagS } from "../../Redux/action";

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
  console.log(ShopBag)

  const counterBag = ShopBag.length;

  //Actualiza los números a formato
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleDeleteShopBag = async (id: ProductId) => {
    console.log(id)
    await deleteBagS(id);
  }

  return (
    <div className={styles.containerP}>
      <div className={styles.title}>
        <h2>TU BOLSA DE COMPRAS</h2>
        <p>
          Productos agregador: <b>{counterBag}</b>
        </p>
        <span>
          <b>Puedes agregar o eliminar productos ya no deseados.</b>
          <br />
          Si deseas agregar más a tus <b>Compras</b>, sigue viendo los
          productos, no te los pierdas!
        </span>
        <br />
        <Link to={"/shooping"}>
          <button>Seguir viendo</button>
        </Link>
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
                  <button className={styles.deleteButton} onClick={() => handleDeleteShopBag({id: product.id})}>
                    <img 
                      src={buttonDelete} 
                      alt={buttonDelete}
                      draggable="false" />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.conRigth}>Holaa</div>
      </div>
    </div>
  );
}

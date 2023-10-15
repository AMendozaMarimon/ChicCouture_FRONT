import { useSelector } from "react-redux";
import { productReducer } from "../../Redux/reducer";
import styles from "./ShoopingBag.module.css";

export default function ShoopingBag() {

    const ShopBag = useSelector((state: productReducer) => state.bag);

    return (
        <div className={styles.containerP}>
            <div className={styles.title}>
                <h2>TU BOLSA DE COMPRAS</h2>
            </div>
            <div className={styles.products}>

            </div>
        </div>
    )
}       
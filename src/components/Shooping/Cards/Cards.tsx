import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../Redux/action";
import { productReducer } from "../../../Redux/reducer";
import { Dispatch } from "redux";
import styles from "./Cards.module.css"
import Card from "../Card/Card";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  brandName: string;
}

export default function Cards() {

  const dispatch: Dispatch<any> = useDispatch();
  const products = useSelector((state: productReducer) => state.products);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div className={styles.containerP}>
      <div className={styles.containerProd}>
        {products && products.map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            brand={product.brandName}
          />
        ))}
      </div>
    </div>
  );
}

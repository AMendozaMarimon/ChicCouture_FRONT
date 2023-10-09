import styles from "./Card.module.css";
import Fav from "./Img/Fav.png";

interface CardsProps {
  id: string,
  name: string,
  image: string,
  price: number,
  brand: string
}

export default function Card(props: CardsProps) {
  const { id, name, image, price, brand } = props;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={styles.containerP}>
      <div className={styles.containerCard}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={image} alt={name} />
          <img className={styles.fav} src={Fav} alt="Fav..." />
        </div>
        <div className={styles.text}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>$ {formatPrice(price)}</p>
        </div>
      </div>
    </div>
  );
}

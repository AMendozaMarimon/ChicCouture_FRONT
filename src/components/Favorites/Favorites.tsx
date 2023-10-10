import { useSelector } from "react-redux";
import { productReducer } from "../../Redux/reducer";
import { Link } from "react-router-dom";
import Card from "../Shooping/Card/Card";
import styles from "./Favorites.module.css";

interface FavsProps {
  id: string;
  name: string;
  image: string[];
  price: number;
  brand: string;
}

export default function Favorites() {
  const Favs = useSelector((state: productReducer) => state.favorites);
  const favsLength = Favs.length;

  return (
    <div className={styles.containerP}>
      <div className={styles.container2}>
        <div className={styles.title}>
          <h2>TUS FAVORITOS</h2>
        </div>
        <div className={styles.text}>
          <p>
            Productos añadidos: <b>{favsLength}</b>
          </p>
          <div className={styles.textP}>
            <p>
                <b>Puedes agregar o eliminar productos ya no deseados.</b>
            </p>
            <p>
                Si deseas agregar más a <b>Favoritos</b>, no dejes que se escapen:
            </p>
          </div>
          <Link to={'/shooping'}>
            <button>Seguir viendo</button>
          </Link>
        </div>
      </div>
      <div className={styles.containerCF}>
        {Favs &&
          Favs.map((fav: FavsProps) => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              image={fav.image}
              price={fav.price}
              brand={fav.brand}
            />
          ))}
      </div>
    </div>
  );
}

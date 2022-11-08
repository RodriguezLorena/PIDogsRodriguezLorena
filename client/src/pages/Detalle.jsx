import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { detallePerrito, deletePerrito } from "../redux/actions";
import styles from "./styles/Detalle.module.css";

const Detalle = () => {
  const { id } = useParams();
  console.log(id);

  const unPerrito = useSelector((state) => state.unPerrito);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detallePerrito(id));
    dispatch(deletePerrito());
  }, [dispatch, id]);

  return (
    <div>
      <div className={styles.barrita}>
        <Link className={styles.link} to="/home">volver</Link>
        <span className={styles.seccion}>Detalle</span>
      </div>
      <div className={styles.contentGral}>
        <div className={styles.contentCard}>
          <div className={styles.contentCardInner}>
            <div className={styles.contentCardFront}>
              <img
                className={styles.img}
                src={unPerrito.image}
                alt={unPerrito.name}
              />
            </div>
            <div className={styles.ContentCardBack}>
              <h4 className={styles.title}>{unPerrito.name}</h4>
              <p className={styles.items}>Altura: {unPerrito.height}</p>
              <p className={styles.items}>Peso: {unPerrito.weight}</p>
              <p className={styles.items}>Años de Vida: {unPerrito.life_span}</p>
              <p className={styles.items}>Temperamento: {unPerrito.temperament}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;

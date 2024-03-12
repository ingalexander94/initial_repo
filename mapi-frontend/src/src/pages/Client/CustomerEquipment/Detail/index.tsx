import { Link } from "react-router-dom";
import DetailEquipments from "./componentes/ContentEquipment";
import { privateRoutes } from "src/models";
import arrowIcon from "src/assets/icons/arrow.svg";
import styles from "./details.module.css";

const Detail = () => {
  return (
    <>
      <section className={styles.breadcrumb}>
        <Link to={`/${privateRoutes.CLIENT}/${privateRoutes.EQUIPMENT}`}>
          Equipos
        </Link>
        <img src={arrowIcon} alt="Arrow icon" />
        <p>Tractocamión - WOM-361</p>
      </section>
      <div
        className={`animate__animated animate__fadeIn ${styles.classification_wrapper}`}
      >
        <DetailEquipments />
      </div>
    </>
  );
};

export default Detail;

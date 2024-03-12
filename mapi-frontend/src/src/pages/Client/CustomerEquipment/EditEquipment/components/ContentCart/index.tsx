import styles from "./contectcart.module.css";
import cart from "src/assets/cartimg.png";

const ContentCart = () => {
  return (
    <>
      <article className={styles.content_cart}>
        <div className={styles.content_img}>
          <img src={cart} alt="imagen camion" />
        </div>
        <form>
          <div>
            <label> Tipo de equipo</label>
            <select>
              <option>Selecciona un tipo de equipo</option>
            </select>
          </div>
          <div>
            <label> Tipo de equipo</label>
            <select>
              <option>Selecciona un tipo de equipo</option>
            </select>
          </div>
          <div>
            <label> Tipo de equipo</label>
            <select>
              <option>Selecciona un tipo de equipo</option>
            </select>
          </div>
          <div>
            <label> Tipo de equipo</label>
            <input type="text" placeholder="Escribe la placa del equipo" />
          </div>
        </form>
      </article>
    </>
  );
};

export default ContentCart;

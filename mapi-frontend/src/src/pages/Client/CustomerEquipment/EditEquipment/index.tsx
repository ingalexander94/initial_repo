import { useState } from "react";
import AdditionalParameters from "./components/AdditionalParameters";
import ContentCart from "./components/ContentCart";
import EngineInformation from "./components/EngineInformation";
import CharacteristicsEquipment from "./components/EquipmentCharacteristics";
import styles from "./editequipment.module.css";
import arrow from "src/assets/icons/arrow-left.svg";
import arrowRight from "src/assets/icons/arrow-right.svg";

const EditEquipment = () => {
  const [activeComponent, setActiveComponent] = useState<number>(0);

  const handleSetActiveComponent = (index: number) => {
    setActiveComponent(index);
  };

  return (
    <>
      <article className={styles.edit_equipment}>
        <div>
          <ContentCart />
        </div>
        <div className={styles.content_right}>
          <div className={styles.list}>
            <ul>
              <li
                className={activeComponent === 0 ? styles.active : ""}
                onClick={() => handleSetActiveComponent(0)}
              >
                <strong>1</strong>Características del equipo
              </li>
              <li
                className={activeComponent === 1 ? styles.active : ""}
                onClick={() => handleSetActiveComponent(1)}
              >
                <strong>2</strong>Información del motor
              </li>
              <li
                className={activeComponent === 2 ? styles.active : ""}
                onClick={() => handleSetActiveComponent(2)}
              >
                <strong>3</strong>Parámetros adicionales
              </li>
            </ul>
            {activeComponent === 0 && <CharacteristicsEquipment />}
            {activeComponent === 1 && <EngineInformation />}
            {activeComponent === 2 && <AdditionalParameters />}
          </div>

          <div className={styles.content_button}>
            <div className={styles.prev_next}>
              <button
                type="button"
                onClick={() =>
                  setActiveComponent((prev) => Math.max(0, prev - 1))
                }
                className={activeComponent === 0 ? styles.hide : ""}
              >
                <img src={arrow} alt="icon" />
                Anterior
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveComponent((prev) => Math.min(2, prev + 1))
                }
                className={activeComponent === 2 ? styles.hide : ""}
              >
                Siguiente
                <img src={arrowRight} alt="icon" />
              </button>
            </div>
            <div className={styles.btn_save}>
              <button type="button">Guardar cambios</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default EditEquipment;

import styles from "./additionalparameters.module.css";

const AdditionalParameters = () => {
  return (
    <>
      <section className={styles.content_parameters}>
        <div>
          <div>
            <h3>Transmisión</h3>
          </div>
          <div>
            <form>
              <div>
                <label htmlFor="transmission_brand">
                  Marca de la transmisión
                </label>
                <input
                  type="text"
                  placeholder="Escribe la marca de la transmisión"
                  name="transmission_brand"
                  id="transmission_brand"
                />
              </div>
              <div>
                <label htmlFor="model_transmission">
                  Modelo de la transmisión
                </label>
                <input
                  type="text"
                  placeholder="Escribe el modelo de la transmisión"
                  name="model_transmission"
                  id="model_transmission"
                />
              </div>
              <div>
                <label>Enfriador de aceite</label>
                <select>
                  <option>Selecciona Si o No</option>
                </select>
              </div>
              <div>
                <label htmlFor="serial_number_transmission">
                  Número del serial de la transmisión
                </label>
                <input
                  type="text"
                  placeholder="Escribe el número del serial"
                  name="serial_number_transmission"
                  id="serial_number_transmission"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h3>Puente delantero</h3>
          </div>
          <div>
            <form>
              <div>
                <label htmlFor="brand_front_bridge">
                  Marca del puente delantero
                </label>
                <input
                  type="text"
                  placeholder="Escribe la marca del puente delantero"
                  name="brand_front_bridge"
                  id="brand_front_bridge"
                />
              </div>
              <div>
                <label htmlFor="model_front_bridge">
                  Modelo del puente delantero
                </label>
                <input
                  type="text"
                  placeholder="Escribe el modelo del puente delantero"
                  name="model_front_bridge"
                  id="model_front_bridge"
                />
              </div>
              <div>
                <label htmlFor="serial__front_bridge">
                  Serial del puente delantero
                </label>
                <input
                  type="text"
                  placeholder="Escribe el serial del puente delantero"
                  name="serial_front_bridge"
                  id="serial_front_bridge"
                />
              </div>
              <div>
                <label htmlFor="front_suspension">
                  Suspensión delantera 64”
                </label>
                <input
                  type="text"
                  placeholder="Escribe el número de la suspensión"
                  name="front_suspension"
                  id="front_suspension"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h3>Puente trasero</h3>
          </div>
          <div>
            <form>
              <div className={styles.brand_rear}>
                <label htmlFor="brand_rear_bridge">
                  Marca del puente trasero
                </label>
                <input
                  type="text"
                  placeholder="Escribe la marca del puente delantero"
                  name="brand_rear_bridge"
                  id="brand_rear_bridge"
                />
              </div>
              <div>
                <label htmlFor="model_rear_bridge">
                  Modelo del puente trasero
                </label>
                <input
                  type="text"
                  placeholder="Escribe el modelo del puente delantero"
                  name="model_rear_bridge"
                  id="model_rear_bridge"
                />
              </div>
              <div>
                <label htmlFor="rear_suspension">
                  Suspensión trasera RT-46”
                </label>
                <input
                  type="text"
                  placeholder="Escribe el número de la suspensión"
                  name="rear_suspension"
                  id="rear_suspension"
                />
              </div>
              <div>
                <label htmlFor="intermediate_differential">
                  Difenrencial intermedio
                </label>
                <input
                  type="text"
                  placeholder="Escribe el serial del puente delantero"
                  name="intermediate_differential"
                  id="intermediate_differential"
                />
              </div>
              <div>
                <label htmlFor="rear_differential">Diferencial trasero</label>
                <input
                  type="text"
                  placeholder="Escribe el serial del puente delantero"
                  name="rear_differential"
                  id="rear_differential"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h3>Llantas y rines</h3>
          </div>
          <div>
            <form>
              <div className={styles.brand_rear}>
                <label htmlFor="brand_rear_bridge">Rines</label>
                <input
                  type="text"
                  placeholder="Escribe el número de rines"
                  name="brand_rear_bridge"
                  id="brand_rear_bridge"
                />
              </div>
              <div>
                <label htmlFor="model_rear_bridge">Llantas delanteras</label>
                <input
                  type="text"
                  placeholder="Escribe los valores de las llantas delanteras"
                  name="model_rear_bridge"
                  id="model_rear_bridge"
                />
              </div>
              <div>
                <label htmlFor="rear_suspension">Llantas traseras</label>
                <input
                  type="text"
                  placeholder="Escribe los valores de las llantas traseras"
                  name="rear_suspension"
                  id="rear_suspension"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalParameters;

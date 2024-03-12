import styles from "./engineinformation.module.css";

const EngineInformation = () => {
  return (
    <>
      <section className={styles.content_information}>
        <div>
          <h3>Información del motor</h3>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="engine_brand">Marca del motor</label>
              <input
                type="text"
                placeholder="Escribe la marca del motor"
                name="engine_brand"
                id="engine_brand"
              />
            </div>
            <div>
              <label htmlFor="engine_model">Modelo del motor</label>
              <input
                type="text"
                placeholder="Escribe la marca del motor"
                name="engine_model"
                id="engine_model"
              />
            </div>
            <div>
              <label htmlFor="engine_displacement">Cilindraje</label>
              <input
                type="text"
                placeholder="Escribe el cilindraje en litros"
                name="engine_displacement"
                id="engine_displacement"
              />
            </div>
            <div>
              <label htmlFor="serial_number">Número del serial</label>
              <input
                type="text"
                placeholder="Escribe el número del serial"
                name="serial_number"
                id="serial_number"
              />
            </div>
            <div>
              <label htmlFor="power_indicate">Potencia indicada</label>
              <input
                type="text"
                placeholder="Escribe el número de la potencia indicada"
                name="power_indicate"
                id="power_indicate"
              />
            </div>
            <div>
              <label htmlFor="torque">Torque</label>
              <input
                type="text"
                placeholder="Escribe el número de torque Lb.pie"
                name="torque"
                id="torque"
              />
            </div>
            <div>
              <label htmlFor="velocity">Velocidad gobernada</label>
              <input
                type="text"
                placeholder="Escribe la velocidad en RPMr"
                name="velocity"
                id="velocity"
              />
            </div>
            <div>
              <label htmlFor="name_ecm">Nombre del ECM</label>
              <input
                type="text"
                placeholder="Escribe el nombre de ECM"
                name="name_ecm"
                id="name_ecm"
              />
            </div>
            <div>
              <label htmlFor="cod_ecm">Código del ECM</label>
              <input
                type="text"
                placeholder="Escribe el código ECM"
                name="cod_ecm"
                id="cod_ecm"
              />
            </div>
            <div>
              <label htmlFor="number_ecm">Número parte del ECM</label>
              <input
                type="text"
                placeholder="Escribe el número parte del ECM"
                name="number_ecm"
                id="number_ecm"
              />
            </div>
            <div>
              <label htmlFor="serial_ecm">Serial del ECM</label>
              <input
                type="text"
                placeholder="Escribe el número del serial"
                name="serial_ecm"
                id="serial_ecm"
              />
            </div>
            <div>
              <label htmlFor="number_cpl">Número de CPL</label>
              <input
                type="text"
                placeholder="Escribe el número de CPL"
                name="number_cpl"
                id="number_cpl"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EngineInformation;

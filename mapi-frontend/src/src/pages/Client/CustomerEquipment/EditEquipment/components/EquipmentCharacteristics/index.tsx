import { useState } from "react";
import styles from "./equipmentCharacteristics.module.css";
import iconDelete from "src/assets/icons/delete.svg";
import uploadWhite from "src/assets/icons/upload-white.svg";

const CharacteristicsEquipment = () => {
  const [images, setImages] = useState<
    { file: File; name: string; size: string }[]
  >([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files).map((file) => ({
        file,
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
      }));
      setImages([...images, ...selectedImages]);
    }
  };

  const handleImagesRemove = () => {
    setImages([]);
  };

  const handleImageDelete = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <>
      <section className={styles.content_characteristics}>
        <div>
          <h3>Características del equipo</h3>
        </div>
        <div>
          <form>
            <div>
              <label>Aplicación del equipo</label>
              <input
                type="text"
                placeholder="Escribe la aplicación de este vehiculo"
              />
            </div>
            <div>
              <label>Aplicación del equipo</label>
              <input
                type="date"
                placeholder="Selecciona la fecha de la compra"
              />
            </div>
            <div>
              <label>Forma en la que se mide el equipo</label>
              <select>
                <option>Selecciona horas o kilómetros</option>
              </select>
            </div>
            <div>
              <label>Número de VIN</label>
              <input type="text" placeholder="Escribe el número de VIN" />
            </div>
            <div>
              <label>Conductor</label>
              <select>
                <option>Selecciona un conductor</option>
              </select>
            </div>
            <div>
              <label>Estado actual del equipo</label>
              <select>
                <option>Selecciona un estado actual</option>
              </select>
            </div>
            <input
              id="photos"
              type="file"
              multiple
              onChange={handleImageChange}
              className={styles.input_remove}
            />
            <div className={styles.container_photo}>
              <label>Fotografías del equipo</label>
              <div className={styles.border}>
                <label htmlFor="photos" className={styles.label_remove}>
                  Haga clic para cargar o arrastre y suelte
                  <p className={styles.btn}>Seleccionar imagen</p>
                  <p>Tamaño máximo por imagen 25 mb</p>
                </label>
                {images.length ? (
                  <div>
                    <div className={styles.input}>
                      <label htmlFor="photos">
                        <img src={uploadWhite} alt="icon" />
                        Adjuntar nueva imagen
                      </label>
                      <button
                        type="button"
                        className={styles.btn_remove}
                        onClick={handleImagesRemove}
                      >
                        Eliminar todo
                        <img src={iconDelete} alt="icon" />
                      </button>
                    </div>

                    <div>
                      {images.map((image, index) => (
                        <div key={index} className={styles.content_img}>
                          <div className={styles.container_img}>
                            <img
                              src={URL.createObjectURL(image.file)}
                              alt="icon"
                              className={styles.img}
                            />
                            <span>
                              {image.name} <small>{image.size}</small>
                            </span>
                          </div>

                          <button
                            className={styles.btn_delete}
                            type="button"
                            onClick={() => handleImageDelete(index)}
                          >
                            <img src={iconDelete} alt="icon" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CharacteristicsEquipment;

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { privateRoutes } from "src/models";
import CopyToClipboardButton from "../CopyButtons";
import cart from "src/assets/cartimg.png";
import photo from "src/assets/icons/photo.svg";
import edit from "src/assets/icons/edit.svg";
import arrow from "src/assets/icons/arrow-down.svg";
import styles from "./detail.module.css";
import Gallery from "src/components/UI/Gallery";

const DetailEquipments = () => {
  const initialImages = [
    cart,
    "https://i.ytimg.com/vi/k3--D5q-zls/maxresdefault.jpg",
    "https://sigelmanassociates.com/wp-content/uploads/2022/04/California-Commercial-Truck-Axle-Weight-Limits-2022.jpg",
    "https://carga.com.co/wp-content/uploads/2021/09/DSC_0811.jpg",
  ];
  const [smallImages, __] = useState(initialImages);
  const photosRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleMoveSlider = (left: number) => {
    photosRef.current?.scrollBy({
      top: 0,
      behavior: "smooth",
      left: left,
    });
  };

  return (
    <>
      <section className={styles.table_system}>
        <div className={styles.container_content}>
          <div className={styles.container_galery}>
            <div className={styles.gallery_container}>
              <div className={styles.gallery_image}>
                <img
                  onClick={() => setCurrentIndex(0)}
                  src={smallImages[0]}
                  alt="Car image"
                />
              </div>
              <div ref={photosRef} className={styles.small_images}>
                {smallImages.map((image, index) => (
                  <img
                    onClick={() => setCurrentIndex(index)}
                    key={index}
                    src={image}
                    alt={`Photo car ${index}`}
                  />
                ))}
              </div>
              <div className={styles.buttons_container}>
                <button
                  onClick={() => handleMoveSlider(-200)}
                  className={styles.button_galery}
                >
                  <img src={arrow} alt="Arrow icon" />
                </button>
                <button
                  onClick={() => handleMoveSlider(+200)}
                  className={styles.button_galery}
                >
                  <img src={arrow} alt="Arrow icon" />
                </button>
              </div>
            </div>

            <div className={styles.container_mantenimient}>
              <h2> Próximos mantenimientos</h2>
              <ul className={styles.options}>
                <li>
                  <span>3,000 Km</span>
                  <span>Engrase</span>
                  <span>44 Minutos</span>
                  <span>$44.000</span>
                </li>
                <li>
                  <span>6,000 Km</span>
                  <span> Engrase</span>
                  <span>44 Minutos</span>
                  <span>$44.000</span>
                </li>

                <li>
                  <span>9,000 Km</span>
                  <span> Engrase</span>
                  <span>44 Minutos</span>
                  <span>$44.000</span>
                </li>
                <li>
                  <span>10,000 Km</span>
                  <span> MCK1</span>
                  <span>72 Minutos</span>
                  <span>$72.000</span>
                </li>
                <li>
                  <span>12,000 Km</span>
                  <span> MCK1</span>
                  <span>Engrase</span>
                  <span>$44.000</span>
                </li>
                <li>
                  <span>12,000 Km</span>
                  <span> MCK1</span>
                  <span>Engrase</span>
                  <span>$44.000</span>
                </li>
                <li>
                  <span>15,000 Km</span>
                  <span> MCK1</span>
                  <span>Engrase</span>
                  <span>$44.000</span>
                </li>
                <li>
                  <span>20,000 Km</span>
                  <span> MCK1 + MPK1</span>
                  <span>218 Minutos</span>
                  <span>$218.000</span>
                </li>
                <li>
                  <span>20,000 Km</span>
                  <span> MCK1 + MPK1</span>
                  <span>218 Minutos</span>
                  <span>$218.000</span>
                </li>
                <li>
                  <span>20,000 Km</span>
                  <span> MCK1 + MPK1</span>
                  <span>218 Minutos</span>
                  <span>$218.000</span>
                </li>
                <li>
                  <span>20,000 Km</span>
                  <span> MCK1 + MPK1</span>
                  <span>218 Minutos</span>
                  <span>$218.000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.content_description}>
            <div className={styles.content_title}>
              <div>
                <p>Kenworth - T800</p>
                <h2>Tractocamión - WOM-361</h2>
              </div>
              <Link
                to={`/${privateRoutes.CLIENT}/${privateRoutes.EQUIPMENT}/${privateRoutes.EDITEQUIPMENT}`}
                className="btn_secondary"
              >
                <img src={edit} alt="Edit icon" />
                Editar equipo
              </Link>
            </div>
            <div className={styles.container_date}>
              <strong>Fecha de compra:</strong>
              <span>DD/MM/AAAA</span>
              <div className={styles.bar}></div>
              <strong>Año:</strong>
              <span>2021</span>
              <div className={styles.bar}></div>
              <strong>Aplicación:</strong>
              <span>Tractocamión</span>
            </div>
            <div className={styles.container_detail_driver}>
              <div className={styles.property_cart}>
                <div>
                  <strong>WOM-371</strong>
                  <span>Placa</span>
                </div>
                <div className={styles.bar}></div>
                <div>
                  <strong>3.245 km</strong>
                  <span>Km. recorrido</span>
                </div>
                <div className={styles.bar}></div>
                <div>
                  <strong className={styles.active}>Activo</strong>
                  <span>Estado actual</span>
                </div>
              </div>
              <div className={styles.property_driver}>
                <img src={photo} alt="Photo conductor" />
                <div>
                  <h2>Nombre del conductor</h2>
                  <div>
                    <p>
                      Contacto
                      <CopyToClipboardButton text="330 333 4444" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.optionsContainer}>
              <div className={styles.dropdownContainer}>
                <div className={styles.selected_option_title}>
                  Características del equipo
                </div>
                <div className={styles.scroll}>
                  <ul className={styles.options}>
                    <li>
                      <strong>Fecha de compra</strong>
                      <span>
                        <CopyToClipboardButton text=" DD/MM/AAAA" />
                      </span>
                    </li>
                    <li>
                      <strong>Marca</strong>
                      <span>
                        <CopyToClipboardButton text=" Kenworth" />
                      </span>
                    </li>
                    <li>
                      <strong>Modelo</strong>
                      <span>
                        <CopyToClipboardButton text="   T800" />
                      </span>
                    </li>
                    <li>
                      <strong>Año</strong>
                      <span>
                        <CopyToClipboardButton text="  2021" />
                      </span>
                    </li>
                    <li>
                      <strong>Placa</strong>
                      <CopyToClipboardButton text="WOM-371" />
                    </li>
                    <li>
                      <strong>VIN</strong>

                      <CopyToClipboardButton text="3WKDD40XXMF728346" />
                    </li>
                    <li>
                      <strong>Aplicación</strong>

                      <CopyToClipboardButton text=" Tractocamión" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.dropdownContainer}>
                <div className={styles.selected_option_title}>Motor</div>
                <div className={styles.scroll}>
                  <ul className={styles.options}>
                    <li>
                      <strong>Marca</strong>
                      <span>
                        <CopyToClipboardButton text=" Cummins" />
                      </span>
                    </li>
                    <li>
                      <strong>Modelo</strong>
                      <span>
                        <CopyToClipboardButton text=" X15" />
                      </span>
                    </li>
                    <li>
                      <strong>Cilindraje</strong>
                      <span>
                        <CopyToClipboardButton text=" 15 litros" />
                      </span>
                    </li>
                    <li>
                      <strong>Serial</strong>
                      <span>
                        <CopyToClipboardButton text=" 80256582" />
                      </span>
                    </li>
                    <li>
                      <strong>Potencia indicada</strong>
                      <CopyToClipboardButton text="450 H.P" />
                    </li>
                    <li>
                      <strong>RPM de potencia indicada</strong>

                      <CopyToClipboardButton text="1800 RPM" />
                    </li>
                    <li>
                      <strong>Torque</strong>

                      <CopyToClipboardButton text=" 1650 Lb.pie" />
                    </li>
                    <li>
                      <strong>Velocidad gobernada</strong>

                      <CopyToClipboardButton text=" 1800 RPM" />
                    </li>
                    <li>
                      <strong>Código del ECM</strong>

                      <CopyToClipboardButton text=" DS10117,07" />
                    </li>
                    <li>
                      <strong>Nombre del ECM</strong>

                      <CopyToClipboardButton text=" CM2250" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentIndex >= 0 && (
        <Gallery
          onClose={() => setCurrentIndex(-1)}
          currentIndex={currentIndex}
          photos={initialImages}
        />
      )}
    </>
  );
};

export default DetailEquipments;

import { useEffect, useState } from "react";
import styles from "./viewDetail.module.css";
import Close from "src/assets/icons/Close.svg";
import Circle from "src/assets/icons/circle-red.svg";
import { useFetch } from "src/hooks";
import { OperationExpensesService } from "src/services/operationexpenses.service";
type Props = {
  closeModal: () => void;
  id_operation: any;
};

const ViewDetail = ({ closeModal, id_operation }: Props) => {
  const { callEndpoint } = useFetch();
  const [listExpenses, setListExpenses] = useState([]) as any;
  const [detailOperation, setDetailOperation] = useState(null) as any;


   useEffect(() => {
    const getOperationExpensesDetail = async(id_operation:string) => {
      const res = await callEndpoint(OperationExpensesService.getOperationExpensesDetail(id_operation))
      if(res && res.status){
          const { detail, expenses  } = res.data
          setDetailOperation(detail[0]);
          setListExpenses(expenses);
      }
    }
    
    getOperationExpensesDetail(id_operation)
     return () => {}
   }, [id_operation])
   
   
  return (
    <>
      <article className={styles.container_modal}>
        <div className={styles.overlay}></div>
        <div className={styles.content_modal}>
          <div className={styles.header}>
            <button className={styles.close_button} onClick={closeModal}>
              <img src={Close} alt="closeButton" />
            </button>
            <h3>Detalle de la operación</h3>
          </div>
          <p>
            { detailOperation && detailOperation.team_name} - <strong>{detailOperation && detailOperation.ut_car_plate}</strong>
          </p>
          <p>
            Conductor - <strong>{ detailOperation && detailOperation.personal_names} { detailOperation && detailOperation.personal_surnames}</strong>
          </p>
          <section className={styles.section_info}>
            <div className={styles.content_info}>
              <div className={styles.info_left}>
                <img src={Circle} />
                <div className={styles.bar}></div>
                <img src={Circle} />
              </div>
              <div className={styles.info}>
                <div>
                  <h4>Salida</h4>
                  <p>{detailOperation && detailOperation.ope_departure_location}</p>
                  <p>{detailOperation && detailOperation.ope_departure_date.split('T')[0]}</p>
                </div>
                <div>
                  <h4>Llegada</h4>
                  <p>{detailOperation && detailOperation.ope_arrival_place}</p>
                  <p>{detailOperation && detailOperation.ope_arrival_date.split('T')[0]}</p>
                  <p>{detailOperation && detailOperation.ope_km_driven}Km</p>

                </div>
              </div>
            </div>
          </section>
          <section className={styles.section_general}>
            <input type="checkbox" id={styles.general} />
            <label htmlFor={styles.general}>Datos generales</label>
            <div className={styles.content_general}>
              <ul className={styles.left}>
                <li>Conductor</li>
                <li>Empresa</li>
                <li>Nombre del encargado</li>
                <li>Número de contacto</li>
                <li>Producto o proceso</li>
              </ul>
              <ul className={styles.right}>
                  <li>{detailOperation && detailOperation.personal_names} {detailOperation && detailOperation.personal_surnames}</li>
                  <li>{detailOperation && detailOperation.ope_company}</li>
                  <li>{detailOperation && detailOperation.ope_name_manager}</li>
                  <li>{detailOperation && detailOperation.ope_phone_manager}</li>
                  <li>{detailOperation && detailOperation.ope_product}</li>
              </ul>
            </div>
          </section>
          <section className={styles.section_operating}>
            <input type="checkbox" id={styles.operating} />
            <label htmlFor={styles.operating}>Gastos de operación</label>
            <div className={styles.content_operating}>
              <ul className={styles.operating_left}>
                
                {
                  listExpenses && listExpenses.map((expense: any, i: any) => (
                    <li key={i}>{expense.ed_concept}</li>
                  )) 
                }

              </ul>
              <ul className={styles.operating_right}>

                {
                  listExpenses && listExpenses.map((expense: any, i: any) => (
                    <li key={i}>{expense.ed_price}</li>
                  )) 
                }

              </ul>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default ViewDetail;

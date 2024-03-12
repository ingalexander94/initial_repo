import { useState, useEffect } from "react";

import Loading from "src/assets/icons/loading.svg";
import styles from "./addtechnician.module.css";
import { useFormik } from "formik";

import { useAxios } from "src/hooks";
import { InventoryService } from "src/services";
import { AddItemInventoryValidatorForm } from "src/validators/additeminventory.validator copy";
import { Inventory } from "src/interfaces/inventory.interface";

type Props = {
  closeModal: () => void;
  title: string;
  id_item_inventory: number;
};

const AddPart = ({ closeModal, title, id_item_inventory }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>("");
  const { callEndpoint } = useAxios();

  const getItemInventory = async () => {
    const res = await callEndpoint(InventoryService.getDetail(id_item_inventory))
    if(res && res.status){
      const { data } = res.data;
      
      const dataWithNullsReplaced = Object.entries(data).reduce((newData:any, [key, value]) => {
        newData[key] = value === null ? 0 : value;
        return newData;
      }, {});
      
      formik.setValues(dataWithNullsReplaced)
    };
  }

  useEffect(() => {
    if(id_item_inventory && id_item_inventory != undefined) getItemInventory();
  }, [id_item_inventory]);

  const formik = useFormik({
    initialValues: AddItemInventoryValidatorForm.initialState,
    validationSchema: AddItemInventoryValidatorForm.validatorSchemaAddItemInventory,
    validateOnMount: false,
    onSubmit: async (data: Inventory) => {
      if (currentId) data.id_inventory = currentId;

      setIsLoading(true);
      if (formik.isValid) {
        const response = await callEndpoint(InventoryService.save(data));
        if (response!.status) {
          closeModal();
          setCurrentId("");
          setIsLoading(false);
        }
      }
    },
  });

  const calculateIva = () => {
    const base_price = Number(formik.values.inventory_price_without_tax);
    if (!isNaN(base_price)) {
      const result = base_price + (base_price * (Number(formik.values.inventory_tax) ?? 0) / 100);
      formik.setFieldValue(
        "inventory_price_with_tax",
        result
      );
    }
  }

  return (
    <article className={styles.container_modal}>
      <div onClick={closeModal} className={styles.overlay}></div>
      <div className={styles.modal}>
        <h2>{title} compra de repuesto</h2>
        <hr className={styles.line_body} />
        
        
        <form className={styles.form} onSubmit={formik.handleSubmit}autoComplete="off">
          <div style={{display: "none", position: "absolute"}} >
            <label form="id_inventory">Id del inventario</label>
            <input
              placeholder="Escribe el numero del referente"
              onChange={formik.handleChange}
              value={formik.values.id_inventory}
              name="id_inventory"
              id="id_inventory"
              type="number"
            />
          </div>

          <div className={styles.content_form}>

            <div className={styles.formColumn}>
              <label form="inventory_reference">Número de referencia</label>
              <input
                placeholder="Escribe el numero del referente"
                onChange={formik.handleChange}
                value={formik.values.inventory_reference}
                name="inventory_reference"
                id="inventory_reference"
                type="text"
              />
            </div>

            <div className={styles.formColumn}>
              <label htmlFor="inventory_quantity">Cantidad</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.inventory_quantity}
                placeholder="Escribe la cantidad comprada" 
                name="inventory_quantity"
                id="inventory_quantity"
                type="number" />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="inventory_item_name">Nombre del repuesto</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.inventory_item_name}
                name="inventory_item_name"
                id="inventory_item_name"
                placeholder="Escribe la descripción o el nombre del repuesto"
                type="text"
              />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="inventory_units">Unidad</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.inventory_units}
                placeholder="Escribe el numero de la unidad" 
                name="inventory_units"
                id="inventory_units"
                type="number" />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="inventory_price_without_tax">Valor sin IVA</label>
              <input
                onBlur={calculateIva}
                onChange={formik.handleChange}
                value={formik.values.inventory_price_without_tax}
                placeholder="Escribe el valor del repuesto sin IVA"
                name="inventory_price_without_tax"
                id="inventory_price_without_tax"
                type="number"
              />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="inventory_tax">IVA</label>
              <input 
                onBlur={calculateIva}
                onChange={formik.handleChange}
                value={formik.values.inventory_tax}
                placeholder="Escribe el valor del IVA" 
                name="inventory_tax"
                id="inventory_tax"
                type="number" />
            </div>
            <div className={styles.formColumn}>
              <label htmlFor="inventory_price_with_tax">Valor con IVA</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.inventory_price_with_tax}
                name="inventory_price_with_tax"
                id="inventory_price_with_tax"
                placeholder="$0"
                className={styles.input_dark}
                type="number"
                disabled
              />
            </div>
          </div>
          <div className={styles.formButtons}>
            <button
              type="button"
              className={styles.btn_cancel}
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.btn_keep}
              disabled={!formik.isValid || !formik.dirty}
            >
              Guardar repuesto
              <img
                className={`${!isLoading ? styles.hidden : ""}`}
                src={Loading}
                alt=""
              />
            </button>
          </div>
        </form>


      </div>
    </article>
  );
};

export default AddPart;

import { useReducer } from "react";
import { EquipmentContext } from "./equipment.context";
import { equipmentReducer } from "./equipment.reducer";
import { Equipment, EquipmentState } from "src/interfaces";

const INITIAL_STATE: EquipmentState = {
  equipments: [],
  search: "",
  totalPages: 1,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EquipmentProvider = ({ children }: Props) => {
  const [equipmentState, dispatch] = useReducer(
    equipmentReducer,
    INITIAL_STATE
  );

  const setEquipments = (equipments: Equipment[]) => {
    dispatch({ type: "setEquipments", payload: equipments });
  };

  const setSearch = (search: string) => {
    dispatch({ type: "setSearch", payload: search });
  };

  const setTotalPages = (totalPages: number) => {
    dispatch({ type: "setTotalPages", payload: totalPages });
  };

  return (
    <EquipmentContext.Provider
      value={{
        equipmentState,
        setEquipments,
        setSearch,
        setTotalPages,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};

export default EquipmentProvider;

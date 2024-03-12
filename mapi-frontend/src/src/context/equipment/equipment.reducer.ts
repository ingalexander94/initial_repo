import { Equipment, EquipmentState } from "src/interfaces";

type EquipmentAction =
  | { type: "setEquipments"; payload: Equipment[] }
  | { type: "setSearch"; payload: string }
  | { type: "setTotalPages"; payload: number };

export const equipmentReducer = (
  state: EquipmentState,
  action: EquipmentAction
): EquipmentState => {
  switch (action.type) {
    case "setEquipments":
      return {
        ...state,
        equipments: [...action.payload],
      };
    case "setSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "setTotalPages":
      return {
        ...state,
        totalPages: action.payload,
      };

    default:
      return state;
  }
};

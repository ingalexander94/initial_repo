export interface EquipmentState {
  equipments: Equipment[];
  search: string;
  totalPages: number;
}

export interface Equipment {
  id_user_team: number;
  mp_kilometers: number;
  ut_state: number;
  brand_name: string;
  model_name: string;
  team_name: string;
  ut_car_plate: string;
  ut_photo: string;
}

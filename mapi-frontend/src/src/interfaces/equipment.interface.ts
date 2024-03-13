export interface EquipmentState {
  equipments: Equipment[];
  search: string;
  team: number;
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

export interface EquipmentData {
  id_user_team: number;
  id_brand: number;
  brand_name: string;
  id_model: number;
  model_name: string;
  id_team: number;
  team_name: string;
  ut_date_purchased: string;
  ut_year: number;
  ut_application: string;
  ut_car_plate: string;
  ut_vin: string;
  ut_state: number;
  id_personal: number;
  personal_names: string;
  personal_surnames: string;
  personal_photo: string;
  personal_phone: string;
  id_engine: number | null;
  engine_model: string | null;
  engine_brand: string | null;
  engine_cylinder_capacity: string | null;
  engine_serial: string | null;
  engine_power: string | null;
  engine_rpm_power: string | null;
  engine_governed_speed: string | null;
  engine_ecm_name: string | null;
  engine_ecm_code: string | null;
  engine_torque: string | null;
  photos: EquipmentPhotos[];
}

export interface EquipmentPhotos {
  id_team_photo: number;
  tp_photo: string;
}

export interface TeamFilter {
  id_team: number;
  team_name: string;
}

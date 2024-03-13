import axios from "axios";
import { CustomStorage } from "src/lib";
import { EquipmentEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class EquipmentService {
  private static API_URL = `${import.meta.env.VITE_API_URL}/usersTeam`;

  private constructor() {}

  static getTeams() {
    const controller = loadAbort();
    return {
      call: axios.get(`${this.API_URL}/${EquipmentEndpoints.teams}`, {
        headers: {
          Authorization: `Bearer ${CustomStorage.token}`,
        },
      }),
      controller,
    };
  }

  static getByPage(page: number, search: string = "", team: number = 0) {
    const controller = loadAbort();
    return {
      call: axios.get(
        `${this.API_URL}/${EquipmentEndpoints.listUserTeams}?page=${page}&search=${search}&team=${team}`,
        {
          headers: {
            Authorization: `Bearer ${CustomStorage.token}`,
          },
        }
      ),
      controller,
    };
  }

  static download() {
    const controller = loadAbort();
    return {
      call: axios.get(`${this.API_URL}/${EquipmentEndpoints.download}`, {
        headers: {
          Authorization: `Bearer ${CustomStorage.token}`,
        },
      }),
      controller,
    };
  }

  static getDetail(id_user_team: string) {
    const controller = loadAbort();
    return {
      call: axios.get(
        `${this.API_URL}/${EquipmentEndpoints.detailUserTeam}/${id_user_team}`,
        {
          headers: {
            Authorization: `Bearer ${CustomStorage.token}`,
          },
        }
      ),
      controller,
    };
  }
}

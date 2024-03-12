import axios from "axios";
import { CustomStorage } from "src/lib";
import { EquipmentEndpoints } from "src/models";
import { loadAbort } from "src/utilities";

export class EquipmentService {
  private static API_URL = `${import.meta.env.VITE_API_URL}/usersTeam`;

  private constructor() {}

  static getByPage(page: number, search: string = "") {
    const controller = loadAbort();
    return {
      call: axios.get(
        `${this.API_URL}/${EquipmentEndpoints.listUserTeams}?page=${page}&search=${search}`,
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
}

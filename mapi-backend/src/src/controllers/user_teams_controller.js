const { response, request } = require("express");
const CustomError = require("../config/errors");
const UserTeamModel = require("../database/models/user_team_model");

class UserTeamsController {
  static limit = 12;
  static #handleError = (error, res = response) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ status: false, data: null, error: error.message });
    }
    console.error(error);
    return res
      .status(500)
      .json({ status: false, data: null, error: "Internal Server Error" });
  };

  static getListTeams = async (req = request, res = response) => {
    try {
      const orderBy = req.query.orderBy || "DESC";
      const search = req.query.search;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * this.limit;
      const dbConnection = req.clientConnection;
      const userTeamModel = new UserTeamModel(dbConnection);
      let totalPages = 1;
      let equipments = [];
      if (search) {
        equipments = await userTeamModel.searchByCarPlate(search);
      } else {
        equipments = await userTeamModel.listTeams(this.limit, offset, orderBy);
        const { total } = await userTeamModel.getTotalListUserTeam();
        totalPages = Math.ceil(total / this.limit);
      }
      return res.status(200).json({
        status: true,
        data: { totalPages, equipments },
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getDetailUserTeam = async (req = request, res = response) => {
    try {
      const { id } = req.params;
      const details = await UserTeamModel.detailsUserTeam(id);
      const photos = await UserTeamModel.photos();

      return res.status(200).json({
        status: true,
        data: details,
        photos,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    }
  };

  static getDownloadData = async (req = request, res = response) => {
    try {
      const dbConnection = req.clientConnection;
      const userTeamModel = new UserTeamModel(dbConnection);
      const equipments = await userTeamModel.getData();
      return res.status(200).json({
        status: true,
        data: equipments,
        error: null,
      });
    } catch (error) {
      this.#handleError(error, res);
    } finally {
      if (req.clientConnection) {
        await req.clientConnection.destroy();
      }
    }
  };
}

module.exports = UserTeamsController;

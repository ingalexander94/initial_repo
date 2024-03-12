class UserTeamModel {
  constructor(db) {
    this._db = db;
  }

  listTeams = async (limit = 0, offset = 0) => {
    try {
      const equipments = this._db
        .select(
          "mp_user_team.id_user_team",
          "mp_teams.team_name",
          "mp_user_team.ut_car_plate",
          "mp_brands.brand_name",
          "mp_models.model_name",
          this._db.raw("3245 AS mp_kilometers"),
          "mp_user_team.ut_state",
          this._db.raw(
            "(SELECT mp_team_photo.tp_photo FROM mp_team_photo WHERE mp_team_photo.tp_user_team = mp_user_team.id_user_team LIMIT 1) AS ut_photo"
          )
        )
        .from("mp_user_team")
        .innerJoin("mp_teams", "mp_teams.id_team", "=", "mp_user_team.ut_team")
        .innerJoin(
          "mp_brands",
          "mp_brands.id_brand",
          "=",
          "mp_user_team.ut_brand"
        )
        .innerJoin(
          "mp_models",
          "mp_models.id_model",
          "=",
          "mp_user_team.ut_model"
        )
        .limit(limit)
        .offset(offset);
      return equipments;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  searchByCarPlate = async (search = "") => {
    try {
      const equipments = this._db
        .select(
          "mp_user_team.id_user_team",
          "mp_teams.team_name",
          "mp_user_team.ut_car_plate",
          "mp_brands.brand_name",
          "mp_models.model_name",
          this._db.raw("3245 AS mp_kilometers"),
          "mp_user_team.ut_state",
          this._db.raw(
            "(SELECT mp_team_photo.tp_photo FROM mp_team_photo WHERE mp_team_photo.tp_user_team = mp_user_team.id_user_team LIMIT 1) AS ut_photo"
          )
        )
        .from("mp_user_team")
        .innerJoin("mp_teams", "mp_teams.id_team", "=", "mp_user_team.ut_team")
        .innerJoin(
          "mp_brands",
          "mp_brands.id_brand",
          "=",
          "mp_user_team.ut_brand"
        )
        .innerJoin(
          "mp_models",
          "mp_models.id_model",
          "=",
          "mp_user_team.ut_model"
        )
        .where("mp_user_team.ut_car_plate", "like", `${search}%`);
      return equipments;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getData = async () => {
    try {
      const equipments = this._db
        .select(
          "mp_user_team.id_user_team",
          "mp_teams.team_name",
          "mp_user_team.ut_car_plate",
          "mp_brands.brand_name",
          "mp_models.model_name",
          this._db.raw("3245 AS mp_kilometers"),
          "mp_user_team.ut_state"
        )
        .from("mp_user_team")
        .innerJoin("mp_teams", "mp_teams.id_team", "=", "mp_user_team.ut_team")
        .innerJoin(
          "mp_brands",
          "mp_brands.id_brand",
          "=",
          "mp_user_team.ut_brand"
        )
        .innerJoin(
          "mp_models",
          "mp_models.id_model",
          "=",
          "mp_user_team.ut_model"
        );
      return equipments;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getTotalListUserTeam = async () => {
    try {
      const total = await this._db
        .from("mp_user_team")
        .count("mp_user_team.id_user_team AS total")
        .first();
      return total;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserTeamModel;

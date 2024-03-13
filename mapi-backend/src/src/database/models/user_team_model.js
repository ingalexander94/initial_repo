class UserTeamModel {
  constructor(db) {
    this._db = db;
  }

  getTeams = async () => {
    try {
      const teams = await this._db
        .select("mp_teams.id_team", "mp_teams.team_name")
        .from("mp_teams")
        .innerJoin("mp_user_team", "mp_teams.id_team", "mp_user_team.ut_team")
        .distinct();
      return teams;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  listTeams = async (limit = 0, offset = 0, team = 0) => {
    try {
      const equipments = await this._db
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
        .where("mp_user_team.ut_team", "=", team)
        .limit(limit)
        .offset(offset);
      return equipments;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  searchByCarPlate = async (search = "", team = 0) => {
    try {
      const equipments = await this._db
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
        .where("mp_user_team.ut_car_plate", "like", `${search}%`)
        .andWhere("mp_user_team.ut_team", "=", team);
      return equipments;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getData = async () => {
    try {
      const equipments = await this._db
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

  getDetailsUserTeam = async (id_user_team) => {
    try {
      const user_team = await this._db
        .select(
          "mp_user_team.id_user_team",
          "mp_brands.id_brand",
          "mp_brands.brand_name",
          "mp_models.id_model",
          "mp_models.model_name",
          "mp_teams.id_team",
          "mp_teams.team_name",
          "mp_user_team.ut_date_purchased",
          "mp_user_team.ut_year",
          "mp_user_team.ut_application",
          "mp_user_team.ut_car_plate",
          "mp_user_team.ut_vin",
          "mp_user_team.ut_state",
          "mp_personal.id_personal",
          "mp_personal.personal_names",
          "mp_personal.personal_surnames",
          "mp_personal.personal_photo",
          "mp_personal.personal_phone",
          "mp_engines.id_engine",
          "mp_engines.engine_model",
          "mp_engines.engine_brand",
          "mp_engines.engine_cylinder_capacity",
          "mp_engines.engine_serial",
          "mp_engines.engine_power",
          "mp_engines.engine_rpm_power",
          "mp_engines.engine_governed_speed",
          "mp_engines.engine_ecm_name",
          "mp_engines.engine_ecm_code",
          "mp_engines.engine_torque"
        )
        .from("mp_user_team")
        .leftJoin("mp_brands", "mp_user_team.ut_brand", "mp_brands.id_brand")
        .leftJoin("mp_models", "mp_user_team.ut_model", "mp_models.id_model")
        .leftJoin("mp_teams", "mp_user_team.ut_team", "mp_teams.id_team")
        .leftJoin(
          "mp_personal",
          "mp_user_team.ut_driver",
          "mp_personal.id_personal"
        )
        .leftJoin(
          "mp_engines",
          "mp_user_team.ut_engine",
          "mp_engines.id_engine"
        )
        .where("mp_user_team.id_user_team", id_user_team)
        .first();
      return user_team;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  getPhotos = async (tp_user_team) => {
    try {
      const photos = await this._db
        .select("mp_team_photo.id_team_photo", "mp_team_photo.tp_photo")
        .from("mp_team_photo")
        .innerJoin(
          "mp_user_team",
          "mp_user_team.id_user_team",
          "mp_team_photo.tp_user_team"
        )
        .where("mp_team_photo.tp_user_team", tp_user_team);
      return photos;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

module.exports = UserTeamModel;

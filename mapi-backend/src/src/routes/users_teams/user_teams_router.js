const { Router } = require("express");
const AuthMiddleware = require("../../middlewares/validate-token");
const UserTeamsController = require("../../controllers/user_teams_controller");

class UserTeamsRouter {
  static get routes() {
    const router = Router();
    router.use(AuthMiddleware.validateJWT);
    router.get("/listUserTeams", UserTeamsController.getListTeams);
    router.get("/detailUserTeam/:id", UserTeamsController.getDetailUserTeam);
    router.get("/download", UserTeamsController.getDownloadData);
    return router;
  }
}

module.exports = UserTeamsRouter;

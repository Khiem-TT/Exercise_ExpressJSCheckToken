import {Router} from "express";
import {checkToken} from "../middlewares/checkToken";
import {GeneralController} from "../controllers/general.controller";

const apiRouter = Router();

apiRouter.post('/', checkToken, GeneralController.getToken);

export default apiRouter;
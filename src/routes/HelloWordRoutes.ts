import { Router } from "express";
const HelloWordRoutes = Router();

import HelloWordControllers from "../controllers/HelloWordControllers";

HelloWordRoutes.get('/HelloWord', HelloWordControllers.getFullHelloWord);
HelloWordRoutes.post('/HelloWord', HelloWordControllers.createNewHelloWord);
HelloWordRoutes.put('/HelloWord/:id', HelloWordControllers.updateHelloWord);
HelloWordRoutes.delete('/HelloWord/:id', HelloWordControllers.deleteHelloWord);

export default HelloWordRoutes;

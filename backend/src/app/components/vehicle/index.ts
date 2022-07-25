import express, { Express } from "express";
import router from "./vehicle.network"

const vehicle: Express = express();
vehicle.use('/vehicle', router);

export default vehicle;
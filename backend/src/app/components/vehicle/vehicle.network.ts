import express, { Request, Response, Router } from "express";
import { Vehicle } from "../../../../../models/vehicle.model";
import response from "../../modules/response.module";
import controller from "./vehicle.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
  try {
    const result: Vehicle[] = await controller.getAllVehicles();
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

router.post('/', async (req: Request, res: Response) => {
  const vehicle: Vehicle = req.body;
  
  try {
    const result: Vehicle|null = await controller.addVehicle(vehicle);
    response.success(req, res, result, 201);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500);
  }
});

export default router;
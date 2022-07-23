import { Vehicle } from "../../../../../models/vehicle.model";
import repository from "./vehicle.repository";

async function getAllVehicles(): Promise<Vehicle[]>{
  return await repository.getAllVehicles();
}

async function addVehicle(vehicle: Vehicle): Promise<Vehicle | null>{
  return await repository.addVehicle(vehicle);
}

export default{
  getAllVehicles,
  addVehicle
}
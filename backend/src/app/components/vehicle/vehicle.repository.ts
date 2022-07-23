import { Vehicle } from "../../../../../models/vehicle.model";
import model from './vehicle.schema';

async function getAllVehicles(): Promise<Vehicle[]>{
  return model.find();
}

async function addVehicle(vehicle: Vehicle): Promise<Vehicle>{
  return model.create<Vehicle>(vehicle);
}

export default{
  getAllVehicles,
  addVehicle
}
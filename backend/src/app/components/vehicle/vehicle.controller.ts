import { Vehicle } from "../../models/vehicle.model";
import repository from "./vehicle.repository";

async function getAllVehicles(): Promise<Vehicle[]>{
  return await repository.getAllVehicles();
}

async function addVehicle(newVehicle: Vehicle): Promise<Vehicle | null>{
  const vehicles: Vehicle[] = await repository.getAllVehicles();
  let dontAdd: boolean = false;
  
  for (let vehicle of vehicles){
    if (vehicle.licensePlate === newVehicle.licensePlate.toLowerCase()){
      dontAdd = true
    }
  }
  if (dontAdd == false)
    return await repository.addVehicle(newVehicle);
  else return null;
}

export default{
  getAllVehicles,
  addVehicle
}
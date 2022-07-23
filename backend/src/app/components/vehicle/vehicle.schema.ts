import { Schema, model, Document } from "mongoose";
import { Vehicle } from "../../../../../models/vehicle.model";

const definition: Partial<Record<keyof Vehicle, any>> = {
	licensePlate: { type: String, required: true, lowercase: true, trim: true },
	type: { type: String, required: true, lowercase: true, trim: true },
	weight: { type: Number, required: true },
	color: { type: String, required: true, lowercase: true, trim: true },
	insurance: { type: Boolean, required: true}
};

const schema: Schema<Vehicle> = new Schema(definition, { timestamps: true });

export default model<Vehicle & Document>('Vehicle', schema, 'vehicle');
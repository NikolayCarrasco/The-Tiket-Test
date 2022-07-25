export interface Vehicle{
	id?: string;
	licensePlate: string;
	type: string;
	weight: number;
	color: string;
	insurance: boolean;
	updatedAt?: Date;
	createdAt?: Date;
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient
  ) { }

  getAllVehicles(): Observable<Vehicle[]> {
    let vehicle: Vehicle[] = [];
    const response: Observable<Vehicle[]> = this.http.get<Vehicle[]>(environment.baseUrl + '/vehicle/all').pipe(map((data: any) => data.message));
    response.subscribe(
      (res: Vehicle[]) => (vehicle = res)
    );
    return response;
  }

  addVehicle(vehicle: Partial<Vehicle>): Observable<Vehicle> {
    return this.http.post<Vehicle>(environment.baseUrl + '/Vehicle/', vehicle);
  }
}

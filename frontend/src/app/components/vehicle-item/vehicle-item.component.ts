import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss'],
})
export class VehicleItemComponent implements OnInit {
  
  @Input() vehicle: Vehicle;

  public insurance: string;

  constructor() {
    this.insurance = '';
  }

  ngOnInit() {
    this.valueInsurance();
  }

  private valueInsurance(){
    if (this.vehicle.insurance) this.insurance = 'si';
    else this.insurance = 'no';
  }

}

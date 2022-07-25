import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    VehicleItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    VehicleItemComponent
  ]
})
export class ComponentsModule { }

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Vehicles } from './vehicles.page';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VehiclesRoutingModule,
    ComponentsModule
  ],
  declarations: [Vehicles]
})
export class VehiclesModule {}

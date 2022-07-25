import { Component, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/core/models/vehicle.model';
import { VehicleService } from 'src/core/services/vehicle/vehicle.service';

@Component({
  selector: 'app-Vehicles',
  templateUrl: 'vehicles.page.html',
  styleUrls: ['vehicles.page.scss']
})
export class Vehicles {
  
  @ViewChild(IonModal) modal: IonModal;

  public vehicles: Vehicle[];
  public addVehicleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private vehicleService: VehicleService
  ) {
    this.addVehicleForm = this.formBuilder.group({
      licensePlate: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6}')]],
      type: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,25}')]],
      weight: ['', [Validators.required, Validators.pattern('[0-9]{1,9999}')]],
      color: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,25}')]],
      insurance: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  get licensePlate () { return this.addVehicleForm.get('licensePlate'); }
  get type () { return this.addVehicleForm.get('type'); }
  get weight () { return this.addVehicleForm.get('weight'); }
  get color () { return this.addVehicleForm.get('color'); }
  get insurance () { return this.addVehicleForm.get('insurance'); }
  
  async getAllVehicles() {
    try {
      this.vehicles = await this.vehicleService.getAllVehicles().toPromise();
    } catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  cancel() {
    this.modal.dismiss();
  }

  async confirm() {
    if(
      this.licensePlate.status === 'VALID' &&
      this.type.status === 'VALID' &&
      this.weight.status === 'VALID' &&
      this.color.status === 'VALID' &&
      this.insurance.status === 'VALID'
    ){
      let vehicle: Vehicle = {
        licensePlate: this.licensePlate.value,
        type: this.type.value,
        weight: this.weight.value,
        color: this.color.value,
        insurance: this.insurance.value
      }
      try {
        await this.vehicleService.addVehicle(vehicle).toPromise();
        this.successfulAddition();
        this.getAllVehicles()
        this.modal.dismiss();

      } catch (error) {
        console.log('error');
        this.errorAddition();
      }
    } else {
      this.incompleteForm();
    }
  }

  /* toast */

  async incompleteForm() {
    const toast = await this.toastController.create({
      message: 'Se deben completar todos los campos.',
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    toast.present();
  }

  async successfulAddition() {
    const toast = await this.toastController.create({
      message: 'Se agregó el vehiculo correctamente.',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  async errorAddition() {
    const toast = await this.toastController.create({
      message: 'No se pudo agregar el vehículo.',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

  async sameLicensePlate() {
    const toast = await this.toastController.create({
      message: 'El vehículo ya está registrado',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

  /* refresh */

  doRefresh(event) {

    setTimeout(() => {
      this.getAllVehicles();
      event.target.complete();
    }, 2000);
  }
}
import { Component, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from 'src/core/models/vehicle.model';

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
    public toastController: ToastController
  ) {
    this.addVehicleForm = this.formBuilder.group({
      licensePlate: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6}')]],
      type: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,25}')]],
      weight: ['', [Validators.required, Validators.pattern('[0-9]{1,9999}')]],
      color: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,25}')]],
      insurance: ['', [Validators.required]],
    }),
    this.vehicles = [
      {
        id: '1',
      	licensePlate: 'asdfasd',
      	type: 'auto',
      	weight: 800,
      	color: 'azul',
      	insurance: true,
      },
      {
        id: '2',
      	licensePlate: '1asd2',
      	type: 'camión',
      	weight: 1500,
      	color: 'negro',
      	insurance: true,
      },
      {
        id: '3',
      	licensePlate: '3341a',
      	type: 'moto',
      	weight: 200,
      	color: 'naranjo',
      	insurance: false,
      },
    ]
  }

  get licensePlate () { return this.addVehicleForm.get('licensePlate'); }
  get type () { return this.addVehicleForm.get('type'); }
  get weight () { return this.addVehicleForm.get('weight'); }
  get color () { return this.addVehicleForm.get('color'); }
  get insurance () { return this.addVehicleForm.get('insurance'); }

  cancel() {
    this.modal.dismiss();
  }

  confirm() {
    if(
      this.licensePlate.status === 'VALID' &&
      this.type.status === 'VALID' &&
      this.weight.status === 'VALID' &&
      this.color.status === 'VALID' &&
      this.insurance.status === 'VALID'
    ){
      this.successfulAddition();
      this.modal.dismiss();
    } else {
      this.incompleteForm();
    }
  }

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

}

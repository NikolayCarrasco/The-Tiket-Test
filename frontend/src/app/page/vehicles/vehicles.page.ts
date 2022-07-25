import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Vehicle } from '../../../../../models/vehicle.model'
import { OverlayEventDetail } from '@ionic/core/components'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Vehicles',
  templateUrl: 'vehicles.page.html',
  styleUrls: ['vehicles.page.scss']
})
export class Vehicles {
  
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  public vehicles: Vehicle[];
  public addVehicleForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.addVehicleForm = this.formBuilder.group({
      licensePlate: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{6}')]],
      type: ['', [Validators.required, Validators.pattern('[a-zA-Z]')]],
      weight: ['', [Validators.required, Validators.pattern('[0-9]{1-9999}')]],
      color: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3-25}')]],
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
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.licensePlate.value);
    console.log(this.type.value);
    console.log(this.weight.value);
    console.log(this.color.value);
    console.log(this.insurance.value);
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}

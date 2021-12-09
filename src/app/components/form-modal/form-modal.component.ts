import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {OwnerEntity} from "../../interface/OwnerEntity";
import {OwnerService} from "../../service/owner.service";
import {CarEntity} from "../../interface/CarEntity";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit, OnChanges {
  @Input("ownerId") ownerId: number
  @Output("isColor") isColor = new EventEmitter<boolean>()
  @Output("numberItem") numberItem = new EventEmitter<any>()
  @Output("owners") owners = new EventEmitter<OwnerEntity>()
  owner: OwnerEntity;
  isUpdate = false
  formButton = this.fb.group({
    itemId: [null, Validators.required]
  })
  formOwners = this.fb.group({
    aLastName: ['', Validators.required],
    aFirstName: ['', Validators.required],
    aMiddleName: ['', Validators.required],
    aCars: this.fb.array([])
  })

  constructor(private fb: FormBuilder, private ownerService: OwnerService) {
  }

  get cars() {
    return this.formOwners.controls["aCars"] as FormArray
  }


  addCar() {
    let cartsForm = this.fb.group({
      stateNumber: ['', Validators.required, Validators.maxLength(8)],
      manufacturerName: ['', Validators.required, Validators.maxLength(8)],
      modelName: ['', Validators.required],
      carYear: ['', Validators.required]
    });
    this.cars.push(cartsForm)
  }

  deleteCar(carIndex: number) {
    this.cars.removeAt(carIndex)
  }

  initCars(car: CarEntity) {
    let carts = this.fb.group({
      stateNumber: ['', Validators.required],
      manufacturerName: ['', Validators.required],
      modelName: ['', Validators.required],
      carYear: ['', Validators.required]
    });
    carts.patchValue({
      stateNumber: car.stateNumber,
      manufacturerName: car.manufacturerName,
      modelName: car.modelName,
      carYear: car.carYear
    })
    this.cars.push(carts)
  }

  ngOnInit(): void {
  }

  openModal() {
    this.addCar()
    this.formButton.reset()
    this.isColor.emit(false)
    this.numberItem.emit(null)
  }

  getOwner() {
    this.cars.controls = []
    this.ownerService.getOwnerById(this.ownerId).subscribe((owner: OwnerEntity) => {
      this.owner = owner
      this.formOwners.patchValue({
        aLastName: owner.aLastName,
        aFirstName: owner.aFirstName,
        aMiddleName: owner.aMiddleName,
        aCars: owner.aCars.map((car: CarEntity) => {
          this.initCars(car)
        })
      })
    })
  }

  submit() {
    let owner: OwnerEntity = this.formOwners.value
    this.ownerService.createOwner(owner.aLastName, owner.aFirstName, owner.aMiddleName, owner.aCars).subscribe()
    this.ownerService.getOwners().subscribe((owners: OwnerEntity) => {
      this.owners.emit(owners)
    })
  }

  updateOwner() {
    let owner: OwnerEntity = this.formOwners.value
    owner.id = this.ownerId
    this.openModalDisabled()
    this.isUpdate = false
    this.ownerService.editOwner(owner).subscribe()
    this.numberItem.emit(null)
    this.ownerService.getOwners().subscribe((owners: OwnerEntity) => {
      this.owners.emit(owners)
    })
  }


  deleteOwner() {
    this.cars.controls = []
    this.ownerService.deleteOwner(this.ownerId).subscribe()
    this.formOwners.reset()
    this.formButton.reset()
    this.ownerService.getOwners().subscribe((owners: OwnerEntity) => {
      this.owners.emit(owners)
    })
  }

  openModalDisabled() {
    this.cars.controls = []
    this.formOwners.reset()
    this.formButton.reset()
    this.isColor.emit(false)
    this.numberItem.emit(null)
  }

  closeForm() {
    this.cars.controls = []
    this.formOwners.reset()
    this.isUpdate = false
    this.isColor.emit(false)
    this.numberItem.emit(null)
  }

  update() {
    this.isUpdate = true
    this.isColor.emit(false)
  }

  ngOnChanges(): void {
    this.formButton.patchValue({
      itemId: this.ownerId
    })
    if (this.ownerId) {
      this.formOwners.reset()
      this.getOwner()
    }

  }
}

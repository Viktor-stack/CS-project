import {Component, OnInit} from '@angular/core';
import {OwnerEntity} from 'src/app/interface/OwnerEntity';
import {OwnerService} from 'src/app/service/owner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isActivateColorId: any
  owners: OwnerEntity[] = [];
  owner: OwnerEntity;
  event: Event
  isColor = true

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe((owners: OwnerEntity[]) => this.owners = owners)
  }

  markId(id: number): void {
    this.isActivateColorId = id
    this.isColor = true
  }

  isActive(isColor: boolean) {
    this.isColor = isColor
  }

  itemId(itemId: any) {
    this.isActivateColorId = itemId
  }

  getOwners(owners: OwnerEntity[]) {
    this.owners = owners
  }
}

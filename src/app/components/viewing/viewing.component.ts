import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {OwnerService} from "../../service/owner.service";
import {OwnerEntity} from "../../interface/OwnerEntity";

@Component({
  selector: 'app-viewing',
  templateUrl: './viewing.component.html',
  styleUrls: ['./viewing.component.scss']
})
export class ViewingComponent implements OnInit, OnChanges {
  @Input('idItems') idItems: number
  @Output("itemId") itemId = new EventEmitter<boolean>()

  owner: OwnerEntity

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.idItems) {
      this.ownerService.getOwnerById(this.idItems).subscribe((owner: OwnerEntity) => {
        this.owner = owner
      })
    }
  }
}

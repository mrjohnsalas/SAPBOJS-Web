import { Component, OnInit, Input } from '@angular/core';
import { EntityType } from '../../../_models/entity-type.enum';
import { StatusType } from '../../../_models/status-type.enum';
import { Utils } from 'src/app/_helpers/utils.helper';

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent implements OnInit {

  statusTypeColor = '';
  statusTypeName = '';
  utils = new Utils();

  @Input()
  selectedEntity: EntityType;
  @Input()
  selectedStatus: StatusType;

  constructor() { }

  ngOnInit() {
    this.statusTypeColor = this.utils.getStatusTypeColor(this.selectedEntity, this.selectedStatus);
    this.statusTypeName = StatusType[this.selectedStatus];
  }

}

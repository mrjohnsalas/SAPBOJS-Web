import { Component, OnInit, Input } from '@angular/core';
import { EntityType } from '../../../_models/entity-type.enum';
import { StatusType } from '../../../_models/status-type.enum';
import { AppHelperService } from '../../../_services/app-helper.service';

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styleUrls: ['./status-label.component.scss']
})
export class StatusLabelComponent implements OnInit {

  statusTypeColor = '';
  statusTypeName = '';

  @Input()
  selectedEntity: EntityType;
  @Input()
  selectedStatus: StatusType;

  constructor(private appHelperService: AppHelperService) { }

  ngOnInit() {
    this.statusTypeColor = this.appHelperService.getStatusTypeColor(this.selectedEntity, this.selectedStatus);
    this.statusTypeName = StatusType[this.selectedStatus];
  }

}

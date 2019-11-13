import { Component, OnInit, Input } from '@angular/core';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { SpinnerType } from 'src/app/_models/spinner-type.enum';

@Component({
  selector: 'app-obj-list',
  templateUrl: './obj-list.component.html',
  styleUrls: ['./obj-list.component.scss']
})
export class ObjListComponent implements OnInit {

  @Input()
  objName: string;

  @Input()
  isLoadingData = false;

  @Input()
  newPath: string;

  @Input()
  currentDate: string;

  @Input()
  objsFiltered: Object[];

  spinnerType = SpinnerType;

  constructor(public appSettingsService: AppSettingsService) { }

  ngOnInit() {
  }

}

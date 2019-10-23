import { Component, OnInit } from '@angular/core';
import { FailureType } from '../../../_models/failure-type';
import { FailureTypeService } from '../../../_services/failure-type.service';

@Component({
  selector: 'app-failure-types-list',
  templateUrl: './failure-types-list.component.html',
  styleUrls: ['./failure-types-list.component.scss']
})
export class FailureTypesListComponent implements OnInit {

  failureTypes: FailureType[];
  currentDate: string;

  constructor(private failureTypeService: FailureTypeService) { }

  ngOnInit() {
    this.failureTypeService.getFailureTypes().subscribe(objs => this.failureTypes = objs, error => console.error(error));
    this.currentDate = new Date().toLocaleString();
  }

}

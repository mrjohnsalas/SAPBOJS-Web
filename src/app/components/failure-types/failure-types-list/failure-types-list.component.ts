import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FailureType } from '../../../_models/failure-type';
import { FailureTypeService } from '../../../_services/failure-type.service';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { EntityType } from '../../../_models/entity-type.enum';

declare function setFootable(tableName: string): any;
declare function footableIni(tableName: string): any;

@Component({
  selector: 'app-failure-types-list',
  templateUrl: './failure-types-list.component.html',
  styleUrls: ['./failure-types-list.component.scss']
})
export class FailureTypesListComponent implements OnInit, AfterViewInit {

  failureTypes: FailureType[];
  currentDate: string;
  isLoadData = false;
  entityType = EntityType;
  spinnerType = SpinnerType;
  searchText = '';

  constructor(private failureTypeService: FailureTypeService) { }

  ngOnInit() {
    this.isLoadData = true;
    this.loadData();
  }

  ngAfterViewInit(): void {
    setFootable('');
  }

  loadData() {
    this.failureTypeService.getFailureTypes().subscribe(
      objs => { this.failureTypes = objs; this.isLoadData = false; },
      error => console.error(error));
    this.currentDate = new Date().toLocaleString();
  }

  getSearchText(searchText: string) {
    this.searchText = searchText;
  }

}

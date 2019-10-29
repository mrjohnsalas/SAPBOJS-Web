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
  isLoadingData = false;
  entityType = EntityType;
  spinnerType = SpinnerType;
  searchText = '';
  tableName = 'ft-index';

  constructor(private failureTypeService: FailureTypeService) { }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadData();
  }

  ngAfterViewInit(): void {
    setFootable(this.tableName);
  }

  loadData() {
    this.failureTypeService.getFailureTypes().subscribe(
      objs => { this.failureTypes = objs; },
      error => console.error(error),
      () => this.stopLoading() );
  }

  getSearchText(searchText: string) {
    this.searchText = searchText;
  }

  refreshData() {
    this.isLoadingData = true;
    this.loadData();
  }

  stopLoading() {
    this.isLoadingData = false;
    this.currentDate = new Date().toLocaleString();
  }

  footableInit() {
    footableIni(this.tableName);
  }

}

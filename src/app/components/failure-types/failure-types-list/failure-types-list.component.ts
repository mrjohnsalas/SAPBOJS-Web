import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FailureType } from '../../../_models/failure-type';
import { FailureTypeService } from '../../../_services/failure-type.service';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { EntityType } from '../../../_models/entity-type.enum';
import { OptionButtonBar } from '../../../_models/option-button-bar';
import { StatusType } from '../../../_models/status-type.enum';

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
  optionButtonBar = new OptionButtonBar();

  constructor(private failureTypeService: FailureTypeService) { }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadData();
    this.optionButtonBar.parentPath = '/failuretypes';
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

  getOptionButtonBar(row: FailureType): OptionButtonBar {
    this.optionButtonBar.id = row.id;
    this.optionButtonBar.showDetail = true;
    this.optionButtonBar.pathDetail = '["/failuretypes/", ' + row.id.toString() + ']';
    if (row.statusId === StatusType.Activo) {
      this.optionButtonBar.showEdit = true;
      this.optionButtonBar.pathEdit = this.optionButtonBar.parentPath + '/edit/';
      this.optionButtonBar.showCancel = true;
      this.optionButtonBar.pathCancel = this.optionButtonBar.parentPath + '/delete/';
    }
    return this.optionButtonBar;
  }

}

import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FailureType } from '../../../_models/failure-type';
import { FailureTypeService } from '../../../_services/failure-type.service';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { EntityType } from '../../../_models/entity-type.enum';
import { OptionButtonBar } from '../../../_models/option-button-bar';
import { StatusType } from '../../../_models/status-type.enum';
import { Utils } from '../../../_helpers/utils.helper';
import { CommunicationService } from '../../../_services/communication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { Router } from '@angular/router';

declare function setFootable(tableName: string): any;
declare function footableIni(tableName: string): any;

@Component({
  selector: 'app-failure-types-list',
  templateUrl: './failure-types-list.component.html',
  styleUrls: ['./failure-types-list.component.scss']
})
export class FailureTypesListComponent implements OnInit, AfterViewInit {

  ids: number[];
  failureTypes: FailureType[];
  failureTypesFiltered: FailureType[];
  currentDate: string;
  isLoadingData = false;
  entityType = EntityType;
  spinnerType = SpinnerType;
  searchText = '';
  tableName = 'ft-index';
  optionButtonBar = new OptionButtonBar();
  utils = new Utils();
  serviceException: ServiceException;
  parentPath = 'failuretypes';

  constructor(
    private failureTypeService: FailureTypeService,
    private router: Router,
    private communicationService: CommunicationService) { }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadData();
  }

  ngAfterViewInit(): void {
    setFootable(this.tableName);
  }

  loadData() {
    this.failureTypeService.getAll().subscribe(
      obj => this.onSuccess(obj),
      error => this.onError(error),
      () => this.filterData());
  }

  onSuccess(obj: FailureType[]) {
    this.failureTypes = obj;
    if (this.failureTypes) {
      this.ids = this.failureTypes.map(e => e.id);
      this.communicationService.sendIds(this.ids);
    }
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.utils.getServiceExceptionObject(errorResponse);
    console.table(this.serviceException);
    this.router.navigate(['/home']);
  }

  filterData() {
    if (this.searchText) {
      const searchTextUpper = this.searchText.toUpperCase();
      this.failureTypesFiltered = this.failureTypes.filter(obj =>
        obj.id.toString().includes(searchTextUpper)
        || obj.name.toUpperCase().includes(searchTextUpper)
        || obj.description.toUpperCase().includes(searchTextUpper));
    } else {
      this.failureTypesFiltered = this.failureTypes;
    }
    if (this.isLoadingData) {
      this.stopLoading();
    }
  }

  searchData(searchText: string) {
    this.isLoadingData = true;
    this.searchText = searchText;
    this.filterData();
  }

  refreshData(searchText: string) {
    this.isLoadingData = true;
    this.searchText = searchText;
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
    this.optionButtonBar.showDetail = true;
    this.optionButtonBar.pathDetail = this.utils.getRouterLinkValue(this.parentPath, 'detail', row.id);
    if (row.statusId === StatusType.Activo) {
      this.optionButtonBar.showEdit = true;
      this.optionButtonBar.pathEdit = this.utils.getRouterLinkValue(this.parentPath, 'edit', row.id);
      this.optionButtonBar.showCancel = true;
      this.optionButtonBar.pathCancel = this.utils.getRouterLinkValue(this.parentPath, 'delete', row.id);
    }
    return this.optionButtonBar;
  }

}

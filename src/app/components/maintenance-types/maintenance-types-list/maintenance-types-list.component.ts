import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { EntityType } from '../../../_models/entity-type.enum';
import { OptionButtonBar } from '../../../_models/option-button-bar';
import { StatusType } from '../../../_models/status-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { Router } from '@angular/router';
import { AppSettingsService } from 'src/app/_services/app-settings.service';
import { AppHelperService } from 'src/app/_services/app-helper.service';

import { MaintenanceType } from '../../../_models/maintenance-type';
import { MaintenanceTypeService } from '../../../_services/maintenance-type.service';
import { MaintenanceTypeSharedService } from '../../../_services/maintenance-type-shared.service';

declare function setFootable(tableName: string): any;
declare function footableIni(tableName: string): any;

@Component({
  selector: 'app-maintenance-types-list',
  templateUrl: './maintenance-types-list.component.html',
  styleUrls: ['./maintenance-types-list.component.scss']
})
export class MaintenanceTypesListComponent implements OnInit, AfterViewInit {

  objName = 'Tipo de mantenimiento';
  ids: number[];
  objs: MaintenanceType[];
  objsFiltered: MaintenanceType[];
  currentDate: string;
  isLoadingData = false;
  entityType = EntityType.MaintenanceType;
  spinnerType = SpinnerType;
  searchText = '';
  tableName = 'ft-index';
  optionButtonBar = new OptionButtonBar();
  serviceException: ServiceException;
  parentPath = 'maintenancetypes';
  newPath = `/${this.parentPath}/${this.appSettingsService.CreateLink}`;
  homePath = '/home';

  constructor(
    private objService: MaintenanceTypeService,
    private router: Router,
    private objSharedService: MaintenanceTypeSharedService,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService) { }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadData();
  }

  ngAfterViewInit(): void {
    setFootable(this.tableName);
  }

  loadData() {
    this.objService.getAll().subscribe(
      obj => this.onSuccess(obj),
      error => this.onError(error),
      () => this.filterData());
  }

  onSuccess(obj: MaintenanceType[]) {
    this.objs = obj;
    if (this.objs) {
      this.ids = this.objs.map(e => e.id);
      this.objSharedService.sendIds(this.ids);
    }
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.appHelperService.getServiceExceptionObject(errorResponse);
    this.appHelperService.sendErrorMessage(this.serviceException.message);
    this.router.navigate([this.homePath]);
  }

  filterData() {
    if (this.searchText) {
      const searchTextUpper = this.searchText.toUpperCase();
      this.objsFiltered = this.objs.filter(obj =>
        obj.id.toString().includes(searchTextUpper)
        || obj.name.toUpperCase().includes(searchTextUpper)
        || obj.description.toUpperCase().includes(searchTextUpper));
    } else {
      this.objsFiltered = this.objs;
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

  getOptionButtonBar(row: MaintenanceType): OptionButtonBar {
    this.optionButtonBar.showDetail = true;
    this.optionButtonBar.pathDetail = this.appHelperService.getRouterLinkValue(this.parentPath, this.appSettingsService.DetailLink, row.id);
    if (row.statusId === StatusType.Activo) {
      this.optionButtonBar.showEdit = true;
      this.optionButtonBar.pathEdit = this.appHelperService.getRouterLinkValue(this.parentPath, this.appSettingsService.EditLink, row.id);
      this.optionButtonBar.showCancel = true;
      this.optionButtonBar.pathCancel = this.appHelperService.getRouterLinkValue(this.parentPath, this.appSettingsService.DeleteLink, row.id);
    } else {
      this.optionButtonBar.showEdit = false;
      this.optionButtonBar.pathEdit = '';
      this.optionButtonBar.showCancel = false;
      this.optionButtonBar.pathCancel = '';
    }
    return this.optionButtonBar;
  }
}

import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { EntityType } from '../../../_models/entity-type.enum';
import { OptionButtonBar } from '../../../_models/option-button-bar';
import { StatusType } from '../../../_models/status-type.enum';
import { Utils } from '../../../_helpers/utils.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceException } from 'src/app/_models/service-exception';
import { Router } from '@angular/router';
import { AppSettingsService } from 'src/app/_services/app-settings.service';

import { FailureImpact } from '../../../_models/failure-impact';
import { FailureImpactService } from '../../../_services/failure-impact.service';
import { FailureImpactSharedService } from '../../../_services/failure-impact-shared.service';

declare function setFootable(tableName: string): any;
declare function footableIni(tableName: string): any;

@Component({
  selector: 'app-failure-impacts-list',
  templateUrl: './failure-impacts-list.component.html',
  styleUrls: ['./failure-impacts-list.component.scss']
})
export class FailureImpactsListComponent implements OnInit, AfterViewInit {

  objName = 'Impacto de falla';
  ids: number[];
  objs: FailureImpact[];
  objsFiltered: FailureImpact[];
  currentDate: string;
  isLoadingData = false;
  entityType = EntityType.FailureImpact;
  spinnerType = SpinnerType;
  searchText = '';
  tableName = 'ft-index';
  optionButtonBar = new OptionButtonBar();
  utils = new Utils();
  serviceException: ServiceException;
  parentPath = 'failureimpacts';
  newPath = `/${this.parentPath}/${this.appSettingsService.CreateLink}`;
  homePath = '/home';

  constructor(
    private objService: FailureImpactService,
    private router: Router,
    private objSharedService: FailureImpactSharedService,
    public appSettingsService: AppSettingsService) { }

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

  onSuccess(obj: FailureImpact[]) {
    this.objs = obj;
    if (this.objs) {
      this.ids = this.objs.map(e => e.id);
      this.objSharedService.sendIds(this.ids);
    }
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.utils.getServiceExceptionObject(errorResponse);
    console.table(this.serviceException);
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

  getOptionButtonBar(row: FailureImpact): OptionButtonBar {
    this.optionButtonBar.showDetail = true;
    this.optionButtonBar.pathDetail = this.utils.getRouterLinkValue(this.parentPath, this.appSettingsService.DetailLink, row.id);
    if (row.statusId === StatusType.Activo) {
      this.optionButtonBar.showEdit = true;
      this.optionButtonBar.pathEdit = this.utils.getRouterLinkValue(this.parentPath, this.appSettingsService.EditLink, row.id);
      this.optionButtonBar.showCancel = true;
      this.optionButtonBar.pathCancel = this.utils.getRouterLinkValue(this.parentPath, this.appSettingsService.DeleteLink, row.id);
    }
    return this.optionButtonBar;
  }
}
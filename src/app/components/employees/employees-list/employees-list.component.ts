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

import { Employee } from '../../../_models/employee';
import { EmployeeService } from '../../../_services/employee.service';
import { EmployeeSharedService } from '../../../_services/employee-shared.service';
import { JobService } from '../../../_services/job.service';
import { Job } from '../../../_models/job';
import { EmployeeSearch } from 'src/app/_models/employee-search';

declare function setFootable(tableName: string): any;
declare function footableIni(tableName: string): any;

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {

  objName = 'Empleado';
  ids: number[];
  objs: Employee[];
  objsFiltered: Employee[];
  currentDate: string;
  isLoadingData = false;
  entityType = EntityType.Employee;
  spinnerType = SpinnerType;
  // searchText = '';
  tableName = 'ft-index';
  optionButtonBar = new OptionButtonBar();
  serviceException: ServiceException;
  parentPath = 'employees';
  newPath = `/${this.parentPath}/${this.appSettingsService.CreateLink}`;
  homePath = '/home';
  jobs: Job[];
  searchForm: EmployeeSearch;

  constructor(
    private objService: EmployeeService,
    private router: Router,
    private objSharedService: EmployeeSharedService,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService,
    private jobService: JobService) { }

  ngOnInit() {
    this.isLoadingData = true;
    this.loadJobs();
    this.loadData();
  }

  ngAfterViewInit(): void {
    setFootable(this.tableName);
  }

  loadJobs() {
    this.jobService.getAll().subscribe(
      obj => this.onSuccessJob(obj),
      error => this.onErrorJob(error));
  }

  onSuccessJob(obj: Job[]) {
    // filtrar jobs
    this.jobs = obj.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  onErrorJob(errorResponse: HttpErrorResponse) {
    this.jobs = null;
  }

  loadData() {
    this.objService.getAll().subscribe(
      obj => this.onSuccess(obj),
      error => this.onError(error),
      () => this.filterData());
  }

  onSuccess(obj: Employee[]) {
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
    if (this.searchForm) {
      this.objsFiltered = this.objs;
      // Search text
      if (this.searchForm.searchText) {
        const searchTextUpper = this.searchForm.searchText.toUpperCase();
        this.objsFiltered = this.objsFiltered.filter(obj =>
          obj.id.toString().includes(searchTextUpper)
          || obj.firstName.toUpperCase().includes(searchTextUpper)
          || obj.lastName.toUpperCase().includes(searchTextUpper)
          || obj.grafipapelId.toUpperCase().includes(searchTextUpper));
      }
      // Search Job
      if (this.searchForm.job) {
        this.objsFiltered = this.objsFiltered.filter(obj =>
          obj.jobId === this.searchForm.job.id);
      }
    } else {
      this.objsFiltered = this.objs;
    }
    if (this.isLoadingData) {
      this.stopLoading();
    }
  }

  searchData(searchForm: EmployeeSearch) {
    this.isLoadingData = true;
    this.searchForm = searchForm;
    this.filterData();
  }

  refreshData(searchForm: EmployeeSearch) {
    this.isLoadingData = true;
    this.searchForm = searchForm;
    this.loadData();
  }

  jobChange(searchForm: EmployeeSearch) {
    this.isLoadingData = true;
    this.searchForm = searchForm;
    this.filterData();
  }

  stopLoading() {
    this.isLoadingData = false;
    this.currentDate = new Date().toLocaleString();
  }

  footableInit() {
    footableIni(this.tableName);
  }

  getOptionButtonBar(row: Employee): OptionButtonBar {
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

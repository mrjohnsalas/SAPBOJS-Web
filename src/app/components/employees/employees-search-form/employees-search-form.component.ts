import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EmployeeSearch } from '../../../_models/employee-search';
import { Job } from 'src/app/_models/job';

@Component({
  selector: 'app-employees-search-form',
  templateUrl: './employees-search-form.component.html',
  styleUrls: ['./employees-search-form.component.scss']
})
export class EmployeesSearchFormComponent implements OnInit {

  @Output()
  sendEventSearch = new EventEmitter<EmployeeSearch>();

  @Output()
  sendEventRefresh = new EventEmitter<EmployeeSearch>();

  @Output()
  sendEventJobChange = new EventEmitter<EmployeeSearch>();

  @Input()
  isLoadingData = false;

  @Input()
  jobs: Job[];

  searchText: string;
  selectedJob: Job;
  searchForm: EmployeeSearch;

  constructor() { }

  ngOnInit() {
    this.searchForm = new EmployeeSearch();
  }

  search() {
    this.loadSearchForm();
    this.sendEventSearch.emit(this.searchForm);
  }

  refresh() {
    this.loadSearchForm();
    this.sendEventRefresh.emit(this.searchForm);
  }

  jobChange() {
    this.loadSearchForm();
    this.sendEventJobChange.emit(this.searchForm);
  }

  loadSearchForm() {
    this.searchForm.searchText = this.searchText;
    this.searchForm.job = this.selectedJob;
  }
}

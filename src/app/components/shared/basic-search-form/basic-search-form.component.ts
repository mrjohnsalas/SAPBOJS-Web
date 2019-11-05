import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-basic-search-form',
  templateUrl: './basic-search-form.component.html',
  styleUrls: ['./basic-search-form.component.scss']
})
export class BasicSearchFormComponent implements OnInit {

  @Output()
  sendEventSearch = new EventEmitter<string>();

  @Output()
  sendEventRefresh = new EventEmitter();

  @Input()
  isLoadingData = false;

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.isLoadingData = true;
    this.sendEventSearch.emit(this.searchText);
  }

  refresh() {
    this.isLoadingData = true;
    this.sendEventRefresh.emit();
  }
}

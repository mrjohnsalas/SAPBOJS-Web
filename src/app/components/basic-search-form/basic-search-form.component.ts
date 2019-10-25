import { Component, OnInit, EventEmitter, Output } from '@angular/core';


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

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.sendEventSearch.emit(this.searchText);
  }

  refresh() {
    this.sendEventRefresh.emit();
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-basic-search-form',
  templateUrl: './basic-search-form.component.html',
  styleUrls: ['./basic-search-form.component.scss']
})
export class BasicSearchFormComponent implements OnInit {

  @Output()
  sendEvent: EventEmitter<string> = new EventEmitter<string>();

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.sendEvent.emit(this.searchText);
  }
}

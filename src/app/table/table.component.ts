import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Input('cols') cols : Array<any> = [{title: 'ID', key: 'id'}, {title: 'Name', key: 'name'}];
  @Input('datasource') datasource : Array<any> = [{id: 1, name: 'my name'}];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  
  @Input('cols') cols : Array<any> = [];
  @Input('datasource') datasource : Array<any>;
  @Input('title') title: string = '';
  @Output() rowclicked = new EventEmitter();
  loading = true;

  constructor() { }

  ngOnInit() {

  }

  sortHeader(e, col) {
    const sorted = this.datasource.sort((a,b) => {
      if ( a[col.key] < b[col.key] ){
        return -1;
      }
      if ( a[col.key] > b[col.key] ){
        return 1;
      }
      return 0;

    });
    this.datasource = sorted;
  }

  handleRowClick(e:any, row:any, col:any) {
    this.rowclicked.emit({row, col});
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.datasource && changes.datasource.currentValue) {
      this.datasource = changes.datasource.currentValue;
      this.loading = false;
    }
  }
}

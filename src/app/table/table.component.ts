import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

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
  datasourcebckup = [];
  paginatedDatasource = [];
  loading = true;
  search = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.search.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        if(value != '') {
          const filteredData = this.filter(value, this.datasourcebckup);
          this.datasource = filteredData;
        }else{
          this.datasource = this.datasourcebckup;
        }
    });
  }

  filter (w:string, data) {
    return data.filter(item => {
      for (let i = 0; i < this.cols.length; i++) {
        if(item[this.cols[i].key].toString().toLowerCase().includes(w.toLowerCase()) > 0){
          return true;
        }else if(i !== this.cols.length - 1) {
           continue;
        }else {
          return false;
        }
      }
    });
  }

  sortHeader(e, col) {
    const lastEl = this.datasource[this.datasource.length - 1];
    const firstEl = this.datasource[0];
    const asc = lastEl[col.key] > firstEl[col.key];

    const sorted = this.datasource.sort((a,b) => {
      if ( a[col.key] < b[col.key] ){
        return asc ? 1 : -1;
      }
      if ( a[col.key] > b[col.key] ){
        return asc ? -1 : 1;
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
      this.datasourcebckup = this.datasource;
      this.loading = false;
    }
  }
}

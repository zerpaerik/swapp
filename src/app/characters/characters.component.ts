import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnChanges {
  @Input('show') show = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.show) {
      this.show = change.show.currentValue;
    }
  }

  visible(){
    return this.show;
  }

}


@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.scss']
})
export class CharComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

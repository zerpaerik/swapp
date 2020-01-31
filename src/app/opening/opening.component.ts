import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnChanges {
  
  @Input('crawl') opening_crawl : Array<any> = [];
  @Input('episode') episode : Array<any>;
  @Input('title') title: string = '';
  @Input('stars') numStars: number = 0;
  @Output('onclose') closeClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.numStars; i++) {
        let star = document.createElement("div");  
        star.className = "star";
        var xy = this.getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
        document.body.append(star);
        }
    }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.crawl) {
      this.opening_crawl = changes.crawl.currentValue;
    }else if(changes.stars) {
      this.numStars = changes.stars.currentValue;
    }else if(changes.title) {
      this.title = changes.title.currentValue;
    }else if(changes.episode) {
      this.episode = changes.episode.currentValue;
    }
  }

  closeMe() {
    this.closeClick.emit(true);
  }

getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

}

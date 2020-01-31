import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => closed', [
        style({ opacity: 1 }), 
        animate(600, style({opacity: 0}))
      ])
    ])
  ]
})
export class OpeningComponent implements OnChanges, OnDestroy {
  
  @Input('crawl') opening_crawl : Array<any> = [];
  @Input('episode') episode : Array<any>;
  @Input('title') title: string = '';
  @Input('stars') numStars: number = 0;
  @Output('onclose') closeClick = new EventEmitter();
  audio = new Audio();
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.numStars; i++) {
        let star = document.createElement("div");  
        star.className = "star";
        var xy = this.getRandomPosition();
            star.style.top = xy[0] + 'px';
            star.style.left = xy[1] + 'px';
        document.getElementById('opening-container').append(star);
    }
    setTimeout(() => this.playIntro(), 2000);
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

  ngOnDestroy() {
    this.removeStars();
    this.audio.src = '';
  }

  removeStars() {
    const stars = document.getElementsByClassName('star');
    for (let i = 0; i < stars.length; i++) {
      stars.item(i).remove();
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

  playIntro() {
    this.audio.src = "assets/intro.mp3";
    this.audio.load();
    this.audio.play();
  }

}

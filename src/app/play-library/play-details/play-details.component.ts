import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayModel } from 'src/app/data/play-model';

@Component({
  selector: 'app-play-details',
  templateUrl: './play-details.component.html',
  styleUrls: ['./play-details.component.scss']
})
export class PlayDetailsComponent {
  currentPlay: PlayModel;
  originalTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set play(value) {
    if(!value) return;
    this.currentPlay = {...value}
    this.originalTitle = this.currentPlay.name;
  }
}

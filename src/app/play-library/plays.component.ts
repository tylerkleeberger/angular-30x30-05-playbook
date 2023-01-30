import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayModel } from '../data/play-model';
import { PlaysService } from '../services/plays.service';

const emptyPlay: PlayModel = {
  id: null,
  name: '',
  type: '',
}

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {
  plays = [];
  plays$: any;
  selectedPlay = emptyPlay;
  originalTitle = '';

  constructor(private playsService: PlaysService) { }

  ngOnInit(): void {
    this.fetchPlay();
  }

  selectPlay(play) {
    this.selectedPlay = play;
  }

  fetchPlay() {
    this.plays$ = this.playsService.all();
  }

  savePlay(play) {
    if(play.id) {
      this.updatePlay(play);
    } else {
      this.createPlay(play);
    }
  }

  createPlay(play) {
    this.playsService.create(play)
      .subscribe(result => this.fetchPlay());
  }

  updatePlay(play) {
    this.playsService.update(play)
      .subscribe(result => this.fetchPlay());
  }

  deletePlay(playId) {
    this.playsService.delete(playId).subscribe(result => this.fetchPlay);
  }

  reset() {
    this.selectPlay({...emptyPlay});
  }
}

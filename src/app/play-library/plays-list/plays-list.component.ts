import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayModel } from 'src/app/data/play-model';

@Component({
  selector: 'app-plays-list',
  templateUrl: './plays-list.component.html',
  styleUrls: ['./plays-list.component.scss']
})
export class PlaysListComponent {
  @Input() plays: PlayModel[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

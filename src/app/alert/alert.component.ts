import { Component,  OnInit } from '@angular/core';
import { Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
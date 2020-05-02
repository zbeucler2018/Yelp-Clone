import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../result/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {

  @Input() result: SearchResult;
  
  constructor() { }

  ngOnInit() {
  }

}

import {
  Component,OnInit,
  Output,EventEmitter,ElementRef
} from '@angular/core';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Rx';

import { YelpService } from '../yelp.service';
import { SearchResult } from '../result/result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private yelp: YelpService,
              private el: ElementRef) {
  }

  //Using a button click on the second input field. A regular form could be used as well
  YelpSearch(location: HTMLInputElement, price: HTMLInputElement, cat: HTMLInputElement): void {
    if (location.value.length > 1) {
        this.yelp.search(location.value, price.value, cat.value)
        // act on the return of the search
        .subscribe(   //TAKES 3 Arguments, onSuccess, onError, onCompletion
            (results: SearchResult[]) => { // on success
            this.loading.emit(false);
            this.results.emit(results);
            location.value = ''; //reset the value of location to nothing
            price.value = ''; //reset the value of location to nothing
            cat.value = ''; //reset the value of location to nothing

            },
            (err: any) => { // on error
            console.log(err);
            this.loading.emit(false);
            },
            () => { // on completion
            this.loading.emit(false);
            }
        );
    }
  }

  ngOnInit(): void { 
  }

}

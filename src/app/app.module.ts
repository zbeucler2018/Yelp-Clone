import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { YelpService } from './yelp.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [YelpService,
              {provide:'YELP_API_KEY', useValue: 'OciYXcs1Og9kqphBd_58FlgGSFIgPyjXBMLZBM8XP_WNatyCmFQbPRC1nQi-7nu1OQILvM5K4GrVAYSsRDuIMuDQ5Ms93oNQmWfovT1ZjLgeVGiLQJXeH5yhajTSXHYx'},
              {provide:'YELP_API_URL', useValue: 'https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

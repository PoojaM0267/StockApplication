import { Component, OnInit, Inject } from '@angular/core';

import { SignalrService } from '../app/SignalrService';
import { HttpClient } from '@angular/common/http';
import { StockModel } from './stockModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  title = 'app';
  baseUrl: string;
  httpClient: HttpClient;

  stockData: StockModel[];

  constructor(public signalRService: SignalrService, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.httpClient = http;
  }

  ngOnInit() {
    this.signalRService.connect();
    this.signalRService.addStockFeedListener();

    // start the timer

    const url = `${this.baseUrl}api/Stock`;

    //this.http.get('https://localhost:44394/api/Stock')
    //  .subscribe(res => console.log(res));


    this.httpClient.get(url)
      .subscribe(res => console.log(res));

    this.httpClient.get<StockModel[]>(url).subscribe((result: StockModel[]) => {
      this.stockData = result;
    }, error => console.error(error));
  }
}

import { Injectable, Inject } from '@angular/core';

import * as signalR from '@aspnet/signalr';
import { StockModel } from './stockModel';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  baseUrl: string;
  stockData: StockModel[];
  stockHubConnection: signalR.HubConnection;

  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public connect = () => {
    const url = `${this.baseUrl}stock-feed`;

    this.stockHubConnection = new signalR.HubConnectionBuilder()
      .withUrl(url)
      .build();

    this.stockHubConnection
      .start()
      .then(() => console.log('Connected to stock feed'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addStockFeedListener = () => {
    this.stockHubConnection.on('Stock Data', (data) => {
      this.stockData = data;
      console.log(data);
    });
  }
}

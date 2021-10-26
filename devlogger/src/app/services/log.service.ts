import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject, Observable } from 'rxjs';
import { observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null!,
    text: null!,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'genereted components', date: new Date(12 / 10 / 2020) },
      { id: '2', text: 'genereted', date: new Date(12 / 1 / 2020) },
      { id: '3', text: 'components', date: new Date(12 / 2 / 2020) },
    ];
  }
  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }
  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}

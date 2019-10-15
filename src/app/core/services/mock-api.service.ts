import { Injectable } from '@angular/core';
import { ApiInterface } from './api.service';
import { Observable, timer, Subject } from 'rxjs';
import { TextboxQuestion, DropdownQuestion } from '../model/questions.model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MockApiService implements ApiInterface {
  get<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    switch (url) {
      case 'questions':
        const response = new Subject<any>();
        timer(1000).subscribe(() => {
          response.next({
            questions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => {
              i += 1;
              if (i === 4) {
                return new DropdownQuestion(
                  {
                    description: `something special`,
                    key: `question dropdown`,
                    label: `label dropdown`,
                    order: 30,
                    validators: [Validators.required], // not dynamic yet
                    title: 'QUESTION special',
                    // value: null,
                    group: 1,
                    choices: ['go', 'go2', 'go3'],
                  },
                  'dropdown'
                );
              } else if (i === 5) {
                return new DropdownQuestion(
                  {
                    description: `something special`,
                    key: `question dropdown 2`,
                    label: `label dropdown`,
                    order: 30,
                    validators: [Validators.required], // not dynamic yet
                    title: 'QUESTION special',
                    value: '0',
                    group: 1,
                    choices: ['go', 'go2', 'go3'],
                  },
                  'radio'
                );
              } else {
                return new TextboxQuestion({
                  description: `something ${i}`,
                  key: `question ${i}`,
                  label: `label ${i}`,
                  order: i,
                  validators: [Validators.required, Validators.email], // not dynamic yet
                  title: `QUESTION ${i}`,
                  value: `prefilled value`,
                  type: 'email',
                  group: Math.ceil(i / 4),
                });
              }
            }),
            group: [
              { n: 1, title: 'Group A', description: 'ABC' },
              { n: 2, title: 'Group B', description: 'ABC' },
              { n: 3, title: 'Group C', description: 'ABC' },
            ],
            title: 'F: Practical Concrete Pants?',
          });
        });
        return response;
      default:
        console.log(params);
    }
    throw new Error('Method not implemented.');
  }
  post<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }
  put<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }
  delete<T>(
    url: string,
    params?: { [param: string]: string | string[] }
  ): Observable<T> {
    console.log(url, params);
    throw new Error('Method not implemented.');
  }

  constructor() {}
}

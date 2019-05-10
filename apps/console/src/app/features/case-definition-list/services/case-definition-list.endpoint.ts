import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, delay, tap } from 'rxjs/operators';

import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
import * as sortHelpers from '../../../shared/helpers/sort-helpers';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';
import { CustomRequestStateUpdater } from '../../../shared/types/custom-request-state-updater';
import { Sort } from '../../../shared/types/sort';
import { SortOrder } from '../../../app.constants';

import { CASE_DEFINITION_LIST_CONFIG } from '../case-definition-list.config';
import { CaseDefinition } from '../types/case-definition';

@Injectable()
export class CaseDefinitionListEndpoint {
  constructor(private http: HttpClient) {}

  listCaseDefinition(
    sort: Sort,
    requestStateUpdater: StoreRequestStateUpdater
  ): Observable<Array<CaseDefinition>> {
    const request = CASE_DEFINITION_LIST_CONFIG.requests.listCaseDefinition;
    const options = {
      params: {
        ...sortHelpers.convertSortToRequestParams(sort)
      }
    };
    requestStateUpdater(request.name, { inProgress: true });
    return this.http.get<Array<CaseDefinition>>(request.url, options).pipe(
      tap(a => requestStateUpdater(request.name, { inProgress: false })),
      catchError((error: HttpErrorResponse) => {
        requestStateUpdater(request.name, {
          inProgress: false,
          error: true
        });
        return throwError(error);
      })
    );
  }
}

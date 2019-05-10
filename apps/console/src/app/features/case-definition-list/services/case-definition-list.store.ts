import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '../../../utils/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, switchMap, retry } from 'rxjs/operators';

import { CaseDefinitionListStoreState } from './case-definition-list.store.state';
import { CaseDefinitionListEndpoint } from './case-definition-list.endpoint';
import { CaseDefinition } from '../types/case-definition';
import * as endpointHelpers from '../../../shared/helpers/endpoint.helpers';
import { StoreRequestStateUpdater } from '../../../shared/types/store-request-state-updater';
import { CustomRequestStateUpdater } from '../../../shared/types/custom-request-state-updater';
import { Sort } from '../../../shared/types/sort';

@Injectable()
export class CaseDefinitionListStore extends Store<CaseDefinitionListStoreState>
  implements OnDestroy {
  private ngUnsubscribe$: Subject<undefined> = new Subject();
  private reloadCaseDefinitions$: Subject<undefined> = new Subject();
  private storeRequestStateUpdater: StoreRequestStateUpdater;

  constructor(private endpoint: CaseDefinitionListEndpoint) {
    super(new CaseDefinitionListStoreState());
  }

  init(): void {
    this.initiReloadCaseDefinitions();

    this.storeRequestStateUpdater = endpointHelpers.getStoreRequestStateUpdater(
      this
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  reloadCaseDefinitions(): void {
    this.reloadCaseDefinitions$.next();
  }

  openDetailsView(caseDefinition: CaseDefinition) {
    this.setDetailsViewState(caseDefinition);
  }

  closeDetailsView() {
    this.setDetailsViewState(null);
  }

  private setDetailsViewState(caseDefinition: CaseDefinition | null) {
    this.setState({
      ...this.state,
      caseDefinitionInDetailsView: {
        opened: caseDefinition
      }
    });
  }

  private initiReloadCaseDefinitions(): void {
    this.reloadCaseDefinitions$
      .pipe(
        switchMap(() => {
          return this.endpoint.listCaseDefinition(
            this.state.caseDefinitionList.sort,
            this.storeRequestStateUpdater
          );
        }),
        tap(definitions => {
          this.updateCaseDefinitionsState(definitions);
        }),
        retry(),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe();
  }

  private updateCaseDefinitionsState(definitions: Array<CaseDefinition>): void {
    this.setState({
      ...this.state,
      caseDefinitionList: {
        ...this.state.caseDefinitionList,
        definitions: [...definitions]
      }
    });
  }
}

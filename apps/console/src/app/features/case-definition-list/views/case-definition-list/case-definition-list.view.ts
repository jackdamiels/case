import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { CaseDefinitionListStore } from '../../services/case-definition-list.store';
import { CaseDefinitionListEndpoint } from '../../services/case-definition-list.endpoint';
import { CASE_DEFINITION_LIST_CONFIG } from '../../case-definition-list.config';
import * as sortHelpers from '../../../../shared/helpers/sort-helpers';

@Component({
  selector: 'cem-case-definition-list',
  templateUrl: './case-definition-list.view.html',
  styleUrls: ['./case-definition-list.view.scss'],
  providers: [CaseDefinitionListStore, CaseDefinitionListEndpoint]
})
export class CaseDefinitionListView implements OnInit, OnDestroy {
  private ngUnsubscribe$: Subject<undefined> = new Subject();

  constructor(
    public store: CaseDefinitionListStore,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.init();
    this.store.reloadCaseDefinitions();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  private subscribeToQueryParamsUpdates(): void {
    this.route.queryParams
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(params => {
        // this.store.sortCandidates(
        //     sortHelpers.convertQueryParamsToSort(
        //         params,
        //         COFFEE_LIST_CONFIG.defaultSortField
        //     )
        // );
      });
  }
}

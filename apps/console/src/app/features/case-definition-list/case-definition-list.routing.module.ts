import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseDefinitionListView } from './views/case-definition-list/case-definition-list.view';

export const routingPaths = {
  caseDefinitionList: 'case-definitions'
};

const routes: Routes = [
  {
    path: routingPaths.caseDefinitionList,
    component: CaseDefinitionListView
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseDefinitionListRoutingModule {}

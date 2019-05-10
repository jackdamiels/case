import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundView } from './views/page-not-found/page-not-found.view';
import { routingPaths as caseDefinitionListRoutingPaths } from './features/case-definition-list/case-definition-list.routing.module';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: caseDefinitionListRoutingPaths.caseDefinitionList,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundView }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

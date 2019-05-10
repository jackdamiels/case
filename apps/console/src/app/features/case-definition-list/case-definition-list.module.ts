import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseDefinitionListRoutingModule } from './case-definition-list.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CaseDefinitionListView } from './views/case-definition-list/case-definition-list.view';
import { CaseDefinitionComponent } from './components/case-definition/case-definition.component';

@NgModule({
  declarations: [CaseDefinitionListView, CaseDefinitionComponent],
  imports: [CaseDefinitionListRoutingModule, SharedModule, CommonModule]
})
export class CaseDefinitionListModule {}

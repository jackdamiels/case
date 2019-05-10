import { Component, Input } from '@angular/core';
import { CaseDefinition } from '../../types/case-definition';

@Component({
  selector: 'cem-case-case-definition',
  templateUrl: './case-definition.component.html',
  styleUrls: ['./case-definition.component.scss']
})
export class CaseDefinitionComponent {

  @Input() caseDefinition: CaseDefinition;

  constructor(
  ) {}
}

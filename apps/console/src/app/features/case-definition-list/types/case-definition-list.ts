import { CaseDefinition } from './case-definition';
import { Sort } from '../../../shared/types/sort';

export interface CaseDefinitionList {
  definitions: CaseDefinition[];
  sort: Sort;
}

import { Requests } from '../types/requests';
import { CaseDefinitionList } from '../types/case-definition-list';
import { CASE_DEFINITION_LIST_CONFIG } from '../case-definition-list.config';
import { CaseDefinition } from '../types/case-definition';

export class CaseDefinitionListStoreState {
  caseDefinitionList: CaseDefinitionList = {
    definitions: [],
    sort: {
      field: CASE_DEFINITION_LIST_CONFIG.defaultSortField,
      order: CASE_DEFINITION_LIST_CONFIG.defaultSortOrder
    }
  };
  caseDefinitionInDetailsView: {
    opened: CaseDefinition | null;
  };
  requests: Requests = {
    listCaseDefinitions: {}
  };
}

import { APP_CONFIG } from '../../app.config';
import { SortOrder } from '../../app.constants';

export const CASE_DEFINITION_LIST_CONFIG = {
  requests: {
    listCaseDefinition: {
      name: 'listCaseDefinition',
      url: `${APP_CONFIG.apiBaseUrl}/case-definition`
    },
    getCaseDefinition: {
      name: 'getCaseDefinition',
      url: `${APP_CONFIG.apiBaseUrl}/case-definition/:id`
    },
    getCaseDefinitionCount: {
      name: 'getCaseDefinitionCount',
      url: `${APP_CONFIG.apiBaseUrl}/case-definition/count`
    }
  },
  defaultSortField: 'key',
  defaultSortOrder: SortOrder.Asc
};

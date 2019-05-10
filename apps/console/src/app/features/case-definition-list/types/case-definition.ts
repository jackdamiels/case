import { RequestState } from '../../../shared/types/request-state';
import { UserAction } from '../case-definition-list.constants';

export interface CaseDefinition {
  id: string;
  key: string;
  category: string;
  name: string;
  version: number;
  resource: string;
  deploymentId: string;
  tenantId: string | null;
  historyTimeToLive: number | null;
  userAction?: UserAction;
  updateRequest?: RequestState;
}

import { createChainSyncTask } from '../../../../sync';
import { abstractChainConfig } from './config';

export const abstractSyncTransfers = createChainSyncTask(abstractChainConfig);

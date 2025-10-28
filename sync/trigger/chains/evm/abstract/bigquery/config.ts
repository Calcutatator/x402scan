import { FACILITATORS_BY_CHAIN } from '@facilitators/config';
import { createEvmChainConfig } from '@/trigger/fetch/bitquery/query';
import { Chain } from '@/trigger/types';

export const baseChainConfig = createEvmChainConfig({
  cron: '*/30 * * * *',
  maxDuration: 1000,
  network: 'abstract',
  chain: 'abstract',
  facilitators: FACILITATORS_BY_CHAIN(Chain.ABSTRACT),
});

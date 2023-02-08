import { ZTransaction } from '../../../domain/types';
import { z } from 'zod';

// **** Register Transaction **** //
export const ZRegisterTransactionRequest = ZTransaction.omit({
  id: true,
  status: true,
  transferType: true,
  createdAt: true,
  updatedAt: true,
});
export type RegisterTransactionRequest = z.infer<
  typeof ZRegisterTransactionRequest
>;

export const ZRegisterTransactionResponse = ZTransaction.omit({
  transferType: true,
});
export type RegisterTransactionResponse = z.infer<
  typeof ZRegisterTransactionResponse
>;
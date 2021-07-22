import express from 'express';
import { createClient } from '../controllers/create_clients';
import { createBanker } from '../controllers/create_banker';
import { createTransaction } from '../controllers/create_transaction';
import { bankerToClient } from '../controllers/banker_client';
import { deleteClient } from '../controllers/delete_client';
import { getClient } from '../controllers/getClients';
const router = express.Router();


router.get('/client', getClient);
router.post('/client', createClient);
router.delete('/client/:clientId', deleteClient);
router.post('/banker', createBanker);
router.put('/banker/:bankerId/client/:clientId', bankerToClient);
router.post('/client/:clientId/transaction', createTransaction);

export default router;

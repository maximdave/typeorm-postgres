import { Request, Response } from "express";
import { Client } from '../entities/Clients';
import { Banker } from '../entities/Banker';


export const bankerToClient = async (req: Request, res: Response) => {
    try {
        const { bankerId, clientId } = req.params;

		const client = await Client.findOne(
			parseInt(clientId)
		);

		const banker = await Banker.findOne(
			parseInt(bankerId)
		);

		if (banker && client) {
			banker.clients = [client];
			await banker.save();
			return res.json({
				msg: 'banker connected to client',
			});
		} else {
			return res.json({
				msg: 'banker or client not found',
			});
		}
    } catch (error) {
        throw new Error("Unable to connet banker to client", );
        
    }
}
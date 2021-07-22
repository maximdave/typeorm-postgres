import { Request, Response } from 'express';
import { Client } from '../entities/Clients';

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;

    const response = await Client.delete(parseInt(clientId));

    res
      .status(200)
      .json({
        data: response,
        messsge: `Suceessfully Deleted client with ID : ${clientId}`,
      });
  } catch (error) {
    throw new Error('Unable yo delete');
  }
};

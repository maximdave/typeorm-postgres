import { Request, Response } from 'express';
import { Client } from '../entities/Clients';
import { createQueryBuilder } from 'typeorm';

export const getClient = async (req: Request, res: Response) => {
  try {
    const client = await createQueryBuilder('client')
      .select('client.first_name')
      .addSelect('client.balance')
      .from(Client, 'client')
      .leftJoinAndSelect('client.transactions', 'transactions')
      .where('client.id = :clientId', { clientId: 3 })
      .getMany();

    return res.send(client);

    // const client = await Client.find();
  } catch (error) {
    throw new Error('Unable to get clients');
  }
};

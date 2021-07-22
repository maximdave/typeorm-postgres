import express, { Request, Response } from 'express';
import { Transaction, TransactionType } from '../entities/Transaction';
import { Client } from '../entities/Clients';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { clientId } = req.params;

    const { type, amount } = req.body;

    const client = await Client.findOne(parseInt(clientId));

    if (!client) {
      return res.json({
        msg: 'client not found',
      });
    }

    const transaction = await Transaction.create({
      amount,
      type,
      client,
    });

    await transaction.save();

    if (type === TransactionType.DEPOSIT) {
      client.balance = client.balance + amount;
      client.transactions = [transaction];
    } else if (type === TransactionType.WITHDRAW) {
      client.balance = client.balance - amount;
      client.transactions = [transaction];
    }

    await client.save();

    return res.json({ data: client, message: 'Transation Added Successfully' });
  } catch (error) {
    console.log('create client error', error.message);
    throw new Error("create client error'");
  }
};

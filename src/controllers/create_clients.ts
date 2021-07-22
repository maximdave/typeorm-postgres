import express, { Request, Response } from 'express';
import { Client } from '../entities/Clients';

export const createClient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, cardNumber, balance } = req.body;
    const client = Client.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      card_number: cardNumber,
      balance: balance,
    });
    await client.save();

    res.json(client);
  } catch (error) {
    console.log('create client error', error.message);
  }
};

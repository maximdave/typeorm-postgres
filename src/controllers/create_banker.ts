import express, { Request, Response } from 'express';
import { Banker } from '../entities/Banker';

export const createBanker = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
    const banker = Banker.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      card_number: cardNumber,
      employee_number: employeeNumber,
    });
    await banker.save();

    res.json(banker);
  } catch (error) {
    console.log('create banker error', error.message);
  }
};

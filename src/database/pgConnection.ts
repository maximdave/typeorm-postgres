import { createConnection } from 'typeorm';
import { Client } from '../entities/Clients';
import { Banker } from '../entities/Banker';
import { Transaction } from '../entities/Transaction';

export const pgConnection = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'decagon',
      password: '1234',
      database: 'typeorm',
      entities: [Client, Banker, Transaction],
      synchronize: true,
    });
    console.log('Connected to Postgres');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to postgres database');
  }
};

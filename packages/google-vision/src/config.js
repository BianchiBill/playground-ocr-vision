/* eslint no-process-env: 0 */
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const environment = ['GOOGLE_APPLICATION_CREDENTIALS', 'ENDPOINT', 'KEY'];

environment.forEach((name) => {
  /* istanbul ignore if */
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`);
  }
});

const config = {
  GOOGLE_APPLICATION_CREDENTIALS: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  ENDPOINT: process.env.ENDPOINT,
  KEY: process.env.KEY,
};

export default config;

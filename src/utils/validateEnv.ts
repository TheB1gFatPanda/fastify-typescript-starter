import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    API_VERSION: str(),
    ORIGIN: str(),
    SECRET_KEY: str()
  });
};

export default validateEnv;

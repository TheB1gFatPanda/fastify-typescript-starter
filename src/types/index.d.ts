import { Static } from '@fastify/type-provider-typebox';
import { schema } from '@utils/validateEnv';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Static<typeof schema> {}
  }
}

import { Static } from '@fastify/type-provider-typebox';

import { LoginUserBody } from '@components/auth/auth.schema';

export type LoginUser = Static<typeof LoginUserBody>;

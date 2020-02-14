import * as express from 'express';

import { AuthContext } from '../../graphql/context';
import { getUserById } from '../../models/user';
import { AccessTokenPayload, decodeAccessToken } from './crypto';
import {
  AuthTokenExpiredError,
  BadAuthTokenError,
  NotAuthorizedError,
  UserDeactivatedOrNotExistError
} from './errors';

function isAuthTokenExpired(accessTokenPayload: AccessTokenPayload): boolean {
  return (
    accessTokenPayload.expires !== null &&
    (!accessTokenPayload.expires ||
      new Date(accessTokenPayload.expires * 1000) < new Date())
  );
}

export async function checkBearerToken(
  req: /* FIXME */ any,
  res: express.Response
): Promise<AuthContext> {
  const headerToken = req.get('authorization') || req.get('Authorization');
  if (!headerToken) {
    throw new NotAuthorizedError();
  }

  const accessTokenPayload = decodeAccessToken(headerToken);
  if (!accessTokenPayload) {
    throw new BadAuthTokenError();
  }

  if (isAuthTokenExpired(accessTokenPayload)) {
    throw new AuthTokenExpiredError();
  }

  const user = await getUserById(accessTokenPayload.user.id);

  if (!user || user.deletedAt) {
    throw new UserDeactivatedOrNotExistError();
  }

  return {
    userId: user.id,
    user
  };
}

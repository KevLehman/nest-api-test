import { validateJWT } from '../users/helpers/jwt';

export function attachUser(req, res, next) {
  if (!req.headers.authentication) return next();
  const token = req.headers.authentication;
  const user = validateJWT(token);
  if (!user) return next();
  req.user = user;
  next();
}
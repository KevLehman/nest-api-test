import * as jwt from 'jsonwebtoken';
const { SECRET } = process.env;

export const createJWT = (user) => {
  return jwt.sign({ id: user._id, userId: user.slackId, username: user.username}, SECRET, { expiresIn: '12h'});
};

export const validateJWT = (token) => {
  return jwt.verify(token, SECRET);
};
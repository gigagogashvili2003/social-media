import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY as string;

export const generateJsonWebToken = (
  payload: string | Object | Buffer,
  options?: jwt.SignOptions
) => {
  const jsonWebToken = jwt.sign(payload, "gigagogashvili", options);
  return jsonWebToken;
};

export const verifyToken = (
  token: string,
  options?: jwt.VerifyOptions,
  callback?: jwt.VerifyCallback<jwt.JwtPayload | string>
) => {
  return jwt.verify(token, "gigagogashvili", options, callback);
};

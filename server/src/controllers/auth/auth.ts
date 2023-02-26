import User, { ILogin, IUserType } from "@/models/user/User";
import { generateJsonWebToken } from "@/utils/jwt";
import { Response, Request } from "express";

export const signup = async (req: Request, res: Response) => {
  const body: IUserType = req.body;
  const { email, firstname, lastname, password, username } = body;

  if (!email || !firstname || !lastname || !password || !username)
    res.status(400).json({ error: "Some informations are missing!" });

  try {
    const user = await User.signup({
      firstname,
      lastname,
      email,
      username,
      password,
    });

    const token = generateJsonWebToken(
      {
        username: user.username,
        userId: user._id,
      },
      { expiresIn: "2d" }
    );

    res.status(200).json({
      message: "User registered succesfully!",
      // user: {
      //   firstname: user.firstname,
      //   lastname: user.lastname,
      //   email: user.email,
      //   username: user.username,
      // },
      token,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const body = req.body;

  const emailOrUsername: string = req.body.emailOrUsername;
  const password: string = req.body.password;

  try {
    const user = await User.login({
      email: emailOrUsername,
      username: emailOrUsername,
      password,
    });
    const token = generateJsonWebToken(
      {
        username: user.username,
        userId: user._id,
      },
      { expiresIn: "2d" }
    );

    res.status(200).json({
      message: "User logged in succesfully!",
      // user: {
      //   firstname: user.firstname,
      //   lastname: user.lastname,
      //   email: user.email,
      //   username: user.username,
      // },
      token,
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

import User, { IUserType } from "@/models/user/User";
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

    res.status(200).json({ message: "User registered succesfully!", user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

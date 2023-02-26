import User from "@/models/user/User";
import { verifyToken } from "@/utils/jwt";
import { Request, Response } from "express";

export const getCurrentUserInfo = (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Unauthorized Request!" });

  const token = authHeader?.split(" ")[1] as string;

  verifyToken(token, undefined, async (err, payload) => {
    if (err) return res.status(401).json({ error: "Unauthorized Request!" });

    const username = payload?.username;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(401)
          .json({ error: "No user found with this token!" });
      }

      res.status(200).json({
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username,
        },
        token,
      });
    } catch (err) {
      res.status(400).json({ error: "Unable to find user!" });
    }
  });
  console.log(verifyToken);
};

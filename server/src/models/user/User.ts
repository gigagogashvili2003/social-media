import { Model, model, ObjectId, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUserType {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  _id?: ObjectId;
}
export interface ILogin {
  username: string;
  email?: string;
  password: string;
}

interface IUserModal extends Model<IUserType> {
  signup(fields: IUserType): Promise<any>;
  login(fields: ILogin): any;
}

const userSchema = new Schema<IUserType, IUserModal>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, "Password Too Short!"],
  },
});

userSchema.statics.signup = async function (fields: IUserType) {
  const { email, firstname, lastname, password, username } = fields;

  const emailExists = await this.findOne({ email });
  const usernameExists = await this.findOne({ username });

  if (emailExists) throw new Error("Email already exists!");

  if (usernameExists) throw new Error("Username already exists!");

  let salt: string;
  let encrypedPassword: string;
  let user;

  try {
    salt = await bcrypt.genSalt(10);
    encrypedPassword = await bcrypt.hash(password, salt);

    user = await this.create({
      firstname,
      lastname,
      password: encrypedPassword,
      username,
      email,
    });
  } catch (err: any) {
    throw new Error(err);
  }

  return user;
};

userSchema.statics.login = async function (fields: ILogin) {
  const { username, password, email } = fields;

  const findWithUsername = await this.findOne({ username: username });
  const findWithEmail = await this.findOne({ email: email });

  let user;

  if (findWithUsername) user = findWithUsername;
  if (findWithEmail) user = findWithEmail;

  if (!user) throw new Error("User not found!");

  try {
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) throw new Error("Invalid password!");
  } catch (err: any) {
    throw new Error(err);
  }

  return user;
};

export default model<IUserType, IUserModal>("User", userSchema);

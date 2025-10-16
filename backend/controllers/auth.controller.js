import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";


export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit code

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,// 24 hours from now
    });

    await user.save();

    // jwt token
    generateTokenAndSetCookie(res, user._id);

    // send verification email
    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({ success: true, message: "User registered successfully", user: {
        ...user._doc, password: undefined,
    }});

  } catch (error) {
    res.status(400).json({ success: false, message: error.message } );
  }
};



export const verifyEmail = async (req, res) => {};


//////////////////////////////////////////////////////////////////////
export const login = async (req, res) => {
  res.send("Login route");
};

//////////////////////////////////////////////////////////////////////
export const logout = async (req, res) => {
  res.send("Logout route");
};

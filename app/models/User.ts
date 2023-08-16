import { Document, Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import validator from 'validator';

interface Link {
  platform: string;
  link: string;
}

const LinkSchema = new Schema<Link>({
  platform: { type: String, required: true },
  link: { type: String, required: true },
});

interface IUserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic: string;
  links: [];
}

interface IMethods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDocument, {}, IMethods>(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    links: [LinkSchema],
  },
  { timestamps: true }
);

//hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw new Error('Error hashing password');
  }
});

//compare password method
userSchema.methods.comparePassword = async function (password) {
  try {
    return bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

const User = models.User || model('User', userSchema);
export default User as Model<IUserDocument, {}, IMethods>;

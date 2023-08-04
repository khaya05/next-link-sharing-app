import { Document, Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';
import { Model } from 'mongoose';

interface IUserDocument extends Document {
  email: string;
  password: string;
}

interface IMethods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDocument, {}, IMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

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

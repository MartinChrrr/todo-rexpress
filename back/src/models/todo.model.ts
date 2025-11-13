import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  createdAt: Date;
  done: boolean;
}

const TodoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    done: {type: Boolean, default: false}
  }
);

export default mongoose.model<ITodo>("Todo", TodoSchema);
import * as mongoose from 'mongoose';

export const LinkSchema = new mongoose.Schema({
  userId: String,
  channelId: String,
  links: String,
  ts: String,
  isPrivate: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  meta: [],
  likes: {
    type: Number,
    default: 0,
  },
});
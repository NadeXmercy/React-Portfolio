import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    technologies: { type: [String], required: true },
    githubUrl: { type: String },
    liveUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPortfolio>('Portfolio', PortfolioSchema); 
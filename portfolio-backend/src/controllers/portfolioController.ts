import { Request, Response } from 'express';
import Portfolio, { IPortfolio } from '../models/Portfolio';

export const getPortfolios = async (req: Request, res: Response) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: portfolios });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ success: false, error: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

export const createPortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    res.status(201).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid data' });
  }
};

export const updatePortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!portfolio) {
      return res.status(404).json({ success: false, error: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, data: portfolio });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid data' });
  }
};

export const deletePortfolio = async (req: Request, res: Response) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ success: false, error: 'Portfolio not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}; 
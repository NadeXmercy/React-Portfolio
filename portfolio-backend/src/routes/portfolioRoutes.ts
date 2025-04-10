import express from 'express';
import {
  getPortfolios,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolioController';

const router = express.Router();

router.route('/')
  .get(getPortfolios)
  .post(createPortfolio);

router.route('/:id')
  .get(getPortfolio)
  .put(updatePortfolio)
  .delete(deletePortfolio);

export default router; 
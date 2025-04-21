const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// Get all portfolio items
router.get("/", async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single portfolio item
router.get("/:id", async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    if (!portfolioItem) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }
    res.json(portfolioItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new portfolio item
router.post("/", async (req, res) => {
  const portfolioItem = new Portfolio({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    technologies: req.body.technologies,
    githubUrl: req.body.githubUrl,
    liveUrl: req.body.liveUrl,
  });

  try {
    const newPortfolioItem = await portfolioItem.save();
    res.status(201).json(newPortfolioItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a portfolio item
router.put("/:id", async (req, res) => {
  try {
    const portfolioItem = await Portfolio.findById(req.params.id);
    if (!portfolioItem) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }

    Object.assign(portfolioItem, req.body);
    const updatedPortfolioItem = await portfolioItem.save();
    res.json(updatedPortfolioItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a portfolio item
router.delete("/:id", async (req, res) => {
  try {
    const result = await Portfolio.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Portfolio item not found" });
    }
    res.json({ message: "Portfolio item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

import { Request, Response } from 'express';
import Contact from '../models/Contact';

export const createContact = async (req: Request, res: Response) => {
  try {
    console.log('Received contact form submission:', req.body);
    
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email  || !message) {
      console.log('Missing required fields:', { name, email, message });
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      
      message
    });

    console.log('Contact submission saved:', contact);

    res.status(201).json({ 
      success: true, 
      data: contact 
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 
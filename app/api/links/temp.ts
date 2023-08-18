/*
// pages/api/addLinks.ts

import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/app/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { userId, links } = req.body;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the new links to the user's links array
    user.links.push(...links);

    // Save the user with the new links
    await user.save();

    return res.status(201).json({ message: 'Links added successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

 */

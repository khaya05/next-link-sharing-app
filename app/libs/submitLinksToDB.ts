import axios from 'axios';

type Link = { link: string; platform: string };

export const submitLinksToDb = async function (userId: string, links: Link) {
  try {
    const response = await axios.post('/api/links', {
      userId,
      links,
    });

    if (response.status === 201) {
      console.log('Links added successfully');
    } else {
      console.error('Error adding links');
    }
  } catch (error) {
    console.error('Error sending POST request', error);
  }
};

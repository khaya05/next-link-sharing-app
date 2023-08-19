import axios from 'axios';

type Link = { link: string; platform: string };

export const submitLinksToDb = async function (userId: any, links: Link[]) {
  const newLinks = links.map(({ link, platform }) => {
    return { link, platform };
  });

  try {
    const response = await axios.post('/api/links', {
      userId,
      links: newLinks,
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

import axios from 'axios';

export const submitLinksToDb = async function (userId: string) {
  try {
    const response = await axios.post('/api/user', {
      userId,
    });

    if (response.status === 200) {
      console.log(response);
    } else {
      console.error('Error fetching user');
    }
  } catch (error) {
    console.error('Error sending GET request', error);
  }
};

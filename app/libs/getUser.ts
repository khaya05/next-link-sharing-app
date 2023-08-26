import axios from 'axios';

export const getUserFromDB = async function (userId: string) {
  try {
    const response = await axios({
      method: 'get',
      url: '/api/user',
      data: {
        userId
      },
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

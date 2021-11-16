import axios from 'axios';

export const getJSONplaceHolderComments = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        console.error('An error occured while fetching the todos -> ', error);
        reject(error);
      });
  });
};

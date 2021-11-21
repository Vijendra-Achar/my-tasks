import { firebaseFirestore } from './firebase-config';

import { collection, getDocs } from '@firebase/firestore';

// Get all the Tasks from the database
export const getTasks = () => {
  const tasksCollectionRef = collection(firebaseFirestore, 'tasks');

  const tasksDocs = getDocs(tasksCollectionRef);

  return new Promise((resolve, reject) => {
    tasksDocs
      .then((data) => {
        const tasksDataObject = data.docs.map((doc) => {
          return { ...doc.data(), taskId: doc.id };
        });

        resolve(tasksDataObject);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

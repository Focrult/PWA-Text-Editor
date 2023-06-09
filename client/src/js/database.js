import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });



export const putDb = async (content) => {
  console.log('PUT to the database');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({jate: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};



export const getDb = async () => {
  // Create a connection to the database database and version we want to use.
  const db = await initdb();
  // Create a new transaction and specify the database and data privileges.
  const tx = db.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
 const result = await request;
  console.log('Content retrieved from database:', result);
  return result;
}

initdb();

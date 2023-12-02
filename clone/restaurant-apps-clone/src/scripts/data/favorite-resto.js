/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
// import 'fake-indexeddb/auto';
import CONFIG from '../globals/config';
// import 'jest';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    if (process.env.NODE_ENV === 'test') {
      global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
    }
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};
export default FavoriteRestoIdb;

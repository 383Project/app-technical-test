import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Add, retrieve and remove string and objects from offline storage
 */
const STORAGE = {
  /**
   *
   * @param {string} key The key to be stored
   * @param {string} data The value / data to be stored
   */
  saveString: async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  /**
   *
   * @param {string} key The key of the object to be stored
   * @param {object} data The object data you want to store
   */
  saveObject: async (key, data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  /**
   *
   * @param {string} key The key to be retrieved
   * @returns
   */
  loadString: async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  /**
   *
   * @param {string} key The key of the object you want to retrieve
   * @returns
   */
  loadObject: async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  /**
   *
   * @param {string} key The key to be removed from local storage
   */
  remove: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};


export {STORAGE};

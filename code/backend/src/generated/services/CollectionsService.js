/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a new Collection under the user's ID.
*
* collectionCreateRequest CollectionCreateRequest 
* returns Collection
* */
const createCollection = ({ collectionCreateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionCreateRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a specific Collection. The SQL DB handles cascade deletes for child items.
*
* collectionId Integer 
* no response value expected for this operation
* */
const deleteCollection = ({ collectionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Gets a specific Collection's details.
*
* collectionId Integer 
* returns Collection
* */
const getCollection = ({ collectionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Gets a list of all Collections for the user.
*
* returns List
* */
const getCollections = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates a specific Collection's details.
*
* collectionId Integer 
* collectionUpdateRequest CollectionUpdateRequest 
* returns Collection
* */
const updateCollection = ({ collectionId, collectionUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
        collectionUpdateRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createCollection,
  deleteCollection,
  getCollection,
  getCollections,
  updateCollection,
};

/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a new CollectionItem under the specified Collection.
*
* collectionId Integer 
* collectionItemCreateRequest CollectionItemCreateRequest 
* returns CollectionItem
* */
const createCollectionItem = ({ collectionId, collectionItemCreateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
        collectionItemCreateRequest,
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
* Deletes a specific CollectionItem.
*
* collectionId Integer 
* itemId Integer 
* no response value expected for this operation
* */
const deleteCollectionItem = ({ collectionId, itemId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
        itemId,
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
* gets a specific CollectionItem.
*
* collectionId Integer 
* itemId Integer 
* returns CollectionItem
* */
const getCollectionItem = ({ collectionId, itemId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
        itemId,
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
* Gets a list of all CollectionItems in a specific Collection.
*
* collectionId Integer 
* returns List
* */
const getCollectionItems = ({ collectionId }) => new Promise(
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
* Updates a specific CollectionItem.
*
* collectionId Integer 
* itemId Integer 
* collectionItemUpdateRequest CollectionItemUpdateRequest 
* returns CollectionItem
* */
const updateCollectionItem = ({ collectionId, itemId, collectionItemUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        collectionId,
        itemId,
        collectionItemUpdateRequest,
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
  createCollectionItem,
  deleteCollectionItem,
  getCollectionItem,
  getCollectionItems,
  updateCollectionItem,
};

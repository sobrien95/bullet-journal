/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Creates a new Item.
*
* itemCreateRequest ItemCreateRequest 
* returns Item
* */
const addItem = ({ itemCreateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        itemCreateRequest,
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
* Deletes a specific Item.
*
* itemId Integer 
* no response value expected for this operation
* */
const deleteItemById = ({ itemId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Gets a specific Item's details.
*
* itemId Integer 
* returns Item
* */
const getItemById = ({ itemId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Gets Items depending on the parameters. If day is present it gets items for one day. If day is null it gets items for the given year and month.
*
* year Integer 
* month Integer 
* day Integer  (optional)
* returns List
* */
const getItemsByDate = ({ year, month, day }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        year,
        month,
        day,
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
* Updates a specific Item.
*
* itemId Integer 
* itemUpdateRequest ItemUpdateRequest 
* returns Item
* */
const updateItemById = ({ itemId, itemUpdateRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        itemId,
        itemUpdateRequest,
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
  addItem,
  deleteItemById,
  getItemById,
  getItemsByDate,
  updateItemById,
};

/**
 * The ItemsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ItemsService');
const addItem = async (request, response) => {
  await Controller.handleRequest(request, response, service.addItem);
};

const deleteItemById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteItemById);
};

const getItemById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getItemById);
};

const getItemsByDate = async (request, response) => {
  await Controller.handleRequest(request, response, service.getItemsByDate);
};

const updateItemById = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateItemById);
};


module.exports = {
  addItem,
  deleteItemById,
  getItemById,
  getItemsByDate,
  updateItemById,
};

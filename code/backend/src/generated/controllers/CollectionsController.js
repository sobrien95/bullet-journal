/**
 * The CollectionsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CollectionsService');
const createCollection = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCollection);
};

const deleteCollection = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCollection);
};

const getCollection = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCollection);
};

const getCollections = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCollections);
};

const updateCollection = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateCollection);
};


module.exports = {
  createCollection,
  deleteCollection,
  getCollection,
  getCollections,
  updateCollection,
};

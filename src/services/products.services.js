import ProductManager from '../DAL/ProductManagerMongo.js';
import { __dirname } from '../utils.js';

const path = __dirname + '/products.json';

const productManager = new ProductManager(path);

export const findAllProducts = async (limit, page, sortDir, category, availability) => {
  try {
    const products = productManager.findAll(limit, page, sortDir, category, availability);
    return products;
  } catch (error) {
    return error;
  }
};

export const findProductById = async (id) => {
  try {
    const product = productManager.findById(id);
    return product;
  } catch (error) {
    return error;
  }
};

export const createOneProduct = async (obj) => {
  try {
    const newProduct = productManager.createOne(obj);
    return newProduct;
  } catch (error) {
    return error;
  }
};

export const updateOneProduct = async (pid, obj) => {
  try {
    const product = productManager.updateOne(pid, obj);
    return product;
  } catch (error) {
    return error;
  }
};

export const deleteAllProducts = async () => {
  try {
    const product = productManager.deleteAll();
    return product;
  } catch (error) {
    return error;
  }
};

export const deleteOneProduct = async (pid) => {
  try {
    const product = productManager.deleteOne(pid);
    return product;
  } catch (error) {
    return error;
  }
};

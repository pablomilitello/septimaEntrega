import CartManager from '../DAL/CartManagerMongo.js';
import { __dirname } from '../utils.js';

const path = __dirname + '/carts.json';

const cartManager = new CartManager(path);

export const cartById = async (id) => {
  try {
    const cart = cartManager.getCartById(id);
    return cart;
  } catch (error) {
    return error;
  }
};

export const cartByIdPopulated = async (id) => {
  try {
    const cart = cartManager.getCartById(id);
    return cart;
  } catch (error) {
    return error;
  }
};

export const createOne = async () => {
  try {
    const newCart = cartManager.addCarts();
    return newCart;
  } catch (error) {
    return error;
  }
};

export const productsToCart = async (cid, pid) => {
  try {
    const cart = cartManager.addProductsToCart(cid, pid);
    return cart;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (cid, pid) => {
  try {
    const cart = cartManager.deleteProductFromCart(cid, pid);
    return cart;
  } catch (error) {
    return error;
  }
};

export const updateOne = async (id, products) => {
  try {
    const cart = cartManager.updateCart(id, products);
    return cart;
  } catch (error) {
    return error;
  }
};

export const updateOneProduct = async (id, pid, quantity) => {
  try {
    const cart = cartManager.updateCartProduct(id, pid, quantity);
    return cart;
  } catch (error) {
    return error;
  }
};

export const deleteAllProducts = async (id) => {
  try {
    const cart = cartManager.deleteAllProductsFromCart(id);
    return cart;
  } catch (error) {
    return error;
  }
};

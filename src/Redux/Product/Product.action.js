import {
   getFilterByBrand,
   getMensProductsAPI,
   getProductsSorting,
   getWomensFilterByBrand,
   getWomensProductsAPI,
   getWomensProductsSorting,
   getKidsFilterByBrand,
   getKidsProductsAPI,
   getKidsProductsSorting
} from "./Product.api"
import * as types from "./Product.type"
import axios from 'axios';

// --- Common Actions ---

const handleError = (dispatch, type) => {
   dispatch({ type: types.GET_PRODUCTS_ERROR });
};

// --- Mens Section ---

export const getMensProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getMensProductsAPI(page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getMensProductsAPI(page);
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getFilteredProducts = (val) => async (dispatch) => {
   try {
      dispatch({
         type: types.GET_FILTERED_PRODUCTS,
         payload: val
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getMensProductsSorted = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getProductsSorting(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getFilteredByBrand = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getFilterByBrand(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

// --- Womens Section ---

export const getWomensProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getWomensProductsAPI(page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getWomensMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getWomensProductsAPI(page);
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getWomensFilteredProducts = (val) => async (dispatch) => {
   try {
      dispatch({
         type: types.GET_FILTERED_PRODUCTS,
         payload: val
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getWomensProductsSorted = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getWomensProductsSorting(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getWomensFilteredByBrand = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getWomensFilterByBrand(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getWomensFilteredByBodyType = (bodyType) => async (dispatch, getState) => {
   const { products } = getState().womensProduct;
   let filteredProducts = products.filter(product => product.bodyType === bodyType);

   dispatch({
       type: types.GET_FILTERED_BY_BODY_TYPE,
       payload: filteredProducts
   });
};

// --- Kids Section ---

export const getKidsProducts = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getKidsProductsAPI(page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getKidsMainData = (page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getKidsProductsAPI(page);
      dispatch({
         type: types.GET_MAIN_DATA_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getKidsFilteredProducts = (val) => async (dispatch) => {
   try {
      dispatch({
         type: types.GET_FILTERED_PRODUCTS,
         payload: val
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getKidsProductsSorted = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getKidsProductsSorting(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

export const getKidsFilteredByBrand = (val, page) => async (dispatch) => {
   dispatch({ type: types.GET_PRODUCTS_LOADING });
   try {
      let data = await getKidsFilterByBrand(val, page);
      dispatch({
         type: types.GET_PRODUCTS_SUCCESS,
         payload: data
      });
   } catch (err) {
      handleError(dispatch, types.GET_PRODUCTS_ERROR);
   }
};

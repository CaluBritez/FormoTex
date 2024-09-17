import formotexApi from '../api/formotexApi.js';

export const createProductForm = async ({ name, code_product, description, state, starting_date, store }) => {

  const { data } = await formotexApi.post('/product/create', { name, code_product, description, state, starting_date, store });

  console.log('data desde el hook',data);
  return data;
};
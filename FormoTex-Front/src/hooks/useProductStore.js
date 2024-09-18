import formotexApi from '../api/formotexApi.js';
import { useDispatch } from 'react-redux';
import { deleteProductRedux } from '../store/product/productSlice';

// Crear un custom hook para manejar las acciones de producto
export const useProductActions = () => {
  const dispatch = useDispatch();

  const createProductForm = async ({ name, code_product, description, state, starting_date, store }) => {
    const { data } = await formotexApi.post('/product/create', { name, code_product, description, state, starting_date, store });
    console.log('data desde el hook', data);
    return data;
  };

  const deleteProduct = async (id) => {
    try {
      // Elimina el producto desde el servidor
      await formotexApi.delete(`/product/delete/${id}`);
      
      // Actualiza Redux eliminando el producto
      dispatch(deleteProductRedux(id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  return {
    createProductForm,
    deleteProduct,
  };
};

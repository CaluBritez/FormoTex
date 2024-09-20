import formotexApi from '../api/formotexApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductRedux } from '../store/product/productSlice';

// Crear un custom hook para manejar las acciones de producto
export const useProductActions = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

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

  const editProductAdm = async ({ id, nameAdm, code_productAdm, descriptionAdm, stateAdm, starting_dateAdm, storeAdm }) => {
    try {
      
      await formotexApi.put(`/product/edit/${id}`,
        {
          name: nameAdm, 
          code_product: code_productAdm, 
          description: descriptionAdm, 
          state: stateAdm, 
          starting_date: starting_dateAdm, 
          store: storeAdm
        });
      console.log('Editado Correctamente');
      
    } catch (error) {
      console.error('Error al editar el producto', error);
    }
  };
  const getProductById = (id) => {
    try {
      // Buscar el producto en la lista de productos
      const product = products.find(product => product._id === id);
      
      if (product) {
        return product;
      } else {
        throw new Error('Producto no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener los datos del producto', error);
    }
  };
  

  return {
    createProductForm,
    deleteProduct,
    editProductAdm,
    getProductById
  };
};

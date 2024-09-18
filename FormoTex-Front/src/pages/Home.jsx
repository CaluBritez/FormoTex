import './css/Home.css'
import { useState, useEffect } from 'react';

import { IoIosClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { useForm } from '../hooks/useForm.js';

import { useAuthStore } from '../hooks/useAuthStore.js';
import { useProductActions } from '../hooks/useProductStore';

import { useSelector, useDispatch } from 'react-redux';
import { showProducts } from '../store/product/productSlice.js';
import { useShowProducts } from '../hooks/useShowProducts.js';

const initialProductForm = {
  name: '',
  code_product: '',
  description: '',
  state: '',
  starting_date: '',
  store: '',
};

export const Home = () => {

  const {user, startLogout} = useAuthStore();
  useShowProducts();

  const { products } = useSelector(state => state.product);
  console.log(products);
  
  const dispatch = useDispatch();
  
  const [abrirModal, setAbrirModal] = useState(false);

  const { name, code_product, description, state, starting_date, store, onInputChange } = useForm(initialProductForm);

  // Usa el hook personalizado para manejar las acciones de producto
  const { createProductForm, deleteProduct } = useProductActions();

  const createProductSubmit = async(event) => {
    event.preventDefault();
    try {
      const data = await createProductForm({ name, code_product, description, state, starting_date, store });
      // Actualiza el estado de productos en Redux después de crear un producto
      dispatch(showProducts([...products, data]));
      
      setAbrirModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (id) => {
    await deleteProduct(id); // Llama a la función de eliminación
  };

  return (
    <>
    <div id='box-body'>
      <div id='box-onlogin'>
        <h1>Bienvenido {user.name}</h1>
        <button className="boton-negro" onClick={startLogout}>Cerrar sesión</button>
      </div>
      <div id='box-container-products'>
        <div id='box-add-product'>
        <button onClick={() => setAbrirModal(true)} className="boton-rosa">Crear Producto</button>
        </div>
        <div id='box-products'>
              {
                // Si products aún no tiene datos, muestra un mensaje de carga o un estado vacío
                products.length === 0 ? (
                  <p>Cargando productos...</p> // Puedes personalizar este mensaje o mostrar un spinner de carga
                ) : (
                  products.map((product) => (
                    product.name == null ? '' :
                      <div id='box-product' key={product._id}>
                        <p>{product.name}</p>
                        <p>Código: {product.code_product}</p>
                        <p>Estado: {product.state}</p>
                        <p>Fecha de adquisición: {new Date(product.starting_date).toLocaleDateString()}</p>
                        <p>Ubicación: {product.store}</p>
                        <div id='box-acciones'>
                          <a ><FaEdit /></a>
                          <a onClick={() => handleDelete(product._id)}><MdDeleteForever /></a>
                        </div>
                      </div>
                  ))
                )
              }       
        </div>
      </div>
    </div>


      <div id='ModalMostrarDatos' className={abrirModal ? 'modalMostrarActivo' : 'modalMostrarInactivo'}>
        <div id='box-modal'>
          <div id='box-close-modal'>
            <button onClick={() => setAbrirModal(false)} className="boton-negro">Cerrar</button>
          </div>
          <div id='box-title-modal'>
            <h2>Datos del Producto</h2>
          </div>
          <div className='div-box-form-modal'>
            <form id='form-create-product' className='box-form' onSubmit={createProductSubmit}>
              <div className='box-inputs'>
                <input
                  type="text"
                  placeholder='Nombre del Producto'
                  required
                  name='name'
                  value={name}
                  onChange={onInputChange}
                />
                <input
                  type="text"
                  placeholder='Ingrese código del producto'
                  required
                  name='code_product'
                  value={code_product}
                  onChange={onInputChange}
                />
                <input
                  type="text"
                  placeholder='Descripción del producto'
                  required
                  name='description'
                  value={description}
                  onChange={onInputChange}
                />
                <input
                  type="text"
                  placeholder='Estado del producto?'
                  required
                  name='state'
                  value={state}
                  onChange={onInputChange}
                />
                <input
                  type="date"
                  placeholder='Fecha de adquisición'
                  required
                  name='starting_date'
                  value={starting_date}
                  onChange={onInputChange}
                />
                <input
                  type="text"
                  placeholder='Lugar de almacenamiento'
                  required
                  name='store'
                  value={store}
                  onChange={onInputChange}
                />

              </div>
              <div className='box-form-button'>
                <button className='boton-rosa'>Crear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </>
  )
}

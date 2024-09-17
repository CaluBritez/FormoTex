import './css/Home.css'
import { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";

import { useAuthStore } from '../hooks/useAuthStore.js';

import {useShowProducts} from '../hooks/useShowProducts.js';

export const Home = () => {

  const {user, startLogout} = useAuthStore();

  const {products} = useShowProducts();
  console.log(products);
  
  const [abrirModal, setAbrirModal] = useState(false);


  return (
    <>
    <div id='box-body'>
      <div id='box-onlogin'>
        <h1>Bienvenido {user.name}</h1>
        <button className="boton-rosa" onClick={startLogout}>Cerrar sesión</button>
      </div>
      <div id='box-container-products'>
        <div id='box-add-product'>
        <button onClick={() => setAbrirModal(true)} className="boton-rosa">Crear Producto</button>
        </div>
        <div id='box-products'>
              {
                products.map((product) => (
                    product.name == null ? '' :
                        <div id='box-product' key={product._id}>
                          <p>{product.name}</p>
                          <p>Código: {product.code_product}</p>
                          <p>Estado: {product.state}</p>
                          <p>Fecha de adquisición: {new Date(product.starting_date).toLocaleDateString()}</p>
                          <p>Ubicación: {product.store}</p>
                        </div>
                        
                ))
                }       
        </div>
      </div>
    </div>


      <div id='ModalMostrarDatos' className={abrirModal ? 'modalMostrarActivo' : 'modalMostrarInactivo'}>
        <div id='box-modal'>
          <div id='box-close-modal'>
            <button onClick={() => setAbrirModal(false)} className="boton-rosa">Cerrar</button>
          </div>
          <div id='box-title-modal'>
            <h2>Agregar Producto</h2>
          </div>
          <div className='div-box-form-modal'>
            <form id='form-create-product' className='box-form' action="" >
              <div className='box-inputs'>
                <input
                  type="text"
                  placeholder='Nombre del Producto'
                  required  
                />
                <input
                  type="text"
                  placeholder='Ingrese código del producto'
                  required
                />
                <input
                  type="text"
                  placeholder='Descripción del producto'
                  required
                />
                <input
                  type="text"
                  placeholder='Estado del producto?'
                  required
                />
                <input
                  type="date"
                  placeholder='Fecha de adquisición'
                  required
                />
                <input
                  type="text"
                  placeholder='Lugar de almacenamiento'
                  required
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

import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// //////////////////////
// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      // Insertar en la API
      await clienteAxios.post('/productos', producto);

      // Si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));

      // Alert
      Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
    } catch (error) {
      console.log(error);
      // Si hay error, cambiar el state
      dispatch(agregarProductoError(true));

      // Alerta error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Falla en la conexión de la base de datos',
      });
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// Si producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// Si hay error
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

//////////////////////////////////////////////
// Función que descarga los productos de la BD !!!!!!! Algunos lo separan
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      setTimeout(async () => {
        const respuesta = await clienteAxios.get('/productos');
        dispatch(descargaProductosExito(respuesta.data));
      }, 500);
    } catch (error) {
      console.log(error);
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductosExito = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargaProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
});

// //////////////////////
// Eliminar producto
export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      // Si se elimina, mostrar alerta
      Swal.fire(
        'Eliminado!',
        'Has eliminado el producto correctamente.',
        'success'
      );
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}

const obtenerProductoEliminar = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: true,
});

// //////////////////////
// Editar producto
export function editarProducto(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoAction(producto));
  };
}

const obtenerProductoAction = (producto) => ({
  type: EDITAR_PRODUCTO,
  payload: producto,
});

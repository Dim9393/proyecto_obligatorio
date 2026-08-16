# Mundo Periféricos - E-commerce simple

Proyecto pensado para practicar JavaScript vanilla aplicado a un caso real: una tienda de perifericos de PC.

Objetivo: separar responsabilidades para que sea facil entender que hace cada parte, usando `localStorage` como unica "base de datos".

## Estructura principal

- [index.html](index.html): registro de nuevos usuarios.
- [login.html](login.html): inicio de sesion (usuarios y administrador).
- [menu.html](menu.html): catalogo de productos, filtro por tipo y acceso al resto de la tienda.
- [busqueda_catalogo.html](busqueda_catalogo.html): resultados de busqueda por nombre de producto.
- [producto.html](producto.html): detalle de un producto y alta al carrito.
- [carrito.html](carrito.html): ver, editar y eliminar productos del carrito.
- [editar_producto_user.html](editar_producto_user.html): editar la cantidad de un producto ya agregado al carrito.
- [confirmar_compra.html](confirmar_compra.html): resumen de la compra antes de confirmarla.
- [compra_realizada.html](compra_realizada.html): resumen final y registro de la venta.
- [venta_usuario.html](venta_usuario.html): historial de compras del usuario logueado.
- [admin.html](admin.html): alta de productos (solo administrador).
- [editar_producto_admin.html](editar_producto_admin.html): edicion/borrado de productos (solo administrador).
- [editar_filtros.html](editar_filtros.html): alta y borrado de categorias/filtros (solo administrador).
- [ventas.html](ventas.html): historial de todas las ventas realizadas (solo administrador).
- [guia_uso.html](guia_uso.html): guia de uso para el usuario final.

## JavaScript separado por responsabilidad

### Base

- [scripts/storage.js](scripts/storage.js): funciones simples para guardar y leer de localStorage (`guardarEnStorage`, `leerDeStorage`).
- [scripts/initializer.js](scripts/initializer.js): carga el catalogo y los filtros iniciales la primera vez que se abre la pagina (si ya hay datos guardados, no hace nada).
- [scripts/autenticacion.js](scripts/autenticacion.js): registro/verificacion de sesion (`login`, `validarSesion`, `cerrarSesion`, `sesionActiva`). Se incluye en casi todas las paginas para proteger el acceso.

### JS por pagina (DOM simple)

- [scripts/index.js](scripts/index.js): registro de usuarios.
- [scripts/login.js](scripts/login.js): validacion de login, incluye el acceso especial de administrador (`admin@admin`).
- [scripts/menu.js](scripts/menu.js) + [scripts/listar_productos.js](scripts/listar_productos.js): saludo al usuario, botones segun el rol (admin/usuario) y catalogo con filtro por tipo de producto.
- [scripts/busqueda_catalogo.js](scripts/busqueda_catalogo.js): busqueda de productos por nombre.
- [scripts/producto.js](scripts/producto.js): detalle del producto, control de stock y alta al carrito.
- [scripts/carrito.js](scripts/carrito.js): mostrar el carrito, calcular IVA/subtotal/total, eliminar productos y vaciar el carrito.
- [scripts/editar_producto_user.js](scripts/editar_producto_user.js): editar la cantidad de un producto dentro del carrito, respetando el stock disponible.
- [scripts/confirmar_compra.js](scripts/confirmar_compra.js): muestra el resumen antes de confirmar.
- [scripts/compra_realizada.js](scripts/compra_realizada.js): genera el registro de la venta (`comprasRealizadas`) y vacia el carrito.
- [scripts/venta_usuario.js](scripts/venta_usuario.js): historial de compras filtrado por el usuario logueado.
- [scripts/admin.js](scripts/admin.js): alta, listado y borrado de productos (protegido por rol admin).
- [scripts/editar_producto_admin.js](scripts/editar_producto_admin.js): edicion de un producto existente (protegido por rol admin).
- [scripts/editar_filtros.js](scripts/editar_filtros.js): alta y borrado de filtros/categorias.
- [scripts/ventas.js](scripts/ventas.js): historial completo de ventas y ganancia total (protegido por rol admin).

## Datos guardados en localStorage

- `usuariosRegistrados`: usuarios que se registraron desde index.html.
- `sesionActual`: usuario (o admin) con sesion iniciada.
- `productosRegistrados`: catalogo de productos (stock, precio, iva, imagen, tipo).
- `filtrosRegistrados`: categorias/tipos de producto disponibles.
- `productosMiCarrito`: productos que el usuario agrego a su carrito.
- `comprasRealizadas`: historial de todas las ventas confirmadas.

## Flujo recomendado para probar el proyecto

1. Entrar por [index.html](index.html) y registrarse.
2. Iniciar sesion en [login.html](login.html).
3. Ver el catalogo en [menu.html](menu.html) y filtrar por tipo de producto.
4. Entrar al detalle en [producto.html](producto.html) y agregarlo al carrito.
5. Revisar el carrito en [carrito.html](carrito.html).
6. Confirmar la compra en [confirmar_compra.html](confirmar_compra.html).
7. Ver el resultado en [compra_realizada.html](compra_realizada.html).
8. Revisar el historial personal en [venta_usuario.html](venta_usuario.html).

## Ideas didacticas

- Cada HTML representa una accion concreta de la tienda.
- Cada script maneja solo el DOM que necesita.
- El rol de administrador se valida en cada pagina protegida (`usuarioActual.admin`).
- No se usan clases ES6, import/export ni frameworks: todo es JavaScript vanilla.

## Otros archivos

- [css/style.css](css/style.css): estilos de toda la tienda.
- `img/`: imagenes de los productos del catalogo.

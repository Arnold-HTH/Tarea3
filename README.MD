![InfotronicLogo](https://i.ibb.co/fN3TZ9y/Logo-Infotronic.png)
# **🧑‍💻 CURSO | TALLER WEB 👩‍💻**

## **✅ EJERCICIO**

Para realizar el ejercicio debes:

1. Echa un vistazo al código proporcionado. Requerimos en tres funciones: checkInventory(), processPayment(), shipOrder(). Cada una de estas funciones devuelve una promesa.
2. checkInventory() espera un argumento de pedido y devuelve una promesa. Si hay suficientes artículos en stock para completar el pedido, la promesa se resolverá en una matriz. El primer elemento en la matriz de valores resueltos será el mismo pedido y el segundo elemento será el costo total del pedido como un número.
3. processPayment() espera un argumento de matriz con el pedido como primer elemento y el total de la compra como segundo. Esta función devuelve una promesa. Si hay un saldo lo suficientemente grande en la tarjeta de regalo asociada con el pedido, se resolverá en una matriz. El primer elemento en la matriz de valores resueltos será del mismo orden y el segundo elemento será un número de seguimiento.
4. shipOrder() espera un argumento de matriz con el pedido como primer elemento y un número de seguimiento como segundo. Devuelve una promesa que se resuelve en una cadena que confirma que el pedido se ha enviado.
5. Si lo desea, consulte el archivo library.js para ver cómo funcionan estas funciones.
6. Configuramos una cadena de promesas, pero faltan un par de líneas de código importantes para que funcione correctamente.
7. Invocamos checkInventory() con order y le encadenamos una función .then(). Este .then() tiene una función anónima como controlador de éxito, pero le falta una declaración de retorno.
8. El controlador de éxito debe devolver una promesa de processPayment().
9. Tenemos una segunda función .then() en la cadena. Este .then() también tiene una función anónima como controlador de éxito y le falta una declaración de devolución.
10. El controlador de éxito debe devolver una promesa shipOrder().
# Calculadora de Propinas y Consumo

Aplicación web desarrollada con **React + Vite + Tailwind CSS** que simula el consumo en un restaurante, permitiendo agregar productos, calcular propinas y obtener el total a pagar en tiempo real.

---

## Tecnologías utilizadas

* React (Hooks: useState)
* Vite (entorno de desarrollo rápido)
* Tailwind CSS (estilizado moderno)
* JavaScript (lógica de negocio)

---

## Estructura del proyecto

```
src/
│
├── Components/
│   ├── Header.jsx
│   ├── Menu.jsx
│   └── Summary.jsx
│
├── db/
│   └── db.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Funcionalidades principales

* Visualización de menú interactivo
* Agregar productos al consumo
* Incremento automático de cantidad
* Eliminación de productos
* Selección de porcentaje de propina
* Cálculo automático de subtotal, propina y total
* Reinicio de orden

---

## Lógica del sistema

### Agregar producto (`addItem`)

* Verifica si el producto ya existe
* Si existe → aumenta cantidad
* Si no existe → lo agrega

```js
const addItem = (item) => {
  setOrder((prev) => {
    const exists = prev.find((i) => i.id === item.id);

    if (exists) {
      return prev.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }

    return [...prev, { ...item, quantity: 1 }];
  });
};
```

---

### Eliminar producto (`removeItem`)

```js
const removeItem = (id) => {
  setOrder((prev) => prev.filter((item) => item.id !== id));
};
```

---

### Guardar orden (`saveOrder`)

```js
const saveOrder = () => {
  setOrder([]);
  setTip(10);
};
```

---

## Cálculos del sistema

### Subtotal

```js
const subtotal = order.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
```

### Propina

```js
const tipAmount = (subtotal * tip) / 100;
```

### Total

```js
const total = subtotal + tipAmount;
```

---

## Flujo del sistema

1. El usuario visualiza el menú
2. Selecciona un producto
3. Se ejecuta `addItem()`
4. Se actualiza el estado `order`
5. Se renderiza el consumo en tiempo real
6. El usuario selecciona la propina
7. Se calculan subtotal, propina y total
8. Puede eliminar productos
9. Puede guardar la orden
10. La app se reinicia

---

## Conceptos Clave Aplicados

### Componentes funcionales con Hooks

Uso de componentes funcionales con `useState` para manejar el estado.

---

### Comunicación padre-hijo mediante props

Paso de datos y funciones entre componentes (`App → Menu → Summary`).

---

### Gestión de estado con useState

Control del estado global:

* `order`
* `tip`

---

### Manejo de eventos

* `onClick` → agregar/eliminar productos
* `onChange` → seleccionar propina

---

### Renderizado condicional

Se muestra contenido dependiendo del estado de la orden.

---

### Listas y keys en React

Uso de `.map()` con `key` única para renderizar listas.

---

### Cálculos y estado derivado

Cálculo dinámico de valores sin almacenarlos en estado.

---

### Actualización inmutable del estado

Uso de `map`, `filter` y spread operator para evitar mutaciones.

---

### Modularización

Separación en componentes reutilizables:

* Header
* Menu
* Summary

---

## Interfaz de usuario

* Diseño limpio tipo POS (Point of Sale)
* Menú interactivo con hover
* Panel dinámico de consumo
* Selección de propina intuitiva
* Estilizado con Tailwind CSS

---

##  Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar proyecto
npm run dev
```

---




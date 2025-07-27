# Ejercicio 04 – Filtrar usuarios por  edad

Crea una función que reciba una lista de usuarios y una edad mínima, y devuelva un nuevo arreglo que contenga solo los usuarios cuya edad sea mayor o igual a la especificada.

Cada usuario es un objeto con las siguientes propiedades:

- `name`: nombre del usuario (string)
- `age`: edad del usuario (number)

---

### 📘 Ejemplo de entrada (para edad = 18):

```ts
const users = [
  { name: "Ana", age: 17 },
  { name: "Luis", age: 21 },
  { name: "Carlos", age: 18 },
  { name: "Marta", age: 16 }
]

```
### ✅ Salida esperada:
```ts
[
  { name: "Luis", age: 21 },
  { name: "Carlos", age: 18 }
]
```
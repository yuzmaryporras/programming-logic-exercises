# Suma máxima de un subarray

Dado un arreglo de números enteros (positivos, negativos o cero), devuelve la **suma más grande posible** de un **subarray contiguo**.

---

## ✅ Ejemplos

```txt
Arreglo: [5, -2, 7]

Los subarrays posibles son:

- `[5]` → 5  
- `[5, -2]` → 3  
- `[5, -2, 7]` → **10** ✅  
- `[-2]` → -2  
- `[-2, 7]` → 5  
- `[7]` → 7  

👉 El subarray con la mayor suma es [5, -2, 7] con suma 10.
```
---

## 🧪 Casos de prueba sugeridos

```txt
[-2, 1, -3, 4, -1, 2, 1, -5, 4] === 6  // [4, -1, 2, 1]
[1, 2, 3] === 6                        // [1, 2, 3]
[-1, -2, -3] === -1                    // [-1]
[5, -2, 7] === 10                      // [5, -2, 7]
[] === 0      


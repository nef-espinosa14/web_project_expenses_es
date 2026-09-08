# TripleTen web_project_expenses

# Gestor de Gastos

Un gestor de gastos personales desarrollado en JavaScript, que permite al usuario asignar un presupuesto, registrar gastos por categoría, visualizar estadísticas en tiempo real y agregar nuevos gastos mediante una ventana modal (popup).

## Funcionalidad

- Asignación de presupuesto mensual
- Registro de gastos por categoría (Comida, Comer fuera, Transporte, Hogar, Suscripciones)
- Estadísticas generales: gastos totales, gasto promedio y saldo restante
- Indicador visual de saldo (verde, naranja o rojo) según el estado financiero
- Identificación automática de la categoría con mayor gasto
- Popup para agregar nuevos gastos
- Persistencia de datos mediante `localStorage`

## Técnicas y herramientas utilizadas en la codificación

### Estructuras de datos

**Arrays de arrays** — Cada gasto se representa como un par `[categoría, monto]`, por ejemplo `[groceries, 33]`. Esta estructura permite almacenar dos datos relacionados sin necesidad de un objeto completo, manteniendo el código ligero y fácil de recorrer.

**Constantes como claves semánticas** — En lugar de usar cadenas de texto sueltas por todo el código (`"groceries"`, `"home"`, etc.), se declaran como constantes (`const groceries = "groceries"`). Esto evita errores de tipeo y centraliza el nombre de cada categoría en un solo lugar.

### Manipulación de arrays

- **`.push()`** en `addExpenseEntry()` para agregar un nuevo gasto al final del array `expenseEntries` sin reescribir la estructura completa.
- **Bucles `for...of`** para recorrer `expenseEntries` y sumar montos, tanto en el cálculo del total general como en el cálculo por categoría (`calculateCategoryExpenses`).

### Funciones con responsabilidades definidas

El código separa claramente dos tipos de funciones:

- **Funciones que calculan y retornan** (`calculateAverageExpense`, `calculateBalance`, `calculateCategoryExpenses`, `calculateLargestCategory`): reciben datos, procesan y devuelven un resultado con `return`, sin modificar el estado global.
- **Funciones que actualizan el estado directamente** (`updateBalanceColor`, `addExpenseEntry`): modifican variables globales como `balanceColor`, `totalExpensesValue` o `expenseEntries` como efecto secundario, permitiendo que otras partes del programa (como la interfaz) reflejen los cambios sin depender de un valor de retorno.

### Lógica condicional

**Sistema de "rastreo del ganador" (`calculateLargestCategory`)** — Se recorre un array de categorías comparando cada monto contra el mayor encontrado hasta el momento, actualizando la variable ganadora solo cuando se supera el máximo actual. Es un patrón clásico para encontrar el valor máximo dentro de una colección.

**Codificación por umbrales (`updateBalanceColor`)** — Usa una cadena de `if / else if / else` para clasificar el saldo en tres estados visuales (rojo, naranja, verde) según su relación con el presupuesto, permitiendo que la interfaz comunique el estado financiero de un vistazo.

## Funciones principales (`calculations.js`)

| Función | Descripción |
|---|---|
| `calculateAverageExpense()` | Calcula el gasto promedio por entrada |
| `calculateBalance()` | Calcula el saldo restante (presupuesto - gastos) |
| `updateBalanceColor()` | Actualiza el color del saldo según su estado |
| `calculateCategoryExpenses(category)` | Suma los gastos de una categoría específica |
| `calculateLargestCategory()` | Determina la categoría con mayor gasto |
| `addExpenseEntry(values)` | Agrega un nuevo gasto y actualiza el total |

## Demo

 [https://nef-espinosa14.github.io/web_project_expenses_es/](https://nef-espinosa14.github.io/web_project_expenses_es/)
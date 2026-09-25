# 📘 Immer in React Reducer

## 💡 Why Immer?

In React reducers (`useReducer`), you should **never mutate state directly**.

### ❌ Wrong:

```js
state.count += 1;
return state;
```

### ✅ Correct:

```js
return { ...state, count: state.count + 1 };
```

This is fine for small state, but becomes messy with nested objects:

```js
return {
  ...state,
  user: {
    ...state.user,
    address: {
      ...state.user.address,
      city: "Delhi"
    }
  }
};
```

👉 This is where **Immer** helps.

---

## 🚀 What is Immer?

Immer lets you write code as if you're mutating state, but it actually keeps everything immutable.

### Example:

```js
draft.user.address.city = "Delhi";
```

Immer converts it internally into a safe immutable update.

> ✨ "Write mutation-style code, get immutable updates."

---

## 📦 Installation

```bash
npm install immer
```

---

## 🧠 Core Concept: `produce`

```js
import { produce } from "immer";
```

### Syntax:

```js
const newState = produce(oldState, (draft) => {
  // mutate draft
});
```

* `oldState` → original state
* `draft` → temporary editable version

---

## 🧩 Using Immer in Reducer

### Without Immer:

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
```

---

### With Immer:

```js
import { produce } from "immer";

function reducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "increment":
        draft.count += 1;
        break;
      default:
        break;
    }
  });
}
```

✅ No spread operator
✅ Cleaner logic

---

## 🔥 Example with Nested State

### Initial State:

```js
const initialState = {
  user: {
    name: "Chaitanya",
    address: {
      city: "Sonipat"
    }
  }
};
```

---

### Reducer:

```js
function reducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "changeCity":
        draft.user.address.city = action.payload;
        break;
    }
  });
}
```

---

## ⚛️ Using with React

```js
import React, { useReducer } from "react";
import { produce } from "immer";

const initialState = { count: 0 };

function reducer(state, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "increment":
        draft.count++;
        break;
    }
  });
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>
    </div>
  );
}
```

---

## ⚠️ Important Rules

1. Only modify `draft`, never `state`
2. Avoid returning manually inside `produce`
3. Best for complex or nested state
4. Not necessary for simple state

---

## 🧠 Mental Model

> Immer gives you a **temporary editable draft**, then safely creates a new immutable state behind the scenes.

---

## 🆚 When to Use Immer?

### ✅ Use Immer when:

* State is deeply nested
* Reducer logic is complex
* Too many spread operators

### ❌ Avoid when:

* State is simple
* You want fewer dependencies

---

## 🎯 Bonus (Cleaner Reducer)

```js
import { produce } from "immer";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "increment":
      draft.count++;
      break;
  }
});
```

---

## 🚀 Summary

* Immer simplifies immutable updates
* You write mutation-like code safely
* Great for reducers with complex state

---

Happy coding! 🚀

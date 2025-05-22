# React + Vite

##  NameUpload Component – Technical Summary

---

### Core Concepts & Terminology

| Term / Concept      | Explanation                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `useState()`        | React hook to declare state. Used here twice: once for `names`, once for `input`. |
| `heavyWork()`       | A mock heavy function simulating expensive computation.                     |
| `useState(() => heavyWork())` | Lazy initialization — the heavy function only runs once on initial render. |
| `input`             | Controlled input state for the input field.                                 |
| `setInput()`        | Updates the `input` value when the user types.                              |
| `handleUpload()`    | Adds the current input value to the beginning of the `names` array.         |
| `setNames((prev) => [...])` | Callback form of state update, ensures it always uses latest `names`. |
| `names.map(...)`    | Iterates through names and renders each one as a `<p>` tag.                 |

---

###  Logic Flow

1. On mount:
   - `useState(() => heavyWork())` runs `heavyWork()` **only once** for `names` initialization.
   - `names` becomes `["Cruella", "Selline"]`.

2. User types in `<input>`:
   - `handleInputChange` updates `input` state with `e.target.value`.

3. User clicks `Upload`:
   - `handleUpload` prepends new name to `names` using a functional update.

4. Component re-renders with updated list of names.

---

###  Performance & Best Practices

| Technique                      | Benefit                                                             |
|--------------------------------|---------------------------------------------------------------------|
| Lazy initialization (`useState(() => heavyWork())`) | Prevents heavy logic from running on every render.               |
| Functional `setState` (`prevState => ...`)         | Guarantees the latest state is used (avoids stale closures).     |
| Controlled Input (`value={input}` + `onChange`)    | Ensures form state is always in sync with React.                 |
| Use of `key={index}` in `.map()`                   | Needed to uniquely identify each element (note: better to use stable IDs). |

---

###  Summary

This component demonstrates:
- How to avoid unnecessary computation with **lazy initialization**.
- How to use **functional updates** with `setState`.
- Good practice in managing **controlled form inputs**.
- Clean rendering of dynamic lists.


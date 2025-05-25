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

---

# React App med Context API – Temaomkopplare
## Översikt
> hur man använder Context API och useContext för att växla mellan mörkt och ljust tema i en React-applikation.

## Flow och logik
### Komponent	Ansvar	Beskrivning
> `App.jsx`	Root-komponent	Här sätts ThemeContext.Provider och skickar isDark och setIsDark som global state

> Page.jsx	Mellankomponent	Har ingen egen logik – fungerar som ett skal för Header, Content och Footer

>Content.jsx	Innehållsyta	Läser av isDark och justerar background och color beroende på tema

> Footer.jsx	Bottenmeny	Har en knapp för att toggla isDark genom att använda setIsDark(!isDark)

> ThemeContext.js	Kontext	Skapar ett Context-objekt som håller temainformationen

## Viktiga Hooks & Kontext

```js
// Skapar kontext
export const ThemeContext = createContext(null);
// Konsumerar kontext
const { isDark, setIsDark } = useContext(ThemeContext);
```

## Centrala React Hooks
Hook	Beskrivning
`useState()`	Skapar state: const [isDark, setIsDark] = useState(false)
`useContext()`	Läser in data från ThemeContext

##  Dynamisk styling (inline CSS)
```jsx
<div style={{
  backgroundColor: isDark ? "black" : "white",
  color: isDark ? "white" : "black"
}}>
```
- Om isDark = true ➜ svart bakgrund och vit text

- Om isDark = false ➜ vit bakgrund och svart text



användarinfo (t.ex. auth)

språk (locale)

Du vill undvika prop-drilling

### Exempel på användning
```jsx
<ThemeContext.Provider value={{ isDark, setIsDark }}>
  <Page />
</ThemeContext.Provider>
```

-  Footer.jsx:

```jsx
const { isDark, setIsDark } = useContext(ThemeContext);
<button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
```

---

## React  useContext + Context API – När, varför och när inte?

### Vad är Context?
- React Context används för att dela global data (t.ex. användare, tema, språk, autentisering) till komponenter utan att behöva skicka props genom varje nivå.

### När bör du använda useContext?
Situation	Exempel
> Global state	Användarinformation, språkinställningar, mörkt/ljust tema
> Data som behövs av många komponenter på olika nivåer	Auth-status, navigation, API-data
> Undvika prop drilling	När props måste skickas genom många mellanliggande komponenter

## När bör du inte använda Context?
## Undvik Context när…	Varför?
> Du bara behöver skicka data till 1–2 nivåer ner	Det är enklare med props
> Data förändras ofta	Context orsakar omrendering av alla komponenter som använder den
> Du vill göra komponenten återanvändbar eller testbar	Context gör det svårare att isolera komponentens beroenden
> För att undvika prop drilling	Testa istället component composition eller ett state management-verktyg

##  Alternativ till Context
**Alternativ	Beskrivning**
> Props	Bra för små appar eller när datan inte är djup
> Component Composition	Ex: <Page><Sidebar /></Page>
> Zustand, Redux, Jotai	När state är komplext, uppdateras ofta eller behöver devtools/debugging

##  Slutsats
1. Använd Context för global delning av stabil data

2. Undvik Context för ofta förändrade eller lokala tillstånd

3.  `Prop drilling ≠ problem` – löses ibland bättre med komposition









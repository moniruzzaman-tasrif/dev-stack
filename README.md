# 🚀 DevStack

## 📖 About My Project

DevStack is a simple React website where users can see different technologies and build their own technology stack.

Users can add technologies to their stack and remove them when they want.

🔗 **Live Website:** https://dev-stack-lac.vercel.app/

🔗 **GitHub Repository:** https://github.com/moniruzzaman-tasrif/dev-stack

---

## 🛠️ Technologies I Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React Icons
* Lucide React
* React Toastify

---

## ✨ 3 Features

### 1. 📚 See Technologies

Users can see different technologies with their name, category, rating, and difficulty.

### 2. ➕ Add to Stack

Users can add their favorite technologies to their own stack.

### 3. 🗑️ Remove from Stack

Users can remove a technology from their stack or clear the whole stack.

---

# 📝 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.

It makes React code easier to write and understand.

```jsx
<h1>Hello World</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to send data from a parent to a child.

**State** is used to store data that can change.

* Props → Parent sends data
* State → Component manages data

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and change data in a React component.

I used `useState` to store the technologies that the user adds to the stack.

```jsx
const [tectItem, setTechItem] = useState([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component loads.

Normally, we can use it to fetch JSON data.

But in my project, I did **not** use `useEffect`. I used `fetch()` and React `use()` to load the JSON data.

```jsx
const res = await fetch("/technologies.json");
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.

It helps React update the list correctly.

Example:

```jsx
{items.map(item => (
  <div key={item.id}>
    {item.name}
  </div>
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when the stack is empty.

```jsx
{tectItem.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  // Show stack items
)}
```

If the stack is empty, the message is shown.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from parent to child using **props**.

Example:

```jsx
<Child items={items} />
```

The child can send something back by using a function given by the parent.

Example:

```jsx
<Child onAdd={handleAdd} />
```

Then the child can call:

```jsx
onAdd(item);
```

So:

**Parent → Child:** Props

**Child → Parent:** Function/Callback

---

# 🎯 Conclusion

DevStack is a beginner React project.

I built this project to practice React concepts like **components, props, state, `useState`, `use()`, conditional rendering, `.map()`, and JSON data**.

Thank you for checking my project! ❤️

⭐ Don't forget to check the GitHub repository.

# 🧮 JavaScript Faulty Calculator

A simple and responsive calculator built using **HTML, CSS, and JavaScript**.

This project demonstrates DOM manipulation, event handling, and dynamic expression evaluation using JavaScript.

---

## 🚀 Features

* Perform basic arithmetic operations:

  * Addition (+)
  * Subtraction (-)
  * Multiplication (*)
  * Division (/)
* Real-time display update
* Clear (`C`) button to reset calculator
* Error handling for invalid expressions
* Clean and beginner-friendly logic

---

## 🛠 Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)
* DOM Manipulation
* Event Listeners

---

## 📂 Project Structure

```
📁 calculator-project
 ├── index.html
 ├── style.css
 └── script.js
```

---

## 🧠 How It Works

1. All buttons are selected using `querySelectorAll()`
2. Click events are added to each button
3. Button values are appended to a variable (`currentInput`)
4. When `=` is pressed:

   * `eval()` evaluates the mathematical expression
   * The result is displayed
5. If the expression is invalid:

   * An error message is shown
6. When `C` is pressed:

   * The display and input are cleared

---

## ⚠ Important Note

This project uses `eval()` for evaluating expressions.
While it works for learning purposes, `eval()` is **not recommended for production applications** due to security risks.

Future improvement: Replace `eval()` with a custom expression parser.

---

## 💡 Future Improvements

* Add Backspace button
* Add keyboard support
* Improve UI with modern design
* Replace `eval()` with secure logic
* Add decimal and percentage support
* Add calculation history

---

## 📸 Preview

Basic calculator UI with button-based input and live display.

---

## 👨‍💻 Author

**Krishna Das**
Founder of CodeUdaan
B.Tech Computer Science Student
Passionate about AI & Full Stack Development

---

## 🌟 Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open-source and available under the MIT License.

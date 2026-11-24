# Login & Registration Forms (React)

A beginner-friendly React project demonstrating **controlled forms** with `useState`.

## Features
- Registration form with name, email, phone number and password.
- Displays submitted registration details after submission.
- Login form checks credentials against the registration data stored in React state.
- Displays a login success or error message.
- Uses controlled inputs (`value` + `onChange`) and form submission (`onSubmit`).

## Run the project

You need Node.js and npm installed.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## How it works
1. `useState` stores the values typed into each form.
2. `onChange` updates the relevant state whenever an input changes.
3. `onSubmit` handles submission and `event.preventDefault()` prevents a page reload.
4. The login handler compares the entered email/password with the registration data held in state.

**Note:** This is a frontend classroom demonstration only. Registration data is stored in memory and is lost when the page is refreshed. It is not a secure production authentication system.

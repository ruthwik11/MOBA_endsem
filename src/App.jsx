import { useState } from 'react';

export default function App() {
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [registeredDetails, setRegisteredDetails] = useState(null);

  const [login, setLogin] = useState({ email: '', password: '' });
  const [loginMessage, setLoginMessage] = useState(null);

  // Controlled registration form: each input value comes from React state.
  function handleRegistrationChange(event) {
    const { name, value } = event.target;
    setRegistration(previous => ({ ...previous, [name]: value }));
  }

  function handleRegistrationSubmit(event) {
    event.preventDefault();
    setRegisteredDetails({ ...registration });
  }

  // Controlled login form.
  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLogin(previous => ({ ...previous, [name]: value }));
    setLoginMessage(null);
  }

  function handleLoginSubmit(event) {
    event.preventDefault();

    // Demo credentials: use the same email and password entered in registration.
    if (
      registeredDetails &&
      login.email === registeredDetails.email &&
      login.password === registeredDetails.password
    ) {
      setLoginMessage({ type: 'success', text: `Login successful. Welcome, ${registeredDetails.name}!` });
    } else {
      setLoginMessage({
        type: 'error',
        text: 'Login failed. Register first or check your email and password.'
      });
    }
  }

  return (
    <main className="page">
      <header className="heading">
        <p className="eyebrow">REACT • CONTROLLED FORMS</p>
        <h1>Login & Registration</h1>
        <p className="subtitle">A simple demonstration of React state and form submission.</p>
      </header>

      <section className="forms">
        <article className="panel">
          <h2>Create an account</h2>
          <p className="hint">Enter your details and submit the form.</p>
          <form onSubmit={handleRegistrationSubmit}>
            <label>
              Full name
              <input name="name" value={registration.name} onChange={handleRegistrationChange}
                placeholder="Enter your name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" value={registration.email}
                onChange={handleRegistrationChange} placeholder="you@example.com" required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" value={registration.phone}
                onChange={handleRegistrationChange} placeholder="Enter phone number" required />
            </label>
            <label>
              Password
              <input name="password" type="password" value={registration.password}
                onChange={handleRegistrationChange} placeholder="Create a password" minLength="4" required />
            </label>
            <button type="submit">Register</button>
          </form>

          {registeredDetails && (
            <div className="result">
              <h3>Registration successful!</h3>
              <p><strong>Name:</strong> {registeredDetails.name}</p>
              <p><strong>Email:</strong> {registeredDetails.email}</p>
              <p><strong>Phone:</strong> {registeredDetails.phone}</p>
              <p className="small-note">Password is not displayed for privacy.</p>
            </div>
          )}
        </article>

        <article className="panel">
          <h2>Welcome back</h2>
          <p className="hint">Log in using the details you registered above.</p>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Email address
              <input name="email" type="email" value={login.email} onChange={handleLoginChange}
                placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input name="password" type="password" value={login.password}
                onChange={handleLoginChange} placeholder="Enter your password" required />
            </label>
            <button type="submit">Login</button>
          </form>

          {loginMessage && (
            <div className={`message ${loginMessage.type}`} role="status">
              {loginMessage.text}
            </div>
          )}
          <div className="demo-tip">
            <strong>How to test:</strong>
            <ol>
              <li>Register with your name, email, phone and password.</li>
              <li>Enter the same email and password in the login form.</li>
              <li>Try an incorrect password to see the error message.</li>
            </ol>
          </div>
        </article>
      </section>
      <footer>React useState • onChange • onSubmit • preventDefault</footer>
    </main>
  );
}
import { useState } from 'react';

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', email: '', role: 'user' });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(form);
    setForm({ name: '', email: '', role: 'user' });
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {submitted && (
        <div className="summary">
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Role: {submitted.role}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

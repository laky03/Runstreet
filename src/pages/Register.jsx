import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.username || !form.password) {
      setError('Popuni sva polja.');
      return;
    }

    const existingResponse = await fetch(`http://localhost:5000/users?username=${form.username}`);
    const existingUsers = await existingResponse.json();

    if (existingUsers.length > 0) {
      setError('To korisnicko ime vec postoji.');
      return;
    }

    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, role: 'user' }),
    });

    navigate('/login');
  };

  return (
    <div className="page-container">
      <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Join the club</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Napravi nalog za sneaker dropove</h1>
          <p className="mt-4 text-lg text-slate-600">
            Registracijom dobijas brzi pristup korpi i admin panel ostaje odvojen samo za
            administratora.
          </p>
        </div>

        <div className="glass-panel accent-ring rounded-[2rem] p-8">
          <h2 className="text-2xl font-bold text-slate-950">Registracija</h2>
          {error && <div className="mt-4 rounded-2xl bg-red-500/10 p-4 text-red-300">{error}</div>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Izaberi korisnicko ime"
              value={form.username}
              onChange={handleChange}
              className="field"
            />
            <input
              type="password"
              name="password"
              placeholder="Lozinka"
              value={form.password}
              onChange={handleChange}
              className="field"
            />
            <button className="primary-btn w-full">Registruj se</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;

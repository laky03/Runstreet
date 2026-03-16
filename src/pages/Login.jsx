import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Unesi korisnicko ime i lozinku.');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/users?username=${username}&password=${password}`
      );
      const data = await response.json();

      if (data.length === 1) {
        login(data[0]);
        navigate(data[0].role === 'admin' ? '/admin' : '/');
        return;
      }

      setError('Pogresno korisnicko ime ili lozinka.');
    } catch (error) {
      setError('Server trenutno nije dostupan.');
    }
  };

  return (
    <div className="page-container">
      <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Member access</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Prijava u Runstreet nalog</h1>
          <p className="mt-4 text-lg text-slate-600">
            Prati omiljene modele, upravljaj korpom i proveri nove dropove cim stignu.
          </p>
        </div>

        <div className="glass-panel accent-ring rounded-[2rem] p-8">
          <h2 className="text-2xl font-bold text-slate-950">Prijava</h2>
          {error && <div className="mt-4 rounded-2xl bg-red-500/10 p-4 text-red-300">{error}</div>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Korisnicko ime"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="field"
            />
            <input
              type="password"
              placeholder="Lozinka"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="field"
            />
            <button type="submit" className="primary-btn w-full">
              Uloguj se
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;

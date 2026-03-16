import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout, cart } = useContext(AuthContext);
  const location = useLocation();

  const linkClass = (path) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      location.pathname === path
        ? 'bg-amber-400 text-slate-950'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="page-container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 font-black text-slate-950">
            RS
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Runstreet</p>
            <p className="text-lg font-bold text-slate-950">Sneaker Store</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          
          <Link to="/" className={linkClass('/')}>
            Ponuda
          </Link>
           <Link to="/about" className={linkClass('/about')}>
              O nama
            </Link> 
         
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className={linkClass('/admin')}>
                  Admin
                </Link>
              )}
              <Link to="/cart" className={linkClass('/cart')}>
                Korpa ({cart.length})
              </Link>
              <button onClick={logout} className="secondary-btn text-sm">
                Odjava
              </button>
            </>
          ) : (
            <>
             
              <Link to="/login" className={linkClass('/login')}>
                Prijava
              </Link>
              <Link to="/register" className="primary-btn text-sm">
                Napravi nalog
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

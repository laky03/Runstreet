import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Cart() {
  const { cart, removeFromCart } = useContext(AuthContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page-container">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Korpa</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Tvoji izabrani modeli</h1>

          {cart.length === 0 ? (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 p-8 text-center text-slate-500">
              Korpa je prazna. Dodaj bar jedan par patika iz kataloga.
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {cart.map((item, index) => (
                <article
                  key={`${item.id}-${index}`}
                  className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs uppercase tracking-[0.28em] text-slate-500">
                      Sneaker
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-950">{item.name}</h2>
                      <p className="text-slate-400">{item.price} RSD</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="secondary-btn">
                    Ukloni
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>

        <aside className="glass-panel accent-ring rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Pregled kupovine</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-slate-600">
              <span>Broj artikala</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex items-center justify-between text-slate-600">
              <span>Dostava</span>
              <span>Besplatno</span>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg text-slate-950">Ukupno</span>
                <span className="text-3xl font-black text-amber-600">{total} RSD</span>
              </div>
            </div>
          </div>

          <button className="primary-btn mt-8 w-full justify-center text-center">
            Nastavi na placanje
          </button>
        </aside>
      </section>
    </div>
  );
}

export default Cart;

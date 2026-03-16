import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Greska pri ucitavanju patika:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container">
      <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel accent-ring rounded-[2rem] p-8 md:p-10">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="pill text-xs uppercase tracking-[0.28em]">Streetwear selection</span>
            <span className="pill text-xs uppercase tracking-[0.28em]">Nova sezona</span>
          </div>
          <h1 className="section-title max-w-2xl text-slate-950">
            Premium patike za grad, trening i svaki dan.
          </h1>
          <p className="muted-text mt-5 max-w-xl text-lg">
            Runstreet donosi odabrane sneaker modele, od retro silueta do modernih runner
            patika sa fokusom na udobnost i stil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#katalog" className="primary-btn">
              Pogledaj kolekciju
            </a>
            <Link to="/register" className="secondary-btn">
              Napravi korisnicki nalog
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="glass-panel rounded-[2rem] p-6 ">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Fokus</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">Drops, limited modeli i everyday pairs</p>
          </div>
          <div className="glass-panel flex items-center justify-center rounded-[2rem] p-6">
            <div className="grid w-full place-items-center gap-4 text-center sm:grid-cols-3">
               <div className="flex min-h-24 w-full flex-col items-center justify-center text-center">
                  <p className="text-3xl font-black text-slate-950">24h</p>
                  <p className="muted-text text-sm">obrada porudzbina</p>
                </div>

                <div className="flex min-h-24 w-full flex-col items-center justify-center text-center">
                  <p className="text-3xl font-black text-slate-950">100%</p>
                  <p className="muted-text text-sm">originalni modeli</p>
                </div>

                <div className="flex min-h-24 w-full flex-col items-center justify-center text-center">
                  <p className="text-3xl font-black text-slate-950">6</p>
                  <p className="muted-text text-sm">starter modela</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="katalog">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Katalog</p>
            <h2 className="text-3xl font-bold text-slate-950">Aktuelni modeli patika</h2>
          </div>
          <p className="muted-text max-w-md text-right text-sm">
            Svaki model ima detaljan opis i mozes ga odmah ubaciti u korpu.
          </p>
        </div>

        {loading ? (
          <div className="glass-panel rounded-[2rem] p-8 text-center text-slate-600">
            Ucitavanje ponude...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="glass-panel card-hover rounded-[2rem] border border-slate-200 p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-700">Sneaker</p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-950">{product.name}</h3>
                  </div>
                  <span className="text-nowrap rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-950">
                    {product.price} RSD
                  </span>
                </div>
                <p className="muted-text min-h-24">{product.description}</p>
                <Link to={`/products/${product.id}`} className="primary-btn mt-5 inline-flex">
                  Pogledaj detalje
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

  function MenShoes() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('http://localhost:5000/products')
        .then((res) => res.json())
        .then((data) => {
          const muskiProizvodi = data.filter((product) => product.gender === 'muske');
          setProducts(muskiProizvodi);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Greska pri ucitavanju muskih patika:', error);
          setLoading(false);
        });
    }, []);

    return (
      <div className="page-container">
        <section>
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Ponuda</p>
            <h2 className="text-3xl font-bold text-slate-950">Muske patike</h2>
          </div>
            {loading?(
                 <div className="glass-panel rounded-[2rem] p-8 text-center text-slate-600">
                    Ucitavanje ponude...
                </div>
            ):(
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((product)=>(
                        <article className="glass-panel card-hover rounded-[2rem] border border-slate-200 p-6">
                            <div class="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-700">Muske</p>
                                    <h3 className="mt-2 text-2xl font-bold text-slate-950">{product.name}</h3>
                                </div>
                                <span class="text-nowrap rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-950">{product.price} RSD</span>
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

export default MenShoes;
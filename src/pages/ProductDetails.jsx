import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Greska pri ucitavanju modela:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="page-container">
        <div className="glass-panel rounded-[2rem] p-8 text-center">Ucitavanje modela...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="page-container">
        <div className="glass-panel rounded-[2rem] p-8 text-center text-red-600">
          Model nije pronadjen.
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass-panel flex min-h-80 items-end rounded-[2rem] p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Model overview</p>
            <h2 className="mt-4 max-w-md text-5xl font-black text-slate-950">{product.name}</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
              Stranica je sada bez fotografija kako se ne bi prikazivali pogresni vizuali.
              Fokus je ostavljen na nazivu modela, opisu i ceni.
            </p>
          </div>
        </div>

        <div className="glass-panel accent-ring rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Detalji modela</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>

          <div className="my-8 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">Cena</p>
              <p className="text-2xl font-bold text-amber-600">{product.price} RSD</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm text-slate-400">Kategorija</p>
              <p className="text-2xl font-bold text-slate-950">Sneakers</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => addToCart(product)} className="primary-btn">
              Dodaj u korpu
            </button>
            <Link to="/" className="secondary-btn">
              Nazad na katalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;

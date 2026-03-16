import { useEffect, useState } from 'react';
import AdminProductForm from '../components/AdminProductForm';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reload]);

  const deleteProduct = async (id) => {
    if (confirm('Da li sigurno brises ovaj model patika?')) {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });
      setReload((prev) => !prev);
    }
  };

  const handleFormSubmit = () => {
    setEditingProduct(null);
    setReload((prev) => !prev);
  };

  return (
    <div className="page-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-8">
        <AdminProductForm onSuccess={handleFormSubmit} productToEdit={editingProduct} />

        <section className="glass-panel rounded-[2rem] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Korisnici</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">Registrovani nalozi</h2>
          <div className="mt-5 space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="font-medium text-slate-800">{user.username}</span>
                <span className="pill text-xs">{user.role}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="glass-panel rounded-[2rem] p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-600">Admin panel</p>
            <h1 className="mt-3 text-3xl font-black text-slate-950">Upravljanje sneaker katalogom</h1>
          </div>
          <div className="pill">{products.length} modela</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
            >
              <div className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Bez slike</p>
                <p className="mt-2 text-sm text-slate-500">
                  Vizuali su uklonjeni da katalog ne prikazuje netacne modele patika.
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold text-slate-950">{product.name}</h2>
                  <span className="text-sm font-bold text-amber-600">{product.price} RSD</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{product.description}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => setEditingProduct(product)} className="secondary-btn">
                  Izmeni
                </button>
                <button onClick={() => deleteProduct(product.id)} className="primary-btn">
                  Obrisi
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminPanel;

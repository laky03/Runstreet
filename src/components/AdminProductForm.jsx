import { useEffect, useState } from 'react';

const initialForm = {
  name: '',
  description: '',
  price: '',
};

function AdminProductForm({ onSuccess, productToEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (productToEdit) {
      setForm({
        name: productToEdit.name,
        description: productToEdit.description,
        price: productToEdit.price,
      });
      return;
    }

    setForm(initialForm);
  }, [productToEdit]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.description || !form.price) {
      alert('Unesi sve podatke za model patika.');
      return;
    }

    const requestUrl = productToEdit
      ? `http://localhost:5000/products/${productToEdit.id}`
      : 'http://localhost:5000/products';

    await fetch(requestUrl, {
      method: productToEdit ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...form, price: Number(form.price) }),
    });

    setForm(initialForm);
    onSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel accent-ring rounded-[2rem] p-6"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">Katalog</p>
          <h2 className="text-2xl font-bold text-slate-950">
            {productToEdit ? 'Izmena modela' : 'Dodaj novi par'}
          </h2>
        </div>
        <div className="pill text-xs">{productToEdit ? 'Edit mode' : 'New drop'}</div>
      </div>

      <div className="grid gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Naziv modela"
          className="field"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Opis modela, namena, materijali..."
          rows="4"
          className="field resize-none"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Cena (RSD)"
          type="number"
          className="field"
        />
      </div>

      <button type="submit" className="primary-btn mt-6">
        {productToEdit ? 'Sacuvaj izmene' : 'Dodaj patike'}
      </button>
    </form>
  );
}

export default AdminProductForm;

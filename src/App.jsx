import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './pages/AdminPanel';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import About from './pages/About';
import MenShoes from './pages/MenShoes';
import WomenShoes from './pages/WomenShoes';


function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="pb-16 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/muske" element={<MenShoes />} />
          <Route path="/zenske" element={<WomenShoes />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Products.css'; 

function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
    };

    const fetchCategories = async () => {
        const res = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(res.data);
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="products-page">
            <div className="container py-5">
                <h2 className="mb-4 text-center text-white">Our Products</h2>

                <div className="row mb-4">
                    <div className="col-md-6 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6 mb-2">
                        <select
                            className="form-select"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All categories</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row">
                    {filteredProducts.length === 0 ? (
                        <p className="text-white">No products found.</p>
                    ) : (
                        filteredProducts.map((product) => (
                            <div className="col-md-4 mb-4" key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;

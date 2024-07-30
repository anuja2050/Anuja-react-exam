import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const [modelName, setmodelName] = useState('');
    const [Brand, setBrand] = useState('');
    const [Price, setPrice] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setmodelName(localStorage.getItem('modelName'));
        setBrand(localStorage.getItem('Brand'));
        setPrice(localStorage.getItem('Price'));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9595/televisions/update/${localStorage.getItem('id')}`, {
            modelName,
            Brand,
            Price
        })
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h2>Update TV Data</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label>modelName</label>
                    <input
                        type="text"
                        className="form-control"
                        value={modelName}
                        onChange={(e) => setmodelName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Brand</label>
                    <input
                        type="text"
                        className="form-control"
                        value={Brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2" >Submit</button>
            </form>
        </div>
    );
}

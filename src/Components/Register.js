import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [modelName, setmodelName] = useState('');
    const [Brand, setBrand] = useState('');
    const [Price, setPrice] = useState('');
    const [Size, setSize] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9595/televisions/add', {
            modelName,
            Brand,
            Price,
            Size
        })
            .then(response => {
                console.log(response.data);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h2>Register Television</h2>
            <form onSubmit={handleSubmit} >
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
                <div className="form-group">
                    <label>Size</label>
                    <input
                        type="number"
                        className="form-control"
                        value={Size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2" >Submit</button>
            </form>
        </div>
    );
}
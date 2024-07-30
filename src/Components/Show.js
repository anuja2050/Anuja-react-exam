import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Show() {
    const navigate = useNavigate();
    const [television, setTelevisions] = useState([]);

    const getTelevisions = () => {
        axios.get('http://localhost:9595/televisions/all')
            .then(response => {
                console.log(response.data);
                setTelevisions(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleRegister = () => {
        navigate("register");
    };

    const handleLocalStorage = (id, modelName, Brand, Price, Size) => {
        localStorage.setItem("id", id);
        localStorage.setItem("modelName", modelName);
        localStorage.setItem("Brand", Brand);
        localStorage.setItem("Price", Price);
        localStorage.setItem("Size", Size);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:9595/televisions/delete/${id}`)
            .then(response => {
                console.log(response.data);
                getTelevisions();
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        getTelevisions();
    }, []);

    return (
        <div className="container mt-3 mb-3">
            <button className="btn btn-info m-2" onClick={handleRegister}>Register</button>
            <h3>Televison List</h3>
            <div className="row mt-3 mb-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">modelName</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Size</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {television.map(television => (
                            <tr key={television._id}>
                                <td>{television._id}</td>
                                <td>{television.modelName}</td>
                                <td>{television.Brand}</td>
                                <td>{television.Price}</td>
                                <td>{television.Size}</td>
                                <td>
                                    <Link to="/update">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleLocalStorage(television._id, television.modelName, television.Brand, television.Price, television.Size)}
                                        >
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(television._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

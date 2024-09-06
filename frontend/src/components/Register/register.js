// src/components/Auth/Register.js
import React, { useState } from 'react';
import authService from '../../repository/Authentication/auth_service'; // Adjust the path based on your folder structure
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        role: 'ROLE_USER', // Default role
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(formData.name, formData.surname, formData.username, formData.password, formData.role)
            .then(() => {
                navigate('/login'); // Navigate to login on successful registration
            })
            .catch((error) => {
                console.error('Error registering:', error);
                alert('Registration failed. Please try again.');
            });
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" name="surname" className="form-control" value={formData.surname} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <select name="role" className="form-control" value={formData.role} onChange={handleChange}>
                        <option value="ROLE_USER">User</option>
                        <option value="ROLE_ADMIN">Admin</option>
                        <option value="ROLE_COMPANY">Company</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;

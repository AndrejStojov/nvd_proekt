import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplyForm = () => {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    jobOfferId: id,
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cvFile: null,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const data = new FormData();
    data.append('jobOfferId', formData.jobOfferId);
    data.append('name', formData.name);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('cvFile', formData.cvFile);

    try {
      const response = await axios.post('http://localhost:8080/api/applications/apply', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.response?.data || 'Error submitting the form';
      setError(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Apply for Job Offer</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
          <input
            type="hidden"
            id="jobOfferId"
            name="jobOfferId"
            className="form-control"
            value={formData.jobOfferId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvFile" className="form-label">Upload CV</label>
          <input
            type="file"
            id="cvFile"
            name="cvFile"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForm;

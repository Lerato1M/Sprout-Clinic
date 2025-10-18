import React, { useState } from 'react';

export default function SubmitProblem() {
  const [cropName, setCropName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('cropName', cropName);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('location', location);
    formData.append('email', email);

    console.log('Submitting problem:', { cropName, description });
  };

  return (
    <div>
      <h2>Submit a Problem</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Crop Name" value={cropName} onChange={(e) => setCropName(e.target.value)} />
        <textarea placeholder="Problem Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <input type="text" placeholder="Location (optional)" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

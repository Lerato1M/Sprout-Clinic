import React, { useState } from 'react';

export default function Upload() {
  const [image, setImage] = useState(null);
  const [cropName, setCropName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('cropName', cropName);
    formData.append('symptoms', symptoms);
    formData.append('notes', notes);
    formData.append('location', location);

    // Send to backend
    console.log('Submitting', { cropName, symptoms });
  };

  return (
    <div>
      <h2>Upload Crop Issue</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <input type="text" placeholder="Crop Name" value={cropName} onChange={(e) => setCropName(e.target.value)} />
        <input type="text" placeholder="Symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
        <textarea placeholder="Additional Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <input type="text" placeholder="Location (optional)" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

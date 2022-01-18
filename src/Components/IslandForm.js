import { useState } from 'react';

export default function IslandForm({ island }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Type Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        className="book"
        onClick={() => {
          window.confirm(
            `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
          );
        }}
      >
        Book for today!
      </button>
    </div>
  );
}

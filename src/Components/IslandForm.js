import { useState } from "react";

const IslandForm = ({ island, incrementVisitor }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const bookIsland = () => {
    const confirmed = window.confirm(
      `Are you sure you want to book the island ${island.name} with the name: ${name} and phone: ${phone}`
    );
    if (confirmed) {
      incrementVisitor(island);
      alert("Island is booked");
    }
  };

  const typePhone = (event) => setPhone(event.target.value);
  const typeName = (event) => setName(event.target.value);

  return (
    <form className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={typeName} />
      <input
        type="tel"
        pattern="[0-9]*"
        placeholder="Type Phone Number"
        onChange={typePhone}
      />
      <button type="submit" className="book" onClick={bookIsland}>
        Book for today!
      </button>
    </form>
  );
};

export default IslandForm;

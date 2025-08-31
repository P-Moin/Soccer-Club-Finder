import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const clubs = [
    { name: "Chicago Youth Soccer Club", city: "Chicago" },
    { name: "Bay Area Strikers", city: "San Jose" },
    { name: "North Texas SC Academy", city: "Dallas" },
  ];

  const filtered = clubs.filter((club) =>
    club.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Soccer Club Finder</h1>
      
      <input
        type="text"
        placeholder="Enter your city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <h2>Results:</h2>
      <ul>
        {filtered.map((club, i) => (
          <li key={i}>{club.name} — {club.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function ClubsPage() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const res = await fetch(
        "https://api.airtable.com/v0/appQF4d2g0dOXJVjl/NorCal%20Soccer%20Clubs",
        {
          headers: {
            Authorization: "Bearer YOUR_API_KEY",
          },
        }
      );
      const data = await res.json();
      setClubs(data.records);
    };

    fetchClubs();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Soccer Clubs</h1>
      <ul className="space-y-2">
        {clubs.map((club) => (
          <li key={club.id} className="border rounded-lg p-4 shadow">
            <h2 className="font-semibold">{club.fields.Name}</h2>
            <p>{club.fields.City} - {club.fields.AgeGroup}</p>
            {club.fields.Website && (
              <a
                href={club.fields.Website}
                className="text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubsPage;

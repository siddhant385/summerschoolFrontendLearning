import { useEffect, useState } from "react";
import { getWorkshops } from "@/api/workshopapi";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Input } from "@/components/ui/input";

export default function WorkshopList() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("");
  const [instructor, setInstructor] = useState("");

  // Fetch workshops whenever filters change
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getWorkshops({
          search,
          technology,
          instructor,
          page: 1,
          page_size: 20,
        });
        setWorkshops(data.workshops);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, technology, instructor]);

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search workshops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <Input
          type="text"
          placeholder="Filter by technology..."
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          className="border p-2 rounded input"
        />
        <Input
          type="text"
          placeholder="Filter by instructor..."
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Workshop cards */}
      {error && <p className="text-red-500 mb-4 ">Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {loading ? (
          <p>Loading workshops...</p> // Only cards area shows loading
        ) : workshops.length > 0 ? (
          workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))
        ) : (
          <p>No workshops found.</p>
        )}
      </div>

      <style jsx>{`
            /* For Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
    display: none;
}

/* For Firefox */
html {
    scrollbar-width: none;
}

/* For IE and Edge Legacy */
body {
    -ms-overflow-style: none;
}
            `}</style>

    </div>
  );
}

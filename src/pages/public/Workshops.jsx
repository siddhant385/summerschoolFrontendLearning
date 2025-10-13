import { useEffect, useState } from "react";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Input } from "@/components/ui/input";
import { usePublic } from '@/context/public';


export default function WorkshopList() {
  const { workshops, loading, error, fetchWorkshops } = usePublic();
  // Filters
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("");
  const [instructor, setInstructor] = useState("");
  const loadings = false;



  // Fetch workshops whenever filters change
  useEffect(() => {
    fetchWorkshops({ search, technology, instructor, page: 1, page_size: 20 });
  }, [search, technology, instructor]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
        {loadings ? (
          <p>Loading workshops...</p> // Only cards area shows loading
        ) : workshops.length > 0 ? (
          workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))
        ) : (
          <p>No workshops found.</p>
        )}
      </div>
    </div>
  );
}

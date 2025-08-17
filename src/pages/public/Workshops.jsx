import { useState, useMemo } from "react";
import { WorkshopCard } from "@/components/WorkshopCard";
import { Input } from "@/components/ui/input";
import { usePublic } from "@/context/public";

export default function WorkshopList() {
  const {
    workShopData,
    loading,
    error,
  } = usePublic();
  // Filter states
  const [search, setSearch] = useState("");
  const [technology, setTechnology] = useState("");
  const [instructor, setInstructor] = useState("");


  // Frontend filtering using useMemo for optimization
  const filteredWorkshops = useMemo(() => {
    return workShopData.filter(ws =>
      ws.title.toLowerCase().includes(search.toLowerCase()) &&
      (!technology || ws.technologies.some(t => t.toLowerCase().includes(technology.toLowerCase()))) &&
      (!instructor || ws.conducted_by.toLowerCase().includes(instructor.toLowerCase()))
    );
  }, [workShopData, search, technology, instructor]);

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search workshops..."
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />
        <Input
          type="text"
          placeholder="Filter by technology..."
          value={technology || ""}
          onChange={(e) => setTechnology(e.target.value)}
          className="border p-2 rounded"
        />
        <Input
          type="text"
          placeholder="Filter by instructor..."
          value={instructor || ""}
          onChange={(e) => setInstructor(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Workshop cards */}
      {error && <p className="text-red-500 mb-4">Error: {error?.message || String(error)}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading workshops...</p>
        ) : filteredWorkshops.length > 0 ? (
          filteredWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))
        ) : (
          <p>No workshops found.</p>
        )}
      </div>
    </div>
  );
}



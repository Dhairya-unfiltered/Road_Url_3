// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import CreateLinkModal from "@/components/create-link";
import LinkCard from "@/components/link-card";
import useFetch from "@/hooks/use-fetch";
import { getUrls } from "@/db/apiUrls";
import { UrlState } from "@/context";
import Header from "@/components/header";
export default function Dashboard() {
  const { user } = UrlState();
  const { loading, error, data: urls, fn: fnUrls } = useFetch(getUrls, user?.id);
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    if (user?.id) fnUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
   
    <div className="min-h-screen bg-secondary/30 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">My Links</h1>
          <div>
            <button
              onClick={() => setCreateOpen(true)}
              className="inline-flex items-center  bg-violet-600 hover:bg-violet-700 rounded-2xl text-white px-2 py-1  shadow"
            >
              <span className="text-xl">+</span>
              <span className="font-medium">Create Link</span>
            </button>
          </div>
        </div>

        {/* loader */}
        {loading && (
          <div className="mb-4">
            <BarLoader width="100%" color="#7c3aed" />
          </div>
        )}

        {error && <p className="text-sm text-red-500">Failed to load links.</p>}

        {!loading && !error&&urls?.length===0&& <p className="text-sm text-violet-800">Click on create link to get started.</p>}
        
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(urls || []).map((url) => (
            <LinkCard key={url.id} url={url} fetchUrls={fnUrls} />
          ))}
        </div>
      </div>

      <CreateLinkModal
        open={createOpen}
        onOpenChange={(v) => {
          setCreateOpen(v);
        }}
        onCreated={() => {
          fnUrls();
          setCreateOpen(false);
        }}
      />
    </div>
    
  );
}

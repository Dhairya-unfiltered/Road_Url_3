import React from "react";
import useFetch from "@/hooks/use-fetch";
import { deleteUrl, getUrl, editUrl } from "@/db/apiUrls";
import { useNavigate, useParams } from "react-router-dom";
import { UrlState } from "@/context";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditLinkPage() {
    const navigate = useNavigate();
  const { user } = UrlState();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const { loading, data: url, fn, error } = useFetch(getUrl, {
    id,
    user_id: user?.id,
  });


useEffect(() => {
  if (user?.id && id) {
    fn();
  }
}, [user?.id, id]);


useEffect(() => {
    if (url?.original_url) setOriginalUrl(url.original_url);
    if(url?.short_url) setShortUrl(url.short_url);
    if(url?.title){setTitle(url.title);}
  }, [url]);

  const { fn: updateUrl, loading: saving } = useFetch(editUrl);


  const handleSave = async () => {
  try {
    await updateUrl({
      id,
      user_id: user?.id,
      title,
      original_url: originalUrl,
    });
     toast.success("Link updated successfully!");
    navigate("/dashboard",{ replace: true }); // redirect after saving
  } catch (error) {
    toast.error("Failed to update link");
    console.error("Failed to update link:", error);
  }
};


  return (
    <div className="min-h-screen bg-secondary/30 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        {/* <h1 className="text-3xl font-semibold mb-8">Edit Link</h1> */}

        {/* CARD */}
        <div className="bg-white shadow-md rounded-2xl border p-8 space-y-6">
           <h1 className="text-3xl font-semibold mb-8">Edit Link</h1>
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter title"
            />
          </div>

          {/* Original URL */}
          <div>
            <label className="text-sm font-medium text-gray-600">Original URL</label>
            <input
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com"
            />
          </div>

          {/* Short URL */}
          <div>
            <label className="text-sm font-medium text-gray-600">Short URL</label>
            <div className="flex items-center mt-2">
              <span className="border w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-700">
                dummy.link/{shortUrl}
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between pt-4">
            <button onClick={()=>navigate('/dashboard',{ replace: true })} className="px-5 py-3 rounded-xl border bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
              Cancel
            </button>
            <button
  onClick={handleSave}
  disabled={saving}
  className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition disabled:opacity-50"
>
  {saving ? "Saving..." : "Save Changes"}
</button>

          </div>
        </div>
      </div>
    </div>
  );
}

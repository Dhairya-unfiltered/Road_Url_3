// src/components/link-card.jsx
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Clipboard, Edit3, Trash2, Copy} from "lucide-react"; // or use Copy icon
import useFetch from "@/hooks/use-fetch";
import { deleteUrl } from "@/db/apiUrls";
import { BeatLoader } from "react-spinners";
import {toast} from "sonner";

export default function LinkCard({ url = {}, fetchUrls }) {

  const { loading: loadingDelete, fn: fnDelete } = useFetch(deleteUrl, url.id);
  
  const copyLink = async () => {
    try {
      const toCopy = `${window.location.origin}/${url.short_url}`;
      await navigator.clipboard.writeText(toCopy);
      toast.success("Link copied to clipboard!");
    } catch (e) {
      toast.error("copy failed");
    }
  };
  
  const createdDate = url?.created_at
    ? new Date(url.created_at).toLocaleDateString()
    : "";

  return (
    <div className="relative bg-white border rounded-xl p-6 shadow-sm">
      {/* status pill */}
      <div className="absolute right-4 top-4">
        <span
    
     className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            (url?.original_url)
              ? "bg-green-100 text-green-800"
              : "bg-purple-100 text-black-800"
          }`}
        >
          {(url?.original_url)?"Active": "Pending"}
        </span>
      </div>
    
      {/* title */}
      <h3 className="text-lg font-semibold text-gray-900 truncate">{url?.title}</h3>
      {/* date below title */}
      <p className="mt-2 text-sm text-gray-500">{createdDate}</p>

      {/* actions */}
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={copyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm text-gray-700 hover:bg-gray-50"
          title="Copy link"
        >
            <Copy className="w-4 h-4" />
          Copy
        </button>

        <Link
          to={`/link/${url.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm hover:bg-violet-700"
        >
          <Edit3 size={14} />
          Edit
        </Link>

        <div className="ml-auto">
          <button
            onClick={() => fnDelete().then(() => {fetchUrls();toast.success("Link deleted successfully");}).catch(()=>{toast.error("Failed to delete link");})}
            disabled={loadingDelete}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border text-gray-600 hover:bg-gray-50"
            title="Delete"
          >
             <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}

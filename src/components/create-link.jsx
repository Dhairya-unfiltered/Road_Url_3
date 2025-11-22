// src/components/create-link.jsx
import { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { createUrl } from "@/db/apiUrls";
import { UrlState } from "@/context";
import { BeatLoader } from "react-spinners";

export default function CreateLinkModal({ open = false, onOpenChange = () => {}, onCreated = () => {} }) {
  const { user } = UrlState();
  const [title, setTitle] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { loading, error, data, fn: fnCreate } = useFetch(createUrl, {
    title,
    user_id: user?.id,
  });

  useEffect(() => {
    if (!loading && !error && data) {
      setTitle("");
      onCreated(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  useEffect(() => {
    if (!open) setTitle("");
  }, [open]);

  const submit = async () => {
    setErrorMsg(null);
    try {
      await fnCreate();
    } catch (e) {
      setErrorMsg("Failed to create link");
    }
  };

  if (!open) return null;

  return (
    // simple modal backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Create Link</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Link Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="My Project Link"
          />
          {errorMsg && <p className="text-sm text-red-500 mt-2">{errorMsg}</p>}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={submit}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg"
          >
            {loading ? <BeatLoader size={8} color="white" /> : "Create"}
          </button>

          <button
            onClick={() => onOpenChange(false)}
            className="px-4 py-2 rounded-lg border text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

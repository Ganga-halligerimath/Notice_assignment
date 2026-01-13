"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../../../../../utils/api";

export default function UpdateNoticePage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noticeType, setNoticeType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await api.get(`/notices/${id}`);
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
        setNoticeType(res.data.data.noticeType);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotice();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.patch(`/notices/${id}`, { title, content, noticeType });
      alert("Notice updated successfully!");
      router.push("/notices/list"); // go back to list
    } catch (err) {
      console.error(err);
      alert("Failed to update notice");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      
      <h1 className="text-3xl font-bold mb-6">Update Notice</h1>

      <form
        onSubmit={handleUpdate}
        className="p-6 bg-gray-50 min-h-screen flex flex-col "
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="self-center">Content</label>
          <textarea
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 gap-">Notice Type</label>
          <select
            value={noticeType}
            onChange={(e) => setNoticeType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Notice Type</option>
            <option value="General">General</option>
            <option value="Urgent">Urgent</option>
            <option value="Event">Event</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition-all duration-200"
        >
          {loading ? "Updating..." : "Update Notice"}
        </button>
        
          <div>
          <button 
            onClick={() => router.push("/notices/list")}
            className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50">
                Cancel</button>
        </div>
      </form>
    </div>
  );
}

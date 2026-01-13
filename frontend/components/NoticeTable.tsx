"use client";

import { api } from "../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NoticesDashboard from "@/app/notices/page";

type Notice = {
    _id: string;
    title: string;
    content: string;
    noticeType: string;
    status: string;
};

export default function NoticeTable() {
    const router = useRouter();
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    try {
        const res = await api.get("/notices");
        setNotices(res.data.data);
    } catch (error: any) {
        console.error("FETCH NOTICES ERROR:", error);
    } finally {
        setLoading(false); 
    }
};

    const toggleStatus = async (id: string, currentStatus: string) => {
        try {
            const newStatus = currentStatus === "published" ? "draft" : "published";
            await api.patch(`/notices/${id}/status`, { status: newStatus });
            fetchNotices();
        } catch (err) {
            console.error("TOGGLE STATUS ERROR:", err);
        }
    };

    const deleteNotice = async (id: string) => {
        try {
            await api.delete(`/notices/${id}`);
            fetchNotices();
            alert("Notice deleted!");
        } catch (err) {
            console.error(err);
            alert("Failed to delete notice");
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    if (loading) {
        return (
            <p className="text-center mt-10 text-gray-600 font-medium">Loading...</p>
        );
    }

    return (
        <div className="flex justify-center p-6 bg-gray-50 min-h-[80vh]">
            
            <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-6">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                    All Notices
                </h2>
                {notices.length === 0 ? (
                    <p className="text-center text-gray-500">No notices found</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100">
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notices.map((n, idx) => (
                                    <tr key={n._id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="border border-gray-300 px-4 py-2">{n.title}</td>
                                        <td className="border border-gray-300 px-4 py-2">{n.noticeType}</td>
                                        <td className="border border-gray-300 px-4 py-2">{n.status}</td>
                                        <td className="px-6 py-4 flex gap-2">
                                            {/* All 3 buttons inside single td */}
                                            <button
                                                onClick={() => toggleStatus(n._id, n.status)}
                                                className={`px-3 py-1 rounded-lg text-white font-medium ${n.status === "published"
                                                        ? "bg-red-500 hover:bg-red-600"
                                                        : "bg-green-500 hover:bg-green-600"
                                                    }`}
                                            >
                                                {n.status === "published" ? "Unpublish" : "Publish"}
                                            </button>

                                            <button
                                                onClick={() => router.push(`/notices/update/${n._id}`)}
                                                className="px-3 py-1 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
                                            >
                                                Update
                                            </button>

                                            <button
                                                onClick={() => deleteNotice(n._id)}
                                                className="px-3 py-1 rounded-lg text-white bg-gray-500 hover:bg-gray-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            
        <div className="flex flex-col gap-4 w-full items-center">
            <button 
            onClick={() => router.push("/notices")}
            className="text-3xl font-bold mb-6 text-gray-800 text-center">Back to Home</button>
        </div>
            </div>
        </div>
    );
}

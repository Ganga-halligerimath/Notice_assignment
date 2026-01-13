// "use client";

// import { useState } from "react";
// import { api } from "../utils/api";

// type NoticeFormProps = { onSuccess: () => void };

// export default function NoticeForm({ onSuccess }: NoticeFormProps) {
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [noticeType, setNoticeType] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState("");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

        

//         if (!title || !content || !noticeType) {
//             setError("All fields are required!");
//             return;
//         }

//         setLoading(true);
//         try {
//             // 🔹 Add 'status' here to ensure table shows it
//             console.log("Submitting noticeType:", noticeType);

//             await api.post("/notices", {
//                 title,
//                 content,
//                 noticeType,          // required
//                 status: "draft"      // send default status
//             });
           



//             // Clear form
//             setTitle("");
//             setContent("");
//             setNoticeType("");
//             setError("");

//             // Trigger table refresh
//             onSuccess();
//         } catch (err: any) {
//             console.error("Create Notice Error:", err);

//             if (err.response) {
//                 setError(err.response.data.message || "Backend error");
//             } else {
//                 setError("Cannot connect to backend");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
    


//     return (
//         <div className="w-1/4 self-center ">
//             <h2 className="mt-4 sm:mt-0">Create New Notice</h2>
//             {error && <p className="bg-primary-600 text-center mb-4 font-medium">{error}</p>}

            
//         {/* ✅ Success Alert */}
  
//             <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                     <label className="block text-gray-700 font-medium mb-1">Title</label>
                    
//                     <input
//                         type="text"
//                         placeholder="Enter notice title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium mb-1">Content</label>
//                     <textarea
//                         placeholder="Enter notice content"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                         rows={5}
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-gray-700 font-medium mb-1">Notice Type</label>
                   
//                     <select
//                         value={noticeType}
//                         onChange={(e) => setNoticeType(e.target.value)}
//                         required   
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//                     >
//                         <option value="">Select Notice Type</option>
//                         <option value="General">General</option>
//                         <option value="Urgent">Urgent</option>
//                         <option value="Event">Event</option>
//                     </select>


//                 </div>

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-200"
//                 >
//                     {loading ? "Publishing..." : "Publish Notice"}
//                 </button>
           
//             </form>
//         </div>
//     );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ router
import { api } from "../utils/api"; // your axios instance

export default function CreateNoticePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [noticeType, setNoticeType] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  
  

    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/notices", {
        title,
        content,
        noticeType,
      });

      alert("Notice published successfully");
      router.push("/notices/list");
    } catch (error) {
      console.error("Failed to create notice", error);
      alert("Error creating notice!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Create Notice</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

           <div>
                 <label className="block text-gray-700 font-medium mb-1">Notice Type</label>
                   
                  <select
                        value={noticeType}
                        onChange={(e) => setNoticeType(e.target.value)}
                        required   
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="">Select Notice Type</option>
                        <option value="General">General</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Event">Event</option>
                    </select>


                </div>

          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}

          </button>
          <div>
            <button 
            onClick={() => router.push("/notices")}
            className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition disabled:opacity-50">
                Cancel</button>
        </div>
        </form>
      </div>
    </div>
  );
}

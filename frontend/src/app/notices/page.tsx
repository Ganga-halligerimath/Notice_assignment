// "use client";

// import { useRouter } from "next/navigation";

// export default function NoticesDashboard() {
//   const router = useRouter();

//   return (
//     // <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
//     //   <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg flex flex-col gap-6">
//     //     <h1 className="text-4xl font-bold text-gray-800 text-center">Notices Dashboard</h1>
//      <div className="space-y-8">
//       {/* Welcome Header */}
//       <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg p-6 text-white">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-2">
//               Notice Management Dashboard 
//             </h1>
//         <p className="text-center text-gray-600 mb-4">Manage all your notices from here.</p>

//         {/* Buttons */}
//         <div className="flex flex-col gap-4">
//           <button
//             onClick={() => router.push("/notices/create")}
//             className="w-1/4 self-center bg-yellow-5"
//           >
//             Create Notice
//           </button>


//     <div className="flex flex-col gap-4">
//               <h3 className="text-lg font-medium text-gray-900 group-hover:text-success-600"></h3>
//           <button
//             onClick={() => router.push("/notices/list")}
//             className="w-1/4 self-center bg-yellow-5"
//           >
//             View all  Notice
//           </button>
//         </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// }





"use client";

import { useRouter } from "next/navigation";

export default function NoticesDashboard() {
  const router = useRouter();

  return (
    <div className="text-center">
  <h1 className="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 inline-block">
    Notice Management Dashboard
  </h1>
  <p className="text-gray-600 mt-2">
    Manage all your notices from here.
  </p>



        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={() => router.push("/notices/create")}>
            <h3 className="text-lg font-medium text-blue-500 group-hover:text-primary-600">Create New Notice</h3>
          </button>

          <h3 className="text-lg font-medium text-gray-900 group-hover:text-success-600"></h3>
        <button
            onClick={() => router.push("/notices/list")}>
            
            <h3 className="text-lg font-medium text-blue-500 group-hover:text-primary-600">View all  Notice</h3>
            
          </button>
        </div>

      </div>
  
  );
}

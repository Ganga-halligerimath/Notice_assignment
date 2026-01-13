// type ModalProps = {
//   message: string;
//   onClose: () => void;
// };

// export default function Modal({ message, onClose }: ModalProps) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
//         <h3 className="text-lg font-bold mb-2 text-center">{message}</h3>
//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }


type ModalProps = { message: string; onClose: () => void };

export default function Modal({ message, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
        <h3 className="text-lg font-bold mb-2 text-center">{message}</h3>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

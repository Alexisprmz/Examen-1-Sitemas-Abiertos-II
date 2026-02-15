export default function MenuItem({ item, addItem }) {
  return (
    <button
      onClick={() => addItem(item)}
      className="w-full flex justify-between items-center bg-white border-2 border-teal-400 rounded-lg px-6 py-4 text-left hover:bg-teal-50 transition-colors"
    >
      {}
      <span className="text-lg font-normal text-gray-900">
        {item.name}
      </span>
      
      {}
      <span className="text-lg font-bold text-gray-900">
        ${item.price}
      </span>
    </button>
  );
}
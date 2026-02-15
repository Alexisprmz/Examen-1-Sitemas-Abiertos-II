export default function OrderContents({ order, updateQty, removeItem }) {
  if (order.length === 0) {
    return (
      <p className="text-gray-500 text-sm">
        Aún no hay productos en el consumo.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {order.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2"
        >
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {item.name}
            </p>
            <p className="text-xs text-gray-500">
              ${item.price} c/u
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(item.id, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 text-sm"
            >
              -
            </button>
            <span className="w-6 text-center text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQty(item.id, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-teal-500 text-white text-sm"
            >
              +
            </button>

            <button
              onClick={() => removeItem(item.id)}
              className="ml-2 text-xs text-red-500 hover:text-red-600"
            >
              quitar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

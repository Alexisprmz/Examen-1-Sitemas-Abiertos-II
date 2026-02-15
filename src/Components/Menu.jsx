import { db } from '../Components/db/db';

export default function Menu({ addItem }) {
  return (
    <section>
      <h2 className="text-3xl font-black mb-6 text-gray-900">Menú</h2>

      <div className="space-y-2">
        {db.map((item) => (
          <button
            key={item.id}
            onClick={() => addItem(item)}
            className="
              w-full flex justify-between items-center px-4 py-3 rounded-md
              border border-teal-400 bg-white
              hover:bg-teal-100
              transition-all duration-150
            "
          >
            <span className="text-sm text-gray-900">
              {item.name}
            </span>

            <span className="font-bold text-sm text-gray-900">
              ${item.price}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

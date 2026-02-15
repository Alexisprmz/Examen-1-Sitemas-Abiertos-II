export default function Summary({ order, tip, setTip, removeItem, saveOrder }) {
  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tipAmount = (subtotal * tip) / 100;
  const total = subtotal + tipAmount;

  return (
    <section className="bg-gray-100 rounded-md p-6 border border-gray-300">
      <h2 className="text-3xl font-black mb-6 text-gray-900">Consumo</h2>

      {order.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Aún no hay productos en el consumo.
        </p>
      ) : (
        <>
          {}
          <div className="space-y-4 mb-6">
            {order.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-900">
                    {item.name} - ${item.price.toFixed(2)}
                  </p>

                  <p className="text-sm font-bold text-gray-900">
                    Cantidad: {item.quantity} - $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs ml-3"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Propina:
            </h3>

            <div className="space-y-1">
              {[10, 20, 50].map((value) => (
                <label key={value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tip"
                    checked={tip === value}
                    onChange={() => setTip(value)}
                    className="w-3 h-3 accent-blue-500"
                  />
                  <span className="text-sm text-gray-900">
                    {value}%
                  </span>
                </label>
              ))}
            </div>
          </div>

          {}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Totales y Propina:
            </h3>

            <p className="text-sm text-gray-900">
              Subtotal a pagar:{' '}
              <span className="font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </p>

            <p className="text-sm text-gray-900">
              Propina:{' '}
              <span className="font-bold">
                ${tipAmount.toFixed(2)}
              </span>
            </p>

            <p className="text-sm text-gray-900">
              Total a Pagar:{' '}
              <span className="font-bold">
                ${total.toFixed(2)}
              </span>
            </p>
          </div>

          {}
          <button
            onClick={saveOrder}
            className="w-full bg-black text-white py-2 font-bold hover:bg-gray-900 transition text-sm"
          >
            GUARDAR ORDEN
          </button>
        </>
      )}
    </section>
  );
}

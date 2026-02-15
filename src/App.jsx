import { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Summary from './Components/Summary';

export default function App() {
  const [order, setOrder] = useState([]);
  const [tip, setTip] = useState(10);

  const addItem = (item) => {
    setOrder((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setOrder((prev) => prev.filter((item) => item.id !== id));
  };

  const saveOrder = () => {
    setOrder([]);
    setTip(10);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Menu addItem={addItem} />

          <Summary
            order={order}
            tip={tip}
            setTip={setTip}
            removeItem={removeItem}
            saveOrder={saveOrder}
          />
        </div>
      </div>
    </div>
  );
}

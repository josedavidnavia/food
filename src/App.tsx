import { Menu } from "./components/Menu";
import { Consumption } from "./components/Consumption";
import { TipSelector } from "./components/TipSelector";
import { OrderSummary } from "./components/OrderSummary";
import { useConsumption } from "./hooks/useConsumption";
import './App.css';

const menuItems = [
  { name: "Pizza a la Leña Chica", price: 30 },
  { name: "Pizza a la Leña Mediana", price: 50 },
  { name: "Rebanada de Pay de Limón", price: 30 },
  { name: "Rebanada de Pastel de Chocolate", price: 30 },
  { name: "Jugo de Naranja", price: 15 },
  { name: "Pizza a la Leña Grande", price: 70 },
];

function App() {
  const {
    consumption,
    addItem,
    removeItem,
    setTipPercentage,
    calculateSubtotal,
    calculateTip,
    calculateTotal,
  } = useConsumption();

  return (
    <div className="app">
      <header>
        <h1>Tip and consumption calculator</h1>
      </header>

      {/* Contenedor para Menu y Consumption */}
      <main className="menu-consumption-container">
        <Menu items={menuItems} onAddItem={addItem} />
        <Consumption items={consumption} onRemoveItem={removeItem} />
      </main>

      {/* Contenedor para TipSelector y OrderSummary */}
      <div className="tip-order-row">
        <TipSelector onSelectTip={setTipPercentage} />
        <OrderSummary
          subtotal={calculateSubtotal()}
          tip={calculateTip()}
          total={calculateTotal()}
        />
      </div>
    </div>
  );
}

export default App;

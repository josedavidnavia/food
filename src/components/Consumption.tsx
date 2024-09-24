import { ConsumptionItem } from "./ConsumptionItem";

interface ConsumptionProps {
  items: { name: string; price: number }[];
  onRemoveItem: (index: number) => void;
}

export const Consumption: React.FC<ConsumptionProps> = ({ items, onRemoveItem }) => {
  return (
    <div className="consumption">
      <h2>Consumption</h2>
      {items.length === 0 && <p>No items added.</p>}
      {items.map((item, index) => (
        <ConsumptionItem
          key={index}
          name={item.name}
          price={item.price}
          onRemove={() => onRemoveItem(index)}
        />
      ))}
    </div>
  );
};

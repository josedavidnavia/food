import { MenuItem } from "./MenuItem";

interface MenuProps {
  items: { name: string; price: number }[];
  onAddItem: (item: { name: string; price: number }) => void;
}

export const Menu: React.FC<MenuProps> = ({ items, onAddItem }) => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      {items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} onAdd={() => onAddItem(item)} />
      ))}
    </div>
  );
};

interface MenuItemProps {
    name: string;
    price: number;
    onAdd: () => void;
  }
  
  export const MenuItem: React.FC<MenuItemProps> = ({ name, price, onAdd }) => {
    return (
      <button className="menu-item" onClick={onAdd}>
        {name} - ${price}
      </button>
    );
  };
  
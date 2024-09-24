interface ConsumptionItemProps {
    name: string;
    price: number;
    onRemove: () => void;
  }
  
  export const ConsumptionItem: React.FC<ConsumptionItemProps> = ({ name, price, onRemove }) => {
    return (
      <div className="consumption-item">
        <span>{name} - ${price.toFixed(2)}</span>
        <button className="remove-btn" onClick={onRemove}>❌</button>
      </div>
    );
  };
  
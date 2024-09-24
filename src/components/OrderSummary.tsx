interface OrderSummaryProps {
    subtotal: number;
    tip: number;
    total: number;
  }
  
  export const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, tip, total }) => {
    return (
      <div className="order-summary">
        <h3>Totals and Tip</h3>
        <p>Subtotal payable: ${subtotal.toFixed(2)}</p>
        <p>Tip: ${tip.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    );
  };
  
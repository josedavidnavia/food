import { useState } from "react";

interface Item {
  name: string;
  price: number;
}

export const useConsumption = () => {
  const [consumption, setConsumption] = useState<Item[]>([]);
  const [tipPercentage, setTipPercentage] = useState<number>(0);

  const addItem = (item: Item) => {
    setConsumption([...consumption, item]);
  };

  const removeItem = (index: number) => {
    const newConsumption = consumption.filter((_, i) => i !== index);
    setConsumption(newConsumption);
  };

  const calculateSubtotal = () =>
    consumption.reduce((acc, item) => acc + item.price, 0);

  const calculateTip = () => (calculateSubtotal() * tipPercentage) / 100;

  const calculateTotal = () => calculateSubtotal() + calculateTip();

  return {
    consumption,
    addItem,
    removeItem,
    setTipPercentage,
    calculateSubtotal,
    calculateTip,
    calculateTotal,
  };
};

interface TipSelectorProps {
  onSelectTip: (percentage: number) => void;
}

export const TipSelector: React.FC<TipSelectorProps> = ({ onSelectTip }) => {
  return (
    <div className="tip-selector">
      <h3>Tip:</h3>
      <label>
        <input type="radio" name="tip" onChange={() => onSelectTip(10)} />
        10%
      </label>
      <label>
        <input type="radio" name="tip" onChange={() => onSelectTip(20)} />
        20%
      </label>
      <label>
        <input type="radio" name="tip" onChange={() => onSelectTip(50)} />
        50%
      </label>
    </div>
  );
};

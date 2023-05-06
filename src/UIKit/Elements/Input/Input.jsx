import "./Input.css";

export const Input = (props) => {
  const { value, onChange, placeholder } = props;

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="Input">
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

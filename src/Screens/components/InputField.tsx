const InputField = ({
  type,
  name,
  label,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="py-4">
      <label htmlFor={name} className="block text-lg pb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="flex border rounded-xl px-5 py-2"
        minLength={3}
        required
      />
    </div>
  );
};

export default InputField;

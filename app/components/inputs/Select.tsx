"use client";
//* Type definitions
interface ISelectProps {
  label: string;
  id: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

//* Dependency Library imports
import ReactSelect from "react-select";

//* Component dependencies

//* Redux

//* Configurations

const Select: React.FC<ISelectProps> = ({
  id,
  label,
  onChange,
  options,
  disabled,
  value,
}) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="z-[100]">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default Select;

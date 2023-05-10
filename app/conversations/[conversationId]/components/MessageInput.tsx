"use client";

//* Type definitions
import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface IMessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

//* Dependency Library imports

//* Component dependencies

//* Redux

//* Configurations

const MessageInput: FC<IMessageInputProps> = ({
  placeholder,
  errors,
  id,
  register,
  required,
  type,
}) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;

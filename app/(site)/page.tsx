//* Type definitions

//* Dependency Library imports

//* Component dependencies
import Image from "next/image";
import AuthForm from "./components/AuthForm";

//* Redux

//* Configurations

export default function Home() {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={"/images/logo.png"}
          width={100}
          height={100}
          alt="Logo"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}

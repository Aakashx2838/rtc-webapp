"use client";

//* Type definitions
import { FC } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { User } from "@prisma/client";
interface ISettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

//* Dependency Library imports
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";

//* Component dependencies
import { CldUploadButton } from "next-cloudinary";
import { BiUser } from "react-icons/bi";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../inputs/Input";
import Image from "next/image";
import Button from "../Button";

//* Redux

//* Configurations

const SettingsModal: FC<ISettingsModalProps> = ({
  currentUser,
  isOpen,
  onClose,
}) => {
  //* Hooks
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  //* Props

  //* State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //* Effects

  //* Functions
  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/settings", data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //* Render

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6  text-gray-600">
              Edit your profile details
            </p>
            <div className="mt-10 flex flex-col gap-y-8">
              <Input
                disabled={isLoading}
                label="Name"
                id="name"
                type="text"
                errors={errors}
                register={register}
              />
              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {image || currentUser?.image ? (
                    <Image
                      width={48}
                      height={48}
                      className="rounded-full"
                      src={image || currentUser?.image}
                      alt="Avatar"
                    />
                  ) : (
                    <BiUser size={26} />
                  )}
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="uh2ia3lq"
                  >
                    <Button disabled={isLoading} secondary type="button">
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              disabled={isLoading}
              type="button"
              secondary
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;

"use client";

//* Type definitions
import { FC, useState } from "react";
import { User } from "@prisma/client";
import { FieldValues, SubmitHandler } from "react-hook-form";
interface IGroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

//* Dependency Library imports
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";

//* Component dependencies
import { toast } from "react-hot-toast";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import Button from "@/app/components/Button";

//* Redux

//* Configurations

const GroupChatModal: FC<IGroupChatModalProps> = ({
  onClose,
  users,
  isOpen,
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
      name: "",
      members: [],
    },
  });
  const members = watch("members");

  //* Props

  //* State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //* Effects

  //* Functions
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  //* Render

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Create a groupchat
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create a chat with more than 2 people.
              </p>
              <div className="mt-10 flex flex-col gap-y-8">
                <Input
                  register={register}
                  label="Name"
                  id="name"
                  disabled={isLoading}
                  required
                  errors={errors}
                />
                <Select
                  label="Members"
                  id="Members"
                  disabled={isLoading}
                  options={users.map((user) => ({
                    value: user.id,
                    label: user.name,
                  }))}
                  onChange={(value) =>
                    setValue("members", value, {
                      shouldValidate: true,
                    })
                  }
                  value={members}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              disabled={isLoading}
              onClick={onClose}
              type="button"
              secondary
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default GroupChatModal;

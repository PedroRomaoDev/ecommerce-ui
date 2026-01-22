import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { shippingFormSchema } from "@/forms/schemas/cart.schema";
import { ShippingFormInputs } from "@/types";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium text-gray-500">
          Name
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="name"
          placeholder="Pedro Romão"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-medium text-gray-500">
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="email"
          id="email"
          placeholder="pedro.romao@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs font-medium text-gray-500">
          Phone
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="phone"
          placeholder="(123) 456-7890"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs font-medium text-gray-500">
          Address
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="address"
          placeholder="123 Main St"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs font-medium text-gray-500">
          City
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="city"
          placeholder="New York"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex w-full items-center justify-center gap-2 rounded-lg p-2 text-white transition-all duration-300 ${
          isSubmitting
            ? "cursor-not-allowed bg-gray-800 opacity-60"
            : "cursor-pointer bg-gray-800 hover:bg-gray-900"
        } `}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Continue
          </>
        ) : (
          <>
            Continue
            <ArrowRight className="h-3 w-3" />
          </>
        )}
      </button>
    </form>
  );
};

export default ShippingForm;

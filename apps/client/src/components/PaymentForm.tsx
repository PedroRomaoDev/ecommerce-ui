import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import {} from "next/navigation";
import { useForm } from "react-hook-form";

import { paymentFormSchema } from "@/forms/schemas/cart.schema";
import { PaymentFormInputs } from "@/types";

const PaymentForm = () => {
  //   const router = useRouter();
  const {
    register,
    //     handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  //   const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};

  return (
    <form
      className="flex flex-col gap-4"
      // onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium text-gray-500">
          Name on card
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="name"
          placeholder="Pedro Romão"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs font-medium text-gray-500"
        >
          Card number
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs font-medium text-gray-500"
        >
          Expiration date
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="expirationDate"
          placeholder="MM/YY"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs font-medium text-gray-500">
          CVV
        </label>
        <input
          className="border-b border-gray-200 py-2 text-sm outline-none"
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Image
          src="/klarna.png"
          alt="Klarna"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/cards.png"
          alt="Cards"
          width={50}
          height={25}
          className="rounded-md"
        />
        <Image
          src="/stripe.png"
          alt="Stripe"
          width={50}
          height={25}
          className="rounded-md"
        />
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
            Checkout
          </>
        ) : (
          <>
            Checkout
            <ShoppingCart className="h-3 w-3" />
          </>
        )}
      </button>
    </form>
  );
};

export default PaymentForm;

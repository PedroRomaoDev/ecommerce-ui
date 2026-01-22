"use client";

import { ArrowRight } from "lucide-react";

import useCartStore from "@/app/stores/cartStore";

type CartSummaryProps = {
  activeStep: number;
  onContinue: () => void;
};

const CartSummary = ({ activeStep, onContinue }: CartSummaryProps) => {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const discount = 10;
  const shippingFee = 10;
  const total = subtotal - discount + shippingFee;

  return (
    <div className="flex h-max w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-5/12">
      <h2 className="font-semibold">Card Details</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Discount(10%)</p>
          <p className="font-medium">${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Shipping Fee</p>
          <p className="font-medium">${shippingFee.toFixed(2)}</p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between">
          <p className="font-semibold text-gray-800">Total</p>
          <p className="font-medium">${total.toFixed(2)}</p>
        </div>
      </div>
      {activeStep === 1 && (
        <button
          onClick={onContinue}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all duration-300 hover:bg-gray-900"
        >
          Continue
          <ArrowRight className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};

export default CartSummary;

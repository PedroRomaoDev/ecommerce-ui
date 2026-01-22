"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { ShippingFormInputs } from "@/types";

import CartItemsList from "../../components/CartItemsList";
import CartSteps from "../../components/CartSteps";
import CartSummary from "../../components/CartSummary";
import { CART_STEPS } from "../../constants/cart.constants";

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const handleContinue = () => {
    router.push("/cart?step=2", { scroll: false });
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {/* STEPS */}
      <CartSteps steps={CART_STEPS} activeStep={activeStep} />
      {/* STEPS AND DETAILS */}
      <div className="flex w-full flex-col gap-16 lg:flex-row">
        {/* STEPS */}
        <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">
          {activeStep === 1 ? (
            <CartItemsList />
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the shipping form to continue.
            </p>
          )}
        </div>

        {/* DETAILS */}
        <CartSummary
          //     cartItems={MOCK_CART_ITEMS}
          activeStep={activeStep}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default CartPage;

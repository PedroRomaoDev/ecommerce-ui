import { Trash2 } from "lucide-react";
import Image from "next/image";

import useCartStore from "@/app/stores/cartStore";
// import { CardItemsType } from "@/types";

// type CartItemsListProps = {
//   items: CardItemsType;
// };

const CartItemsList = () => {
  const { cart, removeFromCart } = useCartStore();
  return (
    <>
      {cart.map((item) => (
        <div
          className="flex items-center justify-between"
          key={item.id + item.selectedSize + item.selectedColor}
        >
          {/* IMAGE AND DETAILS */}
          <div className="flex gap-8">
            {/* IMAGE */}
            <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={item.images[item.selectedColor]}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            {/* ITEM DETAILS */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Size: {item.selectedSize.toUpperCase()}
                </p>
                <p className="text-sm text-gray-500">
                  Color: {item.selectedColor}
                </p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* DELETE BUTTON */}
          <button
            onClick={() => removeFromCart(item)}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-100 text-red-400 transition-all duration-300 hover:bg-red-200"
          >
            <Trash2 className="h-3 w-3" />
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItemsList;

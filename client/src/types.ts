import z from "zod";

import { shippingFormSchema } from "./forms/schemas/cart.schema";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CardItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CardItemsType = CardItemType[];

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

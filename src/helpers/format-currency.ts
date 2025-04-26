export const formatCurrency = (value: number) => {
  return Intl.NumberFormat("en-US", {
    currency: "EUR",
    style: "currency",
  }).format(value);
};

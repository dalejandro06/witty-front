export const currencyFormat = (value: number | bigint) =>
  new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
  }).format(value);

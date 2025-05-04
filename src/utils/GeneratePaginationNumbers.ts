export const GeneratePaginationNumbers = (
  currentPage: number,
  totalPages: number,
) => {
  // si el numero total es 7 o meno
  //
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // si la pagina actual esta entre las primers tres paginas
  // mostrar las primera 3, puntos suspensivos, las ultimas dos
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // si la pagina actual esta entre las ultimas tres paginas
  // mostrar las primeras dos, puntos suspensivos, las ultimas tres
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // si la pagina actual esta en otro lugar mediante
  // mostrar la primera pagina, puntos supensivos, la pagina actual
  //
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

const snakeCaseToWords = (key: string) => {
  if (!key) return key;

  return key
    .split("_")
    .map((word, index) =>
      index === 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};

export { snakeCaseToWords };

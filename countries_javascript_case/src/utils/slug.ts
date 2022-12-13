export const slugify = (str: string): { slugged: string; current: string } => {
  const result = str.split("").map((letter) => {
    if (letter !== letter.toLowerCase()) {
      letter = letter.toLowerCase();
    }
    return letter;
  });
  return {
    slugged: result.join("").replaceAll(" ", "-"),
    current: str,
  };
};

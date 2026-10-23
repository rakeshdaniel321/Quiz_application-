// letters only, single spaces between words, min 2 chars
const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

export const validateName = (value) => {
  const name = value.trim();
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must have at least 2 letters";
  if (!NAME_REGEX.test(name)) return "Use letters only (no numbers or symbols)";
  return "";
};

export const isValidUser = (user) =>
  typeof user === "string" &&
  user.trim() !== "" &&
  user.toLowerCase() !== "unknown" &&
  user !== "null";
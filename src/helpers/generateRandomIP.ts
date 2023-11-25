export const generateRandomIP = () => {
  const randomPart = () => Math.floor(Math.random() * 256);

  const ipParts = Array.from({ length: 4 }, randomPart);

  return ipParts.join(".");
};

export const formatFieldName = (name) => {
  const nameArr = name.split("-");
  const nameStart = nameArr.shift();

  const fieldName = [
    nameStart,
    nameArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)),
  ].join("");

  return fieldName;
};

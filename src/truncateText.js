export const truncateText = (text) => {
  if (text.length > 30) {
    let newText = text.slice(0, 30) + "...";
    return newText;
  } else {
    return text;
  }
};

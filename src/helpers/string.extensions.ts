String.prototype.initCap = function () {
  if (this.length == 0) return "";
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1, word.length))
    .join(" ");
};

export {};

String.prototype.initCap = function () {
  if (this.length == 0) return "";
  return this[0].toUpperCase() + this.substring(1, this.length);
};


export { };
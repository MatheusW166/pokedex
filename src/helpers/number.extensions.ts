Number.prototype.padStart = function (length: number, fillString: string) {
  return this.toString().padStart(length, fillString);
};

export { };
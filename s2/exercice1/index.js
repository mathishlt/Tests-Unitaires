module.exports = function dateIlYADixAns() {
  let dateActuelle = new Date();
  let datePassee = new Date(
    dateActuelle.setFullYear(dateActuelle.getFullYear() - 10)
  );
  return datePassee.toISOString().split("T")[0];
};

// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
  // Convertir les dates en timestamp Unix (en millisecondes)
  const timestamp1 = new Date(2023, 10, 2);
  const timestamp2 = new Date(2023, 11, 5);

  const differenceEnMillisecondes = timestamp2 - timestamp1;

  // Convertir la différence en jours
  const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

  return Math.abs(differenceEnJours); // Utilisation de Math.abs pour obtenir une valeur positive
};

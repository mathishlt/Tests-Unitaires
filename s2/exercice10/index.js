// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
  const dateActuelle = new Date();
  const birthDate = new Date(dateNaissance);
  const differenceEnAnnees =
    dateActuelle.getFullYear() - birthDate.getFullYear();

  // Vérifier si l'anniversaire de la personne n'a pas encore eu lieu cette année
  if (
    dateActuelle.getMonth() < birthDate.getMonth() ||
    (dateActuelle.getMonth() === birthDate.getMonth() &&
      dateActuelle.getDate() < birthDate.getDate())
  ) {
    return differenceEnAnnees - 1;
  } else {
    return differenceEnAnnees;
  }
};

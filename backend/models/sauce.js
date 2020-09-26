// Formation OpenClassrooms - Développeur Web - Projet 6 - Thierry Laval

// On importe mongoose
const mongoose = require('mongoose');
const sanitizerPlugin = require('mongoose-sanitizer-plugin');
// Appel le middleware de validation des champs du model de la sauce
const sauceValidation = require('../middleware/sauceValidation');

// Création d'un schema mangoose pour que les données de la base MongoDB ne puissent pas différer de
//celui précisé dans le schema Model des sauces. L'id est généré automatiquement par MongoDB

const sauceSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    /* validate : sauceValidation.nameValidator */
  },
  manufacturer: {
    type: String,
    required: true,
    /* validate : sauceValidation.manufacturerValidator */
  },
  description: {
    type: String,
    required: true,
    /* validate : sauceValidation.descriptionValidator */
  },
  mainPepper: {
    type: String,
    required: true,
    /* validate : sauceValidation.pepperValidator */
  },
  imageUrl: {
    type: String,
    required: true
  },
  heat: {
    type: Number,
    required: true
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  },
  usersLiked: {
    type: [String]
  },
  usersDisliked: {
    type: [String]
  },
})

// Plugin pour Mongoose qui purifie les champs du model avant de les enregistrer dans la base MongoDB.
// Utilise le HTML Sanitizer de Google Caja pour effectuer la désinfection.
sauceSchema.plugin(sanitizerPlugin);

// On exporte ce shéma de données, on va donc pouvoir utiliser ce modèle pour intéragir avec l'application
module.exports = mongoose.model('Sauce', sauceSchema);
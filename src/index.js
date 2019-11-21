'use strict'

/*
  Ce module va servir à détérminer si les valeurs données en paramètre sont
  conforme
  titre -> doit avoir au minimum 5 caractères
  auteur -> doit contenir nom et prénom séparé par un espace avec au minimum 2
  caractères
  contenu -> doit avoir au minimum 10 caractères
  catégorie -> doit appartenir à un élément de la liste 'categor'
*/

let list_category = ['Monde', 'Sport', 'Culture', 'Voyage', 'Politique', 'Science',
    'Divertissement', 'Musique', 'Finance', 'Justice']

exports.validate = function is_valide(title, content, author, category) {
    //On vérifie que nos entrées sont bien des string
    if (typeof title == 'string' && typeof content == 'string' &&
      typeof author == 'string' && typeof category == 'string') {

        //on fait les vérifications du titre et contenue
        if (title.length < 5 || content.length < 10) {
            return false
        }

        //on fait les vérifications de auteur
        let author_split = author.split(' ')
        if (author_split.length != 2 || author_split[0].length < 2 ||
        author_split[1].length < 2) {
            return false
        }

        //on fait les vérifications pour la catégorie
        for (let i = 0; i < list_category.length; i++) {
            //console.log(category + " " + category_valide[i])
            if (category.localeCompare(list_category[i]) == 0) {
                //console.log("123")
                return true
            }
        }
        return false
    }
    return false
}

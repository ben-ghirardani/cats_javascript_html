// var app = function() {
//   addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  
// };

// // addQuote is addCat

// var addCat = function(name, favouriteFood, picture) {
//     var unorderedList = createUnorderedList();
//     var name = createName();
//     var favouriteFood = createFavouriteFood();
//     var pictureListItem = createPictureListItem(); 
//     var picture = createPicture();
//     var cats = document.querySelector("#cats");
//     appendElements(cats, unorderedList, name, favouriteFood, pictureListItem, picture);
// }



// // var addQuote = function(author, text) {
// //   var quoteArticle = createQuoteArticle();
// //   var blockquote = createBlockQuote(text);
// //   var cite = createCite(author);
// //   var quotes = document.querySelector('#quotes');
// //   appendElements(quotes, quoteArticle, blockquote, cite);
// // };


// var createUnorderedList = function() {
//     var unorderedList = document.createElement("ul");
//     unorderedList.classList.add("cat");
//     return unorderedList;
// }

// // this is the unorderedList
// // var createQuoteArticle = function() {
// //   var quoteArticle = document.createElement('article');
// //   quoteArticle.classList.add('quote');
// //   return quoteArticle;
// // };

// // create versions of name, favourite food, pictureListItem, and picture
// var createName = function(name) {
//     var name = document.createElement("li");
//     name.innerText = "Name: " + name;
//     return name;
// }

// var createFavouriteFood = function(favouriteFood) {
//     var favouriteFood = document.createElement("li");
//     favouriteFood.innerText = "Favourite Food: " = favouriteFood;
//     return favouriteFood;
// }

// var createPictureListItem = function() {
//     var pictureListItem = document.createElement("li");
//     return pictureListItem;
// }

// var createPicture = function(picture) {
//     var picture = document.createElement("img");
//     picture.src = picture;
//     picture.width = 500;
// }

// // var createBlockQuote = function(text) {
// //   var blockquote = document.createElement('blockquote');
// //   blockquote.innerText = text + " ";
// //   return blockquote;
// // };

// // var createCite = function(author) {
// //   var cite = document.createElement('cite');
// //   cite.innerText = author;
// //   return cite;
// // };
// // append as in the other file

// var appendElements = function(cats, unorderedList, name, favouriteFood, pictureListItem, picture) {
//     unorderedList.appendChild(name);
//     unorderedList.appendChild(favouriteFood);
//     pictureListItem.appendChild(picture);
//     unorderedList.appendChild(pictureListItem);
// };

    

// // var appendElements = function(quotes, quoteArticle, blockquote, cite) {
// //   blockquote.appendChild(cite);
// //   quoteArticle.appendChild(blockquote);
// //   quotes.appendChild(quoteArticle);
// // }

// window.onload = app;
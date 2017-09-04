var app = function() {

    addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
};
    var addCat = function(name, favouriteFood, picture) {
    var unorderedList = createUnorderedList();
    var name = createName(name);
    var favouriteFood = createFavouriteFood(favouriteFood);
    var pictureListItem = createPictureListItem(); 
    var picture = createPicture(picture);
    var cats = document.querySelector("#cats");
    appendElements(cats, unorderedList, name, favouriteFood, pictureListItem, picture);
    };

    var createUnorderedList = function() {
    var unorderedList = document.createElement("ul");
    unorderedList.classList.add("cat");
    return unorderedList;
    };

    var createName = function(name) {
    var name = document.createElement("li");
    name.innerText = "Name: " + name;
    return name;
    };

    var createFavouriteFood = function(favouriteFood) {
    var favouriteFood = document.createElement("li");
    favouriteFood.innerText = "Favourite Food: " + favouriteFood;
    return favouriteFood;
    };

    var createPictureListItem = function() {
    var pictureListItem = document.createElement("li");
    return pictureListItem;
    };

    var createPicture = function(picture) {
    var picture = document.createElement("img");
    picture.src = picture;
    picture.width = 500;
    };

    var appendElements = function(cats, unorderedList, name, favouriteFood, pictureListItem, picture) {
    unorderedList.appendChild(name);
    unorderedList.appendChild(favouriteFood);
    pictureListItem.appendChild(picture);
    unorderedList.appendChild(pictureListItem);
    };

    window.onload = app;

    // // PARENT
    // var unorderedList = document.createElement("ul");
    // unorderedList.classList.add("cat");

    // // CHILD TO unorderedList
    // var name = document.createElement("li");
    // name.innerText = "Name: Bunny";

    // // CHILD TO unorderedList
    // var favouriteFood = document.createElement("li");
    // favouriteFood.innerText = "Favourite Food: Expensive Food";

    // // CHILD TO unorderedList
    // var pictureListItem = document.createElement("li");


    // // CHILD TO pictureListItem (ensures the picture is added as a list item)
    // var picture = document.createElement("img");
    // picture.src = "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg";
    // picture.width = 500;

    // unorderedList.appendChild(name);
    // unorderedList.appendChild(favouriteFood);
    // pictureListItem.appendChild(picture);
    // unorderedList.appendChild(pictureListItem);
    
    // var catSection = document.querySelector("#cats");
    // cats.appendChild(unorderedList);
    


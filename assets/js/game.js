$(document).ready(function(){
  
var checkArray = []; // checking if both clicked fields are the same fruit
var idCheck = []; // helper array for storing clicked fields IDs so i can remove "flipped" class if they are different
var counter = 0;
var end = 0; // for detecting if all fields are done
var fields = document.querySelectorAll(".back");
 
  
var images = [
  "https://i.pinimg.com/236x/df/26/d9/df26d9098802fbabccbf3d45f81a8bd1--scary-characters-scary-movies.jpg",
  "https://s2.r29static.com//bin/entry/780/0,0,2000,2400/720x864,80/1737975/image.jpg",
  "http://121clicks.com/wp-content/uploads/2011/10/horror_portrait26.jpg",
  "http://www.psd-dude.com/tutorials/resources-images/dark-horror-photoshop-tutorials-third/15884278_ff35.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5vkj7NZ653SAzQCsjMqwBs3HrajOITYvrxLFvFUKRjwzg0fs",
  "https://joshsworstnightmare.files.wordpress.com/2017/03/last-words-w.jpg",
  "https://hoffinehorror.files.wordpress.com/2018/05/flesheaterportrait.jpg?w=584&h=876",
  "https://us.123rf.com/450wm/Prometeus/Prometeus1510/Prometeus151000015/45948438-close-up-portrait-of-a-horrible-scary-zombie-man-horror-halloween-.jpg?ver=6",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv4hKkwM-GmX_6-X1bZR4kOnUFcV5h-HNgIZCdzXuBK2l5pVT",
  "http://wallpoper.com/images/00/08/72/29/scary-face_00087229.jpg",
  "https://i.pinimg.com/736x/c0/cf/e0/c0cfe0b044cc6c435dcb1bf8667b6b93--vampire-makeup-vampire-fangs.jpg",
  "http://www.pentoolart.com/images/1freddy.jpg?crc=4161856176",
  "https://i.pinimg.com/236x/df/26/d9/df26d9098802fbabccbf3d45f81a8bd1--scary-characters-scary-movies.jpg",
  "https://s2.r29static.com//bin/entry/780/0,0,2000,2400/720x864,80/1737975/image.jpg",
  "http://121clicks.com/wp-content/uploads/2011/10/horror_portrait26.jpg",
  "http://www.psd-dude.com/tutorials/resources-images/dark-horror-photoshop-tutorials-third/15884278_ff35.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5vkj7NZ653SAzQCsjMqwBs3HrajOITYvrxLFvFUKRjwzg0fs",
  "https://joshsworstnightmare.files.wordpress.com/2017/03/last-words-w.jpg",
  "https://hoffinehorror.files.wordpress.com/2018/05/flesheaterportrait.jpg?w=584&h=876",
  "https://us.123rf.com/450wm/Prometeus/Prometeus1510/Prometeus151000015/45948438-close-up-portrait-of-a-horrible-scary-zombie-man-horror-halloween-.jpg?ver=6",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv4hKkwM-GmX_6-X1bZR4kOnUFcV5h-HNgIZCdzXuBK2l5pVT",
  "http://wallpoper.com/images/00/08/72/29/scary-face_00087229.jpg",
  "https://i.pinimg.com/736x/c0/cf/e0/c0cfe0b044cc6c435dcb1bf8667b6b93--vampire-makeup-vampire-fangs.jpg",
  "http://www.pentoolart.com/images/1freddy.jpg?crc=4161856176"
];

function clicked() { // clicked function so i can unbind click event to prevet shit like clicking more then 2 fields at one try
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idCheck.push($(this).attr("id"));
  check();
}

$(".field").on("click", clicked);
  

function restart() {
  $(".back").find("img").remove(); //remove all current images from the field
  $(".field .inner-wrap").removeClass("flipped"); // remove flipped class so they can flip back again at the starting position
  checkArray = []; // empty check array
  idCheck = []; // empty IDs check array
  counter = 0; // reset counter
  end = 0; // reset ending variable
  startGame();
}

function checkEnd() {
 
  if (end === 24) { //if all 24 fields are uncovered 

    alert("Game is over! Your score is " + counter);
    restart();
  }
}

function shuffleArray(array) { // shuffle array with images
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function startGame() {


  var arr = shuffleArray(images); // stores the array of shuffled images

  for (var i = 0; i < fields.length; i++) { // appending those images to the div with class "back"
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  if (checkArray.length === 2) { // if fields are clicked 2 times we are doing check
    $(".field").off("click", clicked); // disabling click event to prevet shit
    setTimeout(function(){
      if (checkArray[0] !== checkArray[1]) { // if there is  no match
        $("#" + idCheck[0]).find(".inner-wrap").removeClass("flipped"); // flip the field back
        $("#" + idCheck[1]).find(".inner-wrap").removeClass("flipped"); // second one flip back as well
        counter++;
        checkArray = []; //empty checking array for the next 2 clicks
        idCheck = []; // same with this one
        $(".field").on("click", clicked); // bind the click back again
      } else {
        
        counter++;
        end += 2; // if there is a match "end" is raised by 2 as 2 fields are uncovered
        checkArray = []; // empty array for the next try
        idCheck = []; // this one as well
        checkEnd(); // check if game has eneded
        $(".field").on("click", clicked); // bind click again
      }
      document.querySelector(".counter").innerHTML = counter;
    }, 800);  
  }
}



startGame();

});
// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

// Default search is for a show, "The Daily Show"
if (!search) {
  search = "show";
  term = "The Daily Show";
} else if (!term) {
  if (search === "show") {
    term = "The Daily Show";
  } else if (search === "actor") {
    term = "John Malkovich";
  }
}

if (search === "show") {
  console.log("Searching for TV Show: " + term);
  tv.findShow(term);
} else {
  console.log("Searching for TV Actor: " + term);
  tv.findActor(term);
}
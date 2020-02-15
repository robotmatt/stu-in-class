// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

if (!search) {
  search = "show";
}

if (!term) {
  term = "The Daily Show";
}

// Print whether searching for a show or actor, print the term as well
if (search === "show") {
  console.log("Searching for TV Show");
} else {
  console.log("Searching for TV Actor");
}

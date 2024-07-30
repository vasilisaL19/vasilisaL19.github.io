/* .js files add interaction to your website */

var factList = [
  "A quarter of American families with children don’t have consistent access to food",
  "Some Native American communities see over 90% food insecurity rates",
  "More than 5 million seniors face food insecurity",
  "50% of low-income parents are forced to shrink kids’ meals",
  "As many as 25% of veterans face food insecurity",
  "Urban gardens help reduce food insecurity",
  "Curbing food waste helps reduce hunger",
  "The Supplemental Nutrition Assistance Program (SNAP) assists families in difficult situations and benefits our communities"
];

var fact = document.getElementById ("fact");
var factBtn =document.getElementById("factBtn");
var count = 0;

if (factBtn) {
factBtn.addEventListener ("click",displayFact);}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count==factList.length) {count = 0;
  }
  console.log (factList[count]);
}


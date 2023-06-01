let data = [
	{city: "Providence",	population: 188812, island: false},
	{city: "Warwick",	population: 82666, island: false},
	{city: "Cranston",	population: 82654, island: false},
	{city: "Pawtucket",	population:	75200, island: false},
	{city: "East Providence",	population:	47171, island: false},
 	{city: "Woonsocket",	population:	43044, island: false},
    {city: "Cumberland",	population:	36186, island: false},
    {city: "Coventry",	population:	35386, island: false},
    {city: "North Providence",	population:	33935, island: false},
	{city: "South Kingstown",	population:	31576, island: false},
	{city: "West Warwick",	population:	30823, island: false},
	{city: "Johnston",	population:	29550, island: false},
	{city: "North Kingstown",	population:	27696, island: false},
	{city: "Newport",	population:	25322, island: true},
	{city: "Westerly",	population:	23352, island: false},
	{city: "Lincoln",	population:	22415, island: false},
    {city: "Bristol",	population:	22305, island: false},
	{city: "Central Falls",	population:	22192, island: false},
	{city: "Smithfield",	population:	21855, island: false},
	{city: "Portsmouth",	population:	17802, island: true},
    {city: "Barrington",	population:	17201, island: false},
	{city: "Middletown",	population:	16983, island: true},
	{city: "Tiverton",	population:	16287, island: false},
    {city: "Burrillville",	population:	16186, island: false},
	{city: "Narragansett",	population:	14759, island: false},
	{city: "East Greenwich",	population:	13970, island: false},
	{city: "North Smithfield",	population:	12537, island: false},
	{city: "Warren",	population:	11166, island: false},
	{city: "Scituate",	population:	10423, island: false},
	{city: "Glocester",	population:	10007, island: false},
	{city: "Hopkinton",	population:	8411, island: false},
	{city: "Richmond",	population:	8064, island: false},
	{city: "Charlestown",	population:	8012, island: false},
	{city: "Exeter",	population:	6858, island: false},
	{city: "West Greenwich",	population:	6500, island: false},
	{city: "Jamestown",	population:	5531, island: true},
	{city: "Foster",	population:	4505, island: false},
	{city: "Little Compton",	population:	3600, island: false},
	{city: "New Shoreham",	population:	1007, island: true}
];
  
	for (let i = 0; i < data.length; i++) {
 		document.getElementById("cities").innerHTML += data[i].city + " • "; 
	};

//total number of cities
document.getElementById("totalCities").innerHTML = "There are " + data.length + " cities in Rhode Island.";

//total population
const census = data.reduce(function (accumulator, data) {
  return accumulator + data.population;
}, 0);

document.getElementById("totalPop").innerHTML = "The total population of the state is " + census.toLocaleString() + " residents.";
//.toLocaleString() adds commas in integers


//capital of RI
document.getElementById("capital").innerHTML = "The capital of Rhode Island is " + data[0].city + ".";

//highest population
document.getElementById("population").innerHTML = data[0].city + " is the most populous city in R.I. with " + data[0].population.toLocaleString() + " residents.";

//lowest population
document.getElementById("smallest").innerHTML = data[38].city + " on Block Island is the smallest and least populated town in R.I. with a population of " + data[38].population.toLocaleString() + ".";

//return towns located on islands
const islandTowns = data.filter((obj) => obj.island);
//loop through all island towns
for (let i = 0; i < islandTowns.length; i++){
document.getElementById("numIslands").innerHTML = "There are " + islandTowns.length + " cities located on islands with residents on them.";
document.getElementById("islanders").innerHTML += islandTowns[i].city + "<br>";

//get island population  
const islandCensus = islandTowns.reduce(function(accumalator, islandTowns) {
   return accumalator + islandTowns.population                                     
 }, 0)

document.getElementById("islandPop").innerHTML = "The total number of residents on the islands combined is " + islandCensus.toLocaleString() + ".";
}

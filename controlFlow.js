//Part 1: Growing Pains

//The area in which the plants are contained is circular, 
//with a radius of 5 meters
let radius = 5;
const pi = 3.1415;
//calculating the area of a circle, square meters
const area = pi*radius*radius;
console.log("Area of the whole field is " + area);

//Each plant requires a minimum space of 0.8 square meters
onePlantMinspace = 0.8;

//The area is starting with 20 plants
startPlants = 20;

//The starting area for all plants
allPlantsArea = onePlantMinspace * startPlants;
console.log("The starting area for all plants " + allPlantsArea);

//The plants double in number every week.
//Number of plants and area taken by plants 
//at the beginning of the second/third week
startPlantsWeek2 = startPlants *2;
console.log("Number of plants at beginning of the 2nd week " + startPlantsWeek2);

startPlantsWeek3 = startPlantsWeek2 *2;
console.log("Number of plants at beginning of the 2nd week " + startPlantsWeek3);

allPlantsAreaWeek2 = onePlantMinspace * startPlantsWeek2;
console.log("allPlantsAreaWeek2 " + allPlantsAreaWeek2);

allPlantsAreaWeek3 = onePlantMinspace * startPlantsWeek3;
console.log("allPlantsAreaWeek3 " + allPlantsAreaWeek3);

//80% of the maximum capacity of the garden

let percent80 = (80/100);
let maxCapacity80 = Math.round(area*percent80);
console.log("80% of the maximum capacity of the garden " + maxCapacity80);

//50% of the maximum capacity of the garden

let percent50 = (50/100);
let maxCapacity50 = Math.round(area*percent50);
console.log("50% of the maximum capacity of the garden " + maxCapacity50);

//Implement control flow to make decisions 
//on whether the plants should be at the beginning of the first week:

if (allPlantsArea > maxCapacity80)
{
 console.log("Prune them");   
} else if (allPlantsArea >= maxCapacity50){
console.log("Monitor them");   
} else {
console.log("Plant them")
}

//Implement control flow to make decisions 
//on whether the plants should be at the beginning of the second week:

if (allPlantsAreaWeek2 > maxCapacity80)
{
 console.log("Prune them");   
} else if (allPlantsAreaWeek2 >= maxCapacity50){
console.log("Monitor them");   
} else {
console.log("Plant them")
}

//Implement control flow to make decisions 
//on whether the plants should be at the beginning of the third week:

if (allPlantsAreaWeek3 > maxCapacity80)
{
 console.log("Prune them");   
} else if (allPlantsAreaWeek3 >= maxCapacity50){
console.log("Monitor them");   
} else {
console.log("Plant them")
}

//Part 2: Thinking Bigger

/*The conservation area in which the garden is located 
has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required 
if the scientists were to start with 100 plants, 
and did not prune them for 10 weeks.
If the space remained circular, 
what would be the radius of this expanded garden?*/


/*The amount of additional space that would be required 
if the scientists were to start with 100 plants, 
and did not prune them for 10 weeks.*/

/*The number of plants at the end of 10 weeks
if the scientists were to start with 100 plants, 
and did not prune them for 10 weeks */

let plantNotPrunedAfter10Weeks  = 100 * (Math.pow(2, 10));
console.log(`Number of plants if will not pruned garden after 10 Weeks is ${plantNotPrunedAfter10Weeks}`);

//Area of this expanded garden is
areaExpandGarden = plantNotPrunedAfter10Weeks * onePlantMinspace;
console.log('The area of this expanded garden is ' + areaExpandGarden);

additionalSpace = areaExpandGarden - area;
console.log('The additional space is ' + additionalSpace);

/*If the space remained circular, 
what would be the radius of this expanded garden?*/
radiusSquaredForExpandGarden = areaExpandGarden / pi;
console.log('Radius squared for expanded garden is ' + radiusSquaredForExpandGarden);

radiusForExpandGarden = Math.sqrt(radiusSquaredForExpandGarden);
console.log('Radius of this expanded garden is ' + radiusForExpandGarden);



//Part 3: Errors in Judgement

/*The scientists decided not to listen to your recommendations, 
and have instead started 
with 100 plants in the original 5-meter-radius garden.*/

let plants = 100;

try {
		x = plants * onePlantMinspace;
		if (x <= area) {
			console.log(`Enough space!`);
		} else {
			let message = `Not enough space!`;
			throw message;
		}
	
} catch (error) {
	console.log(error);
}

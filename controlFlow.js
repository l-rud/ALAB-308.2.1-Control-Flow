//Part 1: Growing Pains

//The area in which the plants are contained is circular, 
//with a radius of 5 meters
let radius = 5;
const pi = 3.1415;
//calculating the area of a circle, square meters
const area = Math.round(pi*radius*radius);
console.log("Area of the whole feeld is " + area);

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
 console.log("Pruned them");   
} else if (allPlantsArea >= maxCapacity50){
console.log("Monitor them");   
} else if (allPlantsArea == maxCapacity80){
    console.log("Monitor them")  
} else {
console.log("Plant them")
}





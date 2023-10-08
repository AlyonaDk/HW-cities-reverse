const cities =  ["London", "Paris", "Berlin", "Madrid"]

//создали новый
const newCities = []

//прошлись for c конца
for (let i = cities.length- 1; i>= 0; i--) {
  newCities.push(cities[i])
}

// console.log(newCities);


//с помощью spread оператора '...' сделали одномерную копию старого массива
//и переставили элементы задом наперед
const newCities2 = [...cities].reverse()

//метод который создает новую копию старого массива
const newCities3 = cities.toReversed()

console.log(cities);
console.log(newCities2);
console.log(newCities3);
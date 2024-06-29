// 1333. Filter Restaurants by Vegan-Friendly, Price and Distance



// Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters.

// The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) or false (meaning you can include any restaurant). In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.

// Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. For restaurants with the same rating, order them by id from highest to lowest. For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false.





/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {

    let VeganRestaurant = []

    for(let rest of restaurants){
        if(veganFriendly == 0){
                VeganRestaurant.push(rest)
            
        }
        else if(rest[2] == veganFriendly){
                    VeganRestaurant.push(rest)        
        }
        
    }

    VeganRestaurant.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]; // Sort by rating
        } else {
            return b[0] - a[0]; // Sort by id if ratings are equal
        }
    });

    let results = []

    for(let restaurant of VeganRestaurant){

        let id = restaurant[0]
        let price = restaurant[3]
        let distance = restaurant[4]

        if(price <= maxPrice){

            if(distance <= maxDistance){

                results.push(id)
            }
        }
    }

    return results
    
};


/**
    empty array
    push to new array - if it is veganfriendly
    sort array based off rating
    empty array
    let id = restaurants[0]
    let rating = restaurants[1]
    let isVegan = restaurants[2]
    let price = restaurants[3]
    let distance = restaurants[4]



 */
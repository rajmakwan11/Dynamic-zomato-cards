const restaurants = [
    {
      "image": "seventh",
      "name": "Bistro Bliss",
      "rating": 5,
      "food_type": "Italian",
      "price_for_two": 353,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "4.6",
      "offers": 10,
      "alcohol": false,
      "restaurant_open_time": 15,
      "restaurant_close_time": 3,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "The Cozy Corner",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 1896,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "4.6",
      "offers": 16,
      "alcohol": true,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "Mediterranean Magic",
      "rating": 2,
      "food_type": "American",
      "price_for_two": 164,
      "location": "Dwarka",
      "distance_from_customer_house": "8.2",
      "offers": 27,
      "alcohol": false,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "fourth",
      "name": "Street Eats",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 953,
      "location": "Connaught Place",
      "distance_from_customer_house": "6.5",
      "offers": 7,
      "alcohol": false,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "Sushi Spot",
      "rating": 2,
      "food_type": "Japanese",
      "price_for_two": 2477,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "3.2",
      "offers": 29,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "Spice Symphony",
      "rating": 5,
      "food_type": "Chinese",
      "price_for_two": 2149,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "6.6",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "The Gourmet Haven",
      "rating": 2,
      "food_type": "Mexican",
      "price_for_two": 1497,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "4.1",
      "offers": 24,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "tenth",
      "name": "Sushi Spot",
      "rating": 2,
      "food_type": "Chinese",
      "price_for_two": 310,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "6.4",
      "offers": 20,
      "alcohol": true,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "The Rustic Table",
      "rating": 2,
      "food_type": "Mexican",
      "price_for_two": 1087,
      "location": "Saket",
      "distance_from_customer_house": "1.1",
      "offers": 0,
      "alcohol": true,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "Street Eats",
      "rating": 3,
      "food_type": "Korean",
      "price_for_two": 1233,
      "location": "Connaught Place",
      "distance_from_customer_house": "7.3",
      "offers": 24,
      "alcohol": false,
      "restaurant_open_time": 3,
      "restaurant_close_time": 15,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Golden Wok",
      "rating": 5,
      "food_type": "Mexican",
      "price_for_two": 2162,
      "location": "Karol Bagh",
      "distance_from_customer_house": "8.1",
      "offers": 11,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Farm to Table",
      "rating": 1,
      "food_type": "Mexican",
      "price_for_two": 1185,
      "location": "Saket",
      "distance_from_customer_house": "2.4",
      "offers": 14,
      "alcohol": true,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Mediterranean Magic",
      "rating": 4,
      "food_type": "Thai",
      "price_for_two": 1974,
      "location": "Khan Market",
      "distance_from_customer_house": "5.6",
      "offers": 23,
      "alcohol": true,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "First",
      "name": "Spice Symphony",
      "rating": 1,
      "food_type": "French",
      "price_for_two": 2683,
      "location": "Connaught Place",
      "distance_from_customer_house": "4.6",
      "offers": 17,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Savory Street",
      "rating": 4,
      "food_type": "Thai",
      "price_for_two": 446,
      "location": "Dwarka",
      "distance_from_customer_house": "8.5",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "fourth",
      "name": "Fusion Fiesta",
      "rating": 3,
      "food_type": "Thai",
      "price_for_two": 561,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "9.7",
      "offers": 3,
      "alcohol": true,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "third",
      "name": "The Chocolate Box",
      "rating": 5,
      "food_type": "Italian",
      "price_for_two": 437,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "2.0",
      "offers": 22,
      "alcohol": true,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "seventh",
      "name": "Spice Symphony",
      "rating": 2,
      "food_type": "American",
      "price_for_two": 1733,
      "location": "Karol Bagh",
      "distance_from_customer_house": "2.4",
      "offers": 18,
      "alcohol": true,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "Sushi Spot",
      "rating": 5,
      "food_type": "American",
      "price_for_two": 1455,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "6.3",
      "offers": 1,
      "alcohol": false,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Burger Bliss",
      "rating": 2,
      "food_type": "French",
      "price_for_two": 292,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "7.8",
      "offers": 17,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "Breakfast Club",
      "rating": 3,
      "food_type": "Mediterranean",
      "price_for_two": 1921,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "6.7",
      "offers": 9,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "The Gourmet Haven",
      "rating": 3,
      "food_type": "Thai",
      "price_for_two": 2465,
      "location": "Khan Market",
      "distance_from_customer_house": "7.6",
      "offers": 24,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "The Chocolate Box",
      "rating": 2,
      "food_type": "Japanese",
      "price_for_two": 2630,
      "location": "Connaught Place",
      "distance_from_customer_house": "6.8",
      "offers": 27,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "The Chocolate Box",
      "rating": 4,
      "food_type": "Japanese",
      "price_for_two": 624,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "8.7",
      "offers": 26,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Bistro Bliss",
      "rating": 2,
      "food_type": "Italian",
      "price_for_two": 1247,
      "location": "Connaught Place",
      "distance_from_customer_house": "4.1",
      "offers": 1,
      "alcohol": true,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "sixth",
      "name": "The Rustic Table",
      "rating": 1,
      "food_type": "Mediterranean",
      "price_for_two": 567,
      "location": "Khan Market",
      "distance_from_customer_house": "6.2",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "The Green Plate",
      "rating": 5,
      "food_type": "Chinese",
      "price_for_two": 1368,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "6.3",
      "offers": 4,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "seventh",
      "name": "The Gourmet Haven",
      "rating": 1,
      "food_type": "Korean",
      "price_for_two": 1980,
      "location": "Saket",
      "distance_from_customer_house": "10.0",
      "offers": 17,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Burger Bliss",
      "rating": 2,
      "food_type": "Thai",
      "price_for_two": 1629,
      "location": "Khan Market",
      "distance_from_customer_house": "4.1",
      "offers": 16,
      "alcohol": true,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Pasta Paradise",
      "rating": 4,
      "food_type": "Korean",
      "price_for_two": 1407,
      "location": "Khan Market",
      "distance_from_customer_house": "8.0",
      "offers": 11,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "The Green Plate",
      "rating": 5,
      "food_type": "Korean",
      "price_for_two": 1470,
      "location": "Khan Market",
      "distance_from_customer_house": "1.2",
      "offers": 8,
      "alcohol": false,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Sushi Spot",
      "rating": 2,
      "food_type": "Korean",
      "price_for_two": 1779,
      "location": "Khan Market",
      "distance_from_customer_house": "9.6",
      "offers": 24,
      "alcohol": true,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Street Eats",
      "rating": 3,
      "food_type": "Mexican",
      "price_for_two": 1384,
      "location": "Khan Market",
      "distance_from_customer_house": "3.1",
      "offers": 7,
      "alcohol": true,
      "restaurant_open_time": 20,
      "restaurant_close_time": 8,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "First",
      "name": "Burger Bliss",
      "rating": 2,
      "food_type": "French",
      "price_for_two": 682,
      "location": "Saket",
      "distance_from_customer_house": "3.1",
      "offers": 25,
      "alcohol": true,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Farm to Table",
      "rating": 4,
      "food_type": "Thai",
      "price_for_two": 2335,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "9.2",
      "offers": 11,
      "alcohol": false,
      "restaurant_open_time": 20,
      "restaurant_close_time": 8,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "Burger Bliss",
      "rating": 5,
      "food_type": "Italian",
      "price_for_two": 1371,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "7.6",
      "offers": 10,
      "alcohol": false,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "First",
      "name": "Breakfast Club",
      "rating": 3,
      "food_type": "Indian",
      "price_for_two": 1423,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "4.9",
      "offers": 28,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Ocean Delights",
      "rating": 1,
      "food_type": "American",
      "price_for_two": 159,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "1.4",
      "offers": 5,
      "alcohol": true,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Street Eats",
      "rating": 3,
      "food_type": "Mediterranean",
      "price_for_two": 2077,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "7.8",
      "offers": 4,
      "alcohol": false,
      "restaurant_open_time": 19,
      "restaurant_close_time": 7,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "fifth",
      "name": "Golden Wok",
      "rating": 3,
      "food_type": "Korean",
      "price_for_two": 338,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "7.1",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "nine",
      "name": "Urban Bites",
      "rating": 5,
      "food_type": "Japanese",
      "price_for_two": 2548,
      "location": "Connaught Place",
      "distance_from_customer_house": "7.2",
      "offers": 5,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Ocean Delights",
      "rating": 4,
      "food_type": "Mediterranean",
      "price_for_two": 1105,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "9.5",
      "offers": 29,
      "alcohol": false,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "Fusion Fiesta",
      "rating": 2,
      "food_type": "French",
      "price_for_two": 1689,
      "location": "Khan Market",
      "distance_from_customer_house": "1.7",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "Pasta Paradise",
      "rating": 1,
      "food_type": "Korean",
      "price_for_two": 566,
      "location": "Karol Bagh",
      "distance_from_customer_house": "6.9",
      "offers": 16,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "Fusion Fiesta",
      "rating": 5,
      "food_type": "Italian",
      "price_for_two": 1182,
      "location": "Khan Market",
      "distance_from_customer_house": "8.4",
      "offers": 16,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "The Green Plate",
      "rating": 4,
      "food_type": "Mexican",
      "price_for_two": 189,
      "location": "Connaught Place",
      "distance_from_customer_house": "7.7",
      "offers": 24,
      "alcohol": false,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Burger Bliss",
      "rating": 4,
      "food_type": "Chinese",
      "price_for_two": 849,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "5.7",
      "offers": 2,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "third",
      "name": "Bistro Bliss",
      "rating": 4,
      "food_type": "Mediterranean",
      "price_for_two": 1622,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "5.5",
      "offers": 25,
      "alcohol": true,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Ocean Delights",
      "rating": 5,
      "food_type": "French",
      "price_for_two": 2165,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "5.5",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Ocean Delights",
      "rating": 3,
      "food_type": "Chinese",
      "price_for_two": 1364,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "1.7",
      "offers": 11,
      "alcohol": true,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "The Rustic Table",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 1364,
      "location": "Connaught Place",
      "distance_from_customer_house": "9.6",
      "offers": 5,
      "alcohol": false,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "The Cozy Corner",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 524,
      "location": "Saket",
      "distance_from_customer_house": "7.6",
      "offers": 9,
      "alcohol": false,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "seventh",
      "name": "Sushi Spot",
      "rating": 5,
      "food_type": "Chinese",
      "price_for_two": 2641,
      "location": "Khan Market",
      "distance_from_customer_house": "9.1",
      "offers": 22,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Savory Street",
      "rating": 1,
      "food_type": "Mediterranean",
      "price_for_two": 1982,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "1.6",
      "offers": 3,
      "alcohol": false,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Street Eats",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 1437,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "3.2",
      "offers": 17,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "The Chocolate Box",
      "rating": 4,
      "food_type": "American",
      "price_for_two": 969,
      "location": "Dwarka",
      "distance_from_customer_house": "4.9",
      "offers": 9,
      "alcohol": true,
      "restaurant_open_time": 12,
      "restaurant_close_time": 0,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "The Chocolate Box",
      "rating": 1,
      "food_type": "Mexican",
      "price_for_two": 2409,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "4.0",
      "offers": 6,
      "alcohol": true,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "fifth",
      "name": "Spice Symphony",
      "rating": 1,
      "food_type": "Mediterranean",
      "price_for_two": 2407,
      "location": "Karol Bagh",
      "distance_from_customer_house": "8.2",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 18,
      "restaurant_close_time": 6,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "Pasta Paradise",
      "rating": 1,
      "food_type": "Italian",
      "price_for_two": 1289,
      "location": "Connaught Place",
      "distance_from_customer_house": "1.9",
      "offers": 29,
      "alcohol": true,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Mediterranean Magic",
      "rating": 4,
      "food_type": "Japanese",
      "price_for_two": 746,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "6.0",
      "offers": 24,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Urban Bites",
      "rating": 5,
      "food_type": "Thai",
      "price_for_two": 2545,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "6.1",
      "offers": 8,
      "alcohol": false,
      "restaurant_open_time": 9,
      "restaurant_close_time": 21,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "fifth",
      "name": "Street Eats",
      "rating": 2,
      "food_type": "French",
      "price_for_two": 613,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "1.9",
      "offers": 19,
      "alcohol": true,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Burger Bliss",
      "rating": 5,
      "food_type": "Japanese",
      "price_for_two": 1868,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "8.7",
      "offers": 28,
      "alcohol": true,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "Eigth",
      "name": "Street Eats",
      "rating": 5,
      "food_type": "Chinese",
      "price_for_two": 1566,
      "location": "Dwarka",
      "distance_from_customer_house": "4.9",
      "offers": 20,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Farm to Table",
      "rating": 5,
      "food_type": "Mexican",
      "price_for_two": 143,
      "location": "Connaught Place",
      "distance_from_customer_house": "9.5",
      "offers": 6,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "nine",
      "name": "Pasta Paradise",
      "rating": 3,
      "food_type": "Mexican",
      "price_for_two": 1260,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "9.5",
      "offers": 17,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "second",
      "name": "Urban Bites",
      "rating": 3,
      "food_type": "French",
      "price_for_two": 1170,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "2.4",
      "offers": 23,
      "alcohol": true,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Mediterranean Magic",
      "rating": 1,
      "food_type": "Mexican",
      "price_for_two": 618,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "3.3",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Farm to Table",
      "rating": 4,
      "food_type": "Indian",
      "price_for_two": 1116,
      "location": "Saket",
      "distance_from_customer_house": "10.6",
      "offers": 0,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Burger Bliss",
      "rating": 5,
      "food_type": "Thai",
      "price_for_two": 426,
      "location": "Khan Market",
      "distance_from_customer_house": "6.9",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "Spice Symphony",
      "rating": 4,
      "food_type": "Thai",
      "price_for_two": 2382,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "4.4",
      "offers": 20,
      "alcohol": false,
      "restaurant_open_time": 21,
      "restaurant_close_time": 9,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "fourth",
      "name": "Breakfast Club",
      "rating": 4,
      "food_type": "Chinese",
      "price_for_two": 2087,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "10.2",
      "offers": 29,
      "alcohol": true,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Farm to Table",
      "rating": 4,
      "food_type": "French",
      "price_for_two": 2521,
      "location": "Saket",
      "distance_from_customer_house": "1.3",
      "offers": 0,
      "alcohol": false,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "second",
      "name": "Golden Wok",
      "rating": 5,
      "food_type": "Mediterranean",
      "price_for_two": 1460,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "3.4",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "The Rustic Table",
      "rating": 3,
      "food_type": "French",
      "price_for_two": 1303,
      "location": "Connaught Place",
      "distance_from_customer_house": "1.1",
      "offers": 4,
      "alcohol": false,
      "restaurant_open_time": 10,
      "restaurant_close_time": 22,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "The Cozy Corner",
      "rating": 3,
      "food_type": "French",
      "price_for_two": 765,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "8.2",
      "offers": 12,
      "alcohol": false,
      "restaurant_open_time": 7,
      "restaurant_close_time": 19,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "Ocean Delights",
      "rating": 3,
      "food_type": "French",
      "price_for_two": 551,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "4.4",
      "offers": 7,
      "alcohol": true,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "seventh",
      "name": "Bistro Bliss",
      "rating": 3,
      "food_type": "American",
      "price_for_two": 1771,
      "location": "Connaught Place",
      "distance_from_customer_house": "6.3",
      "offers": 1,
      "alcohol": false,
      "restaurant_open_time": 6,
      "restaurant_close_time": 18,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Ocean Delights",
      "rating": 1,
      "food_type": "Italian",
      "price_for_two": 2105,
      "location": "Karol Bagh",
      "distance_from_customer_house": "9.4",
      "offers": 21,
      "alcohol": true,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "Eigth",
      "name": "Ocean Delights",
      "rating": 3,
      "food_type": "Korean",
      "price_for_two": 518,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "6.2",
      "offers": 0,
      "alcohol": true,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "sixth",
      "name": "Farm to Table",
      "rating": 3,
      "food_type": "Mexican",
      "price_for_two": 2345,
      "location": "Karol Bagh",
      "distance_from_customer_house": "5.9",
      "offers": 18,
      "alcohol": true,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "tenth",
      "name": "Sushi Spot",
      "rating": 3,
      "food_type": "Japanese",
      "price_for_two": 837,
      "location": "Saket",
      "distance_from_customer_house": "6.9",
      "offers": 12,
      "alcohol": true,
      "restaurant_open_time": 11,
      "restaurant_close_time": 23,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "The Chocolate Box",
      "rating": 4,
      "food_type": "Thai",
      "price_for_two": 180,
      "location": "Dwarka",
      "distance_from_customer_house": "2.1",
      "offers": 17,
      "alcohol": true,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "Street Eats",
      "rating": 5,
      "food_type": "Mexican",
      "price_for_two": 200,
      "location": "Karol Bagh",
      "distance_from_customer_house": "8.9",
      "offers": 8,
      "alcohol": false,
      "restaurant_open_time": 1,
      "restaurant_close_time": 13,
      "outdoor_seating": true,
      "pet_friendly": true
    },
    {
      "image": "seventh",
      "name": "The Chocolate Box",
      "rating": 2,
      "food_type": "Indian",
      "price_for_two": 2685,
      "location": "Rajouri Garden",
      "distance_from_customer_house": "5.1",
      "offers": 23,
      "alcohol": false,
      "restaurant_open_time": 20,
      "restaurant_close_time": 8,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "The Green Plate",
      "rating": 4,
      "food_type": "Italian",
      "price_for_two": 1883,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "3.3",
      "offers": 26,
      "alcohol": true,
      "restaurant_open_time": 15,
      "restaurant_close_time": 3,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "The Cozy Corner",
      "rating": 2,
      "food_type": "Korean",
      "price_for_two": 640,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "5.2",
      "offers": 9,
      "alcohol": false,
      "restaurant_open_time": 5,
      "restaurant_close_time": 17,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "tenth",
      "name": "The Chocolate Box",
      "rating": 5,
      "food_type": "French",
      "price_for_two": 1762,
      "location": "Khan Market",
      "distance_from_customer_house": "7.8",
      "offers": 10,
      "alcohol": false,
      "restaurant_open_time": 17,
      "restaurant_close_time": 5,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "Pasta Paradise",
      "rating": 3,
      "food_type": "Mexican",
      "price_for_two": 2066,
      "location": "Chandni Chowk",
      "distance_from_customer_house": "2.1",
      "offers": 2,
      "alcohol": false,
      "restaurant_open_time": 14,
      "restaurant_close_time": 2,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "The Green Plate",
      "rating": 5,
      "food_type": "French",
      "price_for_two": 974,
      "location": "Karol Bagh",
      "distance_from_customer_house": "1.0",
      "offers": 18,
      "alcohol": false,
      "restaurant_open_time": 20,
      "restaurant_close_time": 8,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "sixth",
      "name": "The Cozy Corner",
      "rating": 5,
      "food_type": "Chinese",
      "price_for_two": 1368,
      "location": "Dwarka",
      "distance_from_customer_house": "8.9",
      "offers": 20,
      "alcohol": true,
      "restaurant_open_time": 0,
      "restaurant_close_time": 12,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "third",
      "name": "Ocean Delights",
      "rating": 5,
      "food_type": "Thai",
      "price_for_two": 2432,
      "location": "Dwarka",
      "distance_from_customer_house": "10.7",
      "offers": 25,
      "alcohol": false,
      "restaurant_open_time": 8,
      "restaurant_close_time": 20,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Breakfast Club",
      "rating": 5,
      "food_type": "Korean",
      "price_for_two": 1013,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "4.9",
      "offers": 4,
      "alcohol": false,
      "restaurant_open_time": 23,
      "restaurant_close_time": 11,
      "outdoor_seating": true,
      "pet_friendly": false
    },
    {
      "image": "second",
      "name": "Golden Wok",
      "rating": 1,
      "food_type": "Japanese",
      "price_for_two": 813,
      "location": "Hauz Khas Village",
      "distance_from_customer_house": "8.5",
      "offers": 6,
      "alcohol": false,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fourth",
      "name": "Bistro Bliss",
      "rating": 1,
      "food_type": "Thai",
      "price_for_two": 2194,
      "location": "Khan Market",
      "distance_from_customer_house": "7.9",
      "offers": 14,
      "alcohol": false,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "fifth",
      "name": "Spice Symphony",
      "rating": 4,
      "food_type": "French",
      "price_for_two": 555,
      "location": "Saket",
      "distance_from_customer_house": "7.9",
      "offers": 26,
      "alcohol": true,
      "restaurant_open_time": 2,
      "restaurant_close_time": 14,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "fifth",
      "name": "Urban Bites",
      "rating": 2,
      "food_type": "Indian",
      "price_for_two": 1148,
      "location": "Vasant Kunj",
      "distance_from_customer_house": "2.9",
      "offers": 6,
      "alcohol": false,
      "restaurant_open_time": 4,
      "restaurant_close_time": 16,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "seventh",
      "name": "Golden Wok",
      "rating": 1,
      "food_type": "Mediterranean",
      "price_for_two": 2615,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "9.0",
      "offers": 29,
      "alcohol": false,
      "restaurant_open_time": 13,
      "restaurant_close_time": 1,
      "outdoor_seating": false,
      "pet_friendly": true
    },
    {
      "image": "fourth",
      "name": "The Green Plate",
      "rating": 1,
      "food_type": "Mexican",
      "price_for_two": 358,
      "location": "Lajpat Nagar",
      "distance_from_customer_house": "5.9",
      "offers": 11,
      "alcohol": false,
      "restaurant_open_time": 15,
      "restaurant_close_time": 3,
      "outdoor_seating": false,
      "pet_friendly": false
    },
    {
      "image": "nine",
      "name": "Farm to Table",
      "rating": 1,
      "food_type": "Mediterranean",
      "price_for_two": 679,
      "location": "Saket",
      "distance_from_customer_house": "8.9",
      "offers": 8,
      "alcohol": true,
      "restaurant_open_time": 22,
      "restaurant_close_time": 10,
      "outdoor_seating": false,
      "pet_friendly": false
    }
]


// FOR HAMBURGER MENU - if hamburger clicked , show options and remove filter form

const toggleBtn = document.querySelector(".hamburger-toggle");
const optionsBox = document.querySelector(".options");

toggleBtn.addEventListener("click", () => {
    optionsBox.classList.toggle("show");
    const close = document.getElementById("filterPopup");
    close.className = "hidden";
});



function getRestaurants(restaurants){

  const parent = document.getElementById("root");


  restaurants.forEach((restaurant)=>{
    
    const card = document.createElement("div");
    card.className = "card";

    // IMAGES FOR CARD 

    const res_img = document.createElement("img");
    res_img.classList.add("res-img");
    res_img.src = `Images/${restaurant.image}.jpeg`;

    // CARD CONTENTS PART 

    const card_contents = document.createElement("div");
    card_contents.className = "card-content";

    // part 1 of card content (CARD HEADER)

    const card_header = document.createElement("div");
    card_header.className = "card-header";

    const res_name = document.createElement("h3");
    res_name.className = "res-name";
    res_name.textContent = `${restaurant.name}`;

    const card_rating = document.createElement("span");
    card_rating.className = "card-rating";
    card_rating.textContent = `Rating: ${restaurant.rating}`;

    // APPENDING ELEMENTS OF CARD_HEADER
    card_header.appendChild(res_name);
    card_header.appendChild(card_rating);

    // PART 2 of card content (CARD FOOTER)

    const card_footer = document.createElement("div");
    card_footer.className = "card-footer";


    const food_pref = document.createElement("span");
    food_pref.textContent = `Food Type: ${restaurant.food_type}`;

    const food_price = document.createElement("span");
    food_price.textContent = `₹${restaurant.price_for_two}`;

    card_footer.appendChild(food_pref);
    card_footer.appendChild(food_price);

    // PART 3 of card content (CARD LOCATION)

    const card_location = document.createElement("div");
    card_location.className = "card-location";


    const location = document.createElement("span");
    location.textContent = `${restaurant.location}`;

    const distance = document.createElement("span");
    distance.textContent = restaurant.distance_from_customer_house + "km";

    card_location.appendChild(location);
    card_location.appendChild(distance);

    //CREATED ALL THINGS

    // APPENDING ALL THINGS

    card.appendChild(res_img);
    card.appendChild(card_header);
    card.appendChild(card_footer);
    card.appendChild(card_location);

    parent.appendChild(card);
  

  })

}

getRestaurants(restaurants);

// DOING FILTER WORK

// RATING 
document.getElementById('rating-filter').addEventListener('click',()=>{
    const result = restaurants.filter((obj)=>obj.rating > 4.5);
    document.getElementById("root").replaceChildren();
    getRestaurants(result);
})

// PET-FRIENDLY 
document.getElementById('pet-friendly-filter').addEventListener('click',()=>{
  const result = restaurants.filter((obj)=>obj.pet_friendly);
  document.getElementById("root").replaceChildren();
  getRestaurants(result);
})

// ALCOHOL 
document.getElementById('alcohol-rating-filter').addEventListener('click',()=>{
  const result = restaurants.filter((obj)=>obj.alcohol);
  document.getElementById("root").replaceChildren();
  getRestaurants(result);
})

// OUTDOOR SEATING 
document.getElementById('outdoor-seating-filter').addEventListener('click',()=>{
  const result = restaurants.filter((obj)=>obj.outdoor_seating);
  document.getElementById("root").replaceChildren();
  getRestaurants(result);
})

// OPEN NOW 
document.getElementById('open-filter').addEventListener('click',()=>{
  const currentHour = new Date().getHours();

  const result = restaurants.filter((obj) => {
    const open = obj.restaurant_open_time;
    const close = obj.restaurant_close_time;

    if (open < close) {
     // Same-day closing
      return currentHour >= open && currentHour < close;
    } else {
      // Overnight closing
      return currentHour >= open || currentHour < close;
    }
  })

  document.getElementById("root").replaceChildren();
  getRestaurants(result);
})

//all 

document.getElementById("all-filter").addEventListener('click',()=>{
  console.log("All button clicked ✅");
  document.getElementById("root").replaceChildren();
  getRestaurants(restaurants);
})

// FILTERS - if filter gets clicked show the filter form

document.getElementById("filter").addEventListener('click',()=>{
  console.log("clicked")
    const filter_options = document.getElementById('filterPopup');
    filter_options.classList.remove("hidden");
})

// CLOSE BUTTON 

document.getElementById('closeFilter').addEventListener('click',()=>{
  
  const filter_options = document.getElementById('filterPopup');
  filter_options.classList.add("hidden");

})

// APPLY BUTTON 

document.getElementById('applyFilter').addEventListener('click',()=>{

  const element = document.querySelector('input[name="filterOption"]:checked');
  const answer = element.value;

  if(answer == "rating"){
    restaurants.sort((a,b)=>b.rating-a.rating);
  }
  else if(answer == "highLow"){
    restaurants.sort((a,b)=> b.price_for_two - a.price_for_two )
  }
  else if(answer == "costLowHigh"){
    restaurants.sort((a,b)=>a.price_for_two-b.price_for_two)
  }
  else if(distance){
    restaurants.sort((a,b)=>a.distance_from_customer_house - b.distance_from_customer_house)
  }

  document.getElementById("root").replaceChildren();
  document.getElementById("filterPopup").classList.add("hidden");
  getRestaurants(restaurants);
    
})

//GO TO TOP BUTTON

{/* <button onclick="scrollToTop()">Go to Top</button>

<script>
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // smooth scrolling animation
    });
  }
</script> */}
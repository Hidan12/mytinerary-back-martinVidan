# mytinerary-back-martinVidan
Mytinerary-Back is a backend service for managing city information. It provides endpoints to fetch all cities, search for a city by name, retrieve a city by its ID, and create new city entries.

## Endpoints

### 1. Get All Cities
- **URL:** `http://localhost:8080/api/city/allCity`
- **Method:** GET
- **Description:** Retrieves a list of all cities.
- **Response:**
  - `length`: The number of cities.
  - `cities`: An array of city objects.
- **Query Parameters:**
  - `search`: (Optional) A string to search for in the city names.

#### Example Request
```http
GET http://localhost:8080/api/city/allCity

#### Example Response
```json
{
  "length": 10,
  "cities": [
    {
      "cityName": "Paris",
      "countryName": "France",
      "imgCity": "url_to_image",
      "currencyCoin": "EUR",
      "description": "The capital city of France."
    },
    // more cities
  ]
}

#### Example Response with Query
```http
GET http://localhost:8080/api/city/allCity?search=Paris

```json
{
  "length": 1,
  "cities": [
    {
      "cityName": "Paris",
      "countryName": "France",
      "imgCity": "url_to_image",
      "currencyCoin": "EUR",
      "description": "The capital city of France."
    }
  ]
}

### 2. Get City by ID
- **URL:** `http://localhost:8080/api/city/cityById/:id`
- **Method:** GET
- **Description:** Retrieves a city object by its ID.
- **Response:**
  - `city`: An object containing city details if found, otherwise an empty object.

#### Example Request
```http
GET http://localhost:8080/api/city/cityById/1

```json
{
  "city": {
    "cityName": "Paris",
    "countryName": "France",
    "imgCity": "url_to_image",
    "currencyCoin": "EUR",
    "description": "The capital city of France."
  }
}

### 3. Create a City
- **URL:** `http://localhost:8080/api/city/createdCity`
- **Method:** POST
- **Description:** Creates a new city entry.
- **Request Body:**
  - `cityName` (string): The name of the city.
  - `countryName` (string): The name of the country.
  - `imgCity` (string): A URL to an image of the city.
  - `currencyCoin` (string): The currency used in the city.
  - `description` (string): A description of the city.

#### Example Request
```http
POST http://localhost:8080/api/city/createdCity
Content-Type: application/json

{
  "cityName": "New York",
  "countryName": "USA",
  "imgCity": "url_to_image",
  "currencyCoin": "USD",
  "description": "The largest city in the United States."
}

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mytinerary-back.git

2. Navigate to the project directory:
   ```sh
   cd mytinerary-back-martinVidan

3. Install the dependencies:
   ```sh
    npm install

## Configuration

You need to create a `.env` file in the root directory of the project to store environment variables.

### .env
PORT=(port) URI_MONGO=(MongoDB connection URL)
Replace `(port)` with the port number you want the server to run on and `(MongoDB connection URL)` with your MongoDB database URL.

For example:
PORT=8080 URI_MONGO=mongodb://localhost:27017/mydatabase
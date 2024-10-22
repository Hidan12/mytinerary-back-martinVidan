import "dotenv/config.js"
import "../../config/dataBase.js"
import City from "../City.js"

const cities = [
    {
        cityName: "Tokyo",
        countryName: "Japan",
        imgCity: "https://viajes.nationalgeographic.com.es/medio/2021/01/26/templo-de-asakusa_46a4b335_1200x630.jpg",
        currencyCoin: "Japanese Yen",
        description: "Tokyo is Japan's bustling capital known for its skyscrapers, shopping, and culture."
    },
    {
        cityName: "Bangkok",
        countryName: "Thailand",
        imgCity: "https://www.panavision-tours.com/viajes/bangkok-tailandia/bangkok.jpg",
        currencyCoin: "Thai Baht",
        description: "Bangkok is Thailand's vibrant capital, famous for its street life and cultural landmarks."
    },
    {
        cityName: "Seoul",
        countryName: "South Korea",
        imgCity: "https://colombianabroad.com/wp-content/uploads/seul-alojamiento-feature-1024x768.jpg",
        currencyCoin: "South Korean Won",
        description: "Seoul, the capital of South Korea, is known for its modern skyscrapers and pop culture."
    },
    {
        cityName: "Beijing",
        countryName: "China",
        imgCity: "https://drivemefoody.com/wp-content/uploads/china-beijing-forbidden-city-hall-supreme-harmony-close.jpg",
        currencyCoin: "Chinese Yuan",
        description: "Beijing, China’s massive capital, has history stretching back three millennia."
    },
    {
        cityName: "Rome",
        countryName: "Italy",
        imgCity: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
        currencyCoin: "Euro",
        description: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of history."
    },
    {
        cityName: "Madrid",
        countryName: "Spain",
        imgCity: "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg",
        currencyCoin: "Euro",
        description: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks."
    },
    {
        cityName: "Lisbon",
        countryName: "Portugal",
        imgCity: "https://res.cloudinary.com/lastminute-contenthub/s--3sy466uV--/c_limit,h_999999,w_768/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Europe/Portugal/Lisbon/lisboa_186440843",
        currencyCoin: "Euro",
        description: "Lisbon is Portugal’s hilly, coastal capital city known for its cafe culture and Fado music."
    },
    {
        cityName: "Berlin",
        countryName: "Germany",
        imgCity: "https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg",
        currencyCoin: "Euro",
        description: "Berlin, Germany’s capital, dates to the 13th century and is known for its art scene and modern landmarks."
    },
    {
        cityName: "Cordoba",
        countryName: "Argentina",
        imgCity: "https://deih43ym53wif.cloudfront.net/large_cathedral-cordoba-argentina-shutterstock_1140671330_a570eb940e.jpeg",
        currencyCoin: "Argentine Peso",
        description: "Cordoba is a city in the center of Argentina known for its Spanish colonial architecture."
    },
    {
        cityName: "Medellin",
        countryName: "Colombia",
        imgCity: "https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/medellin/Plaza-Botero-y-el-centro-de-Medellin-800.jpg",
        currencyCoin: "Colombian Peso",
        description: "Medellin is a city in Colombia's Antioquia province known for its pleasant climate and cultural scene."
    },
    {
        cityName: "Cancun",
        countryName: "Mexico",
        imgCity: "https://media.tacdn.com/media/attractions-content--1x-1/12/29/06/2b.jpg",
        currencyCoin: "Mexican Peso",
        description: "Cancun, a Mexican city on the Yucatán Peninsula, bordering the Caribbean Sea, is known for its beaches."
    },
    {
        cityName: "Bariloche",
        countryName: "Argentina",
        imgCity: "https://dfsud.com/dfsud/site/artic/20240724/imag/foto_0000000220240724093103/x64e76978cb654.jpg.pagespeed.ic.SAh8eEbneU.jpg",
        currencyCoin: "Argentine Peso",
        description: "Bariloche is a town in Argentina’s Patagonia region known for its Swiss alpine-style architecture."
    },
    {
        cityName: "Sydney",
        countryName: "Australia",
        imgCity: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
        currencyCoin: "Australian Dollar",
        description: "Sydney, capital of New South Wales, is known for its Sydney Opera House and Harbour Bridge."
    },
    {
        cityName: "New York",
        countryName: "USA",
        imgCity: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
        currencyCoin: "US Dollar",
        description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean."
    },
    {
        cityName: "Paris",
        countryName: "France",
        imgCity: "https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg",
        currencyCoin: "Euro",
        description: "Paris, France's capital, is a major European city and a global center for art, fashion, and culture."
    }
]

City.insertMany(cities)
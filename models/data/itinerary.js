import "dotenv/config.js"
import "../../config/dataBase.js"
import Itinerary from "../Itinerary.js"

const itineraries = [
    // Itineraries for Tokyo
  {
    photoUser: "https://randomuser.me/api/portraits/men/1.jpg",
    photoItinerary: "https://www.japan-guide.com/g18/3009_01.jpg",
    nameUser: "John Doe",
    nameItinerary: "Imperial Palace Tour",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#Tokyo", "#ImperialPalace", "#Tour"],
    city: "67182990e8517e10598ad233"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/2.jpg",
    photoItinerary: "https://www.japan-guide.com/g18/3001_01.jpg",
    nameUser: "Jane Smith",
    nameItinerary: "Shibuya Walking Tour",
    price: 4,
    duration: 2,
    likes: 0,
    hashtags: ["#Tokyo", "#Shibuya", "#WalkingTour"],
    city: "67182990e8517e10598ad233"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/3.jpg",
    photoItinerary: "https://www.japan-guide.com/g18/3002_01.jpg",
    nameUser: "John Doe",
    nameItinerary: "Senso-ji Temple Visit",
    price: 3,
    duration: 1,
    likes: 0,
    hashtags: ["#Tokyo", "#Sensoji", "#TempleVisit"],
    city: "67182990e8517e10598ad233"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/4.jpg",
    photoItinerary: "https://www.japan-guide.com/g18/3003_01.jpg",
    nameUser: "Jane Smith",
    nameItinerary: "Tsukiji Market Tour",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["#Tokyo", "#TsukijiMarket", "#Tour"],
    city: "67182990e8517e10598ad233"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/5.jpg",
    photoItinerary: "https://www.japan-guide.com/g18/3004_01.jpg",
    nameUser: "John Doe",
    nameItinerary: "Shinjuku Night Tour",
    price: 1,
    duration: 4,
    likes: 0,
    hashtags: ["#Tokyo", "#Shinjuku", "#NightTour"],
    city: "67182990e8517e10598ad233"
  },

  // Itineraries for Rome
  {
    photoUser: "https://randomuser.me/api/portraits/men/6.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1724398915575-2bfdbca9efc2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Mark Johnson",
    nameItinerary: "Colosseum Visit",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#Rome", "#Colosseum", "#Visit"],
    city: "67182990e8517e10598ad237"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/7.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1719009767920-533390afd0d4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Anna Williams",
    nameItinerary: "Vatican Tour",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["#Rome", "#Vatican", "#Tour"],
    city: "67182990e8517e10598ad237"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/8.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1725284345590-60a0d181ea17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Paul Brown",
    nameItinerary: "Roman Forum Walk",
    price: 3,
    duration: 2,
    likes: 0,
    hashtags: ["#Rome", "#RomanForum", "#Walk"],
    city: "67182990e8517e10598ad237"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/9.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1562003773-795228bb2aff?q=80&w=1439&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Emily Davis",
    nameItinerary: "Trevi Fountain Tour",
    price: 2,
    duration: 1,
    likes: 0,
    hashtags: ["#Rome", "#TreviFountain", "#Tour"],
    city: "67182990e8517e10598ad237"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/10.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1714687398943-3edbfd43b830?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "David Wilson",
    nameItinerary: "Pantheon Visit",
    price: 1,
    duration: 2,
    likes: 0,
    hashtags: ["#Rome", "#Pantheon", "#Visit"],
    city: "67182990e8517e10598ad237"
  },

  // Itineraries for Bariloche
  {
    photoUser: "https://randomuser.me/api/portraits/men/11.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1686149622301-fdc97709fb48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Carlos Hernandez",
    nameItinerary: "Cerro Catedral Tour",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#Bariloche", "#CerroCatedral", "#Tour"],
    city: "67182990e8517e10598ad23e"
  }, {
    photoUser: "https://randomuser.me/api/portraits/women/12.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1652254168240-c5b207f4ad12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Maria Garcia",
    nameItinerary: "Nahuel Huapi Lake Walk",
    price: 4,
    duration: 2,
    likes: 0,
    hashtags: ["#Bariloche", "#NahuelHuapi", "#LakeWalk"],
    city: "67182990e8517e10598ad23e"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/13.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1727774166350-f39283fa79fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Carlos Hernandez",
    nameItinerary: "Swiss Colony Visit",
    price: 3,
    duration: 1,
    likes: 0,
    hashtags: ["#Bariloche", "#SwissColony", "#Visit"],
    city: "67182990e8517e10598ad23e"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/14.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1495317823589-e67efe1524b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Maria Garcia",
    nameItinerary: "Civic Center Tour",
    price: 2,
    duration: 1,
    likes: 0,
    hashtags: ["#Bariloche", "#CivicCenter", "#Tour"],
    city: "67182990e8517e10598ad23e"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/15.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1612611155301-ac3e1734c91c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Carlos Hernandez",
    nameItinerary: "Arrayanes Forest Excursion",
    price: 1,
    duration: 3,
    likes: 0,
    hashtags: ["#Bariloche", "#ArrayanesForest", "#Excursion"],
    city: "67182990e8517e10598ad23e"
  },

  // Itineraries for New York
  {
    photoUser: "https://randomuser.me/api/portraits/men/16.jpg",
    photoItinerary: "https://plus.unsplash.com/premium_photo-1694475364942-b755ad751a40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Michael Martinez",
    nameItinerary: "Statue of Liberty Tour",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#NewYork", "#StatueOfLiberty", "#Tour"],
    city: "67182990e8517e10598ad240"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/17.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1555109307-323ee867f3ca?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Laura Johnson",
    nameItinerary: "Empire State Building Visit",
    price: 4,
    duration: 2,
    likes: 0,
    hashtags: ["#NewYork", "#EmpireStateBuilding", "#Visit"],
    city: "67182990e8517e10598ad240"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/18.jpg",
    photoItinerary: "https://plus.unsplash.com/premium_photo-1697730064923-dd664fc81d19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Michael Martinez",
    nameItinerary: "Central Park Walk",
    price: 3,
    duration: 1,
    likes: 0,
    hashtags: ["#NewYork", "#CentralPark", "#Walk"],
    city: "67182990e8517e10598ad240"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/19.jpg",
    photoItinerary: "https://images.unsplash.com/26/city-scape.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Laura Johnson",
    nameItinerary: "Brooklyn Bridge Tour",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["#NewYork", "#BrooklynBridge", "#Tour"],
    city: "67182990e8517e10598ad240"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/20.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1620926410022-8f9349b38b3f?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Michael Martinez",
    nameItinerary: "Times Square Visit",
    price: 1,
    duration: 1,
    likes: 0,
    hashtags: ["#NewYork", "#TimesSquare", "#Visit"],
    city: "67182990e8517e10598ad240"
  },

  // Itineraries for Seoul
  {
    photoUser: "https://randomuser.me/api/portraits/men/21.jpg",
    photoItinerary: "https://plus.unsplash.com/premium_photo-1682091707727-33174f11d94d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Brian Kim",
    nameItinerary: "Gyeongbokgung Palace Tour",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#Seoul", "#Gyeongbokgung", "#PalaceTour"],
    city: "67182990e8517e10598ad235"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/22.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1696943420472-f3b026c87478?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Soo Jin Lee",
    nameItinerary: "Bukchon Hanok Village Walk",
    price: 4,
    duration: 2,
    likes: 0,
    hashtags: ["#Seoul", "#Bukchon", "#HanokVillage"],
    city: "67182990e8517e10598ad235"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/23.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1645451350581-2aebd3932286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Brian Kim",
    nameItinerary: "Namsan Seoul Tower Visit",
    price: 3,
    duration: 1,
    likes: 0,
    hashtags: ["#Seoul", "#NamsanTower", "#Visit"],
    city: "67182990e8517e10598ad235"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/24.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1622616333397-4b61dcc54cae?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Soo Jin Lee",
    nameItinerary: "Myeongdong Shopping Tour",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["#Seoul", "#Myeongdong", "#ShoppingTour"],
    city: "67182990e8517e10598ad235"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/25.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1550458564-1c62225e810f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Brian Kim",
    nameItinerary: "Dongdaemun Design Plaza Tour",
    price: 1,
    duration: 1,
    likes: 0,
    hashtags: ["#Seoul", "#Dongdaemun", "#DesignPlaza"],
    city: "67182990e8517e10598ad235"
  },

  // Itineraries for Bangkok
  {
    photoUser: "https://randomuser.me/api/portraits/men/26.jpg",
    photoItinerary: "https://plus.unsplash.com/premium_photo-1661882477461-20d16af70819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "James Lee",
    nameItinerary: "Grand Palace Visit",
    price: 5,
    duration: 3,
    likes: 0,
    hashtags: ["#Bangkok", "#GrandPalace", "#Visit"],
    city: "67182990e8517e10598ad234"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/27.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1655815917186-76a5e56b58d5?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Linda Kim",
    nameItinerary: "Wat Arun Temple Tour",
    price: 4,
    duration: 2,
    likes: 0,
    hashtags: ["#Bangkok", "#WatArun", "#TempleTour"],
    city: "67182990e8517e10598ad234"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/28.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1644130153449-be672c1cbff3?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "James Lee",
    nameItinerary: "Khao San Road Walk",
    price: 3,
    duration: 1,
    likes: 0,
    hashtags: ["#Bangkok", "#KhaoSanRoad", "#Walk"],
    city: "67182990e8517e10598ad234"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/women/29.jpg",
    photoItinerary: "https://images.unsplash.com/photo-1677943356981-bc48941c5ba9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "Linda Kim",
    nameItinerary: "Chatuchak Market Tour",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["#Bangkok", "#Chatuchak", "#MarketTour"],
    city: "67182990e8517e10598ad234"
  },
  {
    photoUser: "https://randomuser.me/api/portraits/men/30.jpg",
    photoItinerary: "https://plus.unsplash.com/premium_photo-1697729409022-fb51bad01cb1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    nameUser: "James Lee",
    nameItinerary: "Chao Phraya River Cruise",
    price: 1,
    duration: 2,
    likes: 0,
    hashtags: ["#Bangkok", "#ChaoPhraya", "#RiverCruise"],
    city: "67182990e8517e10598ad234"
  }
]



Itinerary.insertMany(itineraries)


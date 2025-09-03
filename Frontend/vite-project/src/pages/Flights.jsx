// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// // Airline mapping (code → {name, logo})
// const airlineData = {
//   "6E": {
//     name: "IndiGo",
//     logo: "https://www.carhire4lower.com/airlines/india-airlines/india-airlines-images/indigo-airlines-logo.jpg",
//   },
//   "I5": {
//     name: "AirAsia India",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png",
//   },
//   "UK": {
//     name: "Vistara",
//     logo: "https://thehardcopy.co/wp-content/uploads/Vistara-Images-7-1200x805.png",
//   },
//   "AI": {
//     name: "Air India",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRWdMJRkVX3xT4FCenWUNKX0CQjwCZYyO-w&s",
//   },
//   "SG": {
//     name: "SpiceJet",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQk4NmTdH2TKbcFQ2Tbo5z48TL3u96hoF1A&s",
//   },
//   "G8": {
//     name: "Go First",
//     logo: "https://pbs.twimg.com/profile_images/1572439908580753412/ArZ3DUno_400x400.jpg",
//   },
//   "EK": {
//     name: "Emirates",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XbBFCmpH6qPwvjjzNTsfhUVSi0sg2VT61A&s",
//   },
//   "QR": {
//     name: "Qatar Airways",
//     logo: "https://static.vecteezy.com/system/resources/previews/055/210/896/non_2x/qatar-airways-logo-square-rounded-qatar-airways-logo-qatar-airways-logo-free-download-free-png.png",
//   },
//   "EY": {
//     name: "Etihad Airways",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/EY-Etihad-Airways-new-logo-En.jpg/1280px-EY-Etihad-Airways-new-logo-En.jpg",
//   },
// };

// // Helper: duration ko readable format me convert kare
// const formatDuration = (duration) => {
//   if (!duration) return "";
//   const hours = duration.match(/(\d+)H/);
//   const minutes = duration.match(/(\d+)M/);
//   return `${hours ? hours[1] + "h " : ""}${minutes ? minutes[1] + "m" : ""}`;
// };

// const Flights = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const flights = location.state?.flights || [];

//   const handleClick = (flight) => {
//     navigate("/flight-details", { state: { flight } });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 w-full md:w-3/5 mx-auto">
//       <h1 className="text-2xl font-bold mb-4 text-center">✈️ Available Flights</h1>

//       {flights.length === 0 ? (
//         <p>No flights found.</p>
//       ) : (
//         <div className="grid gap-4">
//           {flights.map((flight, i) => {
//             const firstSegment = flight.itineraries[0].segments[0];
//             const lastSegment = flight.itineraries[0].segments.at(-1);

//             const airlineCode = firstSegment.carrierCode;
//             const airline = airlineData[airlineCode];
//             if (!airline) return null;

//             const duration = formatDuration(flight.itineraries[0].duration);

//             return (
//               <div
//                 key={i}
//                 onClick={() => handleClick(flight)}
//                 className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center cursor-pointer hover:shadow-lg transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={airline.logo}
//                     alt={airline.name}
//                     className="w-10 h-10 object-contain"
//                   />
//                   <div>
//                     <p className="font-semibold">{airline.name}</p>
//                     <p className="text-sm text-gray-500">
//                       {firstSegment.departure.iataCode} (
//                       {firstSegment.departure.at.slice(11, 16)}) →{" "}
//                       {lastSegment.arrival.iataCode} (
//                       {lastSegment.arrival.at.slice(11, 16)})
//                     </p>
//                     <p className="text-xs text-gray-600">⏱ {duration}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-bold text-blue-600">₹{flight.price.total}</p>
//                   <p className="text-sm">({flight.price.currency})</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Flights;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Plane } from "lucide-react"; // icons

// Airline mapping (code → {name, logo})
const airlineData = {
  "6E": {
    name: "IndiGo",
    logo: "https://www.carhire4lower.com/airlines/india-airlines/india-airlines-images/indigo-airlines-logo.jpg",
  },
  I5: {
    name: "AirAsia India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg",
  },
  UK: {
    name: "Vistara",
    logo: "https://thehardcopy.co/wp-content/uploads/Vistara-Images-7-1200x805.png",
  },
  AI: {
    name: "Air India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRWdMJRkVX3xT4FCenWUNKX0CQjwCZYyO-w&s",
  },
  SG: {
    name: "SpiceJet",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQk4NmTdH2TKbcFQ2Tbo5z48TL3u96hoF1A&s",
  },
  G8: {
    name: "Go First",
    logo: "https://pbs.twimg.com/profile_images/1572439908580753412/ArZ3DUno_400x400.jpg",
  },
  EK: {
    name: "Emirates",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XbBFCmpH6qPwvjjzNTsfhUVSi0sg2VT61A&s",
  },
  QR: {
    name: "Qatar Airways",
    logo: "https://static.vecteezy.com/system/resources/previews/055/210/896/non_2x/qatar-airways-logo-square-rounded-qatar-airways-logo-qatar-airways-logo-free-download-free-png.png",
  },
  EY: {
    name: "Etihad Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/EY-Etihad-Airways-new-logo-En.jpg",
  },
};

// Airport Names Mapping
const airportNames = {
  // 🇮🇳 India
  DEL: "Delhi - Indira Gandhi International Airport",
  BOM: "Mumbai - Chhatrapati Shivaji Maharaj International Airport",
  BLR: "Bengaluru - Kempegowda International Airport",
  HYD: "Hyderabad - Rajiv Gandhi International Airport",
  MAA: "Chennai - Chennai International Airport",
  CCU: "Kolkata - Netaji Subhash Chandra Bose International Airport",
  PNQ: "Pune - Lohegaon Airport",
  JAI: "Jaipur - Jaipur International Airport",
  AMD: "Ahmedabad - Sardar Vallabhbhai Patel International Airport",
  GOI: "Goa - Dabolim Airport",
  IXC: "Chandigarh - Shaheed Bhagat Singh International Airport",
  LKO: "Lucknow - Chaudhary Charan Singh International Airport",
  PAT: "Patna - Jay Prakash Narayan Airport",
  VNS: "Varanasi - Lal Bahadur Shastri Airport",
  BBI: "Bhubaneswar - Biju Patnaik International Airport",
  TRV: "Thiruvananthapuram - Trivandrum International Airport",
  COK: "Kochi - Cochin International Airport",
  IXB: "Bagdogra - Bagdogra Airport",
  GAU: "Guwahati - Lokpriya Gopinath Bordoloi International Airport",
  SXR: "Srinagar - Sheikh ul-Alam International Airport",
  IXJ: "Jammu - Jammu Airport",

  // 🌍 International
  JFK: "New York - John F. Kennedy International Airport (USA)",
  EWR: "Newark Liberty International Airport (USA)",
  LAX: "Los Angeles International Airport (USA)",
  ORD: "Chicago O'Hare International Airport (USA)",
  LHR: "London - Heathrow Airport (UK)",
  LGW: "London - Gatwick Airport (UK)",
  CDG: "Paris - Charles de Gaulle Airport (France)",
  FRA: "Frankfurt Airport (Germany)",
  MUC: "Munich Airport (Germany)",
  AMS: "Amsterdam - Schiphol Airport (Netherlands)",
  DXB: "Dubai International Airport (UAE)",
  AUH: "Abu Dhabi International Airport (UAE)",
  DOH: "Doha - Hamad International Airport (Qatar)",
  SIN: "Singapore Changi Airport",
  KUL: "Kuala Lumpur International Airport (Malaysia)",
  HKG: "Hong Kong International Airport",
  BKK: "Bangkok - Suvarnabhumi Airport (Thailand)",
  SYD: "Sydney Kingsford Smith International Airport (Australia)",
  MEL: "Melbourne Tullamarine International Airport (Australia)",
  NRT: "Tokyo Narita International Airport (Japan)",
  HND: "Tokyo Haneda International Airport (Japan)",
  ICN: "Seoul - Incheon International Airport (South Korea)",
  PEK: "Beijing Capital International Airport (China)",
  PVG: "Shanghai Pudong International Airport (China)",
};

// Helper: duration ko readable format me convert kare
const formatDuration = (duration) => {
  if (!duration) return "";
  const hours = duration.match(/(\d+)H/);
  const minutes = duration.match(/(\d+)M/);
  return `${hours ? hours[1] + "h " : ""}${minutes ? minutes[1] + "m" : ""}`;
};

// Helper: airport full name
const getAirportName = (code) => airportNames[code] || code;

const Flights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flights = location.state?.flights || [];

  const handleClick = (flight) => {
    navigate("/flight-details", { state: { flight } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 w-full md:w-3/5 mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-4 text-blue-600 hover:text-blue-800 transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        ✈️ Available Flights
      </h1>

      {/* Top route heading */}
      {flights.length > 0 &&
        (() => {
          const firstFlight = flights[0];
          const firstSegment = firstFlight.itineraries[0].segments[0];
          const lastSegment = firstFlight.itineraries[0].segments.at(-1);

          return (
            <h2 className="text-lg font-semibold text-center mb-8 text-gray-800">
              {getAirportName(firstSegment.departure.iataCode)}{" "}
              <Plane className="inline-block text-indigo-600 mx-2" size={20} />{" "}
              {getAirportName(lastSegment.arrival.iataCode)} <br />
              <span className="text-sm text-gray-500">
                ({firstSegment.departure.at.slice(11, 16)} →{" "}
                {lastSegment.arrival.at.slice(11, 16)})
              </span>
            </h2>
          );
        })()}

      {/* Flights List */}
      {flights.length === 0 ? (
        <p className="text-center text-gray-600">No flights found.</p>
      ) : (
        <div className="grid gap-5">
          {flights.map((flight, i) => {
            const firstSegment = flight.itineraries[0].segments[0];
            const lastSegment = flight.itineraries[0].segments.at(-1);

            const airlineCode = firstSegment.carrierCode;
            const airline = airlineData[airlineCode];
            if (!airline) return null;

            const duration = formatDuration(flight.itineraries[0].duration);

            return (
              <div
                key={i}
                onClick={() => handleClick(flight)}
                className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center cursor-pointer 
                           hover:shadow-xl hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="w-12 h-12 object-contain "
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{airline.name}</p>
                    <p className="text-sm text-gray-600">
                      {getAirportName(firstSegment.departure.iataCode)} (
                      {firstSegment.departure.at.slice(11, 16)}){" "}
                      <Plane className="inline-block text-indigo-500 mx-1" size={16} />{" "}
                      {getAirportName(lastSegment.arrival.iataCode)} (
                      {lastSegment.arrival.at.slice(11, 16)})
                    </p>
                    <p className="text-xs text-gray-500 mt-1">⏱ {duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-indigo-600 text-lg">
                    ₹{flight.price.total}
                  </p>
                  <p className="text-sm text-gray-500">
                    ({flight.price.currency})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Flights;

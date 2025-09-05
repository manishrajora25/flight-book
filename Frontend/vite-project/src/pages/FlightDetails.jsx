// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const airportNames = {
//     // 🇮🇳 India
//     DEL: "Delhi - Indira Gandhi International Airport",
//     BOM: "Mumbai - Chhatrapati Shivaji Maharaj International Airport",
//     BLR: "Bengaluru - Kempegowda International Airport",
//     HYD: "Hyderabad - Rajiv Gandhi International Airport",
//     MAA: "Chennai - Chennai International Airport",
//     CCU: "Kolkata - Netaji Subhash Chandra Bose International Airport",
//     PNQ: "Pune - Lohegaon Airport",
//     JAI: "Jaipur - Jaipur International Airport",
//     AMD: "Ahmedabad - Sardar Vallabhbhai Patel International Airport",
//     GOI: "Goa - Dabolim Airport",
//     IXC: "Chandigarh - Shaheed Bhagat Singh International Airport",
//     LKO: "Lucknow - Chaudhary Charan Singh International Airport",
//     PAT: "Patna - Jay Prakash Narayan Airport",
//     VNS: "Varanasi - Lal Bahadur Shastri Airport",
//     BBI: "Bhubaneswar - Biju Patnaik International Airport",
//     TRV: "Thiruvananthapuram - Trivandrum International Airport",
//     COK: "Kochi - Cochin International Airport",
//     IXB: "Bagdogra - Bagdogra Airport",
//     GAU: "Guwahati - Lokpriya Gopinath Bordoloi International Airport",
//     SXR: "Srinagar - Sheikh ul-Alam International Airport",
//     IXJ: "Jammu - Jammu Airport",
  
//     // 🌍 International
//     JFK: "New York - John F. Kennedy International Airport (USA)",
//     EWR: "Newark Liberty International Airport (USA)",
//     LAX: "Los Angeles International Airport (USA)",
//     ORD: "Chicago O'Hare International Airport (USA)",
//     LHR: "London - Heathrow Airport (UK)",
//     LGW: "London - Gatwick Airport (UK)",
//     CDG: "Paris - Charles de Gaulle Airport (France)",
//     FRA: "Frankfurt Airport (Germany)",
//     MUC: "Munich Airport (Germany)",
//     AMS: "Amsterdam - Schiphol Airport (Netherlands)",
//     DXB: "Dubai International Airport (UAE)",
//     AUH: "Abu Dhabi International Airport (UAE)",
//     DOH: "Doha - Hamad International Airport (Qatar)",
//     SIN: "Singapore Changi Airport",
//     KUL: "Kuala Lumpur International Airport (Malaysia)",
//     HKG: "Hong Kong International Airport",
//     BKK: "Bangkok - Suvarnabhumi Airport (Thailand)",
//     SYD: "Sydney Kingsford Smith International Airport (Australia)",
//     MEL: "Melbourne Tullamarine International Airport (Australia)",
//     NRT: "Tokyo Narita International Airport (Japan)",
//     HND: "Tokyo Haneda International Airport (Japan)",
//     ICN: "Seoul - Incheon International Airport (South Korea)",
//     PEK: "Beijing Capital International Airport (China)",
//     PVG: "Shanghai Pudong International Airport (China)"
//   };
  

// const FlightDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const flight = location.state?.flight;

//   if (!flight) {
//     return <p>No flight details found.</p>;
//   }

//   const segments = flight.itineraries[0].segments;
//   const firstSegment = segments[0];
//   const lastSegment = segments.at(-1);

//   // Helper function to get full name
//   const getAirportName = (code) => {
//     return airportNames[code] || code;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <div className="w-full md:w-3/5">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
//         >
//           ← Back
//         </button>
  
//         {/* Flight Summary Header */}
//         <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//           <h1 className="text-xl font-bold text-gray-800">
//             {getAirportName(firstSegment.departure.iataCode)} →{" "}
//             {getAirportName(lastSegment.arrival.iataCode)}
//           </h1>
//           <p className="text-sm text-gray-600">
//             {flight.itineraries[0].segments.length - 1} Stop ·{" "}
//             {flight.itineraries[0].duration.replace("PT", "").toLowerCase()}
//           </p>
//           <p className="text-right font-semibold text-blue-600 text-lg">
//             ₹{flight.price.total} {flight.price.currency}
//           </p>
//         </div>
  
//         {/* Segments */}
//         <div className="space-y-6">
//           {segments.map((seg, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
//             >
//               <div className="flex items-center justify-between relative">
//                 {/* Departure */}
//                 <div className="w-1/3 text-left">
//                   <p className="text-2xl font-bold text-gray-800">
//                     {seg.departure.iataCode}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {getAirportName(seg.departure.iataCode)}
//                   </p>
//                   <p className="text-md font-semibold text-blue-600 mt-1">
//                     {seg.departure.at.slice(11, 16)}
//                   </p>
//                 </div>
  
//                 {/* Timeline Center */}
//                 <div className="w-1/3 flex flex-col items-center">
//                   <div className="relative flex items-center w-full">
//                     <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
//                     <span className="mx-2 text-blue-600 text-lg">✈️</span>
//                     <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Duration: {seg.duration.replace("PT", "").toLowerCase()}
//                   </p>
//                 </div>
  
//                 {/* Arrival */}
//                 <div className="w-1/3 text-right">
//                   <p className="text-2xl font-bold text-gray-800">
//                     {seg.arrival.iataCode}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {getAirportName(seg.arrival.iataCode)}
//                   </p>
//                   <p className="text-md font-semibold text-green-600 mt-1">
//                     {seg.arrival.at.slice(11, 16)}
//                   </p>
//                 </div>
//               </div>
  
//               {/* Flight Info + Baggage */}
//               <div className="mt-4 flex justify-between text-xs text-gray-600">
//                 <p>
//                   Flight {seg.carrierCode} {seg.number} | Aircraft:{" "}
//                   {seg.aircraft.code}
//                 </p>
//                 <div className="flex gap-4">
//                   <p>🛄 Cabin: 7Kg (1 piece only) / Adult</p>
//                   <p>🎒 Check-In: 15Kg (1 piece only) / Adult</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         {/* Continue Button */}
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={() => alert("Proceeding to traveller details...")}
//             className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
//           >
//             Continue →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }  

// export default FlightDetails;











import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


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
  PVG: "Shanghai Pudong International Airport (China)"
};

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


const FlightDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("yes");
  const flight = location.state?.flight;

  // Traveller details state
  const [travellers, setTravellers] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      gender: "MALE",
      email: "",
      phone: "",
    },
  ]);

  if (!flight) {
    return <p>No flight details found.</p>;
  }

  const segments = flight.itineraries[0].segments;
  const firstSegment = segments[0];
  const lastSegment = segments.at(-1);

  // Helper function to get full airport name
  const getAirportName = (code) => {
    return airportNames[code] || code;
  };

  // Add new traveller
  const addTraveller = () => {
    setTravellers([
      ...travellers,
      {
        id: travellers.length + 1,
        firstName: "",
        lastName: "",
        gender: "MALE",
        email: "",
        phone: "",
      },
    ]);
  };

  // Update traveller details
  const handleChange = (id, field, value) => {
    setTravellers(
      travellers.map((t) =>
        t.id === id ? { ...t, [field]: value } : t
      )
    );
  };


  const removeTraveller = (id) => {
    setTravellers((prev) => prev.filter((trav) => trav.id !== id));
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full md:w-3/5">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          ← Back
        </button>

        {/* Flight Summary */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            {getAirportName(firstSegment.departure.iataCode)} →{" "}
            {getAirportName(lastSegment.arrival.iataCode)}
          </h1>
          <p className="text-sm text-gray-600">
            {flight.itineraries[0].segments.length - 1} Stop ·{" "}
            {flight.itineraries[0].duration.replace("PT", "").toLowerCase()}
          </p>
          <p className="text-right font-semibold text-blue-600 text-lg">
            ₹{flight.price.total} {flight.price.currency}
          </p>
        </div>

        {/* Traveller Details */}
  

        {/* Flight Segments */}
        <div className="space-y-6">
          {segments.map((seg, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between relative">
                {/* Departure */}
                <div className="w-1/3 text-left">
                  <p className="text-2xl font-bold text-gray-800">
                    {seg.departure.iataCode}
                  </p>
                  <p className="text-sm text-gray-500">
                    {getAirportName(seg.departure.iataCode)}
                  </p>
                  <p className="text-md font-semibold text-blue-600 mt-1">
                    {seg.departure.at.slice(11, 16)}
                  </p>
                </div>

                {/* Timeline */}
                <div className="w-1/3 flex flex-col items-center">
                  <div className="relative flex items-center w-full">
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                    <span className="mx-2 text-blue-600 text-lg">✈️</span>
                    <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Duration: {seg.duration.replace("PT", "").toLowerCase()}
                  </p>
                </div>

                {/* Arrival */}
                <div className="w-1/3 text-right">
                  <p className="text-2xl font-bold text-gray-800">
                    {seg.arrival.iataCode}
                  </p>
                  <p className="text-sm text-gray-500">
                    {getAirportName(seg.arrival.iataCode)}
                  </p>
                  <p className="text-md font-semibold text-green-600 mt-1">
                    {seg.arrival.at.slice(11, 16)}
                  </p>
                </div>
              </div>


              <div className="mt-4 flex justify-between text-xs text-gray-600">
                 <p>
                   Flight {seg.carrierCode} {seg.number} | Aircraft:{" "}
                   {seg.aircraft.code}
                 </p>
                 <div className="flex gap-4">
                   <p>🛄 Cabin-Baggage: 7Kg (1 piece only) / Adult</p>
                   <p>🎒 Check-In-Baggage: 15Kg (1 piece only) / Adult</p>
                 </div>
               </div>
              

              {/* Flight Info */}
              <div className="mt-4 flex justify-between items-center text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <img
                    src={airlineData[seg.carrierCode]?.logo}
                    alt={airlineData[seg.carrierCode]?.name}
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-sm font-semibold">
                    {airlineData[seg.carrierCode]?.name} {seg.carrierCode}{" "}
                    {seg.number} | Aircraft: {seg.aircraft.code}
                  </p>
                </div>
                <div className="text-sm font-semibold text-blue-600">
                  {flight.travelerPricings?.[0]?.fareDetailsBySegment?.[0]
                    ?.cabin || "Economy"}
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="bg-white shadow-md rounded-lg p-4 mb-6 mt-[20px]">
  <h2 className="text-lg font-bold text-gray-800 mb-4">
    Traveller Details
  </h2>

  {travellers.map((trav, idx) => (
    <div
      key={trav.id}
      className="border rounded-lg p-4 mb-4 bg-gray-50 relative"
    >
      {/* Adult Title with Remove Button */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-blue-600">
          ADULT {idx + 1}
        </h3>
        {travellers.length > 1 && (
          <button
            onClick={() => removeTraveller(trav.id)}
            className="text-red-500 text-sm font-medium hover:underline"
          >
            Remove
          </button>
        )}
      </div>

      {/* Name Inputs */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <input
          type="text"
          placeholder="First Name"
          value={trav.firstName}
          onChange={(e) =>
            handleChange(trav.id, "firstName", e.target.value)
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={trav.lastName}
          onChange={(e) =>
            handleChange(trav.id, "lastName", e.target.value)
          }
          className="border p-2 rounded"
        />
      </div>

      {/* Gender */}
      <div className="flex gap-4 mb-3">
        <label>
          <input
            type="radio"
            checked={trav.gender === "MALE"}
            onChange={() => handleChange(trav.id, "gender", "MALE")}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            checked={trav.gender === "FEMALE"}
            onChange={() => handleChange(trav.id, "gender", "FEMALE")}
          />{" "}
          Female
        </label>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          placeholder="Email (optional)"
          value={trav.email}
          onChange={(e) =>
            handleChange(trav.id, "email", e.target.value)
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Mobile No (optional)"
          value={trav.phone}
          onChange={(e) =>
            handleChange(trav.id, "phone", e.target.value)
          }
          className="border p-2 rounded"
        />
      </div>
    </div>
  ))}

  {/* Add New Adult */}
  <button
    onClick={addTraveller}
    className="text-blue-600 font-semibold hover:underline"
  >
    + Add New Adult
  </button>
</div>




<div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
          <span className="text-xl">🛡️</span> Trip Secure
        </h2>
        <p className="text-gray-800 font-semibold">
          ₹ 249 <span className="text-sm text-gray-500">/Traveller (18% GST included)</span>
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-md">
          <span className="text-blue-600">📦</span>
          <p className="text-sm font-medium">24x7 support <br /> Baggage Assistance</p>
        </div>
        <div className="flex items-center gap-2 bg-red-50 p-3 rounded-md">
          <span className="text-red-600">❤️</span>
          <p className="text-sm font-medium">Flat ₹ 50,000 <br /> Personal Accident</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-md">
          <span className="text-green-600">🧳</span>
          <p className="text-sm font-medium">Flat ₹ 1,200 <br /> Loss of Checked-In Baggage</p>
        </div>
      </div>

      <div className="text-right mb-4">
        <button className="text-blue-600 text-sm font-semibold hover:underline">
          View All Benefits →
        </button>
      </div>

      {/* Radio Options */}
      <p className="text-gray-800 font-medium mb-2">
        Recommended for your travel within India
      </p>
      <div className="space-y-2 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={selected === "yes"}
            onChange={() => setSelected("yes")}
          />
          <span>Yes, Secure my trip.</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={selected === "no"}
            onChange={() => setSelected("no")}
          />
          <span>No, I will book without trip secure.</span>
        </label>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 border rounded-md text-sm bg-gray-50">
          <p className="italic text-gray-700">
            "Your willingness to go above and beyond what was expected made a significant
            difference in my ability..."
          </p>
          <p className="mt-2 text-xs font-semibold text-gray-600">– Amit Paul</p>
        </div>
        <div className="p-3 border rounded-md text-sm bg-gray-50">
          <p className="italic text-gray-700">
            "Wow, the claim settlement was incredibly fast. Thank you so much! Such a smooth
            experience..."
          </p>
          <p className="mt-2 text-xs font-semibold text-gray-600">– Prateek Keshari</p>
        </div>
        <div className="p-3 border rounded-md text-sm bg-gray-50">
          <p className="italic text-gray-700">
            "This is the best service I’ve received, very helpful in claims..."
          </p>
          <p className="mt-2 text-xs font-semibold text-gray-600">– Karthik Ritesh</p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-500">
        Trip Secure is non-refundable. By selecting it, I confirm all travelers are Indian
        nationals, aged 6 months to 90 years, and accept the{" "}
        <span className="text-blue-600 underline cursor-pointer">T&Cs</span>.
      </p>
    </div>


        {/* Continue Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => alert(JSON.stringify(travellers, null, 2))}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

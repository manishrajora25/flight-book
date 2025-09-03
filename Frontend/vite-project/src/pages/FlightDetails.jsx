import React from "react";
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
  

const FlightDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;

  if (!flight) {
    return <p>No flight details found.</p>;
  }

  const segments = flight.itineraries[0].segments;
  const firstSegment = segments[0];
  const lastSegment = segments.at(-1);

  // Helper function to get full name
  const getAirportName = (code) => {
    return airportNames[code] || code;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 flex flex-col items-center">
    <div className="w-full md:w-3/5">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-3 bg-white text-gray-700 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 font-medium"
      >
        ← Back
      </button>
  
      {/* Flight Summary Header */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          <span className="text-blue-600">{getAirportName(firstSegment.departure.iataCode)}</span> 
          <span className="mx-3 text-gray-400">→</span>
          <span className="text-green-600">{getAirportName(lastSegment.arrival.iataCode)}</span>
        </h1>
        <p className="text-sm text-gray-600 mb-3">
          {flight.itineraries[0].segments.length - 1} Stop ·{" "}
          {flight.itineraries[0].duration.replace("PT", "").toLowerCase()}
        </p>
        <div className="text-right">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg inline-block">
            <p className="text-2xl font-bold">₹{flight.price.total} {flight.price.currency}</p>
          </div>
        </div>
      </div>
  
      {/* Segments */}
      <div className="space-y-6">
        {segments.map((seg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between relative">
              {/* Departure */}
              <div className="w-1/3 text-left">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {seg.departure.iataCode}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {getAirportName(seg.departure.iataCode)}
                  </p>
                  <p className="text-lg font-bold text-gray-800 mt-2 bg-blue-100 px-3 py-1 rounded-lg inline-block">
                    {seg.departure.at.slice(11, 16)}
                  </p>
                </div>
              </div>
  
              {/* Timeline Center */}
              <div className="w-1/3 flex flex-col items-center px-4">
                <div className="relative flex items-center w-full mb-3">
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                  <div className="mx-3 bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full shadow-lg">
                    <span className="text-white text-lg">✈️</span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 font-medium">
                    Duration: {seg.duration.replace("PT", "").toLowerCase()}
                  </p>
                </div>
              </div>
  
              {/* Arrival */}
              <div className="w-1/3 text-right">
                <div className="bg-green-50 rounded-lg p-4 border-r-4 border-green-500">
                  <p className="text-3xl font-bold text-green-600 mb-1">
                    {seg.arrival.iataCode}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {getAirportName(seg.arrival.iataCode)}
                  </p>
                  <p className="text-lg font-bold text-gray-800 mt-2 bg-green-100 px-3 py-1 rounded-lg inline-block">
                    {seg.arrival.at.slice(11, 16)}
                  </p>
                </div>
              </div>
            </div>
  
            {/* Flight Info + Baggage */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">
                    Flight {seg.carrierCode} {seg.number} | Aircraft: {seg.aircraft.code}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                    <p className="text-sm font-medium text-blue-700">🛄 Cabin: 7Kg</p>
                  </div>
                  <div className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
                    <p className="text-sm font-medium text-purple-700">🎒 Check-In: 15Kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Continue Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => alert("Proceeding to traveller details...")}
          className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:-translate-y-2 transform"
        >
          Continue →
        </button>
      </div>
    </div>
  </div>
  );
}  

export default FlightDetails;

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full md:w-3/5">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          ← Back
        </button>
  
        {/* Flight Summary Header */}
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
  
        {/* Segments */}
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
  
                {/* Timeline Center */}
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
  
              {/* Flight Info + Baggage */}
              <div className="mt-4 flex justify-between text-xs text-gray-600">
                <p>
                  Flight {seg.carrierCode} {seg.number} | Aircraft:{" "}
                  {seg.aircraft.code}
                </p>
                <div className="flex gap-4">
                  <p>🛄 Cabin: 7Kg</p>
                  <p>🎒 Check-In: 15Kg</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Continue Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => alert("Proceeding to traveller details...")}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}  

export default FlightDetails;

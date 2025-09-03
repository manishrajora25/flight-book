import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


  

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

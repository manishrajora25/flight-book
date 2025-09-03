import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const iataCodes = [
  // 🇮🇳 India
  { code: "DEL", city: "Delhi" },
  { code: "BOM", city: "Mumbai" },
  { code: "BLR", city: "Bengaluru" },
  { code: "HYD", city: "Hyderabad" },
  { code: "MAA", city: "Chennai" },
  { code: "CCU", city: "Kolkata" },
  { code: "PNQ", city: "Pune" },
  { code: "JAI", city: "Jaipur" },
  { code: "AMD", city: "Ahmedabad" },
  { code: "GOI", city: "Goa (Dabolim)" },
  { code: "IXC", city: "Chandigarh" },
  { code: "LKO", city: "Lucknow" },
  { code: "PAT", city: "Patna" },
  { code: "VNS", city: "Varanasi" },
  { code: "BBI", city: "Bhubaneswar" },
  { code: "TRV", city: "Thiruvananthapuram" },
  { code: "COK", city: "Kochi" },
  { code: "IXB", city: "Bagdogra" },
  { code: "GAU", city: "Guwahati" },
  { code: "SXR", city: "Srinagar" },
  { code: "IXJ", city: "Jammu" },

  // 🌍 International
  { code: "JFK", city: "New York (USA)" },
  { code: "EWR", city: "Newark (USA)" },
  { code: "LAX", city: "Los Angeles (USA)" },
  { code: "ORD", city: "Chicago O'Hare (USA)" },
  { code: "LHR", city: "London Heathrow (UK)" },
  { code: "LGW", city: "London Gatwick (UK)" },
  { code: "CDG", city: "Paris Charles de Gaulle (France)" },
  { code: "FRA", city: "Frankfurt (Germany)" },
  { code: "MUC", city: "Munich (Germany)" },
  { code: "AMS", city: "Amsterdam (Netherlands)" },
  { code: "DXB", city: "Dubai (UAE)" },
  { code: "AUH", city: "Abu Dhabi (UAE)" },
  { code: "DOH", city: "Doha (Qatar)" },
  { code: "SIN", city: "Singapore" },
  { code: "KUL", city: "Kuala Lumpur (Malaysia)" },
  { code: "HKG", city: "Hong Kong" },
  { code: "BKK", city: "Bangkok (Thailand)" },
  { code: "SYD", city: "Sydney (Australia)" },
  { code: "MEL", city: "Melbourne (Australia)" },
  { code: "NRT", city: "Tokyo Narita (Japan)" },
  { code: "HND", city: "Tokyo Haneda (Japan)" },
  { code: "ICN", city: "Seoul Incheon (South Korea)" },
  { code: "PEK", city: "Beijing Capital (China)" },
  { code: "PVG", city: "Shanghai Pudong (China)" }
];

const Home = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    travelClass: "ECONOMY",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toUpperCase() });
  };

  const getSuggestions = (input) => {
    if (!input) return [];
    return iataCodes.filter(
      (item) =>
        item.code.startsWith(input.toUpperCase()) ||
        item.city.toLowerCase().includes(input.toLowerCase())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/flights/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);
      

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Search failed");
      }

      // ✅ Navigate to Flights page with results
      navigate("/flights", { state: { flights: data.data } });
    } catch (err) {
      setError(err.message);
      console.error("Frontend Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center px-4">
      {/* Search Form */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl mb-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          ✈️ Search Flights
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* From */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">From</label>
            <input
              type="text"
              name="from"
              placeholder="DEL"
              value={formData.from}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
            {getSuggestions(formData.from).length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto z-10">
                {getSuggestions(formData.from).map((item) => (
                  <div
                    key={item.code}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      setFormData({ ...formData, from: item.code })
                    }
                  >
                    <span className="font-bold">{item.code}</span> → {item.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* To */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              type="text"
              name="to"
              placeholder="BOM"
              value={formData.to}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
            {getSuggestions(formData.to).length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto z-10">
                {getSuggestions(formData.to).map((item) => (
                  <div
                    key={item.code}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      setFormData({ ...formData, to: item.code })
                    }
                  >
                    <span className="font-bold">{item.code}</span> → {item.city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* Return Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-sm font-medium mb-1">Passengers</label>
            <input
              type="number"
              name="passengers"
              min="1"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* Travel Class */}
          <div>
            <label className="block text-sm font-medium mb-1">Class</label>
            <select
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="ECONOMY">Economy</option>
              <option value="PREMIUM_ECONOMY">Premium Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Searching..." : "🔍 Search Flights"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Home;

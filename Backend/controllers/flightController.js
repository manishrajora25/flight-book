import Amadeus from "amadeus";

const createAmadeusClient = () =>
  new Amadeus({
    clientId: process.env.AMADEUS_API_KEY,
    clientSecret: process.env.AMADEUS_API_SECRET,
  });

export const searchFlights = async (req, res) => {
  try {
    const { from, to, departureDate, passengers = 1, travelClass } = req.body;

    if (!from || !to || !departureDate) {
      return res.status(400).json({ success: false, message: "from, to and departureDate are required" });
    }

    const amadeus = createAmadeusClient();

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: from,
      destinationLocationCode: to,
      departureDate,
      adults: String(passengers),
      travelClass,
      currencyCode: "INR",
      max: "15",
    });

    // response.data is the offers array
    return res.json({ success: true, data: response.data });
  } catch (err) {
    console.error("❌ Flight search error:", err?.response?.data || err.message || err);
    return res.status(500).json({
      success: false,
      message: err?.response?.data?.errors?.[0]?.detail || err.message || "Search failed",
    });
  }
  
};




// controllers/flightController.js
export const getflight = async (req, res) => {
  try {
    // yaha pe flight data fetch karne ka logic
    const flights = []; // example, aap DB se fetch karenge
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};

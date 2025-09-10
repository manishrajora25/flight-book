// import express from "express";
// import Amadeus from "amadeus";

// const router = express.Router();

// // Amadeus client
// const amadeus = new Amadeus({
//   clientId: process.env.AMADEUS_API_KEY,
//   clientSecret: process.env.AMADEUS_API_SECRET,
// });

// // ✅ Flight search example
// router.get("/flights", async (req, res) => {
//   try {
//     const response = await amadeus.shopping.flightOffersSearch.get({
//       originLocationCode: "DEL", // Delhi
//       destinationLocationCode: "BOM", // Mumbai
//       departureDate: "2025-09-10", // koi bhi future date dal sakte ho
//       adults: "1",
//     });

//     res.json(response.data);
//   } catch (err) {
//     console.error("❌ Amadeus Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;






import express from "express";
import Amadeus from "amadeus";

const router = express.Router();


router.get("/flights", async (req, res) => {
  try {
   
    const amadeus = new Amadeus({
      clientId: process.env.AMADEUS_API_KEY,
      clientSecret: process.env.AMADEUS_API_SECRET,
    });

   
    const origin = req.query.origin || "DEL";
    const destination = req.query.destination || "BOM";
    const departureDate = req.query.departureDate || "2025-09-10";

    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: from,
      destinationLocationCode: to,
      departureDate,
      adults: String(passengers),
      travelClass: travelClass || "ECONOMY",   
      max: "15",
    });
    

    res.json(response.data);
  } catch (err) {
    console.error("❌ Amadeus Error:", err?.response?.data || err.message || err);
    res.status(500).json({ error: err.message || "Amadeus error" });
  }
});

export default router;

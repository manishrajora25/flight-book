// config/amadeus.js
import Amadeus from "amadeus";
import dotenv from "dotenv";

dotenv.config();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET,
});

export default amadeus;

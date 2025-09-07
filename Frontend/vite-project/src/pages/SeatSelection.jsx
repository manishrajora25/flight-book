import React, { useState } from "react";

const seatData = [
  { row: 1, seats: ["A", "B", "C", "D", "E", "F"], price: 350, extra: "XL" },
  { row: 2, seats: ["A", "B", "C", "D", "E", "F"], price: 350 },
  { row: 3, seats: ["A", "B", "C", "D", "E", "F"], price: 400 },
  { row: 4, seats: ["A", "B", "C", "D", "E", "F"], price: 400 },
  { row: 5, seats: ["A", "B", "C", "D", "E", "F"], price: 750, exit: true },
  { row: 6, seats: ["A", "B", "C", "D", "E", "F"], price: 750 },
  { row: 7, seats: ["A", "B", "C", "D", "E", "F"], price: 2100, exit: true },
];

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat, price) => {
    const exists = selectedSeats.find((s) => s.seat === seat);
    if (exists) {
      setSelectedSeats(selectedSeats.filter((s) => s.seat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, { seat, price }]);
    }
  };

  const totalPrice = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  // Seat color by price
  const getSeatColor = (price) => {
    if (price <= 350) return "bg-purple-200";
    if (price <= 750) return "bg-blue-300";
    return "bg-red-400";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Select Your Seat</h2>

      {/* Selected info */}
      <div className="mb-4">
        <p className="font-semibold">
          Selected:{" "}
          {selectedSeats.length > 0
            ? selectedSeats.map((s) => s.seat).join(", ")
            : "None"}
        </p>
        <p className="text-gray-700">Total: ₹{totalPrice}</p>
      </div>

      {/* Seat Grid */}
      <div className="overflow-x-auto">
        {seatData.map((row) => (
          <div key={row.row} className="flex gap-2 mb-2 items-center">
            <span className="w-6 text-gray-600">{row.row}</span>
            {row.seats.map((seat) => {
              const seatId = `${row.row}${seat}`;
              const isSelected = selectedSeats.some((s) => s.seat === seatId);
              return (
                <button
                  key={seatId}
                  onClick={() => toggleSeat(seatId, row.price)}
                  className={`w-10 h-10 flex items-center justify-center text-xs rounded 
                    border ${getSeatColor(row.price)} 
                    ${isSelected ? "ring-2 ring-blue-600" : ""}`}
                >
                  {seat}
                  {row.extra && seat === "B" ? (
                    <span className="absolute text-[8px] text-gray-600">XL</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legends */}
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-purple-200 border rounded"></span>
          <span>₹150–350</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-blue-300 border rounded"></span>
          <span>₹400–750</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 bg-red-400 border rounded"></span>
          <span>₹2000–2100</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs border px-1 rounded">Exit</span>
          <span>Exit Row Seats</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs border px-1 rounded">XL</span>
          <span>Extra Legroom</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;

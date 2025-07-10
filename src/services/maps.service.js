const axios = require("axios");

exports.getNearbyFacilities = async (userCoords, facilities) => {
  return facilities.filter(facility => {
    const distance = calculateDistance(userCoords, facility.coords);
    return distance <= 10; // Within 10km
  });
};

const calculateDistance = (coord1, coord2) => {
  
  const R = 6371;
  const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const dLon = ((coord2.lng - coord1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((coord1.lat * Math.PI) / 180) *
      Math.cos((coord2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
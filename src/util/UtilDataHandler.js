export const convertStringDateTimeZoneToGMTString = function(stringDate) {
  if(stringDate === null) {
    return "Date not available";
  } else {
    return new Date(stringDate).toGMTString();
  }
}
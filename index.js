// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) { console.log(element.name)});
}

function logDriversByHometown(drivers, location) {
  const filteredDrivers = drivers.filter (function(driver) {return driver.hometown === location });
  logDriverNames(filteredDrivers);
}

function driversByRevenue(drivers) {
  const byRevenue =  drivers.sort(function (a, b) {
  return a.revenue - b.revenue; });
  return byRevenue;
}
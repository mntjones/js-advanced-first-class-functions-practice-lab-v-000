// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) { console.log(element.name)});
}

function logDriverByHometown(drivers, location) {
  const filteredDrivers = drivers.filter (function(driver) {return driver.hometown === location });
  logDriverName(filteredDrivers);
}
// There are 3 subway lines:
const subwayLines = {
    Red:[
      'South Station',
      'Park Street',
      'Kendall',
      'Central',
      'Harvard',
      'Porter',
      'Davis',
      'Alewife'
    ],
    Green:[
      'Government Center',
      'Park Street',
      'Boylston',
      'Arlington',
      'Copley',
      'Hynes',
      'Kenmore'
    ],
    Orange:[
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills'
    ]
  }

//  The function will be invoked using the following pattern of arguments:
// Start Line, Start Station, End Line, End Station
// Here are some examples of how should be invoked.
// stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
// stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    //get the start station index
    let startStationIndex = subwayLines[startLine].indexOf(startStation);
    //get the end station index
    let endStationIndex = subwayLines[endLine].indexOf(endStation);
    //check if they are in the same line
    if (startLine === endLine) {
        return (startStationIndex - endStationIndex)
      }
      ////get the start park street  index
      let startLineParkStreet = subwayLines[startLine].indexOf('Park Street');
      //calculate the Park street defrences
      let tripToParkStreet = Math.abs(startStationIndex - startLineParkStreet);
      ////get the end park street  index
      let endLineParkStreet = subwayLines[endLine].indexOf('Park Street');
      //calculate the destination from end station to end park street
      let tripToDestination = Math.abs(endStationIndex - endLineParkStreet);
      //calculate the total trip
      let total = tripToParkStreet + tripToDestination;
      return total;
}
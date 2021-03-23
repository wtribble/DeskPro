import xapi from 'xapi';

function hue(data) {
  var url = 'http://<ip>/api/<user>/groups/1/action';
  var headers = 'Content-Type: application/json';
  console.log('Lights On?', data);
  var command = `{"on" : ${data}}`;
  xapi.command('HttpClient Put', { 'Url': url, 'Header': headers }, command);
}

function occupiedTrigger(isOccupied) {
  console.log('Occupied?', isOccupied);
  if (isOccupied == 'Yes') {
    hue('true');
  }

    else if (isOccupied == 'No') {
      hue('false');
    }
}

/**
*Prints the occupied status to log and attempts to trigger the hue lights based on the status
 */
xapi.Status.RoomAnalytics.PeoplePresence.on(occupiedTrigger);

import xapi from 'xapi';

function hue_on(data) {
  var url = 'http://<ip>/api/<user>/groups/1/action';
  var headers = 'Content-Type: application/json';
  var command = '{"on":true}';
  xapi.command('HttpClient Put', { 'Url': url, 'Header': headers }, command);
}

function hue_off(data) {
  var url = 'http://<ip>/api/<user>/groups/1/action';
  var headers = 'Content-Type: application/json';
  var command = '{"on":false}';
  xapi.command('HttpClient Put', { 'Url': url, 'Header': headers }, command);
}


function occupiedTrigger(isOccupied) {
  console.log('Occupied?', isOccupied);
  if (isOccupied == 'Yes') {
    hue_on();
  }

    else if (isOccupied == 'No') {
      hue_off();
    }
}

/**
*Prints the occupied status to log and attempts to trigger the hue lights based on the status
 */
xapi.Status.RoomAnalytics.PeoplePresence.on(occupiedTrigger);

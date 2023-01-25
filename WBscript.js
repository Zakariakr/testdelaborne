const controlButton = document.getElementById("controlButton");
const deviceNameInput = document.getElementById("deviceNameInput");
const connectionStatus = document.getElementById("connectionStatus");

controlButton.addEventListener("click", BLEManager);

async function BLEManager() {
  

  const device = await navigator.bluetooth.requestDevice({
  
    acceptAllDevices:true,
    optionalServices: ['battery_service'] // Required to access service later.
})
.then(device => { /* … */ })
.catch(error => { console.error(error); });

}
  
/* Version 0

const device = await navigator.bluetooth.requestDevice({
  
    acceptAllDevices:true
});

*/

/* Version 0.1

const device = await navigator.bluetooth.requestDevice({
  
  acceptAllDevices:true,
  optionalServices: ['battery_service'] // Required to access service later.
})
*/
//.then(device => { /* … */ })
//.catch(error => { console.error(error); });



/* Version 1
const device = await navigator.bluetooth.requestDevice({
  filters: [{
    name: '[TV] TV Moumz'
  }],
  optionalServices: ['battery_service'] // Required to access service later.
})
*/
//.then(device => { /* … */ })
//.catch(error => { console.error(error);
//}); 




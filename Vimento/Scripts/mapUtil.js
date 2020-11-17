/* On click function for the markers, adds the data from an array of markers
 * to the info card, and updates the barchart of the info card.*/
function onClick(e) {
    cordCheck(this.getLatLng().lat, this.getLatLng().lng);
    displayInfo(this);
    myChart.update();
}

//Index of the displaying company of the array of markers, to be used in nextInfo(sum)
var index = 0;

/* Switches the info in the infocard if index is greater than zero.
 * Then uses filterArray to set the x/x on the card, and switches
 * info based on the input from the user (sum), reffering to  which array (back or forth) is clicked */
function nextInfo(sum) {
    index = (index + sum);

    if (index <= 0) {

        index = 0;
    }
    else if (index > (filterArray.length) - 1) {
        index = ((filterArray.length - 1));

    }
    displayInfo(filterArray[index]);
    document.getElementById('side').innerHTML
        = ((index + 1) + " / " + filterArray.length);
}

/* Clears filterArray and resets the global index variable, used in the infocard.
 * Takes the clicked markers coordinates, and then iterates all markers to find markers with same coordinates.
 * Then updates the x/x of the infocard*/
function cordCheck(clickLat, clicklng) {
    filterArray = [];
    index = 0;
    for (var i = 0; i < (allMarkersArray.length); i++) {
        var marker = allMarkersArray[i];

        if (marker.getLatLng().lng == clicklng && marker.getLatLng().lat == clickLat) {
            filterArray.push(marker);
        }
    }
    document.getElementById('side').innerHTML
        = ((index + 1) + " / " + filterArray.length);
}

// Show/Hide functions for the spinner, to declutter index
function enableSpinner() {
    document.getElementById("spinner").hidden = false;
}
function disableSpinner() {
    document.getElementById("spinner").hidden = true;
}

/* Clears all layers from the map and iterates allMarkersArray, to add all the markers.*/
function addAllMarkers() {
    markers.clearLayers();
    for (let i = 0; i < allMarkersArray.length; i++) {
        markers.addLayer(allMarkersArray[i]);
    }
    mymap.addLayer(markers);
}

/* Displays info in the infocard based on the marker given in param.
 * Then adds data to the barchart in the infocard.*/
function displayInfo(marker) {
    document.getElementById('firmanavn').innerHTML
        = marker.name;
    document.getElementById('branchenavn').innerHTML
        = marker.business;
    document.getElementById('antalansatte').innerHTML
        = marker.employees;
    document.getElementById('vejnavn').innerHTML
        = marker.address;

    //Adds the data to barchart
    addDataDownFiber(parseInt(marker.downFiber))
    addDataUpFiber(parseInt(marker.upFiber))
    addDataDownKabel(parseInt(marker.downKabel))
    addDataUpKabel(parseInt(marker.upKabel))
    addDataDownDsl(parseInt(marker.downDsl))
    addDataUpDsl(parseInt(marker.upDsl))
    addDataMobil(parseInt(marker.mobil))
}

/* Used initially to add marker clusters to the map. Used with @model,
 * containing a list of companies from the datawarehouse. Takes localarray in params,
 * and adds created marker, for later use in the search function
 */
function addClusters(localarray, lat, long, createdAt, name, business, employees, address, downFiber, upFiber, downKabel, upKabel, downDsl, upDsl, mobil) {
    var companyMarker = new L.circleMarker([lat, long]).on('click', onClick);

    companyMarker.createdAt = createdAt,
        companyMarker.name = name, companyMarker.business = business,
        companyMarker.employees = employees, companyMarker.address = address,
        companyMarker.downFiber = downFiber, companyMarker.upFiber = upFiber,
        companyMarker.downKabel = downKabel, companyMarker.upKabel = upKabel,
        companyMarker.downDsl = downDsl, companyMarker.upDsl = upDsl,
        companyMarker.mobil = mobil;
    companyMarker.bindPopup(address);
    markers.addLayer(companyMarker);

    localarray.push(companyMarker);
}
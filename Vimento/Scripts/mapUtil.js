




function onClick(e) {

    cordCheck(this.getLatLng().lat, this.getLatLng().lng);
    displayInfo(this)  //kalder function for fremvisning af data i informations panel
    myChart.update()  //updatere charts
}


var index = 0;
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

function enableSpinner() {
    document.getElementById("spinner").hidden = false;
}
function disableSpinner() {
    document.getElementById("spinner").hidden = true;
}





function addAllMarkers() {
    markers.clearLayers();
    for (let i = 0; i < allMarkersArray.length; i++) {
        markers.addLayer(allMarkersArray[i]);
    }
    mymap.addLayer(markers);

}


function displayInfo(marker) {
    document.getElementById('firmanavn').innerHTML
        = marker.name;
    document.getElementById('branchenavn').innerHTML
        = marker.business;
    document.getElementById('antalansatte').innerHTML
        = marker.employees;
    document.getElementById('vejnavn').innerHTML
        = marker.address;
    // onclick function til at vise given data fra et firma

    //Tilføjer data til chart.
    addDataDownFiber(parseInt(marker.downFiber))
    addDataUpFiber(parseInt(marker.upFiber))
    addDataDownKabel(parseInt(marker.downKabel))
    addDataUpKabel(parseInt(marker.upKabel))
    addDataDownDsl(parseInt(marker.downDsl))
    addDataUpDsl(parseInt(marker.upDsl))
    addDataMobil(parseInt(marker.mobil))

}

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

    //Laver et array med Branche navne til vores tekst søgning.
    localarray.push(companyMarker);


}

//Function that shows all unique acess addresses
function unikAdd(array) {
    var addrList = [];
    for (var i = 0; i < array.length; i++) {
        addrList.push(array[i].address);
    }
    let unikkeAdresser = [...new Set(addrList)]
    document.getElementById("unikAdd").innerHTML = unikkeAdresser.length;
}
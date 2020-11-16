
function updateTextInput(value) {
    document.getElementById("txtMbits").textContent = "Minimum " + value + " Mbit/s";
}


var markersToAdd = [];
function updateMapBySpeed(downSpeed) {
    markers.clearLayers();
    for (let i = 0; i < filterArray.length; i++) {
        switch (speedSwitchValue) {
            case 0:

                if (filterArray[i].downFiber >= downSpeed) {
                    markersToAdd.push(filterArray[i]);
                }
                break;
            case 1:
                if (filterArray[i].downKabel >= downSpeed) {
                    markersToAdd.push(filterArray[i]);
                }
                break;
            case 2:
                if (filterArray[i].downDsl >= downSpeed) {
                    markersToAdd.push(filterArray[i]);
                }
                break;
            case 3:
                if (filterArray[i].mobil >= downSpeed) {
                    markersToAdd.push(filterArray[i]);
                }
                break;
            case 4:
                if (filterArray[i].downFiber >= downSpeed || filterArray[i].downKabel >= downSpeed || filterArray[i].downDsl >= downSpeed || filterArray[i].mobil >= downSpeed) {
                    markersToAdd.push(filterArray[i]);
                }

                break;
        }

    }

    for (let i = 0; i < markersToAdd.length; i++) {
        markers.addLayer(markersToAdd[i]);
    }
    mymap.addLayer(markers);
    document.getElementById('unikCVR').innerHTML
        = (markersToAdd.length);
    document.getElementById('button-a').disabled = false;

    updateDoughnutChart(markersToAdd);

}




function tekFilter(selectSwitch) {
    markers.clearLayers();
    switch (selectSwitch) {
        case 0:
            document.getElementById('button-a').disabled = false;
            document.getElementById("formControlRange").disabled = false;
            if (document.getElementById('myInput').value != '') {
                var result = searchArray.filter(checkFiber);
                speedSwitchValue = 0;
                document.getElementById("formControlRange").value = "0";
                break;
            } else {
                var result = allMarkersArray.filter(checkFiber);
                speedSwitchValue = 0;
                document.getElementById("formControlRange").value = "0";
                break;
            }
        case 1:
            document.getElementById('button-a').disabled = false;
            document.getElementById("formControlRange").disabled = false;
            if (document.getElementById('myInput').value != '') {
                var result = searchArray.filter(checkKabel);
                speedSwitchValue = 1;
                document.getElementById("formControlRange").value = "0";
                break;
            } else {
                var result = allMarkersArray.filter(checkKabel);
                speedSwitchValue = 1;
                document.getElementById("formControlRange").value = "0";
                break;
            }
        case 2:
            document.getElementById('button-a').disabled = false;
            document.getElementById("formControlRange").disabled = false;
            if (document.getElementById('myInput').value != '') {
                var result = searchArray.filter(checkDsl);
                speedSwitchValue = 2;
                document.getElementById("formControlRange").value = "0";
                break;
            } else {
                var result = allMarkersArray.filter(checkDsl);
                speedSwitchValue = 2;
                document.getElementById("formControlRange").value = "0";
                break;
            }
        case 3:
            document.getElementById('button-a').disabled = false;
            document.getElementById("formControlRange").disabled = false;
            if (document.getElementById('myInput').value != '') {
                var result = searchArray.filter(checkMobil);
                speedSwitchValue = 3;
                document.getElementById("formControlRange").value = "0";
                break;
            } else {
                var result = allMarkersArray.filter(checkMobil);
                speedSwitchValue = 3;
                document.getElementById("formControlRange").value = "0";
                break;
            }
        case 4:
            document.getElementById('button-a').disabled = false;
            document.getElementById("formControlRange").disabled = false;
            if (document.getElementById('myInput').value != '') {
                var result = searchArray;
                speedSwitchValue = 4;
                document.getElementById("formControlRange").value = "0";
                break;
            } else {
                var result = allMarkersArray;
                speedSwitchValue = 4;
                document.getElementById("formControlRange").value = "0";
                break;
            }
    }


    result.forEach(m => markers.addLayer(m));
    filterArray = result;
    mymap.addLayer(markers);
    updateTextInput(0);
    document.getElementById('unikCVR').innerHTML
        = (result.length);
    updateDoughnutChart(filterArray);
}


function checkFiber(speed) {
    return speed.downFiber > 0;
}
function checkKabel(speed) {
    return speed.downKabel > 0;
}
function checkDsl(speed) {
    return speed.downDsl > 0;
}
function checkMobil(speed) {
    return speed.mobil > 0;
}
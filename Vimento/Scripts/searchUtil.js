
//Replaces unicode with Dk chars. ÆØÅ - æøå
function replaceLetters(string) {
    var str1 = string;
    var str2 = str1.replace(/&#230;/g, "æ");
    var str3 = str2.replace(/&#233;/g, "é");
    var str4 = str3.replace(/&#248;/g, "ø");
    var str5 = str4.replace(/&#229;/g, "å");
    var str6 = str5.replace(/&#216;/g, "Ø");
    var str7 = str6.replace(/&#198;/g, "Æ");
    var str8 = str7.replace(/&#197;/g, "Å");
    return str8;
}

//Used to clean up search array in several steps.
function fixFormat(array) {
    for (var i = 0; i < array.length; i++) {

        var dirtyBusinessString = array[i].business;
        var cleanBusinessString = replaceLetters(dirtyBusinessString);
        array[i].business = cleanBusinessString;

        var dirtyNameString = array[i].name;
        var cleanNameString = replaceLetters(dirtyNameString);
        array[i].name = cleanNameString;

        var dirtyAddressString = array[i].address;
        var cleanAddressString = replaceLetters(dirtyAddressString);
        array[i].address = cleanAddressString;

        searchArray.push(array[i].business);
    }
    return array;
}


//Takes the result from search/autocomplete and adds the markers to the map.
function searchFilter(search) {
    searchArray = [];
    filterArray = [];
    markers.clearLayers();

    for (var i = 0; i < (allMarkersArray.length); i++) {
        var marker = allMarkersArray[i];

        if (marker.business == search) {
            searchArray.push(marker);
            filterArray.push(marker);
            document.getElementById('leadLstBtn').disabled = false;
        }
    }
    searchArray.forEach(m => markers.addLayer(m));
    mymap.addLayer(markers);
    document.getElementById('unikCVR').innerHTML
        = (searchArray.length);
    updateDoughnutChart(searchArray);
    clearFilterButtons();
   
}

//Clears ther filter. Sets the button/values to default values.
function clearFilterButtons() {
    document.getElementById('txtMbits').innerHTML = "0";
    document.getElementById('radioAll').checked = true;
    document.getElementById("formControlRange").value = "0";

}

//Autocomplete with wildcard search.
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items search-group");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item contains the same letters as the text field value:*/
            if ((arr[i].substr(val.length).toUpperCase().includes(val.toUpperCase())) || (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase())) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
               
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            console.log(inp)

            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                //    /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    
    //Get text from input field and activates the search button when pressing enter.
    inp.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    })
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    ///*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
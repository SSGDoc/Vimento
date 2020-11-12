function s2ab(s) {

    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;

}
function generateLeadList() {
    var wb = XLSX.utils.book_new();
    wb.Props = {
        Title: "Lead Liste",
        Subject: "Liste over brancher med ønskede specifikationer",
        Author: "Vimento"
    };
    wb.SheetNames.push("Leads");
    var ws_data = [['Navn', 'Branche', 'Adresse', 'Ansatte', 'Fiber ned', 'Fiber op', 'Kabel ned', 'Kabel op', 'Dsl ned', 'Dsl op', 'Mobil', 'Tlf. nr.', 'E-mail']];
    if (markersToAdd == 0) {
        for (var i = 0; i < filterArray.length; i++) {
            ws_data.push([
                filterArray[i].name,
                filterArray[i].business,
                filterArray[i].address,
                filterArray[i].employees,
                filterArray[i].downFiber,
                filterArray[i].upFiber,
                filterArray[i].downKabel,
                filterArray[i].upKabel,
                filterArray[i].downDsl,
                filterArray[i].upDsl,
                filterArray[i].mobil
            ]);
        }
    }
    else {
        for (var i = 0; i < markersToAdd.length; i++) {
            ws_data.push([
                markersToAdd[i].name,
                markersToAdd[i].business,
                markersToAdd[i].address,
                markersToAdd[i].employees,
                markersToAdd[i].downFiber,
                markersToAdd[i].upFiber,
                markersToAdd[i].downKabel,
                markersToAdd[i].upKabel,
                markersToAdd[i].downDsl,
                markersToAdd[i].upDsl,
                markersToAdd[i].mobil
            ]);
        }
    }

    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Leads"] = ws;
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Lead_list.xlsx');

}

function arrToCSV(array) {

    let csvData = 'data:text/csv;charset=utf-8,';
    array.forEach(a => {
        const row = a.join(',');
        csvData += row + '\r\n';
    });
    return csvData;
}

const downloadCsv = (array) => {
    const csvData = arrToCSV(array)
    const encodedUri = encodeURI(csvData);
    const ele = document.createElement('a');

    ele.setAttribute('href', encodedUri);
    ele.setAttribute('download', fileName + '_' + userName + '.csv');

    ele.style.visibility = 'hidden';
    document.body.appendChild(ele);
    ele.click();
    document.body.removeChild(ele);
}

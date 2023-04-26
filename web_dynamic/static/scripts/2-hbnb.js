$(document).ready(function() {
    const url = 'http://127.0.0.1:5001/api/v1/status/'
    $.get(url, function (data) {
    if (data.status === 'OK'){
        alert('hi');
    } else {
        alert('not hi');
    }
})});

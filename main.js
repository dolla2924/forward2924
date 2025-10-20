var slid_1ID = document.getElementById("slid_1");
var slid_2ID = document.getElementById("slid_2");
var but_1ID = document.getElementById("but_1");
var but_2ID = document.getElementById("but_2"); 
if (slid_2ID) {
    slid_2ID.style.display='none';
}
if (but_1ID && slid_1ID && slid_2ID) {
    but_1ID.addEventListener('click', function(e) {
        e.preventDefault();
        slid_1ID.style.display = 'none';
        slid_2ID.style.display = 'block';
    });
}
if (but_2ID) {
    but_2ID.addEventListener('click', function() {
    });
}
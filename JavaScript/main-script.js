function getSearch() {

}

// Function to open the full popup menu
function openPopupMenu() {
    document.querySelector('.popup-menu-overlay').style.display = 'block';
    document.querySelector('.popup-menu').style.display = 'block';
}

// Function to close the full popup menu
function closePopupMenu() {
    document.querySelector('.popup-menu-overlay').style.display = 'none';
    document.querySelector('.popup-menu').style.display = 'none';
}

function registerPopup(){
    document.getElementById('createUserPopup').style.display='block';
}

function cancelRegisterPopup(){
    document.getElementById('createUserPopup').style.display='none';
}

function registerButton() {
    var popup = document.getElementById('createUserPopup');
    if(popup !== "block"){
        popup.style.display = "block";
    }
}

var totalStars = document.getElementsByClassName("fa fa-star");
var TotalStarsArray = Array.from(totalStars);

// make array groups for each form
var groupedStars = groupIntoSubGroups(TotalStarsArray, 5);

for (var j = 0; j < groupedStars.length; j++) {
    for (var c = 0; c < 5; c++) {
        groupedStars[j][c] = totalStars[j * 5 + c].id;
    }
}

// star() function allows users to send reviews regarding the cognitive training tool
// n = star value, o = form id (star id = "one/two/three/four/five-o")
function star (n,o) {
    var output = document.getElementById("stars-"+o);
    remove();
    for (var j = 0; j < groupedStars.length; j++) {
        for (var k = 0; k < 5; k++) {
            if (groupedStars[j][k].includes(o)) {
                for (let i = 0; i < n; i++) {
                    if (n == 1) cls = "one";
                    else if (n==2) cls = "two";
                    else if (n==3) cls = "three";
                    else if (n==4) cls = "four";
                    else if (n==5) cls = "five";
                    document.getElementById(groupedStars[i][j].className = "fa fa-star" + cls);
                }
            }
            output.value = n;
        }
    }
}

function remove() {
    for (var j = 0; j < groupedStars.length; j++) {
        var i = 0;
        while (i < 5) {
            document.getElementById(groupedStars[j][i].className = "fa fa-star");
            i++;
        }
    }
}

function groupIntoSubGroups(array, groupSize) {
    var result = [];
    for (var i = 0; i < array.length; i += groupSize) {
        result.push(array.slice(i, i + groupSize));
    }
    return result;
}
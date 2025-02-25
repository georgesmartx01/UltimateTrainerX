document.addEventListener("DOMContentLoaded", function() {
    var accountNav = document.getElementById("buttonaccount");
    var accountNavView = document.getElementById("myaccountdropdown");

    if(accountNavView){
        accountNavView.addEventListener("mouseleave", function(){
            if(accountNavView.style.display === "block"){
                accountNavView.style.display = "none";
            }
        });
    }

    if(accountNav){
        accountNav.addEventListener("mouseover", function() {
            if(accountNavView.style.display !== "block"){
                accountNavView.style.display = "block";
            }
        })
    }
});

function getSearch() {

}

function notLoggedIn() {
    alert(window.location('accountlogin.php'));
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
function sendwhatsapp(){
    var phonenumber = "+918436017430";

    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var number = document.querySelector('.number').value;
    var village = document.querySelector('.village').value;
    var post_office = document.querySelector('.post_office').value;
    var police_station = document.querySelector('.police_station').value;
    var landmark = document.querySelector('.landmark').value;
    var pin = document.querySelector('.pin').value;
    var message = document.querySelector('.message').value;
    
    


    var url = "https://wa.me/" + phonenumber + "?text=" 
    + "*Name :* " +name+"%0a"
    + "*Email :* " +email+"%0a"
    + "*Number :* " +number+"%0a"
    + "*Village/City :* " +village+"%0a"
    + "*Post Office :* " +post_office+"%0a"
    + "*Police Station :* " +police_station+"%0a"
    + "*Landmark :* " +landmark+"%0a"
    + "*Pin Code :* " +pin+"%0a"
    + "*Problem :* " +message+"%0a%0a" 

    window.open(url, '_blank').focus();
}
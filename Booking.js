
//Dom Elements
const rooms = document.getElementById("roomnumber");
const roomsize = document.getElementById("roomsize");
const bed = document.getElementById("bed");
const numadults = document.getElementById("numadults");
const numchildren = document.getElementById("numchildren");
const childmeal = document.getElementById("childmeal");
const checkin = document.getElementById("checkin");
const checkintime = document.getElementById("checkintime");
const checkstaying = document.getElementById("checkstaying");
const view = document.getElementById("view");
const adtype = document.getElementById("type");
const numadults2 = document.getElementById("numadults2");
const chil2 = document.getElementById("chil2");
const tduration = document.getElementById("tduration");
const checkbox2 = document.getElementById("divichild");
const livecost = document.getElementById("cost");
const outputtext = document.getElementById("output");
const outputtext2 = document.getElementById("loyalty")
const promocode = document.getElementById("promocode");
const BookAdventurebtn = document.getElementById("submitbtn");
const Booknowbtn = document.getElementById("submitbtn2");
const Checkloyaltypointsbtn = document.getElementById("loyaltybtn");
const checkbox = document.getElementById("diviadults");
const addToFavouritesBtn = document.getElementById("favourite");
const showFavouritesBtn = document.getElementById("shfavourite");

//Add Eventlistner
BookAdventurebtn.addEventListener("click", viewBAdven);
Booknowbtn.addEventListener("click", () => {
    bookingdetail();
    let totalCost = cost2;
    outputtext.innerText = ` Total is ${totalCost} LKR`

});
Checkloyaltypointsbtn.addEventListener("click", viewloyalty);
rooms.addEventListener("change", roomnum);
bed.addEventListener("change", exbed);
childmeal.addEventListener("change", childmeals);
checkstaying.addEventListener("change", staingdays);
numadults2.addEventListener("change", totaladult);
chil2.addEventListener("change", totalchild);
tduration.addEventListener("change", timedurati);
checkbox.addEventListener("change", divingadult);
checkbox2.addEventListener("change", divingchild);
addToFavouritesBtn.addEventListener("click", addToFavourites);
showFavouritesBtn.addEventListener("click", showFavourites);

let norooms;
let rtype;
let child;
let child2;
let adult;
let adult2;
let duration;
let duration2;
let diving;
let diving2;
let childtype;
let adulttype;
let extmeal;
let cost;
let cost2;
let cost3;
let cost4;
let tcost;
let sizeroom;
let roomtype;
let extrabed;
let bedroom;
let touverist;
let promotional;
let extmeal1;
let loyaltypoints;



initializing();
// initializing
function initializing() {
    norooms = 0;
    child = 0;
    child2 = 0;
    adult = 0;
    adult2 = 0;
    duration = 0;
    duration2 = 0;
    diving = 0;
    diving2 = 0;
    childtype = 0;
    adulttype = 0;
    extmeal1 = 0;
    bedroom = 0;
    rtype = 0;
    cost4 = 0;



    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`;

}

function roomnum() {
    norooms = parseInt(rooms.value);
    sizeroom = roomsize.value



    if (sizeroom == "single") {
        rtype = 25000
    }
    else if (sizeroom == "double") {
        rtype = 35000
    }
    else {
        rtype = 40000;
    }


    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`



}
function exbed() {
    extrabed = bed.value;
    if (extrabed) {
        bedroom = 8000
    }
    else {
        bedroom = 0
    }
    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
}
function childmeals() {
    extmeal = parseInt(childmeal.value)
    extmeal1 = extmeal * 5000;

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`

}
function staingdays() {
    duration = parseInt(checkstaying.value)

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
}

function totaladult() {
    touverist = adtype.value
    adult2 = parseInt(numadults2.value)

    if (touverist == "local") {
        adulttype = 5000 * adult2
    }
    else {

        adulttype = 10000 * adult2

    }

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
    console.log(cost);
}

function totalchild() {
    touverist = adtype.value
    child2 = parseInt(chil2.value)

    if (touverist == "local") {

        childtype = child2 * 2000
    }
    else {


        childtype = child2 * 5000

    }

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
    console.log(cost);
}

function timedurati() {
    duration2 = parseInt(tduration.value)

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
    console.log(cost);
}

function divingadult() {

    if (checkbox.checked) {
        diving = 1000
    }
    else {
        diving = 0
    }

    cost = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost} LKR`
    console.log(cost);
}

function divingchild() {
    if (checkbox2.checked) {
        diving2 = 500
    }
    else {
        diving2 = 0
    }

    cost2 = ((norooms * rtype) + (extmeal1 + bedroom)) * duration + ((adulttype + childtype) * duration2 + (diving + diving2))
    livecost.innerText = `Current Balance ${cost2} LKR`
    console.log(cost2);
}
function bookingdetail() {
    norooms = parseInt(rooms.value);
    sizeroom = roomsize.value;
    extrabed = bed.value;
    extmeal = parseInt(childmeal.value)
    duration = parseInt(checkstaying.value)
    promotional = promocode.value

    extmeal = extmeal * 5000

    if (extrabed == "yes") {
        bedroom = 8000;
    }
    else {
        bedroom = 0;
    }

    if (sizeroom == "single") {
        roomtype = 25000;
    }
    else if (sizeroom == "double") {
        roomtype = 35000;
    }
    else {
        roomtype = 40000;
    }


    if (promotional == "Promo123") {
        cost2 = cost2 * (95 / 100)
        alert(`5%`)
    }
    else {
        cost2 = cost2 
    }

        var adcost = viewBAdven()
    cost2 = ((bedroom + (norooms * roomtype) + extmeal) * duration) + adcost;

    alert(`${cost2}`);
    
}

function viewBAdven() {
    duration2 = parseInt(tduration.value);
    touverist = adtype.value
    adult2 = parseInt(numadults2.value)
    child2 = parseInt(chil2.value)

    if (touverist == "local") {
        adult = adult2 * 5000
        child = child2 * 2000

    }
    else {
        adult = adult2 * 10000
        child = child2 * 5000
    }

    if (checkbox.checked) {
        diving = 1000
    }
    else {
        diving = 0
    }

    if (checkbox2.checked) {
        diving2 = 500
    }
    else {
        diving2 = 0
    }

    cost3 = (adult + child) * duration2 + (diving + diving2)
    alert(`${cost3}`)
    var tcost = cost3

    return tcost
}

function viewloyalty() {
    norooms = parseInt(rooms.value);

    if (norooms > 3) {
        loyaltypoints = norooms * 20
    }
    else {
        loyaltypoints = 0
    }

    outputtext2.innerText = `You have ${loyaltypoints} loyalty points`
} 

//add to favourite & Show favourite 
function addToFavourites() {
    let favouriteOrder = {
        rooms: norooms,
        roomType: sizeroom,
        extraBed: extrabed,
        extraMeal: extmeal,
        duration: duration,
        totalCost: cost,
        
    };

    localStorage.setItem("favouriteOrder", JSON.stringify(favouriteOrder));
    alert("Booking has been added to favourites!");
}

function showFavourites() {
    let savedFavourite = localStorage.getItem("favouriteOrder");

    if (savedFavourite) {
        savedFavourite = JSON.parse(savedFavourite);

        alert(`Favourite Order:
            Rooms: ${savedFavourite.rooms}
            Room Type: ${savedFavourite.roomType}
            Extra Bed: ${savedFavourite.extraBed}
            Extra Meal: ${savedFavourite.extraMeal}
            Duration: ${savedFavourite.duration}
            Total Cost: ${savedFavourite.totalCost}`);
    } else {
        alert("No favourite order saved.");
    }
}

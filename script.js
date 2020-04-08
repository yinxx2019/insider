//Space for calcintro
document.body.onload = function () {
    document.getElementById("calcintro").style.marginTop = document.getElementById("bodyheader").offsetHeight + 25 + 'px';
};

var hotel = {
    budgetAccom: 80,
    luxuryAccom: 200,
    tax: 0.12,
    nights: 1,
    rooms: 1,
    code: "b",
    type: "Budget",
    calcCost: function () {
        if (this.code === "b") {
            return (this.budgetAccom * this.nights * this.rooms) * (1 + this.tax);
        } else {
            return (this.luxuryAccom * this.nights * this.rooms) * (1 + this.tax);
        }
    },
};

//Part 3: Dinner Bill
var dinner = {
    entreeCost: 18.99,
    starterCost: 10.99,
    dessertCost: 6.99,
    childMealCost: 8.99,
    mealTax: 0.1,
    tip: 0.2,
    numAdults: 1,
    numChildren: 0,
    calcMealCost: function() {
        return this.starterCost + this.entreeCost * this.numAdults + this.dessertCost * this.numAdults + this.childMealCost * this.numChildren + this.dessertCost * this.numChildren + (this.starterCost + this.entreeCost * this.numAdults + this.dessertCost * this.numAdults + this.childMealCost * this.numChildren + this.dessertCost * this.numChildren) * this.mealTax + (this.starterCost + this.entreeCost * this.numAdults + this.dessertCost * this.numAdults + this.childMealCost * this.numChildren + this.dessertCost * this.numChildren + (this.starterCost + this.entreeCost * this.numAdults + this.dessertCost * this.numAdults + this.childMealCost * this.numChildren + this.dessertCost * this.numChildren) * this.mealTax) * this.tip;
    },
};

function updateHotel() {
    var hotelElem = document.getElementById("hotel");
    hotel.code = hotelElem.options[hotelElem.selectedIndex].value;
    hotel.type = hotelElem.options[hotelElem.selectedIndex].text;
    displayCosts();
};

function updateNights() {
    var nightsElem = document.getElementById("nights").value;
    if (nightsElem < 1) {
        alert("type a member not less than 1");
        return false;} else {
        hotel.nights = document.getElementById("nights").value;
        displayCosts();
        return true;
        }
};

function updateRooms() {
    var roomsElem = document.getElementById("rooms").value;
    if (roomsElem < 1) {
        alert("type a member not less than 1");
        return false;} else {
        hotel.rooms = document.getElementById("rooms").value;
        displayCosts();
        return true;
        }
};

function updateAdults() {
    var adultsElem = Number(document.getElementById("adults").value);
        if (adultsElem < 1) {
        alert("type a member not less than 1");
        return false;} else {
        dinner.numAdults = Number(document.getElementById("adults").value);
        displayCosts();
        return true;
        }
};

function updateChildren() {
    var childrenElem = Number(document.getElementById("children").value);
    if (childrenElem < 0) {
        alert("type a member not less than 0");
        return false;} else {
        dinner.numChildren = Number(document.getElementById("children").value);
        displayCosts();
        return true;
        }
};

function costPerNight() {
	var msg;
	if (hotel.code === "b") {
		msg = "$" + hotel.budgetAccom;
	} else {
		msg = "$" + hotel.luxuryAccom;
    }
    return msg;
};

function displayCosts() {
    var hotelTotal = hotel.calcCost().toFixed(2);
    var dinnerTotel = dinner.calcMealCost().toFixed(2);
	var results = '<table>';
	results += '<caption>' + 'Your ' + hotel.type + ' Hotel Stay:' + '</caption>';
    results	+= '<tr>' + '<th>Cost per night</th>';
	results += '<td>' + costPerNight() +'</td>' + '</tr>';
	results += '<tr>' + '<th scope="row">Number of nights</th>';
	results += '<td>' + hotel.nights +'</td>' + '</tr>';
	results += '<tr>' + '<th scope="row">Number of rooms</th>';
	results += '<td>' + hotel.rooms +'</td>' + '</tr>';
	results += '<tr>' + '<th scope="row">Hotel tax</th>';
	results += '<td>' + hotel.tax * 100 + "%" +'</td>' + '</tr>';
	results += '<tr>' + '<th scope="row">Total cost</th>';
	results += '<td>' + hotelTotal +'</td>' + '</tr>';
	results += '</table>';
	results += '<table>' + '<caption>' + 'Your Dinner Cost' + '</caption>';
	results += '<tr>' + '<th scope="col">' + "Item" + '</th>';
	results += '<th scope="col">' + "Cost" + '</th>';
	results += '<th scope="col">' + "Number" + '</th>';
	results += '<th scope="col">' + "line-item Total" + '</th>' + '</tr>';
	results += '<tr>' + '<td>' + "Appetizer" + '</td>';
	results += '<td>' + "$" + dinner.starterCost + '</td>';
	results += '<td>' + 1 + '</td>';
	results += '<td>' + "$" + dinner.starterCost * 1 + '</td>' + '</tr>';
	results += '<tr>' + '<td>' + "Adult Entrees" + '</td>';
	results += '<td>' + "$" + dinner.entreeCost + '</td>';
	results += '<td>' + dinner.numAdults + '</td>';
	results += '<td>' + "$" + dinner.entreeCost * dinner.numAdults + '</td>' + '</tr>';
	if (dinner.numChildren > 1) {
        results += '<tr>' + '<td>' + "Children Entrees" + '</td>' + '<td>' + "$" + dinner.childMealCost + '</td>' + '<td>' + dinner.numChildren + '</td>' + '<td>' + "$" + dinner.childMealCost * dinner.numChildren + '</td>' + '</tr>';}
	results += '<tr>' + '<td>' + "Dessert" + '</td>';
	results += '<td>' + "$" + dinner.dessertCost + '</td>';
	results += '<td>' + Number(dinner.numAdults + dinner.numChildren) + '</td>';
	results += '<td>' + "$" + dinner.dessertCost * Number(dinner.numAdults + dinner.numChildren) + '</td>' + '</tr>';
	results += '<tr>' + '<td>' + "Tax" + '</td>';
	results += '<td>' + dinner.mealTax * 100 + "%" + '</td>';
	results += '<td>' + '</td>' + '<td>' + '</td>' + '</tr>';
	results += '<tr>' + '<td>' + "Tip" + '</td>';
	results += '<td>' + dinner.tip * 100 + "%" + '</td>';
	results += '<td>' + '</td>' + '<td>' + '</td>' + '</tr>';
	results += '<tr>' + '<th colspan="3">' + "Total Cost" + '</th>';
	results += '<td>' + "$" + dinnerTotel + '</td>' + '</tr>';
	results += '</table>';
	document.getElementById("results").innerHTML = results;
};

var Display = displayCosts();

var elNights, elRooms, elAdults, elChildren, elHotel;
elNights = document.getElementById('nights');
elRooms = document.getElementById('rooms');
elAdults = document.getElementById('adults');
elChildren = document.getElementById('children');
elHotel = document.getElementById('hotel'); 
elNights.addEventListener("change", updateNights, false);
elRooms.addEventListener("change", updateRooms, false);
elAdults.addEventListener("change", updateAdults, false);
elChildren.addEventListener("change", updateChildren, false);
elHotel.addEventListener("change", updateHotel, false);

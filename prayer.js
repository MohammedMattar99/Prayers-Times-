
function getTim(countryId) {

    fetch("http://api.aladhan.com/v1/timingsByCity?city=&country="+countryId)
    .then(response => {
        if(response.ok) {
            return response.json();    }
    })
    .then(tim => {

        
    document.getElementById("Fajr").innerHTML +=`<div class="timing">${tim.data.timings.Fajr}</div>`;
    document.getElementById("Dhuhr").innerHTML +=`<div class="timing">${tim.data.timings.Dhuhr}</div>`;
    document.getElementById("Asr").innerHTML +=`<div class="timing">${tim.data.timings.Asr}</div>`;
    document.getElementById("Maghrib").innerHTML +=`<div class="timing">${tim.data.timings.Maghrib}</div>`;
    document.getElementById("Isha").innerHTML +=`<div class="timing">${tim.data.timings.Isha}</div>`;
    
    let dateContent = `<div>${tim.data.date.hijri.weekday.ar}</div><div">${tim.data.date.readable}</div>`
    // let dayContent = `<div>${tim.data.date.hijri.weekday.ar}</div>`
    document.getElementById("dat").innerHTML = "";
    // document.getElementById("dat").innerHTML += dayContent;
    document.getElementById("dat").innerHTML += dateContent;

    console.log(tim.data.date.readable)
    console.log(tim.data.date.hijri.weekday.ar)

});

}

function changeCity() {
    
    document.getElementById("city").innerHTML = "";
    input = document.getElementById("select");
    document.getElementById("city").innerHTML += input.value;

} 


function myDate(){



    // let now = new Date();
    // year = now.getFullYear();
    // month = now.getMonth()+1;
    // day = now.getDate();

    // let myTime = `<div>${year} : ${month} : ${day}</div>`;

    // document.getElementById("dat").innerHTML = "";

    // document.getElementById("dat").innerHTML += myTime;
}

getTim("PS");
changeCity();
myDate();

let hours = 0;
let minutes = 0;
let seconds = 0;

let meridian = "PM";

let currDate = new Date();

meridian = currDate.getHours() >= 12 ? "PM": "AM";
hours = currDate.getHours()%12;
minutes = currDate.getMinutes();
seconds = currDate.getSeconds();

setInterval(()=>{
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes=== 60){
            minutes = 0;
            hours++;
            if(hours === 12){
                pm = (pm === "PM")?"AM": "PM";
            }
            if(hours === 13){
                hours = 1;
            }
        }
    }
    console.clear();
    console.log(hours + ":" + minutes + ":" + seconds + " " + meridian);
}, 1000)


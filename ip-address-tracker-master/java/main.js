let map = L.map('map');

function Map(){ 
    //let map = L.map('map').setView([0, 0], 13);
    map.setView([50,20], 9);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW1pY2hubyIsImEiOiJja3pmeWpjbm4weGJ4Mm5vY211Mno0N2JrIn0.nRCpgTyv-Aw0HfVCkBEcPg'
    }).addTo(map);
}





const getIP = () => {
        const ip = document.querySelector("input").value;
        return ip;
}

const getInfo = () => {
    const ip = getIP();
    ipfy(ip);
}

const setLocation = (loc)=>
{
    let form_location = document.getElementsByClassName("loctaion-value");
    form_location[0].innerHTML = loc;
}

const setIP = (ip) =>
{
    let form_ip = document.getElementsByClassName("ip-value");
    form_ip[0].innerHTML = ip;
}

const setTimezone = (time) =>
{
    let form_timezone = document.getElementsByClassName("timezone-value");
    form_timezone[0].innerHTML = time;
}
  
const setISP = (isp) =>
{
    let form_isp = document.getElementsByClassName("isp-value");
    form_isp[0].innerHTML = isp;
}

const changeView = (lat,lng) =>
{
    const LatLng = new L.LatLng(lat.toFixed(0), lng.toFixed(0));
    map.setView(LatLng, 9);
    L.marker(LatLng).addTo(map);
}

function ipfy(ip){
    const api_key = "at_dTKmSVedpr8qrj4JGJ7tb4Ml1aUuC";

        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                const dane = JSON.stringify(data,"",2);
                const danejs = JSON.parse(dane);
                setLocation(danejs.location.country);
                setIP(danejs.ip);
                setTimezone(danejs.location.timezone);
                setISP(danejs.isp);
                changeView(danejs.location.lat, danejs.location.lng);
            }
        });
    //console.log(url);
    
}



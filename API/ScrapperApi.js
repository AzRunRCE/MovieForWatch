

const host = "https://www.torrent9.ch";
const cmdHost = "http://192.168.0.19:3000/playMagnet";
var magnetMovies = [];
// Requête de recherche sur torrent9
export function playMovie (text) {
  console.log(text);
  var data = new FormData();
  data.append("torrentSearch", text);
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (xhr.status === 200) {
        getMoviesAvailable(this.responseText);
     } else {
       console.error(xhr.statusText);
     }
    }
  });
  xhr.open("POST", host +"/?=");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);
}

//Scrapping des films disponibles issu de la recherche
function getMoviesAvailable(html)
{
  var getMoviesAvailables = [];
  var reg = /\<td\>\<i class="Films" style="color:#404040"\>\<\/i\> \<a title=".*"\>.*\<\/a\>\<\/td\>/g;
  var matches = html.match(reg);
  if (matches === null) { return;}
  parseTdElement(matches[0]);
  //.forEach((element) => {  console.log(element);  parseTdElement(element);});
}

//Scrapping d'une ligne de resultat, lecture de la page
function parseTdElement(td)
 {
   var reg = /href=".*" /;
   var matches = td.match(reg);
   if (matches === null) { return;}
   readMoviePage(matches[0]);
   //.forEach((element) => { console.log(element); readMoviePage(element);});
 }

//url formating
function clearUrl (parsed) {
  return host + parsed.replace('href="','').replace('"','');
}

//Reading the move page informations
function readMoviePage (url) {
  url = clearUrl(url);
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (xhr.status === 200) {
        getMagnetLink(this.responseText);
     } else {
       console.error(xhr.statusText);
     }
    }
  });
  xhr.open("GET", url);
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send();
}

function getMagnetLink(movieSourcePage)
{
    var reg = /magnet:.*' /;
    var matches = movieSourcePage.match(reg);
    if (matches === null) { return;}
    magnetMovies.push(matches[0]);
    console.log(magnetMovies);
    sendCmd(matches[0]);
}

//Reading the move page informations
function sendCmd (magnetLink) {
  var xhr = new XMLHttpRequest();
  var cmd = JSON.stringify({magnet: btoa(magnetLink)});
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (xhr.status === 200) {
         console.log(this.responseText);
     } else {
       console.error(xhr.statusText);
     }
    }
  });
  xhr.open("POST", cmdHost);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(cmd);
}

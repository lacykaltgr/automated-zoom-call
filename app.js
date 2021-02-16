class Zoom {
  constructor(subject){
    this.subject = subject;
    this.abbrv = db[subject][0];
    this.meetingid = db[subject][1];
    this.password = db[subject][2];
    this.link = db[subject][3];
  };
};

var db = {
        "magyar": ["magy", "8981373069", "k5fG25", "https://us04web.zoom.us/j/8981373069?pwd=WjBDOVhXWnVYNzl3L3ExQUNsdlN3UT09"],
        "matek": ["mat", "6705101010", "101010", "zoommtg://zoom.us/join?confno=6705101010&pwd=101010&uname=Freund%20L%C3%A1szl%C3%B3"],
        "fizika": ["fiz", "6073172100", "630607", "https://us04web.zoom.us/j/6073172100?pwd=NCtOZUFRbk5Wc1krWVJQYlRvanNRZz09"],
        "angol": ["ang", "2188554440", "681060", "zoommtg://zoom.us/join?confno=2188554440&pwd=681060&uname=L%C3%A1szl%C3%B3%20Freund"],
        "német": ["nem", "6873210647", "U2HvW8", "zoommtg://zoom.us/join?confno=6873210647&pwd=28&uname=L%C3%A1szl%C3%B3%20Freund"],
        "töri": ["tor", "2167072183", "", "https://us04web.zoom.us/j/2167072183?pwd=NE5NV205Yk9xWFVSRVFMNTlnb0plQT09"],
      };
var timetable = {
            1: ["töri", "matek", "angol", "német", "magyar", "ofõ", "biosz"],
            2: [false, "angol", "matek", false, "magyar", "matek", "fizika", "fizika"],
            3: ["média", "töri", "német", "angol", false, "fizika", "fizika"],
            4: ["magyar", "magyar", "matek", "matek", "töri", "angol"],
            5: ["magyar", "biosz", "töri", "fizika", "matek", "német, matek"],
            6: [false],
            7: [false],
          };
var orak = {
  0: [755, 850],
  1: [855,950],
  2: [955, 1050],
  3: [1055, 1150],
  4: [1200, 1310],
  5: [1315, 1405],
  6: [1410, 1555],
};

var h = new Date().getHours();
var m = new Date().getMinutes();
var now = 100*h+m;

if (milyen(now)){
  let subject = new Zoom(milyen(now));
  document.getElementById("info").innerHTML = subject.subject;
} else {
  document.getElementById("info").innerHTML = "most nincs semmilyen óra"
}


function milyen(t) {
  var nap = new Date().getDay();
  for (ora in orak){
    console.log(ora)
    if (t > orak[ora][0]){
      if (t < orak[ora][1]){
        return timetable[nap][ora];
    }};
  };
  return false;
};

function meeting(subject){
  window.location=subject.link
};

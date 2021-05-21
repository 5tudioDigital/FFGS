var Webflow = Webflow || [];
function getCookie(e) {
    for (var t = e + "=", o = document.cookie.split(";"), c = 0; c < o.length; c++) {
        for (var n = o[c];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return null
}

function setCookie(e, t, o) {
    var c = "";
    if (o) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), c = "; expires=" + n.toUTCString()
    }
    document.cookie = e + "=" + (t || "") + c + "; path=/"
}

    
document.getElementById("consentBtn").onclick = function () {
    setCookie("CB", "true", 30), checkSettings()
};
        
document.getElementById("DeleteCookies").onclick = function () {
    deletecookies()
}; 
    
document.getElementById("NoCookies").onclick = function () {
    nocookies()
};
   

var AN_cookie = getCookie("AN_DS"),
    RE_cookie = getCookie("RE_DS"),
    alreadyLoaded = "true" === getCookie("CB");


function checkSettings() {
    document.getElementById("AN_Check").checked ? setCookie("AN_DS", "true", 30) : setCookie("AN_DS", "false", 30), 
    document.getElementById("RE_Check").checked ? setCookie("RE_DS", "true", 30) : setCookie("RE_DS", "false", 30), 
    location.reload()
}


function deletecookies() {
    for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var o = e[t].split("=");
        document.cookie = o[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"
    }
    setCookie("CB", "false", 30)
    localStorage.clear(), 
    location.reload()
}


function nocookies() {
    deletecookies(), 
    setCookie("AN_DS", "false", 30), 
    setCookie("RE_DS", "false", 30), 
    setCookie("NOCO", "true", 30), 
    setCookie("CB", "true", 30)
    location.reload()
}



"true" == AN_cookie && (document.getElementById("AN_Check").checked = !0), 
"true" == RE_cookie && (document.getElementById("RE_Check").checked = !0), 

    
    
"false" == AN_cookie && (document.getElementById("AN_Check").checked = !1), 
"false" == RE_cookie && (document.getElementById("RE_Check").checked = !1), 


                                                                               
    AN_cookie || (document.getElementById("AN_Check").checked = !0), 
    RE_cookie || (document.getElementById("RE_Check").checked = !0), 


alreadyLoaded ? console.log("Cookie Banner Shown") : $('#CookieButton').click(); 

var latestPost = $('.section').find("a").attr('href');
console.log(latestPost);
var latestPostCookie = getCookie("LatestPost");
var NotificationCenter_1DayLock = getCookie("NotificationCenter_1DayLock");
var NotificationCenter_7DayLock = getCookie("NotificationCenter_7DayLock");

if(latestPost === latestPostCookie & NotificationCenter_1DayLock != "true" & NotificationCenter_7DayLock != "true") {
    var sameLatest = getCookie("sameLatest");
    switch (sameLatest) {
        case "1":
            setCookie("sameLatest", 2, 30);
            console.log("sameLatest = 2");
          break;
        case "2":
            setCookie("sameLatest", 3, 30);
            console.log("sameLatest = 3");
          break;
        case "3":
            document.getElementById("NotificationCenter").click(); 
            console.log("Notification Center");
            setCookie("sameLatest", 1, 30);
            setCookie("NotificationCenter_1DayLock", "true", 1);
          break;
        default:
            console.log("ERROR Notfication Center");
            setCookie("sameLatest", 1, 30);
          break;
      }
} else {
    setCookie("LatestPost", latestPost, 30);
    setCookie("sameLatest", 1, 30);
}

$("#NotificationCenter_7DayLock").click(function(){
    setCookie("NotificationCenter_7DayLock", "true", 7);
}); 

$("#NotificationCenter_7DayLockClose").click(function(){
    setCookie("NotificationCenter_7DayLock", "true", 7);
}); 

var fullpageOffID = document.getElementById("fullpage-off");
var FullpageOff = getCookie("Fullpage");

fullpageOffID.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      if(FullpageOff === "deaktiviert") {
        $.fn.fullpage.destroy('all');
        setCookie("Fullpage", "deaktiviert", 30);
        fullpageOffID.style.opacity = "0";
      }
      else(){
        $.fn.fullpage.rebuild();
        setCookie("Fullpage", "aktiviert", 30);
        fullpageOffID.style.opacity = "0";
      }
   
  }
});

if(FullpageOff === "deaktiviert") {
    console.log("Fullpage Destroyed");
    $.fn.fullpage.destroy('all');
}
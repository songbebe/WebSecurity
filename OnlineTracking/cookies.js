var browserversion = navigator.userAgent;

if(browserversion.match(/Windows/i)){
    if(browserversion.match(/Chrome/i)){
        var name = "WindowsChrome";
        var value = 1;
    }else{
        var name = "name=WindowsFirefox";
        var value = 2;

    }
}
if(browserversion.match(/Ubuntu/i)){
    if(browserversion.match(/Chrome/i)){
        var name = "name=UbuntuChrome";
        var value = 3;

    }else{
        var name = "name=UbuntuFirefox";
        var value = 4;
    }
}

document.cookie = name+'='+value;
alert(document.cookie);


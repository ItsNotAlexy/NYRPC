// Redirect functions

function load_redirect(){
    window.location.href = "/redirect.html";
}

function RedirectSuccess(){
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    title.innerHTML = "Thanks for playing!";
    desc.innerHTML = "You can now close this tab.";
}

function OnGameLoad(){
    if(window.onload){
        const params = (new URL(window.location.href)).searchParams;

        let placeID = params.get('placeId') || '2534724415';
        let code = params.get('code') || 'error';
        let jsonCode = JSON.stringify({ psCode: code });
        window.location.href = `roblox://placeId=${placeID}&launchData=${encodeURIComponent(`${jsonCode}`)}`;

        setTimeout(RedirectSuccess, 3000);
    } else {
        window.onload = load_redirect;
    }
}
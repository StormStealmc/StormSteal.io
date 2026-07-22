function copyIP(){
    navigator.clipboard.writeText("stormsteal.aternos.me")
    .then(() => {
        alert("Java IP Copied!");
    })
    .catch(() => {
        alert("Copy failed. Copy manually: stormsteal.aternos.me");
    });
}


function copyBedrock(){
    navigator.clipboard.writeText("22956")
    .then(() => {
        alert("Bedrock Port Copied!");
    })
    .catch(() => {
        alert("Copy failed. Copy manually: 22956");
    });
}

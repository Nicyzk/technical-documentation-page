document.getElementById("burger-div").addEventListener("click",()=>{
    document.getElementById("navbar").style.width="320px";
    document.getElementById("main-doc").style.margin="0px 0px 0px 340px";
});

document.getElementById("navclose").addEventListener("click", ()=>{
    document.getElementById("navbar").style.width="0px";
    document.getElementById("main-doc").style.margin="0px auto";
});
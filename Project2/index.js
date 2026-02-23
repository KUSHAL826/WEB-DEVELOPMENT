document.getElementById("mySubmit").onclick=function()
{
    let fname=document.getElementById("myText").value;
    localStorage.setItem("username",fname);
    window.location.href="Submit.html";
}
let name=localStorage.getItem("username");
document.getElementById("id1").textContent="Hello"+name;
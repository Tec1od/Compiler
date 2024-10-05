

function run(){
    let htmlCode = document.getElementById("Html-code").value;
    let cssCode = document.getElementById("Css-code").value;
    let jsCode = document.getElementById("-jscode").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode+ "</style>"; 
    output.contentWindow.eval(jsCode); 
    //we use try and catch for error
    try {
        output.contentWindow.eval(jsCode);
    } catch (e) {
        console.error('Error in JavaScript code:', e);
    }
    
    saveCode();//for storage...
};







//for storage we create a function
function saveCode() {
    localStorage.setItem("htmlCode", document.getElementById("Html-code").value);
    localStorage.setItem("cssCode", document.getElementById("Css-code").value);
    localStorage.setItem("jsCode", document.getElementById("Js-code").value);
}

//and that is for loading...

function loadCode() {
    document.getElementById("Html-code").value = localStorage.getItem("htmlCode") || "";
    document.getElementById("Css-code").value = localStorage.getItem("cssCode") || "";
    document.getElementById("Js-code").value = localStorage.getItem("jsCode") || "";
    run();
}


//and the last we load the widnow with onload function.

window.onload = loadCode;




function formatJS() {
    const jsCode = document.getElementById('js-editor').value;
    const formattedJs = prettier.format(jsCode, { parser: "babel" });
    document.getElementById('js-editor').value = formattedJs;
  }


  




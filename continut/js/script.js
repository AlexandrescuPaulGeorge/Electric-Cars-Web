function _(selector){
  return document.querySelector(selector);
}
function setup(){
  let canvas = createCanvas(300,200);
  canvas.parent("canvas-wrapper");
  background(255);
}
function mouseDragged(){
  let type = _("#pen-pencil").checked?"pencil":"brush";
  let size=parseInt(_("#pen-size").value);
  let color = _("#pen-color").value;
  fill(color);
  stroke(color);

  if(type=="pencil"){
      line (pmouseX,pmouseY,mouseX,mouseY);
  } else{
      ellipse(mouseX,mouseY,size,size);
  }
}
_("#reset-canvas").addEventListener("click",function(){
  background(255);
});

function tableRow() {
    var table = document.getElementById("Table");
    var nr = document.getElementById("NrTabel").value
    var row = table.insertRow(nr);
    var cell = row.insertCell(0);
    cell.style.width = '40px';
    cell.style.height = '20px';
    var culoare = document.getElementById("colorTabel").value
    cell.style.backgroundColor = culoare;
  }
  
  function tableCell() {
    var nr = document.getElementById("NrTabel").value
    var table = document.getElementById("Table").rows.item(nr);
  
    var cell = table.insertCell(-1);
    cell.innerHTML = "         ";
    cell.style.width = '40px';
    cell.style.height = '20px';
    var culoare = document.getElementById("colorTabel").value
    cell.style.backgroundColor = culoare;
  }
  
  function schimbaContinut(resursa, jsFisier, jsFunctie) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("continut").innerHTML = xhttp.responseText;
        if (jsFisier) {
          var elementScript = document.createElement('script');
          elementScript.onload = function () {
            console.log("hello");
            if (jsFunctie) {
              window[jsFunctie]();
            }
          };
          elementScript.src = jsFisier;
          document.head.appendChild(elementScript);
        } else {
          if (jsFunctie) {
            window[jsFunctie]();
          }
        }
      }
    };
    xhttp.open("GET", resursa + ".html", true);
    xhttp.send();
  }
  
  function valideazaUtilizatori() {
    var xhttp = new XMLHttpRequest();
    var parser, JSONdoc;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parser = new DOMParser();
            JSONdoc = JSON.parse(xhttp.responseText);
        };
        var raspuns="INVALID";
        for(i in JSONdoc)
        {
          if(JSONdoc[i].utilizator==document.getElementById("utilizator").value && JSONdoc[i].parola==document.getElementById("parola").value )
          {
            raspuns="VALID"
          }
        }
        document.getElementById("raspuns").innerHTML=raspuns
    }
    xhttp.open("GET", "../resurse/utilizatori.json", true);
    xhttp.send();
  }
  
  

function incarcaPersoane() {
    var xhttp = new XMLHttpRequest();
    var parser, xmldoc;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var table = "<table id=\"XMLtable\" border=\"2\"><tr><th class =\"th\">Nume</th><th class =\"th\">Prenume</th><th class = \"th\">Varsta</th><th class = \"th\">Adresa</th><th class = \"th\">Numar telefon</th><th class = \"th\">Adresa mail</th><th class = \"th\">Data</th></tr>"
            parser = new DOMParser();
            xmldoc = parser.parseFromString(xhttp.responseText, "text/xml");
            var pers = xmldoc.getElementsByTagName("persoana");
            for(var i=0; i<pers.length; ++i){
                table+="<tr><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("nume")[0].innerHTML;
                table+="</td><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("prenume")[0].innerHTML;
                table+="</td><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("varsta")[0].innerHTML;
                table+="</td><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("adresa")[0].innerHTML;
                table+="</td><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("gen")[0].innerHTML;
                table+="</td><td>"+xmldoc.getElementsByTagName("persoana")[i].getElementsByTagName("educatie")[0].innerHTML;
            }
            document.getElementById("continut").innerHTML = table;

        };
    }
    xhttp.open("GET", "../resurse/persoane.xml", true);
    xhttp.send();
}
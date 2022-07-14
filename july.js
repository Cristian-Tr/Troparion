document.addEventListener('DOMContentLoaded', function () {



    //Calendar with saints
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var saints;
    var colors;
    var colorCross;




    if (month == 6) {
        
        if (day == 1) {
            saints = "Sfinții Doctori fără de arginți Cosma și Damian";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 2) {
            saints = "Sfântul Voievod Ștefan cel Mare";
            colors = "blue";
            colorCross = "blue";
        }

        if (day == 3) {
            saints = "Sfântul Mucenic Iachint";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 4) {
            saints = "Sfântul Ierarh Andrei, Arhiepiscopul Cretei";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 5) {
            saints = "Sfântul Cuvios Atanasie Athonitul";
            colors = "black";
            colorCross = "black";
        }

        if (day == 6) {
            saints = "Sfântul Cuvios Sisoe cel Mare";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 7) {
            saints = "Sfântul Mare Muceniță Chiriachi";
            colors = "black";
            colorCross = "black";
        }

        if (day == 8) {
            saints = "Sfântul Mucenic Epictet preotul";
            colors = "blue";
            colorCross = "blue";
        }

        if (day == 9) {
            saints = "Cinstirea Icoanei Maicii Domnului Îndrumătoarea de la Mânăstirea Neamț, Sfântul Mucenic Pangratie";
            colors = "blue";
            colorCross = "blue";
        }

        if (day == 10) {
            saints = "Sfinții 45 de Mucenici din Nicopolea Armeniei";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 11) {
            saints = "Sfântul Mare Muceniță Eufimia";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 12) {
            saints = "Cinstirea Sfintei Icoane a Maicii Domnului Prodromița, Sfântul Cuvios Paisie Aghioritul";
            colors = "blue";
            colorCross = "blue";
        }

        if (day == 13) {
            saints = "Soborul Sfântului Arhanghel Gavriil";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 14) {
            saints = "Sfântul Cuvios Nicodim Aghioritul";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 15) {
            saints = "Sfântul Vladimir Luminătorul Rusiei";
            colors = "green";
            colorCross = "transparent";
        }

        if (day == 16) {
            saints = "Sfânta Muceniță Iulia";
            colors = "green";
            colorCross = "transparent";
        }

        if (day == 17) {
            saints = "Sfântul Mare Muceniță Marina";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 18) {
            saints = "Sfântul Mucenic Emilian de la Durostorum";
            colors = "blue";
            colorCross = "blue";
        }

        if (day == 19) {
            saints = "Sfânta Cuvioasă Macrina";
            colors = "blue";
        }

        if (day == 20) {
            saints = "Sfântul și slăvitul Proroc Ilie Tesviteanul";
            colors = "blue";
            colorCross = "red";
        }

        if (day == 21) {
            saints = "Sfântul Proroc Iezechiel";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 22) {
            saints = "Sfânta Mironosiță întocmai cu Apostolii Maria Magdalena";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 23) {
            saints = "Aducerea moaștelor Sfântului Sfințit Mucenic Foca";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 24) {
            saints = "Sfânta Mare Muceniță Hristina";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 25) {
            saints = "Adormirea Sfintei Ana, mama Maicii Domnului";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 26) {
            saints = "Sf. Sfințit Mucenic Ermolae";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 27) {
            saints = "Sfântul Mare Mucenic și tămăduitor Pantelimon";
            colors = "black";
            colorCross = "black";
        }

        if (day == 28) {
            saints = "Sfântul Apostol și Diacon Timon";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 29) {
            saints = "Sfântul Mucenic Calinic";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 30) {
            saints = "Sfântul Apostol Andronic";
            colors = "blue";
            colorCross = "transparent";
        }

        if (day == 21) {
            saints = "Sfântul și Dreptul Evdochim";
            colors = "blue";
            colorCross = "transparent";
        }

    }



    document.querySelector("#saint").innerHTML = "<br>" + saints + "<br>";

    document.querySelector("#saint").style.color = colors;

    document.querySelector("#colorCross").style.color = colorCross;




}); 
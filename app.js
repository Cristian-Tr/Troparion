// ============================================================
// ============================================================
// LOGICA PRINCIPALA - APP.JS
// ACEST SCRIPT CONTROLEAZA DATA, HEADER-UL SI LISTELE
// CU PRIORITATE PENTRU SARBATORILE SCHIMBATOARE (00.js)
// ============================================================
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    // --- 1. LOGICA HEADER (DATA) ---
    const dataAzi = new Date();
    const ziSaptamanii = dataAzi.getDay(); // 0 este Duminica, 1 Luni, etc.
    const zi = String(dataAzi.getDate()).padStart(2, '0');
    const luna = String(dataAzi.getMonth() + 1).padStart(2, '0');
    const an = dataAzi.getFullYear();

    const afisajData = document.getElementById('todayDate');
    if (afisajData) {
        const optiuni = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        let dataFormata = dataAzi.toLocaleDateString('ro-RO', optiuni);
        afisajData.innerText = dataFormata.charAt(0).toUpperCase() + dataFormata.slice(1);
    }

    // Încărcăm fișierul cu sărbătorile schimbătoare (00.js)
    const scriptSchimbatoare = document.createElement('script');
    scriptSchimbatoare.src = "00.js";

    // Încărcăm fișierul lunii curente (ex: "07.js")
    const scriptLuna = document.createElement('script');
    scriptLuna.src = luna + ".js";

    // Declanșăm logica de afișare după ce s-a încărcat fișierul lunii fixe
    scriptLuna.onload = function () {
        const crossElem = document.getElementById("colorCross");
        const memorialElem = document.querySelector(".memorialDay");
        const descElem = document.getElementById("todayDescription");

        // Formatul cheii pentru sărbători schimbătoare din 00.js (ex: "04-25")
        const cheieSchimbatoare = `${luna}-${zi}`;
        const cheieSimpla = zi;

        let dateDeAfisat = null;

        // VERIFICĂM PRIORITATEA: Căutăm mai întâi în 00.js (pe anul curent)
        if (window.dateSchimbatoare && window.dateSchimbatoare[an] && window.dateSchimbatoare[an][cheieSchimbatoare]) {
            dateDeAfisat = window.dateSchimbatoare[an][cheieSchimbatoare];
        }
        // FALLBACK: Dacă nu e sărbătoare schimbătoare, căutăm în luna fixă (ex: 07.js)
        else if (window.dateLuna && window.dateLuna[cheieSimpla]) {
            dateDeAfisat = window.dateLuna[cheieSimpla];
        }

        if (dateDeAfisat) {
            if (memorialElem) memorialElem.innerText = dateDeAfisat.nume;
            if (descElem) descElem.innerText = dateDeAfisat.tropar;

            let culoareFinala = dateDeAfisat.culoare || "cyan";

            // REGULA NOUĂ: Dacă e Duminică, forțăm culoarea roșie
            if (ziSaptamanii === 0) {
                culoareFinala = "red";
            }

            // GESTIONARE VIZIBILITATE CRUCE ÎN FUNCTIE DE CULOARE
            if (crossElem) {
                if (culoareFinala === "incolor") {
                    // 1. Ascundem crucea complet
                    crossElem.style.visibility = "hidden";
                    crossElem.style.opacity = "0";

                    // 2. Forțăm ambele texte să devină CYAN în zilele obișnuite
                    if (memorialElem) memorialElem.style.setProperty("color", "cyan", "important");
                    if (descElem) descElem.style.setProperty("color", "cyan", "important");
                } else {
                    // 1. Afișăm crucea și o colorăm (ex: "red")
                    crossElem.style.visibility = "visible";
                    crossElem.style.opacity = "1";
                    crossElem.style.color = culoareFinala;

                    // 2. Ambele texte iau culoarea specială de sărbătoare
                    if (memorialElem) memorialElem.style.setProperty("color", culoareFinala, "important");
                    if (descElem) descElem.style.setProperty("color", culoareFinala, "important");
                }
            }
        }
    };

    genereazaEnciclopedia();
    activeazaMeniuri();

    // Introducem ambele scripturi în container
    const containerScript = document.getElementById('script-container');
    if (containerScript) {
        containerScript.appendChild(scriptSchimbatoare); // adaugă 00.js
        containerScript.appendChild(scriptLuna);         // adaugă luna curentă
    }
});

function genereazaEnciclopedia() {
    const config = [
        { id: 'lista-rugaciuni', date: window.dateRugaciuni, camp: 'rugaciune' },
        { id: 'lista-citate', date: window.dateCitate, camp: 'citat' },
        { id: 'lista-reflectii', date: window.dateReflectii, camp: 'reflectie' },
        { id: 'lista-retete-post', date: window.datePost, camp: 'retetaPost' },
        { id: 'lista-retete-peste', date: window.datePeste, camp: 'retetaPeste' },
        { id: 'lista-retete-ovolacto', date: window.dateOvolacto, camp: 'retetaOvolacto' }
    ];

    config.forEach(item => {
        const container = document.getElementById(item.id);
        if (!container || !item.date) return;
        container.innerHTML = "";

        item.date.forEach(subiect => {
            const dt = document.createElement('dt');
            dt.innerHTML = `<strong class="titlu-subiect">${subiect.subjectName}</strong>`;

            const dd = document.createElement('dd');
            dd.innerHTML = `<div class="text-continut">${subiect[item.camp] || "Informație lipsă"}</div>`;
            dd.style.display = 'none';

            dt.onclick = function () {
                container.querySelectorAll('dd').forEach(el => {
                    if (el !== dd && window.getComputedStyle(el).display === 'block') {
                        slideToggleCustom(el, 200);
                    }
                });
                slideToggleCustom(dd, 250);
            };
            container.appendChild(dt);
            container.appendChild(dd);
        });
    });
}

function activeazaMeniuri() {
    document.querySelectorAll('.column-page .menu-btn').forEach(buton => {
        buton.onclick = function () {
            const listaMea = this.parentElement.querySelector('.menu-content');
            if (!listaMea) return;

            document.querySelectorAll('.column-page .menu-content').forEach(contentDiv => {
                if (contentDiv !== listaMea && window.getComputedStyle(contentDiv).display === 'block') {
                    slideToggleCustom(contentDiv, 200);
                }
            });
            slideToggleCustom(listaMea, 250);
        };
    });
}

function slideToggleCustom(element, duration = 250) {
    const isHidden = window.getComputedStyle(element).display === 'none';

    if (isHidden) {
        element.style.display = 'block';
        let h = element.scrollHeight;
        element.animate([
            { height: '0px', opacity: 0 },
            { height: h + 'px', opacity: 1 }
        ], { duration, easing: 'ease-out' });
    } else {
        let h = element.offsetHeight;
        const animation = element.animate([
            { height: h + 'px', opacity: 1 },
            { height: '0px', opacity: 0 }
        ], { duration, easing: 'ease-in' });

        animation.onfinish = () => {
            element.style.display = 'none';
        };
    }
}
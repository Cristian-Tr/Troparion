// ============================================================
// ============================================================
// LOGICA PRINCIPALA - APP.JS
// ACEST SCRIPT CONTROLEAZA DATA, HEADER-UL SI LISTELE
// CU PRIORITATE PENTRU SARBATORILE SCHIMBATOARE (00.js)
// ============================================================
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // ============================================================
    // ZONA 1
    // ============================================================
    // ============================================================

    // --- 1. LOGICA HEADER (DATA) ---
    const dataAzi = new Date();
    const ziSaptamanii = dataAzi.getDay(); // 0 = Duminică, 1 = Luni, ..., 6 = Sâmbătă
    const zi = String(dataAzi.getDate()).padStart(2, '0');
    const luna = String(dataAzi.getMonth() + 1).padStart(2, '0');
    const an = dataAzi.getFullYear();

    const afisajData = document.getElementById('todayDate');
    if (afisajData) {
        const optiuni = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        let dataFormata = dataAzi.toLocaleDateString('ro-RO', optiuni);
        afisajData.innerText = dataFormata.charAt(0).toUpperCase() + dataFormata.slice(1);
    }

    // --- 2. INJECTARE ASINCRONĂ SCRIPTURI ---
    const scriptSchimbatoare = document.createElement('script');
    scriptSchimbatoare.src = "00.js";

    const scriptLuna = document.createElement('script');
    scriptLuna.src = luna + ".js";

    let incarcate = 0;
    function contorIncarcare() {
        incarcate++;
        if (incarcate === 2) {
            ruleazaAfisajMacheta();
            actualizeazaCalendarLunar();
        }
    }

    scriptSchimbatoare.onload = contorIncarcare;
    scriptLuna.onload = contorIncarcare;

    const containerScript = document.getElementById('script-container');
    if (containerScript) {
        containerScript.appendChild(scriptSchimbatoare);
        containerScript.appendChild(scriptLuna);
    }

    // --- 3. ALGORITMUL OUDIN ȘI LOGICA INTEGRALĂ ---
    function calculeazaPaste(anulCurent) {
        const G = anulCurent % 19;
        const I = ((19 * G) + 15) % 30;
        const J = (anulCurent + Math.floor(anulCurent / 4) + I) % 7;
        const L = I - J;

        const lunaIulian = 3 + Math.floor((L + 40) / 44);
        const ziuaIulian = L + 28 - 31 * Math.floor(lunaIulian / 4);

        const dataPasteIulian = new Date(anulCurent, lunaIulian - 1, ziuaIulian);
        return new Date(dataPasteIulian.getTime() + (13 * 24 * 60 * 60 * 1000));
    }

    function obtineCheieData(dataBaza, nrZile) {
        const copieData = new Date(dataBaza.getTime());
        copieData.setDate(copieData.getDate() + nrZile);
        const l = String(copieData.getMonth() + 1).padStart(2, '0');
        const z = String(copieData.getDate()).padStart(2, '0');
        return `${l}-${z}`;
    }

    function esteAnBisect(anCurent) {
        return (anCurent % 4 === 0 && anCurent % 100 !== 0) || (anCurent % 400 === 0);
    }

    // --- 4. REGULI PENTRU TIPUL DE MENIU / POST (.menuType) ---
    function determinaTipMeniu(dataCurenta, ziSapt, duminicaPastelui, anCurent) {
        const l = dataCurenta.getMonth() + 1;
        const z = dataCurenta.getDate();

        const esteIntre = (lunaStart, ziStart, lunaSfarsit, ziSfarsit) => {
            const curentVal = l * 100 + z;
            const startVal = lunaStart * 100 + ziStart;
            const sfarsitVal = lunaSfarsit * 100 + ziSfarsit;
            return curentVal >= startVal && curentVal <= sfarsitVal;
        };

        const esteDataFixa = (lunaFix, ziFix) => l === lunaFix && z === ziFix;
        const esteAceeasiZi = (d1, d2) => d1.toDateString() === d2.toDateString();

        const offsetBisect = esteAnBisect(anCurent) ? -1 : 0;

        const floriiDate = new Date(duminicaPastelui.getTime());
        floriiDate.setDate(floriiDate.getDate() - 7);

        const postMareStart = new Date(duminicaPastelui.getTime());
        postMareStart.setDate(postMareStart.getDate() - 48 + offsetBisect);

        const postMareSfarsit = new Date(duminicaPastelui.getTime());
        postMareSfarsit.setDate(postMareSfarsit.getDate() - 1);

        const pasteZile3 = new Date(duminicaPastelui.getTime());
        pasteZile3.setDate(pasteZile3.getDate() + 3);

        const izvorulTamaduirii = new Date(duminicaPastelui.getTime());
        izvorulTamaduirii.setDate(izvorulTamaduirii.getDate() + 5);

        const postApostoliStart = new Date(duminicaPastelui.getTime());
        postApostoliStart.setDate(postApostoliStart.getDate() + 57);

        const postApostoliSfarsit = new Date(anCurent, 5, 28);

        const saptamanaBranzeiStart = new Date(duminicaPastelui.getTime());
        saptamanaBranzeiStart.setDate(saptamanaBranzeiStart.getDate() - 55 + offsetBisect);
        const saptamanaBranzeiSfarsit = new Date(duminicaPastelui.getTime());
        saptamanaBranzeiSfarsit.setDate(saptamanaBranzeiSfarsit.getDate() - 49 + offsetBisect);

        const harciVamesStart = new Date(duminicaPastelui.getTime());
        harciVamesStart.setDate(harciVamesStart.getDate() - 70 + offsetBisect);
        const harciVamesSfarsit = new Date(duminicaPastelui.getTime());
        harciVamesSfarsit.setDate(harciVamesSfarsit.getDate() - 65 + offsetBisect);

        // PRIORITATE 1
        if (esteAceeasiZi(dataCurenta, pasteZile3) || esteAceeasiZi(dataCurenta, izvorulTamaduirii)) {
            return { text: "Harți", culoare: "white" };
        }

        if (ziSapt === 3 || ziSapt === 5) {
            if (esteIntre(12, 25, 12, 31) || esteIntre(1, 1, 1, 4) || esteDataFixa(1, 6)) {
                return { text: "Harți", culoare: "white" };
            }
        }

        if (ziSapt === 3 || ziSapt === 5) {
            if (dataCurenta >= harciVamesStart && dataCurenta <= harciVamesSfarsit) {
                return { text: "Harți", culoare: "white" };
            }
        }

        if (dataCurenta >= saptamanaBranzeiStart && dataCurenta <= saptamanaBranzeiSfarsit) {
            return { text: "Dezlegare la ouă și lactate", culoare: "white" };
        }

        if (ziSapt === 3 || ziSapt === 5) {
            const pastePlus7 = new Date(duminicaPastelui.getTime());
            pastePlus7.setDate(pastePlus7.getDate() + 7);
            const pastePlus40 = new Date(duminicaPastelui.getTime());
            pastePlus40.setDate(pastePlus40.getDate() + 40);

            if (dataCurenta >= pastePlus7 && dataCurenta <= pastePlus40) {
                return { text: "Dezlegare la pește", culoare: "white" };
            }
        }

        if (ziSapt === 3 || ziSapt === 5) {
            if (
                esteDataFixa(9, 8) || esteDataFixa(10, 1) || esteIntre(12, 28, 1, 5) ||
                esteDataFixa(1, 7) || esteDataFixa(2, 2) || esteDataFixa(6, 24) ||
                esteDataFixa(6, 29) || esteDataFixa(6, 30) || esteDataFixa(8, 15)
            ) {
                return { text: "Dezlegare la pește", culoare: "white" };
            }
        }

        const esteWeekend = (ziSapt === 0 || ziSapt === 6);
        const inPerioadaCraciunWeekend = esteIntre(11, 15, 12, 20);
        const esteFloriiExact = esteAceeasiZi(dataCurenta, floriiDate);

        if (
            (esteWeekend && inPerioadaCraciunWeekend) ||
            esteDataFixa(11, 14) || esteDataFixa(11, 21) || esteDataFixa(12, 6) ||
            esteDataFixa(3, 25) || esteFloriiExact || esteDataFixa(8, 6)
        ) {
            return { text: "Dezlegare la pește", culoare: "white" };
        }

        // PRIORITATE 2
        const inPostCraciun = esteIntre(11, 15, 12, 24);
        const inPostMare = dataCurenta >= postMareStart && dataCurenta <= postMareSfarsit;
        const inPostAdormirea = esteIntre(8, 1, 8, 14);
        const inPostApostoli = dataCurenta >= postApostoliStart && dataCurenta <= postApostoliSfarsit;

        if (
            inPostCraciun || inPostMare || inPostAdormirea || inPostApostoli ||
            esteDataFixa(1, 5) || esteDataFixa(9, 14) || esteDataFixa(8, 29)
        ) {
            return { text: "Post", culoare: "white" };
        }

        if (ziSapt === 3 || ziSapt === 5) {
            return { text: "Post", culoare: "white" };
        }

        return { text: "", culoare: "white" };
    }

    function ruleazaAfisajMacheta() {
        const crossElem = document.getElementById("colorCross");
        const memorialElem = document.querySelector(".memorialDay");
        const descElem = document.getElementById("todayDescription");
        const dateElem = document.getElementById("todayDate");
        const troparTitleElem = document.getElementById("troparTitle");
        const menuTypeElem = document.querySelector(".menuType");

        const cheieCurentaMobili = `${luna}-${zi}`;
        const cheieSimplaFixi = zi;

        const duminicaPastelui = calculeazaPaste(an);
        let dateDeAfisat = null;
        let esteSarbatoareMobila = false;

        if (window.sabloaneSchimbatoare) {
            if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, -7)) {
                dateDeAfisat = window.sabloaneSchimbatoare["florii"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 0)) {
                dateDeAfisat = window.sabloaneSchimbatoare["paste1"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 1)) {
                dateDeAfisat = window.sabloaneSchimbatoare["paste2"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 2)) {
                dateDeAfisat = window.sabloaneSchimbatoare["paste3"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 5)) {
                dateDeAfisat = window.sabloaneSchimbatoare["izvor"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 39)) {
                dateDeAfisat = window.sabloaneSchimbatoare["inaltarea"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 49)) {
                dateDeAfisat = window.sabloaneSchimbatoare["rusalii"];
                esteSarbatoareMobila = true;
            } else if (cheieCurentaMobili === obtineCheieData(duminicaPastelui, 50)) {
                dateDeAfisat = window.sabloaneSchimbatoare["treime"];
                esteSarbatoareMobila = true;
            }
        }

        if (!esteSarbatoareMobila && window.dateLuna && window.dateLuna[cheieSimplaFixi]) {
            dateDeAfisat = window.dateLuna[cheieSimplaFixi];
        }

        if (dateDeAfisat) {
            if (memorialElem) memorialElem.innerText = dateDeAfisat.nume;
            if (descElem) descElem.innerText = dateDeAfisat.tropar;

            let culoareFinala = dateDeAfisat.culoare || "white";

            if (ziSaptamanii === 0 && (culoareFinala === "white" || culoareFinala === "incolor")) {
                culoareFinala = "red";
            }

            if (crossElem) {
                if (culoareFinala === "incolor") {
                    crossElem.style.visibility = "hidden";
                    crossElem.style.opacity = "0";
                    culoareFinala = "white";
                } else if (esteSarbatoareMobila || culoareFinala === "red") {
                    crossElem.style.visibility = "visible";
                    crossElem.style.opacity = "1";
                    crossElem.style.color = culoareFinala;
                } else {
                    crossElem.style.visibility = "hidden";
                    crossElem.style.opacity = "0";
                }
            }

            if (dateElem) dateElem.style.setProperty("color", culoareFinala, "important");
            if (troparTitleElem) troparTitleElem.style.setProperty("color", culoareFinala, "important");
            if (memorialElem) memorialElem.style.setProperty("color", culoareFinala, "important");
            if (descElem) descElem.style.setProperty("color", culoareFinala, "important");
        }

        if (menuTypeElem) {
            const rezultatMeniu = determinaTipMeniu(dataAzi, ziSaptamanii, duminicaPastelui, an);
            menuTypeElem.innerText = rezultatMeniu.text;
            menuTypeElem.style.setProperty("color", rezultatMeniu.culoare, "important");
        }
    }


    // ============================================================
    // ============================================================
    // ZONA 2
    // ============================================================
    // ============================================================

    if (typeof genereazaEnciclopedia === "function") genereazaEnciclopedia();
    if (typeof activeazaMeniuri === "function") activeazaMeniuri();


    // ============================================================
    // ============================================================
    // ZONA 3
    // ============================================================
    // ============================================================

    const numeLuni = ["IAN", "FEB", "MAR", "APR", "MAI", "IUN", "IUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const numeZileSaptamana = ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"];

    let anCurentSelectat = new Date().getFullYear();
    let lunaCurentaSelectata = new Date().getMonth(); // 0 - 11

    const spanAn = document.getElementById('afisajAn');
    const spanLuna = document.getElementById('afisajLuna');
    const tabelContainer = document.getElementById('tabelCalendarLunar');

    const btnAnSus = document.getElementById('anSus');
    const btnAnJos = document.getElementById('anJos');
    const btnLunaSus = document.getElementById('lunaSus');
    const btnLunaJos = document.getElementById('lunaJos');

    const obtineEmojiMeniu = (textMeniu) => {
        if (textMeniu === "Post") return "🌱🍎";
        if (textMeniu === "Dezlegare la pește") return "🐟🍷";
        if (textMeniu === "Dezlegare la ouă și lactate") return "🥚🧀 ";
        if (textMeniu === "Harți") return "🍗🧀🥚🍷";
        return "";
    };

    function incarcaLunaSiRandeaza(lunaIndex) {
        const nrLunaStr = String(lunaIndex + 1).padStart(2, '0');
        const numeFisier = `${nrLunaStr}.js`;

        if (window.dateLunaFisierCurent === nrLunaStr) {
            actualizeazaCalendarLunar();
            return;
        }

        const scriptDinamic = document.createElement('script');
        scriptDinamic.src = numeFisier;
        scriptDinamic.onload = function () {
            window.dateLunaFisierCurent = nrLunaStr;
            actualizeazaCalendarLunar();
        };
        scriptDinamic.onerror = function () {
            actualizeazaCalendarLunar();
        };
        document.head.appendChild(scriptDinamic);
    }

    function actualizeazaCalendarLunar() {
        if (!spanAn || !spanLuna || !tabelContainer) return;

        spanAn.innerText = anCurentSelectat;
        spanLuna.innerText = numeLuni[lunaCurentaSelectata];

        const ieiUltimaZi = new Date(anCurentSelectat, lunaCurentaSelectata + 1, 0);
        const totalZileLuna = ieiUltimaZi.getDate();
        const duminicaPastelui = calculeazaPaste(anCurentSelectat);

        let htmlTabel = "";

        for (let ziCurenta = 1; ziCurenta <= totalZileLuna; ziCurenta++) {
            const dataCurentaIterata = new Date(anCurentSelectat, lunaCurentaSelectata, ziCurenta);
            const ziSaptamaniiIterata = dataCurentaIterata.getDay();
            const textZiSaptamana = numeZileSaptamana[ziSaptamaniiIterata];

            const strZi = String(ziCurenta).padStart(2, '0');
            const strLuna = String(lunaCurentaSelectata + 1).padStart(2, '0');
            const cheieMobiliIterata = `${strLuna}-${strZi}`;

            let numeSarbatoare = "";
            let culoareZi = "white";
            let esteSarbMob = false;

            if (window.sabloaneSchimbatoare) {
                if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, -7)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["florii"]?.nume || "Duminica Floriilor";
                    culoareZi = window.sabloaneSchimbatoare["florii"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 0)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["paste1"]?.nume || "Sfânta Paști";
                    culoareZi = window.sabloaneSchimbatoare["paste1"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 1)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["paste2"]?.nume || "A doua zi de Paști";
                    culoareZi = window.sabloaneSchimbatoare["paste2"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 2)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["paste3"]?.nume || "A treia zi de Paști";
                    culoareZi = window.sabloaneSchimbatoare["paste3"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 5)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["izvor"]?.nume || "Izvorul Tămăduirii";
                    culoareZi = window.sabloaneSchimbatoare["izvor"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 39)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["inaltarea"]?.nume || "Înălțarea Domnului";
                    culoareZi = window.sabloaneSchimbatoare["inaltarea"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 49)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["rusalii"]?.nume || "Rusaliile";
                    culoareZi = window.sabloaneSchimbatoare["rusalii"]?.culoare || "red";
                    esteSarbMob = true;
                } else if (cheieMobiliIterata === obtineCheieData(duminicaPastelui, 50)) {
                    numeSarbatoare = window.sabloaneSchimbatoare["treime"]?.nume || "Lunea Sf. Treimi";
                    culoareZi = window.sabloaneSchimbatoare["treime"]?.culoare || "red";
                    esteSarbMob = true;
                }
            }

            if (!esteSarbMob) {
                if (window.dateLuna && window.dateLuna[strZi]) {
                    numeSarbatoare = window.dateLuna[strZi].nume || "";
                    culoareZi = window.dateLuna[strZi].culoare || "white";
                } else {
                    numeSarbatoare = "";
                }
            }

            if (ziSaptamaniiIterata === 0 && (culoareZi === "white" || culoareZi === "incolor")) {
                culoareZi = "red";
            }

            let stilCruce = `margin-right: 6px;`;
            let stilText = `color: white; font-weight: normal;`;

            if (culoareZi && culoareZi !== "white" && culoareZi !== "incolor") {
                stilCruce += ` color: ${culoareZi}; visibility: visible;`;
                stilText = ` color: ${culoareZi}; font-weight: bold;`;
            } else {
                stilCruce += " visibility: hidden;";
            }

            const rezultatMeniu = determinaTipMeniu(dataCurentaIterata, ziSaptamaniiIterata, duminicaPastelui, anCurentSelectat);
            const emojiMeniu = obtineEmojiMeniu(rezultatMeniu.text);

            htmlTabel += `
                <tr>
                    <td style="padding: 8px 0px 8px 5px; width: 17%; text-align: center; ${stilText}">
                        ${textZiSaptamana} ${ziCurenta}
                    </td>
                    <td style="padding: 8px 0px 8px 3px; width: 68%; ${stilText}">
                        <span style="${stilCruce}">&#10015;</span>${numeSarbatoare}
                    </td>
                    <td style="padding: 8px 0px; width: 15%; text-align: center; font-size: 1em;">${emojiMeniu}</td>
                </tr>
            `;
        }

        tabelContainer.innerHTML = htmlTabel;
        const containerScroll = document.getElementById('containerTabelLunar');
        if (containerScroll) containerScroll.scrollTop = 0;
    }

    if (btnAnSus) {
        btnAnSus.addEventListener('click', () => {
            if (anCurentSelectat < 2100) { anCurentSelectat++; incarcaLunaSiRandeaza(lunaCurentaSelectata); }
        });
    }

    if (btnAnJos) {
        btnAnJos.addEventListener('click', () => {
            if (anCurentSelectat > 2000) { anCurentSelectat--; incarcaLunaSiRandeaza(lunaCurentaSelectata); }
        });
    }

    if (btnLunaSus) {
        btnLunaSus.addEventListener('click', () => {
            lunaCurentaSelectata = (lunaCurentaSelectata + 1) % 12;
            incarcaLunaSiRandeaza(lunaCurentaSelectata);
        });
    }

    if (btnLunaJos) {
        btnLunaJos.addEventListener('click', () => {
            lunaCurentaSelectata = (lunaCurentaSelectata - 1 + 12) % 12;
            incarcaLunaSiRandeaza(lunaCurentaSelectata);
        });
    }
});


// ============================================================
// ============================================================
// FUNCȚII AUXILIARE GLOBALE (ZONA 2)
// ============================================================
// ============================================================

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
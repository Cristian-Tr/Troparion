
document.addEventListener('DOMContentLoaded', function () {



    //Data curenta in limba romana
    let date = new Date();

    let dayNumber = date.getDate();

    let monthName = new Array(7);
    monthName[0] = "Ianuarie";
    monthName[1] = "Februarie";
    monthName[2] = "Martie";
    monthName[3] = "Aprilie";
    monthName[4] = "Mai";
    monthName[5] = "Iunie";
    monthName[6] = "Iulie";
    monthName[7] = "August";
    monthName[8] = "Septembrie";
    monthName[9] = "Octombrie";
    monthName[10] = "Noiembrie";
    monthName[11] = "Decembrie";
    let monthNames = monthName[date.getMonth()];

    let weekDay = new Array(7);
    weekDay[0] = "Duminică";
    weekDay[1] = "Luni";
    weekDay[2] = "Marți";
    weekDay[3] = "Miercuri";
    weekDay[4] = "Joi";
    weekDay[5] = "Vineri";
    weekDay[6] = "Sâmbătă";
    let dayName = weekDay[date.getDay()];

    let year = date.getFullYear();

    var dateSaint = dayName + "<br>" + dayNumber + " " + monthNames + " " + year;

    document.querySelector('#dateSaint').innerHTML = dateSaint;




    //Troparele sfintilor, schimbare culori text

    var calendarDates = new Date();
    var day = calendarDates.getDate();
    var month = calendarDates.getMonth();
    var calendarYears = calendarDates.getFullYear();
    var saints;
    var colors;
    var colorCross;
    var religiousSongs;




    //Troparele lunii iulie

    if (month == 6) {

        if (day == 1) {
            saints = "Sfântul Ierarh Leontie de la Rădăuţi";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Cu nevoinţe duhovniceşti toată viaţa ţi-ai petrecut-o şi, primind vrednicia arhieriei, cu smerenie şi cu frică de Dumnezeu ai slujit Biserica lui Hristos, pe Care roagă-L, Sfinte Ierarhe Leontie, să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            saints = "Sfântul Voievod Ștefan cel Mare";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Apărător neînfricat al credinței și patriei străbune, mare ctitor de locașuri sfinte, Ștefane Voievod, roagă pe Hristos Dumnezeu, să ne izbăvească din nevoi și din necazuri.";
        }

        if (day == 3) {
            saints = "Sfântul Mucenic Iachint";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Iachint, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saints = "Sfântul Ierarh Andrei, Arhiepiscopul Cretei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curaţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Ierarhe Andrei, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saints = "Sfântul Cuvios Atanasie Athonitul";
            colors = "black";
            colorCross = "black";
            religiousSongs = "De viaţa ta cea în trup s-au minunat cetele îngereşti, cum, cu trupul, la luptele cele nevăzute ai ieşit, pururea mărite şi ai rănit cetele demonice. Pentru care, Sfinte Atanasie, Hristos ţi-a răsplătit cu bogate daruri. Drept aceea, părinte, roagă-te lui Hristos Dumnezeu să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saints = "Sfântul Cuvios Sisoe cel Mare";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Sisoe; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 7) {
            saints = "Sfântul Mare Muceniță Chiriachi";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Chiriachi, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 8) {
            saints = "Sfinții Mucenici Epictet și Astion ";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Mucenicii Tăi, Doamne, Epictet și Astion, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 9) {
            saints = "Sfântului Sfinţit Mucenic Pangratie, Episcopul Taorminei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Pangratie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 10) {
            saints = "Sfinții 45 de Mucenici din Nicopolea Armeniei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saints = "Sfântul Mare Muceniță Eufimia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Ai veselit pe cei credincioşi şi ai ruşinat pe cei rău mărturisitori, Sfântă Mare Muceniţă Eufimia, preafumoasă fecioară a lui Hristos. Căci ai întărit dogmele Sinodului al patrulea, pe care părinţii bine le-au rânduit. Muceniţă mărită, roagă-L pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 12) {
            saints = "Cinstirea Sfintei Icoane a Maicii Domnului Prodromița, Sfântul Cuvios Paisie Aghioritul";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Născătoare de Dumnezeu, pururea Fecioară, sfintei şi dumnezeieştii icoanei tale cu dragoste şi cu credinţă închinându-ne, o sărutăm mulţumind; căci prin ea celor credincioşi dăruieşti cu adevărat tămăduiri sufletelor şi trupurilor. Pentru aceasta, grăim către tine: Slavă fecioriei tale, slavă milostivirii tale, slavă purtării tale de grijă, Ceea ce eşti Una Binecuvântată.";
        }

        if (day == 13) {
            saints = "Soborul Sfântului Arhanghel Gavriil";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mai mare Voievodule al Oştilor Cereşti, rugămu-te pe tine noi nevrednicii ca, prin rugăciunile tale, să ne acoperi pe noi cu acoperământul aripilor slavei tale celei netrupeşti, păzindu-ne pe noi, cei ce cădem cu dinadinsul şi grăim: izbăveşte-ne din nevoi, Sfinte Arhanghele Gavriil, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 14) {
            saints = "Sfântul Cuvios Nicodim Aghioritul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Săltaţi şi vă veseliţi, popoare, că, iată, în prisosul bucuriei se arată astăzi pârga cea sfântă a Athosului, folositorul şi mângâietorul nostru, blândul Nicodim. Căci prin râvna cea după Hristos Biserica o a luminat, îndreptând cele stricate şi părăsite prin nebăgare de seamă şi trecerea cu vederea, iar acum înaintea Sfintei Treimi neîncetat se roagă pentru sufletele noastre.";
        }

        if (day == 15) {
            saints = "Sfânții Mucenici Chiric și Iulita";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Chiric și Iulita, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 16) {
            saints = "Sfântul Sfinţit Mucenic Atinoghen, cu cei 10 ucenici ai săi";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Atinoghen, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            saints = "Sfânta Mare Muceniță Marina";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Marina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 18) {
            saints = "Sfântul Mucenic Emilian de la Durostorum";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Mucenicul Tău, Doamne, Emilian, întru nevoinţa sa, cununa nesctricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            saints = "Sfânta Cuvioasă Macrina";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Macrina, duhul tău.";
        }

        if (day == 20) {
            saints = "Sfântul și slăvitul Proroc Ilie Tesviteanul";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cel ce a fost înger în trup, temeiul proorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie Măritul, care a trimis de sus lui Elisei dar, goneşte bolile şi pe cei leproşi curăţeşte. Pentru aceasta şi celor ce-l cinstesc pe dânsul le izvorăşte tămăduiri.";
        }

        if (day == 21) {
            saints = "Sfinţii Cuvioşi Rafail şi Partenie de la Agapia Veche";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Următori şi împlinitori ai Evangheliei lui Hristos, Cuvioşilor Părinţi Partenie şi Rafail, sihaştrii prealuminaţi ai munţilor Moldovei; ostenindu-vă cu postul şi cu rugăciunea, aţi dobândit de la Dumnezeu aripi ale sufletului vostru, pentru aceasta vă rugăm să ne trimiteţi de la Hristos milă şi har celor ce prăznuim cu dragoste pomenirea voastră!";
        }

        if (day == 22) {
            saints = "Sfânta Mironosiță întocmai cu Apostolii Maria Magdalena";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Lui Hristos, Cel Ce pentru noi S-a născut din Fecioară, Cinstită Maria Magdalena, ai urmat şi ai păzit îndreptările şi legile Lui. Pentru aceasta, astăzi, preasfinţită pomenirea ta prăznuind, te lăudăm cu credinţă şi te cinstim cu dragoste.";
        }

        if (day == 23) {
            saints = "Aducerea moaștelor Sfântului Sfințit Mucenic Foca";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Foca, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saints = "Sfânta Mare Muceniță Hristina";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Hristina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            saints = "Adormirea Sfintei Ana, mama Maicii Domnului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pe Ceea ce a născut Viaţa în pântece o ai purtat, pe Curata Maica lui Dumnezeu, de Dumnezeu Gânditoare, Sfântă Ana. Pentru aceasta acum, la primirea cerească, unde este locaşul celor ce se veselesc întru slavă, bucurându-te acum te-ai mutat; cere pentru cei ce te cinstesc pe tine cu dragoste iertare de greşeli, pururea fericită.";
        }

        if (day == 26) {
            saints = "Sfântul Cuvios Ioanichie de la Muscel";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Locuitor în sihăstrie şi înger trupesc, de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Ioanichie; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui ce ţi-a dat ţie putere, slavă Celui ce te-a încununat pe tine, slavă Celui ce lucrează prin tine tuturor tămăduiri!";
        }

        if (day == 27) {
            saints = "Sfântul Mare Mucenic și tămăduitor Pantelimon";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Purtătorule de chinuri, Sfinte şi Tămăduitorule Pantelimon, roagă pe Milostivul Dumnezeu să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 28) {
            saints = "Sfinții Apostoli și Diaconi Prohor, Nicanor, Timon și Parmena";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli, Prohor, Nicanor, Timon și Parmena, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 29) {
            saints = "Sfântul Mucenic Calinic";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Calinic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saints = "Sfinţii Apostoli Sila, Silvan, Crescent, Epenet şi Andronic";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli, Sila, Silvan, Crescent, Epenet şi Andronic, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 31) {
            saints = "Sfântul și Dreptul Evdochim";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cel Ce te-a chemat pe tine de pe pământ la cereştile locaşuri păzeşte şi după moarte nevătămat trupul tău, Sfinte Evdochim; că tu, cu curăţie şi cu cinstită viaţă, fericite, ai vieţuit, nespurcându-ţi trupul, pentru aceasta, cu îndrăznire roagă pe Hristos Dumnezeu să ne mântuiască pe noi.";
        }

    }




    //August

    if (month == 7) {

        if (day == 1) {
            saints = "Sfinții 7 frați Mucenici Macabei cu mama lor Solomoni și dascălul Eleazar";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile sfinţilor, care pentru Tine au pătimit, fii Milostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 2) {
            saints = "Aducerea moaştelor Sfântului întâiului Mucenic şi Arhidiacon Ştefan";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu împărătească cunună a fost încununat creştetul tău, din chinurile cele pe care le-ai răbdat pentru Hristos Dumnezeu, întâi pătimitorule între mucenici. Că tu, mustrând nebunia iudeilor, ai văzut pe Mântuitorul tău de-a dreapta Tatălui. Pe Acela roagă-L pentru sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfinţii Cuvioşi Isaachie, Dalmat şi Faust";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri, Care Te porţi pururea cu noi după blândeţile Tale, nu depărta mila Ta de la noi, ci, pentru rugăciunile părinţilor noştri, îndreptează viaţa noastră în pace.";
        }

        if (day == 4) {
            saints = "Sfinţii şapte tineri din Efes";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 5) {
            saints = "Sfântul Cuvios Ioan Iacob de la Neamț";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip, căci lăsând lumea și patria ta, ai luat Crucea lui Hristos și în valea Iordanului te-ai așezat spre nevoință. Pentru aceasta și cu îngerii acum se bucură, Cuvioase Părinte Ioane, duhul tău. Roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saints = "Schimbarea la Faţă a Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Schimbatu-Te-ai la Faţă în munte, Hristoase Dumnezeule, arătând ucenicilor Tăi Slava Ta, pe cât li se putea. Strălucească şi nouă, păcătoşilor, lumina Ta cea pururea fiitoare, pentru rugăciunile Născătoarei de Dumnezeu, Dătătorule de lumină, slavă Ţie.";
        }

        if (day == 7) {
            saints = "Sfânta Cuvioasă Teodora de la Sihla";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Cele pământeşti părăsind şi jugul pustniciei luând, te-ai făcut mireasă lui Hristos, fericită; cu postul, cu privegherea cereştile daruri luând şi cu rugăciunea pe îngeri ajungând, firea omenească ai biruit şi la cele cereşti te-ai mutat, lăsându-ne spre mângâiere peştera şi sfintele tale moaşte. Pentru aceasta, Sfântă Preacuvioasă Maică Teodora, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saints = "Sfântul Ierarh Emilian Mărturisitorul, Episcopul Cizicului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Emilian, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            saints = "Sfântul Apostol Matia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostole Matia, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            saints = "Sfântul Mucenic Laurențiu Arhidiaconul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Laurențiu, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saints = "Sfântul Ierarh Nifon, Patriarhul Constantinopolului";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Cu faptele dreptei credinţe strălucind toată Biserica ai luminat, însoţindu-te cu smerenia cea dătătoare de înălţare, tu, cinstea cea mărită a celor două sfinte locaşuri, podoaba şi înfrumuseţarea patriarhilor, Mărite Ierarhe Nifon. Iar acum umple de dumnezeieşti daruri pe cei ce cu credinţă te măresc pe tine.";
        }

        if (day == 12) {
            saints = "Sfinţii Mucenici Fotie şi Anichit";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Fotie şi Anichit, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 13) {
            saints = "Mutarea moaștelor Sfântului Cuvios Maxim Mărturisitorul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saints = "Sfântul Proroc Miheia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Miheia pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 15) {
            saints = "Adormirea Maicii Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru naştere Fecioria ai păzit, întru Adormire lumea nu ai părăsit, de Dumnezeu Născătoare; mutatu-te-ai la Viaţă, fiind Maica Vieţii şi cu rugăciunile tale, izbăveşti din moarte sufletele noastre.";
        }

        if (day == 16) {
            saints = "Sfinții Martiri Brâncoveni: Constantin Vodă cu fii săi Constantin, Ștefan, Radu, Matei și cu sfetnicul Ianache";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Cel ce pentru dreapta credință și pentru neam, te-ai învrednicit a suferi moarte de martir, împreună cu fiii tăi Constantin, Ștefan, Radu și Matei și cu sfetnicul Ianache, dreptcrediciosule Voievod Constantine, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            saints = "Sfântul Gheorghe Pelerinul";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Pe nevoitorul cel mare și următorul sihaștrilor, pe fericitul pelerin al lui Hristos în cântări să-l cinstim, strigându-i cu evlavie: Sfinte Gheorghe, prin rugăciunile tale, luminează calea vieții noastre!";
        }

        if (day == 18) {
            saints = "Sfinţii Mucenici Flor şi Lavru";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pe preaîmpodobita şi de Dumnezeu înţelepţita doime cea prealuminoasă, pe Fericitul Flor şi pe Preacinstitul Lavru, după vrednicie să-i lăudăm credincioşii, căci aceştia cu osârdie au propovăduit în chip văzut tuturor, pe Treimea Cea Nezidită. Pentru aceasta, pătimind până la sânge, s-au încununat cu cunună prealuminoasă şi se roagă lui Hristos Dumnezeu, ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saints = "Sfântul Mucenic Andrei Stratilat";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mărirea cea pământească ai lăsat şi Cereasca Împărăţie ai moştenit; sângele picurându-ţi, ca şi cu o cunună de piatră nestricată, prea minunat te-ai împodobit; şi către Hristos ai venit cu sobor răbdător de patimi, cu ceata îngerilor în Lumina Cea Neînserată; şi pe Hristos, Soarele Cel Neapus, ai aflat, Sfinte Andrei Stratilat. Aceluia roagă-te pururea, cu cei împreună cu tine purtători de chinuri, să mântuiască sufletele noastre.";
        }

        if (day == 20) {
            saints = "Sfântul Proroc Samuel";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Samuel pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            saints = "Sfântul Apostol Tadeu";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Tadeu, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            saints = "Sfântul Mucenic Agatonic";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Agatonic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            saints = "Sfântul Mucenic Lup";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Lup, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 24) {
            saints = "Sfântul Sfințit Mucenic Cosma Etolul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Ca un râvnitor al Sfinţilor Apostoli ai primit lumânarea Duhului şi propovăduitor dumnezeiesc al dreptei-credinţe te-ai arătat; de aceea întăreşte-ne şi pe noi pe temelia dumnezeiască a credinţei ortodoxe şi a sfintelor dogme, Cosma sfinţite mucenicule slăvite, cerând pentru noi iertare greşelilor.";
        }

        if (day == 25) {
            saints = "Sfântul Apostol Tit";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Tit, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 26) {
            saints = "Sfinţii Mucenici Adrian şi Natalia, soţia sa";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Credinţa cea mântuitoare comoară nerăpită ai socotit-o, de trei ori fericite, păgânătatea cea părintească părăsind-o şi urmând Stăpânului, te-ai îmbogăţit cu darurile cele Dumnezeieşti Sfinte Adrian Mărite, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saints = "Sfântului Cuvios Pimen cel Mare";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Pimen, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saints = "Sfântul Cuvios Moise Etiopianul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat de Dumnezeu Purtătorule, Părintele nostru Moise; cu postul, cu privegherea, cu rugăciunea, cereştile daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 29) {
            saints = "Tăierea Capului Sfântului Proroc Ioan Botezătorul (Post)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pomenirea dreptului cu laude, iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat mai cinstit şi decât proorocii. Că te-ai învrednicit a boteza în repejunile Iordanului pe Cel Propovăduit. Drept aceea, pentru adevăr nevoindu-te, bucurându-te, ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în trup: pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 30) {
            saints = "Sfântul Ierarh Varlaam, Mitropolitul Moldovei";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Vrednic slujitor al lui Hristos și înțelept apărător al dreptei credințe, mare cinstitor al Sfintei Cuvioase Parascheva și credincios luminător al neamului românesc, Sfinte Ierarhe Varlaam, roagă pe Hristos-Dumnezeu să ocrotească și să mântuiască sufletele noastre.";
        }

        if (day == 31) {
            saints = "Așezarea în raclă a brâului Maicii Domnului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Născătoare de Dumnezeu pururea Fecioară, Acoperământul oamenilor, Veşmântul şi Brâul Preacuratului tău trup, puternic Acoperământ cetăţii tale ai dăruit prin naşterea ta cea fără sămânţă, Nestricată rămânând. Că întru tine şi firea se înnoieşte şi vremea. Pentru aceasta, te rugăm, pace cetăţii tale dăruieşte şi sufletelor noastre mare milă.";
        }

    }






    //Septembrie

    if (month == 8) {

        if (day == 1) {
            saints = "Sfântul Cuvios Simeon Stâlpnicul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Al răbdării stâlp ai fost, râvnind părinţilor celor mai dinainte, cuvioase; lui Iov întru patimi, lui Iosif întru ispite şi vieţii celor fără de trup, tu fiind în trup, Sfinte Simeon, părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            saints = "Sfântul Ierarh Ioan Postitorul, Patriarhul Constantinopolului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Ioan, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfinţii Cuvioşi Neofit şi Meletie de la Mănăstirea Stânișoara";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "De Dumnezeu iubitorilor Părinţi, suindu-vă în munţii faptelor bune, locaşuri Preasfântului Duh v-aţi arătat şi acum ca făclia în sfeşnic luminaţi în lume, Cuvioşilor Neofit şi Meletie; rugaţi-vă lui Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 4) {
            saints = "Sfântul Proroc Moise";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Suindu-te către înălţimea bunătăţilor, Sfinte Prorocule Moise, te-ai învrednicit a vedea Strălucirea lui Dumnezeu, primind tablele cele date de Dumnezeu; şi purtând întru tine darul însemnărilor, te-ai făcut cinstită laudă prorocilor şi mare taină a dreptei credinţe.";
        }

        if (day == 5) {
            saints = "Sfântul Prooroc Zaharia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu haina preoţiei fiind îmbrăcat, înţelepte, după Legea lui Dumnezeu jertfa primită, după cuviinţa preoţiei, ai adus, Sfinte Zaharia. Şi ai fost luminător şi văzător al celor de taină, semnele darului întru tine purtând lămurit, preaînţelepte. Şi cu sabia ai fost omorât în Biserica lui Dumnezeu, proorocule al lui Hristos. Cu Înaintemergătorul roagă-te să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saints = "Pomenirea minunii Sfântului Arhanghel Mihail în Colose";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mai mare Voievodule al Oştilor Cereşti, Mihaile, rugămu-te pe tine noi, nevrednicii, ca să ne acoperi pe noi cu rugăciunile tale şi cu acoperământul aripilor măririi tale celei netrupeşti. Păzeşte-ne pe noi cei ce cădem cu deadinsul şi strigăm: mântuieşte-ne din nevoi, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 7) {
            saints = "Sfinţii Cuvioşi Părinţi Simeon şi Amfilohie de la Pângăraţi";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Cuvioşilor Părinţi Simeon şi Amfilohie, cei ce aţi luminat pădurile Carpaţilor cu rugăciunile voastre şi aţi umplut de mireasmă duhovnicească toată valea Bistriţei, sfetnici de taină ai voievozilor şi făclii luminoase ale călugărilor şi credincioşilor evlavioşi, rugaţi-vă lui Dumnezeu pentru noi, cei ce săvârşim cu dragoste sfântă pomenirea voastră!";
        }

        if (day == 8) {
            saints = "Naşterea Maicii Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Naşterea ta, de Dumnezeu Născătoare Fecioară, bucurie a vestit la toată lumea; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru. Şi dezlegând blestemul, a dat binecuvântare; şi stricând moartea, ne-a dăruit nouă viaţă veşnică.";
        }

        if (day == 9) {
            saints = "Sfinţii şi Drepţii Dumnezeieşti Părinţi Ioachim şi Ana";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pomenirea drepţilor Tăi, Doamne, prăznuind, printr-înşii ne rugăm Ţie, mântuieşte sufletele noastre.";
        }

        if (day == 10) {
            saints = "Sfânta Împărăteasă Pulheria";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfântă Împărăteasă Pulheria, roagă pe Milostivul Dumnezeu ca să dea iertare de păcate sufletelor noastre.";
        }

        if (day == 11) {
            saints = "Sfânta Cuvioasă Teodora din Alexandria";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Teodora, duhul tău.";
        }

        if (day == 12) {
            saints = "Sfântul Mucenic Avtonom";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Avtonom, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            saints = "Sfântul Cuvios Ioan de la Prislop";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Iubitorule de nevoinţă şi râvnitorule întru cele sfinte, Cuvioase Părinte Ioan, părăsit-ai cele trecătoare şi ai ales pe cele veşnice; luat-ai jugul lui Hristos în Mănăstirea Prislop şi în peşteră pustnicească, împreună cu îngerii, L-ai slăvit pe Dumnezeu. Pentru aceasta, nu înceta a te ruga pentru sufletele noastre.";
        }

        if (day == 14) {
            saints = "Înălţarea Sfintei Cruci";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mântuieşte, Doamne, poporul Tău şi binecuvintează moştenirea Ta; biruinţă binecredincioşilor creştini asupra celui protivnic dăruieşte şi cu Crucea Ta păzeşte pe poporul Tău.";
        }

        if (day == 15) {
            saints = "Sfântul Ierarh Iosif cel Nou de la Partoş, Mitropolitul Banatului";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Din tinereţe cu totul te-ai supus Domnului, cu rugăciunile şi cu ostenelile şi cu postul. Pentru aceasta, văzând Dumnezeu nevoinţele tale, arhiereu şi păstor Bisericii Sale te-a rânduit; şi după moarte, în cetele sfinţilor te-a sălăşluit, Sfinte Părinte Iosif. Roagă-te lui Hristos Dumnezeu să ne dăruiască iertare de greşeli nouă, celor ce cu credinţă şi cu dragoste săvârşim sfântă pomenirea ta.";
        }

        if (day == 16) {
            saints = "Sfânta Mare Muceniţă Eufimia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Foarte mult ai vestit pe cei dreptmăritori şi ai ruşinat pe cei rău credincioşi, Sfântă Mare Muceniţă Eufimia, Preafrumoasă fecioară a lui Hristos, întărind cele ce părinţii bine au dogmatizat la al patrulea Sinod Ecumenic. Muceniţă Preamărită, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 17) {
            saints = "Sfânta Muceniţă Sofia cu fiicele sale: Pistis, Elpis şi Agapis";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşele cuvântătoare, prin mucenicie v-aţi adus Mielului şi Păstorului, săvârşind călătoria cea către Hristos şi credinţa păzind-o. Pentru aceea, cu suflet vesel astăzi săvârşind pomenirea voastră cea sfântă, minunatelor, pe Hristos Îl slăvim.";
        }

        if (day == 18) {
            saints = "Sfântul Ierarh Eumenie, Episcopul Gortinei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Eumenie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saints = "Sfinţii Mucenici Trofim, Savatie şi Dorimedont";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Dumnezeu Cel Lăudat în Treime a preamărit treimea mucenicilor; pe Sfântul Trofim, pe Sfântul Savatie şi pe Sfântul Dorimedont; căci, întru Dânsul crezând, au surpat pe vrăjmaşul. Prin rugăciunile lor, Hristoase Dumnezeule, miluieşte-ne pe noi.";
        }

        if (day == 20) {
            saints = "Sfântul Mare Mucenic Eustatie cu soţia sa Teopisti și cei doi fii ai lor Agapie şi Teopist";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Eustatie, Teopista, Agapie și Teopist întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            saints = "Sfântului Apostol Codrat din Magnesta";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Codrat, roagă pe Milostivul Dumnezeu să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            saints = "Sfântul Sfințit Mucenic Teodosie de la Mănăstirea Brazi";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Arătatu-te-ai, Sfinte Ierarhe Teodosie, sfeşnic pururea luminos şi mare apărător al Bisericii lui Hristos. Strălucit-ai prin slujire şi mucenicie, ca o jertfă preacurată aducându-te Stăpânului tuturor; slăvim pomenirea ta, rugând pe Dumnezeu să dăruiască sufletelor noastre pace şi mare milă.";
        }

        if (day == 23) {
            saints = "Zămislirea Sfântului Prooroc Ioan Botezătorul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Ceea ce mai înainte erai stearpă şi neroditoare, veseleşte-te; că iată ai zămislit pe Sfeşnicul Soarelui, Cel Ce va să lumineze toată lumea care pătimea cu nevederea. Dănţuieşte Zaharia cu îndrăzneală strigând: Prooroc Celui Preaînalt este cel ce are să se nască.";
        }

        if (day == 24) {
            saints = "Sfântul Cuvios Siluan Athonitul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Propovăduitor al iubirii lui Hristos, lumii întregi ai fost dat, de trei ori fericite, între cuvântătorii de Dumnezeu cel prea duios, căci pe Cel smerit și blând ai văzut și inima Aceluia o ai cunoscut. Pentru aceasta, prin graiurile tale toți luminându-ne, proslăvim Duhul, Carele pe tine-au proslăvit.";
        }

        if (day == 25) {
            saints = "Sfânta Cuvioasă Eufrosina";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Eufrosina, duhul tău.";
        }

        if (day == 26) {
            saints = "Sfântul Voievod Neagoe Basarab";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Domnitor preaînţelept între căpeteniile neamului românesc, ctitor de lăcaşuri sfinte, prieten al Sfinţilor Părinţi, învăţător luminat de Duhul Sfânt şi mare iubitor de pace, Sfinte Neagoe Voievod, roagă-L pe Hristos Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 27) {
            saints = "Sfântul Ierarh Martir Antim Ivireanul, Mitropolitul Țării Românești";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Sfinte Părinte Ierarhe Antim, după vrednicie ai fost rânduit păstor şi învăţător turmei tale, şi cu înţelepciune dumnezeiască ai revărsat râurile sfintelor tale cuvinte. Viaţa ai pus-o pentru păstoriţii tăi şi cununa muceniciei ai dobândit de la Hristos Dumnezeu, pe Care roagă-L, Sfinte Părinte Ierarhe Antim, să dăruiască pace şi mare milă celor ce săvârşesc sfântă pomenirea ta.";
        }

        if (day == 28) {
            saints = "Sfântului Cuvios Hariton Mărturisitorul";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Hariton, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saints = "Sfântul Mucenic Trifon";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Trifon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saints = "Sfântul Ierarh Grigorie Luminătorul, Arhiepiscopul Armeniei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Ierarhe Grigorie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }


    }







    //Octombrie

    if (month == 9) {

        if (day == 1) {
            saints = "Acoperământul Maicii Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Astăzi, poporul cel binecredincios, luminat prăznuim, umbriţi fiind prin venirea ta, Maica lui Dumnezeu şi cău­tând către Preacinstită Icoana ta, cu umilinţă grăim: acoperă-ne pe noi cu Cinstitul tău Acoperă­mânt şi ne scapă de tot răul, rugând pe Fiul tău, Hristos Dumnezeul nostru, să mântu­iască sufletele noastre.";
        }

        if (day == 2) {
            saints = "Sfântul Sfinţit Mucenic Ciprian";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ciprian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfântul Sfinţit Mucenic Dionisie Areopagitul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Bunătate învăţându-te şi îmbărbătându-te întru toate, îmbrăcându-te cuviincios cu bun cuget, ai scos din vasul alegerii cele negrăite; şi cre­dinţa păzind, calea întocmai ai săvârşit, Sfinţite Mucenice Dionisie: roagă-te lui Hristos Dumnezeu, să mântuiască su­fletele noastre.";
        }

        if (day == 4) {
            saints = "Sfântul Sfinţit Mucenic Ierotei, Episcopul Atenei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Bunătate învăţându-te şi îmbărbătându-te întru toate, cu bună cunoştinţă, ca un sfinţitor cuvios îmbrăcându-te, ai scos din vasul alegerii cele negrăite; şi credinţa păzind, stadiul întocmai ai săvârşit, Sfinţite Mucenice Ierotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saints = "Sfinţii Cuvioşi Daniil şi Misail, de la Mănăstirea Turnu";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Dascăli ai rugăciunii neîncetate şi ai luptelor duhovniceşti v-aţi arătat, Cuvioşilor Daniil şi Misail, că de iubirea Mântuitorului Hristos, nedespărţiţi fiind, cu apostolească râvnă Preasfintei Treimi aţi slujit cu osârdie, în peşteri nevoindu-vă. Pentru aceasta, cerem, cu smerenie: Rugaţi-vă, să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saints = "Sfântul Apostol Toma";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Toma, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 7) {
            saints = "Sfinţilor Mari Mucenici Serghie şi Vah";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Pe cei ce după fire nu au fost fraţi de trup, pe aceştia Darul Cel Dumnezeiesc a cugeta frăţeşte până la sânge i-a făcut, pe Sfinţii Mucenici Serghie şi pe Vah, cinstită şi cre­dincioasă pereche. Fără de arme şi fără de haine în locul nevoinţei pe vrăjmaşul au înfruntat, rugându-se neîncetat pentru sufletele noastre.";
        }

        if (day == 8) {
            saints = "Sfânta Cuvioasă Pelaghia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Pelaghia, duhul tău.";
        }

        if (day == 9) {
            saints = "Sfântul Apostol Iacob al lui Alfeu";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Iacob, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            saints = "Sfinţii Mucenici Evlampie şi Evlampia, sora lui";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Evlampie și Evlampia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saints = "Sfântul Apostol Filip, unul din cei 7 diaconi";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte Filip, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 12) {
            saints = "Sfinţilor Mucenici Prov, Tarah şi Andronic";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "De isprăvile Sfinţilor Mucenici Prov, Tarah şi Andronic, Puterile Îngereşti foarte s-au mi­nunat; că fiind un trup muri­tor, pe vrăjmaşul cel fără de trup cu Puterea Crucii nevoindu-se tare, l-au biruit nevăzut. Şi acum se roagă Domnului să se miluiască sufletele noastre.";
        }

        if (day == 13) {
            saints = "Aducerea moaștelor Sfântului Apostol Andrei la Iași";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Fiu al Galileei şi frate al lui Petru, dintre pescari în soborul Apostolilor întâi ai fost chemat, Andrei cel minunat, iar de la mormântul tău din Patra chemi popoarele la Dumnezeu şi atunci ne-ai umplut de bucurie când în România iarăşi ai venit, unde pe Hristos Domnul L-ai propovăduit.";
        }

        if (day == 14) {
            saints = "Sfânta Cuvioasă Parascheva";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru tine, Maică, cu osârdie s-a mân­tuit cel după chip, că luând Crucea, ai urmat lui Hristos și lucrând ai în­vă­țat să nu se uite la trup, căci este trecător, ci să poarte grijă de suflet, de lucrul cel ne­muritor. Pentru aceasta și cu îngerii împreună se bucură, Cuvioasă Maică Parascheva, duhul tău.";
        }

        if (day == 15) {
            saints = "Sfântul Mucenic Luchian preotul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Luchian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 16) {
            saints = "Sfântul Mucenic Longhin Sutașul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Longhin, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            saints = "Sfântul Proroc Osea";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Osea po­menire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 18) {
            saints = "Sfântul Apostol și Evanghelist Luca";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte şi Evanghe­liste Luca, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 19) {
            saints = "Sfântul Proroc Ioil";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău, Doamne, Ioil pomenire prăznuind, printr-însul Te rugăm: mântuieşte sufletele noastre.";
        }

        if (day == 20) {
            saints = "Sfântul Mare Mucenic Artemie";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Artemie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            saints = "Sfinţii Cuvioşi Mărturisitori Visarion şi Sofronie şi al Sfântului Mucenic Oprea";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Luptătorilor pentru Orto­doxie, ca nişte îngereşti trâm­biţe aţi înviorat în suflete îndrăznirea mărturisirii dreptei credinţe şi ca nişte înţelepţi propovăduitori, pe popor l-aţi hrănit cu dreaptă şi luminată învăţătură. Mari au fost oste­nelile lucrării voastre; mare şi osârdia propovăduirii; mare a fost şi rodul luptei voastre drep­te, pururea pomeniţilor ostaşi ai lui Hristos.";
        }

        if (day == 22) {
            saints = "Sfântul Ierarh, întocmai cu apostolii, Averchie, Episcopul Ierapolei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Averchie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saints = "Sfântul Apostol Iacob, ruda Domnului, primul episcop al Ierusalimului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Ca un ucenic al Domnului ai primit Evanghelia, drepte; ca un mucenic eşti de neînduple­cat; îndrăzneală ca un frate al lui Dumnezeu, a te ruga ca un ierarh. Roagă pe Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saints = "Sfântul Mare Mucenic Areta şi al celor împreună cu dânsul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile Sfinţilor, care pentru Tine au pătimit, fii Mi­lostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 25) {
            saints = "Sfinţilor Mucenici Marcian şi Martirie";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Marcian şi Martirie, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 26) {
            saints = "Sfântul Mare Mucenic Dimitrie, Izvorâtorul de mir";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mare apărător te-a aflat în­tru primejdii lumea, purtătorule de chinuri, pe tine cel ce ai biruit pe păgâni. Deci, precum mândria lui Lie ai surpat şi la luptă îndrăzneţ ai făcut pe Nestor, aşa Sfinte Dimitrie, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            saints = "Sfântul Cuvios Dimitrie cel Nou, Ocrotitorul Bucureștilor";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Dimitrie, duhul tău.";
        }

        if (day == 28) {
            saints = "Sfântul Ierarh Iachint, Mitropolitul Țării Românești";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Vrednic următor al ierarhilor dobrogeni şi întâiule între mitropoliţii Ţării Româneşti, Sfinte Ierarhe Iachint, te-ai arătat mărturisitor al dreptei credinţe, lucrător al virtuţilor şi rugător pentru sufletele noastre.";
        }

        if (day == 29) {
            saints = "Sfânta Mare Muceniță Anastasia Romana";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Anastasia, strigă cu glas mare: pe Tine, Mirele meu, Te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru Tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 30) {
            saints = "Sfântul Apostol Cleopa";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte, Cleopa, roagă pe milostivul Dumnezeu ca să dăruiască iertare de greșeli sufletelor noastre.";
        }

        if (day == 31) {
            saints = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }


    }



    //Noiembrie

    if (month == 10) {

        if (day == 1) {
            saints = "Sfinţii Mucenici doctori fără de arginţi Cosma şi Damian";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor cei fără de arginţi şi de minuni făcătorilor, cercetaţi neputinţele noastre. Şi ca unii care în dar aţi luat, în dar daţi-ne nouă.";
        }

        if (day == 2) {
            saints = "Sfinţii Mucenici Achindin, Pigasie, Aftonie, Elpidifor şi Anempodist";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Purtătorilor de lupte ai Domnului, fericit este pământul care s-a adăpat cu sângele vostru şi sfinte locaşurile care au primit trupurile voastre. Că în privelişte pe vrăjmaşi aţi biruit şi pe Hristos cu îndrăznire aţi propovăduit, pe Acela ca pe un Bun rugaţi-L să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfinţii Sfinţiţi Mucenici Achepsima, episcopul, Iosif, preotul şi Aitala, diaconul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saints = "Sfântul Cuvios Gheorghe, Mărturisitorul din Drama";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pe ctitorul cinstitei Mănăstiri a Sfintei Înălțări, pe lucrătorul de taină al plânsului aducător de bucurie, pe învățătorul rugăciunii inimii, al smereniei și al trezviei, pe Cuviosul Gheorghe în cântări să-l cinstim noi, credincioșii, ca pe o laudă nouă a Mărturisitorilor, strigând: Purtăto­rule de chinuri, cu dumnezeiesc ajutor ocrotește-i pe cei ce se roagă ție!";
        }

        if (day == 5) {
            saints = "Sfinţii Mucenici Galaction şi Epistimia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saints = "Sfântul Ierarh Pavel Mărturisitorul, Patriarhul Constantinopolului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pentru mărturisirea Dumnezeieştii credinţe, alt Pavel pe tine Biserica te-a arătat râvnitor între preoţi. Strigă împreună cu tine şi Abel către Domnul şi sângele cel drept al lui Zaharia. Părinte cuvioase, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 7) {
            saints = "Sfinţii 33 de Mucenici din Melitina";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 8) {
            saints = "Soborul Sfinților Arhangheli Mihail și Gavriil şi a tuturor puterilor cereşti";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mai marilor Voievozi ai Oştilor cereşti, rugămu-vă pe voi noi, nevrednicii; cu rugăciunile voastre să ne acoperiţi pe noi, cu acoperământul aripilor slavei voastre celei netrupeşti păzindu-ne pe noi, cei ce cădem cu deadinsul şi strigăm: izbăviţi-ne din nevoi, ca nişte mai mari peste cetele puterilor celor de sus.";
        }

        if (day == 9) {
            saints = "Sfântul Ierarh Nectarie din Eghina";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Pe cel născut în Silivria şi ocrotitorul Eghinei, pe acela ce s-a arătat în vremurile din urmă prieten adevărat al virtuţii, pe Sfântul Ierarh Nectarie să-l cinstim cei credincioşi ca pe un Dumnezeiesc slujitor al lui Hristos, că izvorăşte bogate vindecări celor ce cu evlavie strigă: Slavă lui Hristos, Celui Ce te-a proslăvit! Slavă Celui Ce minunat te-a arătat! Slavă Celui Ce prin tine lucrează tuturor tămăduiri!";
        }

        if (day == 10) {
            saints = "Sfinţilor Apostoli Olimp, Rodion, Sosipatru, Erast, Terţiu şi Cvart";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Arătatu-s-a astăzi cinstită prăznuirea Apostolilor, dând în chip vădit iertare de greşeli tuturor celor ce săvârşesc pomenirea lor.";
        }

        if (day == 11) {
            saints = "Sfântul Mare Mucenic Mina";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Mucenicul Tău, Doamne, Mina întru nevoința sa, cununa nestricăciunii a luat de la Tine, Dumnezeul nostru, că având puterea Ta, pe chinuitori a învins, zdrobit-a și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 12) {
            saints = "Sfântului Ierarh Ioan cel Milostiv, Patriarhul Alexandriei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru răbdarea ta ţi-ai agonisit plata ta, părinte cuvioase, întru rugăciuni neîncetat răbdând, pe săraci iubind şi pe aceia îndestulând. Dar, roagă-te lui Hristos Dumnezeu, Sfinte Ioan, Milostive, Fericite, să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            saints = "Sfântul Ierarh Ioan Gură de Aur, Arhiepiscopul Constantinopolului";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Din gura ta ca o lumină de foc strălucind harul, lumea a luminat. Vistieriile neiubirii de argint lumii a câştigat. Înălţimea gândului smerit nouă ne-a arătat. Şi cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Cuvântul Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saints = "Sfântul Ierarh Grigorie Palama, Arhiepiscopul Tesalonicului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Luminător al dreptei credinţe, sprijinul Bisericii şi învăţătorule, podoaba monahilor, apărătorule cel nebiruit al teologilor; făcătorule de minuni, Grigorie, lauda Tesalonicului, propovăduitorule al harului, roagă-te pururea să se mântuiască sufletele noastre.";
        }

        if (day == 15) {
            saints = "Sfântul Cuvios Paisie de la Neamț";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Apărătorule al dreptei credințe și lauda monahilor, Cuvioase Părinte Paisie, din pruncie iubind pe Hristos, ca un alt Avraam ai părăsit patria ta, în Muntele Athosului nevoindu-te; și, adunând ceată de ucenici, te-ai așezat în țara Moldovei cea binecuvântată și Mănăstirea Neamțului rai pământesc ai făcut-o. Pentru aceasta, împreună cu îngerii, nu înceta a te ruga lui Dumnezeu pentru sufletele noastre.";
        }

        if (day == 16) {
            saints = "Sfântul Apostol şi Evanghelist Matei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Apostole Sfinte şi Evanghelist Matei, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 17) {
            saints = "Sfântul Ierarh Grigorie Taumaturgul, Episcopul Neocezareei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru rugăciuni priveghind, la lucrările minunilor răbdând, asemenea numire cu îndreptările ai câştigat. Ci, te roagă lui Hristos Dumnezeu, Părinte Grigorie, să lumineze sufletele noastre, ca să nu adormim în moarte cu păcate.";
        }

        if (day == 18) {
            saints = "Sfinții Mucenici Platon şi Roman, diaconul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Platon şi Roman, diaconul, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            saints = "Sfântul Proroc Avdie";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pomenind prăznuirea prorocului tău Avdie, Doamne, printr-însul Te rugăm: izbăveşte sufletele noastre.";
        }

        if (day == 20) {
            saints = "Sfântul Cuvios Grigorie Decapolitul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Chip te-ai făcut înfrânării şi prin Dumnezeiescul Duh pe toţi i-ai luminat. Alergarea dreptei credinţe o ai săvârşit şi cu învăţăturile lumea ai luminat şi ai mustrat cugetele celor rău credincioşi, Părinte Cuvioase Grigorie, roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 21) {
            saints = "Intrarea în biserică a Maicii Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Astăzi, înainte însemnarea bunăvoinţei lui Dumnezeu şi propovăduirea mântuirii oamenilor, în Templul lui Dumnezeu luminat Fecioara se arată şi pe Hristos tuturor mai înainte Îl vesteşte. Acesteia şi noi cu mare glas să-i strigăm: Bucură-te, Împlinirea rânduielii Ziditorului.";
        }

        if (day == 22) {
            saints = "Sfinţilor Apostoli Filimon, Arhip şi Onisim";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 23) {
            saints = "Sfântul Cuvios Antonie de la Iezerul Vâlcea";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Purtătorule de dumnezeiescul dor al rugăciunii neîncetate, Sfinte Părinte Noule Antonie, povăţuitorule al călugărilor, ajutătorule al celor din nevoi şi făcătorule de minuni, locuitorul raiului celui de sus, dar nedespărţit de cei de jos, roagă pe Milostivul Dumnezeu să ne dăruiască nouă pace şi mare milă.";
        }

        if (day == 24) {
            saints = "Sfinţii Sfinţiţi Mucenici Clement, Episcopul Romei şi Petru, Episcopul Alexandriei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile lor, în pace îndreptează viaţa noastră.";
        }

        if (day == 25) {
            saints = "Sfânta Mare Muceniță Ecaterina";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Cu înțelepciunea ca și cu razele soarelui ai luminat pe filosofii păgâni și ca o lună prealuminoasă, care strălucea în noaptea necredinței, întunericul l-ai gonit; iar pe împărăteasa o ai încredințat, dimpreună și pe prigonitorul l-ai mustrat, de Dumnezeu chemată, fericită Ecaterino! Cu bucurie ai alergat la cămara cea cerească, către Hristos, Mirele cel preafrumos, și de la Dânsul te-ai încununat cu cunună împărătească, înaintea Căruia împreună cu îngerii stând, roagă-te pentru noi, cei ce cinstim sfântă pomenirea ta.";
        }

        if (day == 26) {
            saints = "Sfântul Cuvios Stelian Paflagonul, ocrotitorul pruncilor";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale, nerodirea pustiului o ai lucrat, şi cu suspinurile tale cele din adânc, spre însutite osteneli o ai făcut roditoare. Şi te-ai făcut luminător lumii, strălucind cu minunile, Stelian, Părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saints = "Sfântul Mare Mucenic Iacob Persul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu mucenicia cea neobişnuită şi înfricoşătoare şi cu vitejiile răbdării, pe toţi i-ai minunat, mult-pătimitorule, cu tăierea fiecărei părţi din trup, rugăciuni de mulţumire preaminunat ai dat lui Dumnezeu. Pentru aceasta, în pătimirea ta cunună ai luat, şi te-ai suit către tronul Împăratului ceresc, al lui Hristos Dumnezeu, Iacobe. Pe Acela roagă-L să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saints = "Sfântul Mucenic Irinarh";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Mucenicul Tău, Doamne, Irinarh, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 29) {
            saints = "Sfântul Mucenic Paramon";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Paramon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saints = "Sfântul Apostol Andrei, cel Întâi Chemat, Ocrotitorul României";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Ca cel decât Apostolii mai întâi chemat şi verhovnicului frate adevărat, Stăpânului tuturor Andrei, roagă-te pace lumii să dăruiască şi sufletelor noastre mare milă.";
        }


    }



    //Decembrie

    if (month == 11) {

        if (day == 1) {
            saints = "Sfântul Proroc Naum";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A prorocului Tău, Doamne, Naum, pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 2) {
            saints = "Sfântul Cuvios Porfirie Kafsokalivitul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "După cum pe pământ te rugai pentru tămăduirea neputinţelor şi pentru iertarea păcatelor noastre, tot astfel şi acum roagă-te în ceruri, părinte Porfirie, şi roagă-L pe Hristos Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfântul Cuvios Gheorghe de la Cernica";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Următor al cuvioşilor părinţi şi împlinitor al virtuţilor sihăstreşti, rugător neîncetat şi înnoitor al monahismului românesc te-ai arătat, Sfinte Cuvioase Părinte Gheorghe. Roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 4) {
            saints = "Sfânta Mare Muceniță Varvara";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Pe Sfânta Mare Muceniţă Varvara să o cin­stim; că a sfărâmat cursele vrăjmasului şi ca o vrăbioară s-a izbăvit dintr-însele, cu ajutorul Armei Crucii, Preacinstita.";
        }

        if (day == 5) {
            saints = "Sfântul Cuvios Sava cel Sfințit ";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele din adânc ai făcut ostenelile tale însutit roditoare şi te-ai făcut luminător lumii, strălucind cu minunile, Sfinte Sava părintele nostru, cuvioase! Roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saints = "Sfântul Ierarh Nicolae, Arhiepiscopul Mirelor Lichiei ";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Nicolae, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            saints = "Sfânta Muceniță Filofteia de la Curtea de Argeș";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Întru răbdarea ta ţi-ai agonisit plata ta, Fericită Filofteia, întru ispite neîncetat răbdând, bătăi suferind, în necazuri binevoind, pe săraci miluindu-i şi pe flămânzi săturându-i; roagă-te lui Hristos Dumnezeu, bună fecioară, să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saints = "Sfântul Cuvios Patapie";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Patapie, duhul tău.";
        }

        if (day == 9) {
            saints = "Zămislirea Sfintei Fecioare Maria de către Sfânta Ana";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Astăzi legăturile nerodirii de fii se dezleagă; că Dumnezeu auzind pe Sfinţii şi Drepţii Ioachim şi Ana, mai presus de orice nădejde le-a făgăduit lămurit că vor naşte pe Fiica lui Dumnezeu, din care S-a născut Cel Necuprins, Om făcându-Se, poruncind Îngerului să-i strige: Bucură-te cea Plină de har, Domnul este cu tine!";
        }

        if (day == 10) {
            saints = "Sfinţii Mucenici Mina, Ermoghen şi Evgraf";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu înfrânarea omorând por­nirile şi îndemnurile cele arză­toare ale patimilor, ucenicii lui Hristos au luat harul de a alun­ga urmările bolilor celor nepu­tincioşi şi a face minuni, atât în viaţă, cât şi după moarte. Minune uimitoare cu adevărat! Că oase goale izvorăsc tămă­duiri. Slavă Ţie, Singurului Dumnezeu şi Ziditorului.";
        }

        if (day == 11) {
            saints = "Sfântul Cuvios Daniil Stâlpnicul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Stâlp al răbdării ai fost râv­nindstrămoşilor, cuvioase: Dreptului Iov întru patimi, Sfântului Iosif întru ispite; şi în trup viaţa celor fără de trup având, Sfinte Preacuvioase Daniil, părintele nostru, roagă-te lui Hristos Dumnezeu să mântuiască sufle­tele noastre.";
        }

        if (day == 12) {
            saints = "Sfântul Ierarh Spiridon, Episcopul Trimitundei";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Soborului celui dintâi te-ai arătat apărător şi de minuni făcător, de Dumnezeu purtătorule Sfinte Spiridon, părintele nostru. Pentru aceasta cu femeia cea moartă în groapă tu ai vorbit şi şarpele în aur l-ai prefăcut. Şi când ai cântat sfintele rugăciuni, îngeri ai avut împreună cu tine slujind, preasfinţite. Slavă Celui Ce te-a preamărit pe tine; Slavă Celui Ce te-a încununat; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 13) {
            saints = "Sfântul Ierarh Dosoftei, Mitropolitul Moldovei ";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Apărătorule al Ortodoxiei și învățătorule al sfințeniei, păstor blând ca un miel și mare dascăl al Sfintei Liturghii, Părinte Ierarhe Dosoftei, roagă pe Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 14) {
            saints = "Sfinţii Mucenici Tirs, Levchie, Calinic, Filimon, Apolonie şi Arian";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 15) {
            saints = "Sfântul Sfințit Mucenic Elefterie, Episcopul Iliriei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu haină de preot fiind îm­podobit şi cu sângele curgând şiroaie, fericite, ai alergat la Stăpânul tău, Hristos, Înţe­lepte Elefterie, nimicitorul sa­tanei. Pentru aceasta nu în­ceta a te ruga pentru cei ce cu credinţă cinstesc fericitele tale nevoinţe.";
        }

        if (day == 16) {
            saints = "Sfântul Proroc Agheu";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "A prorocului Tău, Doamne, Agheu pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 17) {
            saints = "Sfântul Proroc Daniel și Sfinții trei tineri Anania, Azaria și Misail";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mari sunt faptele credinţei; că în mijlocul izvorului văpăii, ca într-o apă de odihnă sfinţii trei Tineri s-au bucurat şi Pro­rocul Daniel păstor leilor ca unor oi s-a arătat. Pentru rugăciunile lor, Hristoase Dum­nezeule, miluieşte-ne pe noi.";
        }

        if (day == 18) {
            saints = "Sfântul Cuvios Daniil Sihastrul";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip; căci luând Crucea, ai urmat lui Hristos; și luptând, ai învățat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta și cu îngerii se bucură, Preacuvioase Părinte Daniile, duhul tău.";
        }

        if (day == 19) {
            saints = "Sfântul Mucenic Bonifatie";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul tău. Doamne, Bonifatie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            saints = "Sfântul Sfințit Mucenic Ignatie Teoforul, Episcopul Antiohiei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            saints = "Sfânta Muceniță Iuliana din Nicomidia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Iuliana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 22) {
            saints = "Sfântul Ierarh Petru Movilă, Mitropolitul Kievului";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Apărătorule și mărturisitorule al Ortodoxiei, luminătorule al neamurilor, fiule al Moldovei și Părinte al Ucrainei, Sfinte Ierarhe Petru, mult nevoitorule, roagă-te lui Hristos Dumnezeu, să ne apere credința și să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saints = "Sfântul Cuvios Naum";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Ucenic vrednic al Sfinţilor Chiril şi Metodie, te-ai arătat fericite, și tămăduiri din destul ai revărsat cu dragoste sufletelor smerite, ca cel ce te-ai arătat luminător mare celor din întunericul neştiinţei, cu raza rugăciunii tale ne înconjoară şi pe noi în ceasul umilinţei.";
        }

        if (day == 24) {
            saints = "Sfânta Muceniță Eugenia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Eugenia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            saints = "Nașterea Domnului (Crăciunul)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Naşterea Ta, Hristoase, Dumnezeul nostru, răsărit-a lumii lumina cunoştinţei; că întru dânsa cei ce slujeau stelelor de la Stea s-au învăţat să se închine Ţie, Soarelui dreptăţii şi să Te cunoască pe Tine, Răsăritul Cel de sus, Doamne, Slavă Ţie!";
        }

        if (day == 26) {
            saints = "Sfântul Cuvios Nicodim de la Tismana";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Celui Ce a Răsărit din Fecioara, Mai Marelui Păstorilor, ca o oaie de turmă ai urmat, Părinte al nostru Sfinte Nicodim. Cu postul, cu privegherea şi cu rugăciunile, te-ai făcut lucrător sfinţit de cele cereşti, tămăduind sufletele celor ce aleargă la tine cu credinţă. Pentru aceasta strigăm: Slavă Celui Ce te-a preaslăvit pe tine; Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce a arătat tuturor prin tine îndreptare.";
        }

        if (day == 27) {
            saints = "Sfântul Apostol, Întâiul Mucenic și Arhidiacon Ștefan";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Încununatu-s-a creştetul tău cu diademă împărătească, pe urma luptelor pe care le-ai pătimit pentru Hristos Dumnezeu, luptătorule cel dintâi printre mucenici. Că vădind nebunia iudeilor, ai văzut pe Mântuitorul tău, de-a dreapta Tatălui. Pe Acela roagă-L totdeauna pentru sufletele noastre.";
        }

        if (day == 28) {
            saints = "Sfinții 20.000 de Mucenici arși în Nicomidia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Purtătorilor de biruinţă ai Domnului, fericit este pămân­tul care s-a adăpat cu sângiurile voastre şi sfinte sunt loca­şurile care au primit trupurile voastre. Că în locul de chinuri pe vrăjmaşi i-aţi biruit şi cu în­drăzneală pe Hristos L-aţi pro­povăduit. Pe Dânsul, ca pe un Bun, rugaţi-L pentru noi, ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saints = "Sfinții 14.000 de prunci uciși din porunca lui Irod";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile sfinţilor, care pentru Tine au pătimit, Milos­tiv fii, Doamne şi vindecă toate durerile noastre, Iubitorule de oameni.";
        }

        if (day == 30) {
            saints = "Sfânta Muceniță Anisia fecioara";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Anisia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 31) {
            saints = "Sfânta Cuvioasă Melania Romana";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Melania, duhul tău.";
        }


    }




    //Ianuarie

    if (month == 0) {

        if (day == 1) {
            saints = "Tăierea împrejur cea după trup a Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cel Ce şezi pe Scaunul cel în chipul focului, întru cele de sus, împreună cu Părintele Cel fără de început şi cu Dumnezeiescul Duh, ai binevoit a Te naşte pe pământ din Fecioară, Maica Ta, care nu ştie de bărbat, Mântuitorule Iisuse. Pentru aceasta ai şi fost tăiat împrejur a opta zi ca un Om. Slavă Sfatului Tău Celui Preabun; Slavă rânduielii Tale; Slavă smereniei Tale, Unule Iubitorule de oameni.";
        }

        if (day == 2) {
            saints = "Sfântul Ierarh Silvestru, Episcopul Romei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Silvestru, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saints = "Sfântul Proroc Maleahi";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pomenirea prorocului Tău Maleahi prăznuind, Doamne, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 4) {
            saints = "Soborul Sfinților 70 de Apostoli";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 5) {
            saints = "Sfinţii Mucenici Teopempt şi Teonas (Post)";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saints = "Botezul Domnului (Boboteaza - Dumnezeiasca Arătare)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "În Iordan Botezându-Te Tu, Doamne, închinarea Treimii s-a arătat. Că Glasul Părintelui a mărturisit Ţie, Fiu Iubit pe Tine numindu-Te; şi Duhul, în Chip de Porumbel, a adeverit întărirea Cuvântului, Cel Ce Te-ai arătat, Hristoase Dumnezeule şi lumea ai luminat, Slavă Ţie.";
        }

        if (day == 7) {
            saints = "Soborul Sfântului Proroc Ioan Botezătorul și Înaintemergătorul Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pomenirea dreptului este cu laude; iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat şi decât prorocii mai cinstit. Că şi a boteza în ape pe Cel Propovăduit, te-ai învrednicit. Drept aceasta pentru adevăr nevoindu-te, bucurându-te ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în Trup, pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 8) {
            saints = "Sfântul Cuvios Gheorghe Hozevitul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Gheorghe, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            saints = "Sfântul Mucenic Polieuct";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Polieuct, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            saints = "Sfântul Ierarh Grigorie, Episcopul Nissei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile lor, în pace îndreptează viaţa noastră.";
        }

        if (day == 11) {
            saints = "Sfântul Cuvios Teodosie cel Mare, începătorul vieții călugărești de obște din Palestina ";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Teodosie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            saints = "Sfânta Muceniță Tatiana, diaconița";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Tatiana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 13) {
            saints = "Sfinţii Mucenici Ermil şi Stratonic";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Mucenicii Tăi, Doamne, Ermil şi Stratonic, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 14) {
            saints = "Sfinții Cuvioși Mucenici din Sinai și Rait";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile lor, în pace îndreptează viaţa noastră.";
        }

        if (day == 15) {
            saints = "Sfântul Cuvios Pavel Tebeul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Pavel. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 16) {
            saints = "Cinstirea lanțului Sfântului Apostol Petru";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Roma nepărăsind, la noi ai venit prin cinstitele lanţuri ce ai purtat, întâistătătorule pe scaunul Apostolilor. Pe care cu credinţă cinstindu-le, te rugăm: cu ale tale rugăciuni către Dumnezeu, dăruieşte nouă mare milă.";
        }

        if (day == 17) {
            saints = "Sfântul Cuvios Antonie cel Mare";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Râvnitor lui Ilie cu obiceiurile asemă­­­­nân­du-te, Bo­tezătorului cu drepte cărări urmând, Pă­rin­te Antonie, pustiului te-ai făcut locuitor și lumea ai întărit-o cu rugă­ciunile tale. Pentru aceasta roagă-te lui Hristos Dum­ne­zeu să mântuiască sufletele noastre.";
        }

        if (day == 18) {
            saints = "Sfântul Ierarh Atanasie, Arhiepiscopul Alexandriei";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Pe ierarhii Domnului, pe tâlcuitorii dogmelor; pe păstorii alexandrinilor propovăduitori ai adevărului, perechea cea iubită de Dumnezeu; pe străluciţii luminători, risipitori ai întunericului celor nelegiuiţi: pe Sfântul Atanasie cel Mare, secerătorul ereticilor, împreună cu Sfântul Ierarh Chiril, cel ce a cinstit precum se cuvine pe Născătoarea de Dumnezeu, veniţi toţi iubitorii de prăznuire şi adunându-ne cu veselie şi cu cântări să-i cinstim; că ei se roagă neîncetat lui Dumnezeu pentru noi toţi.";
        }

        if (day == 19) {
            saints = "Sfântul Ierarh Marcu, Mitropolitul Efesului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Pentru mărturisirea dumnezeieștii credințe mare lucrător te-a aflat pe tine Biserica, sfințite Marcu prealăudate, căci prin păzirea slovelor dumnezeieștilor părinți ai zdrobit eresurile întunecatului Apus. Pentru aceasta pe Hristos Dumnezeu roagă-L să dăruiască râvnă celor ce-ți urmează cinstita viețuire.";
        }

        if (day == 20) {
            saints = "Sfântul Cuvios Eftimie cel Mare";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Veseleşte-te pustiu care nu rodeai, bucură-te ceea ce nu aveai durere; că bărbatul doririlor Duhului ţi-a înmulţit ţie fii, sădindu-i cu dreapta cinstire de Dumnezeu şi hrănindu-i cu înfrânarea, spre împlinirea faptelor bune. Cu ale cărui rugăciuni, Hristoase Dumne­zeule, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            saints = "Sfântul Cuvios Maxim Mărturisitorul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 22) {
            saints = "Sfântul Apostol Timotei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Bunătatea învăţându-te şi întru toate cumpătat fiind, îmbrăcându-te cu buna conştiinţă, precum i se cuvine unui sfânt, ai scos din vasul alegerii lucrurile tainice; şi credinţa păzind, aceeaşi cale ai săvârşit, Sfinte Apostole Timotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saints = "Sfântul Sfințit Mucenic Clement, Episcopul Ancirei";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Viţă de cuvioşie şi stâlpare de luptă grea, floare preasfinţită şi rod de Dumnezeu dăruit, de-a pururi înfloritor ai fost dat credincioşilor, preasfinţite. Ci, ca cel ce eşti cu mucenicii împreună luptător şi cu ierarhii împreună locuitor, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saints = "Sfânta Cuvioasă Xenia";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Xenia, duhul tău.";
        }

        if (day == 25) {
            saints = "Sfântul Ierarh Grigorie Teologul, Arhiepiscopul Constantinopolului";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Fluierul cel păstoresc al teologiei tale a biruit trâmbiţele ritorilor; că ţie, celui ce ai încercat adâncurile duhului, ţi s-au adăugat şi Frumuseţile Cuvântului. Ci, roagă pe Hristos Dumnezeu, Sfinte Părinte Grigorie, să mântuiască sufletele noastre.";
        }

        if (day == 26) {
            saints = "Sfântul Ierarh Iosif cel Milostiv, Mitropolitul Moldovei";
            colors = "blue";
            colorCross = "blue";
            religiousSongs = "Curăția ta și rugăciunea, milostenia și înfrânarea vas ales al Sfântului Duh te-au făcut; pentru aceasta, Moldovei fiind păstor, urmai cu totul Păstorului Celui bun; Sfinte mare Ierarhe, milostive Iosife, roagă pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            saints = "Aducerea moaștelor Sfântului Ioan Gură de Aur";
            colors = "black";
            colorCross = "black";
            religiousSongs = "Din gura ta ca o văpaie de foc strălucind harul, lumea a luminat; vistieriile neiubirii de argint lumii a câştigat; înălţimea gândului smerit nouă ne-a arătat. Ci, cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Hristos Cuvântul să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saints = "Sfântul Cuvios Efrem Sirul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Harul ce izvorăşte din gura ta cuvioase, a umplut de apele vieţii Biserica şi lumii a izbucnit râuri de cucernicie, revărsând asupra noastră apa pocăinţei; ci, învăţându-ne cu cuvintele tale, Sfinte Părinte Efrem, roagă-te lui Hristos, Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saints = "Aducerea moaștelor Sfântului Sfințit Mucenic Ignatie Teoforul";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 30) {
            saints = "Sfinții Trei Ierarhi: Vasile cel Mare, Grigorie Teologul și Ioan Gură de Aur";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pe cei trei preamari luminători ai Dumnezeirii Celei de trei ori mai strălucitoare decât soarele, pe cei ce învăpăiază lumea cu Razele Dumnezeieştilor dogme; pe râurile cele cu miere curgătoare ale înţelepciunii, care adapă toată făptura cu apele cunoştinţei de Dumnezeu; pe Marele Vasile şi pe Grigorie de Dumnezeu Cuvântătorul, împre­ună cu Strălucitul Ioan cel cu limbă de aur, toţi cei iubitori de cuvintele lor, adunându-ne, cu cântări să-i cinstim; că aceştia pururea se roagă Treimii pentru noi.";
        }

        if (day == 31) {
            saints = "Sfinţilor Mucenici doctori fără de arginţi Chir şi Ioan";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Sălăşluindu-se darul Treimii în inimile voastre cele curate, Preafericiţilor Chir şi Ioan, v-aţi arătat înfricoşători izgonitori ai duhurilor celor necurate; şi aţi fost tămăduitori ai neputinţelor, nu numai ai celor descoperite, ci şi ai celor ascunse. Drept aceea, îndrăzneală având către Dumnezeu Cel Iubitor de oameni, prin rugăciunile voastre, cele neîncetate, tămăduiţi patimile noastre.";
        }


    }





    document.querySelector(".saint").innerHTML = "<br>" + saints + "<br>";

    document.querySelector(".saint").style.color = colors;

    document.querySelector("#colorCross").style.color = colorCross;

    document.querySelector("#troparion").innerHTML = "<br>" + religiousSongs + "<br>";

    document.querySelector("#troparion").style.color = colors;




}); 
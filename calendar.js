
document.addEventListener('DOMContentLoaded', function () {



    //Data curenta
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

    let year = date.getFullYear()

    var dateSaint = dayName + " " + dayNumber + " " + monthNames + " " + year;

    document.querySelector('#dateSaint').innerHTML = dateSaint;

    


    //Troparele sfintilor 

    var day = date.getDate();
    var month = date.getMonth();
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

        if (day == 21) {
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
            colors = "blue";
            colorCross = "blue";
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
            saints = "Sfinții Martiri Brâncoveni: Constantin Vodă cu cei patru fii ai săi, Constantin, Ștefan, Radu și Matei, și sfetnicul Ianache";
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
            colors = "blue";
            colorCross = "blue";
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
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nesctricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            saints = "Sfântul Mucenic Lup";
            colors = "blue";
            colorCross = "blue";
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

        if (day == 21) {
            saints = "Așezarea în raclă a brâului Maicii Domnului";
            colors = "green";
            colorCross = "transparent";
            religiousSongs = "Născătoare de Dumnezeu pururea Fecioară, Acoperământul oamenilor, Veşmântul şi Brâul Preacuratului tău trup, puternic Acoperământ cetăţii tale ai dăruit prin naşterea ta cea fără sămânţă, Nestricată rămânând. Că întru tine şi firea se înnoieşte şi vremea. Pentru aceasta, te rugăm, pace cetăţii tale dăruieşte şi sufletelor noastre mare milă.";
        }

    }

    document.querySelector(".saint").innerHTML = "<br>" + saints + "<br>";

    document.querySelector(".saint").style.color = colors;

    document.querySelector("#colorCross").style.color = colorCross;

    document.querySelector("#troparion").innerHTML = "<br>" + religiousSongs + "<br>";

    document.querySelector("#troparion").style.color = colors;




}); 
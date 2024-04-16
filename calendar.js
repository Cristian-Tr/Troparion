document.addEventListener('DOMContentLoaded', function () {



    //Data curenta in limba romana
    var date = new Date();
    var dayNumber = date.getDate();

    var monthName = new Array(7);
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
    var monthNames = monthName[date.getMonth()];

    var weekDay = new Array(7);
    weekDay[0] = "Duminică";
    weekDay[1] = "Luni";
    weekDay[2] = "Marți";
    weekDay[3] = "Miercuri";
    weekDay[4] = "Joi";
    weekDay[5] = "Vineri";
    weekDay[6] = "Sâmbătă";
    var dayName = weekDay[date.getDay()];

    var year = date.getFullYear();

    var todayDate = dayName + "<br>" + dayNumber + " " + monthNames + " " + year;

    document.querySelector('#todayDate').innerHTML = todayDate;




    //Troparele sfintilor, schimbare culori text

    var calendarDates = new Date();
    var day = calendarDates.getDate();
    var nameDay = calendarDates.getDate();
    var month = calendarDates.getMonth();
    var calendarYears = calendarDates.getFullYear();
    var celebrationDay;
    var colors;
    var colorCross;
    var religiousSongs;




    //Troparele lunii iulie

    if (month == 6) {

        if (day == 1) {
            celebrationDay = "Sfântul Ierarh Leontie de la Rădăuţi";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu nevoinţe duhovniceşti toată viaţa ţi-ai petrecut-o şi, primind vrednicia arhieriei, cu smerenie şi cu frică de Dumnezeu ai slujit Biserica lui Hristos, pe Care roagă-L, Sfinte Ierarhe Leontie, să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Voievod Ștefan cel Mare";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Apărător neînfricat al credinței și patriei străbune, mare ctitor de locașuri sfinte, Ștefane Voievod, roagă pe Hristos Dumnezeu, să ne izbăvească din nevoi și din necazuri.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Mucenic Iachint";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Iachint, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Ierarh Andrei, Arhiepiscopul Cretei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curaţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Ierarhe Andrei, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Cuvios Atanasie Athonitul";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "De viaţa ta cea în trup s-au minunat cetele îngereşti, cum, cu trupul, la luptele cele nevăzute ai ieşit, pururea mărite şi ai rănit cetele demonice. Pentru care, Sfinte Atanasie, Hristos ţi-a răsplătit cu bogate daruri. Drept aceea, părinte, roagă-te lui Hristos Dumnezeu să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Cuvios Sisoe cel Mare";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Sisoe; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 7) {
            celebrationDay = "Sfânta Mare Muceniță Chiriachi";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Chiriachi, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Sfinții Mucenici Epictet și Astion ";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mucenicii Tăi, Doamne, Epictet și Astion, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 9) {
            celebrationDay = "Sfântului Sfinţit Mucenic Pangratie, Episcopul Taorminei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Pangratie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfinții 45 de Mucenici din Nicopolea Armeniei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Mare Muceniță Eufimia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ai veselit pe cei credincioşi şi ai ruşinat pe cei rău mărturisitori, Sfântă Mare Muceniţă Eufimia, preafumoasă fecioară a lui Hristos. Căci ai întărit dogmele Sinodului al patrulea, pe care părinţii bine le-au rânduit. Muceniţă mărită, roagă-L pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 12) {
            celebrationDay = "Cinstirea Sfintei Icoane a Maicii Domnului Prodromița, Sfântul Cuvios Paisie Aghioritul";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Născătoare de Dumnezeu, pururea Fecioară, sfintei şi dumnezeieştii icoanei tale cu dragoste şi cu credinţă închinându-ne, o sărutăm mulţumind; căci prin ea celor credincioşi dăruieşti cu adevărat tămăduiri sufletelor şi trupurilor. Pentru aceasta, grăim către tine: Slavă fecioriei tale, slavă milostivirii tale, slavă purtării tale de grijă, Ceea ce eşti Una Binecuvântată.";
        }

        if (day == 13) {
            celebrationDay = "Soborul Sfântului Arhanghel Gavriil";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mai mare Voievodule al Oştilor Cereşti, rugămu-te pe tine noi nevrednicii ca, prin rugăciunile tale, să ne acoperi pe noi cu acoperământul aripilor slavei tale celei netrupeşti, păzindu-ne pe noi, cei ce cădem cu dinadinsul şi grăim: izbăveşte-ne din nevoi, Sfinte Arhanghele Gavriil, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Cuvios Nicodim Aghioritul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Săltaţi şi vă veseliţi, popoare, că, iată, în prisosul bucuriei se arată astăzi pârga cea sfântă a Athosului, folositorul şi mângâietorul nostru, blândul Nicodim. Căci prin râvna cea după Hristos Biserica o a luminat, îndreptând cele stricate şi părăsite prin nebăgare de seamă şi trecerea cu vederea, iar acum înaintea Sfintei Treimi neîncetat se roagă pentru sufletele noastre.";
        }

        if (day == 15) {
            celebrationDay = "Sfânții Mucenici Chiric și Iulita";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Chiric și Iulita, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Sfinţit Mucenic Atinoghen, cu cei 10 ucenici ai săi";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Atinoghen, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            celebrationDay = "Sfânta Mare Muceniță Marina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Marina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Mucenic Emilian de la Durostorum";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mucenicul Tău, Doamne, Emilian, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            celebrationDay = "Sfânta Cuvioasă Macrina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Macrina, duhul tău.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul și slăvitul Proroc Ilie Tesviteanul";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cel ce a fost înger în trup, temeiul proorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie Măritul, care a trimis de sus lui Elisei dar, goneşte bolile şi pe cei leproşi curăţeşte. Pentru aceasta şi celor ce-l cinstesc pe dânsul le izvorăşte tămăduiri.";
        }

        if (day == 21) {
            celebrationDay = "Sfinţii Cuvioşi Partenie şi Rafail de la Agapia Veche";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Următori şi împlinitori ai Evangheliei lui Hristos, Cuvioşilor Părinţi Partenie şi Rafail, sihaştrii prealuminaţi ai munţilor Moldovei; ostenindu-vă cu postul şi cu rugăciunea, aţi dobândit de la Dumnezeu aripi ale sufletului vostru, pentru aceasta vă rugăm să ne trimiteţi de la Hristos milă şi har celor ce prăznuim cu dragoste pomenirea voastră!";
        }

        if (day == 22) {
            celebrationDay = "Sfânta Mironosiță întocmai cu Apostolii Maria Magdalena";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Lui Hristos, Cel Ce pentru noi S-a născut din Fecioară, Cinstită Maria Magdalena, ai urmat şi ai păzit îndreptările şi legile Lui. Pentru aceasta, astăzi, preasfinţită pomenirea ta prăznuind, te lăudăm cu credinţă şi te cinstim cu dragoste.";
        }

        if (day == 23) {
            celebrationDay = "Aducerea moaștelor Sfântului Sfințit Mucenic Foca";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Foca, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Sfânta Mare Muceniță Hristina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Hristina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            celebrationDay = "Adormirea Sfintei Ana, mama Maicii Domnului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pe Ceea ce a născut Viaţa în pântece o ai purtat, pe Curata Maica lui Dumnezeu, de Dumnezeu Gânditoare, Sfântă Ana. Pentru aceasta acum, la primirea cerească, unde este locaşul celor ce se veselesc întru slavă, bucurându-te acum te-ai mutat; cere pentru cei ce te cinstesc pe tine cu dragoste iertare de greşeli, pururea fericită.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Cuvios Ioanichie de la Muscel";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Locuitor în sihăstrie şi înger trupesc, de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Ioanichie; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui ce ţi-a dat ţie putere, slavă Celui ce te-a încununat pe tine, slavă Celui ce lucrează prin tine tuturor tămăduiri!";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Mare Mucenic și tămăduitor Pantelimon";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Purtătorule de chinuri, Sfinte şi Tămăduitorule Pantelimon, roagă pe Milostivul Dumnezeu să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfinții Apostoli și Diaconi Prohor, Nicanor, Timon și Parmena";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli, Prohor, Nicanor, Timon și Parmena, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfântul Mucenic Calinic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Calinic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            celebrationDay = "Sfinţii Apostoli Sila, Silvan, Crescent, Epenet şi Andronic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli, Sila, Silvan, Crescent, Epenet şi Andronic, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 31) {
            celebrationDay = "Sfântul și Dreptul Evdochim";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cel Ce te-a chemat pe tine de pe pământ la cereştile locaşuri păzeşte şi după moarte nevătămat trupul tău, Sfinte Evdochim; că tu, cu curăţie şi cu cinstită viaţă, fericite, ai vieţuit, nespurcându-ţi trupul, pentru aceasta, cu îndrăznire roagă pe Hristos Dumnezeu să ne mântuiască pe noi.";
        }

    }




    //August

    if (month == 7) {

        if (day == 1) {
            celebrationDay = "Sfinții 7 frați Mucenici Macabei cu mama lor Solomoni și dascălul Eleazar";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile sfinţilor 7 frați Mucenici Macabei cu mama lor Solomoni și dascălul Eleazar, care pentru Tine au pătimit, fii Milostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 2) {
            celebrationDay = "Aducerea moaştelor Sfântului întâiului Mucenic şi Arhidiacon Ştefan";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu împărătească cunună a fost încununat creştetul tău, din chinurile cele pe care le-ai răbdat pentru Hristos Dumnezeu, întâi pătimitorule între mucenici Sfinte Arhidiacon Ştefan. Că tu, mustrând nebunia iudeilor, ai văzut pe Mântuitorul tău de-a dreapta Tatălui. Pe Acela roagă-L pentru sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfinţii Cuvioşi Isaachie, Dalmat şi Faust";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri, Care Te porţi pururea cu noi după blândeţile Tale, nu depărta mila Ta de la noi, ci, pentru rugăciunile părinţilor noştri Sfinţii Cuvioşi Isaachie, Dalmat şi Faust, îndreptează viaţa noastră în pace.";
        }

        if (day == 4) {
            celebrationDay = "Sfinţii şapte tineri din Efes";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Sfinţii şapte tineri din Efes, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Cuvios Ioan Iacob de la Neamț";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip, căci lăsând lumea și patria ta, ai luat Crucea lui Hristos și în valea Iordanului te-ai așezat spre nevoință. Pentru aceasta și cu îngerii acum se bucură, Cuvioase Părinte Ioane, duhul tău. Roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "SCHIMBAREA LA FAȚĂ A DOMNULUI";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Schimbatu-Te-ai la Faţă în munte, Hristoase Dumnezeule, arătând ucenicilor Tăi Slava Ta, pe cât li se putea. Strălucească şi nouă, păcătoşilor, lumina Ta cea pururea fiitoare, pentru rugăciunile Născătoarei de Dumnezeu, Dătătorule de lumină, slavă Ţie.";
        }

        if (day == 7) {
            celebrationDay = "Sfânta Cuvioasă Teodora de la Sihla";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cele pământeşti părăsind şi jugul pustniciei luând, te-ai făcut mireasă lui Hristos, fericită; cu postul, cu privegherea cereştile daruri luând şi cu rugăciunea pe îngeri ajungând, firea omenească ai biruit şi la cele cereşti te-ai mutat, lăsându-ne spre mângâiere peştera şi sfintele tale moaşte. Pentru aceasta, Sfântă Preacuvioasă Maică Teodora, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Ierarh Emilian Mărturisitorul, Episcopul Cizicului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Emilian, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Apostol Matia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Matia, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfântul Mucenic Laurențiu Arhidiaconul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Laurențiu, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Ierarh Nifon, Patriarh la Constantinopol";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu faptele dreptei credinţe strălucind toată Biserica ai luminat, însoţindu-te cu smerenia cea dătătoare de înălţare, tu, cinstea cea mărită a celor două sfinte locaşuri, podoaba şi înfrumuseţarea patriarhilor, Mărite Ierarhe Nifon. Iar acum umple de dumnezeieşti daruri pe cei ce cu credinţă te măresc pe tine.";
        }

        if (day == 12) {
            celebrationDay = "Sfinţii Mucenici Fotie şi Anichit";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Fotie şi Anichit, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 13) {
            celebrationDay = "Mutarea moaștelor Sfântului Cuvios Maxim Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Proroc Miheia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Miheia pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 15) {
            celebrationDay = "ADORMIREA MAICII DOMNULUI";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru naştere Fecioria ai păzit, întru Adormire lumea nu ai părăsit, de Dumnezeu Născătoare; mutatu-te-ai la Viaţă, fiind Maica Vieţii şi cu rugăciunile tale, izbăveşti din moarte sufletele noastre.";
        }

        if (day == 16) {
            celebrationDay = "Sfinții Martiri Brâncoveni: Constantin Vodă cu fii săi Constantin, Ștefan, Radu, Matei și cu sfetnicul Ianache";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cel ce pentru dreapta credință și pentru neam, te-ai învrednicit a suferi moarte de martir, împreună cu fiii tăi Constantin, Ștefan, Radu și Matei și cu sfetnicul Ianache, dreptcrediciosule Voievod Constantine, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Gheorghe Pelerinul";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe nevoitorul cel mare și următorul sihaștrilor, pe fericitul pelerin al lui Hristos în cântări să-l cinstim, strigându-i cu evlavie: Sfinte Gheorghe, prin rugăciunile tale, luminează calea vieții noastre!";
        }

        if (day == 18) {
            celebrationDay = "Sfinţii Mucenici Flor şi Lavru";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pe preaîmpodobita şi de Dumnezeu înţelepţita doime cea prealuminoasă, pe Fericitul Flor şi pe Preacinstitul Lavru, după vrednicie să-i lăudăm credincioşii, căci aceştia cu osârdie au propovăduit în chip văzut tuturor, pe Treimea Cea Nezidită. Pentru aceasta, pătimind până la sânge, s-au încununat cu cunună prealuminoasă şi se roagă lui Hristos Dumnezeu, ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Mucenic Andrei Stratilat";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mărirea cea pământească ai lăsat şi Cereasca Împărăţie ai moştenit; sângele picurându-ţi, ca şi cu o cunună de piatră nestricată, prea minunat te-ai împodobit; şi către Hristos ai venit cu sobor răbdător de patimi, cu ceata îngerilor în Lumina Cea Neînserată; şi pe Hristos, Soarele Cel Neapus, ai aflat, Sfinte Andrei Stratilat. Aceluia roagă-te pururea, cu cei împreună cu tine purtători de chinuri, să mântuiască sufletele noastre.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Proroc Samuel";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Samuel pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Apostol Tadeu";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Tadeu, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Mucenic Agatonic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Agatonic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Mucenic Lup";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Lup, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 24) {
            celebrationDay = "Sfântul Sfințit Mucenic Cosma Etolul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ca un râvnitor al Sfinţilor Apostoli ai primit lumânarea Duhului şi propovăduitor dumnezeiesc al dreptei-credinţe te-ai arătat; de aceea întăreşte-ne şi pe noi pe temelia dumnezeiască a credinţei ortodoxe şi a sfintelor dogme, Cosma sfinţite mucenicule slăvite, cerând pentru noi iertare greşelilor.";
        }

        if (day == 25) {
            celebrationDay = "Sfântul Apostol Tit";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Tit, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 26) {
            celebrationDay = "Sfinţii Mucenici Adrian şi Natalia, soţia sa";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Credinţa cea mântuitoare comoară nerăpită ai socotit-o, de trei ori fericite, păgânătatea cea părintească părăsind-o şi urmând Stăpânului, te-ai îmbogăţit cu darurile cele Dumnezeieşti Sfinte Adrian Mărite, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            celebrationDay = "Sfântului Cuvios Pimen cel Mare";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Pimen, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Cuvios Moise Etiopianul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat de Dumnezeu Purtătorule, Părintele nostru Moise; cu postul, cu privegherea, cu rugăciunea, cereştile daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 29) {
            celebrationDay = "Tăierea Capului Sfântului Proroc Ioan Botezătorul (Post)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pomenirea dreptului cu laude, iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat mai cinstit şi decât proorocii. Că te-ai învrednicit a boteza în repejunile Iordanului pe Cel Propovăduit. Drept aceea, pentru adevăr nevoindu-te, bucurându-te, ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în trup: pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Ierarh Varlaam, Mitropolitul Moldovei";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Vrednic slujitor al lui Hristos și înțelept apărător al dreptei credințe, mare cinstitor al Sfintei Cuvioase Parascheva și credincios luminător al neamului românesc, Sfinte Ierarhe Varlaam, roagă pe Hristos-Dumnezeu să ocrotească și să mântuiască sufletele noastre.";
        }

        if (day == 31) {
            celebrationDay = "Așezarea în raclă a brâului Maicii Domnului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Născătoare de Dumnezeu pururea Fecioară, Acoperământul oamenilor, Veşmântul şi Brâul Preacuratului tău trup, puternic Acoperământ cetăţii tale ai dăruit prin naşterea ta cea fără sămânţă, Nestricată rămânând. Că întru tine şi firea se înnoieşte şi vremea. Pentru aceasta, te rugăm, pace cetăţii tale dăruieşte şi sufletelor noastre mare milă.";
        }

    }






    //Septembrie

    if (month == 8) {

        if (day == 1) {
            celebrationDay = "Sfântul Cuvios Simeon Stâlpnicul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Al răbdării stâlp ai fost, râvnind părinţilor celor mai dinainte, cuvioase; lui Iov întru patimi, lui Iosif întru ispite şi vieţii celor fără de trup, tu fiind în trup, Sfinte Simeon, părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Ierarh Ioan Postitorul, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Ioan, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfinţii Cuvioşi Neofit şi Meletie de la Mănăstirea Stânișoara";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "De Dumnezeu iubitorilor Părinţi, suindu-vă în munţii faptelor bune, locaşuri Preasfântului Duh v-aţi arătat şi acum ca făclia în sfeşnic luminaţi în lume, Cuvioşilor Neofit şi Meletie; rugaţi-vă lui Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Proroc Moise";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Suindu-te către înălţimea bunătăţilor, Sfinte Prorocule Moise, te-ai învrednicit a vedea Strălucirea lui Dumnezeu, primind tablele cele date de Dumnezeu; şi purtând întru tine darul însemnărilor, te-ai făcut cinstită laudă prorocilor şi mare taină a dreptei credinţe.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Prooroc Zaharia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu haina preoţiei fiind îmbrăcat, înţelepte, după Legea lui Dumnezeu jertfa primită, după cuviinţa preoţiei, ai adus, Sfinte Zaharia. Şi ai fost luminător şi văzător al celor de taină, semnele darului întru tine purtând lămurit, preaînţelepte. Şi cu sabia ai fost omorât în Biserica lui Dumnezeu, proorocule al lui Hristos. Cu Înaintemergătorul roagă-te să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Pomenirea minunii Sfântului Arhanghel Mihail în Colose";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mai mare Voievodule al Oştilor Cereşti, Mihaile, rugămu-te pe tine noi, nevrednicii, ca să ne acoperi pe noi cu rugăciunile tale şi cu acoperământul aripilor măririi tale celei netrupeşti. Păzeşte-ne pe noi cei ce cădem cu deadinsul şi strigăm: mântuieşte-ne din nevoi, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 7) {
            celebrationDay = "Sfinţii Cuvioşi Părinţi Simeon şi Amfilohie de la Pângăraţi";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cuvioşilor Părinţi Simeon şi Amfilohie, cei ce aţi luminat pădurile Carpaţilor cu rugăciunile voastre şi aţi umplut de mireasmă duhovnicească toată valea Bistriţei, sfetnici de taină ai voievozilor şi făclii luminoase ale călugărilor şi credincioşilor evlavioşi, rugaţi-vă lui Dumnezeu pentru noi, cei ce săvârşim cu dragoste sfântă pomenirea voastră!";
        }

        if (day == 8) {
            celebrationDay = "NAȘTEREA MAICII DOMNULUI";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Naşterea ta, de Dumnezeu Născătoare Fecioară, bucurie a vestit la toată lumea; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru. Şi dezlegând blestemul, a dat binecuvântare; şi stricând moartea, ne-a dăruit nouă viaţă veşnică.";
        }

        if (day == 9) {
            celebrationDay = "Sfinţii şi Drepţii Dumnezeieşti Părinţi Ioachim şi Ana";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pomenirea drepţilor Tăi, Doamne, prăznuind, printr-înşii ne rugăm Ţie, mântuieşte sufletele noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfânta Împărăteasă Pulheria";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfântă Împărăteasă Pulheria, roagă pe Milostivul Dumnezeu ca să dea iertare de păcate sufletelor noastre.";
        }

        if (day == 11) {
            celebrationDay = "Sfânta Cuvioasă Teodora din Alexandria";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Teodora, duhul tău.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Mucenic Avtonom";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Avtonom, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfântul Cuvios Ioan de la Prislop";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Iubitorule de nevoinţă şi râvnitorule întru cele sfinte, Cuvioase Părinte Ioan, părăsit-ai cele trecătoare şi ai ales pe cele veşnice; luat-ai jugul lui Hristos în Mănăstirea Prislop şi în peşteră pustnicească, împreună cu îngerii, L-ai slăvit pe Dumnezeu. Pentru aceasta, nu înceta a te ruga pentru sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Înălţarea Sfintei Cruci";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mântuieşte, Doamne, poporul Tău şi binecuvintează moştenirea Ta; biruinţă binecredincioşilor creştini asupra celui protivnic dăruieşte şi cu Crucea Ta păzeşte pe poporul Tău.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Ierarh Iosif cel Nou de la Partoş, Mitropolitul Banatului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Din tinereţe cu totul te-ai supus Domnului, cu rugăciunile şi cu ostenelile şi cu postul. Pentru aceasta, văzând Dumnezeu nevoinţele tale, arhiereu şi păstor Bisericii Sale te-a rânduit; şi după moarte, în cetele sfinţilor te-a sălăşluit, Sfinte Părinte Iosif. Roagă-te lui Hristos Dumnezeu să ne dăruiască iertare de greşeli nouă, celor ce cu credinţă şi cu dragoste săvârşim sfântă pomenirea ta.";
        }

        if (day == 16) {
            celebrationDay = "Sfânta Mare Muceniţă Eufimia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Foarte mult ai vestit pe cei dreptmăritori şi ai ruşinat pe cei rău credincioşi, Sfântă Mare Muceniţă Eufimia, Preafrumoasă fecioară a lui Hristos, întărind cele ce părinţii bine au dogmatizat la al patrulea Sinod Ecumenic. Muceniţă Preamărită, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 17) {
            celebrationDay = "Sfânta Muceniţă Sofia cu fiicele sale: Pistis, Elpis şi Agapis";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşele cuvântătoare, Sfântă Muceniţă Sofia cu fiicele: Pistis, Elpis şi Agapis, prin mucenicie v-aţi adus Mielului şi Păstorului, săvârşind călătoria cea către Hristos şi credinţa păzind-o. Pentru aceea, cu suflet vesel astăzi săvârşind pomenirea voastră cea sfântă, minunatelor, pe Hristos Îl slăvim.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Ierarh Eumenie, Episcopul Gortinei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Eumenie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            celebrationDay = "Sfinţii Mucenici Trofim, Savatie şi Dorimedont";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeu Cel Lăudat în Treime a preamărit treimea mucenicilor; pe Sfântul Trofim, pe Sfântul Savatie şi pe Sfântul Dorimedont; căci, întru Dânsul crezând, au surpat pe vrăjmaşul. Prin rugăciunile lor, Hristoase Dumnezeule, miluieşte-ne pe noi.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Mare Mucenic Eustatie cu soţia sa Teopisti și cei doi fii ai lor Agapie şi Teopist";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Eustatie, Teopista, Agapie și Teopist întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            celebrationDay = "Sfântului Apostol Codrat din Magnesta";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Codrat, roagă pe Milostivul Dumnezeu să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Sfințit Mucenic Teodosie de la Mănăstirea Brazi";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Arătatu-te-ai, Sfinte Ierarhe Teodosie, sfeşnic pururea luminos şi mare apărător al Bisericii lui Hristos. Strălucit-ai prin slujire şi mucenicie, ca o jertfă preacurată aducându-te Stăpânului tuturor; slăvim pomenirea ta, rugând pe Dumnezeu să dăruiască sufletelor noastre pace şi mare milă.";
        }

        if (day == 23) {
            celebrationDay = "Zămislirea Sfântului Prooroc Ioan Botezătorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ceea ce mai înainte erai stearpă şi neroditoare, veseleşte-te; că iată ai zămislit pe Sfeşnicul Soarelui, Cel Ce va să lumineze toată lumea care pătimea cu nevederea. Dănţuieşte Zaharia cu îndrăzneală strigând: Prooroc Celui Preaînalt este cel ce are să se nască.";
        }

        if (day == 24) {
            celebrationDay = "Sfântul Cuvios Siluan Athonitul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Propovăduitor al iubirii lui Hristos, Sfinte Cuvios Siluan Athonitul, lumii întregi ai fost dat, de trei ori fericite, între cuvântătorii de Dumnezeu cel prea duios, căci pe Cel smerit și blând ai văzut și inima Aceluia o ai cunoscut. Pentru aceasta, prin graiurile tale toți luminându-ne, proslăvim Duhul, Carele pe tine-au proslăvit.";
        }

        if (day == 25) {
            celebrationDay = "Sfânta Cuvioasă Eufrosina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Eufrosina, duhul tău.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Voievod Neagoe Basarab";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Domnitor preaînţelept între căpeteniile neamului românesc, ctitor de lăcaşuri sfinte, prieten al Sfinţilor Părinţi, învăţător luminat de Duhul Sfânt şi mare iubitor de pace, Sfinte Neagoe Voievod, roagă-L pe Hristos Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Ierarh Martir Antim Ivireanul, Mitropolitul Țării Românești";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Sfinte Părinte Ierarhe Antim, după vrednicie ai fost rânduit păstor şi învăţător turmei tale, şi cu înţelepciune dumnezeiască ai revărsat râurile sfintelor tale cuvinte. Viaţa ai pus-o pentru păstoriţii tăi şi cununa muceniciei ai dobândit de la Hristos Dumnezeu, pe Care roagă-L, Sfinte Părinte Ierarhe Antim, să dăruiască pace şi mare milă celor ce săvârşesc sfântă pomenirea ta.";
        }

        if (day == 28) {
            celebrationDay = "Sfântului Cuvios Hariton Mărturisitorul";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Hariton, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfântul Mucenic Trifon";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Trifon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Ierarh Grigorie Luminătorul, Arhiepiscopul Armeniei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Ierarhe Grigorie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }


    }







    //Octombrie

    if (month == 9) {

        if (day == 1) {
            celebrationDay = "Acoperământul Maicii Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Astăzi, poporul cel binecredincios, luminat prăznuim, umbriţi fiind prin venirea ta, Maica lui Dumnezeu şi cău­tând către Preacinstită Icoana ta, cu umilinţă grăim: acoperă-ne pe noi cu Cinstitul tău Acoperă­mânt şi ne scapă de tot răul, rugând pe Fiul tău, Hristos Dumnezeul nostru, să mântu­iască sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Sfinţit Mucenic Ciprian";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ciprian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Sfinţit Mucenic Dionisie Areopagitul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Bunătate învăţându-te şi îmbărbătându-te întru toate, îmbrăcându-te cuviincios cu bun cuget, ai scos din vasul alegerii cele negrăite; şi cre­dinţa păzind, calea întocmai ai săvârşit, Sfinţite Mucenice Dionisie: roagă-te lui Hristos Dumnezeu, să mântuiască su­fletele noastre.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Sfinţit Mucenic Ierotei, Episcopul Atenei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Bunătate învăţându-te şi îmbărbătându-te întru toate, cu bună cunoştinţă, ca un sfinţitor cuvios îmbrăcându-te, ai scos din vasul alegerii cele negrăite; şi credinţa păzind, stadiul întocmai ai săvârşit, Sfinţite Mucenice Ierotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfinţii Cuvioşi Daniil şi Misail, de la Mănăstirea Turnu";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Dascăli ai rugăciunii neîncetate şi ai luptelor duhovniceşti v-aţi arătat, Cuvioşilor Daniil şi Misail, că de iubirea Mântuitorului Hristos, nedespărţiţi fiind, cu apostolească râvnă Preasfintei Treimi aţi slujit cu osârdie, în peşteri nevoindu-vă. Pentru aceasta, cerem, cu smerenie: Rugaţi-vă, să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Apostol Toma";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Toma, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 7) {
            celebrationDay = "Sfinţilor Mari Mucenici Serghie şi Vah";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe cei ce după fire nu au fost fraţi de trup, pe aceştia Darul Cel Dumnezeiesc a cugeta frăţeşte până la sânge i-a făcut, pe Sfinţii Mucenici Serghie şi pe Vah, cinstită şi cre­dincioasă pereche. Fără de arme şi fără de haine în locul nevoinţei pe vrăjmaşul au înfruntat, rugându-se neîncetat pentru sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Sfânta Cuvioasă Pelaghia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Pelaghia, duhul tău.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Apostol Iacob al lui Alfeu";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Iacob, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfinţii Mucenici Evlampie şi Evlampia, sora lui";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Evlampie și Evlampia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Apostol Filip, unul din cei 7 diaconi";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Filip, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfinţilor Mucenici Prov, Tarah şi Andronic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "De isprăvile Sfinţilor Mucenici Prov, Tarah şi Andronic, Puterile Îngereşti foarte s-au mi­nunat; că fiind un trup muri­tor, pe vrăjmaşul cel fără de trup cu Puterea Crucii nevoindu-se tare, l-au biruit nevăzut. Şi acum se roagă Domnului să se miluiască sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Aducerea moaștelor Sfântului Apostol Andrei la Iași";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Fiu al Galileei şi frate al lui Petru, dintre pescari în soborul Apostolilor întâi ai fost chemat, Andrei cel minunat, iar de la mormântul tău din Patra chemi popoarele la Dumnezeu şi atunci ne-ai umplut de bucurie când în România iarăşi ai venit, unde pe Hristos Domnul L-ai propovăduit.";
        }

        if (day == 14) {
            celebrationDay = "Sfânta Cuvioasă Parascheva";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru tine, Maică, cu osârdie s-a mân­tuit cel după chip, căci luând Crucea, ai urmat lui Hristos și lucrând ai în­vă­țat să nu se uite la trup, căci este trecător, ci să poarte grijă de suflet, de lucrul cel ne­muritor. Pentru aceasta și cu îngerii împreună se bucură, Cuvioasă Maică Parascheva, duhul tău.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Mucenic Luchian preotul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Luchian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Mucenic Longhin Sutașul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Longhin, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Proroc Osea";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău Osea po­menire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Apostol și Evanghelist Luca";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol şi Evanghe­list Luca, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Proroc Ioil";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău, Doamne, Ioil pomenire prăznuind, printr-însul Te rugăm: mântuieşte sufletele noastre.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Mare Mucenic Artemie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Artemie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            celebrationDay = "Sfinţii Cuvioşi Mărturisitori Visarion şi Sofronie şi al Sfântului Mucenic Oprea";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Luptătorilor pentru Orto­doxie, Sfinţilor Cuvioşi Mărturisitori Visarion şi Sofronie şi Sfinte Mucenic Oprea, ca nişte îngereşti trâm­biţe aţi înviorat în suflete îndrăznirea mărturisirii dreptei credinţe şi ca nişte înţelepţi propovăduitori, pe popor l-aţi hrănit cu dreaptă şi luminată învăţătură. Mari au fost oste­nelile lucrării voastre; mare şi osârdia propovăduirii; mare a fost şi rodul luptei voastre drep­te, pururea pomeniţilor ostaşi ai lui Hristos.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Ierarh, întocmai cu apostolii, Averchie, Episcopul Ierapolei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Averchie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Apostol Iacob, ruda Domnului, primul episcop al Ierusalimului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ca un ucenic al Domnului ai primit Evanghelia, drepte; ca un mucenic eşti de neînduple­cat; îndrăzneală ca un frate al lui Dumnezeu, a te ruga ca un ierarh. Roagă pe Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Sfântul Mare Mucenic Areta şi al celor împreună cu dânsul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile Sfântului Mare Mucenic Areta şi al celor împreună cu dânsul, care pentru Tine au pătimit, fii Mi­lostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 25) {
            celebrationDay = "Sfinţilor Mucenici Marcian şi Martirie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Marcian şi Martirie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Mare Mucenic Dimitrie, Izvorâtorul de mir";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mare apărător te-a aflat în­tru primejdii lumea, purtătorule de chinuri, pe tine cel ce ai biruit pe păgâni. Deci, precum mândria lui Lie ai surpat şi la luptă îndrăzneţ ai făcut pe Nestor, aşa Sfinte Dimitrie, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Cuvios Dimitrie cel Nou, Ocrotitorul Bucureștilor";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; căci luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Dimitrie, duhul tău.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Ierarh Iachint, Mitropolitul Țării Românești";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Vrednic următor al ierarhilor dobrogeni şi întâiule între mitropoliţii Ţării Româneşti, Sfinte Ierarhe Iachint, te-ai arătat mărturisitor al dreptei credinţe, lucrător al virtuţilor şi rugător pentru sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfânta Mare Muceniță Anastasia Romana";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Anastasia, strigă cu glas mare: pe Tine, Mirele meu, Te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru Tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Apostol Cleopa";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol, Cleopa, roagă pe milostivul Dumnezeu ca să dăruiască iertare de greșeli sufletelor noastre.";
        }

        if (day == 31) {
            celebrationDay = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }


    }



    //Noiembrie

    if (month == 10) {

        if (day == 1) {
            celebrationDay = "Sfinţii Mucenici doctori fără de arginţi Cosma şi Damian";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor cei fără de arginţi şi de minuni făcătorilor, Cosma şi Damian, cercetaţi neputinţele noastre. Şi ca unii care în dar aţi luat, în dar daţi-ne nouă.";
        }

        if (day == 2) {
            celebrationDay = "Sfinţii Mucenici Achindin, Pigasie, Aftonie, Elpidifor şi Anempodist";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Purtătorilor de lupte ai Domnului, Sfinţilor Mucenici Achindin, Pigasie, Aftonie, Elpidifor şi Anempodist, fericit este pământul care s-a adăpat cu sângele vostru şi sfinte locaşurile care au primit trupurile voastre. Că în privelişte pe vrăjmaşi aţi biruit şi pe Hristos cu îndrăznire aţi propovăduit, pe Acela ca pe un Bun rugaţi-L să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfinţii Sfinţiţi Mucenici Achepsima, episcopul, Iosif, preotul şi Aitala, diaconul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Achepsima, episcopul, Iosif, preotul şi Aitala, diaconul, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Cuvios Gheorghe, Mărturisitorul din Drama";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pe ctitorul cinstitei Mănăstiri a Sfintei Înălțări, pe lucrătorul de taină al plânsului aducător de bucurie, pe învățătorul rugăciunii inimii, al smereniei și al trezviei, pe Cuviosul Gheorghe în cântări să-l cinstim noi, credincioșii, ca pe o laudă nouă a Mărturisitorilor, strigând: Purtăto­rule de chinuri, cu dumnezeiesc ajutor ocrotește-i pe cei ce se roagă ție!";
        }

        if (day == 5) {
            celebrationDay = "Sfinţii Mucenici Galaction şi Epistimia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Galaction şi Epistimia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Ierarh Pavel Mărturisitorul, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pentru mărturisirea Dumnezeieştii credinţe, alt Pavel pe tine Biserica te-a arătat râvnitor între preoţi. Strigă împreună cu tine şi Abel către Domnul şi sângele cel drept al lui Zaharia. Părinte cuvioase, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 7) {
            celebrationDay = "Sfinţii 33 de Mucenici din Melitina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 8) {
            celebrationDay = "Soborul Sfinților Arhangheli Mihail și Gavriil şi a tuturor puterilor cereşti";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Mai marilor Voievozi ai Oştilor cereşti, rugămu-vă pe voi noi, nevrednicii; cu rugăciunile voastre să ne acoperiţi pe noi, cu acoperământul aripilor slavei voastre celei netrupeşti păzindu-ne pe noi, cei ce cădem cu deadinsul şi strigăm: izbăviţi-ne din nevoi, ca nişte mai mari peste cetele puterilor celor de sus.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Ierarh Nectarie din Eghina";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe cel născut în Silivria şi ocrotitorul Eghinei, pe acela ce s-a arătat în vremurile din urmă prieten adevărat al virtuţii, pe Sfântul Ierarh Nectarie să-l cinstim cei credincioşi ca pe un Dumnezeiesc slujitor al lui Hristos, că izvorăşte bogate vindecări celor ce cu evlavie strigă: Slavă lui Hristos, Celui Ce te-a proslăvit! Slavă Celui Ce minunat te-a arătat! Slavă Celui Ce prin tine lucrează tuturor tămăduiri!";
        }

        if (day == 10) {
            celebrationDay = "Sfinţilor Apostoli Olimp, Rodion, Sosipatru, Erast, Terţiu şi Cvart";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Arătatu-s-a astăzi cinstită prăznuirea Apostolilor Olimp, Rodion, Sosipatru, Erast, Terţiu şi Cvart, dând în chip vădit iertare de greşeli tuturor celor ce săvârşesc pomenirea lor.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Mare Mucenic Mina";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mucenicul Tău, Doamne, Mina întru nevoința sa, cununa nestricăciunii a luat de la Tine, Dumnezeul nostru, că având puterea Ta, pe chinuitori a învins, zdrobit-a și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 12) {
            celebrationDay = "Sfântului Ierarh Ioan cel Milostiv, Patriarhul Alexandriei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru răbdarea ta ţi-ai agonisit plata ta, părinte cuvioase, întru rugăciuni neîncetat răbdând, pe săraci iubind şi pe aceia îndestulând. Dar, roagă-te lui Hristos Dumnezeu, Sfinte Ioan, Milostive, Fericite, să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfântul Ierarh Ioan Gură de Aur, Arhiepiscop la Constantinopol";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Din gura ta ca o lumină de foc strălucind harul, lumea a luminat. Vistieriile neiubirii de argint lumii a câştigat. Înălţimea gândului smerit nouă ne-a arătat. Şi cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Cuvântul Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Ierarh Grigorie Palama, Arhiepiscopul Tesalonicului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Luminător al dreptei credinţe, sprijinul Bisericii şi învăţătorule, podoaba monahilor, apărătorule cel nebiruit al teologilor; făcătorule de minuni, Grigorie, lauda Tesalonicului, propovăduitorule al harului, roagă-te pururea să se mântuiască sufletele noastre.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Cuvios Paisie de la Neamț (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Apărătorule al dreptei credințe și lauda monahilor, Cuvioase Părinte Paisie, din pruncie iubind pe Hristos, ca un alt Avraam ai părăsit patria ta, în Muntele Athosului nevoindu-te; și, adunând ceată de ucenici, te-ai așezat în țara Moldovei cea binecuvântată și Mănăstirea Neamțului rai pământesc ai făcut-o. Pentru aceasta, împreună cu îngerii, nu înceta a te ruga lui Dumnezeu pentru sufletele noastre.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Apostol şi Evanghelist Matei (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol şi Evanghelist Matei, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Ierarh Grigorie Taumaturgul, Episcopul Neocezareei (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru rugăciuni priveghind, la lucrările minunilor răbdând, asemenea numire cu îndreptările ai câştigat. Ci, te roagă lui Hristos Dumnezeu, Părinte Grigorie, să lumineze sufletele noastre, ca să nu adormim în moarte cu păcate.";
        }

        if (day == 18) {
            celebrationDay = "Sfinții Mucenici Platon şi Roman, diaconul (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Platon şi Roman, diaconul, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Proroc Avdie (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pomenind prăznuirea prorocului tău Avdie, Doamne, printr-însul Te rugăm: izbăveşte sufletele noastre.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Cuvios Grigorie Decapolitul (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Chip te-ai făcut înfrânării şi prin Dumnezeiescul Duh pe toţi i-ai luminat. Alergarea dreptei credinţe o ai săvârşit şi cu învăţăturile lumea ai luminat şi ai mustrat cugetele celor rău credincioşi, Părinte Cuvioase Grigorie, roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 21) {
            celebrationDay = "INTRAREA ÎN BISERICĂ A MAICII DOMNULUI (Dezlegare la pește)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Astăzi, înainte însemnarea bunăvoinţei lui Dumnezeu şi propovăduirea mântuirii oamenilor, în Templul lui Dumnezeu luminat Fecioara se arată şi pe Hristos tuturor mai înainte Îl vesteşte. Acesteia şi noi cu mare glas să-i strigăm: Bucură-te, Împlinirea rânduielii Ziditorului.";
        }

        if (day == 22) {
            celebrationDay = "Sfinţii Apostoli Filimon, Arhip şi Onisim (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli Filimon, Arhip şi Onisim, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Cuvios Antonie de la Iezerul Vâlcea (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Purtătorule de dumnezeiescul dor al rugăciunii neîncetate, Sfinte Părinte Noule Antonie, povăţuitorule al călugărilor, ajutătorule al celor din nevoi şi făcătorule de minuni, locuitorul raiului celui de sus, dar nedespărţit de cei de jos, roagă pe Milostivul Dumnezeu să ne dăruiască nouă pace şi mare milă.";
        }

        if (day == 24) {
            celebrationDay = "Sfinţii Sfinţiţi Mucenici Clement, Episcopul Romei şi Petru, Episcopul Alexandriei (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfinţilor Sfinţiţi Mucenici Clement, Episcopul Romei şi Petru, Episcopul Alexandriei, în pace îndreptează viaţa noastră.";
        }

        if (day == 25) {
            celebrationDay = "Sfânta Mare Muceniță Ecaterina (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu înțelepciunea ca și cu razele soarelui ai luminat pe filosofii păgâni și ca o lună prealuminoasă, care strălucea în noaptea necredinței, întunericul l-ai gonit; iar pe împărăteasa o ai încredințat, dimpreună și pe prigonitorul l-ai mustrat, de Dumnezeu chemată, fericită Ecaterino! Cu bucurie ai alergat la cămara cea cerească, către Hristos, Mirele cel preafrumos, și de la Dânsul te-ai încununat cu cunună împărătească, înaintea Căruia împreună cu îngerii stând, roagă-te pentru noi, cei ce cinstim sfântă pomenirea ta.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Cuvios Stelian Paflagonul, ocrotitorul pruncilor (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale, nerodirea pustiului o ai lucrat, şi cu suspinurile tale cele din adânc, spre însutite osteneli o ai făcut roditoare. Şi te-ai făcut luminător lumii, strălucind cu minunile, Stelian, Părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Mare Mucenic Iacob Persul (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu mucenicia cea neobişnuită şi înfricoşătoare şi cu vitejiile răbdării, pe toţi i-ai minunat, mult-pătimitorule, cu tăierea fiecărei părţi din trup, rugăciuni de mulţumire preaminunat ai dat lui Dumnezeu. Pentru aceasta, în pătimirea ta cunună ai luat, şi te-ai suit către tronul Împăratului ceresc, al lui Hristos Dumnezeu, Iacob. Pe Acela roagă-L să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Mucenic Irinarh (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Irinarh, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 29) {
            celebrationDay = "Sfântul Mucenic Paramon (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Paramon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Apostol Andrei, cel Întâi Chemat, Ocrotitorul României (Dezlegare la pește)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Ca cel decât Apostolii mai întâi chemat şi verhovnicului frate adevărat, Stăpânului tuturor Andrei, roagă-te pace lumii să dăruiască şi sufletelor noastre mare milă.";
        }


    }



    //Decembrie

    if (month == 11) {

        if (day == 1) {
            celebrationDay = "Sfântul Proroc Naum (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A prorocului Tău, Doamne, Naum, pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Cuvios Porfirie Kafsokalivitul (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "După cum pe pământ te rugai pentru tămăduirea neputinţelor şi pentru iertarea păcatelor noastre, tot astfel şi acum roagă-te în ceruri, Părinte Porfirie, şi roagă-L pe Hristos Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Cuvios Gheorghe de la Cernica (Dezlegare la pește)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Următor al cuvioşilor părinţi şi împlinitor al virtuţilor sihăstreşti, rugător neîncetat şi înnoitor al monahismului românesc te-ai arătat, Sfinte Cuvioase Părinte Gheorghe. Roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 4) {
            celebrationDay = "Sfânta Mare Muceniță Varvara (Dezlegare la pește)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe Sfânta Mare Muceniţă Varvara să o cin­stim; că a sfărâmat cursele vrăjmasului şi ca o vrăbioară s-a izbăvit dintr-însele, cu ajutorul Armei Crucii, Preacinstita.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Cuvios Sava cel Sfințit (Dezlegare la pește)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele din adânc ai făcut ostenelile tale însutit roditoare şi te-ai făcut luminător lumii, strălucind cu minunile, Sfinte Sava părintele nostru, cuvioase! Roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Ierarh Nicolae, Arhiepiscopul Mirelor Lichiei (Dezlegare la pește)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Nicolae, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            celebrationDay = "Sfânta Muceniță Filofteia de la Curtea de Argeș (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Întru răbdarea ta ţi-ai agonisit plata ta, Fericită Filofteia, întru ispite neîncetat răbdând, bătăi suferind, în necazuri binevoind, pe săraci miluindu-i şi pe flămânzi săturându-i; roagă-te lui Hristos Dumnezeu, bună fecioară, să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Cuvios Patapie (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Patapie, duhul tău.";
        }

        if (day == 9) {
            celebrationDay = "Zămislirea Sfintei Fecioare Maria de către Sfânta Ana (Dezlegare la pește)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Astăzi legăturile nerodirii de fii se dezleagă; că Dumnezeu auzind pe Sfinţii şi Drepţii Ioachim şi Ana, mai presus de orice nădejde le-a făgăduit lămurit că vor naşte pe Fiica lui Dumnezeu, din care S-a născut Cel Necuprins, Om făcându-Se, poruncind Îngerului să-i strige: Bucură-te cea Plină de har, Domnul este cu tine!";
        }

        if (day == 10) {
            celebrationDay = "Sfinţii Mucenici Mina, Ermoghen şi Evgraf (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu înfrânarea omorând por­nirile şi îndemnurile cele arză­toare ale patimilor, ucenicii lui Hristos, Sfinţii Mucenici Mina, Ermoghen şi Evgraf, au luat harul de a alun­ga urmările bolilor celor nepu­tincioşi şi a face minuni, atât în viaţă, cât şi după moarte. Minune uimitoare cu adevărat! Că oase goale izvorăsc tămă­duiri. Slavă Ţie, Singurului Dumnezeu şi Ziditorului.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Cuvios Daniil Stâlpnicul (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Stâlp al răbdării ai fost râv­nindstrămoşilor, cuvioase: Dreptului Iov întru patimi, Sfântului Iosif întru ispite; şi în trup viaţa celor fără de trup având, Sfinte Preacuvioase Daniil, părintele nostru, roagă-te lui Hristos Dumnezeu să mântuiască sufle­tele noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Ierarh Spiridon, Episcopul Trimitundei (Dezlegare la pește)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Soborului celui dintâi te-ai arătat apărător şi de minuni făcător, de Dumnezeu purtătorule Sfinte Spiridon, părintele nostru. Pentru aceasta cu femeia cea moartă în groapă tu ai vorbit şi şarpele în aur l-ai prefăcut. Şi când ai cântat sfintele rugăciuni, îngeri ai avut împreună cu tine slujind, preasfinţite. Slavă Celui Ce te-a preamărit pe tine; Slavă Celui Ce te-a încununat; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 13) {
            celebrationDay = "Sfântul Ierarh Dosoftei, Mitropolitul Moldovei (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Apărătorule al Ortodoxiei și învățătorule al sfințeniei, păstor blând ca un miel și mare dascăl al Sfintei Liturghii, Părinte Ierarhe Dosoftei, roagă pe Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 14) {
            celebrationDay = "Sfinţii Mucenici Tirs, Levchie, Calinic, Filimon, Apolonie şi Arian (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Tirs, Levchie, Calinic, Filimon, Apolonie şi Arian, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Sfințit Mucenic Elefterie, Episcopul Iliriei (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu haină de preot fiind îm­podobit şi cu sângele curgând şiroaie, fericite, ai alergat la Stăpânul tău, Hristos, Înţe­lepte Elefterie, nimicitorul sa­tanei. Pentru aceasta nu în­ceta a te ruga pentru cei ce cu credinţă cinstesc fericitele tale nevoinţe.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Proroc Agheu (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A prorocului Tău, Doamne, Agheu pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Proroc Daniel și Sfinții trei tineri Anania, Azaria și Misail (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mari sunt faptele credinţei; că în mijlocul izvorului văpăii, ca într-o apă de odihnă sfinţii trei Tineri s-au bucurat şi Pro­rocul Daniel păstor leilor ca unor oi s-a arătat. Pentru rugăciunile lor, Hristoase Dum­nezeule, miluieşte-ne pe noi.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Cuvios Daniil Sihastrul (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip; căci luând Crucea, ai urmat lui Hristos; și luptând, ai învățat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta și cu îngerii se bucură, Preacuvioase Părinte Daniile, duhul tău.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Mucenic Bonifatie (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul tău. Doamne, Bonifatie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Sfințit Mucenic Ignatie Teoforul, Episcopul Antiohiei (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfânta Muceniță Iuliana din Nicomidia (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Iuliana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Ierarh Petru Movilă, Mitropolitul Kievului (Post)";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Apărătorule și mărturisitorule al Ortodoxiei, luminătorule al neamurilor, fiule al Moldovei și Părinte al Ucrainei, Sfinte Ierarhe Petru, mult nevoitorule, roagă-te lui Hristos Dumnezeu, să ne apere credința și să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Cuvios Naum (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ucenic vrednic al Sfinţilor Chiril şi Metodie, te-ai arătat fericite, și tămăduiri din destul ai revărsat cu dragoste sufletelor smerite, ca cel ce te-ai arătat luminător mare celor din întunericul neştiinţei, cu raza rugăciunii tale ne înconjoară şi pe noi în ceasul umilinţei.";
        }

        if (day == 24) {
            celebrationDay = "Sfânta Muceniță Eugenia (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Eugenia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            celebrationDay = "NAȘTEREA DOMNULUI (Crăciunul)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Naşterea Ta, Hristoase, Dumnezeul nostru, răsărit-a lumii lumina cunoştinţei; că întru dânsa cei ce slujeau stelelor de la Stea s-au învăţat să se închine Ţie, Soarelui dreptăţii şi să Te cunoască pe Tine, Răsăritul Cel de sus, Doamne, Slavă Ţie!";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Cuvios Nicodim de la Tismana";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Celui Ce a Răsărit din Fecioara, Mai Marelui Păstorilor, ca o oaie de turmă ai urmat, Părinte al nostru Sfinte Nicodim. Cu postul, cu privegherea şi cu rugăciunile, te-ai făcut lucrător sfinţit de cele cereşti, tămăduind sufletele celor ce aleargă la tine cu credinţă. Pentru aceasta strigăm: Slavă Celui Ce te-a preaslăvit pe tine; Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce a arătat tuturor prin tine îndreptare.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Apostol, Întâiul Mucenic și Arhidiacon Ștefan";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Încununatu-s-a creştetul tău cu diademă împărătească, pe urma luptelor pe care le-ai pătimit pentru Hristos Dumnezeu, luptătorule cel dintâi printre mucenici Sfinte Arhidiacon Ștefan. Că vădind nebunia iudeilor, ai văzut pe Mântuitorul tău, de-a dreapta Tatălui. Pe Acela roagă-L totdeauna pentru sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfinții 20.000 de Mucenici arși în Nicomidia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Purtătorilor de biruinţă ai Domnului, fericit este pămân­tul care s-a adăpat cu sângiurile voastre şi sfinte sunt loca­şurile care au primit trupurile voastre. Că în locul de chinuri pe vrăjmaşi i-aţi biruit şi cu în­drăzneală pe Hristos L-aţi pro­povăduit. Pe Dânsul, ca pe un Bun, rugaţi-L pentru noi, ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfinții 14.000 de prunci uciși din porunca lui Irod";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pentru durerile sfinţilor, care pentru Tine au pătimit, Milos­tiv fii, Doamne şi vindecă toate durerile noastre, Iubitorule de oameni.";
        }

        if (day == 30) {
            celebrationDay = "Sfânta Muceniță Anisia fecioara";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Anisia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 31) {
            celebrationDay = "Sfânta Cuvioasă Melania Romana";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Melania, duhul tău.";
        }


    }




    //Ianuarie

    if (month == 0) {

        if (day == 1) {
            celebrationDay = "TĂIEREA ÎMPREJUR CEA DUPĂ TRUP A DOMNULUI";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cel Ce şezi pe Scaunul cel în chipul focului, întru cele de sus, împreună cu Părintele Cel fără de început şi cu Dumnezeiescul Duh, ai binevoit a Te naşte pe pământ din Fecioară, Maica Ta, care nu ştie de bărbat, Mântuitorule Iisuse. Pentru aceasta ai şi fost tăiat împrejur a opta zi ca un Om. Slavă Sfatului Tău Celui Preabun; Slavă rânduielii Tale; Slavă smereniei Tale, Unule Iubitorule de oameni.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Ierarh Silvestru, Episcopul Romei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Silvestru, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Proroc Maleahi";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pomenirea prorocului Tău Maleahi prăznuind, Doamne, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 4) {
            celebrationDay = "Soborul Sfinților 70 de Apostoli";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor 70 de Apostoli rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfinţii Mucenici Teopempt şi Teonas (Post)";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Sfinţii Teopempt şi Teonas, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            celebrationDay = "BOTEZUL DOMNULUI (Boboteaza - Dumnezeiasca Arătare)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "În Iordan Botezându-Te Tu, Doamne, închinarea Treimii s-a arătat. Că Glasul Părintelui a mărturisit Ţie, Fiu Iubit pe Tine numindu-Te; şi Duhul, în Chip de Porumbel, a adeverit întărirea Cuvântului, Cel Ce Te-ai arătat, Hristoase Dumnezeule şi lumea ai luminat, Slavă Ţie.";
        }

        if (day == 7) {
            celebrationDay = "Soborul Sfântului Proroc Ioan Botezătorul și Înaintemergătorul Domnului";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pomenirea dreptului este cu laude; iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat şi decât prorocii mai cinstit. Că şi a boteza în ape pe Cel Propovăduit, te-ai învrednicit. Drept aceasta pentru adevăr nevoindu-te, bucurându-te ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în Trup, pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Cuvios Gheorghe Hozevitul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Gheorghe, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Mucenic Polieuct";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Polieuct, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            celebrationDay = "Sfântul Ierarh Grigorie, Episcopul Nissei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile lor, în pace îndreptează viaţa noastră.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Cuvios Teodosie cel Mare, începătorul vieții călugărești de obște din Palestina ";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Teodosie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfânta Muceniță Tatiana, diaconița";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Tatiana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile Sfântei Mucenițe Tatiana, diaconița, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfinţii Mucenici Ermil şi Stratonic";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mucenicii Tăi, Doamne, Ermil şi Stratonic, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 14) {
            celebrationDay = "Sfinții Cuvioși Mucenici din Sinai și Rait";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfinților Cuvioși Mucenici din Sinai și Rait, în pace îndreptează viaţa noastră.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Cuvios Pavel Tebeul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Pavel. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 16) {
            celebrationDay = "Cinstirea lanțului Sfântului Apostol Petru";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Roma nepărăsind, la noi ai venit prin cinstitele lanţuri ce ai purtat, întâistătătorule pe scaunul Apostolilor. Pe care cu credinţă cinstindu-le, te rugăm: cu ale tale rugăciuni către Dumnezeu, dăruieşte nouă mare milă.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Cuvios Antonie cel Mare";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Râvnitor lui Ilie cu obiceiurile asemă­­­­nân­du-te, Bo­tezătorului cu drepte cărări urmând, Pă­rin­te Antonie, pustiului te-ai făcut locuitor și lumea ai întărit-o cu rugă­ciunile tale. Pentru aceasta roagă-te lui Hristos Dum­ne­zeu să mântuiască sufletele noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Ierarh Atanasie, Arhiepiscopul Alexandriei";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe ierarhii Domnului, pe tâlcuitorii dogmelor; pe păstorii alexandrinilor propovăduitori ai adevărului, perechea cea iubită de Dumnezeu; pe străluciţii luminători, risipitori ai întunericului celor nelegiuiţi: pe Sfântul Atanasie cel Mare, secerătorul ereticilor, împreună cu Sfântul Ierarh Chiril, cel ce a cinstit precum se cuvine pe Născătoarea de Dumnezeu, veniţi toţi iubitorii de prăznuire şi adunându-ne cu veselie şi cu cântări să-i cinstim; că ei se roagă neîncetat lui Dumnezeu pentru noi toţi.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Ierarh Marcu, Mitropolitul Efesului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pentru mărturisirea dumnezeieștii credințe mare lucrător te-a aflat pe tine Biserica, sfințite Marcu prealăudate, căci prin păzirea slovelor dumnezeieștilor părinți ai zdrobit eresurile întunecatului Apus. Pentru aceasta pe Hristos Dumnezeu roagă-L să dăruiască râvnă celor ce-ți urmează cinstita viețuire.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Cuvios Eftimie cel Mare";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Veseleşte-te pustiu care nu rodeai, bucură-te ceea ce nu aveai durere; că bărbatul doririlor Duhului ţi-a înmulţit ţie fii, sădindu-i cu dreapta cinstire de Dumnezeu şi hrănindu-i cu înfrânarea, spre împlinirea faptelor bune. Cu ale cărui rugăciuni, Hristoase Dumne­zeule, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Cuvios Maxim Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Apostol Timotei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Bunătatea învăţându-te şi întru toate cumpătat fiind, îmbrăcându-te cu buna conştiinţă, precum i se cuvine unui sfânt, ai scos din vasul alegerii lucrurile tainice; şi credinţa păzind, aceeaşi cale ai săvârşit, Sfinte Apostol Timotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Sfințit Mucenic Clement, Episcopul Ancirei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Viţă de cuvioşie şi stâlpare de luptă grea, floare preasfinţită şi rod de Dumnezeu dăruit, de-a pururi înfloritor ai fost dat credincioşilor, preasfinţite Mucenic Clement. Ci, ca cel ce eşti cu mucenicii împreună luptător şi cu ierarhii împreună locuitor, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Sfânta Cuvioasă Xenia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Xenia, duhul tău.";
        }

        if (day == 25) {
            celebrationDay = "Sfântul Ierarh Grigorie Teologul, Arhiepiscop la Constantinopol";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Fluierul cel păstoresc al teologiei tale a biruit trâmbiţele ritorilor; că ţie, celui ce ai încercat adâncurile duhului, ţi s-au adăugat şi Frumuseţile Cuvântului. Ci, roagă pe Hristos Dumnezeu, Sfinte Părinte Grigorie, să mântuiască sufletele noastre.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Ierarh Iosif cel Milostiv, Mitropolitul Moldovei";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Curăția ta și rugăciunea, milostenia și înfrânarea vas ales al Sfântului Duh te-au făcut; pentru aceasta, Moldovei fiind păstor, urmai cu totul Păstorului Celui bun; Sfinte mare Ierarhe, milostive Iosif, roagă pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            celebrationDay = "Aducerea moaștelor Sfântului Ioan Gură de Aur";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Din gura ta ca o văpaie de foc strălucind harul, lumea a luminat; vistieriile neiubirii de argint lumii a câştigat; înălţimea gândului smerit nouă ne-a arătat. Ci, cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Hristos Cuvântul să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Cuvios Efrem Sirul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Harul ce izvorăşte din gura ta cuvioase, a umplut de apele vieţii Biserica şi lumii a izbucnit râuri de cucernicie, revărsând asupra noastră apa pocăinţei; ci, învăţându-ne cu cuvintele tale, Sfinte Părinte Efrem, roagă-te lui Hristos, Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Aducerea moaștelor Sfântului Sfințit Mucenic Ignatie Teoforul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 30) {
            celebrationDay = "Sfinții Trei Ierarhi: Vasile cel Mare, Grigorie Teologul și Ioan Gură de Aur";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pe cei trei preamari luminători ai Dumnezeirii Celei de trei ori mai strălucitoare decât soarele, pe cei ce învăpăiază lumea cu Razele Dumnezeieştilor dogme; pe râurile cele cu miere curgătoare ale înţelepciunii, care adapă toată făptura cu apele cunoştinţei de Dumnezeu; pe Marele Vasile şi pe Grigorie de Dumnezeu Cuvântătorul, împre­ună cu Strălucitul Ioan cel cu limbă de aur, toţi cei iubitori de cuvintele lor, adunându-ne, cu cântări să-i cinstim; că aceştia pururea se roagă Treimii pentru noi.";
        }

        if (day == 31) {
            celebrationDay = "Sfinţilor Mucenici doctori fără de arginţi Chir şi Ioan";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sălăşluindu-se darul Treimii în inimile voastre cele curate, Preafericiţilor Chir şi Ioan, v-aţi arătat înfricoşători izgonitori ai duhurilor celor necurate; şi aţi fost tămăduitori ai neputinţelor, nu numai ai celor descoperite, ci şi ai celor ascunse. Drept aceea, îndrăzneală având către Dumnezeu Cel Iubitor de oameni, prin rugăciunile voastre, cele neîncetate, tămăduiţi patimile noastre.";
        }


    }




    //Februarie

    if (month == 1) {

        if (day == 1) {
            celebrationDay = "Sfântul Mucenic Trifon";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Trifon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 2) {
            celebrationDay = "ÎNTÂMPINAREA DOMNULUI";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Bucură-te, Ceea ce eşti Plină de har, Născătoare de Dumnezeu Fecioară; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru, luminând pe cei dintru întuneric. Veseleşte-te şi tu, bătrânule drepte, cel ce ai primit în braţe pe Izbăvitorul sufletelor noastre, Cel Ce ne-a dăruit nouă şi Învierea.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Ansgar, luminătorul Danemarcei și al Suediei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "În întregime fiind cuprins de dragostea pentru Dumnezeu şi pentru oameni, la fel ca Apostolii, Sfinte Mucenice Ansgar, ai călătorit în depărtări ca să duci mântuire celor aflaţi în întuneric, jertfind durerea ta pe altarul inimii tale, iar prin truda şi osteneala ta aducând mărturie despre Mântuitorul ca un mucenic şi îndurând pericolele uscatului şi mării de dragul Său, fără să fii descurajat de ispite şi necazuri. Pentru acestea, roagă-te cu îndrăzneală să fie mântuite sufletele noastre.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Cuvios Isidor Pelusiotul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Isidor, duhul tău.";
        }

        if (day == 5) {
            celebrationDay = "Sfânta Muceniță Agata";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Agata, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Ierarh Fotie, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Ca cel ce ești cu apostolii în ceruri împreună locuitor și ortodocșilor mare apărător, lumii drept învățător, iar eresurilor latinești dârz împotrivitor, Sfinte Ierarh Fotie, pe Hristos Dumnezeu roagă-L cu dinadinsul să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            celebrationDay = "Sfântul Ierarh Partenie, Episcopul Lampsacului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Partenie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Mare Mucenic Teodor Stratilat";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Strălucit voievod al adevăratei Oşti a Împăratului Ceresc ai ajuns, Fericite Teodor, purtătorule de biruinţă; că înţelepţeşte te-ai luptat cu armele credinţei şi mulţimile demonilor le-ai biruit şi adevărat biruitor te-ai arătat. Pentru aceasta pe tine cu credinţă pururea te fericim.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Mucenic Nichifor";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul tău, Doamne, Nichifor, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            celebrationDay = "Sfântul Sfințit Mucenic Haralambie";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Arătatu-te-ai, Înţeleptule Haralambie, ca un stâlp neclintit al Bisericii lui Hristos şi ca un sfeşnic pururea luminos al Lumii, strălucit-ai în lume prin mucenicie, fericite şi ai risipit întunecimea idolilor. Drept aceea roagă-te lui Hristos cu îndrăzneală, ca să ne mântuiască pe noi.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Ierarh Vlasie, Episcopul Sevastiei ";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Vlasie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Ierarh Meletie, Arhiepiscopul Antiohiei celei Mari";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Meletie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfântul Cuvios Martinian";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Văpaia ispitelor cu curgerea lacrimilor ai stins-o, fericite Cuvios Martinian şi valurile mării şi pornirile fiarelor înfrânându-le, ai strigat: Preaslăvit eşti Atotputernice, Cel Ce m-ai mântuit de foc şi de vifor.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Cuvios Auxenție";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Auxentie. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Apostol Onisim";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Onisim, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 16) {
            celebrationDay = "Cinstirea lanțului Sfântului Apostol Petru";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Roma nepărăsind, la noi ai venit prin cinstitele lanţuri ce ai purtat, întâistătătorule pe scaunul Apostolilor. Pe care cu credinţă cinstindu-le, te rugăm: cu ale tale rugăciuni către Dumnezeu, dăruieşte nouă mare milă.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Mare Mucenic Teodor Tiron";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mari sunt faptele credinţei! În izvorul văpăii ca într-o apă de odihnă Sfântul Mucenic Teodor s-a bucurat. Că în foc cu totul fiind ars, ca o pâine plăcută Preasfintei Treimi s-a adus. Pentru rugăciunile lui, Hristoase Dumnezeule, mântuieşte sufletele noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Ierarh Leon, Episcopul Romei";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Leon, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Apostol Arhip";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Arhip, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Ierarh Leon, Episcopul Cataniei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Leon, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Cuvios Timotei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri, Care Te porţi pururea cu noi după blândeţile Tale, nu depărta mila Ta de la noi, ci, pentru rugăciunile Sfântului Cuvios Timotei, îndreptează viaţa noastră în pace.";
        }

        if (day == 22) {
            celebrationDay = "Aflarea moaștelor Sfinților Mucenici din Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Sfințit Mucenic Policarp, Episcopul Smirnei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Policarp, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Întâia și a doua aflare a Capului Sfântului Ioan, Înaintemergătorul și Botezătorul Domnului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Din pământ răsărind capul Înaintemergătorului, aruncă credincioşilor Razele Nestricăciunii tămăduirilor. De sus adună mulţimea îngerilor, de jos cheamă împreună neamul omenesc, ca să înalţe cu un glas Slavă lui Hristos Dumnezeu.";
        }

        if (day == 25) {
            celebrationDay = "Sfântul Ierarh Tarasie, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Tarasie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Ierarh Porfirie, Episcopul Gazei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Porfirie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Cuvios Mărturisitor Procopie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Procopie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Troparul Sfântului Cuvios Vasile Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Vasile. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 29) {
            celebrationDay = "Sfântul Cuvios Ioan Casian";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Ioan, duhul tău.";
        }


    }




    //Martie

    if (month == 2) {

        if (day == 1) {
            celebrationDay = "Sfântul Cuvioasă Muceniţă Evdochia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Evdochia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Sfințit Mucenic Teodot, Episcopul Chiriniei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Teodot, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfinţii Mucenici Eutropie, Cleonic şi Vasilisc";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Eutropie, Cleonic şi Vasilisc, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Cuvios Gherasim de la Iordan";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Gherasim, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Mucenic Conon din Isauria";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Conon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            celebrationDay = "Sfinții 42 de Mucenici din Amoreea";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 7) {
            celebrationDay = "Sfântul Sfințit Mucenic Efrem, Episcopul Tomisului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfântului Sfințit Mucenic Efrem, în pace îndreptează viaţa noastră.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Ierarh Teofilact Mărturisitorul, Episcopul Nicomidiei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Neştiut ai trăit, preafericite Ierarh Teofilact, dar Hristos te-a arătat pe tine tuturor, luminând ca un astru, punându-te ca pe o lumină în­ţelegătoare în sfeşnic. Şi ţi-a înmânat tablele dogmelor Du­hului, cu care luminează-ne şi pe noi.";
        }

        if (day == 9) {
            celebrationDay = "Sfinții 40 de Mucenici din Sevastia";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pentru durerile Sfinților care pentru Tine au pătimit, fii milostiv, Doamne, și toate durerile noastre le vindecă, Iubito­rule de oameni, rugămu-ne Ție.";
        }

        if (day == 10) {
            celebrationDay = "Sfinţii Mucenici Codrat, Ciprian şi Dionisie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Codrat, Ciprian şi Dionisie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Ierarh Sofronie, Patriarhul Ierusalimului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarh Sofronie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Cuvios Teofan Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Teofan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 13) {
            celebrationDay = "Aducerea moaștelor Sfântului Ierarh Nichifor, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Nichifor, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Cuvios Benedict de Nursia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Benedict. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 15) {
            celebrationDay = "Sfinţii Mucenici Agapie, Plisie şi Timolau";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Agapie, Plisie şi Timolau, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Mucenic Sabin Egipteanul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Sabin, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Cuvios Alexie, omul lui Dumnezeu";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Alexie. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Ierarh Chiril, Arhiepiscopul Ierusalimului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Chiril, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            celebrationDay = "Sfinţii Mucenici Hrisant şi Daria";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Hrisant şi Daria, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            celebrationDay = "Sfinții Cuvioși Mucenici din Mănăstirea Sfântului Sava cel Sfințit";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, din Mănăstirea Sfântului Cuvios Sava cel Sfințit, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Ierarh Iacob Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Iacob, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Sfințit Mucenic Vasile, preotul din Ancira";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Vasile, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Cuvios Mucenic Nicon și cei 199 de ucenici ai lui";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Nicon și cei 199 de ucenici ai lui, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 24) {
            celebrationDay = "Înainte-prăznuirea Bunei Vestiri";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Astăzi începutul bucuriei a toată lumea îndeamnă a lăuda Înainteprăznuirea, că iată, Arhanghelul Gavriil vine, aducând Fecioarei Buna Vestire şi către dânsa strigă: Bucură-te, cea Plină de har, Domnul este cu tine!";
        }

        if (day == 25) {
            celebrationDay = "BUNA VESTIRE";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Astăzi este începutul mântuirii noastre şi arătarea Tainei celei din veac. Fiul lui Dumnezeu, Fiu Fecioarei Se face şi Gavriil Harul Îl binevesteşte. Pentru aceasta şi noi, împreună cu Dânsul, Născătoarei de Dumnezeu să-i strigăm: Bucură-te, cea Plină de har, Domnul este cu tine!";
        }

        if (day == 26) {
            celebrationDay = "Soborul Sfântului Arhanghel Gavriil";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mare Voievod al Oştilor Ce­reşti, rugămu-te pe tine, noi nevrednicii, ca prin rugă­ciunile tale să ne acoperi pe noi cu acoperământul aripilor mă­ririi tale celei netrupeşti, păzindu-ne pe noi, cei ce cădem cu dinadinsul şi strigăm: izbăveşte-ne din nevoi, ca un mai mare peste Cetele Puterilor celor de sus!";
        }

        if (day == 27) {
            celebrationDay = "Sfânta Muceniță Matrona din Tesalonic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Matrona, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Cuvios Ilarion cel Nou, egumenul Pelechitului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ilarion, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfinţii Sfinţiţi Mucenici Marcu, Episcopul Aretuselor şi Chiril, diaconul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Marcu şi Chiril, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Cuvios Ioan Scărarul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Ioan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 31) {
            celebrationDay = "Sfântul Sfințit Mucenic Ipatie, Episcopul Gangrei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Ipatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }


    }



    //Aprilie

    if (month == 3) {

        if (day == 1) {
            celebrationDay = "Sfânta Cuvioasă Maria Egipteanca";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine maică cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; și lucrând ai învățat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta și cu în­gerii împreună se bucură, cuvioasă Marie, duhul tău.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Cuvios Tit, făcătorul de minuni";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Tit. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Cuvios Nichita Mărturisitorul, Egumenul Mănăstirii Midichiei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Nichita. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 4) {
            celebrationDay = "Sfântul Cuvios Iosif Imnograful";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Iosif, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfinţii Mucenici Teodul şi Agatopod";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Teodul şi Agatopod, întru nevoinţa lor, cununa nestricăciunii au dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Ierarh Eutihie, Patriarh la Constantinopol";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarh Eutihie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            celebrationDay = "Sfântul Mucenic Caliopie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Caliopie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 8) {
            celebrationDay = "Sfinţii Apostoli Irodion, Agav, Ruf, Flegon, Asincrit şi Ermis";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli Irodion, Agav, Ruf, Flegon, Asincrit şi Ermis, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Mucenic Eupsihie din Cezareea Capadociei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Eupsihie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            celebrationDay = "Sfinţii Mucenici Terentie, Pompei, African, Maxim, Macarie şi Dima";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Terentie, Pompei, African, Maxim, Macarie şi Dima, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Ierarh Calinic de la Cernica, Episcopul Râmnicului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "De Dumnezeu purtătorule, părintele nostru Calinic, povăţuitorule al călugărilor, podoaba cuvioşilor şi lauda arhiereilor, ajutătorule al celor din nevoi şi făcătorule de minuni! Cu nevoinţele tale chip de sfinţenie te-ai arătat, iar acum cu îngerii în ceruri te veseleşti; cu care roagă pe Milostivul Dumnezeu să ne dăruiască nouă pace şi mare milă.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Mucenic Sava de la Buzău";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Purtătorule de chinuri Sfinte Mucenic Sava, cel ce în apă ai fost omorât de către goţii păgâni, roagă pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfântul Sfințit Mucenic Artemon preotul, din Laodiceea";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Artemon, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Ierarh Pahomie de la Gledin, Episcopul Romanului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Stea mult-luminoasă, răsărită în ținutul Gledinului, ai strălucit ca un semn dumnezeiesc în pământul Moldovei, luminând inimile credincioșilor. Stâlp neclintit al rugăciunii curate, podoabă aleasă a ierarhilor români și ctitor al Schitului Pocrov din lavra Neamțului, Sfinte Ierarhe Pahomie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 15) {
            celebrationDay = "Sfinţii Apostoli Aristarh, Pud şi Trofim";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinţilor Apostoli Aristarh, Pud şi Trofim, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 16) {
            celebrationDay = "Sfintele Muceniţe fecioare Agapia, Irina şi Hionia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Muceniţele Tale, Doamne, fecioarele Agapia, Irina şi Hionia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Sfințit Mucenic Simeon, Episcopul Persiei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Simeon, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Cuvios Ioan, ucenicul Sfântului Grigorie Decapolitul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Ioan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Cuvios Ioan de la Lavra Veche";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ioan, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Ierarh Teotim, Episcopul Tomisului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Teotim, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Sfinţit Mucenic Ianuarie, Episcop de Benevent şi al celor împreună cu dânsul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfântului Mucenic Ianuarie, în pace îndreptează viaţa noastră.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Ierarh Teodor Sicheotul, Episcopul Anastasiopolei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cunoscut fiind din scutece sfinţit şi arătându-te plin de haruri, ai luminat lumea cu minunile şi mulţimile demonilor ai alungat, lucrătorule de sfinţenie, Părinte Ierarhe Teodor. Pentru aceasta roagă-te Domnului pentru noi.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Mare Mucenic Gheorghe, Purtătorul de biruință";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cu nevoinţă bună te-ai nevoit prin credinţă, purtătorule de chinuri al lui Hristos şi păgânătatea chinuitorilor ai mustrat şi jertfă bine primită lui Dumnezeu te-ai adus. Pentru aceasta şi cunună de biruinţă ai luat; şi cu rugăciunile tale, sfinte, tuturor le dai iertare de greşeli.";
        }

        if (day == 24) {
            celebrationDay = "Sfântul Ierarh Sava Brancovici, Mitropolitul Transilvaniei şi Sfântul Ierarh Sava Brancovici, Mitropolitul Transilvaniei";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mărturisitori ai Ortodoxiei şi buni arhipăstori ai Bisericii lui Hristos, îndreptători ai poporului, prea­fericiţi ierarhi purtători de biruinţă, Sfinţilor Iorest şi Sava, cei ce v-aţi învrednicit de cununa vieţii, rugaţi-vă Domnului să se mântuiască sufletele noastre.";
        }

        if (day == 25) {
            celebrationDay = "Sfântul Apostol și Evanghelist Marcu și Sfântul Cuvios Vasile de la Poiana Mărului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Învăţat fiind de Apostolul Petru, te-ai făcut Apostol al lui Hristos şi ca un soare ai strălucit marginilor, podoaba alexandri­nilor ai fost, fericite, căci prin tine Egiptul s-a eliberat de înşelăciune şi ca un stâlp al Bisericii, prin învăţătura ta cea Evanghelică pe toţi ai luminat. Pentru aceasta luminat cinstind, pomenirea ta prăznuim, de Dumnezeu grăitorule Sfinte Apostol Marcu; roagă pe Dumnezeu Cel Înduple­cat prin tine, să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Sfințit Mucenic Vasilevs, Episcopul Amasiei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Vasilevs, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Sfințit Mucenic Simeon, ruda Domnului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pe tine rudenia lui Hristos, Sfinte Simeon, ierarh şi mucenic tare, cu sfinţenie te lăudăm, cel ce ai pierdut înşelăciunea şi ai păzit credinţa. Pentru aceasta prăznuind astăzi preasfântă pomenirea ta, dezlegare de păcate luăm prin rugăciunile tale.";
        }

        if (day == 28) {
            celebrationDay = "Sfinții Mucenici Maxim, Cvintilian și Dadas din Ozovia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Maxim, Cvintilian și Dadas din Ozovia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 29) {
            celebrationDay = "Sfinții 9 Mucenici din Cizic, Teognid, Ruf, Antipatru, Teostih, Artema, Magn, Teodot, Tavmasie și Filimon";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Teognid, Ruf, Antipatru, Teostih, Artema, Magn, Teodot, Tavmasie și Filimon, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Apostol Iacob, fratele Sfântului Apostol Ioan Evanghelistul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Apostol al lui Hristos preaales şi frate al cuvântătorului de Dumnezeu celui iubit ai fost, Prealăudate Iacob; cere iertare de greşeli, pentru cei ce te laudă pe tine şi sufletelor noastre mare milă.";
        }



    }




    //Mai

    if (month == 4) {

        if (day == 1) {
            celebrationDay = "Sfântul Prooroc Ieremia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău, Doamne, Ieremia pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Ierarh Atanasie al III-lea, Patriarh la Constantinopol";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Dumnezeiască odraslă a cretanilor, păstor al cetăţii celei împărăteşti şi povăţuitor sfinţit al creştinilor de la Dunăre, comoara cea de mult preţ a Harkovului, Atanasie înţelepte, primit-ai har bogat de Sus, cu nume nemuritor fiind. Roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Cuvios Irodion de la Lainici";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Pe luceafărul nostru cel din Oltenia, cu închinare de taină, ca pe un părinte ales să-l slăvim acum noi, ucenicii lui; că înainte-văzător s-a făcut Sfântul Irodion, de boli pe toţi vindecându-i şi duhovnic dumnezeiesc s-a arătat în viaţa sa.";
        }

        if (day == 4) {
            celebrationDay = "Sfânta Muceniță Pelaghia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Pelaghia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește/mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 5) {
            celebrationDay = "Sfânta Mare Muceniță Irina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Irina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul și Dreptul Iov, mult răbdătorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Bogăţia virtuţilor lui Iov văzând-o vrăjmaşul drepţilor, a uneltit a o fura, şi rupând turnul trupului, vistieria duhului nu o a furat; căci a aflat întrarmat sufletul celui fără prihană, iar pe mine şi golindu-mă m-a robit. Deci mai înainte de sfârşit întâmpinându-mă, izbăveşte-mă de cel viclean, Mântuitorule, şi mă mântuieşte.";
        }

        if (day == 7) {
            celebrationDay = "Arătarea semnului Sfintei Cruci la Ierusalim";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Chipul Crucii Tale acum mai mult decât soarele a strălucit, care de la Sfântul Munte până la locul Căpăţânii o ai întins, şi într-însa a Ta putere, Mântuitorule, ai luminat, printr-însa întărind şi pe bine credincioşii împăraţi, pe care îi şi mântuieşte totdeauna în pace, pentru rugăciunile Născătoarei de Dumnezeu, Hristoase Mântuitorule, mântuieşte-ne şi pe noi.";
        }

        if (day == 8) {
            celebrationDay = "Sfântul Apostol și Evanghelist Ioan";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Apostole al lui Hristos de Dumnezeu iubite, grăbeşte de izbăveşte pe poporul cel fără de răspuns. Că te primeşte când cazi către El, Cel ce te-a primit când te-ai rezemat pe pieptu-I; pe Care roagă-L, de Dumnezeu cuvântătorule, şi norul păgânilor cel pus asupra noastră să-l risipească, cerându-ne nouă pace şi mare milă.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Proroc Isaia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A proorocului Tău, Doamne, Isaia pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfântul Apostol Simon Zilotul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Simone, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Sfințit Mucenic Mochie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Mochie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Mucenic Ioan Valahul";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Astăzi duhovniceşte prăznuieşte Biserica dreptcredincioşilor, şi cu bucurie strigă: Veniţi, iubitorilor de mucenici, să prăznuim pomenirea cea de peste an a luptelor noului mucenic Ioan! Că acesta, dintre noi cu voia lui Dumnezeu răsărind, în împărăteasca cetate a lui Constantin a înflorit minunat, aducând Stăpânului rod bogat şi bine primit, prin mucenicie. Iar acum se roagă neîncetat în ceruri, să se mântuiască sufletele noastre.";
        }

        if (day == 13) {
            celebrationDay = "Sfânta Muceniță Glicheria";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Glicheria, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Mucenic Isidor din Hiosi";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Isidor, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru.; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Cuvios Pahomie cel Mare";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Arătatu-te-ai mai mare turmei Păstorului celui mare, în dreptând turmele sihastrilor la staulul cel ceresc, părinte Pahomie, şi schima cea de acolo, cuvioase, pustnicilor deprin zând, şi pe aceasta iarăţi o ai învăţat; şi acum împreună cu aceia te bucuri şi te veseleşti în cereştile locaşuri.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Cuvios Teodor cel Sfințit";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Teodor; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui ce ţi-a dat ţie putere; slavă Celui ce te-a încununat pe tine; Slavă Celui ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 17) {
            celebrationDay = "Sfântul Apostol Andronic și soția sa, Iunia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Andronic roagă pe milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 18) {
            celebrationDay = "Sfinţii Mucenici Petru, Dionisie, Paulin, Teodot şi cele şapte fecioare din Ancira";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Petru, Dionisie, Paulin, Teodot şi cele şapte fecioare din Ancira, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Sfințit Mucenic Patrichie, Episcopul Prusei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Patrichie întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Mucenic Talaleu";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Talaleu, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            celebrationDay = "Sfinții Împărați și întocmai cu Apostolii Constantin și mama sa, Elena";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Chipul Crucii Tale pe cer văzându-l şi ca Pavel chemarea nu de la oameni luând, cel între împăraţi Apostolul Tău, Doamne, împărăteasca cetate în mâinile Tale o a pus. Pe care pazeşte-o totdeauna în pace, pentru rugăciunile Născătoarei de Dumnezeu, Unule Iubitorule de oameni.";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Mucenic Vasilisc";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Vasilisc, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            celebrationDay = "Sfântul Ierarh Mihail Mărturisitorul, Episcopul Sinadei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Mihail, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Sfântul Cuvios Simeon cel din Muntele Minunat";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Al răbdării stâlp ai fost râvnind cuvioase, părinţilor celor mai dinainte: lui Iov întru patimi, lui losif întru ispite şi vieţii celor fără de trup fiind în trup. Simeoane părintele nostru, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 25) {
            celebrationDay = "A treia aflare a Capului Sfântului Ioan, Înaintemergătorul și Botezătorul Domnului";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Ca pe o dumnezeiască vistierie ascunsă în pământ, Hristos a descoperit capul tău nouă, Proorocule şi Înaintemergătorule; deci toţi adunându-ne întru aflarea lui, cu cântări de Dumnezeu grăitoare pe Mântuitorul lăudăm, Cel Ce ne mântuieşte pe noi din stricăciune cu rugăciunile tale.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Apostol Carp";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sfinte Apostol Carp, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Mărturisitor Ioan Rusul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cel ce te-a chemat pe tine de pe pământ la lumea cea cerească, ține și după moarte, neschimbat, trupul tău, Sfinte. Căci tu în Asia ai fost dus prizonier și acolo te-ai unit cu Hristos, Ioane. Deci pe Acela roagă-l să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Sfântul Ierarh Nichita Mărturisitorul, Episcopul Calcedonului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Nichita, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfânta Muceniță Teodosia, fecioara";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "La fapta bună muceniţă, cu osârdie deprinzându-te, te-ai făcut vas iubit al lui Hristos şi locaş iubit al Preasfântului Duh. Pentru aceasta ai ruşinat pe vrăjmaşul, cel ce se luptă cu neamul omenesc, bine pătimind şi arătat cu sabia credinţei ai ucis pe cel cu nume de fiară, Teodosia; şi bucurându-te te-ai mutat la cer, cerând pururea mare milă, celor ce cu credinţă te cinstesc pe tine.";
        }

        if (day == 30) {
            celebrationDay = "Sfântul Cuvios Isaachie Mărturisitorul";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine părinte cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Isaachie, duhul tău.";
        }

        if (day == 31) {
            celebrationDay = "Sfântul Mucenic Ermie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Ermie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }


    }



    //Iunie

    if (month == 5) {

        if (day == 1) {
            celebrationDay = "Sfântul Mucenic Iustin Martirul şi Filosoful și a altui Mucenic Iustin";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 2) {
            celebrationDay = "Sfântul Mare Mucenic Ioan cel Nou de la Suceava";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Viaţa ta pe pământ bine cârmuind, pătimitorule, cu milostenii şi cu neîncetate rugăciuni şi lacrimi şi iarăşi către pătimire bărbăteşte pornindu-te, necredinţa persienească ai mustrat. Drept aceea Bisericii te-ai făcut întărire şi creştinilor laudă, Sfinte Ioane pururea pomenite.";
        }

        if (day == 3) {
            celebrationDay = "Sfântul Mucenic Luchilian şi cei împreună cu el patru tineri: Ipatie, Paul, Dionisie și Claudie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Luchilian, Ipatie, Paul, Dionisie și Claudie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            celebrationDay = "Sfinții Mucenici: Zotic, Atal, Camasie și Filip de la Niculițel";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Mucenicii Tăi, Doamne, Zotic, Atal, Camasie și Filip, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 5) {
            celebrationDay = "Sfântul Sfințit Mucenic Dorotei, Episcopul Tirului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Dorotei, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            celebrationDay = "Sfântul Cuvios Ilarion cel Nou, egumenul Mănăstirii Dalmaților";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ilarion, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            celebrationDay = "Sfântul Sfințit Mucenic Teodot, Episcopul Ancirei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Teodot, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            celebrationDay = "Aducerea moaștelor Sfântului Mare Mucenic Teodor Stratilat";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cu numirea oştirii celei adevărate, purtătorule de chinuri, al cerescului împărat, voievod preabun te-ai făcut, Sfinte Mare Mucenic Teodor. Căci cu armele credinţei te-ai oştit înţelepţeşte şi ai biruit cetele demonilor şi purtător de biruinţă viteaz te-ai arătat. Pentru aceasta pe tine cu credinţă pururea te fericim.";
        }

        if (day == 9) {
            celebrationDay = "Sfântul Ierarh Chiril, Arhiepiscopul Alexandriei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Ierarhe Chiril, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 10) {
            celebrationDay = "Sfântul Sfințit Mucenic Timotei, Episcopul Prusiei, Sfântul Mucenic Alexandru și Sfânta Muceniță Antonina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Timotei, Alexandru și Antonina, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            celebrationDay = "Sfântul Ierarh Luca, Arhiepiscopul Crimeei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Pe lauda doctorilor şi mândria Simferopolului, pe alesul ierarh al lui Hristos şi ocrotitorul Mănăstirii Dovra, pe Sfinţitul Luca Doctorul să-l lăudăm cu imnuri duhovniceşti şi cu sfinte cântări, că izvorăşte din belşug darurile vindecărilor.";
        }

        if (day == 12) {
            celebrationDay = "Sfântul Cuvios Onufrie cel Mare";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Dumnezeul părinţilor noştri, Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci pentru rugăciunile Sfântului Onufrie cel Mare, în pace îndreptează viaţa noastră.";
        }

        if (day == 13) {
            celebrationDay = "Sfânta Muceniță Achilina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Achilina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 14) {
            celebrationDay = "Sfântul Proroc Elisei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Cel care a fost înger în trup, temeiul prorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie măritul, care a trimis de sus lui Elisei dar, bolile goneşte şi pe cei leproşi curăţeşte. Pentru aceasta şi celor care-l cinstesc pe el le izvorăşte tămăduiri.";
        }

        if (day == 15) {
            celebrationDay = "Sfântul Proroc Amos";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "A prorocului Tău Amos pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 16) {
            celebrationDay = "Sfântul Ierarh Tihon, Episcopul Amatundei";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Tihon; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 17) {
            celebrationDay = "Sfinţii Mucenici Manuil, Savel şi Ismail";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicii Tăi, Doamne, Manuil, Savel şi Ismail, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 18) {
            celebrationDay = "Sfântul Mucenic Leontie";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Leontie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            celebrationDay = "Sfântul Apostol Iuda, ruda Domnului";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Al lui Hristos frate şi mucenic tare, ştiindu-te pe tine, Sfinte Iuda, cu sfinţenie te lăudăm pe tine, cel ce ai călcat înşelăciunea şi credinţa ai păzit. Pentru aceasta astăzi preasfântă pomenirea ta prăznuind, dezlegare de păcate cu rugăciunile tale luăm.";
        }

        if (day == 20) {
            celebrationDay = "Sfântul Sfințit Mucenic Metodie, Episcopul Patarelor";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Metodie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            celebrationDay = "Sfântul Mucenic Iulian din Tars";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mucenicul Tău, Doamne, Iulian, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule";
        }

        if (day == 22) {
            celebrationDay = "Sfântul Ierarh Grigorie Dascălul, Mitropolitul Țării Românești";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "De dulceata gurii tale celei sfintite ce indulceste Biserica si de focul ravnei tale se minuneaza cetele ceresti, ca ostenindu-te in talmacirea sfintelor invataturi ale parintilor celor de demult, ai daruit turmei tale bucuria cunoasterii lui Dumnezeu, Sfinte Ierarhe Grigorie.";
        }

        if (day == 23) {
            celebrationDay = "Sfânta Muceniță Agripina";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Agripina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 24) {
            celebrationDay = "Nașterea Sfântului Ioan Botezătorul (Sânzienele - Drăgaica)";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Pomenirea dreptului cu laude, iar ție destul îți este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat și decât proorocii mai cinstit, că și a boteza în repejuni pe Cel propovăduit te-ai învrednicit. Drept aceea, pentru adevăr nevoindu-te, bucurându-te bine ai vestit și celor din iad pe Dumnezeu Cel ce s-a arătat în trup, pe Cel ce a ridicat păcatul lumii și ne-a dăruit nouă mare milă.";
        }

        if (day == 25) {
            celebrationDay = "Sfânta Mare Muceniță Fevronia";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Mieluşeaua Ta, Iisuse, Fevronia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 26) {
            celebrationDay = "Sfântul Cuvios David din Tesalonic";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Întru tine părinte cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte David, duhul tău.";
        }

        if (day == 27) {
            celebrationDay = "Sfântul Cuvios Samson, primitorul de străini";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "În răbdare ţi-ai agonisit plata ta, părinte cuvioase; în rugăciuni neîncetat răbdând, pe săraci iubind şi pe aceia îndestulând. Ci te roagă lui Hristos Dumnezeu, Sfinte Samson, milostive fericite, să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            celebrationDay = "Aducerea moaștelor Sfinților Mucenici Doctori fără de arginți Chir și Ioan";
            colors = "white";
            colorCross = "transparent";
            religiousSongs = "Sălăşluindu-se darul Treimii în inimile voastre cele curate, Preafericiţilor Chir şi Ioan, v-aţi arătat înfricoşători izgonitori ai duhurilor celor necurate; şi aţi fost tămăduitori ai neputinţelor, nu numai ai celor descoperite, ci şi ai celor ascunse. Drept aceea, îndrăzneală având către Dumnezeu Cel Iubitor de oameni, prin rugăciunile voastre, cele neîncetate, tămăduiţi patimile noastre.";
        }

        if (day == 29) {
            celebrationDay = "Sfinții Apostoli Petru și Pavel";
            colors = "red";
            colorCross = "red";
            religiousSongs = "Cei ce sunteți între apostoli mai întâi pe scaun șezători și lumii învățători, Stăpânului tuturor rugați-vă, pace lumii să dăruiască și sufletelor noastre mare milă.";
        }

        if (day == 30) {
            celebrationDay = "Soborul Sfinților 12 Apostoli";
            colors = "gray";
            colorCross = "gray";
            religiousSongs = "Cei ce sunteţi între apostoli mai întâi pe scaun şezători şi lumii învăţători, Stăpânului tuturor rugaţi-vă să dăruiască pace lumii şi sufletelor noastre mare milă.";
        }


    }


    if (year == 2024) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 28) {
                celebrationDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 5) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 6) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 7) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 10) {
                celebrationDay = "IZVORUL TĂMĂDUIRII";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (IUNIE)
        if (month == 5) {

            if (day == 13) {
                celebrationDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }
        }


        //POGORÂREA SFÂNTULUI DUH ȘI SFÂNTA TREIME (IUNIE)
        if (month == 5) {

            if (day == 23) {
                celebrationDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 24) {
                celebrationDay = "SFÂNTA TREIME";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }




    if (year == 2025) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 13) {
                celebrationDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 20) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 21) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 22) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 25) {
                celebrationDay = "IZVORUL TĂMĂDUIRII";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 29) {
                celebrationDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }
        }


        //POGORÂREA SFÂNTULUI DUH ȘI SFÂNTA TREIME (IUNIE)
        if (month == 5) {

            if (day == 8) {
                celebrationDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 9) {
                celebrationDay = "SFÂNTA TREIME";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }






    if (year == 2026) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 5) {
                celebrationDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 12) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 13) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 14) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 17) {
                celebrationDay = "IZVORUL TĂMĂDUIRII";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 21) {
                celebrationDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }

            //POGORÂREA SFÂNTULUI DUH 
            if (day == 31) {
                celebrationDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }


        //SFÂNTA TREIME (IUNIE)
        if (month == 5) {



            if (day == 1) {
                celebrationDay = "SFÂNTA TREIME";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }









    if (year == 2027) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 25) {
                celebrationDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 2) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 3) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 4) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 7) {
                celebrationDay = "IZVORUL TĂMĂDUIRII";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 5) {

            if (day == 10) {
                celebrationDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }


        }


        //POGORÂREA SFÂNTULUI DUH SI SFÂNTA TREIME (IUNIE)
        if (month == 5) {


            if (day == 20) {
                celebrationDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 21) {
                celebrationDay = "SFÂNTA TREIME";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }







    if (year == 2028) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 9) {
                celebrationDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 16) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 17) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 18) {
                celebrationDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 21) {
                celebrationDay = "IZVORUL TĂMĂDUIRII";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 25) {
                celebrationDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }


        }


        //POGORÂREA SFÂNTULUI DUH SI SFÂNTA TREIME (IUNIE)
        if (month == 5) {


            if (day == 4) {
                celebrationDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 5) {
                celebrationDay = "SFÂNTA TREIME";
                colors = "red";
                colorCross = "red";
                religiousSongs = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }







    //COLORARE CRUCE, NUME SFÂNT ȘI TEXT TROPAR ÎN ROȘU DACĂ ESTE DUMINICĂ
    if (dayName == "Duminică") {
        colors = "red";
        colorCross = "red";
    };




    document.querySelector("#todayDate").style.color = colors;

    document.querySelector(".celebrationDay").innerHTML = celebrationDay;

    document.querySelector(".celebrationDay").style.color = colors;

    document.querySelector("#colorCross").style.color = colorCross;

    document.querySelector("#tropar").innerHTML = "<br>" + religiousSongs + "<br>";



    var hour = date.getHours();
    var initialGreeting;
    var finalGreeting;

    if (hour < 5) {
        initialGreeting = "Bine ați venit!";
        finalGreeting = "Noapte bună!";
    }
    if (hour < 10) {
        initialGreeting = "Bună dimineața!";
        finalGreeting = "O dimineață plăcută!";
    }
    else if (hour < 18) {
        initialGreeting = 'Bună ziua!';
        finalGreeting = "O zi bună!";
    }
    else if (hour < 24) {
        initialGreeting = "Bună seara!";
        finalGreeting = "O seară frumoasă!";
    }

    document.querySelector("#initial-greeting").innerHTML = initialGreeting + " Pace și bunăvoire!";
    document.querySelector("#final-greeting").innerHTML = finalGreeting + "<br>" + "Dumnezeu să vă ocrotească!";


}); 
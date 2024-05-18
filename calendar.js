document.addEventListener('DOMContentLoaded', function () {



    //DATA ÎN LIMBA ROMÂNĂ
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

    
    var hour = date.getHours();
   

    var dayName = weekDay[date.getDay()];

    var year = date.getFullYear();

    var todayDate = dayName + "<br>" + dayNumber + " " + monthNames + " " + year;

   




    //PAPIRUS 1, 2 ȘI 3 CU SFÂNTUL ZILEI, TROPARUL ȘI CONDACUL SĂU
    var calendarDates = new Date();
    var day = calendarDates.getDate();
    var nameDay = calendarDates.getDate();
    var month = calendarDates.getMonth();
    var calendarYears = calendarDates.getFullYear();
    var saintDay;
    var saintName;
    var greetings;
    var colors;
    var colorCross;
    var tropar;
    var condac
    var videoTropar



    if (month == 6) {

        if (day == 1) {
            saintDay = "Sfântul Ierarh Leontie de la Rădăuţi";
            saintName = "Sfântul Leontie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu nevoinţe duhovniceşti toată viaţa ţi-ai petrecut-o şi, primind vrednicia arhieriei, cu smerenie şi cu frică de Dumnezeu ai slujit Biserica lui Hristos, pe Care roagă-L, Sfinte Ierarhe Leontie, să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            saintDay = "Sfântul Voievod Ștefan cel Mare";
            saintName = "Sfântul Ștefan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Apărător neînfricat al credinței și patriei străbune, mare ctitor de locașuri sfinte, Ștefane Voievod, roagă pe Hristos Dumnezeu, să ne izbăvească din nevoi și din necazuri.";
        }

        if (day == 3) {
            saintDay = "Sfântul Mucenic Iachint";
            saintName = "Sfântul Iachint";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Iachint, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saintDay = "Sfântul Ierarh Andrei, Arhiepiscopul Cretei";
            saintName = "Sfântul Andrei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curaţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Ierarhe Andrei, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saintDay = "Sfântul Cuvios Atanasie Athonitul";
            saintName = "Sfântul Atanasie";
            colors = "gray";
            colorCross = "gray";
            tropar = "De viaţa ta cea în trup s-au minunat cetele îngereşti, cum, cu trupul, la luptele cele nevăzute ai ieşit, pururea mărite şi ai rănit cetele demonice. Pentru care, Sfinte Atanasie, Hristos ţi-a răsplătit cu bogate daruri. Drept aceea, părinte, roagă-te lui Hristos Dumnezeu să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Sfântul Cuvios Sisoe cel Mare";
            saintName = "Sfântul Sisoe";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Sisoe; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 7) {
            saintDay = "Sfânta Mare Muceniță Chiriachi";
            saintName = "Sfânta Chiriachi";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mieluşeaua Ta, Iisuse, Chiriachi, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Sfinții Mucenici Epictet și Astion ";
            saintName = "Sfântul Astion ";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mucenicii Tăi, Doamne, Epictet și Astion, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 9) {
            saintDay = "Sfântul Sfinţit Mucenic Pangratie, Episcopul Taorminei";
            saintName = "Sfântul Pangratie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Pangratie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 10) {
            saintDay = "Sfinții 45 de Mucenici din Nicopolea Armeniei";
            saintName = "Sfinții 45 Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, întru nevoințele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfânta Mare Muceniță Eufimia";
            saintName = "Sfânta Eufimia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ai veselit pe cei credincioşi şi ai ruşinat pe cei rău mărturisitori, Sfântă Mare Muceniţă Eufimia, preafumoasă fecioară a lui Hristos. Căci ai întărit dogmele Sinodului al patrulea, pe care părinţii bine le-au rânduit. Muceniţă mărită, roagă-L pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 12) {
            saintDay = "Sfântul Cuvios Paisie Aghioritul";
            saintName = "Sfântul Paisie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe bărbatul ales din Muntele Athonului, pe cel ce-n vremurile cele din urmă întunericul a risipit ca un luminător, bolile tuturor vindecând, pe Paisie cel Nou să-l lăudăm credincioșii; căci el se roagă neîncetat pentru întreaga lume.";
        }

        if (day == 13) {
            saintDay = "Soborul Sfântului Arhanghel Gavriil";
            saintName = "Arhanghelul Gavriil";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mai mare Voievodule al Oştilor Cereşti, rugămu-te pe tine noi nevrednicii ca, prin rugăciunile tale, să ne acoperi pe noi cu acoperământul aripilor slavei tale celei netrupeşti, păzindu-ne pe noi, cei ce cădem cu dinadinsul şi grăim: izbăveşte-ne din nevoi, Sfinte Arhanghele Gavriil, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 14) {
            saintDay = "Sfântul Cuvios Nicodim Aghioritul";
            saintName = "Sfântul Nicodim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Săltaţi şi vă veseliţi, popoare, că, iată, în prisosul bucuriei se arată astăzi pârga cea sfântă a Athosului, folositorul şi mângâietorul nostru, blândul Nicodim. Căci prin râvna cea după Hristos Biserica o a luminat, îndreptând cele stricate şi părăsite prin nebăgare de seamă şi trecerea cu vederea, iar acum înaintea Sfintei Treimi neîncetat se roagă pentru sufletele noastre.";
        }

        if (day == 15) {
            saintDay = "Sfânții Mucenici Chiric și Iulita";
            saintName = "Sfântul Chiric";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Chiric și Iulita, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 16) {
            saintDay = "Sfântul Sfinţit Mucenic Atinoghen, cu cei 10 ucenici ai săi";
            saintName = "Sfântul Atinoghen";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Atinoghen, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            saintDay = "Sfânta Mare Muceniță Marina";
            saintName = "Sfânta Marina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Marina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 18) {
            saintDay = "Sfântul Mucenic Emilian de la Durostorum";
            saintName = "Sfântul Emilian";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mucenicul Tău, Doamne, Emilian, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            saintDay = "Sfânta Cuvioasă Macrina";
            saintName = "Sfânta Macrina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Macrina, duhul tău.";
        }

        if (day == 20) {
            saintDay = "Sfântul și slăvitul Proroc Ilie Tesviteanul";
            saintName = "Sfântul Proroc Ilie";
            colors = "red";
            colorCross = "red";
            tropar = "Cel ce a fost înger în trup, temeiul proorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie Măritul, care a trimis de sus lui Elisei dar, goneşte bolile şi pe cei leproşi curăţeşte. Pentru aceasta şi celor ce-l cinstesc pe dânsul le izvorăşte tămăduiri.";
        }

        if (day == 21) {
            saintDay = "Sfinţii Cuvioşi Partenie şi Rafail de la Agapia Veche";
            saintName = "Sfântul Partenie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Următori şi împlinitori ai Evangheliei lui Hristos, Cuvioşilor Părinţi Partenie şi Rafail, sihaştrii prealuminaţi ai munţilor Moldovei; ostenindu-vă cu postul şi cu rugăciunea, aţi dobândit de la Dumnezeu aripi ale sufletului vostru, pentru aceasta vă rugăm să ne trimiteţi de la Hristos milă şi har celor ce prăznuim cu dragoste pomenirea voastră!";
        }

        if (day == 22) {
            saintDay = "Sfânta Mironosiță întocmai cu Apostolii Maria Magdalena";
            saintName = "Sfânta Magdalena";
            colors = "white";
            colorCross = "transparent";
            tropar = "Lui Hristos, Cel Ce pentru noi S-a născut din Fecioară, Cinstită Maria Magdalena, ai urmat şi ai păzit îndreptările şi legile Lui. Pentru aceasta, astăzi, preasfinţită pomenirea ta prăznuind, te lăudăm cu credinţă şi te cinstim cu dragoste.";
        }

        if (day == 23) {
            saintDay = "Aducerea moaștelor Sfântului Sfințit Mucenic Foca";
            saintName = "Sfântul Foca";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Foca, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saintDay = "Sfânta Mare Muceniță Hristina";
            saintName = "Sfânta Hristina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Hristina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            saintDay = "Adormirea Sfintei Ana, mama Maicii Domnului";
            saintName = "Sfânta Ana";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pe Ceea ce a născut Viaţa în pântece o ai purtat, pe Curata Maica lui Dumnezeu, de Dumnezeu Gânditoare, Sfântă Ana. Pentru aceasta acum, la primirea cerească, unde este locaşul celor ce se veselesc întru slavă, bucurându-te acum te-ai mutat; cere pentru cei ce te cinstesc pe tine cu dragoste iertare de greşeli, pururea fericită.";
        }

        if (day == 26) {
            saintDay = "Sfântul Cuvios Ioanichie de la Muscel";
            saintName = "Sfântul Ioanichie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Locuitor în sihăstrie şi înger trupesc, de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Ioanichie; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui ce ţi-a dat ţie putere, slavă Celui ce te-a încununat pe tine, slavă Celui ce lucrează prin tine tuturor tămăduiri!";
        }

        if (day == 27) {
            saintDay = "Sfântul Mare Mucenic și tămăduitor Pantelimon";
            saintName = "Sfântul Pantelimon";
            colors = "gray";
            colorCross = "gray";
            tropar = "Purtătorule de chinuri, Sfinte şi Tămăduitorule Pantelimon, roagă pe Milostivul Dumnezeu să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 28) {
            saintDay = "Sfinții Apostoli și Diaconi Prohor, Nicanor, Timon și Parmena";
            saintName = "Sfântul Prohor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli, Prohor, Nicanor, Timon și Parmena, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 29) {
            saintDay = "Sfântul Mucenic Calinic";
            saintName = "Sfântul Calinic";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Calinic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saintDay = "Sfinţii Apostoli Sila, Silvan, Crescent, Epenet şi Andronic";
            saintName = "Sfântul Andronic";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli, Sila, Silvan, Crescent, Epenet şi Andronic, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 31) {
            saintDay = "Sfântul și Dreptul Evdochim";
            saintName = "Sfântul Evdochim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cel Ce te-a chemat pe tine de pe pământ la cereştile locaşuri păzeşte şi după moarte nevătămat trupul tău, Sfinte Evdochim; că tu, cu curăţie şi cu cinstită viaţă, fericite, ai vieţuit, nespurcându-ţi trupul, pentru aceasta, cu îndrăznire roagă pe Hristos Dumnezeu să ne mântuiască pe noi.";
        }

    }




    //August

    if (month == 7) {

        if (day == 1) {
            saintDay = "Sfinții 7 frați Mucenici Macabei cu mama lor Solomoni și dascălul Eleazar";
            saintName = "Sfinții Macabei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pentru durerile sfinţilor 7 frați Mucenici Macabei cu mama lor Solomoni și dascălul Eleazar, care pentru Tine au pătimit, fii Milostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 2) {
            saintDay = "Aducerea moaştelor Sfântului întâiului Mucenic şi Arhidiacon Ştefan";
            saintName = "Sfântul Ştefan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu împărătească cunună a fost încununat creştetul tău, din chinurile cele pe care le-ai răbdat pentru Hristos Dumnezeu, întâi pătimitorule între mucenici Sfinte Arhidiacon Ştefan. Că tu, mustrând nebunia iudeilor, ai văzut pe Mântuitorul tău de-a dreapta Tatălui. Pe Acela roagă-L pentru sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfinţii Cuvioşi Isaachie, Dalmat şi Faust";
            saintName = "Sfântul Isaachie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri, Care Te porţi pururea cu noi după blândeţile Tale, nu depărta mila Ta de la noi, ci, pentru rugăciunile părinţilor noştri Sfinţii Cuvioşi Isaachie, Dalmat şi Faust, îndreptează viaţa noastră în pace.";
        }

        if (day == 4) {
            saintDay = "Sfinţii 7 tineri din Efes";
            saintName = "Sfinţii 7 tineri";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mari sunt isprăvile credinţei! În peşteră, ca într-o cămară împărătească, au petrecut cei şapte sfinţi tineri şi fără stricăciune au murit. Iar după multă vreme, ca dintr-un somn s-au sculat, pentru încredinţarea învierii tuturor oamenilor. Pentru rugăciunile lor, Hristoase Dumnezeule, miluieşte-ne pe noi.";
        }

        if (day == 5) {
            saintDay = "Sfântul Cuvios Ioan Iacob de la Neamț";
            saintName = "Sfântul Ioan Iacob";
            colors = "gray";
            colorCross = "gray";
            tropar = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip, căci lăsând lumea și patria ta, ai luat Crucea lui Hristos și în valea Iordanului te-ai așezat spre nevoință. Pentru aceasta și cu îngerii acum se bucură, Cuvioase Părinte Ioane, duhul tău. Roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "SCHIMBAREA LA FAȚĂ A DOMNULUI";
            saintName = "Domnul Iisus Hristos";
            colors = "red";
            colorCross = "red";
            tropar = "Schimbatu-Te-ai la Faţă în munte, Hristoase Dumnezeule, arătând ucenicilor Tăi Slava Ta, pe cât li se putea. Strălucească şi nouă, păcătoşilor, lumina Ta cea pururea fiitoare, pentru rugăciunile Născătoarei de Dumnezeu, Dătătorule de lumină, slavă Ţie.";
        }

        if (day == 7) {
            saintDay = "Sfânta Cuvioasă Teodora de la Sihla";
            saintName = "Sfânta Teodora";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cele pământeşti părăsind şi jugul pustniciei luând, te-ai făcut mireasă lui Hristos, fericită; cu postul, cu privegherea cereştile daruri luând şi cu rugăciunea pe îngeri ajungând, firea omenească ai biruit şi la cele cereşti te-ai mutat, lăsându-ne spre mângâiere peştera şi sfintele tale moaşte. Pentru aceasta, Sfântă Preacuvioasă Maică Teodora, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Sfântul Ierarh Emilian Mărturisitorul, Episcopul Cizicului";
            saintName = "Sfântul Emilian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Emilian, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            saintDay = "Sfântul Apostol Matia";
            saintName = "Sfântul Matia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Matia, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            saintDay = "Sfântul Mucenic Laurențiu Arhidiaconul";
            saintName = "Sfântul Laurențiu";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Laurențiu, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfântul Ierarh Nifon, Patriarh la Constantinopol";
            saintName = "Sfântul Nifon";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu faptele dreptei credinţe strălucind toată Biserica ai luminat, însoţindu-te cu smerenia cea dătătoare de înălţare, tu, cinstea cea mărită a celor două sfinte locaşuri, podoaba şi înfrumuseţarea patriarhilor, Mărite Ierarhe Nifon. Iar acum umple de dumnezeieşti daruri pe cei ce cu credinţă te măresc pe tine.";
        }

        if (day == 12) {
            saintDay = "Sfinţii Mucenici Fotie şi Anichit";
            saintName = "Sfântul Anichit";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Fotie şi Anichit, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 13) {
            saintDay = "Mutarea moaștelor Sfântului Cuvios Maxim Mărturisitorul";
            saintName = "Sfântul Maxim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Sfântul Proroc Miheia";
            saintName = "Sfântul Miheia";
            colors = "white";
            colorCross = "transparent";
            tropar = "A proorocului Tău Miheia pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 15) {
            saintDay = "ADORMIREA MAICII DOMNULUI";
            saintName = "Maica Domnului";
            colors = "red";
            colorCross = "red";
            tropar = "Întru naştere Fecioria ai păzit, întru Adormire lumea nu ai părăsit, de Dumnezeu Născătoare; mutatu-te-ai la Viaţă, fiind Maica Vieţii şi cu rugăciunile tale, izbăveşti din moarte sufletele noastre.";
        }

        if (day == 16) {
            saintDay = "Sfinții Martiri Brâncoveni: Constantin Vodă cu fii săi Constantin, Ștefan, Radu, Matei și cu sfetnicul Ianache";
            saintName = "Sfinții Brâncoveni";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cel ce pentru dreapta credință și pentru neam, te-ai învrednicit a suferi moarte de martir, împreună cu fiii tăi Constantin, Ștefan, Radu și Matei și cu sfetnicul Ianache, dreptcrediciosule Voievod Constantine, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 17) {
            saintDay = "Sfântul Gheorghe Pelerinul";
            saintName = "Sfântul Gheorghe";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe nevoitorul cel mare și următorul sihaștrilor, pe fericitul pelerin al lui Hristos în cântări să-l cinstim, strigându-i cu evlavie: Sfinte Gheorghe, prin rugăciunile tale, luminează calea vieții noastre!";
        }

        if (day == 18) {
            saintDay = "Sfinţii Mucenici Flor şi Lavru";
            saintName = "Sfântul Lavru";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pe preaîmpodobita şi de Dumnezeu înţelepţita doime cea prealuminoasă, pe Fericitul Flor şi pe Preacinstitul Lavru, după vrednicie să-i lăudăm credincioşii, căci aceştia cu osârdie au propovăduit în chip văzut tuturor, pe Treimea Cea Nezidită. Pentru aceasta, pătimind până la sânge, s-au încununat cu cunună prealuminoasă şi se roagă lui Hristos Dumnezeu, ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saintDay = "Sfântul Mucenic Andrei Stratilat";
            saintName = "Sfântul Andrei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mărirea cea pământească ai lăsat şi Cereasca Împărăţie ai moştenit; sângele picurându-ţi, ca şi cu o cunună de piatră nestricată, prea minunat te-ai împodobit; şi către Hristos ai venit cu sobor răbdător de patimi, cu ceata îngerilor în Lumina Cea Neînserată; şi pe Hristos, Soarele Cel Neapus, ai aflat, Sfinte Andrei Stratilat. Aceluia roagă-te pururea, cu cei împreună cu tine purtători de chinuri, să mântuiască sufletele noastre.";
        }

        if (day == 20) {
            saintDay = "Sfântul Proroc Samuel";
            saintName = "Sfântul Samuel";
            colors = "white";
            colorCross = "transparent";
            tropar = "A proorocului Tău Samuel pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfântul Apostol Tadeu";
            saintName = "Sfântul Tadeu";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Tadeu, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            saintDay = "Sfântul Mucenic Agatonic";
            saintName = "Sfântul Agatonic";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Agatonic, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            saintDay = "Sfântul Mucenic Lup";
            saintName = "Sfântul Mc. Lup";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Lup, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 24) {
            saintDay = "Sfântul Sfințit Mucenic Cosma Etolul";
            saintName = "Sfântul Cosma";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ca un râvnitor al Sfinţilor Apostoli ai primit lumânarea Duhului şi propovăduitor dumnezeiesc al dreptei-credinţe te-ai arătat; de aceea întăreşte-ne şi pe noi pe temelia dumnezeiască a credinţei ortodoxe şi a sfintelor dogme, Cosma sfinţite mucenicule slăvite, cerând pentru noi iertare greşelilor.";
        }

        if (day == 25) {
            saintDay = "Sfântul Apostol Tit";
            saintName = "Sfântul Tit";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Tit, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 26) {
            saintDay = "Sfinţii Mucenici Adrian şi Natalia, soţia sa";
            saintName = "Sfântul Adrian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Credinţa cea mântuitoare comoară nerăpită ai socotit-o, de trei ori fericite, păgânătatea cea părintească părăsind-o şi urmând Stăpânului, te-ai îmbogăţit cu darurile cele Dumnezeieşti Sfinte Adrian Mărite, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saintDay = "Sfântul Cuvios Pimen cel Mare";
            saintName = "Sfântul Pimen";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Pimen, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfântul Cuvios Moise Etiopianul";
            saintName = "Sfântul Moise";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat de Dumnezeu Purtătorule, Părintele nostru Moise; cu postul, cu privegherea, cu rugăciunea, cereştile daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 29) {
            saintDay = "Tăierea Capului Sfântului Proroc Ioan Botezătorul (Post)";
            saintName = "Sfântul Ioan";
            colors = "red";
            colorCross = "red";
            tropar = "Pomenirea dreptului cu laude, iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat mai cinstit şi decât proorocii. Că te-ai învrednicit a boteza în repejunile Iordanului pe Cel Propovăduit. Drept aceea, pentru adevăr nevoindu-te, bucurându-te, ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în trup: pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 30) {
            saintDay = "Sfântul Ierarh Varlaam, Mitropolitul Moldovei";
            saintName = "Sfântul Varlaam";
            colors = "gray";
            colorCross = "gray";
            tropar = "Vrednic slujitor al lui Hristos și înțelept apărător al dreptei credințe, mare cinstitor al Sfintei Cuvioase Parascheva și credincios luminător al neamului românesc, Sfinte Ierarhe Varlaam, roagă pe Hristos-Dumnezeu să ocrotească și să mântuiască sufletele noastre.";
        }

        if (day == 31) {
            saintDay = "Așezarea în raclă a brâului Maicii Domnului";
            saintName = "Maica Domnului";
            colors = "white";
            colorCross = "transparent";
            tropar = "Născătoare de Dumnezeu pururea Fecioară, Acoperământul oamenilor, Veşmântul şi Brâul Preacuratului tău trup, puternic Acoperământ cetăţii tale ai dăruit prin naşterea ta cea fără sămânţă, Nestricată rămânând. Că întru tine şi firea se înnoieşte şi vremea. Pentru aceasta, te rugăm, pace cetăţii tale dăruieşte şi sufletelor noastre mare milă.";
        }

    }






    //Septembrie

    if (month == 8) {

        if (day == 1) {
            saintDay = "Sfântul Cuvios Simeon Stâlpnicul";
            saintName = "Sfântul Simeon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Al răbdării stâlp ai fost, râvnind părinţilor celor mai dinainte, cuvioase; lui Iov întru patimi, lui Iosif întru ispite şi vieţii celor fără de trup, tu fiind în trup, Sfinte Simeon, părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 2) {
            saintDay = "Sfântul Ierarh Ioan Postitorul, Patriarh la Constantinopol";
            saintName = "Sfântul Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Ioan, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfinţii Cuvioşi Neofit şi Meletie de la Mănăstirea Stânișoara";
            saintName = "Sfântul Meletie";
            colors = "gray";
            colorCross = "gray";
            tropar = "De Dumnezeu iubitorilor Părinţi, suindu-vă în munţii faptelor bune, locaşuri Preasfântului Duh v-aţi arătat şi acum ca făclia în sfeşnic luminaţi în lume, Cuvioşilor Neofit şi Meletie; rugaţi-vă lui Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 4) {
            saintDay = "Sfântul Proroc Moise";
            saintName = "Sfântul Moise";
            colors = "white";
            colorCross = "transparent";
            tropar = "Suindu-te către înălţimea bunătăţilor, Sfinte Prorocule Moise, te-ai învrednicit a vedea Strălucirea lui Dumnezeu, primind tablele cele date de Dumnezeu; şi purtând întru tine darul însemnărilor, te-ai făcut cinstită laudă prorocilor şi mare taină a dreptei credinţe.";
        }

        if (day == 5) {
            saintDay = "Sfântul Prooroc Zaharia";
            saintName = "Sfântul Zaharia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu haina preoţiei fiind îmbrăcat, înţelepte, după Legea lui Dumnezeu jertfa primită, după cuviinţa preoţiei, ai adus, Sfinte Zaharia. Şi ai fost luminător şi văzător al celor de taină, semnele darului întru tine purtând lămurit, preaînţelepte. Şi cu sabia ai fost omorât în Biserica lui Dumnezeu, proorocule al lui Hristos. Cu Înaintemergătorul roagă-te să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Pomenirea minunii Sfântului Arhanghel Mihail în Colose";
            saintName = "Arhanghelul Mihail";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mai mare Voievodule al Oştilor Cereşti, Mihaile, rugămu-te pe tine noi, nevrednicii, ca să ne acoperi pe noi cu rugăciunile tale şi cu acoperământul aripilor măririi tale celei netrupeşti. Păzeşte-ne pe noi cei ce cădem cu deadinsul şi strigăm: mântuieşte-ne din nevoi, ca un mai mare peste Cetele Puterilor celor de sus.";
        }

        if (day == 7) {
            saintDay = "Sfinţii Cuvioşi Părinţi Simeon şi Amfilohie de la Pângăraţi";
            saintName = "Sfântul Amfilohie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cuvioşilor Părinţi Simeon şi Amfilohie, cei ce aţi luminat pădurile Carpaţilor cu rugăciunile voastre şi aţi umplut de mireasmă duhovnicească toată valea Bistriţei, sfetnici de taină ai voievozilor şi făclii luminoase ale călugărilor şi credincioşilor evlavioşi, rugaţi-vă lui Dumnezeu pentru noi, cei ce săvârşim cu dragoste sfântă pomenirea voastră!";
        }

        if (day == 8) {
            saintDay = "NAȘTEREA MAICII DOMNULUI";
            saintName = "Maica Domnului";
            colors = "red";
            colorCross = "red";
            tropar = "Naşterea ta, de Dumnezeu Născătoare Fecioară, bucurie a vestit la toată lumea; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru. Şi dezlegând blestemul, a dat binecuvântare; şi stricând moartea, ne-a dăruit nouă viaţă veşnică.";
        }

        if (day == 9) {
            saintDay = "Sfinţii şi Drepţii Dumnezeieşti Părinţi Ioachim şi Ana";
            saintName = "Sfinţii Ioachim şi Ana";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pomenirea drepţilor Tăi, Doamne, prăznuind, printr-înşii ne rugăm Ţie, mântuieşte sufletele noastre.";
        }

        if (day == 10) {
            saintDay = "Sfânta Împărăteasă Pulheria";
            saintName = "Sfânta Pulheria";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfântă Împărăteasă Pulheria, roagă pe Milostivul Dumnezeu ca să dea iertare de păcate sufletelor noastre.";
        }

        if (day == 11) {
            saintDay = "Sfânta Cuvioasă Teodora din Alexandria";
            saintName = "Sfânta Teodora";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Teodora, duhul tău.";
        }

        if (day == 12) {
            saintDay = "Sfântul Mucenic Avtonom";
            saintName = "Sfântul Avtonom";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Avtonom, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            saintDay = "Sfântul Cuvios Ioan de la Prislop";
            saintName = "Sfântul Ioan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Iubitorule de nevoinţă şi râvnitorule întru cele sfinte, Cuvioase Părinte Ioan, părăsit-ai cele trecătoare şi ai ales pe cele veşnice; luat-ai jugul lui Hristos în Mănăstirea Prislop şi în peşteră pustnicească, împreună cu îngerii, L-ai slăvit pe Dumnezeu. Pentru aceasta, nu înceta a te ruga pentru sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Înălţarea Sfintei Cruci";
            saintName = "Sfânta Cruce";
            colors = "red";
            colorCross = "red";
            tropar = "Mântuieşte, Doamne, poporul Tău şi binecuvintează moştenirea Ta; biruinţă binecredincioşilor creştini asupra celui protivnic dăruieşte şi cu Crucea Ta păzeşte pe poporul Tău.";
        }

        if (day == 15) {
            saintDay = "Sfântul Ierarh Iosif cel Nou de la Partoş, Mitropolitul Banatului";
            saintName = "Sfântul Iosif";
            colors = "gray";
            colorCross = "gray";
            tropar = "Din tinereţe cu totul te-ai supus Domnului, cu rugăciunile şi cu ostenelile şi cu postul. Pentru aceasta, văzând Dumnezeu nevoinţele tale, arhiereu şi păstor Bisericii Sale te-a rânduit; şi după moarte, în cetele sfinţilor te-a sălăşluit, Sfinte Părinte Iosif. Roagă-te lui Hristos Dumnezeu să ne dăruiască iertare de greşeli nouă, celor ce cu credinţă şi cu dragoste săvârşim sfântă pomenirea ta.";
        }

        if (day == 16) {
            saintDay = "Sfânta Mare Muceniţă Eufimia";
            saintName = "Sfânta Eufimia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Foarte mult ai vestit pe cei dreptmăritori şi ai ruşinat pe cei rău credincioşi, Sfântă Mare Muceniţă Eufimia, Preafrumoasă fecioară a lui Hristos, întărind cele ce părinţii bine au dogmatizat la al patrulea Sinod Ecumenic. Muceniţă Preamărită, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 17) {
            saintDay = "Sfânta Muceniţă Sofia cu fiicele sale: Pistis, Elpis şi Agapis";
            saintName = "Sfânta Sofia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşele cuvântătoare, Sfântă Muceniţă Sofia cu fiicele: Pistis, Elpis şi Agapis, prin mucenicie v-aţi adus Mielului şi Păstorului, săvârşind călătoria cea către Hristos şi credinţa păzind-o. Pentru aceea, cu suflet vesel astăzi săvârşind pomenirea voastră cea sfântă, minunatelor, pe Hristos Îl slăvim.";
        }

        if (day == 18) {
            saintDay = "Sfântul Ierarh Eumenie, Episcopul Gortinei";
            saintName = "Sfântul Eumenie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Eumenie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saintDay = "Sfinţii Mucenici Trofim, Savatie şi Dorimedont";
            saintName = "Sfântul Trofim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeu Cel Lăudat în Treime a preamărit treimea mucenicilor; pe Sfântul Trofim, pe Sfântul Savatie şi pe Sfântul Dorimedont; căci, întru Dânsul crezând, au surpat pe vrăjmaşul. Prin rugăciunile lor, Hristoase Dumnezeule, miluieşte-ne pe noi.";
        }

        if (day == 20) {
            saintDay = "Sfântul Mare Mucenic Eustatie cu soţia sa Teopisti și cei doi fii ai lor Agapie şi Teopist";
            saintName = "Sfântul Eustatie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Eustatie, Teopista, Agapie și Teopist întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            saintDay = "Sfântul Apostol Codrat din Magnesta";
            saintName = "Sfântul Codrat";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Codrat, roagă pe Milostivul Dumnezeu să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 22) {
            saintDay = "Sfântul Sfințit Mucenic Teodosie de la Mănăstirea Brazi";
            saintName = "Sfântul Teodosie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Arătatu-te-ai, Sfinte Ierarhe Teodosie, sfeşnic pururea luminos şi mare apărător al Bisericii lui Hristos. Strălucit-ai prin slujire şi mucenicie, ca o jertfă preacurată aducându-te Stăpânului tuturor; slăvim pomenirea ta, rugând pe Dumnezeu să dăruiască sufletelor noastre pace şi mare milă.";
        }

        if (day == 23) {
            saintDay = "Zămislirea Sfântului Prooroc Ioan Botezătorul";
            saintName = "Sfântul Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ceea ce mai înainte erai stearpă şi neroditoare, veseleşte-te; că iată ai zămislit pe Sfeşnicul Soarelui, Cel Ce va să lumineze toată lumea care pătimea cu nevederea. Dănţuieşte Zaharia cu îndrăzneală strigând: Prooroc Celui Preaînalt este cel ce are să se nască.";
        }

        if (day == 24) {
            saintDay = "Sfântul Cuvios Siluan Athonitul";
            saintName = "Sfântul Siluan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Propovăduitor al iubirii lui Hristos, Sfinte Cuvios Siluan Athonitul, lumii întregi ai fost dat, de trei ori fericite, între cuvântătorii de Dumnezeu cel prea duios, căci pe Cel smerit și blând ai văzut și inima Aceluia o ai cunoscut. Pentru aceasta, prin graiurile tale toți luminându-ne, proslăvim Duhul, Carele pe tine-au proslăvit.";
        }

        if (day == 25) {
            saintDay = "Sfânta Cuvioasă Eufrosina";
            saintName = "Sfânta Eufrosina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Eufrosina, duhul tău.";
        }

        if (day == 26) {
            saintDay = "Sfântul Voievod Neagoe Basarab";
            saintName = "Sfântul Neagoe";
            colors = "gray";
            colorCross = "gray";
            tropar = "Domnitor preaînţelept între căpeteniile neamului românesc, ctitor de lăcaşuri sfinte, prieten al Sfinţilor Părinţi, învăţător luminat de Duhul Sfânt şi mare iubitor de pace, Sfinte Neagoe Voievod, roagă-L pe Hristos Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 27) {
            saintDay = "Sfântul Ierarh Martir Antim Ivireanul, Mitropolitul Țării Românești";
            saintName = "Sfântul Antim";
            colors = "gray";
            colorCross = "gray";
            tropar = "Sfinte Părinte Ierarhe Antim, după vrednicie ai fost rânduit păstor şi învăţător turmei tale, şi cu înţelepciune dumnezeiască ai revărsat râurile sfintelor tale cuvinte. Viaţa ai pus-o pentru păstoriţii tăi şi cununa muceniciei ai dobândit de la Hristos Dumnezeu, pe Care roagă-L, Sfinte Părinte Ierarhe Antim, să dăruiască pace şi mare milă celor ce săvârşesc sfântă pomenirea ta.";
        }

        if (day == 28) {
            saintDay = "Sfântul Cuvios Hariton Mărturisitorul";
            saintName = "Sfântul Hariton";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Hariton, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saintDay = "Sfântul Mucenic Trifon";
            saintName = "Sfântul Trifon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Trifon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saintDay = "Sfântul Ierarh Grigorie Luminătorul, Arhiepiscopul Armeniei";
            saintName = "Sfântul Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Ierarhe Grigorie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }


    }







    //Octombrie

    if (month == 9) {

        if (day == 1) {
            saintDay = "Acoperământul Maicii Domnului";
            saintName = "Maica Domnului";
            colors = "red";
            colorCross = "red";
            tropar = "Astăzi, poporul cel binecredincios, luminat prăznuim, umbriţi fiind prin venirea ta, Maica lui Dumnezeu şi cău­tând către Preacinstită Icoana ta, cu umilinţă grăim: acoperă-ne pe noi cu Cinstitul tău Acoperă­mânt şi ne scapă de tot răul, rugând pe Fiul tău, Hristos Dumnezeul nostru, să mântu­iască sufletele noastre.";
        }

        if (day == 2) {
            saintDay = "Sfântul Sfinţit Mucenic Ciprian";
            saintName = "Sfântul Ciprian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ciprian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfântul Sfinţit Mucenic Dionisie Areopagitul";
            saintName = "Sfântul Dionisie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Bunătate învăţându-te şi îmbărbătându-te întru toate, îmbrăcându-te cuviincios cu bun cuget, ai scos din vasul alegerii cele negrăite; şi cre­dinţa păzind, calea întocmai ai săvârşit, Sfinţite Mucenice Dionisie: roagă-te lui Hristos Dumnezeu, să mântuiască su­fletele noastre.";
        }

        if (day == 4) {
            saintDay = "Sfântul Sfinţit Mucenic Ierotei, Episcopul Atenei";
            saintName = "Sfântul Ierotei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Bunătate învăţându-te şi îmbărbătându-te întru toate, cu bună cunoştinţă, ca un sfinţitor cuvios îmbrăcându-te, ai scos din vasul alegerii cele negrăite; şi credinţa păzind, stadiul întocmai ai săvârşit, Sfinţite Mucenice Ierotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saintDay = "Sfinţii Cuvioşi Daniil şi Misail, de la Mănăstirea Turnu";
            saintName = "Sfântul Daniil";
            colors = "gray";
            colorCross = "gray";
            tropar = "Dascăli ai rugăciunii neîncetate şi ai luptelor duhovniceşti v-aţi arătat, Cuvioşilor Daniil şi Misail, că de iubirea Mântuitorului Hristos, nedespărţiţi fiind, cu apostolească râvnă Preasfintei Treimi aţi slujit cu osârdie, în peşteri nevoindu-vă. Pentru aceasta, cerem, cu smerenie: Rugaţi-vă, să se mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Sfântul Apostol Toma";
            saintName = "Sfântul Apostol Toma";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Toma, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 7) {
            saintDay = "Sfinţii Mari Mucenici Serghie şi Vah";
            saintName = "Sfântul Serghie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe cei ce după fire nu au fost fraţi de trup, pe aceştia Darul Cel Dumnezeiesc a cugeta frăţeşte până la sânge i-a făcut, pe Sfinţii Mucenici Serghie şi pe Vah, cinstită şi cre­dincioasă pereche. Fără de arme şi fără de haine în locul nevoinţei pe vrăjmaşul au înfruntat, rugându-se neîncetat pentru sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Sfânta Cuvioasă Pelaghia";
            saintName = "Sfânta Pelaghia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Cuvioasă Maică Pelaghia, duhul tău.";
        }

        if (day == 9) {
            saintDay = "Sfântul Apostol Iacob al lui Alfeu";
            saintName = "Sfântul Apostol Iacob";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Iacob, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 10) {
            saintDay = "Sfinţii Mucenici Evlampie şi Evlampia, sora lui";
            saintName = "Sfântul Evlampie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Evlampie și Evlampia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfântul Apostol Filip, unul din cei 7 diaconi";
            saintName = "Sfântul Apostol Filip";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Filip, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 12) {
            saintDay = "Sfinţii Mucenici Prov, Tarah şi Andronic";
            saintName = "Sfântul Prov";
            colors = "white";
            colorCross = "transparent";
            tropar = "De isprăvile Sfinţilor Mucenici Prov, Tarah şi Andronic, Puterile Îngereşti foarte s-au mi­nunat; că fiind un trup muri­tor, pe vrăjmaşul cel fără de trup cu Puterea Crucii nevoindu-se tare, l-au biruit nevăzut. Şi acum se roagă Domnului să se miluiască sufletele noastre.";
        }

        if (day == 13) {
            saintDay = "Aducerea moaștelor Sfântului Apostol Andrei la Iași";
            saintName = "Sfântul Andrei";
            colors = "gray";
            colorCross = "gray";
            tropar = "Fiu al Galileei şi frate al lui Petru, dintre pescari în soborul Apostolilor întâi ai fost chemat, Andrei cel minunat, iar de la mormântul tău din Patra chemi popoarele la Dumnezeu şi atunci ne-ai umplut de bucurie când în România iarăşi ai venit, unde pe Hristos Domnul L-ai propovăduit.";
        }

        if (day == 14) {
            saintDay = "Sfânta Cuvioasă Parascheva";
            saintName = "Sfânta Parascheva";
            colors = "red";
            colorCross = "red";
            tropar = "Întru tine, Maică, cu osârdie s-a mân­tuit cel după chip, căci luând Crucea, ai urmat lui Hristos și lucrând ai în­vă­țat să nu se uite la trup, căci este trecător, ci să poarte grijă de suflet, de lucrul cel ne­muritor. Pentru aceasta și cu îngerii împreună se bucură, Cuvioasă Maică Parascheva, duhul tău.";
        }

        if (day == 15) {
            saintDay = "Sfântul Mucenic Luchian preotul";
            saintName = "Sfântul Luchian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Luchian, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 16) {
            saintDay = "Sfântul Mucenic Longhin Sutașul";
            saintName = "Sfântul Longhin";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Longhin, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            saintDay = "Sfântul Proroc Osea";
            saintName = "Sfântul Osea";
            colors = "white";
            colorCross = "transparent";
            tropar = "A proorocului Tău Osea po­menire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 18) {
            saintDay = "Sfântul Apostol și Evanghelist Luca";
            saintName = "Sfântul Apostol Luca";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol şi Evanghe­list Luca, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 19) {
            saintDay = "Sfântul Proroc Ioil";
            saintName = "Sfântul Ioil";
            colors = "white";
            colorCross = "transparent";
            tropar = "A proorocului Tău, Doamne, Ioil pomenire prăznuind, printr-însul Te rugăm: mântuieşte sufletele noastre.";
        }

        if (day == 20) {
            saintDay = "Sfântul Mare Mucenic Artemie";
            saintName = "Sfântul Artemie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Artemie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            saintDay = "Sfinţii Cuvioşi Mărturisitori Visarion şi Sofronie şi al Sfântului Mucenic Oprea";
            saintName = "Sfântul Visarion";
            colors = "white";
            colorCross = "transparent";
            tropar = "Luptătorilor pentru Orto­doxie, Sfinţilor Cuvioşi Mărturisitori Visarion şi Sofronie şi Sfinte Mucenic Oprea, ca nişte îngereşti trâm­biţe aţi înviorat în suflete îndrăznirea mărturisirii dreptei credinţe şi ca nişte înţelepţi propovăduitori, pe popor l-aţi hrănit cu dreaptă şi luminată învăţătură. Mari au fost oste­nelile lucrării voastre; mare şi osârdia propovăduirii; mare a fost şi rodul luptei voastre drep­te, pururea pomeniţilor ostaşi ai lui Hristos.";
        }

        if (day == 22) {
            saintDay = "Sfântul Ierarh, întocmai cu apostolii, Averchie, Episcopul Ierapolei";
            saintName = "Sfântul Averchie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Averchie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saintDay = "Sfântul Apostol Iacob, rudenia Domnului, primul episcop al Ierusalimului";
            saintName = "Sfântul Apostol Iacob";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ca un ucenic al Domnului ai primit Evanghelia, drepte; ca un mucenic eşti de neînduple­cat; îndrăzneală ca un frate al lui Dumnezeu, a te ruga ca un ierarh. Roagă pe Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saintDay = "Sfântul Mare Mucenic Areta şi al celor împreună cu dânsul";
            saintName = "Sfântul Areta";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pentru durerile Sfântului Mare Mucenic Areta şi al celor împreună cu dânsul, care pentru Tine au pătimit, fii Mi­lostiv Doamne şi toate durerile noastre le vindecă, Iubitorule de oameni, rugămu-ne Ţie.";
        }

        if (day == 25) {
            saintDay = "Sfinţii Mucenici Marcian şi Martirie";
            saintName = "Sfântul Marcian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Marcian şi Martirie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 26) {
            saintDay = "Sfântul Mare Mucenic Dimitrie, Izvorâtorul de mir";
            saintName = "Sfântul Dimitrie";
            colors = "red";
            colorCross = "red";
            tropar = "Mare apărător te-a aflat în­tru primejdii lumea, purtătorule de chinuri, pe tine cel ce ai biruit pe păgâni. Deci, precum mândria lui Lie ai surpat şi la luptă îndrăzneţ ai făcut pe Nestor, aşa Sfinte Dimitrie, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            saintDay = "Sfântul Cuvios Dimitrie cel Nou, Ocrotitorul Bucureștilor";
            saintName = "Sfântul Dimitrie";
            colors = "red";
            colorCross = "red";
            tropar = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; căci luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Dimitrie, duhul tău.";
        }

        if (day == 28) {
            saintDay = "Sfântul Ierarh Iachint, Mitropolitul Țării Românești";
            saintName = "Sfântul Iachint";
            colors = "gray";
            colorCross = "gray";
            tropar = "Vrednic următor al ierarhilor dobrogeni şi întâiule între mitropoliţii Ţării Româneşti, Sfinte Ierarhe Iachint, te-ai arătat mărturisitor al dreptei credinţe, lucrător al virtuţilor şi rugător pentru sufletele noastre.";
        }

        if (day == 29) {
            saintDay = "Sfânta Mare Muceniță Anastasia Romana";
            saintName = "Sfânta Anastasia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Anastasia, strigă cu glas mare: pe Tine, Mirele meu, Te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru Tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 30) {
            saintDay = "Sfântul Apostol Cleopa";
            saintName = "Sfântul Apostol Cleopa";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol, Cleopa, roagă pe milostivul Dumnezeu ca să dăruiască iertare de greșeli sufletelor noastre.";
        }

        if (day == 31) {
            saintDay = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis";
            saintName = "Sfântul Apostol Narcis";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli Apelie, Stahie, Amplie, Urban, Aristobul şi Narcis, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }


    }



    //Noiembrie

    if (month == 10) {

        if (day == 1) {
            saintDay = "Sfinţii Mucenici doctori fără de arginţi Cosma şi Damian";
            saintName = "Sfântul Damian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor cei fără de arginţi şi de minuni făcătorilor, Cosma şi Damian, cercetaţi neputinţele noastre. Şi ca unii care în dar aţi luat, în dar daţi-ne nouă.";
        }

        if (day == 2) {
            saintDay = "Sfinţii Mucenici Achindin, Pigasie, Aftonie, Elpidifor şi Anempodist";
            saintName = "Sfântul Achindin";
            colors = "white";
            colorCross = "transparent";
            tropar = "Purtătorilor de lupte ai Domnului, Sfinţilor Mucenici Achindin, Pigasie, Aftonie, Elpidifor şi Anempodist, fericit este pământul care s-a adăpat cu sângele vostru şi sfinte locaşurile care au primit trupurile voastre. Că în privelişte pe vrăjmaşi aţi biruit şi pe Hristos cu îndrăznire aţi propovăduit, pe Acela ca pe un Bun rugaţi-L să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfinţii Sfinţiţi Mucenici Achepsima, episcopul, Iosif, preotul şi Aitala, diaconul";
            saintName = "Sfântul Iosif";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Achepsima, episcopul, Iosif, preotul şi Aitala, diaconul, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saintDay = "Sfântul Cuvios Gheorghe, Mărturisitorul din Drama";
            saintName = "Sfântul Gheorghe";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pe ctitorul cinstitei Mănăstiri a Sfintei Înălțări, pe lucrătorul de taină al plânsului aducător de bucurie, pe învățătorul rugăciunii inimii, al smereniei și al trezviei, pe Cuviosul Gheorghe în cântări să-l cinstim noi, credincioșii, ca pe o laudă nouă a Mărturisitorilor, strigând: Purtăto­rule de chinuri, cu dumnezeiesc ajutor ocrotește-i pe cei ce se roagă ție!";
        }

        if (day == 5) {
            saintDay = "Sfinţii Mucenici Galaction şi Epistimia";
            saintName = "Sfântul Galaction";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Galaction şi Epistimia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saintDay = "Sfântul Ierarh Pavel Mărturisitorul, Patriarh la Constantinopol";
            saintName = "Sfântul Pavel";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pentru mărturisirea Dumnezeieştii credinţe, alt Pavel pe tine Biserica te-a arătat râvnitor între preoţi. Strigă împreună cu tine şi Abel către Domnul şi sângele cel drept al lui Zaharia. Părinte cuvioase, pe Hristos Dumnezeu roagă-L să ne dăruiască nouă mare milă.";
        }

        if (day == 7) {
            saintDay = "Sfinţii 33 de Mucenici din Melitina";
            saintName = "Sfinţii 33 Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 8) {
            saintDay = "Soborul Sfinților Arhangheli Mihail și Gavriil şi a tuturor puterilor cereşti";
            saintName = "Sfinții Arhangheli";
            colors = "red";
            colorCross = "red";
            tropar = "Mai marilor Voievozi ai Oştilor cereşti, rugămu-vă pe voi noi, nevrednicii; cu rugăciunile voastre să ne acoperiţi pe noi, cu acoperământul aripilor slavei voastre celei netrupeşti păzindu-ne pe noi, cei ce cădem cu deadinsul şi strigăm: izbăviţi-ne din nevoi, ca nişte mai mari peste cetele puterilor celor de sus.";
        }

        if (day == 9) {
            saintDay = "Sfântul Ierarh Nectarie din Eghina";
            saintName = "Sfântul Nectarie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe cel născut în Silivria şi ocrotitorul Eghinei, pe acela ce s-a arătat în vremurile din urmă prieten adevărat al virtuţii, pe Sfântul Ierarh Nectarie să-l cinstim cei credincioşi ca pe un Dumnezeiesc slujitor al lui Hristos, că izvorăşte bogate vindecări celor ce cu evlavie strigă: Slavă lui Hristos, Celui Ce te-a proslăvit! Slavă Celui Ce minunat te-a arătat! Slavă Celui Ce prin tine lucrează tuturor tămăduiri!";
        }

        if (day == 10) {
            saintDay = "Sfinţii Apostoli Olimp, Rodion, Sosipatru, Erast, Terţiu şi Cvart";
            saintName = "Sfântul Apostol Rodion";
            colors = "white";
            colorCross = "transparent";
            tropar = "Arătatu-s-a astăzi cinstită prăznuirea Apostolilor Olimp, Rodion, Sosipatru, Erast, Terţiu şi Cvart, dând în chip vădit iertare de greşeli tuturor celor ce săvârşesc pomenirea lor.";
        }

        if (day == 11) {
            saintDay = "Sfântul Mare Mucenic Mina";
            saintName = "Sfântul Mina";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mucenicul Tău, Doamne, Mina întru nevoința sa, cununa nestricăciunii a luat de la Tine, Dumnezeul nostru, că având puterea Ta, pe chinuitori a învins, zdrobit-a și ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuiește sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 12) {
            saintDay = "Sfântul Ierarh Ioan cel Milostiv, Patriarhul Alexandriei";
            saintName = "Sfântul Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru răbdarea ta ţi-ai agonisit plata ta, părinte cuvioase, întru rugăciuni neîncetat răbdând, pe săraci iubind şi pe aceia îndestulând. Dar, roagă-te lui Hristos Dumnezeu, Sfinte Ioan, Milostive, Fericite, să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            saintDay = "Sfântul Ierarh Ioan Gură de Aur, Arhiepiscop la Constantinopol";
            saintName = "Sfântul Ioan Gură de Aur";
            colors = "gray";
            colorCross = "gray";
            tropar = "Din gura ta ca o lumină de foc strălucind harul, lumea a luminat. Vistieriile neiubirii de argint lumii a câştigat. Înălţimea gândului smerit nouă ne-a arătat. Şi cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Cuvântul Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Sfântul Ierarh Grigorie Palama, Arhiepiscopul Tesalonicului";
            saintName = "Sfântul Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Luminător al dreptei credinţe, sprijinul Bisericii şi învăţătorule, podoaba monahilor, apărătorule cel nebiruit al teologilor; făcătorule de minuni, Grigorie, lauda Tesalonicului, propovăduitorule al harului, roagă-te pururea să se mântuiască sufletele noastre.";
        }

        if (day == 15) {
            saintDay = "Sfântul Cuvios Paisie de la Neamț (Post)";
            saintName = "Sfântul Paisie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Apărătorule al dreptei credințe și lauda monahilor, Cuvioase Părinte Paisie, din pruncie iubind pe Hristos, ca un alt Avraam ai părăsit patria ta, în Muntele Athosului nevoindu-te; și, adunând ceată de ucenici, te-ai așezat în țara Moldovei cea binecuvântată și Mănăstirea Neamțului rai pământesc ai făcut-o. Pentru aceasta, împreună cu îngerii, nu înceta a te ruga lui Dumnezeu pentru sufletele noastre.";
        }

        if (day == 16) {
            saintDay = "Sfântul Apostol şi Evanghelist Matei (Post)";
            saintName = "Sfântul Apostol Matei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol şi Evanghelist Matei, roagă pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 17) {
            saintDay = "Sfântul Ierarh Grigorie Taumaturgul, Episcopul Neocezareei (Post)";
            saintName = "Sfântul Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru rugăciuni priveghind, la lucrările minunilor răbdând, asemenea numire cu îndreptările ai câştigat. Ci, te roagă lui Hristos Dumnezeu, Părinte Grigorie, să lumineze sufletele noastre, ca să nu adormim în moarte cu păcate.";
        }

        if (day == 18) {
            saintDay = "Sfinții Mucenici Platon şi Roman, diaconul (Post)";
            saintName = "Sfântul Roman";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Platon şi Roman, diaconul, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            saintDay = "Sfântul Proroc Avdie (Post)";
            saintName = "Sfântul Avdie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pomenind prăznuirea prorocului tău Avdie, Doamne, printr-însul Te rugăm: izbăveşte sufletele noastre.";
        }

        if (day == 20) {
            saintDay = "Sfântul Cuvios Grigorie Decapolitul (Post)";
            saintName = "Sfântul Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Chip te-ai făcut înfrânării şi prin Dumnezeiescul Duh pe toţi i-ai luminat. Alergarea dreptei credinţe o ai săvârşit şi cu învăţăturile lumea ai luminat şi ai mustrat cugetele celor rău credincioşi, Părinte Cuvioase Grigorie, roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 21) {
            saintDay = "INTRAREA ÎN BISERICĂ A MAICII DOMNULUI (Dezlegare la pește)";
            saintName = "Maica Domnului";
            colors = "red";
            colorCross = "red";
            tropar = "Astăzi, înainte însemnarea bunăvoinţei lui Dumnezeu şi propovăduirea mântuirii oamenilor, în Templul lui Dumnezeu luminat Fecioara se arată şi pe Hristos tuturor mai înainte Îl vesteşte. Acesteia şi noi cu mare glas să-i strigăm: Bucură-te, Împlinirea rânduielii Ziditorului.";
        }

        if (day == 22) {
            saintDay = "Sfinţii Apostoli Filimon, Arhip şi Onisim (Post)";
            saintName = "Sfântul Apostol Arhip";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli Filimon, Arhip şi Onisim, rugaţi pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 23) {
            saintDay = "Sfântul Cuvios Antonie de la Iezerul Vâlcea (Post)";
            saintName = "Sfântul Antonie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Purtătorule de dumnezeiescul dor al rugăciunii neîncetate, Sfinte Părinte Noule Antonie, povăţuitorule al călugărilor, ajutătorule al celor din nevoi şi făcătorule de minuni, locuitorul raiului celui de sus, dar nedespărţit de cei de jos, roagă pe Milostivul Dumnezeu să ne dăruiască nouă pace şi mare milă.";
        }

        if (day == 24) {
            saintDay = "Sfinţii Sfinţiţi Mucenici Clement, Episcopul Romei şi Petru, Episcopul Alexandriei (Post)";
            saintName = "Sfântul Clement";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfinţilor Sfinţiţi Mucenici Clement, Episcopul Romei şi Petru, Episcopul Alexandriei, în pace îndreptează viaţa noastră.";
        }

        if (day == 25) {
            saintDay = "Sfânta Mare Muceniță Ecaterina (Post)";
            saintName = "Sfânta Ecaterina";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu înțelepciunea ca și cu razele soarelui ai luminat pe filosofii păgâni și ca o lună prealuminoasă, care strălucea în noaptea necredinței, întunericul l-ai gonit; iar pe împărăteasa o ai încredințat, dimpreună și pe prigonitorul l-ai mustrat, de Dumnezeu chemată, fericită Ecaterino! Cu bucurie ai alergat la cămara cea cerească, către Hristos, Mirele cel preafrumos, și de la Dânsul te-ai încununat cu cunună împărătească, înaintea Căruia împreună cu îngerii stând, roagă-te pentru noi, cei ce cinstim sfântă pomenirea ta.";
        }

        if (day == 26) {
            saintDay = "Sfântul Cuvios Stelian Paflagonul, ocrotitorul pruncilor (Post)";
            saintName = "Sfântul Stelian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale, nerodirea pustiului o ai lucrat, şi cu suspinurile tale cele din adânc, spre însutite osteneli o ai făcut roditoare. Şi te-ai făcut luminător lumii, strălucind cu minunile, Stelian, Părintele nostru; roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saintDay = "Sfântul Mare Mucenic Iacob Persul (Post)";
            saintName = "Sfântul Iacob";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu mucenicia cea neobişnuită şi înfricoşătoare şi cu vitejiile răbdării, pe toţi i-ai minunat, mult-pătimitorule, cu tăierea fiecărei părţi din trup, rugăciuni de mulţumire preaminunat ai dat lui Dumnezeu. Pentru aceasta, în pătimirea ta cunună ai luat, şi te-ai suit către tronul Împăratului ceresc, al lui Hristos Dumnezeu, Iacob. Pe Acela roagă-L să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfântul Mucenic Irinarh (Post)";
            saintName = "Sfântul Irinarh";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Irinarh, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 29) {
            saintDay = "Sfântul Mucenic Paramon (Post)";
            saintName = "Sfântul Paramon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Paramon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saintDay = "Sfântul Apostol Andrei, cel Întâi Chemat, Ocrotitorul României (Dezlegare la pește)";
            saintName = "Sfântul Apostol Andrei";
            colors = "red";
            colorCross = "red";
            tropar = "Ca cel decât Apostolii mai întâi chemat şi verhovnicului frate adevărat, Stăpânului tuturor Andrei, roagă-te pace lumii să dăruiască şi sufletelor noastre mare milă.";
        }


    }



    //Decembrie

    if (month == 11) {

        if (day == 1) {
            saintDay = "Sfântul Proroc Naum (Post)";
            saintName = "Sfântul Naum";
            colors = "white";
            colorCross = "transparent";
            tropar = "A prorocului Tău, Doamne, Naum, pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 2) {
            saintDay = "Sfântul Cuvios Porfirie Kafsokalivitul (Post)";
            saintName = "Sfântul Porfirie";
            colors = "white";
            colorCross = "transparent";
            tropar = "După cum pe pământ te rugai pentru tămăduirea neputinţelor şi pentru iertarea păcatelor noastre, tot astfel şi acum roagă-te în ceruri, Părinte Porfirie, şi roagă-L pe Hristos Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfântul Cuvios Gheorghe de la Cernica (Dezlegare la pește)";
            saintName = "Sfântul Gheorghe";
            colors = "gray";
            colorCross = "gray";
            tropar = "Următor al cuvioşilor părinţi şi împlinitor al virtuţilor sihăstreşti, rugător neîncetat şi înnoitor al monahismului românesc te-ai arătat, Sfinte Cuvioase Părinte Gheorghe. Roagă-te lui Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 4) {
            saintDay = "Sfânta Mare Muceniță Varvara (Dezlegare la pește)";
            saintName = "Sfânta Varvara";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe Sfânta Mare Muceniţă Varvara să o cin­stim; că a sfărâmat cursele vrăjmasului şi ca o vrăbioară s-a izbăvit dintr-însele, cu ajutorul Armei Crucii, Preacinstita.";
        }

        if (day == 5) {
            saintDay = "Sfântul Cuvios Sava cel Sfințit (Dezlegare la pește)";
            saintName = "Sfântul Sava";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele din adânc ai făcut ostenelile tale însutit roditoare şi te-ai făcut luminător lumii, strălucind cu minunile, Sfinte Sava părintele nostru, cuvioase! Roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Sfântul Ierarh Nicolae, Arhiepiscopul Mirelor Lichiei (Dezlegare la pește)";
            saintName = "Sfântul Nicolae";
            colors = "red";
            colorCross = "red";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Nicolae, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            saintDay = "Sfânta Muceniță Filofteia de la Curtea de Argeș (Post)";
            saintName = "Sfânta Filofteia";
            colors = "gray";
            colorCross = "gray";
            tropar = "Întru răbdarea ta ţi-ai agonisit plata ta, Fericită Filofteia, întru ispite neîncetat răbdând, bătăi suferind, în necazuri binevoind, pe săraci miluindu-i şi pe flămânzi săturându-i; roagă-te lui Hristos Dumnezeu, bună fecioară, să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Sfântul Cuvios Patapie (Post)";
            saintName = "Sfântul Patapie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Patapie, duhul tău.";
        }

        if (day == 9) {
            saintDay = "Zămislirea Sfintei Fecioare Maria de către Sfânta Ana (Dezlegare la pește)";
            saintName = "Sfânta Ana";
            colors = "white";
            colorCross = "transparent";
            tropar = "Astăzi legăturile nerodirii de fii se dezleagă; că Dumnezeu auzind pe Sfinţii şi Drepţii Ioachim şi Ana, mai presus de orice nădejde le-a făgăduit lămurit că vor naşte pe Fiica lui Dumnezeu, din care S-a născut Cel Necuprins, Om făcându-Se, poruncind Îngerului să-i strige: Bucură-te cea Plină de har, Domnul este cu tine!";
        }

        if (day == 10) {
            saintDay = "Sfinţii Mucenici Mina, Ermoghen şi Evgraf (Post)";
            saintName = "Sfântul Ermoghen";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu înfrânarea omorând por­nirile şi îndemnurile cele arză­toare ale patimilor, ucenicii lui Hristos, Sfinţii Mucenici Mina, Ermoghen şi Evgraf, au luat harul de a alun­ga urmările bolilor celor nepu­tincioşi şi a face minuni, atât în viaţă, cât şi după moarte. Minune uimitoare cu adevărat! Că oase goale izvorăsc tămă­duiri. Slavă Ţie, Singurului Dumnezeu şi Ziditorului.";
        }

        if (day == 11) {
            saintDay = "Sfântul Cuvios Daniil Stâlpnicul (Post)";
            saintName = "Sfântul Daniil";
            colors = "white";
            colorCross = "transparent";
            tropar = "Stâlp al răbdării ai fost râv­nindstrămoşilor, cuvioase: Dreptului Iov întru patimi, Sfântului Iosif întru ispite; şi în trup viaţa celor fără de trup având, Sfinte Preacuvioase Daniil, părintele nostru, roagă-te lui Hristos Dumnezeu să mântuiască sufle­tele noastre.";
        }

        if (day == 12) {
            saintDay = "Sfântul Ierarh Spiridon, Episcopul Trimitundei (Dezlegare la pește)";
            saintName = "Sfântul Spiridon";
            colors = "gray";
            colorCross = "gray";
            tropar = "Soborului celui dintâi te-ai arătat apărător şi de minuni făcător, de Dumnezeu purtătorule Sfinte Spiridon, părintele nostru. Pentru aceasta cu femeia cea moartă în groapă tu ai vorbit şi şarpele în aur l-ai prefăcut. Şi când ai cântat sfintele rugăciuni, îngeri ai avut împreună cu tine slujind, preasfinţite. Slavă Celui Ce te-a preamărit pe tine; Slavă Celui Ce te-a încununat; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 13) {
            saintDay = "Sfântul Ierarh Dosoftei, Mitropolitul Moldovei (Post)";
            saintName = "Sfântul Dosoftei";
            colors = "gray";
            colorCross = "gray";
            tropar = "Apărătorule al Ortodoxiei și învățătorule al sfințeniei, păstor blând ca un miel și mare dascăl al Sfintei Liturghii, Părinte Ierarhe Dosoftei, roagă pe Hristos-Dumnezeu să mântuiască sufletele noastre!";
        }

        if (day == 14) {
            saintDay = "Sfinţii Mucenici Tirs, Levchie, Calinic, Filimon, Apolonie şi Arian (Post)";
            saintName = "Sfântul Apolonie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Tirs, Levchie, Calinic, Filimon, Apolonie şi Arian, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 15) {
            saintDay = "Sfântul Sfințit Mucenic Elefterie, Episcopul Iliriei (Post)";
            saintName = "Sfântul Elefterie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu haină de preot fiind îm­podobit şi cu sângele curgând şiroaie, fericite, ai alergat la Stăpânul tău, Hristos, Înţe­lepte Elefterie, nimicitorul sa­tanei. Pentru aceasta nu în­ceta a te ruga pentru cei ce cu credinţă cinstesc fericitele tale nevoinţe.";
        }

        if (day == 16) {
            saintDay = "Sfântul Proroc Agheu (Post)";
            saintName = "Sfântul Proroc Agheu";
            colors = "white";
            colorCross = "transparent";
            tropar = "A prorocului Tău, Doamne, Agheu pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 17) {
            saintDay = "Sfântul Proroc Daniel și Sfinții trei tineri Anania, Azaria și Misail (Post)";
            saintName = "Sfântul Proroc Daniel";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mari sunt faptele credinţei; că în mijlocul izvorului văpăii, ca într-o apă de odihnă sfinţii trei Tineri s-au bucurat şi Pro­rocul Daniel păstor leilor ca unor oi s-a arătat. Pentru rugăciunile lor, Hristoase Dum­nezeule, miluieşte-ne pe noi.";
        }

        if (day == 18) {
            saintDay = "Sfântul Cuvios Daniil Sihastrul (Post)";
            saintName = "Sfântul Daniil";
            colors = "gray";
            colorCross = "gray";
            tropar = "Întru tine, Părinte, cu osârdie s-a mântuit cel după chip; căci luând Crucea, ai urmat lui Hristos; și luptând, ai învățat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta și cu îngerii se bucură, Preacuvioase Părinte Daniile, duhul tău.";
        }

        if (day == 19) {
            saintDay = "Sfântul Mucenic Bonifatie (Post)";
            saintName = "Sfântul Bonifatie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul tău. Doamne, Bonifatie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            saintDay = "Sfântul Sfințit Mucenic Ignatie Teoforul, Episcopul Antiohiei (Post)";
            saintName = "Sfântul Ignatie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfânta Muceniță Iuliana din Nicomidia (Post)";
            saintName = "Sfânta Iuliana";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Iuliana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 22) {
            saintDay = "Sfântul Ierarh Petru Movilă, Mitropolitul Kievului (Post)";
            saintName = "Sfântul Petru";
            colors = "gray";
            colorCross = "gray";
            tropar = "Apărătorule și mărturisitorule al Ortodoxiei, luminătorule al neamurilor, fiule al Moldovei și Părinte al Ucrainei, Sfinte Ierarhe Petru, mult nevoitorule, roagă-te lui Hristos Dumnezeu, să ne apere credința și să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saintDay = "Sfântul Cuvios Naum (Post)";
            saintName = "Sfântul Naum";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ucenic vrednic al Sfinţilor Chiril şi Metodie, te-ai arătat fericite, și tămăduiri din destul ai revărsat cu dragoste sufletelor smerite, ca cel ce te-ai arătat luminător mare celor din întunericul neştiinţei, cu raza rugăciunii tale ne înconjoară şi pe noi în ceasul umilinţei.";
        }

        if (day == 24) {
            saintDay = "Sfânta Muceniță Eugenia (Post)";
            saintName = "Sfânta Eugenia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Eugenia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 25) {
            saintDay = "NAȘTEREA DOMNULUI (Crăciunul)";
            saintName = "Domnul Iisus Hristos";
            colors = "red";
            colorCross = "red";
            tropar = "Naşterea Ta, Hristoase, Dumnezeul nostru, răsărit-a lumii lumina cunoştinţei; că întru dânsa cei ce slujeau stelelor de la Stea s-au învăţat să se închine Ţie, Soarelui dreptăţii şi să Te cunoască pe Tine, Răsăritul Cel de sus, Doamne, Slavă Ţie!";
        }

        if (day == 26) {
            saintDay = "Sfântul Cuvios Nicodim de la Tismana";
            saintName = "Sfântul Nicodim";
            colors = "red";
            colorCross = "red";
            tropar = "Celui Ce a Răsărit din Fecioara, Mai Marelui Păstorilor, ca o oaie de turmă ai urmat, Părinte al nostru Sfinte Nicodim. Cu postul, cu privegherea şi cu rugăciunile, te-ai făcut lucrător sfinţit de cele cereşti, tămăduind sufletele celor ce aleargă la tine cu credinţă. Pentru aceasta strigăm: Slavă Celui Ce te-a preaslăvit pe tine; Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce a arătat tuturor prin tine îndreptare.";
        }

        if (day == 27) {
            saintDay = "Sfântul Apostol, Întâiul Mucenic și Arhidiacon Ștefan";
            saintName = "Sfântul Apostol Ștefan";
            colors = "red";
            colorCross = "red";
            tropar = "Încununatu-s-a creştetul tău cu diademă împărătească, pe urma luptelor pe care le-ai pătimit pentru Hristos Dumnezeu, luptătorule cel dintâi printre mucenici Sfinte Arhidiacon Ștefan. Că vădind nebunia iudeilor, ai văzut pe Mântuitorul tău, de-a dreapta Tatălui. Pe Acela roagă-L totdeauna pentru sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfinții 20.000 de Mucenici arși în Nicomidia";
            saintName = "Sfinții Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Purtătorilor de biruinţă ai Domnului, fericit este pămân­tul care s-a adăpat cu sângiurile voastre şi sfinte sunt loca­şurile care au primit trupurile voastre. Că în locul de chinuri pe vrăjmaşi i-aţi biruit şi cu în­drăzneală pe Hristos L-aţi pro­povăduit. Pe Dânsul, ca pe un Bun, rugaţi-L pentru noi, ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saintDay = "Sfinții 14.000 de prunci uciși din porunca lui Irod";
            saintName = "Sfinții prunci";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pentru durerile sfinţilor, care pentru Tine au pătimit, Milos­tiv fii, Doamne şi vindecă toate durerile noastre, Iubitorule de oameni.";
        }

        if (day == 30) {
            saintDay = "Sfânta Muceniță Anisia fecioara";
            saintName = "Sfânta Anisia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Anisia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 31) {
            saintDay = "Sfânta Cuvioasă Melania Romana";
            saintName = "Sfânta Melania";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Melania, duhul tău.";
        }


    }




    //Ianuarie

    if (month == 0) {

        if (day == 1) {
            saintDay = "TĂIEREA ÎMPREJUR CEA DUPĂ TRUP A DOMNULUI";
            saintName = "Domnul Iisus Hristos";
            colors = "red";
            colorCross = "red";
            tropar = "Cel Ce şezi pe Scaunul cel în chipul focului, întru cele de sus, împreună cu Părintele Cel fără de început şi cu Dumnezeiescul Duh, ai binevoit a Te naşte pe pământ din Fecioară, Maica Ta, care nu ştie de bărbat, Mântuitorule Iisuse. Pentru aceasta ai şi fost tăiat împrejur a opta zi ca un Om. Slavă Sfatului Tău Celui Preabun; Slavă rânduielii Tale; Slavă smereniei Tale, Unule Iubitorule de oameni.";
        }

        if (day == 2) {
            saintDay = "Sfântul Ierarh Silvestru, Episcopul Romei";
            saintName = "Sfântul Silvestru";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Silvestru, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfântul Proroc Maleahi";
            saintName = "Sfântul Maleahi";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pomenirea prorocului Tău Maleahi prăznuind, Doamne, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 4) {
            saintDay = "Soborul Sfinților 70 de Apostoli";
            saintName = "Sfinții 70 Apostoli";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor 70 de Apostoli rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 5) {
            saintDay = "Sfinţii Mucenici Teopempt şi Teonas (Post)";
            saintName = "Sfântul Teonas";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Sfinţii Teopempt şi Teonas, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saintDay = "BOTEZUL DOMNULUI (Boboteaza - Dumnezeiasca Arătare)";
            saintName = "Domnul Iisus Hristos";
            colors = "red";
            colorCross = "red";
            tropar = "În Iordan Botezându-Te Tu, Doamne, închinarea Treimii s-a arătat. Că Glasul Părintelui a mărturisit Ţie, Fiu Iubit pe Tine numindu-Te; şi Duhul, în Chip de Porumbel, a adeverit întărirea Cuvântului, Cel Ce Te-ai arătat, Hristoase Dumnezeule şi lumea ai luminat, Slavă Ţie.";
        }

        if (day == 7) {
            saintDay = "Soborul Sfântului Proroc Ioan Botezătorul și Înaintemergătorul Domnului";
            saintName = "Sfântul Ioan";
            colors = "red";
            colorCross = "red";
            tropar = "Pomenirea dreptului este cu laude; iar ţie destul îţi este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat şi decât prorocii mai cinstit. Că şi a boteza în ape pe Cel Propovăduit, te-ai învrednicit. Drept aceasta pentru adevăr nevoindu-te, bucurându-te ai binevestit şi celor din iad pe Dumnezeu, Cel Ce S-a arătat în Trup, pe Cel Ce a ridicat păcatul lumii şi ne-a dăruit nouă mare milă.";
        }

        if (day == 8) {
            saintDay = "Sfântul Cuvios Gheorghe Hozevitul";
            saintName = "Sfântul Gheorghe";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Gheorghe, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 9) {
            saintDay = "Sfântul Mucenic Polieuct";
            saintName = "Sfântul Polieuct";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Polieuct, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            saintDay = "Sfântul Ierarh Grigorie, Episcopul Nissei";
            saintName = "Sfântul Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile lor, în pace îndreptează viaţa noastră.";
        }

        if (day == 11) {
            saintDay = "Sfântul Cuvios Teodosie cel Mare, începătorul vieții călugărești de obște din Palestina";
            saintName = "Sfântul Teodosie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Teodosie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            saintDay = "Sfânta Muceniță Tatiana, diaconița";
            saintName = "Sfânta Tatiana";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Tatiana, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile Sfântei Mucenițe Tatiana, diaconița, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 13) {
            saintDay = "Sfinţii Mucenici Ermil şi Stratonic";
            saintName = "Sfântul Stratonic";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mucenicii Tăi, Doamne, Ermil şi Stratonic, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 14) {
            saintDay = "Sfinții Cuvioși Mucenici din Sinai și Rait";
            saintName = "Sfinții Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfinților Cuvioși Mucenici din Sinai și Rait, în pace îndreptează viaţa noastră.";
        }

        if (day == 15) {
            saintDay = "Sfântul Cuvios Pavel Tebeul";
            saintName = "Sfântul Pavel";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Pavel. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 16) {
            saintDay = "Cinstirea lanțului Sfântului Apostol Petru";
            saintName = "Sfântul Apostol Petru";
            colors = "white";
            colorCross = "transparent";
            tropar = "Roma nepărăsind, la noi ai venit prin cinstitele lanţuri ce ai purtat, întâistătătorule pe scaunul Apostolilor. Pe care cu credinţă cinstindu-le, te rugăm: cu ale tale rugăciuni către Dumnezeu, dăruieşte nouă mare milă.";
        }

        if (day == 17) {
            saintDay = "Sfântul Cuvios Antonie cel Mare";
            saintName = "Sfântul Antonie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Râvnitor lui Ilie cu obiceiurile asemă­­­­nân­du-te, Bo­tezătorului cu drepte cărări urmând, Pă­rin­te Antonie, pustiului te-ai făcut locuitor și lumea ai întărit-o cu rugă­ciunile tale. Pentru aceasta roagă-te lui Hristos Dum­ne­zeu să mântuiască sufletele noastre.";
        }

        if (day == 18) {
            saintDay = "Sfântul Ierarh Atanasie, Arhiepiscopul Alexandriei";
            saintName = "Sfântul Atanasie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe ierarhii Domnului, pe tâlcuitorii dogmelor; pe păstorii alexandrinilor propovăduitori ai adevărului, perechea cea iubită de Dumnezeu; pe străluciţii luminători, risipitori ai întunericului celor nelegiuiţi: pe Sfântul Atanasie cel Mare, secerătorul ereticilor, împreună cu Sfântul Ierarh Chiril, cel ce a cinstit precum se cuvine pe Născătoarea de Dumnezeu, veniţi toţi iubitorii de prăznuire şi adunându-ne cu veselie şi cu cântări să-i cinstim; că ei se roagă neîncetat lui Dumnezeu pentru noi toţi.";
        }

        if (day == 19) {
            saintDay = "Sfântul Ierarh Marcu, Mitropolitul Efesului";
            saintName = "Sfântul Ierarh Marcu";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pentru mărturisirea dumnezeieștii credințe mare lucrător te-a aflat pe tine Biserica, sfințite Marcu prealăudate, căci prin păzirea slovelor dumnezeieștilor părinți ai zdrobit eresurile întunecatului Apus. Pentru aceasta pe Hristos Dumnezeu roagă-L să dăruiască râvnă celor ce-ți urmează cinstita viețuire.";
        }

        if (day == 20) {
            saintDay = "Sfântul Cuvios Eftimie cel Mare";
            saintName = "Sfântul Eftimie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Veseleşte-te pustiu care nu rodeai, bucură-te ceea ce nu aveai durere; că bărbatul doririlor Duhului ţi-a înmulţit ţie fii, sădindu-i cu dreapta cinstire de Dumnezeu şi hrănindu-i cu înfrânarea, spre împlinirea faptelor bune. Cu ale cărui rugăciuni, Hristoase Dumne­zeule, mântuieşte sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfântul Cuvios Maxim Mărturisitorul";
            saintName = "Sfântul Maxim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Maxim, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 22) {
            saintDay = "Sfântul Apostol Timotei";
            saintName = "Sfântul Timotei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Bunătatea învăţându-te şi întru toate cumpătat fiind, îmbrăcându-te cu buna conştiinţă, precum i se cuvine unui sfânt, ai scos din vasul alegerii lucrurile tainice; şi credinţa păzind, aceeaşi cale ai săvârşit, Sfinte Apostol Timotei, roagă-te lui Hristos Dumnezeu, să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saintDay = "Sfântul Sfințit Mucenic Clement, Episcopul Ancirei";
            saintName = "Sfântul Clement";
            colors = "white";
            colorCross = "transparent";
            tropar = "Viţă de cuvioşie şi stâlpare de luptă grea, floare preasfinţită şi rod de Dumnezeu dăruit, de-a pururi înfloritor ai fost dat credincioşilor, preasfinţite Mucenic Clement. Ci, ca cel ce eşti cu mucenicii împreună luptător şi cu ierarhii împreună locuitor, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saintDay = "Sfânta Cuvioasă Xenia";
            saintName = "Sfânta Xenia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, maică, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioasă Maică Xenia, duhul tău.";
        }

        if (day == 25) {
            saintDay = "Sfântul Ierarh Grigorie Teologul, Arhiepiscop la Constantinopol";
            saintName = "Sfântul Grigorie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Fluierul cel păstoresc al teologiei tale a biruit trâmbiţele ritorilor; că ţie, celui ce ai încercat adâncurile duhului, ţi s-au adăugat şi Frumuseţile Cuvântului. Ci, roagă pe Hristos Dumnezeu, Sfinte Părinte Grigorie, să mântuiască sufletele noastre.";
        }

        if (day == 26) {
            saintDay = "Sfântul Ierarh Iosif cel Milostiv, Mitropolitul Moldovei";
            saintName = "Sfântul Iosif";
            colors = "gray";
            colorCross = "gray";
            tropar = "Curăția ta și rugăciunea, milostenia și înfrânarea vas ales al Sfântului Duh te-au făcut; pentru aceasta, Moldovei fiind păstor, urmai cu totul Păstorului Celui bun; Sfinte mare Ierarhe, milostive Iosif, roagă pe Hristos Dumnezeu să ne dăruiască nouă mare milă.";
        }

        if (day == 27) {
            saintDay = "Aducerea moaștelor Sfântului Ioan Gură de Aur";
            saintName = "Sfântul Ioan Gură de Aur";
            colors = "gray";
            colorCross = "gray";
            tropar = "Din gura ta ca o văpaie de foc strălucind harul, lumea a luminat; vistieriile neiubirii de argint lumii a câştigat; înălţimea gândului smerit nouă ne-a arătat. Ci, cu cuvintele tale învăţându-ne, Sfinte Părinte Ioan Gură de Aur, roagă pe Hristos Cuvântul să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfântul Cuvios Efrem Sirul";
            saintName = "Sfântul Efrem";
            colors = "white";
            colorCross = "transparent";
            tropar = "Harul ce izvorăşte din gura ta cuvioase, a umplut de apele vieţii Biserica şi lumii a izbucnit râuri de cucernicie, revărsând asupra noastră apa pocăinţei; ci, învăţându-ne cu cuvintele tale, Sfinte Părinte Efrem, roagă-te lui Hristos, Dumnezeul nostru să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saintDay = "Aducerea moaștelor Sfântului Sfințit Mucenic Ignatie Teoforul";
            saintName = "Sfântul Ignatie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Ignatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 30) {
            saintDay = "Sfinții Trei Ierarhi: Vasile cel Mare, Grigorie Teologul și Ioan Gură de Aur";
            saintName = "Sfinții Trei Ierarhi";
            colors = "red";
            colorCross = "red";
            tropar = "Pe cei trei preamari luminători ai Dumnezeirii Celei de trei ori mai strălucitoare decât soarele, pe cei ce învăpăiază lumea cu Razele Dumnezeieştilor dogme; pe râurile cele cu miere curgătoare ale înţelepciunii, care adapă toată făptura cu apele cunoştinţei de Dumnezeu; pe Marele Vasile şi pe Grigorie de Dumnezeu Cuvântătorul, împre­ună cu Strălucitul Ioan cel cu limbă de aur, toţi cei iubitori de cuvintele lor, adunându-ne, cu cântări să-i cinstim; că aceştia pururea se roagă Treimii pentru noi.";
        }

        if (day == 31) {
            saintDay = "Sfinţii Mucenici doctori fără de arginţi Chir şi Ioan";
            saintName = "Sfinţii Chir şi Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sălăşluindu-se darul Treimii în inimile voastre cele curate, Preafericiţilor Chir şi Ioan, v-aţi arătat înfricoşători izgonitori ai duhurilor celor necurate; şi aţi fost tămăduitori ai neputinţelor, nu numai ai celor descoperite, ci şi ai celor ascunse. Drept aceea, îndrăzneală având către Dumnezeu Cel Iubitor de oameni, prin rugăciunile voastre, cele neîncetate, tămăduiţi patimile noastre.";
        }


    }




    //Februarie

    if (month == 1) {

        if (day == 1) {
            saintDay = "Sfântul Mucenic Trifon";
            saintName = "Sfântul Trifon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Trifon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 2) {
            saintDay = "ÎNTÂMPINAREA DOMNULUI";
            saintName = "Domnul Iisus Hristos";
            colors = "red";
            colorCross = "red";
            tropar = "Bucură-te, Ceea ce eşti Plină de har, Născătoare de Dumnezeu Fecioară; că din tine a Răsărit Soarele dreptăţii, Hristos Dumnezeul nostru, luminând pe cei dintru întuneric. Veseleşte-te şi tu, bătrânule drepte, cel ce ai primit în braţe pe Izbăvitorul sufletelor noastre, Cel Ce ne-a dăruit nouă şi Învierea.";
        }

        if (day == 3) {
            saintDay = "Sfântul Ansgar, luminătorul Danemarcei și al Suediei";
            saintName = "Sfântul Ansgar";
            colors = "white";
            colorCross = "transparent";
            tropar = "În întregime fiind cuprins de dragostea pentru Dumnezeu şi pentru oameni, la fel ca Apostolii, Sfinte Mucenice Ansgar, ai călătorit în depărtări ca să duci mântuire celor aflaţi în întuneric, jertfind durerea ta pe altarul inimii tale, iar prin truda şi osteneala ta aducând mărturie despre Mântuitorul ca un mucenic şi îndurând pericolele uscatului şi mării de dragul Său, fără să fii descurajat de ispite şi necazuri. Pentru acestea, roagă-te cu îndrăzneală să fie mântuite sufletele noastre.";
        }

        if (day == 4) {
            saintDay = "Sfântul Cuvios Isidor Pelusiotul";
            saintName = "Sfântul Isidor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Isidor, duhul tău.";
        }

        if (day == 5) {
            saintDay = "Sfânta Muceniță Agata";
            saintName = "Sfânta Agata";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Agata, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Sfântul Ierarh Fotie, Patriarh la Constantinopol";
            saintName = "Sfântul Fotie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Ca cel ce ești cu apostolii în ceruri împreună locuitor și ortodocșilor mare apărător, lumii drept învățător, iar eresurilor latinești dârz împotrivitor, Sfinte Ierarh Fotie, pe Hristos Dumnezeu roagă-L cu dinadinsul să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            saintDay = "Sfântul Ierarh Partenie, Episcopul Lampsacului";
            saintName = "Sfântul Partenie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Partenie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Sfântul Mare Mucenic Teodor Stratilat";
            saintName = "Sfântul Teodor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Strălucit voievod al adevăratei Oşti a Împăratului Ceresc ai ajuns, Fericite Teodor, purtătorule de biruinţă; că înţelepţeşte te-ai luptat cu armele credinţei şi mulţimile demonilor le-ai biruit şi adevărat biruitor te-ai arătat. Pentru aceasta pe tine cu credinţă pururea te fericim.";
        }

        if (day == 9) {
            saintDay = "Sfântul Mucenic Nichifor";
            saintName = "Sfântul Nichifor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul tău, Doamne, Nichifor, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            saintDay = "Sfântul Sfințit Mucenic Haralambie";
            saintName = "Sfântul Haralambie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Arătatu-te-ai, Înţeleptule Haralambie, ca un stâlp neclintit al Bisericii lui Hristos şi ca un sfeşnic pururea luminos al Lumii, strălucit-ai în lume prin mucenicie, fericite şi ai risipit întunecimea idolilor. Drept aceea roagă-te lui Hristos cu îndrăzneală, ca să ne mântuiască pe noi.";
        }

        if (day == 11) {
            saintDay = "Sfântul Ierarh Vlasie, Episcopul Sevastiei";
            saintName = "Sfântul Vlasie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Vlasie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            saintDay = "Sfântul Ierarh Meletie, Arhiepiscopul Antiohiei celei Mari";
            saintName = "Sfântul Meletie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Meletie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 13) {
            saintDay = "Sfântul Cuvios Martinian";
            saintName = "Sfântul Martinian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Văpaia ispitelor cu curgerea lacrimilor ai stins-o, fericite Cuvios Martinian şi valurile mării şi pornirile fiarelor înfrânându-le, ai strigat: Preaslăvit eşti Atotputernice, Cel Ce m-ai mântuit de foc şi de vifor.";
        }

        if (day == 14) {
            saintDay = "Sfântul Cuvios Auxenție";
            saintName = "Sfântul Auxenție";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Auxentie. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 15) {
            saintDay = "Sfântul Apostol Onisim";
            saintName = "Sfântul Apostol Onisim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Onisim, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 16) {
            saintDay = "Cinstirea lanțului Sfântului Apostol Petru";
            saintName = "Sfântul Apostol Petru";
            colors = "white";
            colorCross = "transparent";
            tropar = "Roma nepărăsind, la noi ai venit prin cinstitele lanţuri ce ai purtat, întâistătătorule pe scaunul Apostolilor. Pe care cu credinţă cinstindu-le, te rugăm: cu ale tale rugăciuni către Dumnezeu, dăruieşte nouă mare milă.";
        }

        if (day == 17) {
            saintDay = "Sfântul Mare Mucenic Teodor Tiron";
            saintName = "Sfântul Teodor Tiron";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mari sunt faptele credinţei! În izvorul văpăii ca într-o apă de odihnă Sfântul Mucenic Teodor s-a bucurat. Că în foc cu totul fiind ars, ca o pâine plăcută Preasfintei Treimi s-a adus. Pentru rugăciunile lui, Hristoase Dumnezeule, mântuieşte sufletele noastre.";
        }

        if (day == 18) {
            saintDay = "Sfântul Ierarh Leon, Episcopul Romei";
            saintName = "Sfântul Leon";
            colors = "gray";
            colorCross = "gray";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Leon, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saintDay = "Sfântul Apostol Arhip";
            saintName = "Sfântul Apostol Arhip";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Arhip, roagă pe Milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 20) {
            saintDay = "Sfântul Ierarh Leon, Episcopul Cataniei";
            saintName = "Sfântul Leon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Leon, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfântul Cuvios Timotei";
            saintName = "Sfântul Timotei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri, Care Te porţi pururea cu noi după blândeţile Tale, nu depărta mila Ta de la noi, ci, pentru rugăciunile Sfântului Cuvios Timotei, îndreptează viaţa noastră în pace.";
        }

        if (day == 22) {
            saintDay = "Aflarea moaștelor Sfinților Mucenici din Constantinopol";
            saintName = "Sfinții Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 23) {
            saintDay = "Sfântul Sfințit Mucenic Policarp, Episcopul Smirnei";
            saintName = "Sfântul Policarp";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinte Mucenice Policarp, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 24) {
            saintDay = "Întâia și a doua aflare a Capului Sfântului Ioan, Înaintemergătorul și Botezătorul Domnului";
            saintName = "Sfântul Ioan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Din pământ răsărind capul Înaintemergătorului, aruncă credincioşilor Razele Nestricăciunii tămăduirilor. De sus adună mulţimea îngerilor, de jos cheamă împreună neamul omenesc, ca să înalţe cu un glas Slavă lui Hristos Dumnezeu.";
        }

        if (day == 25) {
            saintDay = "Sfântul Ierarh Tarasie, Patriarh la Constantinopol";
            saintName = "Sfântul Tarasie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Tarasie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 26) {
            saintDay = "Sfântul Ierarh Porfirie, Episcopul Gazei";
            saintName = "Sfântul Porfirie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Porfirie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saintDay = "Sfântul Cuvios Mărturisitor Procopie";
            saintName = "Sfântul Procopie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Procopie, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfântul Cuvios Vasile Mărturisitorul";
            saintName = "Sfântul Vasile";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Vasile. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 29) {
            saintDay = "Sfântul Cuvios Ioan Casian";
            saintName = "Sfântul Ioan Casian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine, părinte, cu osârdie s-a mântuit cel după chip; că, luând crucea, ai urmat lui Hristos; şi lucrând, ai învăţat să nu se uite la trup, căci este trecător; ci, să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Ioan, duhul tău.";
        }


    }




    //Martie

    if (month == 2) {

        if (day == 1) {
            saintDay = "Sfântul Cuvioasă Muceniţă Evdochia";
            saintName = "Sfântul Evdochia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Evdochia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 2) {
            saintDay = "Sfântul Sfințit Mucenic Teodot, Episcopul Chiriniei";
            saintName = "Sfântul Teodot";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Teodot, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 3) {
            saintDay = "Sfinţii Mucenici Eutropie, Cleonic şi Vasilisc";
            saintName = "Sfântul Eutropie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Eutropie, Cleonic şi Vasilisc, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saintDay = "Sfântul Cuvios Gherasim de la Iordan";
            saintName = "Sfântul Gherasim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Gherasim, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saintDay = "Sfântul Mucenic Conon din Isauria";
            saintName = "Sfântul Conon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Conon, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saintDay = "Sfinții 42 de Mucenici din Amoreea";
            saintName = "Sfinții Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 7) {
            saintDay = "Sfântul Sfințit Mucenic Efrem, Episcopul Tomisului";
            saintName = "Sfântul Efrem";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfântului Sfințit Mucenic Efrem, în pace îndreptează viaţa noastră.";
        }

        if (day == 8) {
            saintDay = "Sfântul Ierarh Teofilact Mărturisitorul, Episcopul Nicomidiei";
            saintName = "Sfântul Teofilact";
            colors = "white";
            colorCross = "transparent";
            tropar = "Neştiut ai trăit, preafericite Ierarh Teofilact, dar Hristos te-a arătat pe tine tuturor, luminând ca un astru, punându-te ca pe o lumină în­ţelegătoare în sfeşnic. Şi ţi-a înmânat tablele dogmelor Du­hului, cu care luminează-ne şi pe noi.";
        }

        if (day == 9) {
            saintDay = "Sfinții 40 de Mucenici din Sevastia";
            saintName = "Sfinții Mucenici";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pentru durerile Sfinților care pentru Tine au pătimit, fii milostiv, Doamne, și toate durerile noastre le vindecă, Iubito­rule de oameni, rugămu-ne Ție.";
        }

        if (day == 10) {
            saintDay = "Sfinţii Mucenici Codrat, Ciprian şi Dionisie";
            saintName = "Sfântul Dionisie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Codrat, Ciprian şi Dionisie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfântul Ierarh Sofronie, Patriarhul Ierusalimului";
            saintName = "Sfântul Sofronie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarh Sofronie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 12) {
            saintDay = "Sfântul Cuvios Teofan Mărturisitorul";
            saintName = "Sfântul Teofan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Teofan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 13) {
            saintDay = "Aducerea moaștelor Sfântului Ierarh Nichifor, Patriarh la Constantinopol";
            saintName = "Sfântul Nichifor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Nichifor, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Sfântul Cuvios Benedict de Nursia";
            saintName = "Sfântul Benedict";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Benedict. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 15) {
            saintDay = "Sfinţii Mucenici Agapie, Plisie şi Timolau";
            saintName = "Sfântul Agapie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Agapie, Plisie şi Timolau, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 16) {
            saintDay = "Sfântul Mucenic Sabin Egipteanul";
            saintName = "Sfântul Sabin";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Sabin, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            saintDay = "Sfântul Cuvios Alexie, omul lui Dumnezeu";
            saintName = "Sfântul Alexie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Alexie. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 18) {
            saintDay = "Sfântul Ierarh Chiril, Arhiepiscopul Ierusalimului";
            saintName = "Sfântul Chiril";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Chiril, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 19) {
            saintDay = "Sfinţii Mucenici Hrisant şi Daria";
            saintName = "Sfântul Hrisant";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Hrisant şi Daria, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 20) {
            saintDay = "Sfinții Cuvioși Mucenici din Mănăstirea Sfântului Sava cel Sfințit";
            saintName = "Sfinții Mucenici";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, din Mănăstirea Sfântului Cuvios Sava cel Sfințit, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 21) {
            saintDay = "Sfântul Ierarh Iacob Mărturisitorul";
            saintName = "Sfântul Iacob";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Părinte Iacob, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 22) {
            saintDay = "Sfântul Sfințit Mucenic Vasile, preotul din Ancira";
            saintName = "Sfântul Vasile";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Vasile, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 23) {
            saintDay = "Sfântul Cuvios Mucenic Nicon și cei 199 de ucenici ai lui";
            saintName = "Sfântul Nicon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Nicon și cei 199 de ucenici ai lui, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 24) {
            saintDay = "Înainte-prăznuirea Bunei Vestiri";
            saintName = "Maica Domnului";
            colors = "white";
            colorCross = "transparent";
            tropar = "Astăzi începutul bucuriei a toată lumea îndeamnă a lăuda Înainteprăznuirea, că iată, Arhanghelul Gavriil vine, aducând Fecioarei Buna Vestire şi către dânsa strigă: Bucură-te, cea Plină de har, Domnul este cu tine!";
        }

        if (day == 25) {
            saintDay = "BUNA VESTIRE";
            saintName = "Maica Domnului";
            colors = "red";
            colorCross = "red";
            tropar = "Astăzi este începutul mântuirii noastre şi arătarea Tainei celei din veac. Fiul lui Dumnezeu, Fiu Fecioarei Se face şi Gavriil Harul Îl binevesteşte. Pentru aceasta şi noi, împreună cu Dânsul, Născătoarei de Dumnezeu să-i strigăm: Bucură-te, cea Plină de har, Domnul este cu tine!";
        }

        if (day == 26) {
            saintDay = "Soborul Sfântului Arhanghel Gavriil";
            saintName = "Arhanghelul Gavriil";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mare Voievod al Oştilor Ce­reşti, rugămu-te pe tine, noi nevrednicii, ca prin rugă­ciunile tale să ne acoperi pe noi cu acoperământul aripilor mă­ririi tale celei netrupeşti, păzindu-ne pe noi, cei ce cădem cu dinadinsul şi strigăm: izbăveşte-ne din nevoi, ca un mai mare peste Cetele Puterilor celor de sus!";
        }

        if (day == 27) {
            saintDay = "Sfânta Muceniță Matrona din Tesalonic";
            saintName = "Sfânta Matrona";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Matrona, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un Milostiv, mântuiește sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Sfântul Cuvios Ilarion cel Nou, egumenul Pelechitului";
            saintName = "Sfântul Ilarion";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ilarion, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 29) {
            saintDay = "Sfinţii Sfinţiţi Mucenici Marcu, Episcopul Aretuselor şi Chiril, diaconul";
            saintName = "Sfântul Marcu";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Marcu şi Chiril, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saintDay = "Sfântul Cuvios Ioan Scărarul";
            saintName = "Sfântul Ioan Scărarul";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Ioan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 31) {
            saintDay = "Sfântul Sfințit Mucenic Ipatie, Episcopul Gangrei";
            saintName = "Sfântul Ipatie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Ipatie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }


    }



    //Aprilie

    if (month == 3) {

        if (day == 1) {
            saintDay = "Sfânta Cuvioasă Maria Egipteanca";
            saintName = "Sfânta Maria Egipteanca";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine maică cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; și lucrând ai învățat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta și cu în­gerii împreună se bucură, cuvioasă Marie, duhul tău.";
        }

        if (day == 2) {
            saintDay = "Sfântul Cuvios Tit, făcătorul de minuni";
            saintName = "Sfântul Tit";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Tit. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 3) {
            saintDay = "Sfântul Cuvios Nichita Mărturisitorul, Egumenul Mănăstirii Midichiei";
            saintName = "Sfântul Nichita";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Nichita. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 4) {
            saintDay = "Sfântul Cuvios Iosif Imnograful";
            saintName = "Sfântul Iosif";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Iosif, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 5) {
            saintDay = "Sfinţii Mucenici Teodul şi Agatopod";
            saintName = "Sfântul Teodul";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Teodul şi Agatopod, întru nevoinţa lor, cununa nestricăciunii au dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 6) {
            saintDay = "Sfântul Ierarh Eutihie, Patriarh la Constantinopol";
            saintName = "Sfântul Eutihie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarh Eutihie, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            saintDay = "Sfântul Mucenic Caliopie";
            saintName = "Sfântul Caliopie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Caliopie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 8) {
            saintDay = "Sfinţii Apostoli Irodion, Agav, Ruf, Flegon, Asincrit şi Ermis";
            saintName = "Sfântul Apostol Ruf";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli Irodion, Agav, Ruf, Flegon, Asincrit şi Ermis, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 9) {
            saintDay = "Sfântul Mucenic Eupsihie din Cezareea Capadociei";
            saintName = "Sfântul Eupsihie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Eupsihie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 10) {
            saintDay = "Sfinţii Mucenici Terentie, Pompei, African, Maxim, Macarie şi Dima";
            saintName = "Sfântul Macarie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Terentie, Pompei, African, Maxim, Macarie şi Dima, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfântul Ierarh Calinic de la Cernica, Episcopul Râmnicului";
            saintName = "Sfântul Calinic";
            colors = "red";
            colorCross = "red";
            tropar = "De Dumnezeu purtătorule, părintele nostru Calinic, povăţuitorule al călugărilor, podoaba cuvioşilor şi lauda arhiereilor, ajutătorule al celor din nevoi şi făcătorule de minuni! Cu nevoinţele tale chip de sfinţenie te-ai arătat, iar acum cu îngerii în ceruri te veseleşti; cu care roagă pe Milostivul Dumnezeu să ne dăruiască nouă pace şi mare milă.";
        }

        if (day == 12) {
            saintDay = "Sfântul Mucenic Sava de la Buzău";
            saintName = "Sfântul Sava";
            colors = "gray";
            colorCross = "gray";
            tropar = "Purtătorule de chinuri Sfinte Mucenic Sava, cel ce în apă ai fost omorât de către goţii păgâni, roagă pe Milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 13) {
            saintDay = "Sfântul Sfințit Mucenic Artemon preotul, din Laodiceea";
            saintName = "Sfântul Artemon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Artemon, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Sfântul Ierarh Pahomie de la Gledin, Episcopul Romanului";
            saintName = "Sfântul Pahomie";
            colors = "gray";
            colorCross = "gray";
            tropar = "Stea mult-luminoasă, răsărită în ținutul Gledinului, ai strălucit ca un semn dumnezeiesc în pământul Moldovei, luminând inimile credincioșilor. Stâlp neclintit al rugăciunii curate, podoabă aleasă a ierarhilor români și ctitor al Schitului Pocrov din lavra Neamțului, Sfinte Ierarhe Pahomie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 15) {
            saintDay = "Sfinţii Apostoli Aristarh, Pud şi Trofim";
            saintName = "Sfântul Apostol Trofim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinţilor Apostoli Aristarh, Pud şi Trofim, rugaţi pe Milostivul Dumnezeu, ca să dea iertare de greşeli sufletelor noastre.";
        }

        if (day == 16) {
            saintDay = "Sfintele Muceniţe fecioare Agapia, Irina şi Hionia";
            saintName = "Sfânta Agapia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Muceniţele Tale, Doamne, fecioarele Agapia, Irina şi Hionia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 17) {
            saintDay = "Sfântul Sfințit Mucenic Simeon, Episcopul Persiei";
            saintName = "Sfântul Simeon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Simeon, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 18) {
            saintDay = "Sfântul Cuvios Ioan, ucenicul Sfântului Grigorie Decapolitul";
            saintName = "Sfântul Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului, înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, Părintele nostru Ioan. Cu postul, cu privegherea şi prin rugăciune primind daruri cereşti, tămăduieşti pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; Slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 19) {
            saintDay = "Sfântul Cuvios Ioan de la Lavra Veche";
            saintName = "Sfântul Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ioan, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 20) {
            saintDay = "Sfântul Ierarh Teotim, Episcopul Tomisului";
            saintName = "Sfântul Teotim";
            colors = "gray";
            colorCross = "gray";
            tropar = "Îndreptător credinţei şi chip blândeţelor, învăţător înfrânârii te-a arătat pe tine, turmei tale, adevărul lucrurilor. Pentru aceasta ai dobândit cu smerenia cele înalte şi cu sărăcia cele bogate; Părinte Ierarhe Teotim, roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfântul Sfinţit Mucenic Ianuarie, Episcop de Benevent şi al celor împreună cu dânsul";
            saintName = "Sfântul Mucenic Ianuarie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci, pentru rugăciunile Sfântului Mucenic Ianuarie, în pace îndreptează viaţa noastră.";
        }

        if (day == 22) {
            saintDay = "Sfântul Ierarh Teodor Sicheotul, Episcopul Anastasiopolei";
            saintName = "Sfântul Ierah Teodor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cunoscut fiind din scutece sfinţit şi arătându-te plin de haruri, ai luminat lumea cu minunile şi mulţimile demonilor ai alungat, lucrătorule de sfinţenie, Părinte Ierarhe Teodor. Pentru aceasta roagă-te Domnului pentru noi.";
        }

        if (day == 23) {
            saintDay = "Sfântul Mare Mucenic Gheorghe, Purtătorul de biruință";
            saintName = "Sfântul Mucenic Gheorghe";
            colors = "red";
            colorCross = "red";
            tropar = "Cu nevoinţă bună te-ai nevoit prin credinţă, purtătorule de chinuri al lui Hristos şi păgânătatea chinuitorilor ai mustrat şi jertfă bine primită lui Dumnezeu te-ai adus. Pentru aceasta şi cunună de biruinţă ai luat; şi cu rugăciunile tale, sfinte, tuturor le dai iertare de greşeli.";
        }

        if (day == 24) {
            saintDay = "Sfinții Ierarhi Ilie Iorest, Simion Ștefan şi Sava Brancovici, mitropoliții Transilvaniei";
            saintName = "Sfântul Simion Ștefan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mărturisitori ai Ortodoxiei şi buni arhipăstori ai Bisericii lui Hristos, îndreptători ai poporului, prea­fericiţi ierarhi purtători de biruinţă, Sfinţilor Ilie Iorest, Simion Ștefan şi Sava Brancovici, cei ce v-aţi învrednicit de cununa vieţii, rugaţi-vă Domnului să se mântuiască sufletele noastre.";
        }

        if (day == 25) {
            saintDay = "Sfântul Apostol și Evanghelist Marcu";
            saintName = "Sfântul Apostol Marcu";
            colors = "gray";
            colorCross = "gray";
            tropar = "Învăţat fiind de Apostolul Petru, te-ai făcut Apostol al lui Hristos şi ca un soare ai strălucit marginilor, podoaba alexandri­nilor ai fost, fericite, căci prin tine Egiptul s-a eliberat de înşelăciune şi ca un stâlp al Bisericii, prin învăţătura ta cea Evanghelică pe toţi ai luminat. Pentru aceasta luminat cinstind, pomenirea ta prăznuim, de Dumnezeu grăitorule Sfinte Apostol Marcu; roagă pe Dumnezeu Cel Înduple­cat prin tine, să dăruiască iertare de greşeli sufletelor noastre.";
        }

        if (day == 26) {
            saintDay = "Sfântul Sfințit Mucenic Vasilevs, Episcopul Amasiei";
            saintName = "Sfântul Mucenic Vasilevs";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor Apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge, Sfinţite Mucenice Vasilevs, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 27) {
            saintDay = "Sfântul Sfințit Mucenic Simeon, rudenia Domnului";
            saintName = "Sfântul Mucenic Simeon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pe tine rudenia lui Hristos, Sfinte Simeon, ierarh şi mucenic tare, cu sfinţenie te lăudăm, cel ce ai pierdut înşelăciunea şi ai păzit credinţa. Pentru aceasta prăznuind astăzi preasfântă pomenirea ta, dezlegare de păcate luăm prin rugăciunile tale.";
        }

        if (day == 28) {
            saintDay = "Sfinții Mucenici Maxim, Cvintilian și Dadas din Ozovia";
            saintName = "Sfântul Mucenic Maxim";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Maxim, Cvintilian și Dadas din Ozovia, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 29) {
            saintDay = "Sfinții 9 Mucenici din Cizic, Teognid, Ruf, Antipatru, Teostih, Artema, Magn, Teodot, Tavmasie și Filimon";
            saintName = "Sfinții 9 Mucenici din Cizic";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Teognid, Ruf, Antipatru, Teostih, Artema, Magn, Teodot, Tavmasie și Filimon, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 30) {
            saintDay = "Sfântul Apostol Iacob, fratele Sfântului Apostol Ioan Evanghelistul";
            saintName = "Sfântul Apostol Iacob";
            colors = "white";
            colorCross = "transparent";
            tropar = "Apostol al lui Hristos preaales şi frate al cuvântătorului de Dumnezeu celui iubit ai fost, Prealăudate Iacob; cere iertare de greşeli, pentru cei ce te laudă pe tine şi sufletelor noastre mare milă.";
        }



    }




    //Mai

    if (month == 4) {

        if (day == 1) {
            saintDay = "Sfântul Prooroc Ieremia";
            saintName = "Sfântul Proroc Ieremia";
            colors = "white";
            colorCross = "transparent";
            tropar = "A proorocului Tău, Doamne, Ieremia pomenire prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
            condac = "Curăţindu-ţi cu duhul inima ta cea dătătoare de lumină, mărite mare prooroc şi mucenic Ieremia, ai primit de sus harul proorociei, şi la margini cu mare glas ai strigat: iată Dumnezeul nostru, şi nu este asemenea ca Dânsul; căci Acesta întrupându-Se S-a arătat pe pământ.";
            videoTropar = "src='https://www.youtube.com/embed/XLHMfdiMEWk?si=Cau-CMw_jkvyBnF5'";
        }

        if (day == 2) {
            saintDay = "Aducerea moaștelor Sfântului Ierarh Atanasie cel Mare în Constantinopol";
            saintName = "Sfântul Ierarh Atanasie cel Mare";
            colors = "gray";
            colorCross = "gray";
            tropar = "Dumnezeiască odraslă a cretanilor, păstor al cetăţii celei împărăteşti şi povăţuitor sfinţit al creştinilor de la Dunăre, comoara cea de mult preţ a Harkovului, Atanasie înţelepte, primit-ai har bogat de Sus, cu nume nemuritor fiind. Roagă pe Hristos Dumnezeu să mântuiască sufletele noastre.";
            condac = "Ale Ortodoxiei învăţături sădind, spinii relei socotinţe ai tăiat, înmulţind sămânţa credinţei cu plouarea Duhului cuvioase. Pentru aceasta lăudăm pomenirea ta Sfinte Ierarh Atanasie.";
            videoTropar = "src='https://www.youtube.com/embed/NKNVAP64sbdnCOKr'";
        }

        if (day == 3) {
            saintDay = "Sfântul Cuvios Irodion de la Lainici";
            saintName = "Sfântul Cuvios Irodion";
            colors = "gray";
            colorCross = "gray";
            tropar = "Pe luceafărul nostru cel din Oltenia, cu închinare de taină, ca pe un părinte ales să-l slăvim acum noi, ucenicii lui; că înainte-văzător s-a făcut Sfântul Irodion, de boli pe toţi vindecându-i şi duhovnic dumnezeiesc s-a arătat în viaţa sa.";
            condac = "Cel ce ai fost vrednic cinstitor al Preacuratei Maici a Domnului, încredinţându-te ei ca un fiu, ai ajuns în lăcaşurile Domnului jertfelnic sfânt al Dumnezeirii; că aprins fiind de focul Duhului Sfânt, ai întărit în rugăciune pe ucenicii tăi, cu care te bucuri în veci Părinte Irodioane!";
            videoTropar = "src='https://www.youtube.com/embed/lazSIpsfC1k?si=VD9h5N08DgaL_zZZ'";
        }

        if (day == 4) {
            saintDay = "Sfânta Muceniță Pelaghia";
            saintName = "Sfânta Muceniță Pelaghia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Pelaghia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește/mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
            condac = "Urând cele vremelnice, şi împărtăşindu-te de bunătăţile cele cereşti, pentru chinuire ai primit cunună, preacinstită Pelaghia, şi pâraiele sângiurilor ca un dar ai adus Stăpânului Hristos. Roagă-te să ne mântuiască pe noi din nevoi, cei ce cinstim pomenirea ta.";
            videoTropar = "src='https://www.youtube.com/embed/K5sKxSRbMV8?si=HivKQtjrJtafSeB0'";
        }

        if (day == 5) {
            saintDay = "Sfânta Mare Muceniță Irina";
            saintName = "Sfânta Muceniță Irina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Irina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
            condac = "Fiind împodobită cu frumuseţile fecioriei, Fecioară, şi încununându-te cu stema mucenicilor, Irina, şi stropită fiind cu sângele muceniciei, şi strălucită cu minunile tămăduirilor, cu dreaptă credinţă muceniţă ai primit harul de biruinţă pentru chinuirea ta.";
            videoTropar = "src='https://www.youtube.com/embed/0yeHh7sb56c?si=NfPD-0AXRO4BCeIg'";
        }

        if (day == 6) {
            saintDay = "Sfântul și Dreptul Iov, mult răbdătorul";
            saintName = "Sfântul Iov";
            colors = "white";
            colorCross = "transparent";
            tropar = "Bogăţia virtuţilor lui Iov văzând-o vrăjmaşul drepţilor, a uneltit a o fura, şi rupând turnul trupului, vistieria duhului nu o a furat; căci a aflat întrarmat sufletul celui fără prihană, iar pe mine şi golindu-mă m-a robit. Deci mai înainte de sfârşit întâmpinându-mă, izbăveşte-mă de cel viclean, Mântuitorule, şi mă mântuieşte.";
            condac = "Ca un adevărat şi drept, de Dumnezeu cinstitor şi fără prihană, şi sfinţit arătându-te preamărite, sluga lui Dumnezeu cea adevărată, ai luminat lumea cu răbdarea ta, prearăbdătorule şi preaviteazule; pentru aceasta toţi, de Dumnezeu înţelepţite Iov, lăudăm pomenirea ta.";
            videoTropar = "src='https://www.youtube.com/embed/vX7R9t4IcYc?si=Wf7v9VxR8ZAHMFTy'";
        }

        if (day == 7) {
            saintDay = "Sfântul Mucenic Acachie";
            saintName = "Sfântul Mucenic Acachie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Acachie, întru nevoinţa sa, cununa nesctricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "În pâraiele sângiurilor tale, mucenice Acachie, ai înecat pe vrăjmaşul, ruşinând toate oştirile tiranilor. Şi ajungând la cetele cele fără trupuri ale îngerilor, ai primit cununa cea neveştejită a neputrejunii. Pentru aceasta prin rugăciunile tale, izbăveşte-ne pe noi din primejdii.";
            videoTropar = "src='https://www.youtube.com/embed/fLWiaA-6iOw?si=fE6eLA6yH-SkhUyz'";
        }

        if (day == 8) {
            saintDay = "Sfântul Apostol și Evanghelist Ioan";
            saintName = "Sfântul Apostol Ioan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Apostole al lui Hristos de Dumnezeu iubite, grăbeşte de izbăveşte pe poporul cel fără de răspuns. Că te primeşte când cazi către El, Cel ce te-a primit când te-ai rezemat pe pieptu-I; pe Care roagă-L, de Dumnezeu cuvântătorule, şi norul păgânilor cel pus asupra noastră să-l risipească, cerându-ne nouă pace şi mare milă.";
            condac = "Măririle tale, iubitorule de feciorie, cine le va spune? Că verşi minuni şi izvorăşti tămăduiri, şi te rogi pentru sufletele noastre, ca un cuvântător de Dumnezeu şi prieten al lui Hristos.";
            videoTropar = "src='https://www.youtube.com/embed/U0vedo2u14M?si=9M3uzNKengUUX4Ch'";
        }

        if (day == 9) {
            saintDay = "Sfântul Mucenic Hristofor";
            saintName = "Sfântul Mucenic Hristofor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu haine din sângiuiri împodobindu-te, stai înaintea Domnului împăratul puterilor, Hristofore pururea-mărite, unde cu cetele celor fără de trupuri şi ale mucenicilor cânţi dulce cântare întreit-sfântă şi înfricoşătoare; pentru aceasta prin rugăciunile tale mântuieşte turma ta.";
            condac = "Săvârşind nevoinţa muceniciei, ai primit de la Dumnezeu cununa biruinţei, fericite Hristofor; pe Care roagă-L, din nevoi să ne izbăvim noi.";
            videoTropar = "src='https://www.youtube.com/embed/ZxRKFdjfKlY?si=PiUmfEpCxgHteBas'";
        }

        if (day == 10) {
            saintDay = "Sfântul Apostol Simon Zilotul";
            saintName = "Sfântul Apostol Simon Zilotul";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Simone, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
            condac = "Pe cel ce cu tărie a pus învăţăturile înţelepciunii în sufletele binecredincioşilor, cu laudă să fericim toţi pe Simon de Dumnezeu grăitorul, că înaintea scaunului slavei acum stă, şi cu cei fără de trupuri se veseleşte, rugându-se neîncetat pentru noi toţi.";
            videoTropar = "src='https://www.youtube.com/embed/HaD_KCvvpvo?si=5AmnvZCyiUm2ue4q'";
        }

        if (day == 11) {
            saintDay = "Sfântul Sfințit Mucenic Mochie";
            saintName = "Sfântul Mucenic Mochie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Mochie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
            condac = "Întrarmându-te cu pavăza dreptei credinţe, taberele necredincioşilor le-ai sfărâmat, sfinţite mucenice, şi cunună de la Domnul ai primit, Mochie; pentru aceasta şi cu îngerii bucurându-te, izbăveşte de primejdii pe cei ce te laudă pe tine, rugându-te neîncetat pentru noi toţi.";
            videoTropar = "src='https://www.youtube.com/embed/7ZUke72lUR8?si=3dYFH1fcycjABX5E'";
        }

        if (day == 12) {
            saintDay = "Sfântul Mucenic Ioan Valahul";
            saintName = "Sfântul Mucenic Ioan Valahul";
            colors = "gray";
            colorCross = "gray";
            tropar = "Astăzi duhovniceşte prăznuieşte Biserica dreptcredincioşilor, şi cu bucurie strigă: Veniţi, iubitorilor de mucenici, să prăznuim pomenirea cea de peste an a luptelor noului mucenic Ioan! Că acesta, dintre noi cu voia lui Dumnezeu răsărind, în împărăteasca cetate a lui Constantin a înflorit minunat, aducând Stăpânului rod bogat şi bine primit, prin mucenicie. Iar acum se roagă neîncetat în ceruri, să se mântuiască sufletele noastre.";
            condac = "Arătatu-s-a nouă astăzi, cel preaînfrumuseţat cu curăţia, tânărul ostaş al Mântuitorului, luminând pe toţi cei ce strigă: Bucură-te, Ioane, mare mucenice al lui Hristos!";
            videoTropar = "src='https://www.youtube.com/embed/p-u8a0E9U2g?si=sLE0siFzo2iR0rbu'";
        }

        if (day == 13) {
            saintDay = "Sfânta Muceniță Glicheria";
            saintName = "Sfânta Muceniță Glicheria";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Glicheria, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
            condac = "Pe Fecioara şi de Dumnezeu Născătoarea Maria iubind, ţi-ai păzit fecioria ta nestricată, şi din dragostea cea către Domnul îndemnându-te, cu bărbătesc cuget ai pătimit până la moarte. Pentru aceasta Glicheria, cu îndoită cunună, te-a încununat pe tine Hristos Dumnezeu.";
            videoTropar = "src='https://www.youtube.com/embed/jVT0tajaX0w?si=TLAo29p99XcqIcjqY'";
        }

        if (day == 14) {
            saintDay = "Sfântul Mucenic Isidor din Chios";
            saintName = "Sfântul Mucenic Isidor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Isidor, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru. Că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Îndreptător prea mare lumii tu te-ai arătat, sfinte, cu rugăciunile tale cele către Dumnezeu. Pentru aceasta te lăudăm pe tine astăzi, mucenice de Dumnezeu înţelepţite, mărite Isidor.";
            videoTropar = "src='https://www.youtube.com/embed/QJg8OUFZ2wg?si=vJe08oVSLlIne_7P'";
        }

        if (day == 15) {
            saintDay = "Sfântul Cuvios Pahomie cel Mare";
            saintName = "Sfântul Cuvios Pahomie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Arătatu-te-ai mai mare turmei Păstorului celui mare, îndreptând turmele sihaștrilor la staulul cel ceresc, părinte Pahomie, şi schima cea de acolo, cuvioase, pustnicilor deprinzând, şi pe aceasta iarăși o ai învăţat; şi acum împreună cu aceia te bucuri şi te veseleşti în cereştile locaşuri.";
            condac = "Luminător luminos te-ai arătat marginilor lumii şi pustiul l-ai făcut cetate cu mulţime de călugări. Pe tine însuţi te-ai răstignit, Crucea ta pe umere luându-ţi şi cu înfrânarea trupul ţi-ai topit, rugându-te neîncetat pentru noi toţi.";
            videoTropar = "src='https://www.youtube.com/embed/3IAKx71vN8A?si=-LarmZjP29FMcwLM'";
        }

        if (day == 16) {
            saintDay = "Sfântul Cuvios Teodor cel Sfințit";
            saintName = "Sfântul Cuvios Teodor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Teodor; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui ce ţi-a dat ţie putere; slavă Celui ce te-a încununat pe tine; Slavă Celui ce lucrează prin tine tuturor tămăduiri.";
            condac = "În casa lui Dumnezeu ca un finic ai înflorit, roade de fapte bune, Domnului aducând prin prea bună pustnicia ta, părinte cuvioase Teodor. Pentru aceasta te şi fericeşti, ca cel întocmai stătător cu cei fără de trupuri.";
            videoTropar = "src='https://www.youtube.com/embed/YRWDTlsXPPE?si=by2hW5dTd5O_ZU9L'";
        }

        if (day == 17) {
            saintDay = "Sfântul Apostol Andronic și soția sa Iunia";
            saintName = "Sfântul Apostol Andronic";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Andronic roagă pe milostivul Dumnezeu ca să dea iertare de greşeli sufletelor noastre.";
            condac = "Pe steaua cea prealuminoasă, care cu lumina dumnezeieştii înţelepciuni a luminat neamurile, pe Andronic, apostolul lui Hristos, împreună cu înţeleapta Iunia, care s-a nevoit cu dânsul în propovăduire, să-i lăudăm, strigând: rugaţi-vă neîncetat lui Hristos pentru noi toţi.";
            videoTropar = "src='https://www.youtube.com/embed/BoDuB-g6GNk?si=JrNCdwKXjZINKMZI'";
        }

        if (day == 18) {
            saintDay = "Sfinţii Mucenici Petru şi Teodot";
            saintName = "Sfinţii Mucenici Petru şi Teodot";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Petru şi Teodot, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Luminători străluciţi v-aţi arătat dumnezeieşti mucenici  Petru şi Teodot, şi prin strălucirile minunilor luminaţi toată făptura, neîncetat izgonind noaptea cea adâncă a neputinţelor, şi unui Hristos Dumnezeu rugându-vă, ca să dăruiască nouă mare milă.";
            videoTropar = "src='https://www.youtube.com/embed/I02OmKfdMY4?si=zOw6qR05ioYcdW98'";
        }

        if (day == 19) {
            saintDay = "Sfântul Sfințit Mucenic Patrichie, Episcopul Prusei";
            saintName = "Sfântul Mucenic Patrichie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Patrichie întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Ca o sfinţită vistierie a lui lisus, Patrichie, Biserica primind trupul tău, bucurându-se strigă ţie: prin tine toată lumea în pace adâncă se ţine, şi se acoperă de tot eresul nevătămată ca o nebiruită.";
            videoTropar = "src='https://www.youtube.com/embed/UFEROKh7FMY?si=4r8cGeakaaObSZA3'";
        }

        if (day == 20) {
            saintDay = "Sfântul Mucenic Talaleu";
            saintName = "Sfântul mucenic Talaleu";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Talaleu, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Împreună cu mucenicii arătându-te pătimitor te-ai făcut ostaş întrarmat ales împăratului slavei, prin osteneli şi prin chinuri, călcând trufia închinătorilor la idoli. Pentru aceea lăudăm cinstită pomenirea ta, înţelepte Talaleu.";
            videoTropar = "src='https://www.youtube.com/embed/uX_6IJV31JM?si=TyA0iUX3JuigNnWe'";
        }

        if (day == 21) {
            saintDay = "Sfinții Împărați și întocmai cu Apostolii Constantin și mama sa, Elena";
            saintName = "Sfinții Constantin și Elena";
            colors = "red";
            colorCross = "red";
            tropar = "Chipul Crucii Tale pe cer văzându-l şi ca Pavel chemarea nu de la oameni luând, cel între împăraţi Apostolul Tău, Doamne, împărăteasca cetate în mâinile Tale o a pus. Pe care pazeşte-o totdeauna în pace, pentru rugăciunile Născătoarei de Dumnezeu, Unule Iubitorule de oameni.";
            condac = "Constantin astăzi, cu maica sa Elena, Crucea a arătat, lemnul cel preacinstit, care este ruşinarea tuturor iudeilor şi armă credincioşilor împăraţi asupra celor potrivnici. Că pentru noi s-a arătat semn mare, şi în războaie înfricoşător.";
            videoTropar = "src='https://www.youtube.com/embed/fChYLBJfyAs?si=bEYmr0zPwccdu7bA'";
        }

        if (day == 22) {
            saintDay = "Sfântul Mucenic Vasilisc";
            saintName = "Sfântul Mucenic Vasilisc";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Vasilisc, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Întru răbdare tare şi ca un bărbat te-ai arătat şi întru minuni prea minunat, arătat purtând înainte numele lui Hristos, ai ruşinat pe chinuitor. Pentru aceasta te cinstim pe tine, Sfinte Vasilisc preacinstite, pururea strigând: Bucură-te frumuseţea cea luminoasă a mucenicilor.";
            videoTropar = "src='https://www.youtube.com/embed/7Ffsd71l9Rc?si=y31k51TuYLm1K1RV'";
        }

        if (day == 23) {
            saintDay = "Sfântul Ierarh Mihail Mărturisitorul, Episcopul Sinadei";
            saintName = "Sfântul Ierarh Mihail";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Mihail, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
            condac = "Ca un soare mare răsărind, ai luminat pe toţi cu lumina faptelor tale celor bune şi cu strălucirile minunilor, purtătorule de minuni, cel ce eşti numit cu nume îngeresc.";
            videoTropar = "src='https://www.youtube.com/embed/kJHhS2At6l0?si=7cath3__HjGUSM1Q'";
        }

        if (day == 24) {
            saintDay = "Sfântul Cuvios Simeon cel din Muntele Minunat";
            saintName = "Sfântul Cuvios Simeon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Al răbdării stâlp ai fost râvnind cuvioase, părinţilor celor mai dinainte: lui Iov întru patimi, lui losif întru ispite şi vieţii celor fără de trup fiind în trup. Simeoane părintele nostru, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
            condac = "Cele de sus dorind, pe cele de jos ai lepădat şi ca un cer stâlpul făcându-ţi, printr-însul ai strălucit cu raza minunilor cuvioase, şi lui Hristos Dumnezeului tuturor te rogi neîncetat pentru noi toţi.";
            videoTropar = "src='https://www.youtube.com/embed/lzw4qndJf5M?si=yE0ajC35xiTfGQsw'";
        }

        if (day == 25) {
            saintDay = "A treia aflare a Capului Sfântului Ioan, Înaintemergătorul și Botezătorul Domnului";
            saintName = "Sfântul Proroc Ioan";
            colors = "gray";
            colorCross = "gray";
            tropar = "Ca pe o dumnezeiască vistierie ascunsă în pământ, Hristos a descoperit capul tău nouă, Proorocule şi Înaintemergătorule; deci toţi adunându-ne întru aflarea lui, cu cântări de Dumnezeu grăitoare pe Mântuitorul lăudăm, Cel Ce ne mântuieşte pe noi din stricăciune cu rugăciunile tale.";
            condac = "Stâlpul cel luminos şi dumnezeiesc, care s-a arătat în lume, sfeşnicul cel mergător înaintea Soarelui, arătând în toate marginile lumii luminatul şi cinstitul său cap, sfinţeşte pe cei ce cu credinţă se închină lui, şi strigă: înţelepte Botezătorule al lui Hristos, miluieşte-ne pe noi pe toţi.";
            videoTropar = "src='https://www.youtube.com/embed/tUEbiBPsy_k?si=OMhjZX7m1ElD530c'";
        }

        if (day == 26) {
            saintDay = "Sfântul Apostol Carp";
            saintName = "Sfântul Apostol Carp";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sfinte Apostol Carp, roagă pe milostivul Dumnezeu, ca să dăruiască iertare de greşeli sufletelor noastre.";
            condac = "Ca pe o stea prealuminoasă câştigându-te Biserica pe tine, apostole Carp, cu darea cea multă a minunilor tale pururea se luminează; mântuieşte pe cei ce cu credinţă cinstesc pomenirea ta.";
            videoTropar = "src='https://www.youtube.com/embed/npg2CSvnii4?si=zKutPNB6Q-6jyDD7'";
        }

        if (day == 27) {
            saintDay = "Sfântul Mărturisitor Ioan Rusul";
            saintName = "Sfântul Ioan Rusul";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cel ce te-a chemat pe tine de pe pământ la lumea cea cerească, ține și după moarte, neschimbat, trupul tău, Sfinte. Căci tu în Asia ai fost dus prizonier și acolo te-ai unit cu Hristos, Ioane. Deci pe Acela roagă-l să mântuiască sufletele noastre.";
            condac = "Pe Mucenicul cel destoinic și preaînțelept, pe Sfântul Iuliu, pe ostașul Ziditorului, să-l cinstim după dreptate toți credincioșii; că îndrăzneală dobândind la Împăratul ceresc, mijlocește celor care îl laudă, zicând: Bucură-te, de Hristos încununatule.";
            videoTropar = "src='https://www.youtube.com/embed/yOz5AH7CWUU?si=eS8NOFZUSZ5lZ9bu'";
        }

        if (day == 28) {
            saintDay = "Sfântul Ierarh Nichita Mărturisitorul, Episcopul Calcedonului";
            saintName = "Sfântul Ierarh Nichita";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptător credinţei şi chip blândeţilor, învăţător înfrânării te-a arătat pe tine turmei tale adevărul lucrurilor. Pentru aceasta ai câştigat cu smerenia cele înalte, cu sărăcia cele bogate. Părinte Ierarhe Nichita, roagă pe Hristos Dumnezeu ca să mântuiască sufletele noastre.";
            condac = "Strălucind cu lumina faptelor tale, te-ai făcut moştenitor scaunului celui apostolesc, preacuvioase Nichita şi ca un soare ai luminat turma ta, părinte, umplând pe toţi de dumnezeieştile învăţături. Pentru aceasta strigăm Ţie: Bucură-te înfrumuseţarea Calcedonului.";
            videoTropar = "src='https://www.youtube.com/embed/EbzYqP1UaAw?si=EkPVaYwCnF1k9QUo'";
        }

        if (day == 29) {
            saintDay = "Sfânta Muceniță Teodosia, fecioara";
            saintName = "Sfânta Muceniță Teodosia";
            colors = "white";
            colorCross = "transparent";
            tropar = "La fapta bună muceniţă, cu osârdie deprinzându-te, te-ai făcut vas iubit al lui Hristos şi locaş iubit al Preasfântului Duh. Pentru aceasta ai ruşinat pe vrăjmaşul, cel ce se luptă cu neamul omenesc, bine pătimind şi arătat cu sabia credinţei ai ucis pe cel cu nume de fiară, Teodosia; şi bucurându-te te-ai mutat la cer, cerând pururea mare milă, celor ce cu credinţă te cinstesc pe tine.";
            condac = "Cu ostenelile ai câştigat viaţa cea fără osteneală şi în sângiurile tale ai înecat pe vrăjmaşul cel spurcat al Bisericii lui Hristos, prealăudată şi te bucuri cu oştile cele de sus, acoperind pe cei ce săvârşesc pomenirea ta.";
            videoTropar = "src='https://www.youtube.com/embed/5WoeHbiGw4U?si=D09dCjJvKZMydJDa'";
        }

        if (day == 30) {
            saintDay = "Sfântul Cuvios Isaachie Mărturisitorul";
            saintName = "Sfântul Cuvios Isaachie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine părinte cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte Isaachie, duhul tău.";
            condac = "Ca un credincios plăcut al lui Dumnezeu, aprinzându-te cu râvnă, pentru Biserica lui Hristos, zăbalele lui Valent ai ţinut şi pentru închiderea Bisericii, moartea lui cea pierzătoare prooroceşte mai înainte ai spus, preacuvioase. Pentru aceasta roagă-te pururea pentru noi, cei ce te cinstim, Preafericite Isaachie.";
            videoTropar = "src='https://www.youtube.com/embed/BI05TLo9QwU?si=r6w5KFXS5kqqnnXe'";
        }

        if (day == 31) {
            saintDay = "Sfântul Mucenic Ermie";
            saintName = "Sfântul Mucenic Ermie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Ermie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
            condac = "Chinuindu-te cu osârdie pentru Hristos, întru bătrâneţile cele vitejeşti, ţi-ai câştigat bărbăţie mucenice Ermie şi călcând cugetul cel rău al celor fără de lege, ai rămas nevătămat de adăpările cele cu otravă, strigând: Dumnezeu este cu mine şi nimeni împotriva mea.";
            videoTropar = "src='https://www.youtube.com/embed/cW2dT32pkkw?si=qTz57nH_OkrpiJ1r'";
        }


    }



    //Iunie

    if (month == 5) {

        if (day == 1) {
            saintDay = "Sfântul Mucenic Iustin Martirul şi Filosoful și a altui Mucenic Iustin";
            saintName = "Sfântul Mucenic Iustin";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 2) {
            saintDay = "Sfântul Mare Mucenic Ioan cel Nou de la Suceava";
            saintName = "Sfântul Mucenic Ioan cel Nou";
            colors = "gray";
            colorCross = "gray";
            tropar = "Viaţa ta pe pământ bine cârmuind, pătimitorule, cu milostenii şi cu neîncetate rugăciuni şi lacrimi şi iarăşi către pătimire bărbăteşte pornindu-te, necredinţa persienească ai mustrat. Drept aceea Bisericii te-ai făcut întărire şi creştinilor laudă, Sfinte Ioane pururea pomenite.";
        }

        if (day == 3) {
            saintDay = "Sfântul Mucenic Luchilian şi cei împreună cu el patru tineri: Ipatie, Paul, Dionisie și Claudie";
            saintName = "Sfântul Mucenic Luchilian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Luchilian, Ipatie, Paul, Dionisie și Claudie, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 4) {
            saintDay = "Sfinții Mucenici: Zotic, Atal, Camasie și Filip de la Niculițel";
            saintName = "Sfântul Mucenic Zotic";
            colors = "gray";
            colorCross = "gray";
            tropar = "Mucenicii Tăi, Doamne, Zotic, Atal, Camasie și Filip, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 5) {
            saintDay = "Sfântul Sfințit Mucenic Dorotei, Episcopul Tirului";
            saintName = "Sfântul Mucenic Dorotei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Dorotei, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 6) {
            saintDay = "Sfântul Cuvios Ilarion cel Nou, egumenul Mănăstirii Dalmaților";
            saintName = "Sfântul Cuvios Ilarion";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu curgerile lacrimilor tale ai lucrat pustiul cel neroditor şi cu suspinurile cele dintru adânc ai făcut ostenelile tale însutit roditoare; şi te-ai făcut luminător lumii, strălucind cu minunile, Ilarion, părintele nostru. Roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 7) {
            saintDay = "Sfântul Sfințit Mucenic Teodot, Episcopul Ancirei";
            saintName = "Sfântul Mucenic Teodot";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Teodot, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 8) {
            saintDay = "Aducerea moaștelor Sfântului Mare Mucenic Teodor Stratilat";
            saintName = "Sfântul Mucenic Teodor";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cu numirea oştirii celei adevărate, purtătorule de chinuri, al cerescului împărat, voievod preabun te-ai făcut, Sfinte Mare Mucenic Teodor. Căci cu armele credinţei te-ai oştit înţelepţeşte şi ai biruit cetele demonilor şi purtător de biruinţă viteaz te-ai arătat. Pentru aceasta pe tine cu credinţă pururea te fericim.";
        }

        if (day == 9) {
            saintDay = "Sfântul Ierarh Chiril, Arhiepiscopul Alexandriei";
            saintName = "Sfântul Ierarh Chiril";
            colors = "white";
            colorCross = "transparent";
            tropar = "Îndreptătorule al Ortodoxiei, învăţătorule al dreptei cinstiri de Dumnezeu şi al curăţiei şi luminătorule al lumii, podoaba călugărilor cea de Dumnezeu insuflată Sfinte Ierarhe Chiril, înţelepte, cu învăţăturile tale pe toţi i-ai luminat. Alăută duhovnicească, roagă-te lui Hristos Dumnezeu ca să mântuiască sufletele noastre.";
        }

        if (day == 10) {
            saintDay = "Sfântul Sfințit Mucenic Timotei, Episcopul Prusiei, Sfântul Mucenic Alexandru și Sfânta Muceniță Antonina";
            saintName = "Sfântul Mucenic Timotei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Timotei, Alexandru și Antonina, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 11) {
            saintDay = "Sfântul Ierarh Luca, Arhiepiscopul Crimeei";
            saintName = "Sfântul Ierarh Luca";
            colors = "white";
            colorCross = "transparent";
            tropar = "Pe lauda doctorilor şi mândria Simferopolului, pe alesul ierarh al lui Hristos şi ocrotitorul Mănăstirii Dovra, pe Sfinţitul Luca Doctorul să-l lăudăm cu imnuri duhovniceşti şi cu sfinte cântări, că izvorăşte din belşug darurile vindecărilor.";
        }

        if (day == 12) {
            saintDay = "Sfântul Cuvios Onufrie cel Mare";
            saintName = "Sfântul Cuvios Onufrie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Dumnezeul părinţilor noştri, Care faci pururea cu noi după blândeţile Tale, nu îndepărta mila Ta de la noi; ci pentru rugăciunile Sfântului Onufrie cel Mare, în pace îndreptează viaţa noastră.";
        }

        if (day == 13) {
            saintDay = "Sfânta Muceniță Achilina";
            saintName = "Sfânta Muceniță Achilina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Achilina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc, și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 14) {
            saintDay = "Sfântul Proroc Elisei";
            saintName = "Sfântul Proroc Elisei";
            colors = "white";
            colorCross = "transparent";
            tropar = "Cel care a fost înger în trup, temeiul prorocilor, al doilea Înaintemergător al venirii lui Hristos, Ilie măritul, care a trimis de sus lui Elisei dar, bolile goneşte şi pe cei leproşi curăţeşte. Pentru aceasta şi celor care-l cinstesc pe el le izvorăşte tămăduiri.";
        }

        if (day == 15) {
            saintDay = "Sfântul Proroc Amos";
            saintName = "Sfântul Proroc Amos";
            colors = "white";
            colorCross = "transparent";
            tropar = "A prorocului Tău Amos pomenire, Doamne, prăznuind, printr-însul Te rugăm, mântuieşte sufletele noastre.";
        }

        if (day == 16) {
            saintDay = "Sfântul Ierarh Tihon, Episcopul Amatundei";
            saintName = "Sfântul Ierarh Tihon";
            colors = "white";
            colorCross = "transparent";
            tropar = "Locuitor pustiului şi înger în trup şi de minuni făcător te-ai arătat, purtătorule de Dumnezeu, părintele nostru Tihon; cu postul, cu privegherea, cu rugăciunea, cereşti daruri luând, vindeci pe cei bolnavi şi sufletele celor ce aleargă la tine cu credinţă. Slavă Celui Ce ţi-a dat ţie putere; slavă Celui Ce te-a încununat pe tine; Slavă Celui Ce lucrează prin tine tuturor tămăduiri.";
        }

        if (day == 17) {
            saintDay = "Sfinţii Mucenici Manuil, Savel şi Ismail";
            saintName = "Sfântul Mucenic Manuil";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicii Tăi, Doamne, Manuil, Savel şi Ismail, întru nevoinţele lor, cununile nestricăciunii au dobândit de la Tine, Dumnezeul nostru. Că având tăria Ta, pe chinuitori au învins; zdrobit-au şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lor, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 18) {
            saintDay = "Sfântul Mucenic Leontie";
            saintName = "Sfântul Mucenic Leontie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Leontie, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule.";
        }

        if (day == 19) {
            saintDay = "Sfântul Apostol Iuda, rudenia Domnului";
            saintName = "Sfântul Apostol Iuda";
            colors = "white";
            colorCross = "transparent";
            tropar = "Al lui Hristos frate şi mucenic tare, ştiindu-te pe tine, Sfinte Iuda, cu sfinţenie te lăudăm pe tine, cel ce ai călcat înşelăciunea şi credinţa ai păzit. Pentru aceasta astăzi preasfântă pomenirea ta prăznuind, dezlegare de păcate cu rugăciunile tale luăm.";
        }

        if (day == 20) {
            saintDay = "Sfântul Sfințit Mucenic Metodie, Episcopul Patarelor";
            saintName = "Sfântul Mucenic Metodie";
            colors = "white";
            colorCross = "transparent";
            tropar = "Şi părtaş obiceiurilor şi următor scaunelor apostolilor fiind, lucrare ai aflat, de Dumnezeu insuflate, spre suirea privirii la cele înalte. Pentru aceasta, cuvântul adevărului drept învăţând şi cu credinţa răbdând până la sânge Sfinţite Mucenice Metodie, roagă-te lui Hristos Dumnezeu să mântuiască sufletele noastre.";
        }

        if (day == 21) {
            saintDay = "Sfântul Mucenic Iulian din Tars";
            saintName = "Sfântul Mucenic Iulian";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mucenicul Tău, Doamne, Iulian, întru nevoinţa sa, cununa nestricăciunii a dobândit de la Tine, Dumnezeul nostru; că având puterea Ta, pe chinuitori a învins; zdrobit-a şi ale demonilor neputincioase îndrăzniri. Pentru rugăciunile lui, mântuieşte sufletele noastre, Hristoase Dumnezeule";
        }

        if (day == 22) {
            saintDay = "Sfântul Ierarh Grigorie Dascălul, Mitropolitul Țării Românești";
            saintName = "Sfântul Ierarh Grigorie";
            colors = "white";
            colorCross = "transparent";
            tropar = "De dulceata gurii tale celei sfintite ce indulceste Biserica si de focul ravnei tale se minuneaza cetele ceresti, ca ostenindu-te in talmacirea sfintelor invataturi ale parintilor celor de demult, ai daruit turmei tale bucuria cunoasterii lui Dumnezeu, Sfinte Ierarhe Grigorie.";
        }

        if (day == 23) {
            saintDay = "Sfânta Muceniță Agripina";
            saintName = "Sfânta Muceniță Agripina";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Agripina, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 24) {
            saintDay = "Nașterea Sfântului Ioan Botezătorul (Sânzienele - Drăgaica)";
            saintName = "Sfântul Proroc Ioan";
            colors = "red";
            colorCross = "red";
            tropar = "Pomenirea dreptului cu laude, iar ție destul îți este mărturia Domnului, Înaintemergătorule. Că te-ai arătat cu adevărat și decât proorocii mai cinstit, că și a boteza în repejuni pe Cel propovăduit te-ai învrednicit. Drept aceea, pentru adevăr nevoindu-te, bucurându-te bine ai vestit și celor din iad pe Dumnezeu Cel ce s-a arătat în trup, pe Cel ce a ridicat păcatul lumii și ne-a dăruit nouă mare milă.";
        }

        if (day == 25) {
            saintDay = "Sfânta Mare Muceniță Fevronia";
            saintName = "Sfânta Muceniță Fevronia";
            colors = "white";
            colorCross = "transparent";
            tropar = "Mieluşeaua Ta, Iisuse, Fevronia, strigă cu glas mare: pe Tine, Mirele meu, te iubesc și pe Tine căutându-Te mă chinuiesc și împreună mă răstignesc și împreună mă îngrop cu Botezul Tău; și pătimesc pentru Tine, ca să împărățesc întru Tine; și mor pentru tine, ca să viez pentru Tine; ci, ca o jertfă fără de prihană, primește-mă pe mine ceea ce cu dragoste mă jertfesc Ție. Pentru rugăciunile ei, ca un milostiv, mântuiește sufletele noastre.";
        }

        if (day == 26) {
            saintDay = "Sfântul Cuvios David din Tesalonic";
            saintName = "Sfântul Cuvios David";
            colors = "white";
            colorCross = "transparent";
            tropar = "Întru tine părinte cu osârdie s-a mântuit cel după chip; că luând crucea ai urmat lui Hristos; şi lucrând ai învăţat să nu se uite la trup, că este trecător; ci să poarte grijă de suflet, de lucrul cel nemuritor. Pentru aceasta şi cu îngerii împreună se bucură, Preacuvioase Părinte David, duhul tău.";
        }

        if (day == 27) {
            saintDay = "Sfântul Cuvios Samson, primitorul de străini";
            saintName = "Sfântul Cuvios Samson";
            colors = "white";
            colorCross = "transparent";
            tropar = "În răbdare ţi-ai agonisit plata ta, părinte cuvioase; în rugăciuni neîncetat răbdând, pe săraci iubind şi pe aceia îndestulând. Ci te roagă lui Hristos Dumnezeu, Sfinte Samson, milostive fericite, să mântuiască sufletele noastre.";
        }

        if (day == 28) {
            saintDay = "Aducerea moaștelor Sfinților Mucenici Doctori fără de arginți Chir și Ioan";
            saintName = "Sfinții Mucenici Chir și Ioan";
            colors = "white";
            colorCross = "transparent";
            tropar = "Sălăşluindu-se darul Treimii în inimile voastre cele curate, Preafericiţilor Chir şi Ioan, v-aţi arătat înfricoşători izgonitori ai duhurilor celor necurate; şi aţi fost tămăduitori ai neputinţelor, nu numai ai celor descoperite, ci şi ai celor ascunse. Drept aceea, îndrăzneală având către Dumnezeu Cel Iubitor de oameni, prin rugăciunile voastre, cele neîncetate, tămăduiţi patimile noastre.";
        }

        if (day == 29) {
            saintDay = "Sfinții Apostoli Petru și Pavel";
            saintName = "Sfinții Petru și Pavel";
            colors = "red";
            colorCross = "red";
            tropar = "Cei ce sunteți între apostoli mai întâi pe scaun șezători și lumii învățători, Stăpânului tuturor rugați-vă, pace lumii să dăruiască și sufletelor noastre mare milă.";
        }

        if (day == 30) {
            saintDay = "Soborul Sfinților 12 Apostoli";
            saintName = "Sfinții 12 Apostoli";
            colors = "gray";
            colorCross = "gray";
            tropar = "Cei ce sunteţi între apostoli mai întâi pe scaun şezători şi lumii învăţători, Stăpânului tuturor rugaţi-vă să dăruiască pace lumii şi sufletelor noastre mare milă.";
        }


    }


    if (year == 2024) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 28) {
                saintDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 5) {
                saintDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 6) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 7) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 10) {
                saintDay = "IZVORUL TĂMĂDUIRII";
                saintName = "Maica Domnului";
                colors = "red";
                colorCross = "red";
                tropar = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
                condac = "Din izvorul tău cel nesecat, ceea ce eşti de Dumnezeu dăruită, îmi dăruieşti mie, izvorând pururea, curgerile harului tău mai presus de cuvânt. Căci ca ceea ce ai născut mai presus de cuget pe Cu­vântul, te rog să mă rourezi cu darul tău, ca să grăiesc ţie: Bucură-te, apă izbăvitoare!";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (IUNIE)
        if (month == 5) {

            if (day == 13) {
                saintDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }
        }


        //POGORÂREA SFÂNTULUI DUH ȘI SFÂNTA TREIME (IUNIE)
        if (month == 5) {

            if (day == 23) {
                saintDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                saintName = "Sfântul Duh";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 24) {
                saintDay = "SFÂNTA TREIME";
                saintName = "Sfânta Treime";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }




    if (year == 2025) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 13) {
                saintDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 20) {
                saintDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 21) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 22) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 25) {
                saintDay = "IZVORUL TĂMĂDUIRII";
                saintName = "Maica Domnului";
                colors = "red";
                colorCross = "red";
                tropar = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
                condac = "Din izvorul tău cel nesecat, ceea ce eşti de Dumnezeu dăruită, îmi dăruieşti mie, izvorând pururea, curgerile harului tău mai presus de cuvânt. Căci ca ceea ce ai născut mai presus de cuget pe Cu­vântul, te rog să mă rourezi cu darul tău, ca să grăiesc ţie: Bucură-te, apă izbăvitoare!";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 29) {
                saintDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }
        }


        //POGORÂREA SFÂNTULUI DUH ȘI SFÂNTA TREIME (IUNIE)
        if (month == 5) {

            if (day == 8) {
                saintDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                saintName = "Sfântul Duh";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 9) {
                saintDay = "SFÂNTA TREIME";
                saintName = "Sfânta Treime";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }






    if (year == 2026) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 5) {
                saintDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 12) {
                saintDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 13) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 14) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 17) {
                saintDay = "IZVORUL TĂMĂDUIRII";
                saintName = "Maica Domnului";
                colors = "red";
                colorCross = "red";
                tropar = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
                condac = "Din izvorul tău cel nesecat, ceea ce eşti de Dumnezeu dăruită, îmi dăruieşti mie, izvorând pururea, curgerile harului tău mai presus de cuvânt. Căci ca ceea ce ai născut mai presus de cuget pe Cu­vântul, te rog să mă rourezi cu darul tău, ca să grăiesc ţie: Bucură-te, apă izbăvitoare!";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 21) {
                saintDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }

            //POGORÂREA SFÂNTULUI DUH 
            if (day == 31) {
                saintDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                saintName = "Sfântul Duh";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }


        //SFÂNTA TREIME (IUNIE)
        if (month == 5) {



            if (day == 1) {
                saintDay = "SFÂNTA TREIME";
                saintName = "Sfânta Treime";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }









    if (year == 2027) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 25) {
                saintDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 2) {
                saintDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 3) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 4) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 7) {
                saintDay = "IZVORUL TĂMĂDUIRII";
                saintName = "Maica Domnului";
                colors = "red";
                colorCross = "red";
                tropar = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
                condac = "Din izvorul tău cel nesecat, ceea ce eşti de Dumnezeu dăruită, îmi dăruieşti mie, izvorând pururea, curgerile harului tău mai presus de cuvânt. Căci ca ceea ce ai născut mai presus de cuget pe Cu­vântul, te rog să mă rourezi cu darul tău, ca să grăiesc ţie: Bucură-te, apă izbăvitoare!";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 5) {

            if (day == 10) {
                saintDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }


        }


        //POGORÂREA SFÂNTULUI DUH SI SFÂNTA TREIME (IUNIE)
        if (month == 5) {


            if (day == 20) {
                saintDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                saintName = "Sfântul Duh";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 21) {
                saintDay = "SFÂNTA TREIME";
                saintName = "Sfânta Treime";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }







    if (year == 2028) {

        //INTRAREA DOMNULUI IN IERUSALIM (APRILIE)

        if (month == 3) {

            if (day == 9) {
                saintDay = "INTRAREA DOMNULUI ÎN IERUSALIM";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Învierea cea de obşte mai înainte de Patima Ta încredinţând-o, pe Lazăr din morţi l-ai sculat, Hristoase Dumnezeule. Pentru aceasta şi noi, ca pruncii, semnele biruinţei purtând, Ţie Biruitorului morţii strigăm: Osana Celui dintru înălţime, bine eşti cuvântat, Cel ce vine întru numele Domnului.";
            }

        }


        //INVIEREA DOMNULUI (APRILIE)
        if (month == 3) {

            if (day == 16) {
                saintDay = "ÎNVIEREA DOMNULUI (Sfintele Paști)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
            }

            if (day == 17) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 18) {
                saintDay = "Sfintele Paști";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Hristos a înviat din morți, Cu moartea pre moarte călcând, Și celor din morminte, Viață dăruindu-le!.";
                condac = "De Te-ai și pogorât în mormânt, Cel ce ești fără de moarte, dar puterea iadului ai zdrobit și ai înviat ca un biruitor, Hristoase Dumnezeule, zicând femeilor mironosițe: Bucurați-vă! și apostolilor Tăi pace dăruindu-le, Cel ce dai celor căzuți înviere.";
            }

            if (day == 21) {
                saintDay = "IZVORUL TĂMĂDUIRII";
                saintName = "Maica Domnului";
                colors = "red";
                colorCross = "red";
                tropar = "Fecioară Curată, ca un izvor de viață făcător ai zămislit Roua cea după fire necuprinsă și ai izvorât pentru noi nectar de neîncetată bucurie, ce dimpreună cu apa vieții veșnice, din izvorul tău se revarsă în bogate râuri și nesfârșite; pentru care, cu toți bucurându-ne, strigăm: Bucură-te, Izvor al vieții tuturor.";
                condac = "Din izvorul tău cel nesecat, ceea ce eşti de Dumnezeu dăruită, îmi dăruieşti mie, izvorând pururea, curgerile harului tău mai presus de cuvânt. Căci ca ceea ce ai născut mai presus de cuget pe Cu­vântul, te rog să mă rourezi cu darul tău, ca să grăiesc ţie: Bucură-te, apă izbăvitoare!";
            }
        }


        //ÎNĂLȚAREA DOMNULUI (MAI)
        if (month == 4) {

            if (day == 25) {
                saintDay = "ÎNĂLȚAREA DOMNULUI (Ziua Eroilor)";
                saintName = "Domnul Iisus Hristos";
                colors = "red";
                colorCross = "red";
                tropar = "Înălțatu-Te-ai întru slavă, Hristoase, Dumnezeul nostru, bucurie făcând Ucenicilor, cu făgăduința Sfântului Duh, încredințându-se ei, prin binecuvântare, că Tu ești Fiul lui Dumnezeu, Izbăvitorul lumii.";
            }


        }


        //POGORÂREA SFÂNTULUI DUH SI SFÂNTA TREIME (IUNIE)
        if (month == 5) {


            if (day == 4) {
                saintDay = "POGORÂREA SFÂNTULUI DUH (Cincizecimea sau Rusaliile)";
                saintName = "Sfântul Duh";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }

            if (day == 5) {
                saintDay = "SFÂNTA TREIME";
                saintName = "Sfânta Treime";
                colors = "red";
                colorCross = "red";
                tropar = "Binecuvântat ești, Hristoase, Dumnezeul nostru, Cela ce preaînțelepți pe pescari ai arătat, trimițându-le lor Duhul Sfânt și printr-înșii lumea ai vânat, Iubitorule de oameni, mărire Ție.";
            }
        }

    }







    //COLORARE CRUCE, NUME SFÂNT ȘI TEXT TROPAR ÎN ROȘU DACĂ ESTE DUMINICĂ
    if (dayName == "Duminică") {
        colors = "red";
        colorCross = "red";
    };



    if (hour < 5) {
        greetings = "Bine ați venit!";

    }
    if (hour < 10) {
        greetings = "Bună dimineața!";

    }
    else if (hour < 18) {
        greetings = 'Bună ziua!';

    }
    else if (hour < 24) {
        greetings = "Bună seara!";

    }


    document.querySelector("#colorCross").style.color = colorCross;

    document.querySelector('#todayDate').innerHTML = todayDate;

    document.querySelector("#todayDate").style.color = colors;

    document.querySelector(".saintDay").innerHTML = saintDay;

    document.querySelector(".saintDay").style.color = colors;

    document.querySelector("#greetingsForYou").innerHTML = greetings + "</br>" + saintName + " să vă ocrotească!";

    document.querySelector("#tropar").innerHTML = tropar;

    document.querySelector("#condac").innerHTML = condac;


    document.getElementById('videoTropar').innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='560' height='315' align=middle frameborder='0' allowFullScreen  "  + videoTropar + " ></iframe>"




//PAPIRUS 4 CU PORUNCI

    var commands = ['Să iubeşti pe aproapele tău ca pe tine însuţi!', 'Să nu vă jurați nicidecum!', 'Adunați-vă comori în cer!', 'Când faci milostenie, nu trâmbiţa înaintea ta!', 'Când postiți, nu fiți triști, ca fățarnicii!', 'Nu judecați, ca să nu fiți judecați!', 'Cu judecata cu care judecați, cu aceea veți fi judecați!', 'Cereți și vi se va da!', 'Căutați și veți afla!', 'Bateți și vi se va deschide!', 'Iubiți pe vrăjmașii voștri!', 'Binecuvântați pe cei ce vă blestemă!', 'Faceți bine celor ce vă urăsc!', 'Rugați-vă pentru cei ce vă vatămă și vă prigonesc!', 'Căutați mai întâi Împărăția lui Dumnezeu!', 'Cel ce vine la Mine nu va flămânzi!', 'Cel ce crede în Mine are viață veșnică!', 'Nu judecați după înfățișare!', 'Să vă iubiţi unul pe altul, precum v-am iubit Eu!', 'Voi sunteţi prietenii Mei, dacă faceţi ceea ce vă poruncesc!', 'Cel ce crede în Mine, chiar dacă va muri, va trăi!', 'Dacă păziţi poruncile Mele, veţi rămâne întru iubirea Mea!', 'De Mă iubiţi, păziţi poruncile Mele!', 'Ce-i folosește omului să câștige lumea întreagă, dacă își pierde sufletul?', 'Ce ar putea să dea omul, în schimb, pentru sufletul său?', 'Cel ce va crede şi se va boteza se va mântui!', 'Cel ce nu va crede se va osândi!', 'Cel ce nu-și ia crucea și nu-Mi urmeză Mie nu este vrednic de Mine!', 'Veniți la Mine toți cei osteniți și împovărați, și Eu vă voi odihni pe voi!', 'Pentru orice cuvânt deșert pe care-l vor rosti, oamenii vor da socoteală în ziua judecății!'];

    var scrollingText = function (el, leftToRightScroll, period) {
        this.leftToRightScroll = leftToRightScroll;
        this.el = el;
        this.startCommandNumber = Math.floor(Math.random() * commands.length);
        this.period = parseInt(period, 100) || 5300;
        this.txt = '';
        this.tick();
        this.deleting = false;
    };

    scrollingText.prototype.tick = function () {
        var i = this.startCommandNumber % this.leftToRightScroll.length;
        var fullTxt = this.leftToRightScroll[i];

        if (this.deleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = this.txt;

        var that = this;
        var delta = 15 - Math.random() * 100;

        if (this.deleting) { delta /= 2; }

        if (!this.deleting && this.txt === fullTxt) {
            delta = this.period;
            this.deleting = true;
        } else if (this.deleting && this.txt === '') {
            this.deleting = false;
            this.startCommandNumber++;
            delta = 10;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var element = document.querySelectorAll('.biblical-Teachings');
        new scrollingText(element[0], commands, 15300);
    }


 



}); 
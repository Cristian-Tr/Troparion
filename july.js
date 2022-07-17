document.addEventListener('DOMContentLoaded', function () {



    //Calendar with saints
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var saints;
    var colors;
    var colorCross;
    var religiousSongs;



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



    document.querySelector(".saint").innerHTML = "<br>" + saints + "<br>";

    document.querySelector(".saint").style.color = colors;

    document.querySelector("#colorCross").style.color = colorCross;

    document.querySelector("#troparion").innerHTML = "<br>" + religiousSongs + "<br>";

    document.querySelector("#troparion").style.color = colors;



}); 
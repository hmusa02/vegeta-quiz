/**
 * Vegeta Maestro — kviz (vanilla JS)
 */

const questions = [
  {
    question: "Koja je glavna karakteristika začina iz linije paprika?",
    options: [
      "Jelima daju prepoznatljivu crvenu boju",
      "Koriste se samo za slatka jela",
      "Dodaju se isključivo na kraju kuhanja",
    ],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro začini iz linije paprika, poput slatke, ljute ili dimljene paprike jelima daju karakterističnu crvenu boju i aromu, a često se koriste u varivima, gulašima i mesnim jelima. Osim vizualnog efekta, paprika doprinosi i punoći okusa te može biti osnova za začinjavanje. Različite vrste paprike omogućuju prilagodbu intenziteta, od blagog do pikantnog. Time je paprika jedan od najsvestranijih začina u svakodnevnoj kuhinji.",
  },
  {
    question: "Koji začin daje jelima mediteranski karakter?",
    options: ["Kakao", "Bosiljak", "Vanilija"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro bosiljak jelima daje svjež, aromatičan mediteranski karakter i posebno se ističe u kombinaciji s rajčicom, tjesteninom i salatama. Njegov miris podsjeća na sunčane vrtove Mediterana i može značajno obogatiti jednostavna jela. Najbolje ga je dodati pred kraj pripreme kako bi zadržao svoju punu aromu. Odlično se kombinira s češnjakom i maslinovim uljem za poseban mediteranski okus.",
  },
  {
    question: "Koji začin najčešće koristimo za ribu?",
    options: ["Kopar", "Cimet", "Paprika"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro kopar je začin svježeg i blago aromatičnog okusa koji se posebno dobro slaže s ribom i laganim jelima. Često se koristi u umacima na bazi jogurta ili vrhnja, gdje dodatno naglašava svježinu. Dodaje se pred kraj kuhanja kako bi zadržao aromu. Idealan je za jela u kojima želite postići lagan i osvježavajući dojam.",
  },
  {
    question: "Koji začin daje toplu aromu desertima?",
    options: ["Lovor", "Peršin", "Cimet"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro cimet donosi toplu, blago slatkastu notu koja se idealno uklapa u kolače, kompot i tople napitke poput čaja ili kuhanog vina. Njegov prepoznatljiv miris često je ključan za stvaranje osjećaja topline i ugode u jelima. Osim u slatkim receptima, može se koristiti i u slanim jelima poput piletine ili janjetine, gdje daje suptilnu, egzotičnu aromu. Upravo ta svestranost čini ga začinom koji jednostavna jela može pretvoriti u zanimljivije i aromatičnije kulinarsko iskustvo.",
  },
  {
    question: "Koji začin naglašava okus pečenog mesa?",
    options: ["Kurkuma", "Vlasac", "Ružmarin"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro ružmarin je snažan, aromatičan začin koji daje dubinu i intenzitet jelima, posebno mesu i pečenom povrću. Dobro podnosi visoke temperature, pa se često koristi na početku kuhanja ili pečenja. Posebno se ističe uz janjetinu, piletinu i krumpir. Njegova aroma može jednostavna jela pretvoriti u bogatije i izraženije okuse.",
  },
  {
    question: "Za koja jela se često koristi kurkuma?",
    options: [
      "Juhe i jela od piletine",
      "Kolači i slastice",
      "Salate od voća",
    ],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro kurkuma jelima daje karakterističnu zlatno-žutu boju i blagu, zemljanu aromu. Često se koristi u juhama, riži i jelima od piletine, posebno u kombinaciji s drugim začinima. Osim okusa, doprinosi i vizualnoj privlačnosti jela. Jednostavan je način da jelo dobije toplinu i bogatiji izgled.",
  },
  {
    question: "Koji začin daje pikantnost jelima?",
    options: ["Lovor", "Crni papar", "Origano"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro crni papar je jedan od najčešće korištenih začina koji pojačava prirodni okus jela i dodaje blagu pikantnost. Može se koristiti tokom kuhanja ili kao završni dodatak za intenzivniji okus. Papar daje izraženiju aromu. Njegova svestranost čini ga osnovom gotovo svakog jela.",
  },
  {
    question: "Koji začin se često koristi u bešamel umaku?",
    options: ["Kopar", "Chili", "Muškatni oraščić"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro muškatni oraščić jelima daje toplu, bogatu i blago slatkastu aromu koja donosi dodatnu dubinu i sofisticiranost okusa. Često se koristi u slatkim jelima poput kolača i kompota, ali i u slanim receptima kao što su bešamel umak, jela od povrća, riže, tjestenine ili mesa. Zbog svoje intenzivne arome koristi se u manjim količinama, najčešće pred kraj kuhanja kako bi zadržao svoj puni miris.",
  },
  {
    question: "Za aromatični pečeni krompir najbolji izbor je:",
    options: ["Ružmarin", "Cimet", "Kakao"],
    correctAnswer: 0,
    explanation:
      "Kombinacija Vegeta Maestro ružmarina i krompira klasik je jer toplina pečenja pojačava njegovu aromu. Ružmarin je snažan, aromatičan začin koji daje dubinu i intenzitet jelima, posebno mesu i pečenom povrću. Dobro podnosi visoke temperature, pa se često koristi na početku kuhanja ili pečenja. Posebno se ističe uz janjetinu, piletinu i krumpir. Njegova aroma može jednostavna jela pretvoriti u bogatije i izraženije okuse.",
  },
  {
    question: "Koji začin daje egzotičnu notu jelima s rižom?",
    options: ["Peršin", "Curry", "Lovor"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro curry je aromatična mješavina začina koja jelima daje toplinu, dubinu i egzotičan karakter. Sastoji se od više začina poput kurkume, korijandera i đumbira, koji zajedno stvaraju slojevit okus. Idealan je za jela s rižom, piletinom, povrćem i mahunarkama. Osim okusa, jelima daje i prepoznatljivu zlatnu boju i miris koji potiče apetit.",
  },
  {
    question: "Koji začin daje žutu boju jelima?",
    options: ["Kurkuma", "Bosiljak", "Kim"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro kurkuma jelima daje karakterističnu zlatno-žutu boju i blagu, zemljanu aromu. Često se koristi u juhama, riži i jelima od piletine, posebno u kombinaciji s drugim začinima. Osim okusa, doprinosi i vizualnoj privlačnosti jela. Jednostavan je način da jelo dobije toplinu i bogatiji izgled.",
  },
  {
    question: "Za juhu od povrća svjež završni dodir daje:",
    options: ["Kakao", "Peršin", "Vanilija"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro peršin je jedan od najsvestranijih začina koji se odlično slaže s gotovo svim jelima, od juha i variva do salata, tjestenina, rižota, mesa i ribe. Njegova svježa, blago aromatična nota obogaćuje okus jela bez da ga preuzme, zbog čega je čest izbor u svakodnevnoj kuhinji. Najčešće se dodaje pred kraj kuhanja kako bi zadržao svoju svježinu i prirodnu aromu, ali se može koristiti i kao završni dekorativni dodatak na tanjuru.",
  },
  {
    question: "Koji začin dodaje svježinu salatama?",
    options: ["Muškatni oraščić", "Cimet", "Origano"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro origano je nezaobilazan začin mediteranske kuhinje, poznat po svojoj intenzivnoj i blago gorkasto-pikantnoj aromi. Posebno se koristi u jelima od rajčice, pizzama i mesnim jelima, gdje pojačava okus sastojaka. Sušeni origano ima jaču aromu od svježeg, pa se koristi u manjim količinama. Odlično se kombinira s bosiljkom za klasične mediteranske kombinacije.",
  },
  {
    question: "Koji začin je odličan za marinade?",
    options: ["Vlasac", "Cimet", "Paprika"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro paprika daje marinadama prepoznatljivu crvenu boju i blag, aromatičan okus koji se lako uklapa s drugim začinima. Njena nježna nota ne preuzima dominaciju, već pomaže u stvaranju uravnoteženog i punijeg okusa mesa ili povrća. Tijekom mariniranja i pečenja paprika dodatno doprinosi stvaranju privlačne korice i bogatijeg vizualnog dojma jela. Upravo zato je čest izbor u pripremi mesa za roštilj ili pećnicu, gdje pomaže da jelo bude i ukusno i vizualno primamljivo.",
  },
  {
    question: "Koji začin iz smeđe linije često koristimo u kompotima i slasticama?",
    options: ["Cimet", "Chili", "Kopar"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro cimet donosi toplu, blago slatkastu notu koja se idealno uklapa u kolače, kompote i tople napitke poput čaja ili kuhanog vina. Njegov prepoznatljiv miris često je ključan za stvaranje osjećaja topline i ugode u jelima. Osim u slatkim receptima, može se koristiti i u slanim jelima poput piletine ili janjetine, gdje daje suptilnu, egzotičnu aromu. Upravo ta svestranost čini ga začinom koji jednostavna jela može pretvoriti u zanimljivije i aromatičnije kulinarsko iskustvo.",
  },
  {
    question: "Koji začin je čest u talijanskoj kuhinji?",
    options: ["Kurkuma", "Origano", "Kim"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro origano je nezaobilazan začin mediteranske kuhinje, poznat po svojoj intenzivnoj i blago gorkasto-pikantnoj aromi. Posebno se koristi u jelima od rajčice, pizzama i mesnim jelima, gdje pojačava okus sastojaka. Sušeni origano ima jaču aromu od svježeg, pa se koristi u manjim količinama. Odlično se kombinira s bosiljkom za klasične mediteranske kombinacije.",
  },
  {
    question: "Koji začin daje dimljenu notu jelima?",
    options: ["Cimet", "Dimljena paprika", "Kopar"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro dimljena paprika jelima daje prepoznatljiv, bogat i slatkasto-dimljeni okus koji podsjeća na pripremu hrane na roštilju ili otvorenoj vatri. Dobiva se dimljenjem paprike na prirodnom dimu, najčešće od hrastovog drveta, što joj daje posebnu aromu bez dodatnih umjetnih sastojaka. Često se koristi za mariniranje mesa prije pečenja ili grilanja, ali i za začinjavanje juha, variva, umaka i jela od povrća. Posebno je popularna u jelima poput gulaša, paprikaša ili španjolske paelle, gdje daje dubinu i karakter okusa.",
  },
  {
    question: "Za variva dubinu okusa daje:",
    options: ["Lovorov list", "Kakao", "Vlasac"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro lovorov list jelima daje bogatu, aromatičnu i blago gorkastu notu koja doprinosi dubini okusa, posebno u jelima koja se dugo kuhaju. Najčešće se koristi u juhama, varivima, jelima od mesa, graha i kiselog kupusa, ali i u ribljim jelima, marinadama i umacima. Dodaje se na početku kuhanja kako bi se njegova aroma postupno razvila, a prije serviranja se uklanja jer ostaje čvrst i ne omekšava tijekom pripreme. Već i jedan list dovoljan je da obogati jelo, zbog čega se koristi umjereno.",
  },
  {
    question: "Koji začin daje lagano ljutu notu jelima?",
    options: ["Peršin", "Chili", "Bosiljak"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro chili jelima daje pikantnost i intenzitet, a količina se može prilagoditi ovisno o željenoj razini ljutine. Često se koristi u umacima, mesnim jelima i egzotičnim receptima. Može dodatno naglasiti ostale arome u jelu. Idealan je za one koji žele začiniti jelo i dati mu karakter.",
  },
  {
    question: "Koji začin se dobro slaže s mahunarkama?",
    options: ["Cimet", "Kim", "Kopar"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro kim je jedan od najstarijih začina u europskoj kuhinji, poznat po svojoj toploj, blago orašastoj i aromatičnoj noti koja jelima daje prepoznatljiv karakter. Tradicionalno se koristi u jelima od kupusa, svinjetine, krumpira i mahunarki, ali i u juhama, umacima te čak u pekarskim proizvodima poput kruha i peciva. Njegova aroma posebno dolazi do izražaja tijekom kuhanja, pa se često dodaje na početku pripreme kako bi se ravnomjerno razvila. Kim je i čest sastojak zimnice, gdje doprinosi bogatijem i zaokruženijem okusu.",
  },
  {
    question: "Kada se najčešće dodaje mljeveni crni papar u jelo?",
    options: [
      "Tokom kuhanja ili na kraju",
      "Samo prije serviranja",
      "Samo na početku kuhanja",
    ],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro crni mljeveni papar najbolje je dodati pred kraj kuhanja ili neposredno prije serviranja, kako bi zadržao svoju punu aromu i pikantnost. Ako se dodaje prerano, tijekom dugog kuhanja može izgubiti dio svoje intenzivne arome i postati blaži. Zato se često koristi kao završni začin koji dodatno naglašava okus mesa, povrća, jaja ili umaka. Zahvaljujući svojoj svestranosti, može se koristiti i tokom kuhanja za blaži efekt, ali završno dodavanje daje najizraženiji i najsvježiji okus jelu. Upravo zato je papar jedan od ključnih začina za postizanje ravnoteže i finalnog dojma jela.",
  },
  {
    question: "Koji začin daje toplu notu umacima?",
    options: ["Peršin", "Origano", "Muškatni oraščić"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro muškatni oraščić jelima daje toplu, bogatu i blago slatkastu aromu koja donosi dodatnu dubinu i sofisticiranost okusa. Često se koristi u slatkim jelima poput kolača i kompota, ali i u slanim receptima kao što su bešamel umak, jela od povrća, riže, tjestenine ili mesa. Zbog svoje intenzivne arome koristi se u manjim količinama, najčešće pred kraj kuhanja kako bi zadržao svoj puni miris. Posebno se dobro slaže s kremastim jelima, sirevima i jelima od krumpira, gdje daje elegantnu i zaokruženu notu.",
  },
  {
    question: "Koja kombinacija daje mediteranski štih?",
    options: [
      "Bosiljak + origano",
      "Cimet + kim",
      "Kurkuma + chili",
    ],
    correctAnswer: 0,
    explanation:
      "Kombinacija Vegeta Maestro bosiljka i origana jedan je od najprepoznatljivijih spojeva mediteranske kuhinje, jer zajedno stvaraju bogat, aromatičan i uravnotežen okus. Bosiljak daje svježinu i blagu slatkoću, dok origano doprinosi intenzivnijoj, blago pikantnoj i zemljanoj noti. Ova kombinacija posebno se ističe u jelima s rajčicom, poput umaka za tjesteninu, pizze ili povrtnih jela, gdje naglašava prirodne okuse sastojaka. Može se dodati tokom kuhanja kako bi se razvila aroma, ali i na kraju za dodatnu svježinu.",
  },
  {
    question: "Za pikantni završetak salate koristi se:",
    options: ["Chili", "Crni papar", "Kakao"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro crni mljeveni papar najbolje je dodati pred kraj kuhanja ili neposredno prije serviranja, kako bi zadržao svoju punu aromu i pikantnost. Ako se dodaje prerano, tijekom dugog kuhanja može izgubiti dio svoje intenzivne arome i postati blaži. Zato se često koristi kao završni začin koji dodatno naglašava okus mesa, povrća, jaja ili umaka. Zahvaljujući svojoj svestranosti, može se koristiti i tokom kuhanja za blaži efekt, ali završno dodavanje daje najizraženiji i najsvježiji okus jelu. Upravo zato je papar jedan od ključnih začina za postizanje ravnoteže i finalnog dojma jela.",
  },
  {
    question: "Koji začin daje svjež, lagano lukasti okus?",
    options: ["Lovor", "Cimet", "Vlasac"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro vlasac je nježan, aromatičan začin s blagom lukastom notom koji jelima daje svježinu bez intenziteta sirovog luka. Posebno se dobro slaže s jelima od jaja, salatama, juhama, krem sirevima i laganim umacima, gdje dodatno naglašava prirodne okuse sastojaka. Zbog svoje osjetljivosti na toplinu, vlasac se najčešće dodaje na kraju pripreme ili neposredno prije serviranja, kako bi zadržao svoju aromu i svježinu.",
  },
  {
    question: "Koji začin daje toplinu i kompleksnost jelima?",
    options: ["Peršin", "Curry", "Sol"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro curry je aromatična mješavina začina koja jelima daje toplinu, dubinu i egzotičan karakter. Sastoji se od više začina poput kurkume, korijandera i đumbira, koji zajedno stvaraju slojevit okus. Idealan je za jela s rižom, piletinom, povrćem i mahunarkama. Osim okusa, jelima daje i prepoznatljivu zlatnu boju i miris koji potiče apetit.",
  },
  {
    question: "Koji začin je poznat po intenzivnoj aromi i koristi se u malim količinama?",
    options: ["Origano", "Muškatni oraščić", "Kopar"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro muškatni oraščić jelima daje toplu, bogatu i blago slatkastu aromu koja donosi dodatnu dubinu i sofisticiranost okusa. Često se koristi u slatkim jelima poput kolača i kompota, ali i u slanim receptima kao što su bešamel umak, jela od povrća, riže, tjestenine ili mesa. Zbog svoje intenzivne arome koristi se u manjim količinama, najčešće pred kraj kuhanja kako bi zadržao svoj puni miris. Posebno se dobro slaže s kremastim jelima, sirevima i jelima od krumpira, gdje daje elegantnu i zaokruženu notu.",
  },
  {
    question: "Za pečenu piletinu dobar izbor je:",
    options: [
      "Paprika + ružmarin",
      "Cimet + kim",
      "Kopar + kurkuma",
    ],
    correctAnswer: 0,
    explanation:
      "Kombinacija Vegeta Maestro paprike i ružmarina idealna je za pečenu piletinu jer spaja blagu, aromatičnu slatkoću paprike s intenzivnom, mediteranskom notom ružmarina. Paprika doprinosi boji i sočnosti mesa te pomaže u stvaranju privlačne zlatno-crvene korice tijekom pečenja. Ružmarin se dodaje na početku pripreme kako bi tijekom pečenja otpustio svoju aromu i prodro u meso, dok paprika dodatno naglašava okus i vizualni dojam jela. Ova kombinacija posebno dobro funkcionira uz dodatak maslinovog ulja i češnjaka.",
  },
  {
    question: "Koji začin može oplemeniti čak i napitke?",
    options: ["Lovor", "Cimet", "Kim"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro cimet donosi toplu, blago slatkastu notu koja se idealno uklapa u kolače, kompote i tople napitke poput čaja ili kuhanog vina. Njegov prepoznatljiv miris često je ključan za stvaranje osjećaja topline i ugode u jelima. Osim u slatkim receptima, može se koristiti i u slanim jelima poput piletine ili janjetine, gdje daje suptilnu, egzotičnu aromu. Upravo ta svestranost čini ga začinom koji jednostavna jela može pretvoriti u zanimljivije i aromatičnije kulinarsko iskustvo.",
  },
  {
    question: "Ključ savršenog začinjavanja je:",
    options: ["Bez začina", "Što više začina", "Ravnoteža okusa"],
    correctAnswer: 2,
    explanation:
      "Ravnoteža okusa znači pravilno usklađivanje začina kako nijedan ne bi preuzeo dominaciju nad jelom, već da zajedno stvaraju skladnu cjelinu. Cilj je naglasiti prirodne okuse sastojaka, a ne ih prikriti pretjeranim začinjavanjem. To se postiže postupnim dodavanjem začina i kušanjem tokom pripreme, kako bi se prilagodila intenzivnost. Kombiniranjem različitih aroma, svježih, toplih, pikantnih stvara se slojevit i bogat okus. Upravo ta ravnoteža omogućava da jelo bude ukusno, aromatično i ugodno za konzumaciju, bez osjećaja da je neki začin prejak ili suvišan.",
  },
  {
    question: "Koji začin se često koristi u jelima s janjetinom?",
    options: ["Ružmarin", "Cimet", "Kopar"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro ružmarin je snažan, aromatičan začin koji daje dubinu i intenzitet jelima, posebno mesu i pečenom povrću. Dobro podnosi visoke temperature, pa se često koristi na početku kuhanja ili pečenja. Posebno se ističe uz janjetinu, piletinu i krumpir. Njegova aroma može jednostavna jela pretvoriti u bogatije i izraženije okuse.",
  },
  {
    question: "Koji začin daje svježinu jogurt umacima?",
    options: ["Lovor", "Paprika", "Kopar"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro kopar se često koristi u hladnim umacima i preljevima jer ima svjež, blag i aromatičan okus koji odlično nadopunjuje lagane sastojke poput jogurta, vrhnja ili majoneze. Njegova svježina posebno dolazi do izražaja u negrijanim jelima, gdje zadržava svoju punu aromu. Zbog toga je čest sastojak umaka za ribu, salata i raznih hladnih predjela, gdje daje osvježavajući i lagan dojam.",
  },
  {
    question: "Koji začin pojačava aromu gljiva?",
    options: ["Cimet", "Peršin", "Kurkuma"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro peršin je odličan izbor za jela s gljivama jer naglašava njihovu prirodnu aromu bez da je preuzima. Njegova svježa i blaga nota pomaže istaknuti zemljasti okus gljiva i daje jelu uravnoteženiji karakter. Najčešće se dodaje pred kraj pripreme kako bi zadržao svoju svježinu i laganu aromu. Osim što poboljšava okus, peršin doprinosi i vizualnoj privlačnosti jela svojim zelenim tonom.",
  },
  {
    question: "Koji začin se koristi u pripremi azijskih jela?",
    options: ["Đumbir", "Lovor", "Origano"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro đumbir daje svježinu i blagu pikantnost azijskim jelima, čineći ih aromatičnijima i življima. Njegova prepoznatljiva nota unosi laganu toplinu i osvježavajuću kontrast ostalim sastojcima. Često se koristi u kombinaciji s češnjakom, sojinim umakom ili citrusima za postizanje balansiranog okusa.",
  },
  {
    question: "Koji začin ide uz pečene jabuke?",
    options: ["Cimet", "Papar", "Kim"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro cimet i jabuka su klasična kombinacija toplih aroma jer se njihovi okusi savršeno nadopunjuju. Slatkoća i sočnost jabuke ističu toplu, začinsku notu cimeta. Ova kombinacija često se koristi u desertima, ali i toplim napitcima za stvaranje ugodnog i punog okusa.",
  },
  {
    question: "Koji začin daje boju i blag okus varivima?",
    options: ["Kopar", "Slatka paprika", "Vlasac"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro slatka paprika daje varivima prepoznatljivu boju i blag, aromatičan okus koji obogaćuje cjelokupno jelo. Često se koristi kao baza jer se dobro povezuje s ostalim sastojcima poput povrća, mesa i mahunarki. Dodaje se tokom pripreme kako bi se njezina aroma postupno razvila i ravnomjerno rasporedila. Zahvaljujući tome, variva dobivaju puniji, zaokružen okus i privlačniji izgled.",
  },
  {
    question: "Koji začin se dodaje pred kraj kuhanja radi svježine?",
    options: ["Bosiljak", "Lovor", "Peršin"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro peršin se najčešće dodaje na kraju kuhanja kako bi zadržao svoju svježinu i aromu. Time jelo dobiva lagani, svježi završni dojam bez gubitka mirisa. Osim toga, doprinosi i vizualnoj privlačnosti zahvaljujući svojoj zelenoj boji.",
  },
  {
    question: "Koji začin je dobar za krem juhe?",
    options: ["Muškatni oraščić", "Chili", "Kim"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro muškatni oraščić daje krem juhama toplu, blago slatkastu aromu koja zaokružuje njihov okus. Koristi se u malim količinama jer je vrlo intenzivan. Posebno se dobro slaže s juhama od krumpira, bundeve ili drugih kremastih baza.",
  },
  {
    question: "Koji začin daje blagu citrusnu notu?",
    options: ["Korijander", "Cimet", "Lovor"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro korijander daje jelu svjež, aromatičan okus s blagom citrusnom notom zahvaljujući eteričnim uljima, posebno linaloolu, koji podsjeća na limun ili naranču. Osim citrusnog dojma, daje i toplinu te blagu slatkoću, čineći jela aromatično i uravnoteženo.",
  },
  {
    question: "Koji začin je odličan za roštilj?",
    options: ["Lovor", "Dimljena paprika", "Peršin"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro dimljena paprika daje jelima okus kao s roštilja zahvaljujući svojoj karakterističnoj dimljenoj aromi. Dobiva se sušenjem paprike na dimu, što joj daje dubinu i bogatstvo okusa. Čak i mala količina može jelu dati izraženiji i puniji karakter.",
  },
  {
    question: "Koji začin se dobro slaže s tikvicama?",
    options: ["Origano", "Cimet", "Muškatni oraščić"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro origano se odlično slaže s tikvicama jer njegova intenzivna, blago pikantna aroma naglašava njihov blagi i neutralan okus. Ova kombinacija daje povrću izraženiji karakter bez potrebe za puno začina. Posebno je pogodna za pečena ili grilana jela, gdje se aroma origana dodatno razvija.",
  },
  {
    question: "Koji začin daje pikantnu notu gulašu?",
    options: ["Kopar", "Vlasac", "Papar"],
    correctAnswer: 2,
    explanation:
      "Vegeta Maestro papar pojačava dubinu i pikantnost mesnih jela jer naglašava prirodne okuse mesa i daje im izraženiji karakter. Njegova blaga ljutina dodaje slojevitost okusa bez da preuzme dominaciju nad ostalim sastojcima. Može se koristiti tokom pripreme za suptilniji efekt ili pred kraj kako bi zadržao intenzivniju aromu.",
  },
  {
    question: "Koji začin ide uz jela od paradajza?",
    options: ["Lovor", "Kim", "Bosiljak"],
    correctAnswer: 2,
    explanation:
      "Paradajz i Vegeta Maestro bosiljak čine jednu od najpoznatijih kulinarskih kombinacija jer se njihovi okusi prirodno nadopunjuju. Svježina i blaga slatkoća bosiljka savršeno ističu kiselkastu i sočnu aromu paradajza, stvarajući uravnotežen i harmoničan okus. Ova kombinacija posebno je popularna u mediteranskoj kuhinji, u jelima poput umaka za tjesteninu, salata ili pizze. Dodavanjem bosiljka pred kraj pripreme dodatno se naglašava njegova svježina i miris, čime jelo dobiva puniji i prepoznatljiv karakter.",
  },
  {
    question: "Koji začin daje toplu notu toplim napitcima?",
    options: ["Origano", "Cimet", "Kopar"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro cimet oplemenjuje aromu toplih napitaka poput čaja, kave ili kuhanog vina dajući im toplu, blago slatkastu i ugodnu mirisnu notu. Njegov prepoznatljiv miris stvara osjećaj topline i ugode, posebno u hladnijim danima. Dodaje se tokom pripreme ili pred kraj kako bi se aroma ravnomjerno razvila, a može se kombinirati i s drugim začinima poput klinčića ili đumbira. Zahvaljujući tome, jednostavni napitci postaju bogatiji i aromatičniji.",
  },
  {
    question: "Koji začin daje karakter jelima s grahom?",
    options: ["Kim", "Cimet", "Peršin"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro kim se tradicionalno koristi s grahom jer svojom toplom, aromatičnom notom obogaćuje neutralan okus mahunarki i daje jelu puniji karakter. Upravo zato se često dodaje u jela od graha, ali i drugih mahunarki, gdje naglašava okus i čini ga izraženijim. Dodaje se tijekom kuhanja kako bi se njegova aroma ravnomjerno razvila i povezala s ostalim sastojcima. Osim što poboljšava okus, kim doprinosi i tradicionalnom, domaćem karakteru jela poput variva i zimskih specijaliteta.",
  },
  {
    question: "Koji začin se koristi u pikantnim umacima?",
    options: ["Vlasac", "Chili", "Lovor"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro chili jelima daje pikantnost i intenzitet, a količina se može prilagoditi ovisno o željenoj razini ljutine. Često se koristi u umacima, mesnim jelima i egzotičnim receptima. Može dodatno naglasiti ostale arome u jelu. Idealan je za one koji žele začiniti jelo i dati mu karakter.",
  },
  {
    question: "Koji začin daje svjež miris pečenom povrću?",
    options: ["Kakao", "Ružmarin", "Muškatni oraščić"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro ružmarin je snažan i aromatičan začin koji pečenom povrću daje prepoznatljiv, topao i mediteranski miris. Tijekom pečenja oslobađa svoja eterična ulja koja prožimaju povrće i daju mu bogatiji, intenzivniji okus. Najbolje ga je dodati prije pečenja, često u kombinaciji s maslinovim uljem, kako bi se aroma ravnomjerno razvila. Posebno se dobro slaže s krumpirom, tikvicama i korjenastim povrćem.",
  },
  {
    question: "Koji začin može obogatiti omlet?",
    options: ["Peršin", "Cimet", "Kim"],
    correctAnswer: 0,
    explanation:
      "Vegeta Maestro peršin može sjajno obogatiti omlet jer daje svjež i aromatičan okus te boju koja podiže okus jaja na novu razinu. Dodatak peršina u omletu unosi laganu svježinu i aromu, posebno kad se koristi na kraju kuhanja.",
  },
  {
    question: "Koji začin daje toplinu azijskim jelima?",
    options: ["Origano", "Đumbir", "Lovor"],
    correctAnswer: 1,
    explanation:
      "Vegeta Maestro đumbir kao začin koji se obilno koristi u azijskoj kuhinji, daje jelima karakterističnu aromu i topao, blago pikantan okus jer sadrži aromatične spojeve poput gingerola i drugih srodnih tvari. Ti spojevi ne djeluju kao oštra ljutina čilija, nego stvaraju osjećaj ugodne topline i aromatične dubine koji pojačava okus slanih umaka, curryja i woka, a istovremeno se lijepo slaže i sa slatkim elementima u jelima.",
  },
  {
    question: "Za savršeno začinjavanje važno je:",
    options: [
      "Izbjegavati miješanje",
      "Dodati sve odjednom",
      "Dodavati začine postupno",
    ],
    correctAnswer: 2,
    explanation:
      "Dodavanje začina postepeno omogućava bolje kontrolisanje okusa jela i sprječava da neki začin preovlada. Tako se arome ravnomjerno povezuju i razvijaju tokom kuhanja, što doprinosi skladnom i uravnoteženom ukusu. Takođe, olakšava prilagođavanje količine začina prema sastojcima i smanjuje rizik od greške, jer je lakše dodati nego ukloniti začin. Na taj način jelo postaje ukusnije i preciznije začinjeno.",
  },
];

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let answered = false;
let popupOpen = false;
let startPopupOpen = false;
let popupMode = "closed";
let quizTimerId = null;

const QUIZ_TOTAL = 10;
const QUIZ_TIME_LIMIT_MS = 3 * 60 * 1000;

function getRandomQuestions(count) {
  const pool = questions.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
}

function getElements() {
  return {
    questionEl: document.getElementById("question"),
    answersEl: document.getElementById("answers"),
    popup: document.getElementById("popup"),
    explanationEl: document.getElementById("explanation"),
    nextBtn: document.getElementById("nextBtn"),
    quiz: document.getElementById("quiz"),
    result: document.getElementById("result"),
    popupInner: document.querySelector(".quiz-popup__inner"),
  };
}

function openQuizPopup() {
  const { popup } = getElements();
  if (!popup) return;
  popup.hidden = false;
  popup.setAttribute("aria-hidden", "false");
  popupOpen = true;
  document.body.style.overflow = "hidden";
}

function clearQuizTimer() {
  if (quizTimerId) {
    clearTimeout(quizTimerId);
    quizTimerId = null;
  }
}

function exitQuizFlow() {
  clearQuizTimer();
  closePopup();
  const { quiz, result } = getElements();
  if (quiz) quiz.hidden = true;
  if (result) result.hidden = true;
  const intro = document.querySelector(".quiz-intro");
  if (intro) intro.hidden = false;
  const cta = document.querySelector(".shapes-cta");
  if (cta) cta.hidden = false;
  answered = false;
  popupMode = "closed";
}

function closePopup() {
  const { popup, popupInner } = getElements();
  if (!popup) return;
  popup.hidden = true;
  popup.setAttribute("aria-hidden", "true");
  popupOpen = false;
  popupMode = "closed";
  if (popupInner) {
    popupInner.innerHTML = "";
  }
  document.body.style.overflow = "";
}

function renderPopupContent(html) {
  const { popupInner } = getElements();
  if (!popupInner) return;
  popupInner.innerHTML = html;
}

function showCorrectPopup(explanation) {
  popupMode = "correct";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title">Tačan odgovor</h3>
    <p class="quiz-popup__text">${explanation}</p>
    <button type="button" id="popupPrimaryBtn" class="quiz-popup__close">NASTAVI</button>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const primary = document.getElementById("popupPrimaryBtn");
  if (primary) {
    primary.addEventListener("click", () => {
      closePopup();
      nextQuestion();
    });
  }
}

function showWrongPopup() {
  popupMode = "wrong";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title">Netačan odgovor</h3>
    <p class="quiz-popup__text quiz-popup__text--center">Nema veze!<br />Vrati se na početak i pokušaj ponovno!</p>
    <button type="button" id="popupPrimaryBtn" class="quiz-popup__close">POKRENI KVIZ</button>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const primary = document.getElementById("popupPrimaryBtn");
  if (primary) {
    primary.addEventListener("click", () => {
      closePopup();
      startQuiz();
    });
  }
}

function showBravoPopup() {
  popupMode = "bravo";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title">Bravo!</h3>
    <p class="quiz-popup__text quiz-popup__text--center">Uspješno si začinio 10/10 jela!</p>
    <button type="button" id="popupPrimaryBtn" class="quiz-popup__close">PRIJAVI SE</button>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const primary = document.getElementById("popupPrimaryBtn");
  if (primary) {
    primary.addEventListener("click", () => {
      showFormPopup();
    });
  }
}

let supabaseClientCache;

function getSupabaseClient() {
  if (supabaseClientCache !== undefined) return supabaseClientCache;
  const url = window.SUPABASE_URL;
  const key = window.SUPABASE_ANON_KEY;
  if (
    typeof window.supabase === "undefined" ||
    !url ||
    !key ||
    url.includes("YOUR_PROJECT_REF") ||
    key.includes("YOUR_SUPABASE_ANON_KEY")
  ) {
    supabaseClientCache = null;
    return null;
  }
  const mod = window.supabase;
  const createClient =
    mod && (mod.createClient || (mod.default && mod.default.createClient));
  if (typeof createClient !== "function") {
    supabaseClientCache = null;
    return null;
  }
  supabaseClientCache = createClient(url, key);
  return supabaseClientCache;
}

const QUIZ_APPLY_MSG = {
  name: "Molimo vas upišite ime i prezime.",
  address: "Molimo vas upišite adresu.",
  city: "Molimo vas upišite grad.",
  zip: "Molimo vas upišite poštanski broj.",
  emailEmpty: "Molimo vas upišite e-mail adresu.",
  emailInvalid: "Molimo vas upišite ispravnu e-mail adresu.",
  phoneEmpty: "Molimo vas upišite broj telefona.",
  phoneInvalid:
    "Molimo vas upišite ispravan broj telefona (najmanje 6 cifara).",
  duplicate:
    "Već ste se prijavili s ovim e-mailom ili brojem telefona. Svaki korisnik može sudjelovati samo jednom.",
};

function clearQuizApplyFieldErrors(form) {
  if (!form) return;
  form.querySelectorAll("[data-quiz-error-for]").forEach((el) => {
    el.hidden = true;
    el.textContent = "";
  });
  form.querySelectorAll(".quiz-popup__input").forEach((el) => {
    el.removeAttribute("aria-invalid");
  });
}

function setQuizApplyFieldError(form, fieldName, message) {
  const err = form.querySelector(`[data-quiz-error-for="${fieldName}"]`);
  const input = form.querySelector(`[name="${fieldName}"]`);
  if (err) {
    err.textContent = message;
    err.hidden = false;
  }
  if (input) input.setAttribute("aria-invalid", "true");
}

function isValidQuizEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function validateQuizApplicationForm(form) {
  clearQuizApplyFieldErrors(form);
  const fd = new FormData(form);
  const get = (k) => String(fd.get(k) ?? "").trim();
  let ok = true;

  if (!get("name")) {
    setQuizApplyFieldError(form, "name", QUIZ_APPLY_MSG.name);
    ok = false;
  }
  if (!get("address")) {
    setQuizApplyFieldError(form, "address", QUIZ_APPLY_MSG.address);
    ok = false;
  }
  if (!get("city")) {
    setQuizApplyFieldError(form, "city", QUIZ_APPLY_MSG.city);
    ok = false;
  }
  if (!get("zip")) {
    setQuizApplyFieldError(form, "zip", QUIZ_APPLY_MSG.zip);
    ok = false;
  }

  const email = get("email");
  if (!email) {
    setQuizApplyFieldError(form, "email", QUIZ_APPLY_MSG.emailEmpty);
    ok = false;
  } else if (!isValidQuizEmail(email)) {
    setQuizApplyFieldError(form, "email", QUIZ_APPLY_MSG.emailInvalid);
    ok = false;
  }

  const phoneRaw = get("phone");
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  if (!phoneRaw) {
    setQuizApplyFieldError(form, "phone", QUIZ_APPLY_MSG.phoneEmpty);
    ok = false;
  } else if (phoneDigits.length < 6) {
    setQuizApplyFieldError(form, "phone", QUIZ_APPLY_MSG.phoneInvalid);
    ok = false;
  }

  return ok;
}

function isSupabaseUniqueViolation(error) {
  if (!error) return false;
  if (String(error.code) === "23505") return true;
  const m = String(error.message || "").toLowerCase();
  return m.includes("duplicate") || m.includes("unique");
}

async function submitQuizApplication(form) {
  const fd = new FormData(form);
  const row = {
    full_name: String(fd.get("name") || "").trim(),
    address: String(fd.get("address") || "").trim(),
    city: String(fd.get("city") || "").trim(),
    postal_code: String(fd.get("zip") || "").trim(),
    email: String(fd.get("email") || "")
      .trim()
      .toLowerCase(),
    phone: String(fd.get("phone") || "").trim(),
  };

  const client = getSupabaseClient();
  if (!client) {
    console.warn(
      "[quiz] Supabase nije konfigurisan (supabase-config.js) — prijava nije spremljena u bazu.",
    );
    return { ok: true, skipped: true };
  }

  const { error } = await client.from("quiz_applications").insert(row);
  if (error) {
    console.error("[quiz] Supabase insert:", error);
    if (isSupabaseUniqueViolation(error)) {
      return { ok: false, duplicate: true, message: QUIZ_APPLY_MSG.duplicate };
    }
    return { ok: false, message: error.message || "Greška pri slanju." };
  }
  return { ok: true, skipped: false };
}

function showFormPopup() {
  popupMode = "form";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <form id="quizApplyForm" class="quiz-popup__form" novalidate>
      <p id="quizFormError" class="quiz-popup__form-error" hidden></p>
      <div class="quiz-popup__field">
        <input class="quiz-popup__input" name="name" id="quizApplyName" placeholder="Ime i prezime *" required autocomplete="name" aria-describedby="quizApplyNameErr" />
        <p id="quizApplyNameErr" class="quiz-popup__field-error" data-quiz-error-for="name" hidden role="alert"></p>
      </div>
      <div class="quiz-popup__field">
        <input class="quiz-popup__input" name="address" id="quizApplyAddress" placeholder="Adresa *" required autocomplete="street-address" aria-describedby="quizApplyAddressErr" />
        <p id="quizApplyAddressErr" class="quiz-popup__field-error" data-quiz-error-for="address" hidden role="alert"></p>
      </div>
      <div class="quiz-popup__form-row">
        <div class="quiz-popup__field">
          <input class="quiz-popup__input" name="city" id="quizApplyCity" placeholder="Grad *" required autocomplete="address-level2" aria-describedby="quizApplyCityErr" />
          <p id="quizApplyCityErr" class="quiz-popup__field-error" data-quiz-error-for="city" hidden role="alert"></p>
        </div>
        <div class="quiz-popup__field">
          <input class="quiz-popup__input" name="zip" id="quizApplyZip" placeholder="Poštanski broj *" required autocomplete="postal-code" aria-describedby="quizApplyZipErr" />
          <p id="quizApplyZipErr" class="quiz-popup__field-error" data-quiz-error-for="zip" hidden role="alert"></p>
        </div>
      </div>
      <div class="quiz-popup__field">
        <input class="quiz-popup__input" type="email" name="email" id="quizApplyEmail" placeholder="E-mail *" required autocomplete="email" aria-describedby="quizApplyEmailErr" />
        <p id="quizApplyEmailErr" class="quiz-popup__field-error" data-quiz-error-for="email" hidden role="alert"></p>
      </div>
      <div class="quiz-popup__field">
        <input class="quiz-popup__input" type="tel" name="phone" id="quizApplyPhone" placeholder="Broj telefona *" required autocomplete="tel" aria-describedby="quizApplyPhoneErr" />
        <p id="quizApplyPhoneErr" class="quiz-popup__field-error" data-quiz-error-for="phone" hidden role="alert"></p>
      </div>
      <button type="submit" class="quiz-popup__close" id="quizFormSubmitBtn">POŠALJI PRIJAVU</button>
    </form>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const form = document.getElementById("quizApplyForm");
  const errEl = document.getElementById("quizFormError");
  const submitBtn = document.getElementById("quizFormSubmitBtn");
  if (form) {
    form.querySelectorAll(".quiz-popup__input").forEach((input) => {
      input.addEventListener("input", () => {
        const name = input.getAttribute("name");
        if (!name) return;
        const err = form.querySelector(`[data-quiz-error-for="${name}"]`);
        if (err && !err.hidden) {
          err.hidden = true;
          err.textContent = "";
        }
        input.removeAttribute("aria-invalid");
      });
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (errEl) {
        errEl.hidden = true;
        errEl.textContent = "";
      }
      if (!validateQuizApplicationForm(form)) {
        return;
      }
      if (submitBtn) submitBtn.disabled = true;
      const result = await submitQuizApplication(form);
      if (submitBtn) submitBtn.disabled = false;
      if (result.ok) {
        showThanksPopup();
        return;
      }
      if (errEl) {
        errEl.textContent = result.duplicate
          ? result.message
          : result.message ||
            "Slanje nije uspjelo. Provjeri podatke ili pokušaj kasnije.";
        errEl.hidden = false;
      }
    });
  }
}

function showThanksPopup() {
  popupMode = "thanks";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title">Hvala na sudjelovanju!</h3>
    <p class="quiz-popup__text quiz-popup__text--center">Tvoja prijava je uspješno zaprimljena.</p>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
}

function showTimeoutPopup() {
  popupMode = "timeout";
  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title">Vrijeme je isteklo!</h3>
    <p class="quiz-popup__text quiz-popup__text--center">Pokušaj ponovno i osvoji 10/10.</p>
    <button type="button" id="popupPrimaryBtn" class="quiz-popup__close">POKRENI KVIZ</button>
  `);
  openQuizPopup();
  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const primary = document.getElementById("popupPrimaryBtn");
  if (primary) {
    primary.addEventListener("click", () => {
      closePopup();
      startQuiz();
    });
  }
}

function handleQuizTimeout() {
  clearQuizTimer();
  const { quiz, result } = getElements();
  if (quiz) quiz.hidden = true;
  if (result) result.hidden = true;
  showTimeoutPopup();
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return;

  answered = false;
  popupMode = "question";
  const answersHtml = q.options
    .map(
      (opt, index) => `
        <button type="button" class="quiz-popup__answer" data-answer-index="${index}">
          <span class="quiz-popup__answer-key">${String.fromCharCode(65 + index)}</span>
          <span>${opt}</span>
        </button>
      `,
    )
    .join("");

  renderPopupContent(`
    <button type="button" id="popupCloseX" class="quiz-popup__x" aria-label="Zatvori">✕</button>
    <h3 class="quiz-popup__title quiz-popup__title--question">${q.question}</h3>
    <div class="quiz-popup__answers">${answersHtml}</div>
  `);
  openQuizPopup();

  const closeX = document.getElementById("popupCloseX");
  if (closeX) closeX.addEventListener("click", exitQuizFlow);
  const answerButtons = document.querySelectorAll(".quiz-popup__answer");
  answerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number(btn.getAttribute("data-answer-index"));
      selectAnswer(index);
    });
  });
}

function selectAnswer(index) {
  if (answered) return;
  if (popupOpen && popupMode !== "question") return;

  const q = selectedQuestions[currentQuestionIndex];
  if (!q) return;

  answered = true;
  const buttons = document.querySelectorAll(".quiz-popup__answer");
  buttons.forEach((btn) => (btn.disabled = true));

  const isCorrect = index === q.correctAnswer;
  if (isCorrect) {
    score += 1;
  }

  if (buttons[index]) {
    buttons[index].classList.add(
      isCorrect ? "quiz__answer--correct" : "quiz__answer--wrong",
    );
  }
  if (!isCorrect && buttons[q.correctAnswer]) {
    buttons[q.correctAnswer].classList.add("quiz__answer--correct");
  }

  const { nextBtn } = getElements();
  if (nextBtn) nextBtn.disabled = true;
  closePopup();
  if (isCorrect) {
    showCorrectPopup(q.explanation);
  } else {
    showWrongPopup();
  }
}

function nextQuestion() {
  if (popupOpen) return;
  if (!answered) return;

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= selectedQuestions.length) {
    showResult();
    return;
  }

  showQuestion();
}

function showResult() {
  const { quiz, result } = getElements();
  if (quiz) quiz.hidden = true;
  if (result) {
    result.hidden = true;
  }
  clearQuizTimer();
  showBravoPopup();
}

function startQuiz() {
  clearQuizTimer();
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  popupOpen = false;
  selectedQuestions = getRandomQuestions(QUIZ_TOTAL);

  const intro = document.querySelector(".quiz-intro");
  if (intro) intro.hidden = true;
  const cta = document.querySelector(".shapes-cta");
  if (cta) cta.hidden = true;

  const { quiz, result, popup, nextBtn } = getElements();
  if (quiz) quiz.hidden = true;
  if (result) result.hidden = true;
  if (popup) {
    popup.hidden = true;
    popup.setAttribute("aria-hidden", "true");
  }
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.hidden = true;
  }
  document.body.style.overflow = "";

  quizTimerId = setTimeout(handleQuizTimeout, QUIZ_TIME_LIMIT_MS);

  showQuestion();
}

function openStartPopup() {
  const popup = document.getElementById("startPopup");
  if (!popup) {
    startQuiz();
    return;
  }
  popup.hidden = false;
  popup.setAttribute("aria-hidden", "false");
  startPopupOpen = true;
  document.body.style.overflow = "hidden";
}

function closeStartPopup() {
  const popup = document.getElementById("startPopup");
  if (!popup) return;
  popup.hidden = true;
  popup.setAttribute("aria-hidden", "true");
  startPopupOpen = false;
  document.body.style.overflow = "";
}

function initQuiz() {
  const { nextBtn, popup } = getElements();

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (popupOpen) return;
      nextQuestion();
    });
  }

  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        // Prevent accidental close while quiz flow is active.
        if (popupMode === "timeout") {
          closePopup();
        }
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupOpen) {
      exitQuizFlow();
      return;
    }
    if (e.key === "Escape" && startPopupOpen) {
      closeStartPopup();
    }
  });

  const startPopup = document.getElementById("startPopup");
  if (startPopup) {
    startPopup.addEventListener("click", (e) => {
      if (e.target === startPopup) {
        closeStartPopup();
      }
    });
  }

  const closeStartPopupBtn = document.getElementById("closeStartPopupBtn");
  if (closeStartPopupBtn) {
    closeStartPopupBtn.addEventListener("click", closeStartPopup);
  }

  const continueToQuizBtn = document.getElementById("continueToQuizBtn");
  if (continueToQuizBtn) {
    continueToQuizBtn.addEventListener("click", () => {
      closeStartPopup();
      startQuiz();
    });
  }

  const startBtn = document.getElementById("startQuizBtn");
  if (startBtn) {
    startBtn.addEventListener("click", openStartPopup);
  } else {
    startQuiz();
  }

  initPacksSlider();
}

function initPacksSlider() {
  const slider = document.querySelector(".packs-slider__stack");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".packs-slide"));
  const dots = Array.from(slider.querySelectorAll(".packs-slider__dot"));
  const prevBtn = slider.querySelector(".packs-slider__nav--prev");
  const nextBtn = slider.querySelector(".packs-slider__nav--next");

  if (!slides.length) return;

  let current = 0;

  function render(idx) {
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === current);
      dot.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", () => render(current - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => render(current + 1));
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => render(i));
  });

  render(0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuiz);
} else {
  initQuiz();
}

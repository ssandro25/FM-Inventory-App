import Pic1 from "@/assets/images/book/1.png";
import Pic2 from "@/assets/images/book/2.png";
import Pic3 from "@/assets/images/book/3.png";
import Pic4 from "@/assets/images/book/4.png";
import Pic5 from "@/assets/images/book/5.png";

export default {
    foresterName: localStorage.getItem('foresterName') ? JSON.parse(localStorage.getItem('foresterName')) : '',

    forestArea: localStorage.getItem('forestArea') ? JSON.parse(localStorage.getItem('forestArea')) : [],

    forestAreaID: null,

    quarterID: null,

    literID: null,

    // Work Space
    workSpace: localStorage.getItem('workSpace') ? JSON.parse(localStorage.getItem('workSpace')) : [],

    // workSpaceID: null,

    book: [
        { id: 1, label_ge: 'აღმოსავლური წიფელი', label_lat: 'Fagus Orientalis', description: '20-40 მ სიმაღლის ხეა. გლუვი, რუხი ან თეთრი ფერის ქერქით. ფოთლები რიგ-რიგად ორ მწკრივად არის განლაგებული. ფორმით ელიფსურიდან უკუკვერცხისებურამდე. კიდეებზე ოდნავ ტალღისებური ან ოდნავ დაკბილულია. ზედა მხრიდან მუქი მწვანე ფერისაა, პრიალა, შიშველი. ქვედა მხარე ღია მწვანეა, ძარღვების გაყოლებაზე შებუსული. იზრდება დაბლობიდან სუბალპურ სარტყლამდე. გავრცელებულია მთელ საქართველოში, გარდა თუშეთისა და აღმოსავლეთ საქართველოს ჭალის ტყეებისა. გავრცელების საერთო არეალი მოიცავს კავკასიას, სამხრეთ ევროპას, მცირე აზიასა და ირანს.', image: Pic1 },
        { id: 2, label_ge: 'კავკასიური რცხილა', label_lat: 'Carpinus betulus', description: 'ხე არყისებრთა ოჯახისა. მისი სიმაღლე 35 მ აღწევს. აქვს გლუვი[1] ან ოდნავ დამსკდარი ქერქი. ფოთლები შიშველია, მოკლეყუნწიანი, ფირფიტა მოყვანილობით მოგრძოკვერცხისებურია, წაწვეტებული, ორმაგხერხკბილა. კვირტები ოვალურია, მოწითალო მურა ფერის. მამრობითი ყვავილედი მჭადაა, ყლორტის ძირებში განლაგებული. მდედრობითი ყვავილედი კენწრულია. ნაყოფის საბურველი სამნაკვთიანია, თვითონ ნაყოფი კაკალია. ყვავის მარტ-აპრილში, ნაყოფმსხმოიარობს ივნის-ივლისში.', image: Pic2 },
        { id: 3, label_ge: 'ქართული მუხა', label_lat: 'Quercus iberica', description: 'ფოთოლმცვენი ხე წიფლისებრთა ოჯახისა, რომლის სამშობლოა კავკასია (გავრცელებულია აგრეთვე შავი ზღვის სანაპიროზე ჩრდილო-აღმოსავლეთი თურქეთის ტერიტორიაზე, მცირე აზიასა და ირანშიც).[1] ქართული მუხა წარმოადგენს საკმაოდ მოზრდილ ხეს, რომელიც 20-25 მეტრის სიმაღლემდე იზრდება, იშვიათ შემთხვევებში კი 40 მეტრსაც აღწევს. Q. iberica სინათლისა და სითბოს მოყვარული ხეა, ფართოდაა გავრცელებული აღმოსავლეთი საქართველოს უფრო მშრალ რეგიონებში (ტოპონიმი „იბერია“ აღმოსავლეთი საქართველოს ეკვივალენტურია). მიუხედავად ამისა, იგი შეიძლება დასავლეთი საქართველოს ნოტიო ჭალებშიც შეგვხვდეს, სადაც ხშირად შედარებით მშრალ, ციცაბო ფერდობებზე წმინდა რაყას ქმნის. ბუნებრივ პირობებში მრავლდება თესლით. ნაყოფმსხმოიარობს 15-20 წლისა. ბუნებრივი განახლება ცუდი და ნელია.', image: Pic3 },
        { id: 4, label_ge: 'აღმოსავლური ნაძვი', label_lat: 'Picea orientalis', description: 'წიწვოვანი მცენარე ფიჭვისებრთა ოჯახისა. ფართოდაა გავრცელებული ჩრდილო-აღმოსავლეთ ევროპაში, მცირედ — ალპებში, კარპატებში, ბალკანეთის ნახევარკუნძულის მთიან ნაწილებში, აგრეთვე საქართველოშიც.[1] სიმაღლეში 30 მ-ს აღწევს (იშვიათად 50 მ-ს). აქვს კონუსისებური ფორმა. წიწვები (ფოთლები) სიგრძეში 1–2,5 სმ-მდეა, რომელთა სიცოხლე ექვს და მეტ წელს გრძელდება. გირჩა 15 სმ სიგრძისა და 4 სმ სიგანისაა, თესლი კვერცხისებური-წამახვილებული ფორმისა და 4 მმ სიგრძისაა. ჩვეულებრივი ნაძვი თესლს იძლევა 20–60 წლის ასაკიდან, 4–5 წელიწადში ერთხელ. ცოცხლობს საშუალოდ 250–300 წელი, მაგრამ არსებობს უფრო ხნიერი ნაძვებიც (მაგ. 468 წლის).', image: Pic4 },
        { id: 5, label_ge: 'კავკასიური სოჭი, ნორდმანის სოჭი', label_lat: 'Abies nordmanniana', description: 'მარადმწვანე წიწვოვანი ხე ფიჭვისებრთა ოჯახისა. მისი სიმაღლე 50 მ აღწევს, დიამეტრი 1,5 მ. შეკრულ ხეთადგომაში მისი პარამიდული ვარჯი დიდ სიმაღლეზე ტოტებისაგან გაწმენდილია, ეული ხე კი ძირიდანვე დატოტვილია, სიბერეში გადასულ ხეს ქერქი ღრმად და ტალღისებრად აქვს დაღარული. 2-3 (4) სმ სიგრძისა და 2-2,5 (3) მმ სიგანის წიწვები ზემოდან მუქი მწვანეა, ქვემოდან კი 2 თეთრი ზოლი გასდევს.', image: Pic5 },
    ],

    // 1 Macket
    soilCategory: [
        {id: '3', name: '3 - კორომი ბუნებრივი წარმოშობის'},
        {id: '4', name: '4 - ბუნებრივი ხელუხლებელი ტყე'},
        {id: '5', name: '5 - ბიოლოგიური 0,1-0,4 სიხშირის კორომი'},
        {id: '6', name: '6 - ნაბელი კორომი'},
        {id: '7', name: '7 - კორომი რეკონსტრუქციის სტადიაში'},
        {id: '8', name: '8 - კორომი, რომლის შემადგენლობაში არის ხელოვნურად წარმოშობილი სახეობა'},
        {id: '9', name: '9 - კორომი საბურველ ქვეშ კრონაშეუკვრელი კულტურებით'},
        {id: '10', name: '10 - ვარჯშეკრული ტყის კულტურები'},
        {id: '11', name: '11 - რეკონსტრუქციით მიღებული კულტურები'},
        {id: '17', name: '17 - კულტურები რეკონსტრუქციის სტადიაში'},
        {id: '31', name: '31 - ვარჯშეუკვრელი კულტურები'},
        {id: '40', name: '40 - სანერგე'},
        {id: '41', name: '41 - პლანტაციები მერქნის მისაღებად'},
        {id: '53', name: '53 - ნახანძრალი'},
        {id: '54', name: '54 - დაღუპული კორომი'},
        {id: '57', name: '57 - ტყენაკაფი'},
        {id: '60', name: '60 - ველობი'},
        {id: '61', name: '61 - უტყეო სივრცე'},
        {id: '72', name: '72 - ლანდშაფტური ველობი'},
        {id: '82', name: '82 - სახნავი'},
        {id: '83', name: '83 - სათიბი'},
        {id: '84', name: '84 - საძოვარი (გასადევარი)'},
        {id: '87', name: '87 - საქონლის გადასარეკი ტრასა'},
        {id: '101', name: '101 - ტბა'},
        {id: '102', name: '102 - მდინარე'},
        {id: '103', name: '103 - ნაკადულები'},
        {id: '104', name: '104 - საგუბარი'},
        {id: '105', name: '105 - წყალსაცავი'},
        {id: '106', name: '106 - არხები'},
        {id: '107', name: '107 - მელიორაციული არხები'},
        {id: '108', name: '108 - საკალმახე'},
        {id: '109', name: '109 - წყლის ბასეინი'},
        {id: '110', name: '110 - ბაღი'},
        {id: '111', name: '111 - ვენახი'},
        {id: '112', name: '112 - თუთის პლანტაცია'},
        {id: '114', name: '114 - ბოსტანი'},
        {id: '115', name: '115 - კულტურული კენკრის ბაღი'},
        {id: '113', name: '113 - ბოსტანი სამრეწველო მნიშვნელობის '},
        {id: '121', name: '121 - რკინიგზა'},
        {id: '123', name: '123 - გზები'},
        {id: '128', name: '128 - მუდმივი ბილიკები '},
        {id: '129', name: '129 - საკვარტალე სირონები'},
        {id: '140', name: '140 - ხანძარსაწინააღმდეგო ზოლები '},
        {id: '161', name: '161 - საკარმოდამო ნაკვეთი'},
        {id: '162', name: '162 - კორდონები'},
        {id: '163', name: '163 - კერძო (მიტაცებული) საკარმიდამო ნაკვეთი'},
        {id: '164', name: '164 - ხე-ტყის საწყობი'},
        {id: '165', name: '165 - საფუტკრე'},
        {id: '168', name: '168 - ეკლესია, მონასტერი'},
        {id: '170', name: '170 - კემპინგი'},
        {id: '171', name: '171 - სპორტული მოედანი'},
        {id: '172', name: '172 - სხვადასხვა დასასვენებელი ნაგებობები'},
        {id: '179', name: '179 - ისტორიულ-არქიტექტორული ძეგლი'},
        {id: '182', name: '182 - პლიაჟი'},
        {id: '185', name: '185 - სასაფლაო'},
        {id: '210', name: '210 - გამოუყენებელი მიწები'},
        {id: '211', name: '211 - ხევები'},
        {id: '212', name: '212 - ხრამები'},
        {id: '213', name: '213 - ღვარცოფის მუდმივი კალაპოტი'},
        {id: '214', name: '214 - გაშიშვლებული ფერდობი'},
        {id: '215', name: '215 - ქვანაყარი'},
        {id: '216', name: '216 - ქვიშები'},
        {id: '217', name: '217 - ჭაობი'},
        {id: '218', name: '218 - კლდეები'},
        {id: '219', name: '219 - ზვავის მუდმივი კალაპოტი'},
        {id: '220', name: '220 - ჩამონაშალი'},
        {id: '221', name: '221 - მეწყერი'},
        {id: '225', name: '225 - მყინვარი'},
        {id: '227', name: '227 - მდინარის კალაპოტი'},
        {id: '232', name: '232 - კარსტული წარმონაქმნი'},
        {id: '240', name: '240 - კარიერები'},
        {id: '241', name: '241 - ტორფის დამუშავების ადგილი'},
        {id: '243', name: '243 - ნაგვის დასაყრელი ადგილი'},
        {id: '244', name: '244 - ჭაბურღილი'},
        {id: '245', name: '245 - საბაგირო'},
        {id: '248', name: '248 - ელექტროგადამცემი ხაზები '},
        {id: '249', name: '249 - კავშირგაბმულობის ხაზები'},
        {id: '250', name: '250 - გაზსადენები'},
        {id: '251', name: '251 - ნავთობსადენი'},
        {id: '252', name: '252 - წყალსადენი'},
        {id: '256', name: '256 - საბაგირო გზა'},
    ],

    longTermUseLease: [
        {id: '5', name: '5 - თანდათანობითი ჭრა'},
        {id: '6', name: '6 - ჯგუფურ-ამორჩევითი ჭრა'},
        {id: '7', name: '7 - ნებით-ამორჩევითი ჭრა'},
        {id: '8', name: '8 - ხანგრძლივი თანდათანობითი ჭრა'},
        {id: '9', name: '9 - პირწმინდა ჭრები'},
    ],

    exposition: [
        {id: '1', name: 'ჩ'},
        {id: '2', name: 'ჩდ'},
        {id: '3', name: 'ჩა'},
        {id: '4', name: 'ს'},
        {id: '5', name: 'სდ'},
        {id: '6', name: 'სა'},
        {id: '7', name: 'დ'},
        {id: '8', name: 'ა'},
    ],

    inclination: [
        {id: '1', name: '0-5'},
        {id: '2', name: '6-10'},
        {id: '3', name: '11-15'},
        {id: '4', name: '16-20'},
        {id: '5', name: '21-25'},
        {id: '6', name: '26-30'},
        {id: '7', name: '31-35'},
        {id: '8', name: '36 და მეტი'},
    ],

    elevation: [
        {id: '1', name: '0-250'},
        {id: '2', name: '251-500'},
        {id: '3', name: '501-750'},
        {id: '4', name: '751-100'},
        {id: '5', name: '1001-1250'},
        {id: '6', name: '1251-1500'},
        {id: '7', name: '1501-1750'},
        {id: '8', name: '1751-2000'},
        {id: '9', name: '2001-2250'},
        {id: '10', name: '2251-2500'},
        {id: '11', name: '2501-2750'},
        {id: '12', name: '2751-3000'},
    ],

    gfdu: [
        {
            id: '1',
            name: '1 - ტყე, რომელსაც მინიჭებული აქვს დაცული ტერიტორიის სტატუსი. მისი მართვა ხორციელდება დაცული ტერიტორიების შესახებ საქართველოს კანონმდებლობისა და მენეჯმენტის გეგმის შესაბამისად;'
        },
        {
            id: '2',
            name: '2 - ბუნებრივი ლანდშაფტის წარმომქმნელი ჭალის ტყე და არიდული ტყე, აგრეთვე ტყე, რომელშიც ეროვნულ დონეზე დაცული ტყის შემქმნელი სახეობების კონცენტრაცია მაღალია (გაბატონებულია).'
        },
        {id: '1', name: '1 - სუბალპური ტყე'},
        {
            id: '2',
            name: '2 - ტყის შემქმნელი სახეობებით დაუფარავ სივრცეებს შორის მდებარე, ამ კოდექსის მე-2 მუხლის „ბ.ა“ ქვეპუნქტით განსაზღვრული 30 ჰა-მდე ფართობის ტყე; '
        },
        {id: '3', name: '3 - ზვავის ან ღვარცოფის მუდმივი კალაპოტის გასწვრივ მდებარე, 200 მ-მდე სიგანის ტყე; '},
        {id: '4', name: '4 - 35 გრადუსზე მეტი დაქანების ფერდობზე მდებარე ტყე;'},
        {
            id: '5',
            name: '5 - ფლატის, დამეწყრილი ადგილის, ჩამონაშლის, კარსტული წარმონაქმნის, მთის დედაქანის მიწის ზედაპირზე გამოსვლის ადგილის ირგვლივ მდებარე, 100 მ-მდე სიგანის ტყე; '
        },
        {
            id: '6',
            name: '6 - რკინიგზის ან საავტომობილო გზის გასწვრივ მდებარე, მისი მიწის ვაკისიდან 100 მ-მდე სიგანის ტყე'
        },
        {id: '7', name: '7 - მდინარის, ტბის ან წყალსაცავის ნაპირიდან 100 მ-მდე სიგანის ტყე;'},
        {id: '8', name: '8 - ქვათაცვენის ან კლდოვანი ტერიტორიის ნაპირიდან 50 მ-მდე რადიუსში მდებარე ტყე;'},
        {id: '9', name: '9 - ბუნებრივი გამოქვაბულიდან 50 მ-მდე რადიუსში მდებარე ტყე;'},
        {id: '10', name: '10 - ეროზირებულ ფართობზე და ამ ფართობიდან 100 მ-მდე რადიუსში მდებარე ტყე;'},
        {id: '11', name: '11 - მცოცავ ნიადაგზე და ამ ნიადაგიდან 100 მ-მდე რადიუსში მდებარე ტყე;'},
        {id: '12', name: '12 - მეწყერსაშიშ ფერდობზე და ამ ფერდობიდან 100 მ-მდე რადიუსში მდებარე ტყე;'},
        {id: '13', name: '13 - წყლის სათავე ნაგებობიდან 100 მ-მდე რადიუსში მდებარე ტყე;'},
        {
            id: '14',
            name: '14 - კულტურული მემკვიდრეობის დამცავი ზონა, კულტურის/ისტორიული ძეგლიდან 250 მ-მდე რადიუსში მდებარე ტყე.'
        },
        {id: '1', name: '1 - კურორტის სანიტარიული დაცვის ზონაში მდებარე ტყე;'},
        {
            id: '2',
            name: '2 - სამკურნალო დაწესებულებიდან ან მინერალური წყაროდან 1 კმ-ის რადიუსში მდებარე ტყის უბანი. შესაბამისი მანძილი წყალგამყოფით იზღუდება;'
        },
        {
            id: '3',
            name: '3 - ქალაქის ან სხვა დასახლების მიმდებარე ტერიტორიაზე არსებული ტყე, რომელსაც მოსახლეობა მასობრივი დასვენებისთვის, ტურისტული და სპორტულ-გამაჯანსაღებელი საქმიანობისთვის იყენებს.'
        },
        {id: '19', name: '19 - თაფლის მომცემი მცენარეების უბნები'},
        {id: '20', name: '20 - ეტალონი კორომები'},
        {id: '21', name: '21 - პლიუსური კორომები'},
        {id: '22', name: '22 - ტყის უბნები, რომლებშიც მიმდინარეობს სამეცნიერო სამუშაოები'},
        {id: '23', name: '23 - სასმელი წყლის წყალშემკრები აუზის ტყის უბნები'},
        {id: '24', name: '24 - ბიოლოგიური 0,1-0,4 სიხშირის ტყეები'},
        {id: '25', name: '25 - ბუჩქნარები'},
        {id: '26', name: '26 - V-Vა ბონიტეტის ტყეები (5-5ა)'},
        {id: '27', name: '27 - დაბალი სიხშირის (0,5<) კორომები არადამაკ. განახლებით'},
        {
            id: '28',
            name: '28 - 0,6 და ნაკლები სიხშირის კორომები მარადმწვანე ქვეტყით, მაყვლით, გვიმრით და არადამაკმაყოფილებელი განახლებით'
        },
    ],

    erosionType: [
        {id: '1', name: '1 - წყლისმიერი'},
        {id: '2', name: '2 - ქარისმიერი'},
    ],

    erosionDegree: [
        {id: '1', name: '1 - სუსტი'},
        {id: '2', name: '2 - საშუალო'},
        {id: '3', name: '3 - ძლიერი'},
    ],

    // 2 Macket

    activity: [
        {id: '1', name: '1 - პირწმინდა ჭრა'},
        {id: '5', name: '5 - თანდათანობითი ორ ჯერიანი ჭრა'},
        {id: '7', name: '7 - ჯგუფურ-ამორჩვეითი ჭრა'},
        {id: '8', name: '8 - ნებით-ამორჩევითი ჭრა'},
        {id: '11', name: '11 - დაავადებული ხეების ჭრა'},
        {id: '12', name: '12 - რეკონსტრუქციული პირწმინდა ჭრა '},
        {id: '13', name: '13 - რეკონსტრუქციული ნაწილობრივი ჭრა'},
        {id: '14', name: '14 - სპეციალური ჭრა ამორჩევით'},
        {id: '15', name: '15 - მარადმწვანე ქვეტყის ჭრა ზოლებად'},
        {id: '16', name: '16 - სანიტარილი ჭრა'},
        {id: '17', name: '17 - ჩახერგილობის გაწმენდა'},
        {id: '18', name: '18 - ზეხმელის ჭრა'},
        {id: '19', name: '19 - სპეციალური პირწმინდა ჭრა'},
        {id: '20', name: '20 - განათებითი ჭრა'},
        {id: '25', name: '25 - გაწმენდითი ჭრა'},
        {id: '30', name: '30 - გამოხშირვითი ჭრა'},
        {id: '35', name: '35 - გავლითი ჭრა'},
        {id: '36', name: '36 - ერთეული ხეების ჭრა'},
        {id: '50', name: '50 - ტყის კულტურები ღია ფართობზე'},
        {id: '51', name: '51 - ტყის კულტურების რეკონსტრუქცია'},
        {id: '55', name: '55 - მინერალიზაცია ნიადაგის'},
        {id: '56', name: '56 - ბუნებრივი განახლების ხელისშეწყობა აჩიჩქვნა'},
        {id: '57', name: '57 - ტყის კულტურების მოვლა'},
        {id: '60', name: '60 - ბუნებრივი განახლების ხელისშეწყობა შეღობვა'},
        {id: '64', name: '64 - ტყის კულტურების დამატება'},
        {id: '65', name: '65 - ბუნებრივი განახლება - გაწმენდა, შერგვა/შეთესვა'},
        {id: '66', name: '66 - სანერგეების მოწყობა'},
        {id: '67', name: '67 - პლანტაციების მოწყობა'},
        {id: '74', name: '74 - ბაქნებად ნიადაგის დამუშავება'},
        {id: '75', name: '75 - საქონლის ძოვება'},
        {id: '82', name: '82 - ბუჩქნარების მოჭრა სათიბებზე'},
        {id: '86', name: '86 - ძირეული გაუმჯობესება სათიბების'},
        {id: '87', name: '87 - ზედაპირული გაუმჯობესება სათიბების'},
        {id: '91', name: '91 - სირონების გაჭრა'},
        {id: '92', name: '92 - სირონების გაწმენდა'},
        {id: '94', name: '94 - ანშლანგების დაყენება'},
        {id: '95', name: '95 - შეკეთება'},
        {id: '96', name: '96 - კაპიტალური შეკეთება'},
        {id: '97', name: '97 - დასასვენებელი ადგილების მოწყობა'},
        {id: '106', name: '106 - ტურისტული თავშეყრის ადგილების მოწყობა'},
        {id: '107', name: '107 - პარკირების ადგილების მოწყობა'},
        {id: '121', name: '121 - გზების შეკეთება'},
        {id: '130', name: '130 - სამკურნალო ნედლეულის დამზადება'},
        {id: '134', name: '134 - კენკროვნების დამზადება'},
        {id: '140', name: '140 - ძოვება აკრძალულია'},
        {id: '141', name: '141 - გათიბვა აკრძალულია'},
        {id: '144', name: '144 - მელიორაცია'},
    ],

    targetSpecies: [
        {id: '1', name: 'წფ'},
        {id: '2', name: 'რც'},
        {id: '3', name: 'ნძ'},
    ],

    // 3 Macket
    dominantSpecies: [
        {id: '1', name: 'test1'},
        {id: '2', name: 'test2'},
        {id: '3', name: 'test3'},
    ],

    siteIndex: [
        {id: '1', name: 'I'},
        {id: '2', name: 'Iა'},
        {id: '3', name: 'II'},
        {id: '4', name: 'III'},
        {id: '5', name: 'IV'},
        {id: '6', name: 'V'},
        {id: '7', name: 'Vა'},
    ],

    siteIndexType: [
        {id: '1', name: 'test1'},
        {id: '2', name: 'test2'},
        {id: '3', name: 'test3'},
    ],

    forestType: [
        {id: '1', name: '1 - წივ'},
        {id: '2', name: '2 - ნბხ'},
        {id: '3', name: '3 - დეკ'},
        {id: '4', name: '4 - მოც'},
        {id: '5', name: '5 - მკდ'},
        {id: '6', name: '6 - გვმ'},
        {id: '7', name: '7 - მაყ'},
        {id: '8', name: '8 - იელ'},
        {id: '9', name: '9 - ჭყ'},
        {id: '10', name: '10 - შქ'},
        {id: '11', name: '11 - წყ'},
        {id: '12', name: '12 - სუბ'},
        {id: '13', name: '13 - თხ'},
        {id: '14', name: '14 - ქრბ'},
        {id: '15', name: '15 - ისლ'},
        {id: '16', name: '16 - მლზ'},
    ],

    locationType: [
        {id: '1', name: '1 - A0 კლდოვანი, ძალიან მშრალი'},
        {id: '2', name: '2 - A1 კლდოვანი, მშრალი'},
        {id: '3', name: '3 - A2 კლდოვანი, გრილი'},
        {id: '4', name: '4 - A3 კლდოვანი, ნოტიო'},
        {id: '5', name: '5 - A4 კლდოვანი, ჭარბტენიანი'},
        {id: '6', name: '6 - A5 კლდოვანი, სველი'},
        {id: '7', name: '7 - B0 თხელი, ძალიან მშრალი'},
        {id: '8', name: '8 - B1 თხელი, მშრალი'},
        {id: '9', name: '9 - B2 თხელი, გრილი'},
        {id: '10', name: '10 - B3 თხელი, ნოტიო'},
        {id: '11', name: '11 - B4 თხელი, ჭარბტენიანი'},
        {id: '12', name: '12 - B5 თხელი, სველი'},
        {id: '13', name: '13 - C0 საშ.სიღრმის, ძალიან მშრალი'},
        {id: '14', name: '14 - C1 საშ.სიღრმის, მშრალი'},
        {id: '15', name: '15 - C2 საშ.სიღრმის, გრილი'},
        {id: '16', name: '16 - C3 საშ.სიღრმის, ნოტიო'},
        {id: '17', name: '17 - C4 საშ.სიღრმის, ჭარბტენიანი'},
        {id: '18', name: '18 - C5 საშ.სიღრმის, სველი'},
        {id: '19', name: '19 - D0 ღრმა, ძალიან მშრალი'},
        {id: '20', name: '20 - D1 ღრმა, მშრალი'},
        {id: '21', name: '21 - D2 ღრმა, გრილი'},
        {id: '22', name: '22 - D3 ღრმა, ნოტიო'},
        {id: '23', name: '23 - D4 ღრმა, ჭარბტენიანი'},
        {id: '24', name: '24 - D5 ღრმა, სველი'},
    ],

    // 31_6 Macket
    height: [
        {id: '1', name: '0,5'},
        {id: '2', name: '1,0'},
        {id: '3', name: '1,5'},
        {id: '4', name: '2,0'},
        {id: '5', name: '2,0'},
        {id: '6', name: '2,5'},
        {id: '7', name: '3,0'},
        {id: '8', name: '3,1+'},
    ],

    age: [
        {id: '1', name: '5'},
        {id: '2', name: '10'},
        {id: '3', name: '15'},
    ],

    growingTreesSpecies: [
        {id: '1', name: 'A'},
        {id: '2', name: 'B'},
        {id: '3', name: 'C'},
    ],

    // 32_7 Macket
    distribution: [
        {id: '1', name: 'A'},
        {id: '2', name: 'B'},
        {id: '3', name: 'C'},
    ],

    distributionPercent: [
        {id: '1', name: 'A'},
        {id: '2', name: 'B'},
        {id: '3', name: 'C'},
    ],

    treeType: [
        {id: '141', name: 'მუხა მაღალმთის'},
        {id: '142', name: 'მუხა პონტოური'},
        {id: '143', name: 'მუხა ქართული'},
        {id: '144', name: 'მუხა ქართული ამონაყრითი'},
        {id: '145', name: 'მუხა წაბლფოთოლა'},
        {id: '146', name: 'მუხა ჭალის'},
        {id: '147', name: 'მუხა ჭოროხის'},
        {id: '148', name: 'ნაძვი აღმოსავლური'},
        {id: '149', name: 'ნაძვი ევროპული'},
        {id: '150', name: 'ნეკერჩხალი ამერიკული'},
        {id: '151', name: 'ნეკერჩხალი ბოყვი'},
        {id: '152', name: 'ნეკერჩხალი დიადი ბოყვი'},
        {id: '153', name: 'ნეკერჩხალი მაღალი მთის'},
        {id: '154', name: 'ნეკერჩხალი მახვილფოთლოვანი'},
        {id: '155', name: 'ნეკერჩხალი მინდვრის'},
        {id: '156', name: 'ნეკერჩხალი ქართული'},
        {id: '157', name: 'ნეკერჩხალი ქართული ამონაყრითი'},
        {id: '158', name: 'ნეკერჩხალი ქორაფი'},
        {id: '159', name: 'ნეკერჩხალი თათრული'},
        {id: '160', name: 'ნუში ჩვეულებრივი'},
        {id: '161', name: 'ნუში ქართული'},
        {id: '162', name: 'ოქროწვიმა ჩვეულებრივი'},
        {id: '163', name: 'ორფანიდეზია ორფანიდეზია'},
        {id: '164', name: 'პაროცია ხერკინა'},
        {id: '165', name: 'პავლოვნია ბურძგლიანი'},
        {id: '166', name: 'ქაცვი ქაცვი'},
        {id: '167', name: 'ქლიავი  კვრინჩხი'},
        {id: '168', name: 'ქლიავი  ტყემალი'},
        {id: '169', name: 'ქლიავი  ტყემალი'},
        {id: '170', name: 'რცხილა ჯაგრცხილა'},
        {id: '171', name: 'რცხილა ჯაგრცხილა ამონაყრითი'},
        {id: '172', name: 'რცხილა კავკასიური'},
        {id: '173', name: 'რცხილა კავკასიური ამონაყრითი'},
        {id: '174', name: 'რობინია ცრუ აკაცია'},
        {id: '175', name: 'რობინია ცრუ აკაცია ამონაყრითი'},
        {id: '176', name: 'ღვედკეცი ღვედკეცი'},
        {id: '177', name: 'ღვია გრძელწიწვიანი'},
        {id: '178', name: 'ღვია მაღალი'},
        {id: '179', name: 'ღვია მრავალნაყოფა'},
        {id: '180', name: 'ღვია მყრალი (შავი)'},
        {id: '181', name: 'ღვია ქონდარა'},
        {id: '182', name: 'ღვია წითელი'},
        {id: '183', name: 'ღვია ყაზახური'},
        {id: '184', name: 'საკმელა პონტოური'},
        {id: '185', name: 'საკმელა სალბფოთოლა'},
        {id: '186', name: 'შინდანწლა შინდანწლა'},
        {id: '187', name: 'შინდი შინდი'},
        {id: '188', name: 'სირვაშლა ჩვეულებრივი'},
        {id: '189', name: 'სოფორა იაპონური'},
        {id: '190', name: 'შოთხვი შოთხვი'},
        {id: '191', name: 'სოჭი კავკასიური'},
        {id: '192', name: 'შქერი დეკა'},
        {id: '193', name: 'შქერი იელი'},
        {id: '194', name: 'შქერი სმირნოვის'},
        {id: '195', name: 'შქერი შქერი'},
        {id: '196', name: 'შქერი უნგერნის'},
        {id: '197', name: 'სურო ჩვეულებრივი'},
        {id: '198', name: 'სურო კოლხური'},
    ],

    treeHeight: [
        {id: '1', name: 'A'},
        {id: '2', name: 'B'},
        {id: '3', name: 'C'},
    ],

    // 24_9 Macket
    soilCharacter: [
        {id: '1', name: 'A'},
        {id: '2', name: 'B'},
        {id: '3', name: 'C'},
    ],

    soilMechanicalComposition  : [
        {id: '1', name: '1 - ქვიშნარი'},
        {id: '2', name: '2 - თიხნარი'},
        {id: '3', name: '3 - მსუბუქ.თიხნ.'},
        {id: '4', name: '4 - საშ.თიხნარი'},
        {id: '5', name: '5 - ძლიერი თიხნ'},
        {id: '6', name: '6 - თიხა'},
    ],

    moistureDegree: [
        {id: '1', name: '1 - ძლიერ მშრალი'},
        {id: '2', name: '2 - მშრალი'},
        {id: '3', name: '3 - გრილი'},
        {id: '4', name: '4 - ტენიანი'},
        {id: '5', name: '5 - ჭარბტენიანი'},
    ],

    chordsQuality: [
        {id: '1', name: '1 - სუსტი'},
        {id: '2', name: '2 - საშუალო'},
        {id: '3', name: '3 - ძლიერი'},
        {id: '4', name: '4 - დაკორდება არ არის'},
    ],

    soilDensity: [
        {id: '1', name: '1 - სუსტი'},
        {id: '2', name: '2 - საშუალო'},
        {id: '3', name: '3 - ძლიერი'},
    ],

    // 37_10 Macket
    anthropogenicTransformationType: [
        {id: '1', name: '1 - კორომი გავლითი ჭრით'},
        {id: '2', name: '2 - წარმოებს ძოვება ან თიბვა'},
        {id: '3', name: '3 - გამოიყენება რეკრეაციული მიზნებით'},
        {id: '4', name: '4 - ხელუხლებელი ტყეები'},
    ],

    anthropogenicTransformationQuality: [
        {id: '1', name: '1 - ძალიან ძლიერი'},
        {id: '2', name: '2 - ძლიერი'},
        {id: '3', name: '3 - საშუალო'},
        {id: '4', name: '4 - სუსტი'},
    ],

    // 28_12 Macket
    accessibilityCategory: [
        {id: '1', name: '1 - ზაფხ.მისად.'},
        {id: '2', name: '2 - ზამთ.მისად.'},
        {id: '3', name: '5 - ძნელადმისადგომი'},
        {id: '4', name: '9 - მიუდგომელი'},
    ],

    transportType: [
        {id: '1', name: '1 - საავტომობილო'},
        {id: '2', name: '2 - სატრაქტორო'},
        {id: '3', name: '3 - მოსათრევი მექანიზ.'},
    ],

    // 40_13 Macket
    disasterType: [
        {id: '1', name: '1 - მეწყერი'},
        {id: '2', name: '2 - ღვარცოფი'},
        {id: '3', name: '3 - ზვავი'},
        {id: '4', name: '4 - ჩამონაშალი'},
    ],

    sustainability: [
        {id: '1', name: '1 - ძლიერი'},
        {id: '2', name: '2 - საშუალო'},
        {id: '3', name: '3 - სუსტი'},
    ],

    // 16_15 Macket
    rawMaterialCategory: [
        {id: '1', name: '6 - ქერქი'},
        {id: '2', name: '10 - ფესვები'},
        {id: '3', name: '12 - ფოთლები'},
        {id: '4', name: '15 - კაკალი'},
        {id: '5', name: '18 - ნაყოფი'},
        {id: '6', name: '24 - ნეკერი'},
        {id: '7', name: '26 - ყვავილები'},
        {id: '8', name: '28 - კენკროვანი'},
    ],

    woodySpecies: [
        {id: '1', name: 'ერთი'},
        {id: '2', name: 'ორი'},
    ],

    unit: [
        {id: '1', name: '1 - კგ'},
        {id: '2', name: '2 - ტ'},
        {id: '3', name: '2 - მ3'},
    ],

    accessible : [
        {id: '1', name: '1 - მიწიდან'},
        {id: '2', name: '2 - მექ.მოწყობ. და ხმარ.'},
        {id: '3', name: '3 - სპეც.მოწყ.დახმარებ.'},
    ],

    // 14_16 Macket
    accountingCategory: [
        {id: '1', name: '2 - სამკურნალო ნედლეური'},
        {id: '2', name: '7 - კენკროვნები'},
        {id: '3', name: '8 - სოკოები'},
        {id: '4', name: '9 - იშვიათი მცენ.'},
    ],

    plantsType: [
        {id: '1', name: '1 - მოცვი მაღალმთის'},
        {id: '2', name: '2 - მოცვი შავი'},
        {id: '3', name: '3 - მარწყვი'},
        {id: '4', name: '4 - ხენდრო'},
        {id: '5', name: '5 - ცხრატყავა (წერწა)'},
        {id: '6', name: '6 - ასკილი'},
        {id: '7', name: '7 - ჟოლო'},
        {id: '8', name: '8 - მოცხარი წითელი'},
        {id: '9', name: '9 - მოცხარი შავი'},
        {id: '10', name: '10 - ჭნავი'},
        {id: '11', name: '11 - ქაცვი'},
        {id: '12', name: '12 - შოთხვი'},
        {id: '13', name: '13 - მაყვალი'},
        {id: '14', name: '14 - შინდი'},
        {id: '15', name: '15 - რეზერვი'},
        {id: '16', name: '16 - კატაბალახა'},
        {id: '17', name: '17 - შოთხვი'},
        {id: '18', name: '18 - კოთხუჯი'},
        {id: '19', name: '19 - სამკურნალო ტუხტი'},
        {id: '20', name: '20 - ბელადონა'},
        {id: '21', name: '21 - წითელი კუნელი'},
        {id: '22', name: '22 - უკვდავა'},
        {id: '23', name: '23 - შროშანა'},
        {id: '24', name: '24 - ყვითელი ცხვირისატეხელია'},
        {id: '25', name: '25 - ქაცვი'},
        {id: '26', name: '26 - კულმუხო'},
        {id: '27', name: '27 - ვირის ტერფა'},
        {id: '28', name: '28 - წითელი ფუტკარა'},
        {id: '29', name: '29 - სამკურნალო გვირილა'},
        {id: '30', name: '30 - რიხტერის მლაშოპურა'},
        {id: '31', name: '31 - ასკილი'},
        {id: '32', name: '32 - სამკურნალო სალბი'},
        {id: '33', name: '33 - დათვის სოკო'},
        {id: '34', name: '34 - დუმა სოკო'},
        {id: '35', name: '35 - მჭადა სოკო'},
        {id: '36', name: '36 - წითლიო'},
        {id: '37', name: '37 - მიქლიო'},
        {id: '38', name: '38 - მანჭკვალას მატყუარა'},
        {id: '39', name: '39 - ქამა სოკო'},
        {id: '40', name: '40 - მანჭკვალა'},
        {id: '41', name: '41 - მერცხალა სოკო'},
        {id: '42', name: '42 - ნიყვი'},
        {id: '43', name: '43 - ხარისფაშვა'},
        {id: '44', name: '44 - გუდაფშუკა'},
        {id: '45', name: '45 - შხამა სოკო'},
        {id: '46', name: '46 - ხეთა მხალი'},
        {id: '47', name: '47 - ირემა სოკო'},
        {id: '48', name: '48 - წითელშხამა'},
        {id: '49', name: '49 - ვარსკვლავა სოკო'},
        {id: '50', name: '50 - ყვითელი საჩეჩელა'},
        {id: '51', name: '51 - ჩიტიბუდა'},
        {id: '52', name: '52 - რეზერვი'},
    ]
}
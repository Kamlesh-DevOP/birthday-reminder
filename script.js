const birthdays = [
  { "name": "A Priyankaa", "date": "09-18" },
  { "name": "Aishwarya Muthukumar", "date": "09-15" },
  { "name": "Amrut Anand", "date": "09-17" },
  { "name": "Ankith U Davey", "date": "07-24" },
  { "name": "Ashritha Anandal", "date": "02-05" },
  { "name": "Ashwin S", "date": "12-31" },
  { "name": "Ashwin S", "date": "12-27" },
  { "name": "Atharsh S U", "date": "10-29" },
  { "name": "Atiksh Borundia", "date": "03-14" },
  { "name": "Atish Mandal", "date": "11-11" },
  { "name": "Avaneesh V", "date": "05-22" },
  { "name": "B Varun Adithya", "date": "05-16" },
  { "name": "Baddala Sai Hanshitha", "date": "09-18" },
  { "name": "C Y Pranav Menon", "date": "09-25" },
  { "name": "Chalamalasetti Asmita", "date": "05-14" },
  { "name": "Cheemakurthi Swetha", "date": "12-14" },
  { "name": "Cherian Thomas Karippaparambil", "date": "05-15" },
  { "name": "Chilukuri Reshmath", "date": "06-25" },
  { "name": "Chirumamilla Sai Sri Snigdha", "date": "10-19" },
  { "name": "D K Dheekshitha", "date": "03-01" },
  { "name": "D Kanishkarane", "date": "12-06" },
  { "name": "D Vijay Vignesh", "date": "10-31" },
  { "name": "Dandamudi Hasini", "date": "02-01" },
  { "name": "Darisa Varshitha", "date": "09-14" },
  { "name": "Dasaraju Karthik Varma", "date": "06-13" },
  { "name": "Devaesh D", "date": "06-19" },
  { "name": "Dheeran Sankaran", "date": "12-01" },
  { "name": "Divyadharshini R M", "date": "07-15" },
  { "name": "G K Shriram", "date": "02-14" },
  { "name": "Gajula Sathwik", "date": "02-23" },
  { "name": "Gibbson Jeyadurai A", "date": "05-28" },
  { "name": "Guru Divya Darshini U", "date": "03-09" },
  { "name": "Harish Sankar", "date": "02-14" },
  { "name": "Hemachandhar A", "date": "06-01" },
  { "name": "Hemanth Kumar R", "date": "12-09" },
  { "name": "Innamuri Venkata Sai Likitha", "date": "12-29" },
  { "name": "J Harshini", "date": "10-08" },
  { "name": "J Jaya Mithira", "date": "10-30" },
  { "name": "J M M Miruthula", "date": "10-17" },
  { "name": "J M Navanthiga", "date": "12-19" },
  { "name": "Jai Abhishek A N", "date": "03-15" },
  { "name": "Joan Carmya F", "date": "05-23" },
  { "name": "Johan Emmanuel S", "date": "03-24" },
  { "name": "Joshua Edwin Jacob V", "date": "10-02" },
  { "name": "K Aditya", "date": "11-16" },
  { "name": "K Mithran", "date": "09-19" },
  { "name": "K Prithvi", "date": "07-03" },
  { "name": "K Shree Laasya Priya", "date": "04-18" },
  { "name": "Kalpana Bhaskar", "date": "01-09" },
  { "name": "Kamlesh TJ", "date": "10-03" },
  { "name": "Karaka Mourya Aditya", "date": "03-03" },
  { "name": "Karamala Reddy Harshavardhan", "date": "11-28" },
  { "name": "Kasiram S", "date": "01-02" },
  { "name": "Katakam Venkata Suraj", "date": "08-02" },
  { "name": "Kavin Karthik Yuvaraj", "date": "05-19" },
  { "name": "Kishore B", "date": "03-24" },
  { "name": "Kotha Hasini", "date": "03-27" },
  { "name": "Kotte Venkata Naga Kusal", "date": "05-02" },
  { "name": "KR Srinidhi Rajamane", "date": "07-05" },
  { "name": "M D Tejas", "date": "01-24" },
  { "name": "M Kavya", "date": "09-17" },
  { "name": "M S L Muhammad Uvais Zufar", "date": "01-08" },
  { "name": "M Shakthi Sridevi", "date": "07-27" },
  { "name": "M Venkat Chowdary", "date": "04-21" },
  { "name": "M Yalini", "date": "02-12" },
  { "name": "Madhav S", "date": "11-15" },
  { "name": "Mohula Prasath B", "date": "06-04" },
  { "name": "Moturu Nitheesha", "date": "10-25" },
  { "name": "Nalamothu Saraswathi", "date": "10-23" },
  { "name": "Narapureddy Mokshith Reddy", "date": "07-18" },
  { "name": "Navya Nitin Maheshwari", "date": "02-12" },
  { "name": "Neha Thirunavukkarasu Priya", "date": "07-17" },
  { "name": "Nithyashree S", "date": "06-10" },
  { "name": "P Shreya", "date": "07-21" },
  { "name": "Pandi Kabilesh P", "date": "01-13" },
  { "name": "Parvathareddy Shalini Reddy", "date": "07-03" },
  { "name": "PL Ajay Saravana Chockalingam", "date": "07-11" },
  { "name": "Prithvi Vijay Kartik", "date": "03-26" },
  { "name": "Prithviraj Reguna Prabakaran", "date": "03-17" },
  { "name": "R D Shreya Lakshmi", "date": "09-07" },
  { "name": "R Pavithra", "date": "04-20" },
  { "name": "R S Kirithic", "date": "11-18" },
  { "name": "R Yadunandan", "date": "03-24" },
  { "name": "Raghav Shreyas T C", "date": "06-26" },
  { "name": "Rahul Balakrishnan Adhi", "date": "09-27" },
  { "name": "Rishie Hrithick V", "date": "01-13" },
  { "name": "Rohit Srinivasan", "date": "03-31" },
  { "name": "S Jeevasidarth", "date": "08-07" },
  { "name": "S Poushali Avantikaa", "date": "05-08" },
  { "name": "S S Vibitha Varshini", "date": "11-07" },
  { "name": "S Sadhumidha", "date": "03-28" },
  { "name": "S Sharath", "date": "05-21" },
  { "name": "S Srivatsan", "date": "04-24" },
  { "name": "Sadhana Sundaresan", "date": "11-09" },
  { "name": "Sadhika Sunil", "date": "10-02" },
  { "name": "Sai Sahana S", "date": "04-12" },
  { "name": "Samritha Shree R", "date": "07-23" },
  { "name": "Sanjaykumar Sathishkumar", "date": "01-09" },
  { "name": "Sharu Nivetha D S", "date": "05-06" },
  { "name": "Shivani R", "date": "09-12" },
  { "name": "Shravan P M", "date": "03-07" },
  { "name": "Shreya V", "date": "03-23" },
  { "name": "Siddharth G", "date": "12-28" },
  { "name": "Siddhi Vinayak", "date": "11-25" },
  { "name": "Sidharth Krishna", "date": "02-27" },
  { "name": "Smruti C", "date": "08-30" },
  { "name": "Somalaraju Pallavi", "date": "03-05" },
  { "name": "Srinithi A", "date": "10-04" },
  { "name": "Srinivas Manikandan", "date": "02-06" },
  { "name": "Sudarssni Rajesh", "date": "11-03" },
  { "name": "Sukesh S", "date": "03-21" },
  { "name": "Swayampakula Sree Charan Sharma", "date": "02-07" },
  { "name": "T A Prasanna", "date": "01-28" },
  { "name": "Tadela Purnima Krishna", "date": "01-09" },
  { "name": "Tarun K N", "date": "08-14" },
  { "name": "Thota Pranav Varshin", "date": "10-03" },
  { "name": "U N Shreeya", "date": "07-24" },
  { "name": "Uvanadhithya B", "date": "10-26" },
  { "name": "V Dhanush", "date": "10-05" },
  { "name": "V Sai Hari Krishna", "date": "11-17" },
  { "name": "V Sanjay Madhukar", "date": "11-13" },
  { "name": "V Teena Pranava", "date": "01-08" },
  { "name": "Vaibhav V Mohan", "date": "10-12" },
  { "name": "Vataparthi Abhinav Ahladh", "date": "07-16" },
  { "name": "Vikasni S", "date": "06-22" },
  { "name": "Vinay Sathish", "date": "02-03" },
  { "name": "Vishnuvardhan Thummakula", "date": "08-08" },
  { "name": "AADITHYAA E", "date": "09-11" },
  { "name": "AARUSHI SWAMINATHAN", "date": "10-18" },
  { "name": "AJEETHA J", "date": "11-01" },
  { "name": "ANISH BALAJI A", "date": "05-19" },
  { "name": "ANURAG SUBRAMANIYAN", "date": "02-06" },
  { "name": "ANUTTAMAN R", "date": "10-21" },
  { "name": "BELLAM NIHITHA", "date": "12-19" },
  { "name": "BHAVASHRUTHI M", "date": "06-14" },
  { "name": "CHENNAMADHAVA VISHWANI", "date": "10-23" },
  { "name": "D M SUBASHRI", "date": "11-01" },
  { "name": "DHANUSH KATHIR B", "date": "10-05" },
  { "name": "EVELIN KIMBERLY E", "date": "09-17" },
  { "name": "G KARTHIK", "date": "01-10" },
  { "name": "GUNJAN D RAHEJA", "date": "12-25" },
  { "name": "HAARISH AHMAD M U", "date": "10-14" },
  { "name": "J M DARSHANA", "date": "10-05" },
  { "name": "JASHWANTH SURESH RAJESWARI", "date": "09-04" },
  { "name": "JAYA SUDHARSHAN SURESH", "date": "08-08" },
  { "name": "JENITA RACHEL C", "date": "08-04" },
  { "name": "KALUVA SATHYA PRANATHEE", "date": "11-18" },
  { "name": "KANAKAMEDALA SAI JYOTHIRMAYI", "date": "10-12" },
  { "name": "KANISHK S", "date": "09-16" },
  { "name": "KANNASANI VENKATA NARASIMHA PUNEETH", "date": "03-06" },
  { "name": "KARNIKA K P", "date": "08-18" },
  { "name": "KOTTE TEJAS REDDY", "date": "08-30" },
  { "name": "LAKSHANA BASKARAN", "date": "11-05" },
  { "name": "LIITHESHWAR G S", "date": "01-26" },
  { "name": "M NIKITHA", "date": "10-25" },
  { "name": "MANGESH KUMAR SONI", "date": "10-15" },
  { "name": "MUGASHREE K", "date": "12-09" },
  { "name": "MUKUND VIJAY S V", "date": "03-30" },
  { "name": "NALLAM RISHIKA RANI", "date": "10-23" },
  { "name": "NANDIVADA PRERANA", "date": "10-31" },
  { "name": "NARENDRA SAMPATH KUMAR", "date": "10-03" },
  { "name": "NAVEEN CHANDER S M", "date": "07-30" },
  { "name": "NIKHIL A", "date": "07-14" },
  { "name": "NITIL VIJAY", "date": "09-28" },
  { "name": "P BERNICE CYNTHIA", "date": "08-15" },
  { "name": "P SAI CHAITHANYIA", "date": "08-15" },
  { "name": "PARV MANYAM", "date": "01-09" },
  { "name": "POOJA K", "date": "10-01" },
  { "name": "R DEEPAN", "date": "08-03" },
  { "name": "R DHAKSHITHA DEIVANAI", "date": "02-03" },
  { "name": "R ETHAN RAJESH", "date": "08-18" },
  { "name": "R PRIYANKA", "date": "07-02" },
  { "name": "RADHIHA BALASANKARAN RAMAMOORTHI", "date": "06-26" },
  { "name": "RAMMOHAN M", "date": "12-15" },
  { "name": "RIDHI R", "date": "02-17" },
  { "name": "S HARINAKSHI", "date": "05-08" },
  { "name": "S MOHAMED HASHIM", "date": "01-08" },
  { "name": "S PRANAOV", "date": "04-02" },
  { "name": "S S KAVINTHRA", "date": "09-06" },
  { "name": "SAHANA SUKUMARAN", "date": "09-01" },
  { "name": "SAI NITHYA MAHESWARI P K", "date": "10-07" },
  { "name": "SAILESH S", "date": "05-12" },
  { "name": "SASVAT S R", "date": "07-07" },
  { "name": "SHAIK RAAFIA MUSKAAN", "date": "05-11" },
  { "name": "SHARADHA A", "date": "08-30" },
  { "name": "SIDDHARTH S", "date": "04-27" },
  { "name": "SNEHAAN VINAY KANDASWAMY", "date": "04-26" },
  { "name": "SYED ASHRAF", "date": "04-29" },
  { "name": "TARUNJEETH RAMALINGAM KRISHNAKUMAR", "date": "05-08" },
  { "name": "TATA NAGA SRIPRANAV", "date": "10-15" },
  { "name": "UJJWAL CHORARIA", "date": "03-05" },
  { "name": "VAARSHINI R", "date": "05-13" },
  { "name": "VALAN E", "date": "11-25" },
  { "name": "VANDANA PADMAN", "date": "01-02" },
  { "name": "YUVASHANKAR Y", "date": "11-23" },
  { "name": "AADITHIYAA S", "date": "10-04" },
  { "name": "ABHINAV L", "date": "06-28" },
  { "name": "ADITHI NETRA S", "date": "04-07" },
  { "name": "ADITYA A S", "date": "10-20" },
  { "name": "ADNAH JENNIFER", "date": "03-15" },
  { "name": "AKSHAT SATCHIDANAND SHARMA", "date": "12-18" },
  { "name": "AKSHAY PRIYAN A", "date": "07-29" },
  { "name": "AKSHAYAN VISHAAL B", "date": "09-13" },
  { "name": "AMMOG WARRIER", "date": "04-25" },
  { "name": "AMRITAVARSHNI V", "date": "06-06" },
  { "name": "AMRITHA G", "date": "10-30" },
  { "name": "ANSHUKMAN M J", "date": "05-28" },
  { "name": "ARAVETI JASWANTH SAI MANJUNATH", "date": "10-29" },
  { "name": "ARAVIND KUMAR S", "date": "04-05" },
  { "name": "ASHIKKA R B", "date": "09-20" },
  { "name": "B SIDDHARTH BABU", "date": "02-18" },
  { "name": "BATLANKI NIVRITI VARADA", "date": "10-25" },
  { "name": "BELINA PAULINE J", "date": "06-29" },
  { "name": "BOLEM SHAMITHA", "date": "01-10" },
  { "name": "C SAMYUKTHA", "date": "07-05" },
  { "name": "CHENGALVALA SUNDAR PRANAV", "date": "05-07" },
  { "name": "CHENNURU VIDURADH REDDY", "date": "12-06" },
  { "name": "DADI MEGHAVARSHINI", "date": "01-07" },
  { "name": "DEBORAH BETRINA D", "date": "07-03" },
  { "name": "DEVARINTI YASHASWINI", "date": "01-16" },
  { "name": "DHARSHINI S", "date": "02-27" },
  { "name": "DHIVYA PRABHA N", "date": "05-19" },
  { "name": "DHIVYESH C", "date": "01-23" },
  { "name": "EVAN GRYPHIN FIDELIS JOE", "date": "05-06" },
  { "name": "GANESH MACHERLA", "date": "09-12" },
  { "name": "GANGIREDDY THANMAY REDDY", "date": "11-19" },
  { "name": "GOWDUCHERUVU CHINMAYA VILAKSHANA REDDY", "date": "05-05" },
  { "name": "HAIFA RUBINA", "date": "03-20" },
  { "name": "HARI KISHORE CHINNATHAMBI", "date": "05-19" },
  { "name": "HARINI PRABAKARAN", "date": "09-05" },
  { "name": "J HARSHAN", "date": "08-21" },
  { "name": "J SIDTHARTH", "date": "04-08" },
  { "name": "JEEVA PRAVIN P K", "date": "04-07" },
  { "name": "JOCELYN MABEL N", "date": "06-25" },
  { "name": "JOSHITHA R", "date": "02-22" },
  { "name": "JYOTSNA REDDY RASAM", "date": "07-12" },
  { "name": "KABIN ESHWAR R R", "date": "10-04" },
  { "name": "KAVIYA L", "date": "02-26" },
  { "name": "KEVIN S", "date": "10-25" },
  { "name": "KRIT LUNKAD", "date": "11-04" },
  { "name": "KURUVA RISHIKA", "date": "04-03" },
  { "name": "KUSHVINTH M", "date": "11-01" },
  { "name": "M HEMA VARSHINI", "date": "06-28" },
  { "name": "M KAAVYASHRI", "date": "09-16" },
  { "name": "M NITISH", "date": "01-21" },
  { "name": "M RATHISH ROSHAAN", "date": "07-04" },
  { "name": "M SHYAAM KARODIYA", "date": "01-04" },
  { "name": "M UDHAYA", "date": "05-12" },
  { "name": "MADHUMITHRA R R", "date": "06-03" },
  { "name": "MAHALAKSHMI B", "date": "04-11" },
  { "name": "MAHIMAA KABILAN", "date": "12-10" },
  { "name": "MEHARNAZ KIRAN N", "date": "02-11" },
  { "name": "MERIS TIFFANY G M", "date": "09-02" },
  { "name": "METLA SRINATH", "date": "04-25" },
  { "name": "MITHUN PRABHU R", "date": "09-20" },
  { "name": "MRITHUL SAMUEL SATHISH", "date": "06-03" },
  { "name": "MYTHREYEE H", "date": "10-16" },
  { "name": "NEHA MARY ROBIN", "date": "06-12" },
  { "name": "NHAVYAE US", "date": "03-10" },
  { "name": "NIMAL CHARAN B", "date": "05-25" },
  { "name": "NITHIS PANDIYAN J", "date": "04-03" },
  { "name": "P DHARANIDHAR REDDY", "date": "03-24" },
  { "name": "P HARINI", "date": "07-22" },
  { "name": "P NETHRAA", "date": "09-23" },
  { "name": "P VARSHITHA", "date": "01-22" },
  { "name": "POKURI VENKATA SAI AKSHAYA", "date": "05-04" },
  { "name": "PRANAV PRAKASH A", "date": "03-10" },
  { "name": "PRANAV SHREYAS T C", "date": "06-26" },
  { "name": "PRANHAI PRAKASH A", "date": "03-10" },
  { "name": "PRASANTH M", "date": "11-23" },
  { "name": "PRASHANNA POORANACHANDRAN", "date": "10-19" },
  { "name": "PRATYUSSH THIRUMURUGAN", "date": "04-21" },
  { "name": "PRIYAN A", "date": "07-11" },
  { "name": "PURRU SRILALITHA SAI PRASANNA", "date": "12-16" },
  { "name": "PUTTA TARUN CHOWDARY", "date": "10-23" },
  { "name": "R SUNIL", "date": "03-31" },
  { "name": "RAKSHIGA G", "date": "08-01" },
  { "name": "RAMANADHAM RAMA DEVI", "date": "08-15" },
  { "name": "RASHMI SREYA", "date": "01-16" },
  { "name": "RISHMA RM ASHMI", "date": "07-17" },
  { "name": "RITHIK KUMAR", "date": "08-21" },
  { "name": "RITHIK KUMARAN K", "date": "08-28" },
  { "name": "RIYA BANERJEE", "date": "09-18" },
  { "name": "S ANIRUDH", "date": "04-11" },
  { "name": "S HARI KRISHNA", "date": "01-03" },
  { "name": "S K THARUN RAKESH", "date": "09-27" },
  { "name": "S KIRTI", "date": "04-22" },
  { "name": "S KRISH HARIHARAN", "date": "08-18" },
  { "name": "S SIDDHARTH", "date": "06-18" },
  { "name": "S SRIJAI", "date": "10-07" },
  { "name": "S VARUN", "date": "09-24" },
  { "name": "SAAJAN PALAKATHADATHIL VARGHESE", "date": "07-03" },
  { "name": "SAHISHNU S", "date": "02-21" },
  { "name": "SAMIKSHA RAO", "date": "11-22" },
  { "name": "SAMYUKTHA S", "date": "05-23" },
  { "name": "SARVESH SHANMUGASUNDARAM", "date": "11-03" },
  { "name": "SATHEESH A", "date": "09-10" },
  { "name": "SATTENAPALLI BHAVANA SAI", "date": "11-25" },
  { "name": "SATYAM SATYARTHI", "date": "06-20" },
  { "name": "SHAMBHAVI MUNISH", "date": "09-26" },
  { "name": "SHARON MARIAM ABRAHAM", "date": "01-10" },
  { "name": "SHRIHARI GURURAJAN", "date": "11-25" },
  { "name": "SIVARANJANI S", "date": "12-28" },
  { "name": "SMITHA SRIKUMAR", "date": "06-16" },
  { "name": "SOMPALLI POTHISH", "date": "12-15" },
  { "name": "SREENIDHI VELUMANI", "date": "01-26" },
  { "name": "SREYAS SHYAM", "date": "11-27" },
  { "name": "SRI NARENDRA CHOZHAN R", "date": "10-07" },
  { "name": "SUBHIKSHA M", "date": "06-11" },
  { "name": "SUSAN HEBER", "date": "10-03" },
  { "name": "SYED MOHAMED FAZIL HUSSAIN S", "date": "06-15" },
  { "name": "T S K VENKATARAMAN", "date": "11-04" },
  { "name": "T VAISHNAVI", "date": "05-17" },
  { "name": "TARUN S", "date": "10-28" },
  { "name": "TARUN SAISUNDAR", "date": "01-23" },
  { "name": "THANAV KUMAR S J", "date": "05-08" },
  { "name": "V CHARANJEET", "date": "11-10" },
  { "name": "V SACHINVENKAT", "date": "11-09" },
  { "name": "V SREE ADITYA", "date": "04-10" },
  { "name": "VIBILAN D M", "date": "09-14" }
];


// Months array for header
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar(month, year) {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.querySelector('.date h1');

    // Set header month + year
    monthYearDisplay.textContent = `${months[month]} ${year}`;

    daysContainer.innerHTML = '';

    let firstDay = new Date(year, month).getDay(); // weekday of first day
    let totalDays = new Date(year, month + 1, 0).getDate(); // total days in month

    // Blank cells before first day
    for (let i = 0; i < firstDay; i++) {
        let blankDay = document.createElement('div');
        daysContainer.appendChild(blankDay);
    }

    // Actual days of month
    for (let day = 1; day <= totalDays; day++) {
        let dayElement = document.createElement('div');
        dayElement.textContent = day;

        // Convert current loop date to MM-DD
        let fullDate = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // All birthdays on this date (year ignored)
        let birthdayPeople = birthdays.filter(b => b.date === fullDate);

        if (birthdayPeople.length > 0) {
            dayElement.classList.add('birthday');

            birthdayPeople.forEach(birthday => {
                dayElement.innerHTML += `<small>${birthday.name}</small>`;
            });
        }

        // Highlight today's date
        if (
            day === currentDate.getDate() &&
            month === currentDate.getMonth() &&
            year === currentDate.getFullYear()
        ) {
            dayElement.style.backgroundColor = "#90EE90"; // light green for today
            dayElement.style.border = "2px solid #2e7d32";
        }

        daysContainer.appendChild(dayElement);
    }

    // Blank cells after last day to complete 6 rows (42 cells)
    const totalCells = firstDay + totalDays;
    const blankDaysAfter = 42 - totalCells;

    for (let i = 0; i < blankDaysAfter; i++) {
        let blankDay = document.createElement('div');
        daysContainer.appendChild(blankDay);
    }
}

// Navigation
document.querySelector('.next').addEventListener('click', () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++;
    renderCalendar(currentMonth, currentYear);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    if (currentMonth === 11) currentYear--;
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);

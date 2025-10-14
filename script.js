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
  { "name": "Vishnuvardhan Thummakula", "date": "08-08" }
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

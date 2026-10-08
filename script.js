const titles = [
    "SOG'LOM TURMUSH MASHQLARDAN BOSHLANADI",
    "CHIDAMLILIK VA KUCHINGIZNI OSHIRING",
    "HAR KUNI TANA UCHUN KICHIK QADAM TASHGLANG"
];

const descs = [
    "O'zingizga mos sport turini tanlang va bugun intizomli mashqlarni boshlang!",
    "Chegara bilmas imkoniyatlar faqat doimiy intizom orqali erishiladi.",
    "Professional natijalarga bizning maxsus rejamiz yordamida erishing!"
];

let currentIndex = 0;

function changeHeroText() {
    currentIndex = (currentIndex + 1) % titles.length;
    document.getElementById("heroTitle").innerText = titles[currentIndex];
    document.getElementById("heroDesc").innerText = descs[currentIndex];
}

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        themeToggle.innerText = "☀️ Rejim";
    } else {
        themeToggle.innerText = "🌙 Rejim";
    }
});

function filterSport(name) {
    document.getElementById("selectedSportText").innerText = "Siz tanlagan sport turi: " + name + " haqida ma'lumotlar tanlandi.";
}

const workouts = [
    { name: "Turnikda tortilish", detail: "Orqa va qo'l mushaklarini rivojlantirish uchun 3 setdan 10 martadan." },
    { name: "Planka mashqi", detail: "Press va barcha stabilizator mushaklarni mustahkamlash uchun 60 sekuntdan 3 set." },
    { name: "Otjimanie (Yerdan ko'tarilish)", detail: "Ko'krak va triceps uchun 4 setdan 15 martadan." },
    { name: "Squiz (O'tirib-turish)", detail: "Oyoq va jamlik mushaklari uchun 3 setdan 20 martadan." }
];

let workoutIndex = 0;

function nextWorkout() {
    workoutIndex = (workoutIndex + 1) % workouts.length;
    document.getElementById("workoutName").innerText = workouts[workoutIndex].name;
    document.getElementById("workoutDetail").innerText = workouts[workoutIndex].detail;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const resultDiv = document.getElementById("bmiResult");

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let status = "";
        if (bmi < 18.5) status = "Ozg'inlik";
        else if (bmi < 24.9) status = "Me'yorda";
        else if (bmi < 29.9) status = "Ortiqcha vazn";
        else status = "Semizlik";

        resultDiv.innerText = "Sizning BMI ko'rsatkichingiz: " + bmi + " (" + status + ")";
    } else {
        resultDiv.innerText = "Iltimos, vazn va bo'yni to'g'ri kiriting!";
    }
}

function handleContact(event) {
    event.preventDefault();
    document.getElementById("contactStatus").innerText = "Xabaringiz muvaffaqiyatli yuborildi!";
}
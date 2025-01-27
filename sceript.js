// =========================الاضاءة ===================

const body = document.querySelector("body"),
    modeSwitch = body.querySelector(".botton-content"),
    modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
});


// ===================الترجمه===============

const Translations = {
    en: {
        home: 'Home',
        projcet: 'Our Projcet',
        contact: 'Contact Us',
        mt1: 'Petrova Design',
        h3t: 'Lorem ipsum',
        p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Quo ipsam nesciunt dicta quasi quod iure beatae laudantium deleniti accusamus Expedita culpa neque eius autem blanditiis vitae reiciendis Culpa deleniti eaque saepe omnis deserunt sunt similique magni autem optio aperiam possimus',
        mt2: 'We Made Change',
        h4t: 'Description',
        p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam sed, in iste reiciendis tempore ullam cumque dolorum facere ducimus non. Explicabo ullam tenetur sint voluptate! Officiis quasi ab provident veniam consectetur iste, ipsum delectus vitae recusandae, commodi a quidem fuga repudiandae consequatur reiciendis eius rerum deserunt, rem laudantium placeat',
        mt3: 'Our Vision',
        tt1: 'OUR WORK',
        cont: 'Contact Us ',
        email: 'Email Address',
        phone: 'Phone',
        whats: 'Whats App',
        fb: 'Facebook',
        ins: 'Instagram',
        tik: 'Tiktok',
        you: 'Youtube',
        add: 'Address',
        add2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, nihil.',
        footer1: 'All Right for Petrova Design',
        footer: 'Copyright @ Ismail Shreef 2025',
    },
    ar: {
        home: 'الصفحة الرئيسة',
        projcet: 'مشروعاتنا',
        contact: 'تواصل معنا',
        mt1: 'Petrova Design',
        h3t: 'من نحن',
        p1: 'نحن شركه مصريه وطنية منشأة بأيدى مصرية خالصة مقرها الرئيسى جمهورية مصر العربية و تحديدا محافظة البحيرة نحن متخصصون فى اعمال التشطيبات و الديكورات الداخلية و لدينا نخبة من افضل المتخصوصين فى ذلك و كوكبه من المهندسية من سيجعلو رويتك واقع',
        mt2: 'نصنع الفرق',
        h4t: 'وصف',
        p2: 'نحن شركه مصريه وطنية منشأة بأيدى مصرية خالصة مقرها الرئيسى جمهورية مصر العربية و تحديدا محافظة البحيرة نحن متخصصون فى اعمال التشطيبات و الديكورات الداخلية و لدينا نخبة من افضل المتخصوصين فى ذلك و كوكبه من المهندسية من سيجعلو رويتك واقع',
        mt3: 'رؤيتنا',
        tt1: 'تصاميمنا',
        cont: 'اتصل بنا ',
        email: 'البريد الالكترونى',
        phone: 'رقم الهاتف',
        whats: 'واتس اب',
        fb: 'فيس بوك',
        ins: 'انستجرام',
        tik: 'تيك توك',
        you: 'يوتيوب',
        add: 'عنوانا',
        add2: 'البحيرة - دمنهور - برج سكاى مول الدور الاول علوى',
        footer1: 'جميع الحقوق محفوظه لشركة Petrova Design',
        footer: 'جميع الحقوق محفوظه @ إسماعيل شريف 2025'
    }
};
const LangSelector = document.querySelector('select');

LangSelector.addEventListener('change', (Event) => {
    setLang(Event.target.value);
    localStorage.setItem("lang", Event.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem("lang");
    setLang(language);
});
const setLang = (language) => {
    const elements = document.querySelectorAll('[data-itn]');
    elements.forEach((element) => {
        const Translationskey = element.getAttribute('data-itn');
        element.textContent = Translations[language][Translationskey];
    });
    document.dir = language === 'ar' ? "rtl" : 'ltr'
};

// =================== الصور المنبثقه==================

const images = [...document.querySelectorAll('.imager')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    });
});
const updateImage = (i) => {
    let path = `img/img${i + 1}.JPG`;
    largeImage.src = path;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;
};

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
});

leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1);
    }
})
rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1);
    }
})





// =============== الاسكرول============


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});


ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.sec-01, .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top', });
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });


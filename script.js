function cb(response) {
    document.querySelector("#visits").innerHTML = `Cette page a été consultée  ${response.value} fois`;
};


let logo = document.querySelector("#logo");
let logoArray = [ "face3.svg", "face5.svg", "face8.svg", "face7.svg", "face6.svg", "face5.svg", "face4.svg"];
let b=0;
logo.addEventListener("mouseenter", ()=> { 
    b++;
        if (b>logoArray.length-1) {
            b=0
        }
    document.querySelector('#logo').src=logoArray[b];
});
logo.addEventListener("click", ()=> { 
    b++;
        if (b>logoArray.length-1) {
            b=0
        }
    document.querySelector('#logo').src=logoArray[b];
});


let logoOne = document.querySelector("#logoOne");
let logoArrayOne = ["like111.svg","like222.svg", "like333.svg", "like111.svg", "like.svg"];
let c=0;
logoOne.addEventListener("mouseover", ()=> { 
    c++;
        if (c>logoArrayOne.length-1) {
            c=0
        }
    document.querySelector('#logoOne').src=logoArrayOne[c];
});

logoOne.addEventListener("click", ()=> { 
    c++;
        if (c>logoArrayOne.length-1) {
            c=0
        }
    document.querySelector('#logoOne').src=logoArrayOne[c];
});

let $body = $('body'),
	$panel = $('.panel'),
	$pContent = $('.panel__content'),
	$img = $('.panel__img-col');


function initTilt() {
	TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		tilt(e.pageX, e.pageY) 
	});
};

function tilt(cx, cy) {

	let sxPos = (cx / $body.width()*100 - 50)*2 ;
	let syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($pContent, 2, {
		rotationY: -0.05 * sxPos,
		rotationX: 0.05 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -500",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.08 * sxPos,
		rotationX: 0.09 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -500",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	tilt($body.width()/2, $body.height()/2);
})
initTilt();
console.clear();

window.onscroll = function() {
    myFunctionSticky()
};
let navbar = document.querySelector("#myNav");
let sticky = navbar.offsetTop;
function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}


const stick1 = document.querySelector(".stick-1");
const stick2 = document.querySelector(".stick-2");
const stick3 = document.querySelector(".stick-3");

function myFunctionMobile() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block" && window.innerWidth <= 1370) {
        links.style.display = "none";

        stick1.classList.remove("open");
        stick1.classList.add("close");
        stick2.classList.remove("open");
        stick2.classList.add("close");
        stick3.classList.remove("open");
        stick3.classList.add("close");

    }
    else {
        links.style.display = "block";

        stick1.classList.remove("close");
        stick1.classList.add("open");
        stick2.classList.remove("close");
        stick2.classList.add("open");
        stick3.classList.remove("close");
        stick3.classList.add("open");
    }
};


function myFunctionMobilePlus() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block") {

        links.style.display = "none";

        stick1.classList.remove("open");
        stick1.classList.add("close");
        stick2.classList.remove("open");
        stick2.classList.add("close");
        stick3.classList.remove("open");
        stick3.classList.add("close");

    }
    else {
        links.style.display = "block";

        stick1.classList.remove("close");
        stick1.classList.add("open");
        stick2.classList.remove("close");
        stick2.classList.add("open");
        stick3.classList.remove("close");
        stick3.classList.add("open");

    }
};

/*
$(document).ready(function() {

    $(".containerburger").click(function() {

      $(".stick").toggleClass(function () {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });

    });
  });
*/


let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrapp">'+this.txt+'</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
    };

window.onload = function() {
    let elements = document.querySelectorAll(".txt-rotate");
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrapp { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    };

let ctt = document.querySelector("#ctt");
ctt.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "block";
});

let fermer = document.querySelector("#fermer");
fermer.addEventListener("click", ()=>{
    let hiddenform = document.querySelector(".hiddenform");
    hiddenform.style.display = "none";
});

let ctt2 = document.querySelector("#ctt2");
ctt2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "block";
});

let fermer2 = document.querySelector("#fermer2");
fermer2.addEventListener("click", ()=>{
    let hiddenform2 = document.querySelector(".hiddenform2");
    hiddenform2.style.display = "none";
});



function flyBig() {

    if (window.innerWidth <= 500) {
        gsap.fromTo(".fly",{x:-300, y:200}, {x:400, y:-100, duration:10, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:700,y:-100, rotate:-10}, {x:-500, y:-350, duration:8, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:5});
    }

    else if (window.innerWidth <= 800) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:790, y:-100, duration:20, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1000, rotate:-10}, {x:-500, y:-250, duration:8, repeat:-1, ease: "none", delay:5, rotate:10, repeatDelay:6});
    }

    else if (window.innerWidth <= 1030) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:1000, y:-100, duration:20, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1000, rotate:-10}, {x:-500, y:-250, duration:8, repeat:-1, ease: "none", delay:5, rotate:10, repeatDelay:6});
    }

    else if (window.innerWidth <= 1370) {
        gsap.fromTo(".fly",{x:-10,y:200}, {x:1300, y:-100, duration:30, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1300, rotate:-10}, {x:-500, y:-250, duration:12, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:10});
    }
    else  {
        gsap.fromTo(".fly",{x:-200,y:200}, {x:1600, y:-100, duration:30, repeat:-1, ease: "none"});
        gsap.fromTo(".flyOne",{x:1600, rotate:-10}, {x:-500, y:-250, duration:12, repeat:-1, ease: "none", delay:6, rotate:10, repeatDelay:10});
    }

}
flyBig();

let modal = document.getElementById("myModal");
let btnMod = document.querySelector(".flyOne");
let span = document.getElementsByClassName("close")[0];


btnMod.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}




let modalTwo = document.getElementById("myModalTwo");
let btnModTwo = document.querySelector(".fly");
let spanTwo = document.getElementsByClassName("closeTwo")[0];


btnModTwo.onclick = function() {
    modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal || event.target == modalTwo) {
        modal.style.display = "none";
        modalTwo.style.display = "none";
    }
};





const btnRu = document.querySelector("#btnRu");
const btnEn = document.querySelector("#btnEn");
const btnFr = document.querySelector("#btnFr");

const graphiste = document.querySelector(".graphiste");
const moi = document.querySelector(".moi");
const applications = document.querySelector(".applications");
const web = document.querySelector(".web");
const logos = document.querySelector(".logos");
const flyer = document.querySelector(".flyer");
const tarifs = document.querySelector(".tarifs");
const contacter = document.querySelector(".contacter");
const compter = document.querySelector(".compter");
const travail = document.querySelector(".travail");
const linelink = document.querySelector(".linelink");
const meContacter = document.querySelector(".meContacter");
const hiddenlabelmail = document.querySelector(".hiddenlabelmail");
const hiddenlabelmessage = document.querySelector(".hiddenlabelmessage");
const envoyer = document.querySelector(".envoyer");
const mesApplications = document.querySelector(".mesApplications");
const faciliter = document.querySelector(".faciliter");
const webRazdel = document.querySelector(".webRazdel");
const webTravail = document.querySelector(".webTravail");
const logosRazdel = document.querySelector(".logosRazdel");
const logosTravail = document.querySelector(".logosTravail");

const flyerRazdel = document.querySelector(".flyerRazdel");
const flyerTravail = document.querySelector(".flyerTravail");

const tarifsRazdel = document.querySelector(".tarifsRazdel");
const tarifsTravail = document.querySelector(".tarifsTravail");

const un = document.querySelector(".un");
const unUn = document.querySelector(".unUn");
const deux = document.querySelector(".deux");
const deuxDeux = document.querySelector(".deuxDeux");
const trois = document.querySelector(".trois");
const troisTrois = document.querySelector(".troisTrois");
const quatre = document.querySelector(".quatre");
const quatreQuatre = document.querySelector(".quatreQuatre");
const cinq = document.querySelector(".cinq");
const cinqCinq = document.querySelector(".cinqCinq");
const sixx = document.querySelector(".sixx");
const sixxSixx = document.querySelector(".sixxSixx");
const sept = document.querySelector(".sept");
const septSept = document.querySelector(".septSept");
const huit = document.querySelector(".huit");
const huitHuit = document.querySelector(".huitHuit");
const neuf = document.querySelector(".neuf");
const neufNeuf = document.querySelector(".neufNeuf");
const dix = document.querySelector(".dix");
const dixDix = document.querySelector(".dixDix");
const onze = document.querySelector(".onze");
const onzeOnze = document.querySelector(".onzeOnze");
const douze = document.querySelector(".douze");
const douzeDouze = document.querySelector(".douzeDouze");
const treize = document.querySelector(".treize");
const treizeTreize = document.querySelector(".treizeTreize");
const quatze = document.querySelector(".quatze");
const quatzeQuatze = document.querySelector(".quatzeQuatze");
const quinze = document.querySelector(".quinze");
const quinzeQuinze = document.querySelector(".quinzeQuinze");
const sieze = document.querySelector(".seize");
const seizeSeize = document.querySelector(".seizeSeize");
const dixsept = document.querySelector(".dixsept");
const dixseptDixsept = document.querySelector(".dixseptDixsept");
const dixhuit = document.querySelector(".dixhuit");
const dixhuitDixhuit = document.querySelector(".dixhuitDixhuit");
const dixneuf = document.querySelector(".dixneuf");
const dixneufDixneuf = document.querySelector(".dixneufDixneuf");
const vingt = document.querySelector(".vingt");
const vingtVingt = document.querySelector(".vingtVingt");

const unPar = document.querySelector(".unPar");
const deuxPar = document.querySelector(".deuxPar");
const troisPar = document.querySelector(".troisPar");
const quatrePar = document.querySelector(".quatrePar");
const cinqPar = document.querySelector(".cinqPar");
const sixPar = document.querySelector(".sixPar");
const septPar1 = document.querySelector(".septPar1");
const septPar2 = document.querySelector(".septPar2");
const septPar3 = document.querySelector(".septPar3");
const huitPar = document.querySelector(".huitPar");
const neufPar = document.querySelector(".neufPar");
const dixPar = document.querySelector(".dixPar");
const onzePar = document.querySelector(".onzePar");
const douzePar = document.querySelector(".douzePar");
const treizePar = document.querySelector(".treizePar");
const quatorzePar = document.querySelector(".quatorzePar");
const quinzePar = document.querySelector(".quinzePar");
const seizePar = document.querySelector(".seizePar");
const dixseptPar = document.querySelector(".dixseptPar");
const dixhuitPar = document.querySelector(".dixhuitPar");
const dixneufPar = document.querySelector(".dixneufPar");
const vingtPar = document.querySelector(".vingtPar");

const logoUn = document.querySelector(".logoUn");
const logoDeux = document.querySelector(".logoDeux");
const logoTrois = document.querySelector(".logoTrois");
const logoQuatre = document.querySelector(".logoQuatre");
const logoCinq = document.querySelector(".logoCinq");
const logoSix = document.querySelector(".logoSix");
const logoSept = document.querySelector(".logoSept");
const logoHuit = document.querySelector(".logoHuit");
const logoNeuf = document.querySelector(".logoNeuf");
const logoDix = document.querySelector(".logoDix");
const logoOnze = document.querySelector(".logoOnze");
const logoDouze = document.querySelector(".logoDouze");
const logoTreize = document.querySelector(".logoTreize");
const logoQuatorze = document.querySelector(".logoQuatorze");
const logoQuinze = document.querySelector(".logoQuinze");
const logoSeize = document.querySelector(".logoSeize");
const logoDixsept = document.querySelector(".logoDixsept");
const logoDixhuit = document.querySelector(".logoDixhuit");

const flyerUn = document.querySelector(".flyerUn");
const flyerDeux = document.querySelector(".flyerDeux");
const flyerTrois = document.querySelector(".flyerTrois");

const headPriceUn = document.querySelector(".headPriceUn");
const startfromUn = document.querySelector(".startfromUn");
const tarifparUn1 = document.querySelector(".tarifparUn1");
const tarifparUn2 = document.querySelector(".tarifparUn2");
const tarifparUn3 = document.querySelector(".tarifparUn3");
const tarifparUn4 = document.querySelector(".tarifparUn4");
const comUn = document.querySelector(".comUn");

const headPriceDeux = document.querySelector(".headPriceDeux");
const startfromDeux = document.querySelector(".startfromDeux");
const tarifparDeux1 = document.querySelector(".tarifparDeux1");
const tarifparDeux2 = document.querySelector(".tarifparDeux2");
const tarifparDeux3 = document.querySelector(".tarifparDeux3");
const tarifparDeux4 = document.querySelector(".tarifparDeux4");
const comDeux = document.querySelector(".comDeux");

const headPriceTrois = document.querySelector(".headPriceTrois");
const startfromTrois = document.querySelector(".startfromTrois");
const tarifparTrois1 = document.querySelector(".tarifparTrois1");
const tarifparTrois2 = document.querySelector(".tarifparTrois2");
const tarifparTrois3 = document.querySelector(".tarifparTrois3");
const tarifparTrois4 = document.querySelector(".tarifparTrois4");
const comTrois = document.querySelector(".comTrois");

const headPriceQuatre = document.querySelector(".headPriceQuatre");
const startfromQuatre = document.querySelector(".startfromQuatre");
const tarifparQuatre1 = document.querySelector(".tarifparQuatre1");
const tarifparQuatre2 = document.querySelector(".tarifparQuatre2");
const tarifparQuatre3 = document.querySelector(".tarifparQuatre3");
const tarifparQuatre4 = document.querySelector(".tarifparQuatre4");
const comQuatre = document.querySelector(".comQuatre");


const headPriceCinq = document.querySelector(".headPriceCinq");
const tarifparCinq1 = document.querySelector(".tarifparCinq1");
const tarifparCinq2 = document.querySelector(".tarifparCinq2");
const tarifparCinq3 = document.querySelector(".tarifparCinq3");
const tarifparCinq4 = document.querySelector(".tarifparCinq4");
const comCinq = document.querySelector(".comCinq");


const headPriceSix = document.querySelector(".headPriceSix");
const startfromSix = document.querySelector(".startfromSix");
const tarifparSix1 = document.querySelector(".tarifparSix1");
const tarifparSix2 = document.querySelector(".tarifparSix2");
const tarifparSix3 = document.querySelector(".tarifparSix3");
const tarifparSix4 = document.querySelector(".tarifparSix4");
const comSix = document.querySelector(".comSix");

const contactTravail = document.querySelector(".contactTravail");
const meContacter2 = document.querySelector(".meContacter2");
const hiddenlabelmail2 = document.querySelector(".hiddenlabelmail2");
const hiddenlabelmessage2 = document.querySelector(".hiddenlabelmessage2");
const envoyer2 = document.querySelector(".envoyer2");


btnRu.addEventListener("click", () => {
    graphiste.textContent = "Разработчик & Дизайнер.";
    moi.textContent = "ОБО МНЕ";
    applications.textContent = "ПРИЛОЖЕНИЯ";
    web.textContent = "САЙТЫ";
    logos.textContent = "ЛОГОТИПЫ";
    flyer.textContent = "МЕНЮ/ФЛАЕРЫ";
    tarifs.textContent = "СТОИМОСТЬ";
    contacter.textContent = "связаться";
    compter.textContent = "счётчик визитов";
    travail.textContent = "Я фрилансер - графический дизайнер и web-разработчик. Делаю красивые сайты, логотипы и афиши. И я обожаю свою работу!";
    linelink.textContent = "Посмотреть мои сертификаты здесь.";
    meContacter.textContent = "СВЯЗАТЬСЯ";
    hiddenlabelmail.innerHTML = "Ваша почта:";
    hiddenlabelmessage.innerHTML = "Напишите что-нибудь:";
    envoyer.textContent= "ОТПРАВИТЬ";
    mesApplications.textContent= "Мои Приложения";
    faciliter.textContent= "Чтобы сделать жизнь проще.";

    un.textContent= "КАЛЬКУЛЯТОР";
    unUn.textContent= "НДС";
    deux.textContent= "Лист";
    deuxDeux.textContent= "покупок";
    trois.textContent= "отсчёт";
    troisTrois.textContent= "затмение";
    quatre.textContent= "метео";
    quatreQuatre.textContent= "сводка";
    cinq.textContent= "фраза";
    cinqCinq.textContent= "дня";
    sixx.textContent= "кухонный";
    sixxSixx.textContent= "будильник";
    sept.textContent= "выбор";
    septSept.textContent= "медитации";
    huit.textContent= "чайный";
    huitHuit.textContent= "будильник";
    neuf.textContent= "предсказание";
    neufNeuf.textContent= "дня";
    dix.textContent= "быстрый";
    dixDix.textContent= "квиз";
    onze.textContent= "обратный";
    onzeOnze.textContent= "отсчёт";
    douze.textContent= "калькулятор";
    douzeDouze.textContent= "распродаж";
    treize.textContent= "бабулины";
    treizeTreize.textContent= "рецепты";
    quatze.textContent= "идея для";
    quatzeQuatze.textContent= "ужина";
    dixneuf.textContent= "анимация";
    dixneufDixneuf.textContent= "hi";
    vingt.textContent= "5 минут для";
    vingtVingt.textContent= "мамы";

    unPar.textContent= "простой и понятный";
    deuxPar.textContent= "ничего не забыть";
    troisPar.textContent= "12 августа 2026";
    quatrePar.textContent= "в реальном времени";
    cinqPar.textContent= "поможет смотивироваться";
    sixPar.textContent= "пожожет с готовкой";
    septPar1.textContent= "волны";
    septPar2.textContent= "дождь";
    septPar3.textContent= "природа";
    huitPar.textContent= "для любителей чая";
    neufPar.textContent= "довериться вселенной";
    dixPar.textContent= "проверить знания";
    onzePar.textContent= "для важного события";
    douzePar.textContent= "упростит шопинг";
    treizePar.textContent= "вкус детства";
    quatorzePar.textContent= "упростит выбор";
    quinzePar.textContent= "оставаться доступным";
    seizePar.textContent= "представить новое меню";
    dixseptPar.textContent= "обновить стиль";
    dixhuitPar.textContent= "привлечь новых клиентов";
    dixneufPar.textContent= "свободное использование";
    vingtPar.textContent= "занять детей";
    
    webRazdel.textContent = "САЙТЫ";
    webTravail.textContent= "Нужен красивый сайт с классной мобильной версией? Сделаю с удовольствием!";

    quinze.textContent= "тайский";
    quinzeQuinze.textContent= "ресторан";
    sieze.textContent= "мароканский";
    seizeSeize.textContent= "ресторан";
    dixsept.textContent= "кабинет";
    dixseptDixsept.textContent= "адвоката";
    dixhuit.textContent= "производство";
    dixhuitDixhuit.textContent= "мебели";

    logosRazdel.textContent = "ЛОГОТИПЫ";
    logosTravail.textContent= "Создавать логотипы - моя страсть!";

    logoUn.textContent= "Клуб по Cornhole";
    logoDeux.textContent= "магазин видеоигр";
    logoTrois.textContent= "поставщик электроэнергии";
    logoQuatre.textContent= "день республики чувашия";
    logoCinq.textContent= "школа программирования";
    logoSix.textContent= "интернет-магазин";
    logoSept.textContent= "интернет-магазин";
    logoHuit.textContent= "магазин здорового питания";
    logoNeuf.textContent= "ресторан";
    logoDix.textContent= "мобильное приложение";
    logoOnze.textContent= "интернет-магазин";
    logoDouze.textContent= "магазин игрушек";
    logoTreize.textContent= "лаборатория";
    logoQuatorze.textContent= "производитель окон";
    logoQuinze.textContent= "бюро переводчиков";
    logoSeize.textContent= "школа танца";
    logoDixsept.textContent= "доставка плова";
    logoDixhuit.textContent= "интернет-магазин";

    flyerRazdel.textContent = "МЕНЮ/ФЛАЕРЫ";
    flyerTravail.textContent= "Необходимый элемент вашего ресторана";

    flyerUn.textContent= "русский ресторан";
    flyerDeux.textContent= "тайский ресторан";
    flyerTrois.textContent= "афиша кинофестиваля";

    tarifsRazdel.textContent = "Стоимость";
    tarifsTravail.textContent= "Приступим к вашему проекту.";

    headPriceUn.textContent = "Сайт-ВИЗИТКА";
    startfromUn.textContent = "от";
    tarifparUn1.textContent = "1 страница";
    tarifparUn2.textContent = "Мобильная версия";
    tarifparUn3.textContent = "Сопровождение";
    tarifparUn4.textContent = "Сроки: 4 дня";
    comUn.textContent = "ЗАКАЗАТЬ";

    headPriceDeux.textContent = "КОМПЛЕКСНЫЙ сайт";
    startfromDeux.textContent = "от";
    tarifparDeux1.textContent = "Интернет-магазин";
    tarifparDeux2.textContent = "Мобильная версия";
    tarifparDeux3.textContent = "Сопровождение";
    tarifparDeux4.textContent = "Сроки: 10-30 дней";
    comDeux.textContent = "ЗАКАЗАТЬ";

    headPriceTrois.textContent = "ЛОГОТИП";
    startfromTrois.textContent = "от";
    tarifparTrois1.textContent = "от 3-х вариантов";
    tarifparTrois2.textContent = "Правки";
    tarifparTrois3.textContent = "Векторные исходники + PNG";
    tarifparTrois4.textContent = "Сроки: 5 дней";
    comTrois.textContent = "ЗАКАЗАТЬ";

    headPriceQuatre.textContent = "Флаер / Меню";
    startfromQuatre.textContent = "от";
    tarifparQuatre1.textContent = "1-2 варианта";
    tarifparQuatre2.textContent = "Правки";
    tarifparQuatre3.textContent = "Формат PDF";
    tarifparQuatre4.textContent = "Сроки: 3 дня";
    comQuatre.textContent = "ЗАКАЗАТЬ";

    headPriceCinq.textContent = "ВИЗИТКА";
    tarifparCinq1.textContent = "от 3-х варинтов";
    tarifparCinq2.textContent = "Правки";
    tarifparCinq3.textContent = "Формат PDF";
    tarifparCinq4.textContent = "Сроки: 1 день";
    comCinq.textContent = "ЗАКАЗАТЬ";

    headPriceSix.textContent = "Ретушь ФОТО";
    startfromSix.textContent = "от";
    tarifparSix1.textContent = "Мои пресеты";
    tarifparSix2.textContent = "Правки";
    tarifparSix3.textContent = "Исходные файлы";
    tarifparSix4.textContent = "Сроки: 1-5 дней";
    comSix.textContent = "ЗАКАЗАТЬ";

    contactTravail.textContent = "Появились вопросы или хотите сотрудничать? Пишите, буду рада ответить.";
    meContacter2.textContent = "СВЯЗАТЬСЯ";
    hiddenlabelmail2.innerHTML = "Ваша почта:";
    hiddenlabelmessage2.innerHTML = "Напишите что-нибудь:";
    envoyer2.textContent= "ОТПРАВИТЬ";
});

btnEn.addEventListener("click", () => { 
    graphiste.textContent = "WEB Developer & Graphic Designer.";
    moi.textContent = "ABOUT";
    applications.textContent = "APPLICATIONS";
    web.textContent = " WEB SITES";
    logos.textContent = "LOGOS";
    flyer.textContent = "FLYER/MENU";
    tarifs.textContent = "TARIFS";
    contacter.textContent = "Contact";
    compter.textContent = "visit counter";
    travail.textContent = "I am a freelancer -  Front-End Developerr and Graphic Designer. I do websites, logotypes, classic print design, branding and development. And i like my work!";
    linelink.textContent = "My certificates.";
    meContacter.textContent = "CONTACT ME"
    hiddenlabelmail.textContent = "Your e-mail:"
    hiddenlabelmessage.textContent = "Your message:";
    envoyer.textContent= "SEND";
    mesApplications.textContent= "Applications";
    faciliter.textContent= "Making your life easy.";

    un.textContent= "TAX";
    unUn.textContent= "CALCULATOR";
    deux.textContent= "shopping";
    deuxDeux.textContent= "list";
    trois.textContent= "eclipse";
    troisTrois.textContent= "countdown";
    quatre.textContent= "meteo";
    quatreQuatre.textContent= "now";
    cinq.textContent= "day";
    cinqCinq.textContent= "motivation";
    sixx.textContent= "kitchen";
    sixxSixx.textContent= "timer";
    sept.textContent= "your";
    septSept.textContent= "meditation";
    huit.textContent= "tea";
    huitHuit.textContent= "time";
    neuf.textContent= "day";
    neufNeuf.textContent= "prediction";
    dix.textContent= "quiz";
    dixDix.textContent= "minute";
    onze.textContent= "event";
    onzeOnze.textContent= "countdown";
    douze.textContent= "sale";
    douzeDouze.textContent= "calculator";
    treize.textContent= "grandma";
    treizeTreize.textContent= "recipes";
    quatze.textContent= "dinner";
    quatzeQuatze.textContent= "idea";
    dixneuf.textContent= "animation";
    dixneufDixneuf.textContent= "hi";
    vingt.textContent= "5 minuts for";
    vingtVingt.textContent= "mom";

    unPar.textContent= "simple and efficient";
    deuxPar.textContent= "forget nothing";
    troisPar.textContent= "12 august 2026";
    quatrePar.textContent= "In real time";
    cinqPar.textContent= "Find the motivation";
    sixPar.textContent= "easy cook";
    septPar1.textContent= "WAVES";
    septPar2.textContent= "RAIN";
    septPar3.textContent= "NATURE";
    huitPar.textContent= "for tea lovers";
    neufPar.textContent= "Trust the universe";
    dixPar.textContent= "check your knowledge";
    onzePar.textContent= "always remember";
    douzePar.textContent= "easy shopping";
    treizePar.textContent= "taste of childhood";
    quatorzePar.textContent= "easy choice";
    quinzePar.textContent= "stay online";
    seizePar.textContent= "Present the new menu";
    dixseptPar.textContent= "new image";
    dixhuitPar.textContent= "bring in new customers";
    dixneufPar.textContent= "free use";
    vingtPar.textContent= "children busy";

    webRazdel.textContent = " WEB SITES";
    webTravail.textContent= "Looking for a beautiful website with a cool mobile version? With a pleasure!";

    quinze.textContent= "thai";
    quinzeQuinze.textContent= "restaurant";
    sieze.textContent= "Morocco";
    seizeSeize.textContent= "restaurant";
    dixsept.textContent= "law";
    dixseptDixsept.textContent= "firm";
    dixhuit.textContent= "kitchen";
    dixhuitDixhuit.textContent= "designer";

    logosRazdel.textContent = "LOGOS";
    logosTravail.textContent= "Making logos - is my passion!";

    logoUn.textContent= "Cornhole club";
    logoDeux.textContent= "online shop";
    logoTrois.textContent= "electricity supplier";
    logoQuatre.textContent= "national day";
    logoCinq.textContent= "online school";
    logoSix.textContent= "online shop";
    logoSept.textContent= "online shop";
    logoHuit.textContent= "online market";
    logoNeuf.textContent= "restaurant";
    logoDix.textContent= "mobile appli";
    logoOnze.textContent= "online shop";
    logoDouze.textContent= "online shop";
    logoTreize.textContent= "laboratory";
    logoQuatorze.textContent= "window manufacturer";
    logoQuinze.textContent= "translation bureau";
    logoSeize.textContent= "dance school";
    logoDixsept.textContent= "food delivery";
    logoDixhuit.textContent= "online shop";

    flyerRazdel.textContent = "FLYER / MENU";
    flyerTravail.textContent= "Necessary for your restaurant";

    flyerUn.textContent= "Russian restaurant";
    flyerDeux.textContent= "Thai restaurant";
    flyerTrois.textContent= "film festival poster";

    tarifsRazdel.textContent = "Tarifs";
    tarifsTravail.textContent= "Let's go for your project.";

    headPriceUn.textContent = "Simple WEB Site";
    startfromUn.textContent = "start from";
    tarifparUn1.textContent = "Landing page";
    tarifparUn2.textContent = "Mobile version";
    tarifparUn3.textContent = "Help with a hosting";
    tarifparUn4.textContent = "Creation: 4 days";
    comUn.textContent = "ORDER";

    headPriceDeux.textContent = "Your WEB Site";
    startfromDeux.textContent = "start from";
    tarifparDeux1.textContent = "E-commerce integration";
    tarifparDeux2.textContent = "Mobile version";
    tarifparDeux3.textContent = "Help with a hosting";
    tarifparDeux4.textContent = "Creation: 10-30 days";
    comDeux.textContent = "ORDER";

    headPriceTrois.textContent = "LOGO";
    startfromTrois.textContent = "start from";
    tarifparTrois1.textContent = "3 options minimum";
    tarifparTrois2.textContent = "Modifications";
    tarifparTrois3.textContent = "Vector + PNG files";
    tarifparTrois4.textContent = "Creation: 5 days";
    comTrois.textContent = "ORDER";

    headPriceQuatre.textContent = "Flyer / Menu";
    startfromQuatre.textContent = "start from";
    tarifparQuatre1.textContent = "1-2 options minimum";
    tarifparQuatre2.textContent = "Modifications";
    tarifparQuatre3.textContent = "PDF files";
    tarifparQuatre4.textContent = "Creation: 3 days";
    comQuatre.textContent = "ORDER";

    headPriceCinq.textContent = "Business card";
    tarifparCinq1.textContent = "3 options minimum";
    tarifparCinq2.textContent = "Modifications";
    tarifparCinq3.textContent = "PDF filesF";
    tarifparCinq4.textContent = "Creation: 1 day";
    comCinq.textContent = "ORDER";

    headPriceSix.textContent = "PHOTO Retouch";
    startfromSix.textContent = "start from";
    tarifparSix1.textContent = "My presets";
    tarifparSix2.textContent = "Modifications";
    tarifparSix3.textContent = "Source files";
    tarifparSix4.textContent = "Creation: 1-5 days";
    comSix.textContent = "ORDER";
    
    contactTravail.textContent = "If you have any questions about my services, or want to work together, feel free to contact me.";
    meContacter2.textContent = "CONTACT ME"
    hiddenlabelmail2.textContent = "Your e-mail:"
    hiddenlabelmessage2.textContent = "Your message:";
    envoyer2.textContent= "SEND";
});

btnFr.addEventListener("click", () => { 
    graphiste.textContent = "Développeuse WEB & Graphiste.";
    moi.textContent = "MOI";
    applications.textContent = "APPLICATIONS";
    web.textContent = "SITES WEB";
    logos.textContent = "LOGOS";
    flyer.textContent = "FLYER/MENU";
    tarifs.textContent = "Tarifs";
    contacter.textContent = "Contact";
    compter.textContent = "compteur de visites";
    travail.textContent = "Je suis designer indépendant - développeuse WEB et graphiste. Je crée des jolies sites internet, des logos, des affiches et des plaquettes. Et j'adore mon travail!";
    linelink.textContent = "Voir mes certificats ici.";
    meContacter.textContent = " ME CONTACTER";
    hiddenlabelmail.textContent = "Votre email:";
    hiddenlabelmessage.textContent = "Votre message:";
    envoyer.textContent= "ENVOYER";
    mesApplications.textContent= "Mes Applications";
    faciliter.textContent= "Pour faciliter la vie.";

    un.textContent= "CALCULATRICE";
    unUn.textContent= "TVA";
    deux.textContent= "shopping";
    deuxDeux.textContent= "list";
    trois.textContent= "countdown";
    troisTrois.textContent= "éclipse";
    quatre.textContent= "météo";
    quatreQuatre.textContent= "now";
    cinq.textContent= "phrase du";
    cinqCinq.textContent= "jour";
    sixx.textContent= "Minuteur de";
    sixxSixx.textContent= "cuisine";
    sept.textContent= "Relaxation";
    septSept.textContent= "Méditation";
    huit.textContent= "tea";
    huitHuit.textContent= "time";
    neuf.textContent= "Prédiction du";
    neufNeuf.textContent= "jour";
    dix.textContent= "quiz";
    dixDix.textContent= "minute";
    onze.textContent= "Évènement";
    onzeOnze.textContent= "countdown";
    douze.textContent= "Calculatrice de";
    douzeDouze.textContent= "soldes";
    treize.textContent= "Recettes de";
    treizeTreize.textContent= "mamie";
    quatze.textContent= "Ideés de";
    quatzeQuatze.textContent= "recettes";
    dixneuf.textContent= "animation";
    dixneufDixneuf.textContent= "hi";
    vingt.textContent= "5 minutes pour";
    vingtVingt.textContent= "maman";

    unPar.textContent= "Simple et efficace";
    deuxPar.textContent= "Pour rien oublier";
    troisPar.textContent= "12 août 2026";
    quatrePar.textContent= "En temp réel";
    cinqPar.textContent= "Trouver la motivation";
    sixPar.textContent= "Réussir de bons petits plats";
    septPar1.textContent= "VAGUES";
    septPar2.textContent= "pluie";
    septPar3.textContent= "nature";
    huitPar.textContent= "Minuteur pour les amateurs de thé";
    neufPar.textContent= "Faire confiance à l'univers";
    dixPar.textContent= "Tester ses connaissances";
    onzePar.textContent= "Pour ne pas oublier";
    douzePar.textContent= "Shopping facile";
    treizePar.textContent= "Retrouver le goût de l'enfance";
    quatorzePar.textContent= "Pour faciliter le choix";
    quinzePar.textContent= "Augmentez la visibilité";
    seizePar.textContent= "Présentez la nouvelle carte";
    dixseptPar.textContent= "Moderniser votre image";
    dixhuitPar.textContent= "Attirer de nouveaux clients";
    dixneufPar.textContent= "libre utilisation";
    vingtPar.textContent= "occuper les enfants";

    webRazdel.textContent = "SITES WEB";
    webTravail.textContent= "Vous avez besoin un jolie site internet parfaitement adapté au smartphone? C'est avec plaisir!";

    quinze.textContent= "restaurant";
    quinzeQuinze.textContent= "THAЇ";
    sieze.textContent= "restaurant";
    seizeSeize.textContent= "Marocain";
    dixsept.textContent= "Cabinet";
    dixseptDixsept.textContent= "d'avocats";
    dixhuit.textContent= "Créateur de";
    dixhuitDixhuit.textContent= "cuisine";

    logosRazdel.textContent = "LOGOS";
    logosTravail.textContent= "Création des logos - c'est ma passion!";

    logoUn.textContent= "BREIZHOLE CLUB QUIMPEROIS";
    logoDeux.textContent= "BOUTIQUE DE JEUX VIDÉO";
    logoTrois.textContent= "FOURNISSEUR D'ELECTRICITÉ";
    logoQuatre.textContent= "FÊTE NATIONALE";
    logoCinq.textContent= "Ecole en ligne";
    logoSix.textContent= "Boutique en ligne";
    logoSept.textContent= "Boutique en ligne";
    logoHuit.textContent= "Marché";
    logoNeuf.textContent= "Restaurant traditionel";
    logoDix.textContent= "Applications mobile musique";
    logoOnze.textContent= "Boutique de mode";
    logoDouze.textContent= "Magasin de jouets";
    logoTreize.textContent= "Laboratoire";
    logoQuatorze.textContent= "Fabricant de fenêtres";
    logoQuinze.textContent= "Bureau de traduction";
    logoSeize.textContent= "Ecole de dance";
    logoDixsept.textContent= "Livrason de repas";
    logoDixhuit.textContent= "Boutique";

    flyerRazdel.textContent = "FLYER / MENU";
    flyerTravail.textContent= "Element essentiel pour votre restaurant.";

    flyerUn.textContent= "RESTAURANT RUSSE";
    flyerDeux.textContent= "RESTAURANT THAÏ";
    flyerTrois.textContent= "AFFICHE DE FESTIVAL";
    
    tarifsRazdel.textContent = "Tarifs";
    tarifsTravail.textContent= "Commençons votre projet.";

    headPriceUn.textContent = "Site WEB Simple";
    startfromUn.textContent = "à partir de";
    tarifparUn1.textContent = "Site vitrine - 1 page";
    tarifparUn2.textContent = "Adapté au mobile";
    tarifparUn3.textContent = "Accompagnement";
    tarifparUn4.textContent = "Création en 4 jours";
    comUn.textContent = "COMMANDER";

    headPriceDeux.textContent = "Site WEB Complexe";
    startfromDeux.textContent = "à partir de";
    tarifparDeux1.textContent = "Integration E-commerce";
    tarifparDeux2.textContent = "Adapté au mobile";
    tarifparDeux3.textContent = "Aide avec hébergement web";
    tarifparDeux4.textContent = "Création en 10-30 jours";
    comDeux.textContent = "COMMANDER";

    headPriceTrois.textContent = "LOGO";
    startfromTrois.textContent = "à partir de";
    tarifparTrois1.textContent = "Minimum 3 Propositions";
    tarifparTrois2.textContent = "Modifications/Retouches";
    tarifparTrois3.textContent = "Les fichier Sources vector + PNG";
    tarifparTrois4.textContent = "Création en 5 jours";
    comTrois.textContent = "COMMANDER";

    headPriceQuatre.textContent = "Flyer / Menu";
    startfromQuatre.textContent = "à partir de";
    tarifparQuatre1.textContent = "1-2 Propositions";
    tarifparQuatre2.textContent = "Modifications/Retouches";
    tarifparQuatre3.textContent = "Format PDF";
    tarifparQuatre4.textContent = "Création en 3 jours";
    comQuatre.textContent = "COMMANDER";

    headPriceCinq.textContent = "Cartes de visite";
    tarifparCinq1.textContent = "Minimum 3 Propositions";
    tarifparCinq2.textContent = "Modifications/Retouches";
    tarifparCinq3.textContent = "Format PDF";
    tarifparCinq4.textContent = "Création en 1 journée";
    comCinq.textContent = "COMMANDER";

    headPriceSix.textContent = "Retouche PHOTO";
    startfromSix.textContent = "à partir de";
    tarifparSix1.textContent = "Mes presets";
    tarifparSix2.textContent = "Modifications";
    tarifparSix3.textContent = "Les fichier Sources";
    tarifparSix4.textContent = "Création: 1-5 jours";
    comSix.textContent = "COMMANDER";

    contactTravail.textContent = "Je suis à votre disposition pour répondre à vos questions ou toute demande d’informations.";
    meContacter2.textContent = " ME CONTACTER";
    hiddenlabelmail2.textContent = "Votre email:";
    hiddenlabelmessage2.textContent = "Votre message:";
    envoyer2.textContent= "ENVOYER";
});



// const swiper = document.querySelector('.swiper').swiper;
const openSearchBtn = document.getElementById('open-search');
const searchArea = document.querySelector('.nav__search');
const navItems = document.querySelector('.nav__items');
const closeSearchBtn = document.getElementById('close-search-btn');
const stepBtns = document.querySelectorAll('.work-step');
const questionBlocks = document.querySelectorAll('.questions-block__question-block');
const heading = document.querySelector('.consult-txt__title');
const body = document.querySelector('.consult-txt__text');
const img = document.querySelector('.consult-block__img');

const steps = [
    {
        title: 'Проводим консультацию',
        body: 'Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.',
        img: 'img/steps/step1.jpg'
    },
    {
        title: 'Составляем смету',
        body: 'Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.',
        img: 'img/steps/step2.jpg'
    },
    {
        title: 'Привлекаем подрядчиков',
        body: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.',
        img: 'img/steps/step3.jpg'
    },
    {
        title: 'Инспектируем все этапы работ',
        body: 'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.',
        img: 'img/steps/step4.jpg'
    }
];

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

openSearchBtn.addEventListener('click', () => {
    openSearchBtn.style.display = 'none';
    navItems.style.display = 'none';
    searchArea.style.display = 'block';
});

closeSearchBtn.addEventListener('click', (e) => {
    openSearchBtn.style.display = 'block';
    navItems.style.display = 'flex';
    searchArea.style.display = 'none';
    e.preventDefault();
})

stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        stepBtns.forEach(btn => {
            btn.classList.remove('work-step-active');
        })
        for (let i = 0; i <= 4; i++){
            btn.classList.add('work-step-active');
            if (btn.classList.contains('work-step' + (i + 1))){
                heading.textContent = steps[i].title;
                body.textContent = steps[i].body;
                img.setAttribute('src', steps[i].img);
            }
        }
    })
})


questionBlocks.forEach(block => {
    block.addEventListener('click', () => {
        let btn = block.querySelector('.question__btn');
        btn.classList.toggle('question__btn_active');
        for (let i=1; i <= questionBlocks.length; i++){
            let questionText1 = document.createElement("p");
            questionText1.textContent = 'Являясь всего лишь частью общей картины, непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы. Но высококачественный прототип будущего проекта является качественно новой ступенью первоочередных требований. А ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть указаны как претенденты на роль ключевых факторов.';
            let questionText2 = document.createElement("p");
            questionText2.textContent = 'Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к ответу. Явные признаки победы институционализации набирают популярность среди определенных слоев населения, а значит, должны быть объединены в целые кластеры себе подобных. Банальные, но неопровержимые выводы, а также многие известные личности призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.';
            questionText1.classList.add('question-body');
            questionText2.classList.add('question-body');

            if (btn.classList.contains('question__btn_active')){
                if (block.classList.contains('question' + i)){
                    block.append(questionText1);
                    block.append(questionText2);
                }
            } else{
                let questionTexts = block.querySelectorAll('.question-body');
                questionTexts[0].remove();
            }
        }
    })
});



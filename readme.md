### deploy: https://daryaenina.github.io/funbox/

### Q1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

⋅⋅* пользователя: в хорошей верстке пользователю интуитивно понятны шаги и взаимодействие с сайтом. Кнопки визуально нажимаются, элементы выстроены в четкий блок
⋅⋅* менеджера проекта: хорошая верстка закрывает все запросы клиента, задачи BA, идеи дизайнеров и т.д.
⋅⋅* дизайнера: задумки и идеи дизайнера должны быть в точности перенесены в верстку
⋅⋅* верстальщика: хорошая верстка – семантическая верстка, адаптивная, по БЭМ
⋅⋅* клиентского программиста: в хорошей верстке код легко читаемый, структурируемый, разбит на модули, которые отвечают каждый за свою фичу, без дублирования.
⋅⋅* серверного программиста: хорошая верстка посылает на сервер правильные запросы из правильных мест. Т.е. запрос по кнопке, а не по тегу <p>.

### Q2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.

Верстка должна быть разбита на компоненты, которые можно переиспользовать. Хэдер и футер отдельно, статические страницы отдельно, одинаковые элементы отдельным компонентом. Это принцип DRY, который против дублирования кода. Модульный подход позволит проще ориентироваться в коде при последующих изменениях. Константы цветов, шрифтов, и других стилей должны быть вынесены отдельно, чтобы не искать их по всему проекту.

### Q3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Верстка должны быть адаптивной и (или) резиновой, и подходить под требуемые устройства. При разных разрешениях положение элементов должно подстраиваться под размер экрана, как задумано дизайнерами. Для этого в чистом CSS предусмотрены брэйкпоинты – те разрешения, на которых происходят адаптивные изменения. Для каждого брэйкпоинта прописываются необходимые для изменений стили. Для адаптивной верстки я использую devTools браузера device toolbar, в котором можно задавать разрешения и верстать под них. Чаще всего я верста:
⋅⋅* для смартфонов — 320 px, 480 px и выше;
⋅⋅* для планшетов — 768 px и выше;
⋅⋅* для нетбуков — 1024 px и выше;
⋅⋅* для мониторов — 1280 px, 1600 px, 1920 px и выше.

### Q4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Разработку я веду в VC Code. Существует большое количество расширений для экономии времени в процессе написания кода.
⋅⋅* Eslint
⋅⋅* Prettier
⋅⋅* Auto Close Tag и Auto Rename Tag
⋅⋅* Bracket Pair Colorization
⋅⋅* Live server
⋅⋅* Live SASS compiler
Так же огромную роль в написании хорошего кода играет правильно настроенный webpack, с едиными для всех разработчиков проекта правилами.
Активно использую DevTools для верстки, отладки кода, отслеживания REST API запросов и прочего.
Расширения браузера так же важны: PerfectPixel, React Developer Tools и Redux DevTools

### Q5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

С подобной ситуацией сталкиваться не приходилось, но думаю devTools браузера поможет прояснить причину. При разработке нужно учитывать поддержку браузерами кода, использовать кроссбраузерную верстку и использовать при необходимости полифиллы.

### Q6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

1. Обращусь к дизайнеру за уточнениями
2. Если нет – к PM, BA, заказчику (по ситуации)
3. И если уж я осталась один на один с макетом без шансов на получение уточнения , буду делать на свое усмотрение, исходя из привычного использования пользователя.
4. А на случай, если все же мое видение не устроит – значит помощь все же пришла! И переделаю исходя их замечаний и предложений

### Q7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

1. Мой главный курс: https://rs.school
2. Главная настольная книга: https://learn.javascript.ru/
3. Главный источник официальной документации: https://developer.mozilla.org http://htmlbook.ru/ https://ru.reactjs.org/ и другие
4. Youtube каналы: IT-incubator, Vladilen Minin, WebDev и другие
5. Ну и конечно же, как без Google.com =)

Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё?
Больше всего мне нравится разработка SPA приложений, что обязательно включает и JS, и HTML/CSS, и даже иногда бэкэнд на Node.js и express.js
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
Управление проектами
Управление командой

### Q8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Меня зовут Дарья. Мне 32 года. За плечами 10тилетний опыт работы в продажах и управления отделом продаж. Но 2 года назад я навсегда закрыла для себя это направление и ушла в IT. Я изучала Frontend разработку в RSSchool – курс подготовки очень сильных разработчиков на проектах максимально приближенных к реальным. Некоторые этапы даже проходила дважды для закрепления знаний. Сертификаты RSSchool . В данный момент помогаю студентам в качестве ментора.
Мои работы:
⋅⋅* [RS-lang](https://github.com/DaryaEnina/RS-Lang) – приложение для изучения английского языка.
⋅⋅* [Trello](https://github.com/DaryaEnina/project-management-app) – приложение для управления проектами
⋅⋅* [Museum](https://github.com/DaryaEnina/museum) – адаптивная верстка и интерактивным поведением, лэндинг

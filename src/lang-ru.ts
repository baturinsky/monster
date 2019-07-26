let lang = {
lang:"Русский",
guide:
`
<span style="color:lightgrey">
ЛКМ - движение или остановка<br/>
ЛКМ на себя - ждать<br/>
NUMPAD - движение<br/>
Num5, пробел - ждать<br/>
Shift + 1-9: сохранение<br/>
1-9: загрузка<br/>
Shift + R: начать заново<br/>
Shift + L: переключить язык<br/>
ESC: меню<br/>
</span>
`,
save: "Сохранить",
load: "Загрузить",
new_game: "Новая Игра",
continue: "Продолжить",
saved_to: "Сохранено в {0}",
loaded_from: "Загружено из {0}",
no_save_in: "Нет сохранения в {0}",
me: "Это я. Обыкновенный ничем не примечательный человек.",
flower: "Цветок. Его вид меня успокаивает.<br/> <span class='important'>Я выкопаю его для неё.</span>",
flower_first: `Один из этих странных красных цветков <em>⚘</em>, которые ей нравятся. <span class='important'>Я соберу несколько штук для неё.</span> 
Она просила не повредить корни.`,
flower_mob_first: "<em>Как он ☺ смеет приближаться к цветку ⚘ !</em>",
collected: "Я аккуратно выкопал цветок <em>⚘</em> {0}",
collected_all: "Я собрал достатончо цветов. но её нет и следа. <span class='important'>может, она уже дома? Пойду проверю.</span>",
collected_even: "Четное число цыетов не принято дарить живым людям. Надеюсь, она не суеверная.",
tree: "Дремучий лес.",
exit: "Тропинка к деревне.",
entrance: "Путь обратно на тракт.",
blood: "Лужа крови. Откуда она тут?",
blood_old: "Похоже на засохнувшую кровь. Странно",
blood_trail: "Кровавый след. Довольно старый",
wall: "Старая, но крепкая избушка. Она живет тут.",
mob: "Чудовище",
mob_2: "Ловкое чудовище. Требуется спокойствие и расчет.",
mob_3: "Сильный монстр. Надо бить его изо всех сил.",
mob_4: "Старейшина.",
mob_first_0: "Одно из чудовищ <span style='background:darkred;font-weight:bold;'>☺</span>, наводнивших эти леса. В одиночку не особо опасно.",
mob_first_2: "Ловкая тварь. Я должен быть очень осторожным и <span class='important'>сдерживать мою ярость</span>, когда дерусь с ним.",
mob_first_3: "Огромный монстр. У него тослстая шкура, но я смогу пробить ее, если <span class='important'>вложу в атаку всю мою ярость.</span>.",
mob_first_4: `Это... ведь чудовище, да? Мне кажется, я видел это... его... раньше. Кажется, его называли Старейшиной. 
Похоже, оно... он пытается мне что-то сказать. Могу ли я ему доверять?`,
smell: "Пахучий шлейф.",
smell_first: `Эти твари пахнут
<span style='background:#a00'>&nbsp;</span><span style='background:#800'>&nbsp;</span><span style='background:#600'>&nbsp;</span><span style='background:#400'>&nbsp;</span>
отвратительно. Я могу унюхать вонючий шлейф издалека.`,
calm: "Немного отдохнув, я успокоился и огляделся.",
rage: "<span style='color:darkred'>Вид и даже запах этих тварей вызывают во мне ярость.</span>",
rage_more: "<em>Я взбешен. В любой моент могу сорваться.</em>",
seeing_red: "<em>ААААААА!</em>",
seeing_red_end: "Что этоб было?",
death: "<em>Чпок.</em>",
elder_angry: "Вот он <em>e</em>. Тот, кого я больше всех ненавижу. И кого мне не победить. Остается только бежать.",
elder_lose: "Бой с древним монстром окончился не успев начаться. Он несравнимо лучший боец, чем я.",
blue_victory: "Я аккуратно увернулся от его атаки и нанес точный удар.",
blue_lose: "Я бросился на него, но напоролся на молниеносный укол.",
red_victory: "Чудовище ошеломлено моими яростными атаками.",
red_lose: "Мои удары слишком слабы против него. А его собственный мощный удар вминает меня в землю.",
lose: "<span class='important'>Я падаю и у же не подымаюсь.<br/><br/>ИГРА ОКОНЧЕНА</span><br/><br/>Нажмите Escape для продолжения.",
not_here: "Её тут нет. Наверное, опять где-то в лесу собирает цветы. <span class='important'>Пойду поищу её.</span>",
mob_wary: "Оно смотрит на меня с подозрением.",
mob_afraid: "Оно дрожит от страха.",
mob_fleeing: "Оно удирает, визжа от ужаса.",
mob_startled: "☺ избегает меня.",
mob_flees: "☺ убегает.",
game_complete: "ИГРА ОКОНЧЕНА",
grave: "Свежая могила.",
escaped: "Чудовище сбежало. Уровень паники: {0}",
read_letter:[
"Её все не видно. О, уменя ведь осталось её письмо. Может быть, из него я что-то пойму? Я начинаю чтение:",
"Я продолжил читать письмо:",
"Я её все еще не нашёл. Может, она в деревне? Продолжу читать письмо:",
"Дочитываю письмо:"
],
close_letter:[
"Перед глазами плывет. Продолжу читать потом.",
"Опять она философствует? Никогда этого не понимал. Лучше вернусь к поискам.",
"Мне больно это читать. Закончу потом.",
"Это всё. Я смотрю на письмо в задумчивости. если бы она только знала... "
],
letter:[
`
Посылаю тебе это письмо с оказией. Об "оказии" раскажу подробнее потом.

Я в порядке, более или менее, надеюсь, ты тоже. Были некоторые подвижки в моем исследовании.
Я пока так и не нашла метод лечения, или даже причину болезни. Но появились кое-какие зацепки.
У местных есть особое название для этой болезни - Лесной Кашель. И, действительно, чаще всего 
оно встречается у тех, кто часто бывает в лесу. Т.е. у большинства жителей деревни. 
У них был плохой урожай, к тому же часть из ниго было растащено. Так что они ищут еду где могут.
На расстоянии мили вокруг деревни уже не найти ни животного, ни несобранного гриба или ягоды.
`,`
Я помогаю им чем могу, но получается сделать немного. Мне приходилось тут оперировать, применять лекарства,
которые я привезла с собой из города, кое-что удалось использовать из местных трав.
Но о помощи просят редко. Они не доверяю "чужакам" и я их за это не виню.
В наше время чужак - это слишком часто вор, грабитель или насильник. Люди убивают друг друга за буханку хлеба.
Люди заражены страхом, отчаянием и злобой - болезнями более смертельными и заразными чем любая из тех, что мы лечим.
Жаль, что болезни духа я не проходила. Так что остается сосредоточится на лечении тел.
`,`
До меня даже доходили слухи о каннибализме. Пока только слухи.
По крайней мере, я знаю, что местые своих мертвых хоронят как следует. Мне даже не разрешили сделать аутопсию.
Староста запретил даже думать об этом. И он прав, меня и так кое-кто тут называет "ведьмой".
Знаешь, мне действительно страшно. Жизнь здесь цениться так мало. И моя в том числе.
Крестьяне меня терпят, но кто знает, к чему их может привести страх или отчаяние.
И вместо "странной тетки в лесу" они действительно могут посчитать меня ведьмой, которая портит посевы. Или едой.
Я бы уже уехала, но на дорогах сейчас еще опаснее, чем здесь. К тому же, я все еще надеюсь найти как лечить это болезнь.
`,`
Да, насчет неё. Имходя из того, что я сказала в начале письма, причину болезни стоит искать в лесу.
Но что именно искать? Это может быть животное, насекомое, может длаже растение. Или какой-нибудь микроб. Хорошо, что я прихватила микроскоп....
Пока что ничего не нашла. Ну, кроме этого паренька, с которым я послала тебе письмо.
Он валялся на краю деревни, избитый до полусмерти.
Я его тут раньше не видела, так что он, видимо, один из бродящих по округе дезертов или беженцов. 
Может, его избил грабитель, а может, он сам попытался что-то украсть и попался.
Сам он на эту тему говорить не хочет и деревенских избегает, так что второе вполне вероятно.
Как ты догадываешься, я его залатала и прятала пару недель, пока он не оклемался.
А потом решила послать его к тебе с письмом. Надеюсь, он не выбросит его за первым поворотом.
Я сказала ему, что у тебя может быть для него работа, так что подумай об этом. Вроде, он неглупый парень. 
Я даже как-то поймала его за чтением моих записей, так что читать он умеет.
Может, я бы и сама с ним отправилось, но я все-таки не настолько ему доверяю.
`],
ending_denial:`
Это она! Смотрит на меня с улыбкой.
<div class="she">
О, ты собрал цветы! Как мило. А у меня хорошие новости.
Помнишь, я мечтала о том, чтобы найти лекарство от зла? Я его нашла!
Это запах этих цветов! Он действует медленно, но если долго его вдыхать, то он полностью уничтожит зло в любом человеке!
Не мог бы ты посадить эти цветы вокруг деревни?
</div>
<div class="ending-type">Окончание 1/5: Отрицание.</div>
`,
ending_anger:`
Разумеется, её тут нет. Кто выживет после потери такого количества крови?
Кто убил ее? Деревенские? Грабители? Какая разница...
Её больше нет. все, что осталось - зияющая пустота в моей душе.
Откуда это? Почему мне её так не хватает? Я прожил так долго не зная о её существовании, почему она так нужна мне сейчас?
Быть может, она всегда была нужна мне, я просто не знал этого. И боль от того, что её не было со мной,
была такой сильной, что я мог выдержать её, только выплескивая наружу.
<br/><br/>
Это многое бы объяснило...
<div class="ending-type">Окончание 2/5: Гнев.</div>
`,
ending_bargain:`
<div class="you">Ты мертва, так?</div>

<div class="she">Моё тело, похоже, да.</div>

<div class="you">А разве есть что-то ещё? Я не религиозен. И даже если бы я верил в вечную жихнь, твоей души тоже уже нет со мной.
Бог украл её у меня.</div>

<div class="she">Но еще остались дела, что я сделала. Люди, которым я помогла. Воспоминания обо мне.
Воспоминания - это то, что делает нас такими, какими мы есть, так ведь? Мой тело не может уже вместить воспоминания обо мне,
но твоё может.</div>

<div class="you">Ты хочешь сказать, что воспоминания о тебе сделать меня тобой?</div>

<div class="she">Ха ха, в какой-то мере. Ты хочешь этого?</div>

<div class="you">Лучше, чем быть мной, наверное. Ты думаешь, у меня получится? Быть таким же умным и добрыым, как ты? 
Помогать людям, зная, что они однажды могут меня за это убить? Я никогда не миогу заполнить дыру, которую ты оставила.
</div>

<div class="she">Полностью, наверное, нет. Но может быть, хотя бы частично. Ты сделаешь это?</div>

<div class="ending-type">Окончание 3/5: Торг.</div>
`,
ending_depression:`
Разумеется, её тут нет. Это её кровь. И тайник с книгами и записями не тронут. Она никогда бы их не оставила.
Похоже, один из её страхов стал реальностью.
<br/><br/>
Просмотрев её записи, я нашёл теорию о причинах болезни. Она думает, что она вызвана как раз теми цветами,
которые я сейчас собирал. Они вызывают аллергию, которая медленно, но верно губит лёгкие.
К счастью, эти цветы растут далеко не везде. Им нужно темное сырое место, и они распространяются довольно медленно.
Так что будет нетрудно их выполоть. Покажу это врачам в городе. Может, ещё раз попробовать найти того, которому она отправляла письмо?
<div class="ending-type">Ending 4/5: Depression/Acceptance.</div>
`,
ending_true:`
Что-то... кто-то, в ком я узнаю старосту деревни подходит ко мне.

<div class="elder">
Мне сказали что по лесу бродит ккой-то паренек с диким взглядом. Так это ты?
Ты, наверное, ищешь травницу? Она тут больше не живет.
Какой-то бандит пытался её ограбить и ударил её ножом, когда она закричала. Мы прибежали на помощь, но она уже потеряла много крови.
Она сейчас отлеживается у меня дома. Я могу проводить тебя к ней.
</div>

Я не доверю ему. Но... Может быть, это правда? Звучит логично. Такое простое объяснение. Наверное, я слишком быстро решил, что случилось худшее.
Я последовал за старостой, и потом...

Это она! Очень бледная, но живая. Она слабо улыбается мне.

<div class="she">Ах. Я, наверное, заставила тебя поволноваться.</div>
<div class="ending-type">Окончание 5/5: Иногда чудеса случаются.</div>
`
}

export default lang
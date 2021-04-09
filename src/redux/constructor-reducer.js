let intitialState = {
    goods: {
        boxes: [
            {
                id: 1,
                img: "https://thumb.tildacdn.com/tild3938-3031-4433-b036-656232343731/-/cover/360x400/center/center/-/format/webp/Craft.jpg",
                title: "Коробка картонна",
                description: "Класичний бокс з крафтового картону.\n" +
                    "В вартість включається тирса (деревна шерсть) та бечевка (мотузка).\n" +
                    "Розмір підбирається в залежності від складу*\n"
            },
            {
                id: 2,
                img: 'https://thumb.tildacdn.com/tild6635-6261-4831-a134-323139633934/-/cover/360x400/center/center/-/format/webp/IMG_3641.jpg',
                title: "Коробка дерев'яна",
                description: "Приємний на дотик матеріал\n" +
                    "Якісне гравіювання та зйомна кришка\n" +
                    "2 розміри на вибір:\n" +
                    "M - 25 х 25 х12 см\n" +
                    "L - 33 х 33 х12 см\n" +
                    "В вартість включається наповнювач (деревна шерсть)"
            },
        ],
        chocolate: [
            {
                id: 1,
                img: "https://thumb.tildacdn.com/tild3735-6263-4531-b664-373938306165/-/cover/360x400/center/center/-/format/webp/4E0267A0-D2C5-47F0-A.jpg",
                title: "Ritter Sport",
                description: "Ritter Sport - легендарний німецький шоколад в квадратних плитках по 100 грам.\n"
            },
            {
                id: 2,
                img: "https://thumb.tildacdn.com/tild3736-3131-4639-b366-656130373230/-/cover/360x400/center/center/-/format/webp/555F54D5-9ABA-4AAF-8.jpg",
                title: "\n" +
                    "Toblerone",
                description: "Власне рецепт Toblerone був вигаданий Теодором Тоблером та його двоюрідним братом Емілем Бауманном у 1908 році та включав у себе нугу, мигдаль, мед та молочний шоколад. "
            },
            {
                id: 3,
                img: "https://thumb.tildacdn.com/tild6238-3566-4866-a664-326430336533/-/cover/360x400/center/center/-/format/webp/IMG_1330_.jpg",
                title: "Упаковка Nutella B-ready",
                description: "Nutella B-ready - новий продукт в лінійці Nutella від компанії Ferrero, який являє собою упаковку з 6 хрумких батончиків з легендарною горіховою пастою Nutella всередині."
            },
        ],
        drinks: [
            {
                id: 1,
                img: "https://thumb.tildacdn.com/tild6238-3566-4866-a664-326430336533/-/cover/360x400/center/center/-/format/webp/IMG_1330_.jpg",
                title: "Напій OKF Aloe Vera",
                description: "OKF Farmer's Aloe Vera — один із найпопулярніших у світі напоїв з алое.\n" +
                    "Інгредієнти, що входять до його складу, повністю натуральні, алое вера походить з органічних плантацій, а консервантів та ароматизаторів немає. "
            },
            {
                id: 2,
                img: "https://thumb.tildacdn.com/tild3634-3962-4838-a631-663437313330/-/cover/360x400/center/center/-/format/webp/0DE6CAD0-8E93-44D9-A.jpg",
                title: "Dr. Pepper",
                description: "Dr. Pepper - легендарний солодкий напій родом із США. Ціна за 1 шт, 330 мл"
            },
            {
                id: 3,
                img: "https://thumb.tildacdn.com/tild6638-6439-4765-b737-363537383635/-/cover/360x400/center/center/-/format/webp/IMG_3887.jpg",
                title: "\n" +
                    "Pepsi",
                description: "Популярний солодкий напій Pepsi.\n" +
                    "Ціна за 1 баночку 0,33 л.\n" +
                    "Оберіть бажану кількість безспосередньо в кошику\n"
            },

        ],
        snacks: [
            {
                id: 1,
                img: "https://thumb.tildacdn.com/tild3630-6330-4338-b162-396435363133/-/cover/360x400/center/center/-/format/webp/byond.jpg",
                title: "Рисові Чіпси B.yond",
                description: "Рисові чіпси зі смаком сиру, паприки чи сметани з зеленню. Ціна за 1 шт, 70 г"
            },
            {
                id: 2,
                img: "https://thumb.tildacdn.com/tild3463-3764-4264-a137-336639393162/-/cover/360x400/center/center/-/format/webp/IMG_4523.jpg",
                title: "\n" +
                    "Чіпси Pringles",
                description: "Добре відомі хрусткі картопляні чіпси в звичному тубусі та із зображенням вусатого пекаря Джуліуса Прінгла." +
                    "\n" +
                    "Об'єм - 100 мл\n" +
                    "З любов'ю запаковані у стильні коробочки."
            },
            {
                id: 3,
                img: "https://thumb.tildacdn.com/tild3731-6261-4538-b165-323133363532/-/cover/360x400/center/center/-/format/webp/FE17CF26-967D-408B-9.jpg",
                title: "Арахіс",
                description: "Смачний та хрумкий арахіс в клярі з картопляного пюре з різними смаками. Ціна за 1 шт, 250 мл" +
                    "Ціна за 1 шт, 40 г"
            },
        ],
        others: [
            {
                id: 1,
                img: "https://thumb.tildacdn.com/tild3637-6435-4230-a263-326130363436/-/cover/360x400/center/center/-/format/webp/IMG_4990.JPG",
                title: "Желейки",
                description: "Всіма улюблені желатінові цукерки. Смак у асортименті. 200 мл насолоди, що здатні підняти настрій будь-кому. Ціна за 1 шт"
            },
            {
                id: 2,
                img: "https://static.tildacdn.com/tild3465-3938-4335-a138-613864333961/Martini_Orange.jpg",
                title: "Джем із Коктейлю",
                description: "Незвичайні джеми, зроблені із улюблених всіма коктейлів.\n" +
                    "\n" +
                    "Об'єм - 100 мл\n" +
                    "З любов'ю запаковані у стильні коробочки."
            },
            {
                id: 3,
                img: "https://static.tildacdn.com/tild3862-3539-4862-a631-623039643236/IMG_6325.jpg",
                title: "Енергетичні батончики",
                description: "Оберіть бажаний смак на селекторі\n" +
                    "Енергетічни батончики з натуральних інгредієнтів в яскравій упаковці.\n" +
                    "Не містять цукру.\n" +
                    "Ціна за 1 шт, 40 г"
            },
        ]
    }
}

let constructorReducer = (state = intitialState, action) => {

    switch (action.type) {

    }

    return state;
}

export default constructorReducer;
/* User из БД */
const user = {
    name: "Иван",
    lastname: "Иванов",
    email: "ru@ru.ru",
    id: "1",
    about: "Это я!",
    avatar: "https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg"
}


const users = {
    0: { name: "Кир", lastname: "Захарьин", id:2 },
    1: { name: "Мстислав", lastname: "Мамкин", id:34 },
    2: { name: "Кир", lastname: "Каипов", id:56 },
    3: { name: "Соломон", lastname: "Горчаков", id:57 },
    4: { name: "Бронислав", lastname: "Мигунов", id:35 },
    5: { name: "Галина", lastname: "Цвиленевa", id:43 },
    6: { name: "Элеонора", lastname: "Каиповa", id:45 },
    7: { name: "Соломон", lastname: "Левин", id:71 },
    8: { name: "Элеонора", lastname: "Горчаковa", id:82 },
    9: { name: "Рената", lastname: "Каиповa", id:84 },
    10: { name: "Владилен", lastname: "Цвиленев", id:90 },
    11: { name: "Вячеслав", lastname: "Яшихин", id:91 },
    12: { name: "Соломон", lastname: "Ярема", id:99 }
    }

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}

import {rerenderEntireTree} from "../index";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";



let store = {
    _state: {
        profilePage: {
            PostsItems: [
                {id: 1, text: 'Hello, my friend!'},
                {id: 2, text: 'My name is Pudge!'},
                {id: 3, text: 'Yeahhhhhhhhhhhhhhhhhhhh!'},
            ],
            PostItemText : '',
        },
        messagePage: {
            MessageItemText: "",
            DialogItems: [
                {
                    id: 1,
                    name: 'Alex Grant',
                    src: 'https://steamcdn-a.akamaihd.net/apps/570/icons/econ/items/nevermore/shadowfiend_demon_eater_large.292f663ae10cc1a345f17d801d1b523ad1288866.png'
                },
                {
                    id: 2,
                    name: 'Dima Pivo',
                    src: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Witch_Doctor_icon.png/revision/latest/scale-to-width-down/256?cb=20160411220105'
                },
                {
                    id: 3,
                    name: 'Danya Gebik',
                    src: 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/23/Axe_icon.png/revision/latest/scale-to-width-down/256?cb=20160411211422'
                },
                {id: 4, name: 'Sanya ne Poc', src: 'https://dota2.ru/img/heroes/sven/portrait.jpg'},
            ],
            MessageItems: [
                {id: 1, text: 'Hello my friend', isDeleted: false},
                {id: 2, text: 'YOOOOOOOOOOOO!!!!!', isDeleted: false},
                {id: 3, text: 'Where is my money??', isDeleted: false},
            ]
        }

    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.messagePage = messagesReducer(this._state.messagePage,action)

        rerenderEntireTree()
    }

}




window.store = store;
export default store;
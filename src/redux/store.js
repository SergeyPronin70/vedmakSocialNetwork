import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '1234' },
        { id: 2, message: 'It\'s my first post!', likesCount: '109' }
      ],
      newPostText: 'vedmachestvo'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Lambert', avatar: 'https://mtdata.ru/u7/photo8A3C/20886543783-0/original.jpg' },
        { id: 2, name: 'Ziri', avatar: 'https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg' }
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Eredin is Kurva' }
      ],
      newMessageBody: ''
    },
    friends: [
      { id: 1, name: 'Ziri', avatar: 'https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg' },
      { id: 2, name: 'Lambert', avatar: 'https://mtdata.ru/u7/photo8A3C/20886543783-0/original.jpg' }
    ]
  },
  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "It's my first post", likes_count: 10 },
        { id: 2, message: "Hello", likes_count: 7 },
        { id: 3, message: "How are you?", likes_count: 7 },
        { id: 4, message: "Bye", likes_count: 7 },
      ],

    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How is your day?" },
        { id: 3, message: "Bye!" },
        { id: 4, message: "Hi!" },
        { id: 5, message: "Hi!" },
      ],
      dialogs: [
        { id: 1, name: "Oleg" },
        { id: 2, name: "Nastya" },
        { id: 3, name: "Artem" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Katya" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

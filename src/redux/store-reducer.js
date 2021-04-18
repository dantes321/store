const initialState = {
  boxes: [
    {
      id: 1,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
    {
      id: 2,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
    {
      id: 3,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
    {
      id: 4,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
    {
      id: 5,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
    {
      id: 6,
      title: 'New Box Title',
      price: 600,
      img: 'https://youbox.com.ua/image/cache/catalog/categories/gift-box-800x800.png',
    },
  ],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default storeReducer;

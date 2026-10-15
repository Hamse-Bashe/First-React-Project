export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, comlpeted: !todo.comlpeted }
          : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
  }
};


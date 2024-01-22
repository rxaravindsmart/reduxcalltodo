const intialValue = {
  CallData: [],
  EditItem: "",
  isEdit: false,
  CallLog: [],
  LoginData: [],
};

export const DataReducer = (state = intialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_ITEM":
      const edited = payload;
      let newEdit = state.CallData.find((item) => item?.fname === edited);
      return {
        ...state,
        isEdit: true,
        EditItem: newEdit,
      };
    case "UPDATED_ITEM":
      return {
        ...state,
        CallData: payload,
        isEdit: false,
      };
    case "ADD_ITEM":
      return {
        ...state,
        CallData: [
          ...state.CallData,
          {
            fname: payload.fname,
            lname: payload.lname,
            number: payload.number,
            path: payload.path,
            Area: payload.Area,
            id: Date.now(),
            fav: false,
          },
        ],
        isEdit: false,
      };
    case "DELETE_ITEM":
      const deleteItem = state.CallData.filter(
        (item) => item.fname !== payload
      );
      return {
        ...state,
        CallData: deleteItem,
      };
    case "ADD_LOG":
      const addcallog = {
        fname: payload.Data.fname,
        lname: payload.Data.lname,
        number: payload.Data.number,
        path: payload.Data.path,
        Area: payload.Data.Area,
        time: payload.Time,
        fav: payload.fav,
        id: payload.id,
      };
      return {
        ...state,
        CallLog: [...state.CallLog, addcallog].reverse(),
      };
    case "ADD_TO_FAV":
      const updatedData = state.CallData.map((item) => {
        if (item.id === payload) {
          return { ...item, fav: true };
        }
        return item;
      });
      return {
        ...state,
        CallData: updatedData,
        EditItem: { ...state.EditItem, fav: true },
      };
    case "REMOVE_TO_FAV":
      const updatedItem = state.CallData.map((item) => {
        if (item.id === payload) {
          return { ...item, fav: false };
        }
        return item;
      });
      return {
        ...state,
        CallData: updatedItem,
        EditItem: { ...state.EditItem, fav: false },
      };
    case "SIGN_IN":
      return {};
    case "SIGN_UP":
      return {
        ...state,
        LoginData: [
          ...state.LoginData,
          {
            email: payload.email,
            password: payload.password,
            username: payload.username,
          },
        ],
      };
    default:
      return state;
  }
};

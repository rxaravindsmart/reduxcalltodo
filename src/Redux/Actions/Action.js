export const EditItem = (item) => {
  return {
    type: "EDIT_ITEM",
    payload: item,
  };
};
export const UpdateItem = (item) => {
  return {
    type: "UPDATED_ITEM",
    payload: item,
  };
};
export const AddItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const DeleteItem = (item) => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
export const Deletelog = (item) => {
  return {
    type: "DEL_LOG",
    payload: item,
  };
};
export const Addlog = (time, data) => {
  return {
    type: "ADD_LOG",
    payload: {
      Time: time,
      Data: data,
    },
  };
};
export const AddtoFav = (item) => {
  return {
    type: "ADD_TO_FAV",
    payload: item,
  };
};
export const RemovetoFav = (item) => {
  return {
    type: "REMOVE_TO_FAV",
    payload: item,
  };
};
export const SigninData = (item) => {
  return {
    type: "SIGN_IN",
    payload: item,
  };
};
export const SingupData = (item) => {
  return {
    type: "SIGN_UP",
    payload: item,
  };
};

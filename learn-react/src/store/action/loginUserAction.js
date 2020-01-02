export const ADDUSER = Symbol("set-login-user");
export const DELETEUSER = Symbol("increase");
export const UPDATEUSER = Symbol("set");

function getAddUserAction(user) {
  return {
    type: ADDUSER,
    payload: user
  };
}

function getUpdateUserAction(id, newUserData) {
  return {
    type: UPDATEUSER,
    payload: {
      ...newUserData,
      id
    }
  };
}

function getDeteteUserAction(id) {
  return {
    type: DELETEUSER,
    payload: id
  };
}

export { getAddUserAction, getUpdateUserAction, getDeteteUserAction };

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

function getSDeteteUserAction(id) {
  return {
    type: DELETEUSER,
    payload: id
  };
}

export { SETLOGINUSER };

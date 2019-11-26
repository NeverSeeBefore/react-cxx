const appkey = '18743119027_1551866612751';

export async function getAllStudent() {
  return await fetch('http://open.duyiedu.com/api/student/findAll?appkey=' + appkey)
    .then(resp => resp.json()).then(resp => resp.data);
}
const appkey = "18743119027_1551866612751";

export async function getAllStudent() {
  return await fetch(
    "http://open.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
}

function createStudentName(str) {
  return Array.from(str).sort(() => {return Math.random() - 0.5}).join('');
}
export function getStudentByPage(page = 1, limit = 10) {
  const list = [];
  for (let i = 0; i < limit; i++) {
    list.push({
      name: createStudentName('student') + page + i,
      age: `${Math.random() * 22 + 1}`,
      address: i
    });
  }
  return list;
}

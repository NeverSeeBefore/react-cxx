const appkey = "18743119027_1551866612751";
const studnetList = [
  {
    id: 1,
    name: "cxx",
    sex: "男",
    birth: "11-28",
    phone: "18743119027",
    address: "吉林省长春市农安县伏龙泉镇新阳乡红心村2组",
    email: "315203802@qq.com"
  }
];
for (let i = 1; i < 500; i++) {
  const temp = {
    id: i,
    name: disorder("name123456"),
    sex: Math.random() > 0.5 ? "男" : "女",
    birth:
      Math.floor(Math.random() * 11 + 1) +
      "-" +
      Math.floor(Math.random() * 29 + 1),
    phone: disorder("18743119027"),
    address: disorder("吉林省长春市农安县伏龙泉镇新阳乡红心村2组"),
    email: disorder("123456789") + "@" + disorder("qqwweaee") + ".com"
  };
  studnetList.push(temp);
}
export async function getAllStudent() {
  return await fetch(
    "http://open.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
}
function disorder(str) {
  return str
    .split("")
    .sort(() => {
      return Math.random() - 0.5;
    })
    .join("");
}
export function getStudentList({
  keys = "",
  sex = -1,
  page = "1",
  limit = "10"
}) {
  // console.log(keys, sex, page);
  const head = Object.keys(studnetList[0]);
  let total = studnetList.length;
  let data = [];
  let msg = 'success';
  try{
    sex = parseInt(sex);
  }catch(e){
    return { msg: 'fail' };
  }
  if (sex === -1) {
    data = studnetList.slice((page - 1) * limit, page * limit);
  } else {
    let xingbie = "";
    total = 0;
    if (sex === 0) {
      xingbie = "男";
    } else if (sex === 1) {
      xingbie = "女";
    } else {
      data = [];
      return { msg: 'fail' };
    }
    let i = 0;
    while (i < studnetList.length) {
      if (studnetList[i].sex === xingbie) {
        total++;
        if (data.length < limit && total > (page - 1) * limit) {
          data.push(studnetList[i]);
          // console.log("tota ", total, ' i ', i, ' (page - 1) * limit ', (page - 1) * limit)
        }
      }
      i++
    }

  }

  return { head, data, total, msg };
}

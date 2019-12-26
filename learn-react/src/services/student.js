const appkey = "18743119027_1551866612751";

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
  sex = "",
  page = "1",
  pageSize = "10"
}) {
  // console.log(keys, sex, page);
  const head = ["id", "name", "sex", "birth", "phone", "address", "email"];
  // const obj = {
  //   id: "1",
  //   name: "cxx",
  //   sex: "男",
  //   birth: "11-28",
  //   phone: "18743119027",
  //   address: "吉林省长春市农安县伏龙泉镇新阳乡红心村2组",
  //   email: "315203802@qq.com"
  // };
  const data = [
    // {
    //   id: 1,
    //   name: "cxx",
    //   sex: "男",
    //   birth: "11-28",
    //   phone: "18743119027",
    //   address: "吉林省长春市农安县伏龙泉镇新阳乡红心村2组",
    //   email: "315203802@qq.com"
    // }
  ];
  for (let i = 0; i < pageSize; i++) {
    const temp = {
      id: pageSize * page + i,
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
    data.push(temp);
  }
  return { head, data };
}

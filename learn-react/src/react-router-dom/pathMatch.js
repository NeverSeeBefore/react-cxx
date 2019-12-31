import { pathToRegexp } from "path-to-regexp";


/**
 * 得到匹配结果 match对象
 * 不匹配返回undefined
 * @param {String} path 路径规则
 * @param {*} pathname 具体地址
 * @param {*} options 相关配置{exact, sensitive, strict}
 */
export default function matchPath(path, pathname, options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, getOptions(options));

  const result = regexp.exec(pathname);
  if (!result) return undefined;

  const execArr = Array.from(result.slice(1));
  const params = getParams(execArr, keys);

  // console.log("regexp", regexp);
  // console.log("result", result);
  // console.log("keys", keys);
  // console.log("execArr", execArr);
  // console.log("params", params);
  return {
    path,
    params,
    url: result[0],
    isExact: pathname === result[0]

  }
}

/**
 * 根据匹配结果，得到params对象
 * @param {*} group
 * @param {*} keys
 */
function getParams(group, keys) {
  const obj = {};
  for (let i = 0; i < group.length; i++) {
    const value = group[i];
    const name = keys[i].name;
    obj[name] = value;
  }
  return obj;
}

/**
 * 将传入额router配置，转换为payh-to-regexp配置
 * @param {*} option 
 */
function getOptions(options) {
  const defaultOptions = {
    exact: false,
    sensitive: false,
    strict: false
  }
  const opts = {...defaultOptions, ...options};
  return {
    sensitive: opts.sensitive, // 区分大小写
    strict: opts.strict,  // 严格匹配
    end: opts.exact       // 匹配到结尾
  }
}

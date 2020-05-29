

export const testFun = (): string => {
  return "test";
};

export function isDeepEqual<T>(obj1: T, obj2: T): boolean {

  console.log(typeof obj1);


  return true;
}


/**
* 正则匹配目标字符串中存在于两个标识间的字符串
* @param {string} targetStr - 目标字符串
* @param {string} specialFlagStart - 起始标识
* @param {string} specialFlagEnd - 结束标识
*/
export function specialFlagRegExp(targetStr: string, specialFlagStart: string, specialFlagEnd: string) {
  let result = { otherStr: targetStr, targetSpecial: '', originStr: targetStr }
  if (targetStr.includes(specialFlagStart) && targetStr.includes(specialFlagEnd)) {
    let rule = new RegExp(specialFlagStart + "(\\S*)" + specialFlagEnd);
    let regExpArr = targetStr.match(rule);
    if (regExpArr) {
      result.otherStr = targetStr.replace(regExpArr[0], '')
      result.targetSpecial = regExpArr[1]
    }
  }
  return result
}

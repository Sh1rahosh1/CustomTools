export const testFun = (): string => {
  return "test";
};

export function isDeepEqual<T>(obj1: T, obj2: T): boolean {
  return true;
}

/**
 * 正则匹配目标字符串中存在于两个标识间的字符串
 * @param {string} targetStr - 目标字符串
 * @param {string} specialFlagStart - 起始标识
 * @param {string} specialFlagEnd - 结束标识
 *
 * @returns { otherStr: string; targetSpecial: string; originStr: string }
 *        originStr 输入字符串
 *        targetSpecial 目标字符串
 *        otherStr 包括了起始以及结束标识的字符串
 *
 */
export function specialFlagRegExp(
  targetStr: string,
  specialFlagStart: string,
  specialFlagEnd: string
): { otherStr: string; targetSpecial: string; originStr: string } {
  let result = { otherStr: targetStr, targetSpecial: "", originStr: targetStr };
  if (
    targetStr.includes(specialFlagStart) &&
    targetStr.includes(specialFlagEnd)
  ) {
    let rule = new RegExp(specialFlagStart + "(\\S*)" + specialFlagEnd);
    let regExpArr = targetStr.match(rule);
    if (regExpArr) {
      result.otherStr = regExpArr[0];
      result.targetSpecial = regExpArr[1];
    }
  }
  return result;
}

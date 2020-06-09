import {logger} from './logger'

export const testFun = (): string => {
  return "test";
};

/**
 * @param obj1 对比参数1 
 * @param obj2 对比参数2
 * 
 * isDeepEqual,参数类型允许为object，boolean,number,string,undefined，null(其实null就是object)
 * 不允许为bigint和symbol,因为暂时不清楚如何判断相等。
 */


export function isDeepEqual<T>(obj1: T, obj2: T): boolean {

  let result = false;

 

  // boolean number string undefined null在这里判断结束
  // js很神奇，typeof null 是object，正常来说object是无法通过===来判断是否相等
  // 但是null就是他妈的可以
  if (obj1 === obj2) return !result;

 


  // object 判断
  for (const key in obj1) {
    const temp2 = (obj1 as unknown) as object;
    if ( !temp2.hasOwnProperty(key)) {
      return result;
    }
  }
  for (const key in obj2) {
    const temp1 = (obj2 as unknown) as object;
    if (!temp1.hasOwnProperty(key)) {
      return result;
    }

    if (typeof obj1[key] !== typeof obj2[key]) {
      return result;
    }
    result = isDeepEqual(obj1[key],obj2[key])
  }

  return result;
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

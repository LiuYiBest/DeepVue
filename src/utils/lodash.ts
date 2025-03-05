// 从 lodash-es 中导入常用方法
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import get from 'lodash/get';
import set from 'lodash/set';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

// 导出常用方法
export {
  debounce,     // 防抖
  throttle,     // 节流
  cloneDeep,    // 深拷贝
  merge,        // 深度合并
  get,          // 安全获取对象属性
  set,          // 安全设置对象属性
  isEqual,      // 深度比较
  isEmpty,      // 检查是否为空
  isNil,        // 检查是否为 null 或 undefined
  omit,         // 忽略对象属性
  pick,         // 选择对象属性
  uniq,         // 数组去重
  uniqBy,       // 数组根据条件去重
};

// 类型导出
export type {
  DebouncedFunc,
  ThrottleSettings,
} from 'lodash'; 
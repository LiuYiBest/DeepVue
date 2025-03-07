// 导入常用的 react-use hooks
import {
  // 传感器 Hooks
  useWindowSize,
  useWindowScroll,
  useIdle,
  useGeolocation,
  useOrientation,

  // 生命周期 Hooks
  useMount,
  useUnmount,
  useUpdateEffect,
  useLifecycles,

  // 状态 Hooks
  useToggle,
  useBoolean,
  useList,
  useMap,
  useSet,
  useCounter,
  usePrevious,

  // 副作用 Hooks
  useAsync,
  useDebounce,
  useThrottle,
  useLocalStorage,
  useSessionStorage,

  // DOM Hooks
  useClickAway,
  useCopyToClipboard,
  useHover,
  useIntersection,
  useKey,

  // 网络 Hooks
  useNetworkState,
} from 'react-use';

// 导出所有 hooks
export {
  // 传感器 Hooks
  useWindowSize,      // 获取窗口大小
  useWindowScroll,    // 获取窗口滚动位置
  useIdle,           // 检测用户是否空闲
  useGeolocation,    // 获取地理位置
  useOrientation,    // 获取设备方向

  // 生命周期 Hooks
  useMount,          // 组件挂载时执行
  useUnmount,        // 组件卸载时执行
  useUpdateEffect,   // 类似 useEffect，但跳过首次执行
  useLifecycles,     // 组件生命周期

  // 状态 Hooks
  useToggle,         // 切换布尔值
  useBoolean,        // 布尔值状态管理
  useList,           // 列表状态管理
  useMap,            // Map 状态管理
  useSet,            // Set 状态管理
  useCounter,        // 计数器
  usePrevious,       // 获取上一次的值

  // 副作用 Hooks
  useAsync,          // 异步操作管理
  useDebounce,       // 防抖值
  useThrottle,       // 节流值
  useLocalStorage,   // localStorage 状态管理
  useSessionStorage, // sessionStorage 状态管理

  // DOM Hooks
  useClickAway,      // 点击元素外部
  useCopyToClipboard,// 复制到剪贴板
  useHover,          // 监听悬停状态
  useIntersection,   // 监听元素是否可见
  useKey,            // 键盘事件

  // 网络 Hooks
  useNetworkState,   // 网络状态
};

// 类型导出
// export type {
//   AsyncState,
//   UseAsyncReturn,
//   UseGeolocationState,
//   UseMediaQueryOptions,
// } from 'react-use'; 
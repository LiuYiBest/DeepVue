// 导入常用的 ahooks
import {
  // 状态管理
  useSetState,
  useBoolean,
  useToggle,
  useLocalStorageState,
  useSessionStorageState,
  useCookieState,
  useMap,
  useSet,

  // 副作用
  useUpdateEffect,
  useUpdateLayoutEffect,
  useAsyncEffect,
  useDebounceEffect,
  useThrottleEffect,

  // 高级 Hooks
  useRequest,
  useInfiniteScroll,
  useVirtualList,
  useFusionTable,
  useAntdTable,

  // DOM & 传感器
  useSize,
  useScroll,
  useHover,
  useDrop,
  useDrag,
  useFullscreen,
  useKeyPress,
  useMouse,
  useResponsive,
  useEventListener,

  // SideEffect
  useDebounce,
  useThrottle,
  useLockFn,
  useTimeout,
  useInterval,

  // 状态同步
  useReactive,
  useEventEmitter,
  useSelections,

  // 开发辅助
  useWhyDidYouUpdate,
  useTrackedEffect,
  useCreation,
  useMemoizedFn,
} from 'ahooks';

// 导出所有 hooks
export {
  // 状态管理
  useSetState,         // 管理对象类型的 state
  useBoolean,         // 管理 boolean 状态
  useToggle,          // 在两个状态值间切换
  useLocalStorageState,// localStorage 状态管理
  useSessionStorageState,// sessionStorage 状态管理
  useCookieState,     // Cookie 状态管理
  useMap,             // Map 类型状态管理
  useSet,             // Set 类型状态管理

  // 副作用
  useUpdateEffect,    // 忽略首次执行的 useEffect
  useUpdateLayoutEffect,// 忽略首次执行的 useLayoutEffect
  useAsyncEffect,     // 异步 Effect
  useDebounceEffect,  // 防抖 Effect
  useThrottleEffect,  // 节流 Effect

  // 高级 Hooks
  useRequest,         // 管理异步数据请求
  useInfiniteScroll,  // 无限滚动
  useVirtualList,     // 虚拟列表
  useFusionTable,     // Fusion Table 管理
  useAntdTable,       // Ant Design Table 管理

  // DOM & 传感器
  useSize,            // 监听元素大小变化
  useScroll,          // 获取滚动状态
  useHover,           // 监听 hover 状态
  useDrop,            // 处理文件拖拽
  useDrag,            // 处理元素拖拽
  useFullscreen,      // 全屏管理
  useKeyPress,        // 键盘按键监听
  useMouse,           // 获取鼠标位置
  useResponsive,      // 响应式监听
  useEventListener,   // 事件监听

  // SideEffect
  useDebounce,        // 值防抖
  useThrottle,        // 值节流
  useLockFn,          // 函数锁定
  useTimeout,         // 定时器
  useInterval,        // 定时器

  // 状态同步
  useReactive,        // 响应式状态
  useEventEmitter,    // 事件订阅发布
  useSelections,      // 选择列表管理

  // 开发辅助
  useWhyDidYouUpdate, // 调试组件更新原因
  useTrackedEffect,   // 追踪 Effect 依赖变化
  useCreation,        // 替代 useMemo
  useMemoizedFn,      // 持久化函数引用
};

// 导出类型
export type {
  Options as UseRequestOptions,
  Result as UseRequestResult,
  Service as UseRequestService,
  PaginatedParams,
  PaginatedResult,
} from 'ahooks/lib/useRequest/types';

export type { Options as UseVirtualListOptions } from 'ahooks/lib/useVirtualList/types';
export type { Options as UseInfiniteScrollOptions } from 'ahooks/lib/useInfiniteScroll/types'; 
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dayjs/locale/zh-cn';

// 扩展 dayjs 的功能
dayjs.extend(relativeTime);          // 支持相对时间
dayjs.extend(duration);              // 支持时间段
dayjs.extend(customParseFormat);     // 支持自定义解析格式
dayjs.extend(weekday);              // 支持星期功能
dayjs.extend(localeData);           // 支持本地化数据
dayjs.extend(weekOfYear);           // 支持年中周数
dayjs.extend(weekYear);             // 支持周年
dayjs.extend(advancedFormat);       // 支持更多的格式化选项

// 设置默认语言为中文
dayjs.locale('zh-cn');

export default dayjs; 
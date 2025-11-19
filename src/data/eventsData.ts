// ============================================================
// 事件数据配置
// ============================================================
// 功能：集中管理画廊所有活动/展览事件数据
// 作者：Antigravity AI
// 日期：2025-11-19
// 说明：
//   - 定义事件数据类型和接口
//   - 提供事件数据数组
//   - 支持按类别、日期筛选
// ============================================================

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    type: 'Workshop' | 'Artist Talk' | 'Lecture';
    category?: 'upcoming' | 'this-month' | 'next-month';
}

// ============================================================
// 即将到来的活动（首页 Events 区域）
// ============================================================
export const UPCOMING_EVENTS: Event[] = [
    {
        id: 'evt-001',
        title: 'Fractured Realities',
        date: 'Mar 27th',
        time: '7pm',
        type: 'Workshop',
        category: 'upcoming'
    },
    {
        id: 'evt-002',
        title: 'Echoes of the Void',
        date: 'Apr 11th',
        time: '11am',
        type: 'Artist Talk',
        category: 'upcoming'
    },
    {
        id: 'evt-003',
        title: 'Rewired Perceptions',
        date: 'May 2nd',
        time: '6pm',
        type: 'Lecture',
        category: 'upcoming'
    }
];

// ============================================================
// 本月活动（首页 This Month 区域）
// ============================================================
export const THIS_MONTH_EVENTS: Event[] = [
    {
        id: 'evt-101',
        title: 'Rhythms in Red',
        date: 'Mar 8th',
        time: '7pm',
        type: 'Lecture',
        category: 'this-month'
    },
    {
        id: 'evt-102',
        title: 'Chasing Infinity',
        date: 'Mar 12th',
        time: '6pm',
        type: 'Artist Talk',
        category: 'this-month'
    },
    {
        id: 'evt-103',
        title: 'Veins of the City',
        date: 'Mar 15th',
        time: '4pm',
        type: 'Workshop',
        category: 'this-month'
    },
    {
        id: 'evt-104',
        title: 'Polarity Shift',
        date: 'Mar 16th',
        time: '5pm',
        type: 'Artist Talk',
        category: 'this-month'
    },
    {
        id: 'evt-105',
        title: 'Invisible Threads',
        date: 'Mar 19th',
        time: '7pm',
        type: 'Workshop',
        category: 'this-month'
    },
    {
        id: 'evt-106',
        title: 'Rebel Forms',
        date: 'Mar 22nd',
        time: '6pm',
        type: 'Workshop',
        category: 'this-month'
    },
    {
        id: 'evt-107',
        title: 'Whispers in the Dark',
        date: 'Mar 24th',
        time: '7pm',
        type: 'Lecture',
        category: 'this-month'
    },
    {
        id: 'evt-108',
        title: 'Abstract Geometry',
        date: 'Mar 27th',
        time: '5pm',
        type: 'Workshop',
        category: 'this-month'
    }
];

// ============================================================
// 下月活动（首页 Next Month 区域）
// ============================================================
export const NEXT_MONTH_EVENTS: Event[] = [
    {
        id: 'evt-201',
        title: 'Fractured Realities',
        date: 'Mar 27th',
        time: '7pm',
        type: 'Workshop',
        category: 'next-month'
    },
    {
        id: 'evt-202',
        title: 'Fractured Realities',
        date: 'Apr 11th',
        time: '4pm',
        type: 'Workshop',
        category: 'next-month'
    },
    {
        id: 'evt-203',
        title: 'Fractured Realities',
        date: 'Apr 15th',
        time: '6pm',
        type: 'Lecture',
        category: 'next-month'
    },
    {
        id: 'evt-204',
        title: 'Fractured Realities',
        date: 'Apr 22nd',
        time: '2pm',
        type: 'Workshop',
        category: 'next-month'
    }
];

// ============================================================
// 所有事件集合
// ============================================================
export const ALL_EVENTS: Event[] = [
    ...UPCOMING_EVENTS,
    ...THIS_MONTH_EVENTS,
    ...NEXT_MONTH_EVENTS
];

// ============================================================
// Footer 数据配置
// ============================================================
// 功能：集中管理 Footer 组件的所有静态数据
// 作者：Antigravity AI
// 日期：2025-11-19
// 说明：
//   - 将硬编码在组件中的数据提取出来
//   - 方便统一修改和维护
//   - 符合数据驱动的设计理念
// ============================================================

export interface FooterData {
    contact: FooterContact;
    hours: FooterHours;
    admission: FooterAdmission;
    membership: FooterMembership;
    social: SocialLink[];
    legal: string[];
}

export interface FooterContact {
    name: string;
    address: string[];
    phone: string;
    email: string;
}

export interface FooterHours {
    title: string;
    schedule: string[];
}

export interface FooterAdmission {
    title: string;
    prices: string[];
}

export interface FooterMembership {
    title: string;
    description: string;
}

export interface SocialLink {
    name: string;
    url: string;
}

// ============================================================
// Footer 数据配置常量
// ============================================================
export const FOOTER_DATA: FooterData = {
    // 联系信息
    contact: {
        name: 'Collectiv Gallery',
        address: [
            '147 Candyland Lane,',
            'Brooklyn, NY',
            '11211'
        ],
        phone: '(646) 555-4567',
        email: 'hello@figma.com'
    },

    // 开放时间
    hours: {
        title: 'Hours:',
        schedule: [
            'Monday: Closed',
            'Tuesday – Friday: 11:00 AM – 7:00 PM',
            'Saturday – Sunday: 10:00 AM – 8:00 PM'
        ]
    },

    // 门票价格
    admission: {
        title: 'Admission:',
        prices: [
            'General: $15',
            'Students & Seniors: $10',
            'Children under 12: Free'
        ]
    },

    // 会员信息
    membership: {
        title: 'Membership',
        description: 'Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.'
    },

    // 社交媒体链接
    social: [
        { name: 'Twitter', url: 'https://x.com/figma' },
        { name: 'Instagram', url: 'https://www.instagram.com/figma/' },
        { name: 'Facebook', url: 'https://www.facebook.com/figmadesign/' }
    ],

    // 法律信息
    legal: [
        '©All Rights Reserved',
        'Accessibility',
        'Privacy Policy'
    ]
};

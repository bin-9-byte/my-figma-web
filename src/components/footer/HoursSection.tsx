// ============================================================
// HoursSection - 开放时间组件
// ============================================================
// 功能：显示画廊的开放时间、门票价格、会员信息
// 作者：Antigravity AI
// 日期：2025-11-19
// ============================================================

import React from 'react';
import type { FooterHours, FooterAdmission, FooterMembership } from '@/data/footerData';
import styles from './FooterSet.module.css';

interface HoursSectionProps {
    hours: FooterHours;
    admission: FooterAdmission;
    membership: FooterMembership;
}

export const HoursSection: React.FC<HoursSectionProps> = ({ hours, admission, membership }) => {
    return (
        <>
            {/* 开放时间 */}
            <div className={styles.hours}>
                <div className={styles.collectivGallery}>{hours.title}</div>
                {hours.schedule.map((item, index) => {
                    // 处理特殊格式的时间段
                    if (item.includes('–')) {
                        const [day, time] = item.split(':');
                        return (
                            <div key={index} className={styles.candylandLane}>
                                <p className={styles.tuesdayFriday}>{day}:</p>
                                <p className={styles.tuesdayFriday}>{time.trim()}</p>
                            </div>
                        );
                    }
                    return <div key={index} className={styles.candylandLane}>{item}</div>;
                })}
            </div>

            {/* 门票价格 */}
            <div className={styles.hours}>
                <div className={styles.collectivGallery}>{admission.title}</div>
                {admission.prices.map((price, index) => (
                    <div key={index} className={styles.candylandLane}>{price}</div>
                ))}
            </div>

            {/* 会员信息 */}
            <div className={styles.hours}>
                <div className={styles.collectivGallery}>{membership.title}</div>
                <div className={styles.candylandLane}>{membership.description}</div>
            </div>
        </>
    );
};

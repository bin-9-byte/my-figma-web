// ============================================================
// EventCard - 事件卡片通用组件
// ============================================================
// 功能：显示单个事件信息（标题、日期/时间、类型）
// 作者：Antigravity AI
// 日期：2025-11-19
// 说明：
//   - 可复用的事件卡片组件
//   - 支持不同的事件类型样式
//   - 使用 CSS Modules 保持样式一致性
// ============================================================

import React from 'react';
import type { Event } from '@/data/eventsData';
import styles from './Desktop.module.css';

interface EventCardProps {
    event: Event;
    variant?: 'default' | 'compact';
    className?: string;
}

// ============================================================
// EventCard 组件
// ============================================================
export const EventCard: React.FC<EventCardProps> = ({
    event,
    variant = 'default',
    className = ''
}) => {
    // 根据变体选择样式
    const cardClass = variant === 'compact' ? styles.event4 : styles.event;
    const typeClass = event.type === 'Workshop'
        ? styles.workshop
        : styles.workshop2;

    return (
        <div className={`${cardClass} ${className}`}>
            {/* 事件描述 */}
            <div className={styles.description}>
                <div className={styles.fracturedRealities}>{event.title}</div>
                <i className={styles.mar27th7pm}>{event.date}, {event.time}</i>
            </div>

            {/* 事件类型 */}
            {variant === 'default' && event.type === 'Workshop' ? (
                <a className={typeClass} href="https://figma.com/sites" target="_blank" rel="noopener noreferrer">
                    {event.type}
                </a>
            ) : (
                <div className={typeClass}>{event.type}</div>
            )}
        </div>
    );
};

export default EventCard;

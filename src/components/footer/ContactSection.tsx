// ============================================================
// ContactSection - 联系信息组件
// ============================================================
// 功能：显示画廊的联系信息（名称、地址、电话、邮箱）
// 作者：Antigravity AI
// 日期：2025-11-19
// ============================================================

import React from 'react';
import type { FooterContact } from '@/data/footerData';
import styles from './FooterSet.module.css';

interface ContactSectionProps {
    data: FooterContact;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
    return (
        <div className={styles.contact}>
            <div className={styles.address}>
                <div className={styles.collectivGallery}>{data.name}</div>
                {data.address.map((line, index) => (
                    <div key={index} className={styles.candylandLane}>{line}</div>
                ))}
            </div>
            <div className={styles.address}>
                <div className={styles.candylandLane}>{data.phone}</div>
                <div className={styles.candylandLane}>{data.email}</div>
            </div>
        </div>
    );
};

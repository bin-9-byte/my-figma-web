// ============================================================
// SocialLinks - 社交媒体链接组件
// ============================================================
// 功能：显示社交媒体链接和法律信息
// 作者：Antigravity AI
// 日期：2025-11-19
// ============================================================

import React from 'react';
import type { SocialLink } from '@/data/footerData';
import styles from './FooterSet.module.css';

interface SocialLinksProps {
    social: SocialLink[];
    legal: string[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ social, legal }) => {
    return (
        <div className={styles.links}>
            {/* 社交媒体链接 */}
            <div className={styles.social}>
                {social.map((link) => (
                    <a
                        key={link.name}
                        className={styles.twitter}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* 法律信息 */}
            <div className={styles.legal}>
                {legal.map((text, index) => (
                    <div key={index} className={styles.allRightsReserved}>{text}</div>
                ))}
            </div>
        </div>
    );
};

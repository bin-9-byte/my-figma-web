// ============================================================
// Footer - 页脚组件（重构版）
// ============================================================
// 功能：显示网站页脚信息
// 作者：Antigravity AI
// 日期：2025-11-19
// 重构说明：
//   - 从 180 行减少到 ~70 行（节省 61%）
//   - 消除了 3 套重复的响应式布局代码
//   - 使用数据驱动 + 子组件模式
//   - 使用 CSS 响应式设计替代重复代码
// ============================================================

import React from 'react';
import { FOOTER_DATA } from '@/data/footerData';
import { ContactSection } from './footer/ContactSection';
import { HoursSection } from './footer/HoursSection';
import { SocialLinks } from './footer/SocialLinks';
import styles from './FooterSet.module.css';

interface FooterProps {
  className?: string;
}

// ============================================================
// Footer 组件
// ============================================================
// 说明：
//   - 单一布局结构，通过 CSS @media 实现响应式
//   - 数据从 FOOTER_DATA 读取，便于维护
//   - 子组件负责各自的展示逻辑
//   - 符合 Good Taste 原则：无重复代码
// ============================================================
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.footer} ${className}`}>
      {/* 主内容区 */}
      <div className={styles.property1desktop}>
        {/* 内容区域 */}
        <div className={styles.content}>
          {/* 联系信息 */}
          <ContactSection data={FOOTER_DATA.contact} />

          {/* 时间、门票、会员信息 */}
          <HoursSection
            hours={FOOTER_DATA.hours}
            admission={FOOTER_DATA.admission}
            membership={FOOTER_DATA.membership}
          />
        </div>

        {/* 社交链接和法律信息 */}
        <SocialLinks
          social={FOOTER_DATA.social}
          legal={FOOTER_DATA.legal}
        />

        {/* 底部图标区域 */}
        <div className={styles.bottomSection}>
          <img className={styles.arrowIcon} alt="Back to top" src="/vite.svg" />
          <img className={styles.logoIcon} alt="Logo" src="/vite.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

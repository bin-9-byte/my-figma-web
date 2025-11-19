// ============================================================
// Gallery Store - 画廊全局状态管理
// ============================================================
// 功能：使用 zustand 管理画廊应用的全局状态
// 作者：Antigravity AI
// 日期：2025-11-19
// 说明：
//   - 管理选中的事件
//   - 管理导航状态
//   - 可扩展其他全局状态
// ============================================================

import { create } from 'zustand';
import type { Event } from '@/data/eventsData';

// ============================================================
// Store 接口定义
// ============================================================
interface GalleryStore {
    // 状态
    selectedEvent: Event | null;
    isMenuOpen: boolean;

    // Actions
    setSelectedEvent: (event: Event | null) => void;
    toggleMenu: () => void;
    closeMenu: () => void;
}

// ============================================================
// 创建 Store
// ============================================================
export const useGalleryStore = create<GalleryStore>((set) => ({
    // 初始状态
    selectedEvent: null,
    isMenuOpen: false,

    // Actions
    setSelectedEvent: (event) => set({ selectedEvent: event }),

    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

    closeMenu: () => set({ isMenuOpen: false }),
}));

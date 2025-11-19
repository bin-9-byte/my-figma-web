// ============================================================
// 路由配置模块
// ============================================================
// 功能：配置应用的所有路由，使用 react-router-dom
// 作者：Antigravity AI
// 日期：2025-11-19
// ============================================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import OnViewPage from '@/pages/OnViewPage';

// ============================================================
// 主路由组件
// ============================================================
// 说明：
//   - 使用 BrowserRouter 提供完整的 URL 路由支持
//   - 支持浏览器前进/后退按钮
//   - 支持深度链接（URL 直接访问特定页面）
// ============================================================
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {/* 首页路由 */}
      <Route path="/" element={<HomePage />} />
      
      {/* 关于页路由 */}
      <Route path="/about" element={<AboutPage />} />
      
      {/* 展览页路由 */}
      <Route path="/on-view" element={<OnViewPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;

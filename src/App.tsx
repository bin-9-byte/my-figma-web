import { useState } from 'react';
import Desktop from './components/home_desktop';
import AboutDesktop from './components/about_desktop';
import OnViewDesktop from './components/on_view_desktop';
import './App.css';

// 定义页面类型
type Page = 'home' | 'about' | 'onView';

function App() {
  const [currentPage] = useState<Page>('home');

  // 渲染当前页面的对应组件
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Desktop />;
    } else if (currentPage === 'about') {
      return <AboutDesktop />;
    } else if (currentPage === 'onView') {
      return <OnViewDesktop />;
    }
    return null;
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;

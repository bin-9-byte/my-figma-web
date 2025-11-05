// 资源索引文件 - 用于统一管理和导出所有页面的图片和图标资源

// 主页(Home)资源
export const HomeResources = {
  images: {
    // 后续添加主页专用图片
    // 例如: heroBanner: '/assets/images/home/hero-banner.jpg',
  },
  icons: {
    // 后续添加主页专用图标
  },
};

// 关于页面(About)资源
export const AboutResources = {
  images: {
    // 后续添加关于页面专用图片
    // 例如: galleryInterior: '/assets/images/about/gallery-interior.jpg',
  },
  icons: {
    // 后续添加关于页面专用图标
  },
};

// 展览页面(On View)资源
export const OnViewResources = {
  images: {
    // 后续添加展览页面专用图片
    // 例如: currentExhibition: '/assets/images/on_view/current-exhibition.jpg',
  },
  icons: {
    // 后续添加展览页面专用图标
  },
};

// 通用资源 - 多个页面共享的资源
export const CommonResources = {
  images: {
    // 后续添加通用图片
  },
  icons: {
    // 后续添加通用图标
  },
};

// 导出所有资源
export default {
  home: HomeResources,
  about: AboutResources,
  onView: OnViewResources,
  common: CommonResources,
};
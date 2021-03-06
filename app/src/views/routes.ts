const routes: RouteConfig[] = [
  {
    key: 'Home',
    path: '/',
    redirect: { to: '/demo?form=home' },
    windowOptions: {
      title: 'App Home (redirect to demo)',
      width: 1200,
      height: 800,
    },
    createConfig: {
      showSidebar: true,
      saveWindowBounds: true,
      openDevTools: false,
    },
  },
];

export default routes;

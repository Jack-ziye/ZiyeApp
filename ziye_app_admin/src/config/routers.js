const routers = [
  { label: "首页", path: "/" },
  { label: "个人中心", path: "/user/profile" },
  { label: "系统设置", path: "/user/setting" },
  {
    label: "系统管理",
    path: "/system",
    icon: "SettingOutlined",
    children: [
      { label: "推送通知", path: "/system/notice/push", destroy: true },
      { label: "通知公告", path: "/system/notice" },
      { label: "消息管理", path: "/system/inform" },
      { label: "用户管理", path: "/system/user" },
      { label: "分配用户", path: "/system/role/assgin/user", destroy: true },
      { label: "角色管理", path: "/system/role" },
      { label: "菜单管理", path: "/system/menu" },
      { label: "字典管理", path: "/system/dict" },
      { label: "参数设置", path: "/system/config" },
      { label: "登录日志", path: "/system/log-info" },
    ],
  },
  {
    label: "系统监控",
    path: "/monitor",
    icon: "FundProjectionScreenOutlined",
    children: [
      { label: "在线用户", path: "/monitor/online" },
      { label: "服务监控", path: "/monitor/server" },
      { label: "缓存监控", path: "/monitor/cache" },
    ],
  },
];

export default routers;

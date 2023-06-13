import React, { lazy, Suspense } from "react";
import { BrowserRouter as RouterMode, Routes, Route } from "react-router-dom";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

import LoadingComponent from "@/components/LoadingComponent";

// import Login from "@/pages/login";
import AuthComponent from "@/components/AuthComponent";
import LayoutComponent from "@/components/LayoutComponent";

import Index from "@/pages/index";
import UserProfile from "@/pages/user/profile";
import UserSetting from "@/pages/user/setting";
import SystemNotice from "@/pages/system/notice";
import SystemNoticePush from "@/pages/system/noticePush";
import SystemInform from "@/pages/system/inform";
import SystemUser from "@/pages/system/user";
import SystemRole from "@/pages/system/role";
import SystemRoleAssginUser from "@/pages/system/assignUser";
import SystemMenu from "@/pages/system/menu";
import SystemDict from "@/pages/system/dict";
import SystemConfig from "@/pages/system/config";
import SystemLogInfo from "@/pages/system/logInfo";

import MonitorOnline from "@/pages/monitor/online";
import MonitorServer from "@/pages/monitor/server";
import MonitorCache from "@/pages/monitor/cache";

const Login = lazy(() => import("@/pages/login"));

function App() {
  return (
    <>
      <div className="App">
        <LoadingComponent />
        <ConfigProvider locale={zhCN}>
          <RouterMode>
            <Suspense fallback={<LoadingComponent />}>
              <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                  path="/"
                  element={
                    <AuthComponent>
                      <LayoutComponent />
                    </AuthComponent>
                  }
                >
                  <Route index element={<Index />}></Route>
                  <Route path="/user/profile" element={<UserProfile />}></Route>
                  <Route path="/user/setting" element={<UserSetting />}></Route>

                  <Route path="/system/inform" element={<SystemInform />}></Route>
                  <Route path="/system/notice" element={<SystemNotice />}></Route>
                  <Route path="/system/notice/push" element={<SystemNoticePush />}></Route>
                  <Route path="/system/user" element={<SystemUser />}></Route>
                  <Route path="/system/role" element={<SystemRole />}></Route>
                  <Route path="/system/role/assgin/user" element={<SystemRoleAssginUser />}></Route>
                  <Route path="/system/menu" element={<SystemMenu />}></Route>
                  <Route path="/system/dict" element={<SystemDict />}></Route>
                  <Route path="/system/config" element={<SystemConfig />}></Route>
                  <Route path="/system/log-info" element={<SystemLogInfo />}></Route>

                  <Route path="/monitor/online" element={<MonitorOnline />}></Route>
                  <Route path="/monitor/server" element={<MonitorServer />}></Route>
                  <Route path="/monitor/cache" element={<MonitorCache />}></Route>
                </Route>
              </Routes>
            </Suspense>
          </RouterMode>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;

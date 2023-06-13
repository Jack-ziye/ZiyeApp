package com.code.utils;

import com.code.entity.system.Inform;
import com.code.entity.system.LoginLog;
import com.code.entity.system.Notice;
import com.code.service.system.IInformService;
import com.code.service.system.ILoginService;
import com.code.service.system.INoticeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
@Slf4j
public class ThreadService {

    @Resource
    private ILoginService iLoginService;

    @Resource
    private INoticeService iNoticeService;

    @Resource
    private IInformService informService;

    /**
     * 添加登录日志
     *
     * @param loginLog 登录日志信息
     */
    @Async("TaskExecutor")
    public void addLoginLog(LoginLog loginLog) {
        log.info("==================== 添加登录日志 start ====================");
        iLoginService.addLoginLog(loginLog);
        log.info("==================== 添加登录日志 end ====================");
    }

}

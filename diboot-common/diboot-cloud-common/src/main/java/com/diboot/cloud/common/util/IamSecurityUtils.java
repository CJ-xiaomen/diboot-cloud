/*
 * Copyright (c) 2015-2021, www.dibo.ltd (service@dibo.ltd).
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * https://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.diboot.cloud.common.util;

import com.diboot.cloud.common.entity.LoginUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Objects;

/**
 * <Description>
 *
 * @author mazc
 * @version v1.0
 * @date 2020/09/17
 */
@Slf4j
public class IamSecurityUtils {

    /**
     * 获取当前登录用户
     * @return
     */
    public static LoginUser getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // 认证信息可能为空，因此需要进行判断。
        if (Objects.nonNull(authentication)) {
            Object principal = authentication.getPrincipal();
            return (LoginUser)principal;
        }
        log.warn("无法获取当前用户: authentication = null");
        return null;
    }

}

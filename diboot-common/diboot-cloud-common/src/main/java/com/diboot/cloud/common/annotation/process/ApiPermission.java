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
package com.diboot.cloud.common.annotation.process;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
* 权限 Entity定义
* @author mazc@dibo.ltd
* @version 2.0
* @date 2019-12-03
*/
@Getter @Setter @Accessors(chain = true)
public class ApiPermission implements Serializable {
    private static final long serialVersionUID = -1234249053749049729L;

    // 类别
    @JsonIgnore
    private String className;

    // 类别标题
    @JsonIgnore
    private String classTitle;

    // 接口名称
    private String apiName;

    /**
     * 接口Method
     */
    private String apiMethod;

    // 接口URI
    private String apiUri;

    // ID标识
    private String value;

    // 权限许可编码
    @JsonIgnore
    private String permissionCode;

    public String buildUniqueKey(){
        return className + "," + apiMethod + "," + apiUri + "," + permissionCode;
    }
}
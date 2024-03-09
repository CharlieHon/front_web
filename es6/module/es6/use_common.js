/* 导入
1. 可以使用 {} 来接收导出的数据
2. 可以全部接收，也可以选择的接收
3. 细节：导入的名称要和导出时的名称保持一致
 */
import {sub, sum, name} from "./common"

// 使用
console.log(sub(10, 6));
console.log(name);

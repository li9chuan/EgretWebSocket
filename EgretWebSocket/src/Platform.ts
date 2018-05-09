/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(): Promise<any>

}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }
    async login() {

        let user: JsonUser = ClientModule.GetInstance().UserInfo;

        user.NonceStr   = "6GosND6R6HCeDWFPGWjQ";
        user.Token      = "C5F9DB80F40EC9A98EA0E94604091198";
        user.UID        = 1002;
        user.FES        = "ws://127.0.0.1:9999";
        user.Timestamp  = 1523541253;
        user.User       = "oYsC35RNsWxsYQkKGsZVhxEImRuw";

        ClientModule.GetInstance().Version  = "1.0";
        ClientModule.GetInstance().Channel  = "WX";
        ClientModule.GetInstance().AppName  = "WX_5E8A";
        ClientModule.GetInstance().RoomType = "RM_DDZ";
        ClientModule.GetInstance().User     = "oYsC35RNsWxsYQkKGsZVhxEImRuw";

        NetMgr.GetInstance().Connect(user.FES);
    }
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}






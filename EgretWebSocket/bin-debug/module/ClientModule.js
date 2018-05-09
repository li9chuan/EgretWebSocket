var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ClientModule = (function () {
    function ClientModule() {
        this.Version = "1.0"; // 当前版本
        this.Channel = "REG"; // 账号渠道
        this.AppName = "WX_5E8A"; // 游戏包名
        this.User = "admin"; // 帐号名   openid
        this.RoomType = "RM_DDZ"; // 请求进入的游戏名字
        this.UserInfo = new JsonUser();
    }
    ClientModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new ClientModule();
        }
        return this.__self;
    };
    return ClientModule;
}());
__reflect(ClientModule.prototype, "ClientModule");
//# sourceMappingURL=ClientModule.js.map
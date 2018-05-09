var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.prototype.Init = function () {
        NetMgr.GetInstance().addEventListener("AuthOk", this.CBAuthOk, this);
    };
    LoginModule.prototype.CBAuthOk = function () {
        console.log("AuthOk回调，进入大厅场景");
    };
    LoginModule.GetInstance = function () {
        if (this.__self == null) {
            this.__self = new LoginModule();
        }
        return this.__self;
    };
    return LoginModule;
}());
__reflect(LoginModule.prototype, "LoginModule");
//# sourceMappingURL=LoginModule.js.map
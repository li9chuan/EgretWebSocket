var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
/**
 * 网络管理类
 */
var NetMgr = (function (_super) {
    __extends(NetMgr, _super);
    function NetMgr() {
        var _this = _super.call(this) || this;
        _this.socket = new egret.WebSocket();
        _this.recv_buffer = new egret.ByteArray();
        _this.send_buffer = new egret.ByteArray();
        _this.temp_msg = new Message();
        return _this;
    }
    NetMgr.GetInstance = function () {
        if (this.net == null) {
            this.net = new NetMgr();
        }
        return this.net;
    };
    NetMgr.prototype.Connect = function (serverurl) {
        if (this.socket.connected)
            return;
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.IOError, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.Close, this);
        this.socket.connectByUrl(serverurl);
        this.conn_url = serverurl;
    };
    /**
     * 发送消息
     */
    NetMgr.prototype.SendMsg = function (msg) {
        try {
            if (this.socket.connected) {
                this.send_buffer.clear();
                this.send_buffer.endian = egret.Endian.BIG_ENDIAN;
                this.send_buffer.writeInt(msg.buff_msg.length);
                this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
                this.send_buffer.writeBytes(msg.buff_msg);
                this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.length);
                this.socket.flush();
            }
            else {
                console.error("网络没有连接");
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    NetMgr.prototype.SendPB = function (msg_name, pb_type, pb_stru) {
        this.temp_msg.reset(msg_name);
        this.temp_msg.wprotobuf(pb_type, pb_stru);
        this.SendMsg(this.temp_msg);
    };
    NetMgr.prototype.GetStatus = function () {
        return this.socket.connected;
    };
    NetMgr.prototype.onReceiveMessage = function () {
        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);
        if (this.recv_buffer.bytesAvailable > 4) {
            this.recv_buffer.endian = egret.Endian.BIG_ENDIAN;
            var msg_len = this.recv_buffer.readInt();
            this.recv_buffer.endian = egret.Endian.LITTLE_ENDIAN;
            if (this.recv_buffer.bytesAvailable >= msg_len) {
                var msg = new Message();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);
                this.processReceive(msg);
            }
            else {
                console.log("msg len error");
            }
            this.recv_buffer.clear();
        }
    };
    NetMgr.prototype.processReceive = function (msg) {
        console.log("recv msg : " + msg.name);
        var netevent = new NetEvent(msg.name);
        netevent.msg = msg;
        this.dispatchEvent(netevent);
    };
    NetMgr.prototype.Close = function () {
        console.log("连接关闭");
    };
    NetMgr.prototype.onSocketOpen = function () {
        console.log("网络连接成功，发送LOGIN。");
        var user = ClientModule.GetInstance().UserInfo;
        var pb_login = PB.MsgLogin.create();
        pb_login.Version = ClientModule.GetInstance().Version;
        pb_login.Channel = ClientModule.GetInstance().Channel;
        pb_login.AppName = ClientModule.GetInstance().AppName;
        pb_login.User = user.User;
        pb_login.NonceStr = user.NonceStr;
        pb_login.Token = user.Token;
        pb_login.Timestamp = user.Timestamp;
        pb_login.UID = user.UID;
        pb_login.RoomType = ClientModule.GetInstance().RoomType;
        NetMgr.GetInstance().SendPB("LOGIN", PB.MsgLogin, pb_login);
    };
    NetMgr.prototype.IOError = function () {
        console.log("网络连接断开");
    };
    return NetMgr;
}(egret.DisplayObject));
__reflect(NetMgr.prototype, "NetMgr");
//# sourceMappingURL=NetMgr.js.map
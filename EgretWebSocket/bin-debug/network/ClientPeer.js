var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ClientPeer = (function () {
    function ClientPeer(ip, port) {
        try {
            this.recv_buffer = new egret.ByteArray();
            this.send_buffer = new egret.ByteArray();
            this.recv_buffer.endian = egret.Endian.LITTLE_ENDIAN;
            this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
            this.socket = new egret.WebSocket();
            this.ip = ip;
            this.port = port;
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            // 添加收到数据的监听，收到数据后会调用此方法
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            // 添加连接打开的监听，连接成功会调用此方法
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            // 添加连接关闭是侦听，手动关闭或者服务器关闭连接会调用此方法
            this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            // 添加异常侦听，出现异常会调用此方法
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            // 连接服务器
            this.socket.connect(ip, port);
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * 设置上层应用
     */
    ClientPeer.prototype.setApplication = function (app) {
        this.application = app;
    };
    /**
     * 连接服务器成功回调
     */
    ClientPeer.prototype.onSocketOpen = function () {
        console.log('服务器连接成功！');
        var msgout = new SocketMsg("LOGIN");
        msgout.wint32(111);
        msgout.wdouble(222);
        msgout.wstring("333333");
        msgout.wint64(4611686016279344128);
        msgout.wint64(-4611686016279344128);
        //let long = new protobuf.util.Long(2148043776,2148043776,true);
        var pb_login = PB_MSG.MsgLogin.create();
        pb_login.Version = "version";
        pb_login.Channel = "WX";
        pb_login.AppName = "WX_5E8A";
        pb_login.User = "oYsC35RNsWxsYQkKGsZVhxEImRuw";
        pb_login.NonceStr = "6GosND6R6HCeDWFPGWjQ";
        pb_login.Token = "C5F9DB80F40EC9A98EA0E94604091198";
        pb_login.Timestamp = 1523541253;
        pb_login.UID = 1002;
        pb_login.RoomType = "RM_DDZ";
        msgout.wprotobuf(PB_MSG.MsgLogin, pb_login);
        this.sendMsg(msgout);
    };
    /**
     * 接收并处理数据
     */
    ClientPeer.prototype.onReceiveMessage = function () {
        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);
        if (this.recv_buffer.bytesAvailable > 4) {
            var msg_len = this.recv_buffer.readInt();
            if (this.recv_buffer.bytesAvailable >= msg_len + 4) {
                var msg = new SocketMsg();
                msg.fill(this.recv_buffer, msg_len);
                this.processReceive(msg);
                if (this.recv_buffer.bytesAvailable == 0) {
                    this.recv_buffer.clear();
                }
            }
            else {
                this.recv_buffer.position = this.recv_buffer.position - 4;
            }
        }
    };
    ClientPeer.prototype.processReceive = function (msg) {
        console.log("recv msg : " + msg.name);
        console.log(msg.rint32());
        console.log(msg.rdouble());
        console.log(msg.rstring());
        console.log(msg.rint64());
        console.log(msg.rint64());
        console.log(msg.rprotobuf(PB_MSG.MsgLogin));
        //this.application.onReceive(msg);
    };
    /**
     * 发送消息
     */
    ClientPeer.prototype.sendMsg = function (msg) {
        try {
            this.send_buffer.clear();
            this.send_buffer.writeInt(msg.buff_msg.length);
            this.send_buffer.writeBytes(msg.buff_msg);
            this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.bytesAvailable);
            this.socket.flush();
        }
        catch (e) {
            console.error(e);
        }
    };
    ClientPeer.prototype.onSocketClose = function () {
    };
    ClientPeer.prototype.onSocketError = function () {
    };
    return ClientPeer;
}());
__reflect(ClientPeer.prototype, "ClientPeer");

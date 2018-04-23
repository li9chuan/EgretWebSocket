class ClientPeer {
    private socket: egret.WebSocket;
    private ip: string;
    private port: number;
    private recv_buffer: egret.ByteArray;
    private send_buffer: egret.ByteArray;

    constructor(ip: string, port: number) {
        try {
            
            this.recv_buffer = new egret.ByteArray();
            this.send_buffer = new egret.ByteArray();

            this.recv_buffer.endian    = egret.Endian.LITTLE_ENDIAN;
            this.send_buffer.endian    = egret.Endian.LITTLE_ENDIAN;

            this.socket = new egret.WebSocket();
            this.ip = ip;
            this.port = port;
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            // 添加收到数据的监听，收到数据后会调用此方法
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this)
            // 添加连接打开的监听，连接成功会调用此方法
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this)
            // 添加连接关闭是侦听，手动关闭或者服务器关闭连接会调用此方法
            this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            // 添加异常侦听，出现异常会调用此方法
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            // 连接服务器
            this.socket.connect(ip, port)

        } catch(e) {
            console.error(e);
        }
    }

    private application: IApplication;
    /**
     * 设置上层应用
     */
    public setApplication(app: IApplication) {
        this.application = app;
    }

    /**
     * 连接服务器成功回调
     */
    private onSocketOpen() {
        console.log('服务器连接成功！');

        let msgout = new SocketMsg("LOGIN");
        msgout.wint32(111);
        msgout.wdouble(222.22);
        msgout.wstring("string");
        msgout.wint64(4611686016279344128);
        msgout.wint64(-4611686016279344128);

        //let long = new protobuf.util.Long(2148043776,2148043776,true);

        let pb_login = PB_MSG.MsgLogin.create();

        pb_login.Version     = "version";
        pb_login.Channel     = "WX";
        pb_login.AppName     = "WX_5E8A";
        pb_login.User        = "oYsC35RNsWxsYQkKGsZVhxEImRuw";
        pb_login.NonceStr    = "6GosND6R6HCeDWFPGWjQ";
        pb_login.Token       = "C5F9DB80F40EC9A98EA0E94604091198";
        pb_login.Timestamp   = 1523541253;
        pb_login.UID         = 1002;
        pb_login.RoomType    = "RM_DDZ";

        msgout.wprotobuf(PB_MSG.MsgLogin, pb_login);

        

        this.sendMsg(msgout);
    }

    /**
     * 接收并处理数据
     */
    private onReceiveMessage() {

        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);

        if( this.recv_buffer.bytesAvailable > 4 ) {

            this.recv_buffer.endian    = egret.Endian.BIG_ENDIAN;
            let msg_len = this.recv_buffer.readInt();
            this.recv_buffer.endian    = egret.Endian.LITTLE_ENDIAN;

            if( this.recv_buffer.bytesAvailable >= msg_len ) {

                let msg = new SocketMsg();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);

                this.processReceive(msg);

                if( this.recv_buffer.bytesAvailable == 0 ){
                    this.recv_buffer.clear();
                }
            }
            else {
                this.recv_buffer.position = this.recv_buffer.position - 4;
            }
        }
    }

    private processReceive(msg: SocketMsg) {
        console.log("recv msg : " + msg.name);

        switch (msg.name){
            case "AuthOk":
            break;

            case "LOGIN":
                console.log( msg.rint32() );
                console.log( msg.rdouble() );
                console.log( msg.rstring() );
                console.log( msg.rint64() );
                console.log( msg.rint64() );
                console.log( msg.rprotobuf(PB_MSG.MsgLogin) );
            break;
            case "SyncPlayerInfo":
                let player_info = msg.rjson();
                console.log( player_info.UID );
                console.log( player_info );
            break;
            default:
            break;
        }


        //this.application.onReceive(msg);
    }

    /**
     * 发送消息
     */
    public sendMsg(msg: SocketMsg) : void{
        try {
            this.send_buffer.clear();
            this.send_buffer.endian    = egret.Endian.BIG_ENDIAN;
            this.send_buffer.writeInt(msg.buff_msg.length);
            this.send_buffer.endian    = egret.Endian.LITTLE_ENDIAN;
            this.send_buffer.writeBytes(msg.buff_msg);

            this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.bytesAvailable);
            this.socket.flush();
        } catch(e) {
            console.error(e);
        }
    }

    
    private onSocketClose() {

    }
    private onSocketError() {

    }

}
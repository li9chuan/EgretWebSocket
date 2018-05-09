// TypeScript file
/**
 * 网络管理类
 */
class NetMgr extends egret.DisplayObject {

    private socket: egret.WebSocket = new egret.WebSocket();
    static net: NetMgr;
    private recv_buffer: egret.ByteArray = new egret.ByteArray();
    private send_buffer: egret.ByteArray = new egret.ByteArray();
    private temp_msg: Message = new Message();
    private conn_url: string;

    constructor() {
        super();

    }
    public static GetInstance(): NetMgr {
        if (this.net == null) {
            this.net = new NetMgr();

        }
        return this.net;
    }

    public Connect(serverurl: string): void {
        if (this.socket.connected) return;

        this.socket.type = egret.WebSocket.TYPE_BINARY;
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.IOError, this);
        this.socket.addEventListener(egret.Event.CLOSE, this.Close, this);
        this.socket.connectByUrl(serverurl)

        this.conn_url      = serverurl;
    }

    /**
     * 发送消息
     */
    public SendMsg(msg: Message): void {
        try {

            if ( this.socket.connected ){
                this.send_buffer.clear();
                this.send_buffer.endian = egret.Endian.BIG_ENDIAN;
                this.send_buffer.writeInt(msg.buff_msg.length);
                this.send_buffer.endian = egret.Endian.LITTLE_ENDIAN;
                this.send_buffer.writeBytes(msg.buff_msg);

                this.socket.writeBytes(this.send_buffer, 0, this.send_buffer.length);
                this.socket.flush();
            }
            else{
                console.error("网络没有连接");
            }

        } catch (e) {
            console.error(e);
        }
    }

    public SendPB( msg_name: string, pb_type:any, pb_stru: any ): void {
        this.temp_msg.reset(msg_name);
        this.temp_msg.wprotobuf(pb_type, pb_stru);
        this.SendMsg(this.temp_msg);
    }

    public GetStatus(): boolean {
        return this.socket.connected;
    }



    onReceiveMessage(): void {

        this.socket.readBytes(this.recv_buffer, this.recv_buffer.position);

        if (this.recv_buffer.bytesAvailable > 4) {

            this.recv_buffer.endian = egret.Endian.BIG_ENDIAN;
            let msg_len = this.recv_buffer.readInt();
            this.recv_buffer.endian = egret.Endian.LITTLE_ENDIAN;

            if (this.recv_buffer.bytesAvailable >= msg_len) {

                let msg = new Message();
                msg.fill(this.recv_buffer, this.recv_buffer.position, msg_len);

                this.processReceive(msg);
            }
            else {
                console.log("msg len error");
            }

            this.recv_buffer.clear();
        }
    }

    private processReceive(msg: Message) {
        console.log("recv msg : " + msg.name);
        let netevent: NetEvent = new NetEvent(msg.name)
        netevent.msg = msg;
        this.dispatchEvent(netevent);
    }


    Close(): void {
        console.log("连接关闭")
    }

    onSocketOpen(): void {
        console.log("网络连接成功，发送LOGIN。");

        let user: JsonUser = ClientModule.GetInstance().UserInfo;
        let pb_login = PB.MsgLogin.create();
        pb_login.Version     = ClientModule.GetInstance().Version;
        pb_login.Channel     = ClientModule.GetInstance().Channel;
        pb_login.AppName     = ClientModule.GetInstance().AppName;
        pb_login.User        = user.User;
        pb_login.NonceStr    = user.NonceStr;
        pb_login.Token       = user.Token;
        pb_login.Timestamp   = user.Timestamp;
        pb_login.UID         = user.UID;
        pb_login.RoomType    = ClientModule.GetInstance().RoomType;

        NetMgr.GetInstance().SendPB( "LOGIN", PB.MsgLogin, pb_login );
    }

    IOError(): void {
        console.log("网络连接断开")
    }

}
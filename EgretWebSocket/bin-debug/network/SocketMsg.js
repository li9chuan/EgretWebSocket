var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketMsg = (function () {
    function SocketMsg(name) {
        if (name === void 0) { name = ''; }
        this.buff_msg = new egret.ByteArray();
        this.buff_msg.endian = egret.Endian.LITTLE_ENDIAN;
        this.reset(name);
    }
    SocketMsg.prototype.reset = function (name) {
        this.name = name;
        this.buff_msg.clear();
        this.buff_msg.writeInt(0);
        this.buff_msg.writeByte(0);
        this.wstring(this.name);
    };
    SocketMsg.prototype.fill = function (val, len) {
        this.buff_msg.clear();
        this.buff_msg.writeBytes(val, 0, len);
        // read name
        this.buff_msg.position = 5;
        this.name = this.rstring();
    };
    SocketMsg.prototype.wstring = function (val) {
        this.wint32(val.length);
        this.buff_msg.writeUTFBytes(val);
    };
    SocketMsg.prototype.wint32 = function (val) {
        this.buff_msg.writeInt(val);
    };
    SocketMsg.prototype.wuint32 = function (val) {
        this.buff_msg.writeUnsignedInt(val);
    };
    SocketMsg.prototype.wint64 = function (val) {
        var long = protobuf.util.LongBits.from(val);
        this.wuint32(long.lo);
        this.wuint32(long.hi);
    };
    SocketMsg.prototype.wdouble = function (val) {
        this.buff_msg.writeDouble(val);
    };
    SocketMsg.prototype.wprotobuf = function (msg_type, msg_val) {
        var buff_msg = msg_type.encode(msg_val).finish();
        var egret_buffer = new egret.ByteArray(buff_msg);
        this.wint32(egret_buffer.length);
        this.buff_msg.writeBytes(egret_buffer, 0, egret_buffer.length);
    };
    ////////////////////////
    SocketMsg.prototype.rint32 = function () {
        return this.buff_msg.readInt();
    };
    SocketMsg.prototype.ruint32 = function () {
        return this.buff_msg.readUnsignedInt();
    };
    SocketMsg.prototype.rdouble = function () {
        return this.buff_msg.readDouble();
    };
    SocketMsg.prototype.rstring = function () {
        var len = this.rint32();
        return this.buff_msg.readUTFBytes(len);
    };
    SocketMsg.prototype.rint64 = function (unsigned) {
        var val = new protobuf.util.LongBits(0, 0);
        val.hi = this.ruint32();
        val.lo = this.ruint32();
        return val.toLong(unsigned);
    };
    SocketMsg.prototype.rprotobuf = function (msg_type) {
        var len = this.rint32();
        var pb_buffer = new egret.ByteArray();
        this.buff_msg.readBytes(pb_buffer, 0, len);
        return msg_type.decode(pb_buffer.bytes);
    };
    return SocketMsg;
}());
__reflect(SocketMsg.prototype, "SocketMsg");

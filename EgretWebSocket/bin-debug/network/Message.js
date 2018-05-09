var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Message = (function () {
    function Message(name) {
        if (name === void 0) { name = ''; }
        this.buff_msg = new egret.ByteArray();
        this.buff_msg.endian = egret.Endian.LITTLE_ENDIAN;
        this.reset(name);
    }
    Message.prototype.reset = function (name) {
        this.name = name;
        this.buff_msg.clear();
        this.buff_msg.writeInt(0);
        this.buff_msg.writeByte(0);
        this.wstring(this.name);
    };
    Message.prototype.fill = function (val, offset, len) {
        this.buff_msg.clear();
        this.buff_msg.writeBytes(val, offset, len);
        // read name
        this.buff_msg.position = 5;
        this.name = this.rstring();
    };
    Message.prototype.wstring = function (val) {
        this.wint32(val.length);
        this.buff_msg.writeUTFBytes(val);
    };
    Message.prototype.wint32 = function (val) {
        this.buff_msg.writeInt(val);
    };
    Message.prototype.wuint32 = function (val) {
        this.buff_msg.writeUnsignedInt(val);
    };
    Message.prototype.wint64 = function (val) {
        var long = protobuf.util.LongBits.from(val);
        this.wuint32(long.lo);
        this.wuint32(long.hi);
    };
    Message.prototype.wdouble = function (val) {
        this.buff_msg.writeDouble(val);
    };
    Message.prototype.wprotobuf = function (pb_type, pb_stru) {
        var buff_msg = pb_type.encode(pb_stru).finish();
        var egret_buffer = new egret.ByteArray(buff_msg);
        this.wint32(egret_buffer.length);
        this.buff_msg.writeBytes(egret_buffer, 0, egret_buffer.length);
    };
    Message.prototype.wjson = function (val) {
        this.wstring(JSON.stringify(val));
    };
    ////////////////////////
    Message.prototype.rint32 = function () {
        return this.buff_msg.readInt();
    };
    Message.prototype.ruint32 = function () {
        return this.buff_msg.readUnsignedInt();
    };
    Message.prototype.rdouble = function () {
        return this.buff_msg.readDouble();
    };
    Message.prototype.rstring = function () {
        var len = this.rint32();
        return this.buff_msg.readUTFBytes(len);
    };
    Message.prototype.rint64 = function (unsigned) {
        var val = new protobuf.util.LongBits(0, 0);
        val.hi = this.ruint32();
        val.lo = this.ruint32();
        return val.toLong(unsigned);
    };
    Message.prototype.rjson = function () {
        var len = this.rint32();
        var json_str = this.buff_msg.readUTFBytes(len);
        return JSON.parse(json_str);
    };
    Message.prototype.rprotobuf = function (msg_type) {
        var len = this.rint32();
        var pb_buffer = new egret.ByteArray();
        this.buff_msg.readBytes(pb_buffer, 0, len);
        return msg_type.decode(pb_buffer.bytes);
    };
    return Message;
}());
__reflect(Message.prototype, "Message");
//# sourceMappingURL=Message.js.map
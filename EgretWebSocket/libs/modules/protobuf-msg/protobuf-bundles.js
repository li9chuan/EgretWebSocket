var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PB_DEF = (function() {

    /**
     * Namespace PB_DEF.
     * @exports PB_DEF
     * @namespace
     */
    var PB_DEF = {};

    /**
     * TAttribType enum.
     * @name PB_DEF.TAttribType
     * @enum {string}
     * @property {number} INVALID_ATTRIB=0 INVALID_ATTRIB value
     * @property {number} ID=2001001 ID value
     * @property {number} LEVEL_UP_EXP_INT=2001002 LEVEL_UP_EXP_INT value
     * @property {number} NAME_STRING=2001003 NAME_STRING value
     * @property {number} LIFE_INT=2001004 LIFE_INT value
     * @property {number} LIFE_CURR_INT=2001005 LIFE_CURR_INT value
     */
    PB_DEF.TAttribType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID_ATTRIB"] = 0;
        values[valuesById[2001001] = "ID"] = 2001001;
        values[valuesById[2001002] = "LEVEL_UP_EXP_INT"] = 2001002;
        values[valuesById[2001003] = "NAME_STRING"] = 2001003;
        values[valuesById[2001004] = "LIFE_INT"] = 2001004;
        values[valuesById[2001005] = "LIFE_CURR_INT"] = 2001005;
        return values;
    })();

    /**
     * TEvent enum.
     * @name PB_DEF.TEvent
     * @enum {string}
     * @property {number} EventInvalid=0 EventInvalid value
     * @property {number} EventPlayerUp=2 EventPlayerUp value
     * @property {number} EventCostMoney=40 EventCostMoney value
     * @property {number} EventLogin=46 EventLogin value
     */
    PB_DEF.TEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EventInvalid"] = 0;
        values[valuesById[2] = "EventPlayerUp"] = 2;
        values[valuesById[40] = "EventCostMoney"] = 40;
        values[valuesById[46] = "EventLogin"] = 46;
        return values;
    })();

    /**
     * 标识占据第几位   0-63
     * @name PB_DEF.TPlayerFlagBit
     * @enum {string}
     * @property {number} PLAYER_FLAG_TEST_0=0 PLAYER_FLAG_TEST_0 value
     * @property {number} PLAYER_FLAG_FIRST_CARD_ONE=1 PLAYER_FLAG_FIRST_CARD_ONE value
     * @property {number} PLAYER_FLAG_FIRST_CARD_TEN=2 PLAYER_FLAG_FIRST_CARD_TEN value
     */
    PB_DEF.TPlayerFlagBit = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PLAYER_FLAG_TEST_0"] = 0;
        values[valuesById[1] = "PLAYER_FLAG_FIRST_CARD_ONE"] = 1;
        values[valuesById[2] = "PLAYER_FLAG_FIRST_CARD_TEN"] = 2;
        return values;
    })();

    /**
     * TErrorType enum.
     * @name PB_DEF.TErrorType
     * @enum {string}
     * @property {number} INVALID_TYPE=0 INVALID_TYPE value
     * @property {number} ACCOUNT_LOGGED=1 ACCOUNT_LOGGED value
     * @property {number} SERVER_FULL=2 SERVER_FULL value
     * @property {number} SERVER_NOT_OPEN=3 SERVER_NOT_OPEN value
     * @property {number} TEXT_SUCESS=4 TEXT_SUCESS value
     * @property {number} TEXT_FAIL=5 TEXT_FAIL value
     * @property {number} PWD_ERROR=6 PWD_ERROR value
     * @property {number} PLAYER_ONLINE_TO_FES=7 PLAYER_ONLINE_TO_FES value
     * @property {number} PLAYER_EXISTS=8 PLAYER_EXISTS value
     * @property {number} PLAYER_RELOAD=9 PLAYER_RELOAD value
     * @property {number} SUCESS=23 SUCESS value
     * @property {number} NO_AUTH_TYPE=24 NO_AUTH_TYPE value
     * @property {number} CONFIG_NOT_FOUND=33 CONFIG_NOT_FOUND value
     * @property {number} NOT_ENOUGH_MONEY=37 NOT_ENOUGH_MONEY value
     * @property {number} PLAYER_BASE_ERROR=128 PLAYER_BASE_ERROR value
     */
    PB_DEF.TErrorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INVALID_TYPE"] = 0;
        values[valuesById[1] = "ACCOUNT_LOGGED"] = 1;
        values[valuesById[2] = "SERVER_FULL"] = 2;
        values[valuesById[3] = "SERVER_NOT_OPEN"] = 3;
        values[valuesById[4] = "TEXT_SUCESS"] = 4;
        values[valuesById[5] = "TEXT_FAIL"] = 5;
        values[valuesById[6] = "PWD_ERROR"] = 6;
        values[valuesById[7] = "PLAYER_ONLINE_TO_FES"] = 7;
        values[valuesById[8] = "PLAYER_EXISTS"] = 8;
        values[valuesById[9] = "PLAYER_RELOAD"] = 9;
        values[valuesById[23] = "SUCESS"] = 23;
        values[valuesById[24] = "NO_AUTH_TYPE"] = 24;
        values[valuesById[33] = "CONFIG_NOT_FOUND"] = 33;
        values[valuesById[37] = "NOT_ENOUGH_MONEY"] = 37;
        values[valuesById[128] = "PLAYER_BASE_ERROR"] = 128;
        return values;
    })();

    /**
     * TGender enum.
     * @name PB_DEF.TGender
     * @enum {string}
     * @property {number} MALE=0 MALE value
     * @property {number} FEMALE=1 FEMALE value
     */
    PB_DEF.TGender = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MALE"] = 0;
        values[valuesById[1] = "FEMALE"] = 1;
        return values;
    })();

    return PB_DEF;
})();

$root.PB_MSG = (function() {

    /**
     * Namespace PB_MSG.
     * @exports PB_MSG
     * @namespace
     */
    var PB_MSG = {};

    PB_MSG.MsgLogin = (function() {

        /**
         * Properties of a MsgLogin.
         * @memberof PB_MSG
         * @interface IMsgLogin
         * @property {string|null} [Version] MsgLogin Version
         * @property {string|null} [Channel] MsgLogin Channel
         * @property {string|null} [AppName] MsgLogin AppName
         * @property {string|null} [User] MsgLogin User
         * @property {string|null} [NonceStr] MsgLogin NonceStr
         * @property {string|null} [Token] MsgLogin Token
         * @property {number|Long|null} [Timestamp] MsgLogin Timestamp
         * @property {number|Long|null} [UID] MsgLogin UID
         * @property {string|null} [RoomType] MsgLogin RoomType
         */

        /**
         * Constructs a new MsgLogin.
         * @memberof PB_MSG
         * @classdesc Represents a MsgLogin.
         * @implements IMsgLogin
         * @constructor
         * @param {PB_MSG.IMsgLogin=} [properties] Properties to set
         */
        function MsgLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgLogin Version.
         * @member {string} Version
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Version = "";

        /**
         * MsgLogin Channel.
         * @member {string} Channel
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Channel = "";

        /**
         * MsgLogin AppName.
         * @member {string} AppName
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.AppName = "";

        /**
         * MsgLogin User.
         * @member {string} User
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.User = "";

        /**
         * MsgLogin NonceStr.
         * @member {string} NonceStr
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.NonceStr = "";

        /**
         * MsgLogin Token.
         * @member {string} Token
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Token = "";

        /**
         * MsgLogin Timestamp.
         * @member {number|Long} Timestamp
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgLogin UID.
         * @member {number|Long} UID
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.UID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgLogin RoomType.
         * @member {string} RoomType
         * @memberof PB_MSG.MsgLogin
         * @instance
         */
        MsgLogin.prototype.RoomType = "";

        /**
         * Creates a new MsgLogin instance using the specified properties.
         * @function create
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {PB_MSG.IMsgLogin=} [properties] Properties to set
         * @returns {PB_MSG.MsgLogin} MsgLogin instance
         */
        MsgLogin.create = function create(properties) {
            return new MsgLogin(properties);
        };

        /**
         * Encodes the specified MsgLogin message. Does not implicitly {@link PB_MSG.MsgLogin.verify|verify} messages.
         * @function encode
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {PB_MSG.IMsgLogin} message MsgLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Version != null && message.hasOwnProperty("Version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Version);
            if (message.Channel != null && message.hasOwnProperty("Channel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Channel);
            if (message.AppName != null && message.hasOwnProperty("AppName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.AppName);
            if (message.User != null && message.hasOwnProperty("User"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.User);
            if (message.NonceStr != null && message.hasOwnProperty("NonceStr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.NonceStr);
            if (message.Token != null && message.hasOwnProperty("Token"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Token);
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.Timestamp);
            if (message.UID != null && message.hasOwnProperty("UID"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.UID);
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.RoomType);
            return writer;
        };

        /**
         * Encodes the specified MsgLogin message, length delimited. Does not implicitly {@link PB_MSG.MsgLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {PB_MSG.IMsgLogin} message MsgLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgLogin message from the specified reader or buffer.
         * @function decode
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_MSG.MsgLogin} MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB_MSG.MsgLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Version = reader.string();
                    break;
                case 2:
                    message.Channel = reader.string();
                    break;
                case 3:
                    message.AppName = reader.string();
                    break;
                case 4:
                    message.User = reader.string();
                    break;
                case 5:
                    message.NonceStr = reader.string();
                    break;
                case 6:
                    message.Token = reader.string();
                    break;
                case 7:
                    message.Timestamp = reader.uint64();
                    break;
                case 8:
                    message.UID = reader.uint64();
                    break;
                case 9:
                    message.RoomType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_MSG.MsgLogin} MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgLogin message.
         * @function verify
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Version != null && message.hasOwnProperty("Version"))
                if (!$util.isString(message.Version))
                    return "Version: string expected";
            if (message.Channel != null && message.hasOwnProperty("Channel"))
                if (!$util.isString(message.Channel))
                    return "Channel: string expected";
            if (message.AppName != null && message.hasOwnProperty("AppName"))
                if (!$util.isString(message.AppName))
                    return "AppName: string expected";
            if (message.User != null && message.hasOwnProperty("User"))
                if (!$util.isString(message.User))
                    return "User: string expected";
            if (message.NonceStr != null && message.hasOwnProperty("NonceStr"))
                if (!$util.isString(message.NonceStr))
                    return "NonceStr: string expected";
            if (message.Token != null && message.hasOwnProperty("Token"))
                if (!$util.isString(message.Token))
                    return "Token: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID) && !(message.UID && $util.isInteger(message.UID.low) && $util.isInteger(message.UID.high)))
                    return "UID: integer|Long expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            return null;
        };

        /**
         * Creates a MsgLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB_MSG.MsgLogin} MsgLogin
         */
        MsgLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.PB_MSG.MsgLogin)
                return object;
            var message = new $root.PB_MSG.MsgLogin();
            if (object.Version != null)
                message.Version = String(object.Version);
            if (object.Channel != null)
                message.Channel = String(object.Channel);
            if (object.AppName != null)
                message.AppName = String(object.AppName);
            if (object.User != null)
                message.User = String(object.User);
            if (object.NonceStr != null)
                message.NonceStr = String(object.NonceStr);
            if (object.Token != null)
                message.Token = String(object.Token);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.UID != null)
                if ($util.Long)
                    (message.UID = $util.Long.fromValue(object.UID)).unsigned = true;
                else if (typeof object.UID === "string")
                    message.UID = parseInt(object.UID, 10);
                else if (typeof object.UID === "number")
                    message.UID = object.UID;
                else if (typeof object.UID === "object")
                    message.UID = new $util.LongBits(object.UID.low >>> 0, object.UID.high >>> 0).toNumber(true);
            if (object.RoomType != null)
                message.RoomType = String(object.RoomType);
            return message;
        };

        /**
         * Creates a plain object from a MsgLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB_MSG.MsgLogin
         * @static
         * @param {PB_MSG.MsgLogin} message MsgLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Version = "";
                object.Channel = "";
                object.AppName = "";
                object.User = "";
                object.NonceStr = "";
                object.Token = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UID = options.longs === String ? "0" : 0;
                object.RoomType = "";
            }
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.Channel != null && message.hasOwnProperty("Channel"))
                object.Channel = message.Channel;
            if (message.AppName != null && message.hasOwnProperty("AppName"))
                object.AppName = message.AppName;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = message.User;
            if (message.NonceStr != null && message.hasOwnProperty("NonceStr"))
                object.NonceStr = message.NonceStr;
            if (message.Token != null && message.hasOwnProperty("Token"))
                object.Token = message.Token;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (typeof message.UID === "number")
                    object.UID = options.longs === String ? String(message.UID) : message.UID;
                else
                    object.UID = options.longs === String ? $util.Long.prototype.toString.call(message.UID) : options.longs === Number ? new $util.LongBits(message.UID.low >>> 0, message.UID.high >>> 0).toNumber(true) : message.UID;
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                object.RoomType = message.RoomType;
            return object;
        };

        /**
         * Converts this MsgLogin to JSON.
         * @function toJSON
         * @memberof PB_MSG.MsgLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgLogin;
    })();

    PB_MSG.MsgPlayerInfo = (function() {

        /**
         * Properties of a MsgPlayerInfo.
         * @memberof PB_MSG
         * @interface IMsgPlayerInfo
         * @property {number|Long|null} [UID] MsgPlayerInfo UID
         * @property {string|null} [Nickname] MsgPlayerInfo Nickname
         * @property {number|null} [Portrait] MsgPlayerInfo Portrait
         * @property {number|Long|null} [Money] MsgPlayerInfo Money
         * @property {number|Long|null} [RMB] MsgPlayerInfo RMB
         * @property {number|null} [Main] MsgPlayerInfo Main
         * @property {number|Long|null} [FlagBit] MsgPlayerInfo FlagBit
         */

        /**
         * Constructs a new MsgPlayerInfo.
         * @memberof PB_MSG
         * @classdesc Represents a MsgPlayerInfo.
         * @implements IMsgPlayerInfo
         * @constructor
         * @param {PB_MSG.IMsgPlayerInfo=} [properties] Properties to set
         */
        function MsgPlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgPlayerInfo UID.
         * @member {number|Long} UID
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.UID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo Nickname.
         * @member {string} Nickname
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Nickname = "";

        /**
         * MsgPlayerInfo Portrait.
         * @member {number} Portrait
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Portrait = 0;

        /**
         * MsgPlayerInfo Money.
         * @member {number|Long} Money
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo RMB.
         * @member {number|Long} RMB
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.RMB = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo Main.
         * @member {number} Main
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Main = 0;

        /**
         * MsgPlayerInfo FlagBit.
         * @member {number|Long} FlagBit
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.FlagBit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgPlayerInfo instance using the specified properties.
         * @function create
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {PB_MSG.IMsgPlayerInfo=} [properties] Properties to set
         * @returns {PB_MSG.MsgPlayerInfo} MsgPlayerInfo instance
         */
        MsgPlayerInfo.create = function create(properties) {
            return new MsgPlayerInfo(properties);
        };

        /**
         * Encodes the specified MsgPlayerInfo message. Does not implicitly {@link PB_MSG.MsgPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {PB_MSG.IMsgPlayerInfo} message MsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && message.hasOwnProperty("UID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.UID);
            if (message.Nickname != null && message.hasOwnProperty("Nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Nickname);
            if (message.Portrait != null && message.hasOwnProperty("Portrait"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Portrait);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Money);
            if (message.RMB != null && message.hasOwnProperty("RMB"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.RMB);
            if (message.Main != null && message.hasOwnProperty("Main"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.Main);
            if (message.FlagBit != null && message.hasOwnProperty("FlagBit"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.FlagBit);
            return writer;
        };

        /**
         * Encodes the specified MsgPlayerInfo message, length delimited. Does not implicitly {@link PB_MSG.MsgPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {PB_MSG.IMsgPlayerInfo} message MsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_MSG.MsgPlayerInfo} MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB_MSG.MsgPlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.uint64();
                    break;
                case 2:
                    message.Nickname = reader.string();
                    break;
                case 3:
                    message.Portrait = reader.uint32();
                    break;
                case 4:
                    message.Money = reader.uint64();
                    break;
                case 5:
                    message.RMB = reader.uint64();
                    break;
                case 6:
                    message.Main = reader.uint32();
                    break;
                case 7:
                    message.FlagBit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_MSG.MsgPlayerInfo} MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgPlayerInfo message.
         * @function verify
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID) && !(message.UID && $util.isInteger(message.UID.low) && $util.isInteger(message.UID.high)))
                    return "UID: integer|Long expected";
            if (message.Nickname != null && message.hasOwnProperty("Nickname"))
                if (!$util.isString(message.Nickname))
                    return "Nickname: string expected";
            if (message.Portrait != null && message.hasOwnProperty("Portrait"))
                if (!$util.isInteger(message.Portrait))
                    return "Portrait: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.RMB != null && message.hasOwnProperty("RMB"))
                if (!$util.isInteger(message.RMB) && !(message.RMB && $util.isInteger(message.RMB.low) && $util.isInteger(message.RMB.high)))
                    return "RMB: integer|Long expected";
            if (message.Main != null && message.hasOwnProperty("Main"))
                if (!$util.isInteger(message.Main))
                    return "Main: integer expected";
            if (message.FlagBit != null && message.hasOwnProperty("FlagBit"))
                if (!$util.isInteger(message.FlagBit) && !(message.FlagBit && $util.isInteger(message.FlagBit.low) && $util.isInteger(message.FlagBit.high)))
                    return "FlagBit: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB_MSG.MsgPlayerInfo} MsgPlayerInfo
         */
        MsgPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PB_MSG.MsgPlayerInfo)
                return object;
            var message = new $root.PB_MSG.MsgPlayerInfo();
            if (object.UID != null)
                if ($util.Long)
                    (message.UID = $util.Long.fromValue(object.UID)).unsigned = true;
                else if (typeof object.UID === "string")
                    message.UID = parseInt(object.UID, 10);
                else if (typeof object.UID === "number")
                    message.UID = object.UID;
                else if (typeof object.UID === "object")
                    message.UID = new $util.LongBits(object.UID.low >>> 0, object.UID.high >>> 0).toNumber(true);
            if (object.Nickname != null)
                message.Nickname = String(object.Nickname);
            if (object.Portrait != null)
                message.Portrait = object.Portrait >>> 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = true;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber(true);
            if (object.RMB != null)
                if ($util.Long)
                    (message.RMB = $util.Long.fromValue(object.RMB)).unsigned = true;
                else if (typeof object.RMB === "string")
                    message.RMB = parseInt(object.RMB, 10);
                else if (typeof object.RMB === "number")
                    message.RMB = object.RMB;
                else if (typeof object.RMB === "object")
                    message.RMB = new $util.LongBits(object.RMB.low >>> 0, object.RMB.high >>> 0).toNumber(true);
            if (object.Main != null)
                message.Main = object.Main >>> 0;
            if (object.FlagBit != null)
                if ($util.Long)
                    (message.FlagBit = $util.Long.fromValue(object.FlagBit)).unsigned = true;
                else if (typeof object.FlagBit === "string")
                    message.FlagBit = parseInt(object.FlagBit, 10);
                else if (typeof object.FlagBit === "number")
                    message.FlagBit = object.FlagBit;
                else if (typeof object.FlagBit === "object")
                    message.FlagBit = new $util.LongBits(object.FlagBit.low >>> 0, object.FlagBit.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB_MSG.MsgPlayerInfo
         * @static
         * @param {PB_MSG.MsgPlayerInfo} message MsgPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UID = options.longs === String ? "0" : 0;
                object.Nickname = "";
                object.Portrait = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RMB = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RMB = options.longs === String ? "0" : 0;
                object.Main = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.FlagBit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FlagBit = options.longs === String ? "0" : 0;
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (typeof message.UID === "number")
                    object.UID = options.longs === String ? String(message.UID) : message.UID;
                else
                    object.UID = options.longs === String ? $util.Long.prototype.toString.call(message.UID) : options.longs === Number ? new $util.LongBits(message.UID.low >>> 0, message.UID.high >>> 0).toNumber(true) : message.UID;
            if (message.Nickname != null && message.hasOwnProperty("Nickname"))
                object.Nickname = message.Nickname;
            if (message.Portrait != null && message.hasOwnProperty("Portrait"))
                object.Portrait = message.Portrait;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber(true) : message.Money;
            if (message.RMB != null && message.hasOwnProperty("RMB"))
                if (typeof message.RMB === "number")
                    object.RMB = options.longs === String ? String(message.RMB) : message.RMB;
                else
                    object.RMB = options.longs === String ? $util.Long.prototype.toString.call(message.RMB) : options.longs === Number ? new $util.LongBits(message.RMB.low >>> 0, message.RMB.high >>> 0).toNumber(true) : message.RMB;
            if (message.Main != null && message.hasOwnProperty("Main"))
                object.Main = message.Main;
            if (message.FlagBit != null && message.hasOwnProperty("FlagBit"))
                if (typeof message.FlagBit === "number")
                    object.FlagBit = options.longs === String ? String(message.FlagBit) : message.FlagBit;
                else
                    object.FlagBit = options.longs === String ? $util.Long.prototype.toString.call(message.FlagBit) : options.longs === Number ? new $util.LongBits(message.FlagBit.low >>> 0, message.FlagBit.high >>> 0).toNumber(true) : message.FlagBit;
            return object;
        };

        /**
         * Converts this MsgPlayerInfo to JSON.
         * @function toJSON
         * @memberof PB_MSG.MsgPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgPlayerInfo;
    })();

    PB_MSG.MsgSvrLogin = (function() {

        /**
         * Properties of a MsgSvrLogin.
         * @memberof PB_MSG
         * @interface IMsgSvrLogin
         * @property {number|Long|null} [UID] MsgSvrLogin UID
         * @property {string|null} [RoomType] MsgSvrLogin RoomType
         * @property {number|null} [ConFES] MsgSvrLogin ConFES
         */

        /**
         * Constructs a new MsgSvrLogin.
         * @memberof PB_MSG
         * @classdesc Represents a MsgSvrLogin.
         * @implements IMsgSvrLogin
         * @constructor
         * @param {PB_MSG.IMsgSvrLogin=} [properties] Properties to set
         */
        function MsgSvrLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgSvrLogin UID.
         * @member {number|Long} UID
         * @memberof PB_MSG.MsgSvrLogin
         * @instance
         */
        MsgSvrLogin.prototype.UID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgSvrLogin RoomType.
         * @member {string} RoomType
         * @memberof PB_MSG.MsgSvrLogin
         * @instance
         */
        MsgSvrLogin.prototype.RoomType = "";

        /**
         * MsgSvrLogin ConFES.
         * @member {number} ConFES
         * @memberof PB_MSG.MsgSvrLogin
         * @instance
         */
        MsgSvrLogin.prototype.ConFES = 0;

        /**
         * Creates a new MsgSvrLogin instance using the specified properties.
         * @function create
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {PB_MSG.IMsgSvrLogin=} [properties] Properties to set
         * @returns {PB_MSG.MsgSvrLogin} MsgSvrLogin instance
         */
        MsgSvrLogin.create = function create(properties) {
            return new MsgSvrLogin(properties);
        };

        /**
         * Encodes the specified MsgSvrLogin message. Does not implicitly {@link PB_MSG.MsgSvrLogin.verify|verify} messages.
         * @function encode
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {PB_MSG.IMsgSvrLogin} message MsgSvrLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSvrLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && message.hasOwnProperty("UID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.UID);
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomType);
            if (message.ConFES != null && message.hasOwnProperty("ConFES"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ConFES);
            return writer;
        };

        /**
         * Encodes the specified MsgSvrLogin message, length delimited. Does not implicitly {@link PB_MSG.MsgSvrLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {PB_MSG.IMsgSvrLogin} message MsgSvrLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgSvrLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgSvrLogin message from the specified reader or buffer.
         * @function decode
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_MSG.MsgSvrLogin} MsgSvrLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSvrLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB_MSG.MsgSvrLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.uint64();
                    break;
                case 2:
                    message.RoomType = reader.string();
                    break;
                case 3:
                    message.ConFES = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgSvrLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_MSG.MsgSvrLogin} MsgSvrLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgSvrLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgSvrLogin message.
         * @function verify
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgSvrLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isInteger(message.UID) && !(message.UID && $util.isInteger(message.UID.low) && $util.isInteger(message.UID.high)))
                    return "UID: integer|Long expected";
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                if (!$util.isString(message.RoomType))
                    return "RoomType: string expected";
            if (message.ConFES != null && message.hasOwnProperty("ConFES"))
                if (!$util.isInteger(message.ConFES))
                    return "ConFES: integer expected";
            return null;
        };

        /**
         * Creates a MsgSvrLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB_MSG.MsgSvrLogin} MsgSvrLogin
         */
        MsgSvrLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.PB_MSG.MsgSvrLogin)
                return object;
            var message = new $root.PB_MSG.MsgSvrLogin();
            if (object.UID != null)
                if ($util.Long)
                    (message.UID = $util.Long.fromValue(object.UID)).unsigned = true;
                else if (typeof object.UID === "string")
                    message.UID = parseInt(object.UID, 10);
                else if (typeof object.UID === "number")
                    message.UID = object.UID;
                else if (typeof object.UID === "object")
                    message.UID = new $util.LongBits(object.UID.low >>> 0, object.UID.high >>> 0).toNumber(true);
            if (object.RoomType != null)
                message.RoomType = String(object.RoomType);
            if (object.ConFES != null)
                message.ConFES = object.ConFES >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgSvrLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB_MSG.MsgSvrLogin
         * @static
         * @param {PB_MSG.MsgSvrLogin} message MsgSvrLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgSvrLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UID = options.longs === String ? "0" : 0;
                object.RoomType = "";
                object.ConFES = 0;
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (typeof message.UID === "number")
                    object.UID = options.longs === String ? String(message.UID) : message.UID;
                else
                    object.UID = options.longs === String ? $util.Long.prototype.toString.call(message.UID) : options.longs === Number ? new $util.LongBits(message.UID.low >>> 0, message.UID.high >>> 0).toNumber(true) : message.UID;
            if (message.RoomType != null && message.hasOwnProperty("RoomType"))
                object.RoomType = message.RoomType;
            if (message.ConFES != null && message.hasOwnProperty("ConFES"))
                object.ConFES = message.ConFES;
            return object;
        };

        /**
         * Converts this MsgSvrLogin to JSON.
         * @function toJSON
         * @memberof PB_MSG.MsgSvrLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgSvrLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgSvrLogin;
    })();

    PB_MSG.MsgGameType = (function() {

        /**
         * Properties of a MsgGameType.
         * @memberof PB_MSG
         * @interface IMsgGameType
         * @property {string|null} [Type] MsgGameType Type
         * @property {number|null} [Max] MsgGameType Max
         * @property {number|null} [Curr] MsgGameType Curr
         */

        /**
         * Constructs a new MsgGameType.
         * @memberof PB_MSG
         * @classdesc Represents a MsgGameType.
         * @implements IMsgGameType
         * @constructor
         * @param {PB_MSG.IMsgGameType=} [properties] Properties to set
         */
        function MsgGameType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGameType Type.
         * @member {string} Type
         * @memberof PB_MSG.MsgGameType
         * @instance
         */
        MsgGameType.prototype.Type = "";

        /**
         * MsgGameType Max.
         * @member {number} Max
         * @memberof PB_MSG.MsgGameType
         * @instance
         */
        MsgGameType.prototype.Max = 0;

        /**
         * MsgGameType Curr.
         * @member {number} Curr
         * @memberof PB_MSG.MsgGameType
         * @instance
         */
        MsgGameType.prototype.Curr = 0;

        /**
         * Creates a new MsgGameType instance using the specified properties.
         * @function create
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {PB_MSG.IMsgGameType=} [properties] Properties to set
         * @returns {PB_MSG.MsgGameType} MsgGameType instance
         */
        MsgGameType.create = function create(properties) {
            return new MsgGameType(properties);
        };

        /**
         * Encodes the specified MsgGameType message. Does not implicitly {@link PB_MSG.MsgGameType.verify|verify} messages.
         * @function encode
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {PB_MSG.IMsgGameType} message MsgGameType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGameType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.Max != null && message.hasOwnProperty("Max"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Max);
            if (message.Curr != null && message.hasOwnProperty("Curr"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Curr);
            return writer;
        };

        /**
         * Encodes the specified MsgGameType message, length delimited. Does not implicitly {@link PB_MSG.MsgGameType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {PB_MSG.IMsgGameType} message MsgGameType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGameType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGameType message from the specified reader or buffer.
         * @function decode
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_MSG.MsgGameType} MsgGameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGameType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB_MSG.MsgGameType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.string();
                    break;
                case 2:
                    message.Max = reader.uint32();
                    break;
                case 3:
                    message.Curr = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgGameType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_MSG.MsgGameType} MsgGameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGameType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGameType message.
         * @function verify
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGameType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Max != null && message.hasOwnProperty("Max"))
                if (!$util.isInteger(message.Max))
                    return "Max: integer expected";
            if (message.Curr != null && message.hasOwnProperty("Curr"))
                if (!$util.isInteger(message.Curr))
                    return "Curr: integer expected";
            return null;
        };

        /**
         * Creates a MsgGameType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB_MSG.MsgGameType} MsgGameType
         */
        MsgGameType.fromObject = function fromObject(object) {
            if (object instanceof $root.PB_MSG.MsgGameType)
                return object;
            var message = new $root.PB_MSG.MsgGameType();
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Max != null)
                message.Max = object.Max >>> 0;
            if (object.Curr != null)
                message.Curr = object.Curr >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgGameType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB_MSG.MsgGameType
         * @static
         * @param {PB_MSG.MsgGameType} message MsgGameType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGameType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = "";
                object.Max = 0;
                object.Curr = 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Max != null && message.hasOwnProperty("Max"))
                object.Max = message.Max;
            if (message.Curr != null && message.hasOwnProperty("Curr"))
                object.Curr = message.Curr;
            return object;
        };

        /**
         * Converts this MsgGameType to JSON.
         * @function toJSON
         * @memberof PB_MSG.MsgGameType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGameType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGameType;
    })();

    PB_MSG.MsgServiceInfo = (function() {

        /**
         * Properties of a MsgServiceInfo.
         * @memberof PB_MSG
         * @interface IMsgServiceInfo
         * @property {Array.<PB_MSG.IMsgGameType>|null} [RoomList] MsgServiceInfo RoomList
         * @property {number|null} [MaxPlayer] MsgServiceInfo MaxPlayer
         * @property {number|null} [CurrPlayer] MsgServiceInfo CurrPlayer
         * @property {number|null} [ServiceID] MsgServiceInfo ServiceID
         * @property {string|null} [ServiceName] MsgServiceInfo ServiceName
         */

        /**
         * Constructs a new MsgServiceInfo.
         * @memberof PB_MSG
         * @classdesc Represents a MsgServiceInfo.
         * @implements IMsgServiceInfo
         * @constructor
         * @param {PB_MSG.IMsgServiceInfo=} [properties] Properties to set
         */
        function MsgServiceInfo(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgServiceInfo RoomList.
         * @member {Array.<PB_MSG.IMsgGameType>} RoomList
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         */
        MsgServiceInfo.prototype.RoomList = $util.emptyArray;

        /**
         * MsgServiceInfo MaxPlayer.
         * @member {number} MaxPlayer
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         */
        MsgServiceInfo.prototype.MaxPlayer = 0;

        /**
         * MsgServiceInfo CurrPlayer.
         * @member {number} CurrPlayer
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         */
        MsgServiceInfo.prototype.CurrPlayer = 0;

        /**
         * MsgServiceInfo ServiceID.
         * @member {number} ServiceID
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         */
        MsgServiceInfo.prototype.ServiceID = 0;

        /**
         * MsgServiceInfo ServiceName.
         * @member {string} ServiceName
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         */
        MsgServiceInfo.prototype.ServiceName = "";

        /**
         * Creates a new MsgServiceInfo instance using the specified properties.
         * @function create
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {PB_MSG.IMsgServiceInfo=} [properties] Properties to set
         * @returns {PB_MSG.MsgServiceInfo} MsgServiceInfo instance
         */
        MsgServiceInfo.create = function create(properties) {
            return new MsgServiceInfo(properties);
        };

        /**
         * Encodes the specified MsgServiceInfo message. Does not implicitly {@link PB_MSG.MsgServiceInfo.verify|verify} messages.
         * @function encode
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {PB_MSG.IMsgServiceInfo} message MsgServiceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgServiceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.PB_MSG.MsgGameType.encode(message.RoomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.MaxPlayer != null && message.hasOwnProperty("MaxPlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.MaxPlayer);
            if (message.CurrPlayer != null && message.hasOwnProperty("CurrPlayer"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.CurrPlayer);
            if (message.ServiceID != null && message.hasOwnProperty("ServiceID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ServiceID);
            if (message.ServiceName != null && message.hasOwnProperty("ServiceName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ServiceName);
            return writer;
        };

        /**
         * Encodes the specified MsgServiceInfo message, length delimited. Does not implicitly {@link PB_MSG.MsgServiceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {PB_MSG.IMsgServiceInfo} message MsgServiceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgServiceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgServiceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_MSG.MsgServiceInfo} MsgServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgServiceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB_MSG.MsgServiceInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.PB_MSG.MsgGameType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.MaxPlayer = reader.uint32();
                    break;
                case 3:
                    message.CurrPlayer = reader.uint32();
                    break;
                case 4:
                    message.ServiceID = reader.uint32();
                    break;
                case 5:
                    message.ServiceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgServiceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_MSG.MsgServiceInfo} MsgServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgServiceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgServiceInfo message.
         * @function verify
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgServiceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.PB_MSG.MsgGameType.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            if (message.MaxPlayer != null && message.hasOwnProperty("MaxPlayer"))
                if (!$util.isInteger(message.MaxPlayer))
                    return "MaxPlayer: integer expected";
            if (message.CurrPlayer != null && message.hasOwnProperty("CurrPlayer"))
                if (!$util.isInteger(message.CurrPlayer))
                    return "CurrPlayer: integer expected";
            if (message.ServiceID != null && message.hasOwnProperty("ServiceID"))
                if (!$util.isInteger(message.ServiceID))
                    return "ServiceID: integer expected";
            if (message.ServiceName != null && message.hasOwnProperty("ServiceName"))
                if (!$util.isString(message.ServiceName))
                    return "ServiceName: string expected";
            return null;
        };

        /**
         * Creates a MsgServiceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB_MSG.MsgServiceInfo} MsgServiceInfo
         */
        MsgServiceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PB_MSG.MsgServiceInfo)
                return object;
            var message = new $root.PB_MSG.MsgServiceInfo();
            if (object.RoomList) {
                if (!Array.isArray(object.RoomList))
                    throw TypeError(".PB_MSG.MsgServiceInfo.RoomList: array expected");
                message.RoomList = [];
                for (var i = 0; i < object.RoomList.length; ++i) {
                    if (typeof object.RoomList[i] !== "object")
                        throw TypeError(".PB_MSG.MsgServiceInfo.RoomList: object expected");
                    message.RoomList[i] = $root.PB_MSG.MsgGameType.fromObject(object.RoomList[i]);
                }
            }
            if (object.MaxPlayer != null)
                message.MaxPlayer = object.MaxPlayer >>> 0;
            if (object.CurrPlayer != null)
                message.CurrPlayer = object.CurrPlayer >>> 0;
            if (object.ServiceID != null)
                message.ServiceID = object.ServiceID >>> 0;
            if (object.ServiceName != null)
                message.ServiceName = String(object.ServiceName);
            return message;
        };

        /**
         * Creates a plain object from a MsgServiceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB_MSG.MsgServiceInfo
         * @static
         * @param {PB_MSG.MsgServiceInfo} message MsgServiceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgServiceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RoomList = [];
            if (options.defaults) {
                object.MaxPlayer = 0;
                object.CurrPlayer = 0;
                object.ServiceID = 0;
                object.ServiceName = "";
            }
            if (message.RoomList && message.RoomList.length) {
                object.RoomList = [];
                for (var j = 0; j < message.RoomList.length; ++j)
                    object.RoomList[j] = $root.PB_MSG.MsgGameType.toObject(message.RoomList[j], options);
            }
            if (message.MaxPlayer != null && message.hasOwnProperty("MaxPlayer"))
                object.MaxPlayer = message.MaxPlayer;
            if (message.CurrPlayer != null && message.hasOwnProperty("CurrPlayer"))
                object.CurrPlayer = message.CurrPlayer;
            if (message.ServiceID != null && message.hasOwnProperty("ServiceID"))
                object.ServiceID = message.ServiceID;
            if (message.ServiceName != null && message.hasOwnProperty("ServiceName"))
                object.ServiceName = message.ServiceName;
            return object;
        };

        /**
         * Converts this MsgServiceInfo to JSON.
         * @function toJSON
         * @memberof PB_MSG.MsgServiceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgServiceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgServiceInfo;
    })();

    return PB_MSG;
})();
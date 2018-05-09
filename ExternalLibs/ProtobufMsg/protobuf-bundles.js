var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PB = (function() {

    /**
     * Namespace PB.
     * @exports PB
     * @namespace
     */
    var PB = {};

    /**
     * TAttribType enum.
     * @name PB.TAttribType
     * @enum {string}
     * @property {number} INVALID_ATTRIB=0 INVALID_ATTRIB value
     * @property {number} ID=2001001 ID value
     * @property {number} LEVEL_UP_EXP_INT=2001002 LEVEL_UP_EXP_INT value
     * @property {number} NAME_STRING=2001003 NAME_STRING value
     * @property {number} LIFE_INT=2001004 LIFE_INT value
     * @property {number} LIFE_CURR_INT=2001005 LIFE_CURR_INT value
     */
    PB.TAttribType = (function() {
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
     * @name PB.TEvent
     * @enum {string}
     * @property {number} EventInvalid=0 EventInvalid value
     * @property {number} EventPlayerUp=2 EventPlayerUp value
     * @property {number} EventCostMoney=40 EventCostMoney value
     * @property {number} EventLogin=46 EventLogin value
     */
    PB.TEvent = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EventInvalid"] = 0;
        values[valuesById[2] = "EventPlayerUp"] = 2;
        values[valuesById[40] = "EventCostMoney"] = 40;
        values[valuesById[46] = "EventLogin"] = 46;
        return values;
    })();

    /**
     * 标识占据第几位   0-63
     * @name PB.TPlayerFlagBit
     * @enum {string}
     * @property {number} PLAYER_FLAG_TEST_0=0 PLAYER_FLAG_TEST_0 value
     * @property {number} PLAYER_FLAG_FIRST_CARD_ONE=1 PLAYER_FLAG_FIRST_CARD_ONE value
     * @property {number} PLAYER_FLAG_FIRST_CARD_TEN=2 PLAYER_FLAG_FIRST_CARD_TEN value
     */
    PB.TPlayerFlagBit = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PLAYER_FLAG_TEST_0"] = 0;
        values[valuesById[1] = "PLAYER_FLAG_FIRST_CARD_ONE"] = 1;
        values[valuesById[2] = "PLAYER_FLAG_FIRST_CARD_TEN"] = 2;
        return values;
    })();

    /**
     * TErrorType enum.
     * @name PB.TErrorType
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
    PB.TErrorType = (function() {
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
     * @name PB.TGender
     * @enum {string}
     * @property {number} MALE=0 MALE value
     * @property {number} FEMALE=1 FEMALE value
     */
    PB.TGender = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MALE"] = 0;
        values[valuesById[1] = "FEMALE"] = 1;
        return values;
    })();

    /**
     * TCardsType enum.
     * @name PB.TCardsType
     * @enum {string}
     * @property {number} CardsNone=0 CardsNone value
     * @property {number} CardsSpade=1 CardsSpade value
     * @property {number} CardsHearts=2 CardsHearts value
     * @property {number} CardsPlumBlossom=3 CardsPlumBlossom value
     * @property {number} CardsDiamond=4 CardsDiamond value
     */
    PB.TCardsType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CardsNone"] = 0;
        values[valuesById[1] = "CardsSpade"] = 1;
        values[valuesById[2] = "CardsHearts"] = 2;
        values[valuesById[3] = "CardsPlumBlossom"] = 3;
        values[valuesById[4] = "CardsDiamond"] = 4;
        return values;
    })();

    PB.MsgLogin = (function() {

        /**
         * Properties of a MsgLogin.
         * @memberof PB
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
         * @memberof PB
         * @classdesc Represents a MsgLogin.
         * @implements IMsgLogin
         * @constructor
         * @param {PB.IMsgLogin=} [properties] Properties to set
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
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Version = "";

        /**
         * MsgLogin Channel.
         * @member {string} Channel
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Channel = "";

        /**
         * MsgLogin AppName.
         * @member {string} AppName
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.AppName = "";

        /**
         * MsgLogin User.
         * @member {string} User
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.User = "";

        /**
         * MsgLogin NonceStr.
         * @member {string} NonceStr
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.NonceStr = "";

        /**
         * MsgLogin Token.
         * @member {string} Token
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Token = "";

        /**
         * MsgLogin Timestamp.
         * @member {number|Long} Timestamp
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgLogin UID.
         * @member {number|Long} UID
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.UID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgLogin RoomType.
         * @member {string} RoomType
         * @memberof PB.MsgLogin
         * @instance
         */
        MsgLogin.prototype.RoomType = "";

        /**
         * Creates a new MsgLogin instance using the specified properties.
         * @function create
         * @memberof PB.MsgLogin
         * @static
         * @param {PB.IMsgLogin=} [properties] Properties to set
         * @returns {PB.MsgLogin} MsgLogin instance
         */
        MsgLogin.create = function create(properties) {
            return new MsgLogin(properties);
        };

        /**
         * Encodes the specified MsgLogin message. Does not implicitly {@link PB.MsgLogin.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgLogin
         * @static
         * @param {PB.IMsgLogin} message MsgLogin message or plain object to encode
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
         * Encodes the specified MsgLogin message, length delimited. Does not implicitly {@link PB.MsgLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgLogin
         * @static
         * @param {PB.IMsgLogin} message MsgLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgLogin message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgLogin} MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgLogin();
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
         * @memberof PB.MsgLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgLogin} MsgLogin
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
         * @memberof PB.MsgLogin
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
         * @memberof PB.MsgLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgLogin} MsgLogin
         */
        MsgLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgLogin)
                return object;
            var message = new $root.PB.MsgLogin();
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
         * @memberof PB.MsgLogin
         * @static
         * @param {PB.MsgLogin} message MsgLogin
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
         * @memberof PB.MsgLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgLogin;
    })();

    PB.MsgPlayerInfo = (function() {

        /**
         * Properties of a MsgPlayerInfo.
         * @memberof PB
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
         * @memberof PB
         * @classdesc Represents a MsgPlayerInfo.
         * @implements IMsgPlayerInfo
         * @constructor
         * @param {PB.IMsgPlayerInfo=} [properties] Properties to set
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
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.UID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo Nickname.
         * @member {string} Nickname
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Nickname = "";

        /**
         * MsgPlayerInfo Portrait.
         * @member {number} Portrait
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Portrait = 0;

        /**
         * MsgPlayerInfo Money.
         * @member {number|Long} Money
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo RMB.
         * @member {number|Long} RMB
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.RMB = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgPlayerInfo Main.
         * @member {number} Main
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.Main = 0;

        /**
         * MsgPlayerInfo FlagBit.
         * @member {number|Long} FlagBit
         * @memberof PB.MsgPlayerInfo
         * @instance
         */
        MsgPlayerInfo.prototype.FlagBit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgPlayerInfo instance using the specified properties.
         * @function create
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {PB.IMsgPlayerInfo=} [properties] Properties to set
         * @returns {PB.MsgPlayerInfo} MsgPlayerInfo instance
         */
        MsgPlayerInfo.create = function create(properties) {
            return new MsgPlayerInfo(properties);
        };

        /**
         * Encodes the specified MsgPlayerInfo message. Does not implicitly {@link PB.MsgPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {PB.IMsgPlayerInfo} message MsgPlayerInfo message or plain object to encode
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
         * Encodes the specified MsgPlayerInfo message, length delimited. Does not implicitly {@link PB.MsgPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {PB.IMsgPlayerInfo} message MsgPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgPlayerInfo} MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgPlayerInfo();
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
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgPlayerInfo} MsgPlayerInfo
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
         * @memberof PB.MsgPlayerInfo
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
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgPlayerInfo} MsgPlayerInfo
         */
        MsgPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgPlayerInfo)
                return object;
            var message = new $root.PB.MsgPlayerInfo();
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
         * @memberof PB.MsgPlayerInfo
         * @static
         * @param {PB.MsgPlayerInfo} message MsgPlayerInfo
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
         * @memberof PB.MsgPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgPlayerInfo;
    })();

    PB.MsgCreatePrivateRoom = (function() {

        /**
         * Properties of a MsgCreatePrivateRoom.
         * @memberof PB
         * @interface IMsgCreatePrivateRoom
         * @property {string|null} [roomType] MsgCreatePrivateRoom roomType
         */

        /**
         * Constructs a new MsgCreatePrivateRoom.
         * @memberof PB
         * @classdesc Represents a MsgCreatePrivateRoom.
         * @implements IMsgCreatePrivateRoom
         * @constructor
         * @param {PB.IMsgCreatePrivateRoom=} [properties] Properties to set
         */
        function MsgCreatePrivateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgCreatePrivateRoom roomType.
         * @member {string} roomType
         * @memberof PB.MsgCreatePrivateRoom
         * @instance
         */
        MsgCreatePrivateRoom.prototype.roomType = "";

        /**
         * Creates a new MsgCreatePrivateRoom instance using the specified properties.
         * @function create
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {PB.IMsgCreatePrivateRoom=} [properties] Properties to set
         * @returns {PB.MsgCreatePrivateRoom} MsgCreatePrivateRoom instance
         */
        MsgCreatePrivateRoom.create = function create(properties) {
            return new MsgCreatePrivateRoom(properties);
        };

        /**
         * Encodes the specified MsgCreatePrivateRoom message. Does not implicitly {@link PB.MsgCreatePrivateRoom.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {PB.IMsgCreatePrivateRoom} message MsgCreatePrivateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCreatePrivateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomType);
            return writer;
        };

        /**
         * Encodes the specified MsgCreatePrivateRoom message, length delimited. Does not implicitly {@link PB.MsgCreatePrivateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {PB.IMsgCreatePrivateRoom} message MsgCreatePrivateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCreatePrivateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgCreatePrivateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgCreatePrivateRoom} MsgCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCreatePrivateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgCreatePrivateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgCreatePrivateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgCreatePrivateRoom} MsgCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCreatePrivateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgCreatePrivateRoom message.
         * @function verify
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgCreatePrivateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                if (!$util.isString(message.roomType))
                    return "roomType: string expected";
            return null;
        };

        /**
         * Creates a MsgCreatePrivateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgCreatePrivateRoom} MsgCreatePrivateRoom
         */
        MsgCreatePrivateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgCreatePrivateRoom)
                return object;
            var message = new $root.PB.MsgCreatePrivateRoom();
            if (object.roomType != null)
                message.roomType = String(object.roomType);
            return message;
        };

        /**
         * Creates a plain object from a MsgCreatePrivateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgCreatePrivateRoom
         * @static
         * @param {PB.MsgCreatePrivateRoom} message MsgCreatePrivateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgCreatePrivateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roomType = "";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = message.roomType;
            return object;
        };

        /**
         * Converts this MsgCreatePrivateRoom to JSON.
         * @function toJSON
         * @memberof PB.MsgCreatePrivateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgCreatePrivateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgCreatePrivateRoom;
    })();

    PB.MsgEnterPrivateRoom = (function() {

        /**
         * Properties of a MsgEnterPrivateRoom.
         * @memberof PB
         * @interface IMsgEnterPrivateRoom
         * @property {number|Long|null} [roomId] MsgEnterPrivateRoom roomId
         * @property {string|null} [roomType] MsgEnterPrivateRoom roomType
         * @property {string|null} [appName] MsgEnterPrivateRoom appName
         * @property {number|null} [gameVersione] MsgEnterPrivateRoom gameVersione
         */

        /**
         * Constructs a new MsgEnterPrivateRoom.
         * @memberof PB
         * @classdesc Represents a MsgEnterPrivateRoom.
         * @implements IMsgEnterPrivateRoom
         * @constructor
         * @param {PB.IMsgEnterPrivateRoom=} [properties] Properties to set
         */
        function MsgEnterPrivateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgEnterPrivateRoom roomId.
         * @member {number|Long} roomId
         * @memberof PB.MsgEnterPrivateRoom
         * @instance
         */
        MsgEnterPrivateRoom.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgEnterPrivateRoom roomType.
         * @member {string} roomType
         * @memberof PB.MsgEnterPrivateRoom
         * @instance
         */
        MsgEnterPrivateRoom.prototype.roomType = "";

        /**
         * MsgEnterPrivateRoom appName.
         * @member {string} appName
         * @memberof PB.MsgEnterPrivateRoom
         * @instance
         */
        MsgEnterPrivateRoom.prototype.appName = "";

        /**
         * MsgEnterPrivateRoom gameVersione.
         * @member {number} gameVersione
         * @memberof PB.MsgEnterPrivateRoom
         * @instance
         */
        MsgEnterPrivateRoom.prototype.gameVersione = 0;

        /**
         * Creates a new MsgEnterPrivateRoom instance using the specified properties.
         * @function create
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {PB.IMsgEnterPrivateRoom=} [properties] Properties to set
         * @returns {PB.MsgEnterPrivateRoom} MsgEnterPrivateRoom instance
         */
        MsgEnterPrivateRoom.create = function create(properties) {
            return new MsgEnterPrivateRoom(properties);
        };

        /**
         * Encodes the specified MsgEnterPrivateRoom message. Does not implicitly {@link PB.MsgEnterPrivateRoom.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {PB.IMsgEnterPrivateRoom} message MsgEnterPrivateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgEnterPrivateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roomId);
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomType);
            if (message.appName != null && message.hasOwnProperty("appName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appName);
            if (message.gameVersione != null && message.hasOwnProperty("gameVersione"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gameVersione);
            return writer;
        };

        /**
         * Encodes the specified MsgEnterPrivateRoom message, length delimited. Does not implicitly {@link PB.MsgEnterPrivateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {PB.IMsgEnterPrivateRoom} message MsgEnterPrivateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgEnterPrivateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgEnterPrivateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgEnterPrivateRoom} MsgEnterPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgEnterPrivateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgEnterPrivateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.uint64();
                    break;
                case 2:
                    message.roomType = reader.string();
                    break;
                case 3:
                    message.appName = reader.string();
                    break;
                case 4:
                    message.gameVersione = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgEnterPrivateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgEnterPrivateRoom} MsgEnterPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgEnterPrivateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgEnterPrivateRoom message.
         * @function verify
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgEnterPrivateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                if (!$util.isString(message.roomType))
                    return "roomType: string expected";
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!$util.isString(message.appName))
                    return "appName: string expected";
            if (message.gameVersione != null && message.hasOwnProperty("gameVersione"))
                if (!$util.isInteger(message.gameVersione))
                    return "gameVersione: integer expected";
            return null;
        };

        /**
         * Creates a MsgEnterPrivateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgEnterPrivateRoom} MsgEnterPrivateRoom
         */
        MsgEnterPrivateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgEnterPrivateRoom)
                return object;
            var message = new $root.PB.MsgEnterPrivateRoom();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
            if (object.roomType != null)
                message.roomType = String(object.roomType);
            if (object.appName != null)
                message.appName = String(object.appName);
            if (object.gameVersione != null)
                message.gameVersione = object.gameVersione >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgEnterPrivateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgEnterPrivateRoom
         * @static
         * @param {PB.MsgEnterPrivateRoom} message MsgEnterPrivateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgEnterPrivateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.roomType = "";
                object.appName = "";
                object.gameVersione = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = message.roomType;
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = message.appName;
            if (message.gameVersione != null && message.hasOwnProperty("gameVersione"))
                object.gameVersione = message.gameVersione;
            return object;
        };

        /**
         * Converts this MsgEnterPrivateRoom to JSON.
         * @function toJSON
         * @memberof PB.MsgEnterPrivateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgEnterPrivateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgEnterPrivateRoom;
    })();

    PB.MsgCard = (function() {

        /**
         * Properties of a MsgCard.
         * @memberof PB
         * @interface IMsgCard
         * @property {number|null} [card] MsgCard card
         */

        /**
         * Constructs a new MsgCard.
         * @memberof PB
         * @classdesc Represents a MsgCard.
         * @implements IMsgCard
         * @constructor
         * @param {PB.IMsgCard=} [properties] Properties to set
         */
        function MsgCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgCard card.
         * @member {number} card
         * @memberof PB.MsgCard
         * @instance
         */
        MsgCard.prototype.card = 0;

        /**
         * Creates a new MsgCard instance using the specified properties.
         * @function create
         * @memberof PB.MsgCard
         * @static
         * @param {PB.IMsgCard=} [properties] Properties to set
         * @returns {PB.MsgCard} MsgCard instance
         */
        MsgCard.create = function create(properties) {
            return new MsgCard(properties);
        };

        /**
         * Encodes the specified MsgCard message. Does not implicitly {@link PB.MsgCard.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgCard
         * @static
         * @param {PB.IMsgCard} message MsgCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.card != null && message.hasOwnProperty("card"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.card);
            return writer;
        };

        /**
         * Encodes the specified MsgCard message, length delimited. Does not implicitly {@link PB.MsgCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgCard
         * @static
         * @param {PB.IMsgCard} message MsgCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgCard message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgCard} MsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.card = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgCard} MsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgCard message.
         * @function verify
         * @memberof PB.MsgCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.card != null && message.hasOwnProperty("card"))
                if (!$util.isInteger(message.card))
                    return "card: integer expected";
            return null;
        };

        /**
         * Creates a MsgCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgCard} MsgCard
         */
        MsgCard.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgCard)
                return object;
            var message = new $root.PB.MsgCard();
            if (object.card != null)
                message.card = object.card >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgCard
         * @static
         * @param {PB.MsgCard} message MsgCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.card = 0;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = message.card;
            return object;
        };

        /**
         * Converts this MsgCard to JSON.
         * @function toJSON
         * @memberof PB.MsgCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgCard;
    })();

    PB.MsgCards = (function() {

        /**
         * Properties of a MsgCards.
         * @memberof PB
         * @interface IMsgCards
         * @property {Array.<number>|null} [cards] MsgCards cards
         */

        /**
         * Constructs a new MsgCards.
         * @memberof PB
         * @classdesc Represents a MsgCards.
         * @implements IMsgCards
         * @constructor
         * @param {PB.IMsgCards=} [properties] Properties to set
         */
        function MsgCards(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgCards cards.
         * @member {Array.<number>} cards
         * @memberof PB.MsgCards
         * @instance
         */
        MsgCards.prototype.cards = $util.emptyArray;

        /**
         * Creates a new MsgCards instance using the specified properties.
         * @function create
         * @memberof PB.MsgCards
         * @static
         * @param {PB.IMsgCards=} [properties] Properties to set
         * @returns {PB.MsgCards} MsgCards instance
         */
        MsgCards.create = function create(properties) {
            return new MsgCards(properties);
        };

        /**
         * Encodes the specified MsgCards message. Does not implicitly {@link PB.MsgCards.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgCards
         * @static
         * @param {PB.IMsgCards} message MsgCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cards != null && message.cards.length)
                for (var i = 0; i < message.cards.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.cards[i]);
            return writer;
        };

        /**
         * Encodes the specified MsgCards message, length delimited. Does not implicitly {@link PB.MsgCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgCards
         * @static
         * @param {PB.IMsgCards} message MsgCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgCards message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgCards} MsgCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.uint32());
                    } else
                        message.cards.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgCards} MsgCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgCards message.
         * @function verify
         * @memberof PB.MsgCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a MsgCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgCards} MsgCards
         */
        MsgCards.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgCards)
                return object;
            var message = new $root.PB.MsgCards();
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".PB.MsgCards.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgCards
         * @static
         * @param {PB.MsgCards} message MsgCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            return object;
        };

        /**
         * Converts this MsgCards to JSON.
         * @function toJSON
         * @memberof PB.MsgCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgCards;
    })();

    PB.MsgInt = (function() {

        /**
         * Properties of a MsgInt.
         * @memberof PB
         * @interface IMsgInt
         * @property {number|Long|null} [value] MsgInt value
         */

        /**
         * Constructs a new MsgInt.
         * @memberof PB
         * @classdesc Represents a MsgInt.
         * @implements IMsgInt
         * @constructor
         * @param {PB.IMsgInt=} [properties] Properties to set
         */
        function MsgInt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgInt value.
         * @member {number|Long} value
         * @memberof PB.MsgInt
         * @instance
         */
        MsgInt.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MsgInt instance using the specified properties.
         * @function create
         * @memberof PB.MsgInt
         * @static
         * @param {PB.IMsgInt=} [properties] Properties to set
         * @returns {PB.MsgInt} MsgInt instance
         */
        MsgInt.create = function create(properties) {
            return new MsgInt(properties);
        };

        /**
         * Encodes the specified MsgInt message. Does not implicitly {@link PB.MsgInt.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgInt
         * @static
         * @param {PB.IMsgInt} message MsgInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgInt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
            return writer;
        };

        /**
         * Encodes the specified MsgInt message, length delimited. Does not implicitly {@link PB.MsgInt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgInt
         * @static
         * @param {PB.IMsgInt} message MsgInt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgInt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgInt message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgInt} MsgInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgInt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgInt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgInt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgInt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgInt} MsgInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgInt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgInt message.
         * @function verify
         * @memberof PB.MsgInt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgInt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgInt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgInt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgInt} MsgInt
         */
        MsgInt.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgInt)
                return object;
            var message = new $root.PB.MsgInt();
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MsgInt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgInt
         * @static
         * @param {PB.MsgInt} message MsgInt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgInt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
            return object;
        };

        /**
         * Converts this MsgInt to JSON.
         * @function toJSON
         * @memberof PB.MsgInt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgInt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgInt;
    })();

    PB.MsgBool = (function() {

        /**
         * Properties of a MsgBool.
         * @memberof PB
         * @interface IMsgBool
         * @property {boolean|null} [value] MsgBool value
         */

        /**
         * Constructs a new MsgBool.
         * @memberof PB
         * @classdesc Represents a MsgBool.
         * @implements IMsgBool
         * @constructor
         * @param {PB.IMsgBool=} [properties] Properties to set
         */
        function MsgBool(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBool value.
         * @member {boolean} value
         * @memberof PB.MsgBool
         * @instance
         */
        MsgBool.prototype.value = false;

        /**
         * Creates a new MsgBool instance using the specified properties.
         * @function create
         * @memberof PB.MsgBool
         * @static
         * @param {PB.IMsgBool=} [properties] Properties to set
         * @returns {PB.MsgBool} MsgBool instance
         */
        MsgBool.create = function create(properties) {
            return new MsgBool(properties);
        };

        /**
         * Encodes the specified MsgBool message. Does not implicitly {@link PB.MsgBool.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgBool
         * @static
         * @param {PB.IMsgBool} message MsgBool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
            return writer;
        };

        /**
         * Encodes the specified MsgBool message, length delimited. Does not implicitly {@link PB.MsgBool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgBool
         * @static
         * @param {PB.IMsgBool} message MsgBool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBool message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgBool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgBool} MsgBool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgBool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgBool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgBool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgBool} MsgBool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBool message.
         * @function verify
         * @memberof PB.MsgBool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            return null;
        };

        /**
         * Creates a MsgBool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgBool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgBool} MsgBool
         */
        MsgBool.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgBool)
                return object;
            var message = new $root.PB.MsgBool();
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };

        /**
         * Creates a plain object from a MsgBool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgBool
         * @static
         * @param {PB.MsgBool} message MsgBool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgBool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = false;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this MsgBool to JSON.
         * @function toJSON
         * @memberof PB.MsgBool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgBool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgBool;
    })();

    PB.MsgString = (function() {

        /**
         * Properties of a MsgString.
         * @memberof PB
         * @interface IMsgString
         * @property {string|null} [str] MsgString str
         */

        /**
         * Constructs a new MsgString.
         * @memberof PB
         * @classdesc Represents a MsgString.
         * @implements IMsgString
         * @constructor
         * @param {PB.IMsgString=} [properties] Properties to set
         */
        function MsgString(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgString str.
         * @member {string} str
         * @memberof PB.MsgString
         * @instance
         */
        MsgString.prototype.str = "";

        /**
         * Creates a new MsgString instance using the specified properties.
         * @function create
         * @memberof PB.MsgString
         * @static
         * @param {PB.IMsgString=} [properties] Properties to set
         * @returns {PB.MsgString} MsgString instance
         */
        MsgString.create = function create(properties) {
            return new MsgString(properties);
        };

        /**
         * Encodes the specified MsgString message. Does not implicitly {@link PB.MsgString.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgString
         * @static
         * @param {PB.IMsgString} message MsgString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgString.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.str != null && message.hasOwnProperty("str"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
            return writer;
        };

        /**
         * Encodes the specified MsgString message, length delimited. Does not implicitly {@link PB.MsgString.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgString
         * @static
         * @param {PB.IMsgString} message MsgString message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgString.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgString message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgString} MsgString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgString.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgString();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.str = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgString message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgString
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgString} MsgString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgString.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgString message.
         * @function verify
         * @memberof PB.MsgString
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgString.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.str != null && message.hasOwnProperty("str"))
                if (!$util.isString(message.str))
                    return "str: string expected";
            return null;
        };

        /**
         * Creates a MsgString message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgString
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgString} MsgString
         */
        MsgString.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgString)
                return object;
            var message = new $root.PB.MsgString();
            if (object.str != null)
                message.str = String(object.str);
            return message;
        };

        /**
         * Creates a plain object from a MsgString message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgString
         * @static
         * @param {PB.MsgString} message MsgString
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgString.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.str = "";
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            return object;
        };

        /**
         * Converts this MsgString to JSON.
         * @function toJSON
         * @memberof PB.MsgString
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgString.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgString;
    })();

    PB.MsgError = (function() {

        /**
         * Properties of a MsgError.
         * @memberof PB
         * @interface IMsgError
         * @property {number|null} [errno] MsgError errno
         * @property {number|Long|null} [value] MsgError value
         */

        /**
         * Constructs a new MsgError.
         * @memberof PB
         * @classdesc Represents a MsgError.
         * @implements IMsgError
         * @constructor
         * @param {PB.IMsgError=} [properties] Properties to set
         */
        function MsgError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgError errno.
         * @member {number} errno
         * @memberof PB.MsgError
         * @instance
         */
        MsgError.prototype.errno = 0;

        /**
         * MsgError value.
         * @member {number|Long} value
         * @memberof PB.MsgError
         * @instance
         */
        MsgError.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgError instance using the specified properties.
         * @function create
         * @memberof PB.MsgError
         * @static
         * @param {PB.IMsgError=} [properties] Properties to set
         * @returns {PB.MsgError} MsgError instance
         */
        MsgError.create = function create(properties) {
            return new MsgError(properties);
        };

        /**
         * Encodes the specified MsgError message. Does not implicitly {@link PB.MsgError.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgError
         * @static
         * @param {PB.IMsgError} message MsgError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errno != null && message.hasOwnProperty("errno"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.errno);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
            return writer;
        };

        /**
         * Encodes the specified MsgError message, length delimited. Does not implicitly {@link PB.MsgError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgError
         * @static
         * @param {PB.IMsgError} message MsgError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgError message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgError} MsgError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errno = reader.uint32();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgError} MsgError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgError message.
         * @function verify
         * @memberof PB.MsgError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errno != null && message.hasOwnProperty("errno"))
                if (!$util.isInteger(message.errno))
                    return "errno: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgError} MsgError
         */
        MsgError.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgError)
                return object;
            var message = new $root.PB.MsgError();
            if (object.errno != null)
                message.errno = object.errno >>> 0;
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (typeof object.value === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgError
         * @static
         * @param {PB.MsgError} message MsgError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errno = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.value = options.longs === String ? "0" : 0;
            }
            if (message.errno != null && message.hasOwnProperty("errno"))
                object.errno = message.errno;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
            return object;
        };

        /**
         * Converts this MsgError to JSON.
         * @function toJSON
         * @memberof PB.MsgError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgError;
    })();

    /**
     * TDDZPlayerWik enum.
     * @name PB.TDDZPlayerWik
     * @enum {string}
     * @property {number} ASK_DDZ_NULL=1 ASK_DDZ_NULL value
     * @property {number} ASK_DDZ_TISHI=2 ASK_DDZ_TISHI value
     * @property {number} ASK_DDZ_BUCHU=3 ASK_DDZ_BUCHU value
     * @property {number} ASK_DDZ_CHUPAI=4 ASK_DDZ_CHUPAI value
     * @property {number} ASK_DDZ_DIZHU_MINGPAI=5 ASK_DDZ_DIZHU_MINGPAI value
     */
    PB.TDDZPlayerWik = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ASK_DDZ_NULL"] = 1;
        values[valuesById[2] = "ASK_DDZ_TISHI"] = 2;
        values[valuesById[3] = "ASK_DDZ_BUCHU"] = 3;
        values[valuesById[4] = "ASK_DDZ_CHUPAI"] = 4;
        values[valuesById[5] = "ASK_DDZ_DIZHU_MINGPAI"] = 5;
        return values;
    })();

    /**
     * TDDZPlayerState enum.
     * @name PB.TDDZPlayerState
     * @enum {string}
     * @property {number} STATE_DDZ_READY=1 STATE_DDZ_READY value
     * @property {number} STATE_DDZ_GUOPAI=2 STATE_DDZ_GUOPAI value
     * @property {number} STATE_DDZ_CHUNTIAN=3 STATE_DDZ_CHUNTIAN value
     * @property {number} STATE_DDZ_NEWROLE=4 STATE_DDZ_NEWROLE value
     * @property {number} STATE_DDZ_ROOM_OWNER=5 STATE_DDZ_ROOM_OWNER value
     * @property {number} STATE_DDZ_RELIEVE=6 STATE_DDZ_RELIEVE value
     * @property {number} STATE_DDZ_LEAVE=7 STATE_DDZ_LEAVE value
     * @property {number} STATE_DDZ_LIMIT=8 STATE_DDZ_LIMIT value
     * @property {number} STATE_DDZ_OFFLINE=9 STATE_DDZ_OFFLINE value
     * @property {number} STATE_DDZ_MINGPAI=10 STATE_DDZ_MINGPAI value
     * @property {number} STATE_DDZ_DIZHU=11 STATE_DDZ_DIZHU value
     * @property {number} STATE_DDZ_NONGMING=12 STATE_DDZ_NONGMING value
     * @property {number} STATE_DDZ_JIABEI=13 STATE_DDZ_JIABEI value
     * @property {number} STATE_DDZ_QIANGDIZHU=14 STATE_DDZ_QIANGDIZHU value
     * @property {number} STATE_DDZ_SELECT_JIABEI=15 STATE_DDZ_SELECT_JIABEI value
     * @property {number} STATE_DDZ_SELECT_MINGPAISTART=16 STATE_DDZ_SELECT_MINGPAISTART value
     * @property {number} STATE_DDZ_FENGDING=17 STATE_DDZ_FENGDING value
     * @property {number} STATE_DDZ_CONTINUE_GAME=18 STATE_DDZ_CONTINUE_GAME value
     */
    PB.TDDZPlayerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "STATE_DDZ_READY"] = 1;
        values[valuesById[2] = "STATE_DDZ_GUOPAI"] = 2;
        values[valuesById[3] = "STATE_DDZ_CHUNTIAN"] = 3;
        values[valuesById[4] = "STATE_DDZ_NEWROLE"] = 4;
        values[valuesById[5] = "STATE_DDZ_ROOM_OWNER"] = 5;
        values[valuesById[6] = "STATE_DDZ_RELIEVE"] = 6;
        values[valuesById[7] = "STATE_DDZ_LEAVE"] = 7;
        values[valuesById[8] = "STATE_DDZ_LIMIT"] = 8;
        values[valuesById[9] = "STATE_DDZ_OFFLINE"] = 9;
        values[valuesById[10] = "STATE_DDZ_MINGPAI"] = 10;
        values[valuesById[11] = "STATE_DDZ_DIZHU"] = 11;
        values[valuesById[12] = "STATE_DDZ_NONGMING"] = 12;
        values[valuesById[13] = "STATE_DDZ_JIABEI"] = 13;
        values[valuesById[14] = "STATE_DDZ_QIANGDIZHU"] = 14;
        values[valuesById[15] = "STATE_DDZ_SELECT_JIABEI"] = 15;
        values[valuesById[16] = "STATE_DDZ_SELECT_MINGPAISTART"] = 16;
        values[valuesById[17] = "STATE_DDZ_FENGDING"] = 17;
        values[valuesById[18] = "STATE_DDZ_CONTINUE_GAME"] = 18;
        return values;
    })();

    /**
     * TDDZState enum.
     * @name PB.TDDZState
     * @enum {string}
     * @property {number} TDDZStateWait=0 TDDZStateWait value
     * @property {number} TDDZStateCheckStartGame=1 TDDZStateCheckStartGame value
     * @property {number} TDDZStateSelectMingCardStart=2 TDDZStateSelectMingCardStart value
     * @property {number} TDDZStateStartGame=3 TDDZStateStartGame value
     * @property {number} TDDZStateSendCard=4 TDDZStateSendCard value
     * @property {number} TDDZStateQiangDiZhu=5 TDDZStateQiangDiZhu value
     * @property {number} TDDZStateSelectAddTimes=6 TDDZStateSelectAddTimes value
     * @property {number} TDDZStateAction=7 TDDZStateAction value
     * @property {number} TDDZStateOutCard=8 TDDZStateOutCard value
     * @property {number} TDDZStateShowDown=9 TDDZStateShowDown value
     * @property {number} TDDZStateRelieveRoom=10 TDDZStateRelieveRoom value
     */
    PB.TDDZState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TDDZStateWait"] = 0;
        values[valuesById[1] = "TDDZStateCheckStartGame"] = 1;
        values[valuesById[2] = "TDDZStateSelectMingCardStart"] = 2;
        values[valuesById[3] = "TDDZStateStartGame"] = 3;
        values[valuesById[4] = "TDDZStateSendCard"] = 4;
        values[valuesById[5] = "TDDZStateQiangDiZhu"] = 5;
        values[valuesById[6] = "TDDZStateSelectAddTimes"] = 6;
        values[valuesById[7] = "TDDZStateAction"] = 7;
        values[valuesById[8] = "TDDZStateOutCard"] = 8;
        values[valuesById[9] = "TDDZStateShowDown"] = 9;
        values[valuesById[10] = "TDDZStateRelieveRoom"] = 10;
        return values;
    })();

    /**
     * TDDZCT enum.
     * @name PB.TDDZCT
     * @enum {string}
     * @property {number} CT_DDZ_ERROR=0 CT_DDZ_ERROR value
     * @property {number} CT_DDZ_SINGLE=1 CT_DDZ_SINGLE value
     * @property {number} CT_DDZ_DOUBLE=2 CT_DDZ_DOUBLE value
     * @property {number} CT_DDZ_THREE_TIAO=3 CT_DDZ_THREE_TIAO value
     * @property {number} CT_DDZ_THREE_TIAO_WITH_ONE=4 CT_DDZ_THREE_TIAO_WITH_ONE value
     * @property {number} CT_DDZ_THREE_TIAO_WITH_YIDUI=5 CT_DDZ_THREE_TIAO_WITH_YIDUI value
     * @property {number} CT_DDZ_SHUN_ZI=6 CT_DDZ_SHUN_ZI value
     * @property {number} CT_DDZ_LIAN_DUI=7 CT_DDZ_LIAN_DUI value
     * @property {number} CT_DDZ_FEIJI_WITH_NULL=8 CT_DDZ_FEIJI_WITH_NULL value
     * @property {number} CT_DDZ_FEIJI_WITH_ONE=9 CT_DDZ_FEIJI_WITH_ONE value
     * @property {number} CT_DDZ_FEIJI_WITH_YIDUI=10 CT_DDZ_FEIJI_WITH_YIDUI value
     * @property {number} CT_DDZ_FOUR_WITHDOUBLE=11 CT_DDZ_FOUR_WITHDOUBLE value
     * @property {number} CT_DDZ_FOUR_LIANGDUI=12 CT_DDZ_FOUR_LIANGDUI value
     * @property {number} CT_DDZ_ZHADAN_SIZHANG=13 CT_DDZ_ZHADAN_SIZHANG value
     * @property {number} CT_DDZ_HUOJIAN=14 CT_DDZ_HUOJIAN value
     */
    PB.TDDZCT = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CT_DDZ_ERROR"] = 0;
        values[valuesById[1] = "CT_DDZ_SINGLE"] = 1;
        values[valuesById[2] = "CT_DDZ_DOUBLE"] = 2;
        values[valuesById[3] = "CT_DDZ_THREE_TIAO"] = 3;
        values[valuesById[4] = "CT_DDZ_THREE_TIAO_WITH_ONE"] = 4;
        values[valuesById[5] = "CT_DDZ_THREE_TIAO_WITH_YIDUI"] = 5;
        values[valuesById[6] = "CT_DDZ_SHUN_ZI"] = 6;
        values[valuesById[7] = "CT_DDZ_LIAN_DUI"] = 7;
        values[valuesById[8] = "CT_DDZ_FEIJI_WITH_NULL"] = 8;
        values[valuesById[9] = "CT_DDZ_FEIJI_WITH_ONE"] = 9;
        values[valuesById[10] = "CT_DDZ_FEIJI_WITH_YIDUI"] = 10;
        values[valuesById[11] = "CT_DDZ_FOUR_WITHDOUBLE"] = 11;
        values[valuesById[12] = "CT_DDZ_FOUR_LIANGDUI"] = 12;
        values[valuesById[13] = "CT_DDZ_ZHADAN_SIZHANG"] = 13;
        values[valuesById[14] = "CT_DDZ_HUOJIAN"] = 14;
        return values;
    })();

    /**
     * TDDZBottomType enum.
     * @name PB.TDDZBottomType
     * @enum {string}
     * @property {number} DDZ_BT_NULL=0 DDZ_BT_NULL value
     * @property {number} DDZ_BT_XIAO_KING=1 DDZ_BT_XIAO_KING value
     * @property {number} DDZ_BT_DA_KING=2 DDZ_BT_DA_KING value
     * @property {number} DDZ_BT_DUIZI=3 DDZ_BT_DUIZI value
     * @property {number} DDZ_BT_TONGHUA=4 DDZ_BT_TONGHUA value
     * @property {number} DDZ_BT_SHUNZI=5 DDZ_BT_SHUNZI value
     * @property {number} DDZ_BT_SANZHANG=6 DDZ_BT_SANZHANG value
     * @property {number} DDZ_BT_TONGHUASHUN=7 DDZ_BT_TONGHUASHUN value
     */
    PB.TDDZBottomType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DDZ_BT_NULL"] = 0;
        values[valuesById[1] = "DDZ_BT_XIAO_KING"] = 1;
        values[valuesById[2] = "DDZ_BT_DA_KING"] = 2;
        values[valuesById[3] = "DDZ_BT_DUIZI"] = 3;
        values[valuesById[4] = "DDZ_BT_TONGHUA"] = 4;
        values[valuesById[5] = "DDZ_BT_SHUNZI"] = 5;
        values[valuesById[6] = "DDZ_BT_SANZHANG"] = 6;
        values[valuesById[7] = "DDZ_BT_TONGHUASHUN"] = 7;
        return values;
    })();

    /**
     * TDDZQiangDiZhu enum.
     * @name PB.TDDZQiangDiZhu
     * @enum {string}
     * @property {number} DDZ_QDZ_JIAODIZHU=1 DDZ_QDZ_JIAODIZHU value
     * @property {number} DDZ_QDZ_BUJIAO=2 DDZ_QDZ_BUJIAO value
     * @property {number} DDZ_QDZ_QIANGDIZHU=4 DDZ_QDZ_QIANGDIZHU value
     * @property {number} DDZ_QDZ_BUQIANG=8 DDZ_QDZ_BUQIANG value
     */
    PB.TDDZQiangDiZhu = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DDZ_QDZ_JIAODIZHU"] = 1;
        values[valuesById[2] = "DDZ_QDZ_BUJIAO"] = 2;
        values[valuesById[4] = "DDZ_QDZ_QIANGDIZHU"] = 4;
        values[valuesById[8] = "DDZ_QDZ_BUQIANG"] = 8;
        return values;
    })();

    /**
     * TDDZJiaoFen enum.
     * @name PB.TDDZJiaoFen
     * @enum {string}
     * @property {number} DDZ_JF_BUJIAO=1 DDZ_JF_BUJIAO value
     * @property {number} DDZ_JF_JIAO_ONE=2 DDZ_JF_JIAO_ONE value
     * @property {number} DDZ_JF_JIAO_TWO=4 DDZ_JF_JIAO_TWO value
     * @property {number} DDZ_JF_JIAO_THREE=8 DDZ_JF_JIAO_THREE value
     */
    PB.TDDZJiaoFen = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DDZ_JF_BUJIAO"] = 1;
        values[valuesById[2] = "DDZ_JF_JIAO_ONE"] = 2;
        values[valuesById[4] = "DDZ_JF_JIAO_TWO"] = 4;
        values[valuesById[8] = "DDZ_JF_JIAO_THREE"] = 8;
        return values;
    })();

    /**
     * TDDZAddTimes enum.
     * @name PB.TDDZAddTimes
     * @enum {string}
     * @property {number} DDZ_AT_NULL=0 DDZ_AT_NULL value
     * @property {number} DDZ_AT_BUJIABIE=1 DDZ_AT_BUJIABIE value
     * @property {number} DDZ_AT_JIABIE=2 DDZ_AT_JIABIE value
     */
    PB.TDDZAddTimes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DDZ_AT_NULL"] = 0;
        values[valuesById[1] = "DDZ_AT_BUJIABIE"] = 1;
        values[valuesById[2] = "DDZ_AT_JIABIE"] = 2;
        return values;
    })();

    /**
     * TDDZMingPaiType enum.
     * @name PB.TDDZMingPaiType
     * @enum {string}
     * @property {number} DDZ_MP_NULL=0 DDZ_MP_NULL value
     * @property {number} DDZ_MP_NORMALSTART=1 DDZ_MP_NORMALSTART value
     * @property {number} DDZ_MP_MINGPAISTART=2 DDZ_MP_MINGPAISTART value
     */
    PB.TDDZMingPaiType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DDZ_MP_NULL"] = 0;
        values[valuesById[1] = "DDZ_MP_NORMALSTART"] = 1;
        values[valuesById[2] = "DDZ_MP_MINGPAISTART"] = 2;
        return values;
    })();

    PB.MsgQiangDiZhu = (function() {

        /**
         * Properties of a MsgQiangDiZhu.
         * @memberof PB
         * @interface IMsgQiangDiZhu
         * @property {number|Long|null} [playid] MsgQiangDiZhu playid
         * @property {number|Long|null} [qingdizhuWiki] MsgQiangDiZhu qingdizhuWiki
         */

        /**
         * Constructs a new MsgQiangDiZhu.
         * @memberof PB
         * @classdesc Represents a MsgQiangDiZhu.
         * @implements IMsgQiangDiZhu
         * @constructor
         * @param {PB.IMsgQiangDiZhu=} [properties] Properties to set
         */
        function MsgQiangDiZhu(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgQiangDiZhu playid.
         * @member {number|Long} playid
         * @memberof PB.MsgQiangDiZhu
         * @instance
         */
        MsgQiangDiZhu.prototype.playid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgQiangDiZhu qingdizhuWiki.
         * @member {number|Long} qingdizhuWiki
         * @memberof PB.MsgQiangDiZhu
         * @instance
         */
        MsgQiangDiZhu.prototype.qingdizhuWiki = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgQiangDiZhu instance using the specified properties.
         * @function create
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {PB.IMsgQiangDiZhu=} [properties] Properties to set
         * @returns {PB.MsgQiangDiZhu} MsgQiangDiZhu instance
         */
        MsgQiangDiZhu.create = function create(properties) {
            return new MsgQiangDiZhu(properties);
        };

        /**
         * Encodes the specified MsgQiangDiZhu message. Does not implicitly {@link PB.MsgQiangDiZhu.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {PB.IMsgQiangDiZhu} message MsgQiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgQiangDiZhu.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playid != null && message.hasOwnProperty("playid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playid);
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.qingdizhuWiki);
            return writer;
        };

        /**
         * Encodes the specified MsgQiangDiZhu message, length delimited. Does not implicitly {@link PB.MsgQiangDiZhu.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {PB.IMsgQiangDiZhu} message MsgQiangDiZhu message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgQiangDiZhu.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgQiangDiZhu message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgQiangDiZhu} MsgQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgQiangDiZhu.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgQiangDiZhu();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playid = reader.uint64();
                    break;
                case 2:
                    message.qingdizhuWiki = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgQiangDiZhu message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgQiangDiZhu} MsgQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgQiangDiZhu.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgQiangDiZhu message.
         * @function verify
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgQiangDiZhu.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (!$util.isInteger(message.playid) && !(message.playid && $util.isInteger(message.playid.low) && $util.isInteger(message.playid.high)))
                    return "playid: integer|Long expected";
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                if (!$util.isInteger(message.qingdizhuWiki) && !(message.qingdizhuWiki && $util.isInteger(message.qingdizhuWiki.low) && $util.isInteger(message.qingdizhuWiki.high)))
                    return "qingdizhuWiki: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgQiangDiZhu message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgQiangDiZhu} MsgQiangDiZhu
         */
        MsgQiangDiZhu.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgQiangDiZhu)
                return object;
            var message = new $root.PB.MsgQiangDiZhu();
            if (object.playid != null)
                if ($util.Long)
                    (message.playid = $util.Long.fromValue(object.playid)).unsigned = true;
                else if (typeof object.playid === "string")
                    message.playid = parseInt(object.playid, 10);
                else if (typeof object.playid === "number")
                    message.playid = object.playid;
                else if (typeof object.playid === "object")
                    message.playid = new $util.LongBits(object.playid.low >>> 0, object.playid.high >>> 0).toNumber(true);
            if (object.qingdizhuWiki != null)
                if ($util.Long)
                    (message.qingdizhuWiki = $util.Long.fromValue(object.qingdizhuWiki)).unsigned = true;
                else if (typeof object.qingdizhuWiki === "string")
                    message.qingdizhuWiki = parseInt(object.qingdizhuWiki, 10);
                else if (typeof object.qingdizhuWiki === "number")
                    message.qingdizhuWiki = object.qingdizhuWiki;
                else if (typeof object.qingdizhuWiki === "object")
                    message.qingdizhuWiki = new $util.LongBits(object.qingdizhuWiki.low >>> 0, object.qingdizhuWiki.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgQiangDiZhu message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgQiangDiZhu
         * @static
         * @param {PB.MsgQiangDiZhu} message MsgQiangDiZhu
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgQiangDiZhu.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.qingdizhuWiki = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.qingdizhuWiki = options.longs === String ? "0" : 0;
            }
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (typeof message.playid === "number")
                    object.playid = options.longs === String ? String(message.playid) : message.playid;
                else
                    object.playid = options.longs === String ? $util.Long.prototype.toString.call(message.playid) : options.longs === Number ? new $util.LongBits(message.playid.low >>> 0, message.playid.high >>> 0).toNumber(true) : message.playid;
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                if (typeof message.qingdizhuWiki === "number")
                    object.qingdizhuWiki = options.longs === String ? String(message.qingdizhuWiki) : message.qingdizhuWiki;
                else
                    object.qingdizhuWiki = options.longs === String ? $util.Long.prototype.toString.call(message.qingdizhuWiki) : options.longs === Number ? new $util.LongBits(message.qingdizhuWiki.low >>> 0, message.qingdizhuWiki.high >>> 0).toNumber(true) : message.qingdizhuWiki;
            return object;
        };

        /**
         * Converts this MsgQiangDiZhu to JSON.
         * @function toJSON
         * @memberof PB.MsgQiangDiZhu
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgQiangDiZhu.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgQiangDiZhu;
    })();

    PB.MsgQiangDiZhuResult = (function() {

        /**
         * Properties of a MsgQiangDiZhuResult.
         * @memberof PB
         * @interface IMsgQiangDiZhuResult
         * @property {number|Long|null} [playid] MsgQiangDiZhuResult playid
         * @property {number|Long|null} [result] MsgQiangDiZhuResult result
         * @property {number|Long|null} [state] MsgQiangDiZhuResult state
         * @property {Array.<PB.IMsgCards>|null} [dizhuCard] MsgQiangDiZhuResult dizhuCard
         * @property {number|Long|null} [CardCount] MsgQiangDiZhuResult CardCount
         * @property {number|Long|null} [multiple] MsgQiangDiZhuResult multiple
         */

        /**
         * Constructs a new MsgQiangDiZhuResult.
         * @memberof PB
         * @classdesc Represents a MsgQiangDiZhuResult.
         * @implements IMsgQiangDiZhuResult
         * @constructor
         * @param {PB.IMsgQiangDiZhuResult=} [properties] Properties to set
         */
        function MsgQiangDiZhuResult(properties) {
            this.dizhuCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgQiangDiZhuResult playid.
         * @member {number|Long} playid
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.playid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgQiangDiZhuResult result.
         * @member {number|Long} result
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.result = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgQiangDiZhuResult state.
         * @member {number|Long} state
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.state = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgQiangDiZhuResult dizhuCard.
         * @member {Array.<PB.IMsgCards>} dizhuCard
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.dizhuCard = $util.emptyArray;

        /**
         * MsgQiangDiZhuResult CardCount.
         * @member {number|Long} CardCount
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.CardCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgQiangDiZhuResult multiple.
         * @member {number|Long} multiple
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         */
        MsgQiangDiZhuResult.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgQiangDiZhuResult instance using the specified properties.
         * @function create
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {PB.IMsgQiangDiZhuResult=} [properties] Properties to set
         * @returns {PB.MsgQiangDiZhuResult} MsgQiangDiZhuResult instance
         */
        MsgQiangDiZhuResult.create = function create(properties) {
            return new MsgQiangDiZhuResult(properties);
        };

        /**
         * Encodes the specified MsgQiangDiZhuResult message. Does not implicitly {@link PB.MsgQiangDiZhuResult.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {PB.IMsgQiangDiZhuResult} message MsgQiangDiZhuResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgQiangDiZhuResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playid != null && message.hasOwnProperty("playid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playid);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.result);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.state);
            if (message.dizhuCard != null && message.dizhuCard.length)
                for (var i = 0; i < message.dizhuCard.length; ++i)
                    $root.PB.MsgCards.encode(message.dizhuCard[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.CardCount != null && message.hasOwnProperty("CardCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.CardCount);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.multiple);
            return writer;
        };

        /**
         * Encodes the specified MsgQiangDiZhuResult message, length delimited. Does not implicitly {@link PB.MsgQiangDiZhuResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {PB.IMsgQiangDiZhuResult} message MsgQiangDiZhuResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgQiangDiZhuResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgQiangDiZhuResult message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgQiangDiZhuResult} MsgQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgQiangDiZhuResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgQiangDiZhuResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playid = reader.uint64();
                    break;
                case 2:
                    message.result = reader.uint64();
                    break;
                case 3:
                    message.state = reader.uint64();
                    break;
                case 4:
                    if (!(message.dizhuCard && message.dizhuCard.length))
                        message.dizhuCard = [];
                    message.dizhuCard.push($root.PB.MsgCards.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.CardCount = reader.uint64();
                    break;
                case 6:
                    message.multiple = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgQiangDiZhuResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgQiangDiZhuResult} MsgQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgQiangDiZhuResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgQiangDiZhuResult message.
         * @function verify
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgQiangDiZhuResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (!$util.isInteger(message.playid) && !(message.playid && $util.isInteger(message.playid.low) && $util.isInteger(message.playid.high)))
                    return "playid: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result) && !(message.result && $util.isInteger(message.result.low) && $util.isInteger(message.result.high)))
                    return "result: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state) && !(message.state && $util.isInteger(message.state.low) && $util.isInteger(message.state.high)))
                    return "state: integer|Long expected";
            if (message.dizhuCard != null && message.hasOwnProperty("dizhuCard")) {
                if (!Array.isArray(message.dizhuCard))
                    return "dizhuCard: array expected";
                for (var i = 0; i < message.dizhuCard.length; ++i) {
                    var error = $root.PB.MsgCards.verify(message.dizhuCard[i]);
                    if (error)
                        return "dizhuCard." + error;
                }
            }
            if (message.CardCount != null && message.hasOwnProperty("CardCount"))
                if (!$util.isInteger(message.CardCount) && !(message.CardCount && $util.isInteger(message.CardCount.low) && $util.isInteger(message.CardCount.high)))
                    return "CardCount: integer|Long expected";
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple) && !(message.multiple && $util.isInteger(message.multiple.low) && $util.isInteger(message.multiple.high)))
                    return "multiple: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgQiangDiZhuResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgQiangDiZhuResult} MsgQiangDiZhuResult
         */
        MsgQiangDiZhuResult.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgQiangDiZhuResult)
                return object;
            var message = new $root.PB.MsgQiangDiZhuResult();
            if (object.playid != null)
                if ($util.Long)
                    (message.playid = $util.Long.fromValue(object.playid)).unsigned = true;
                else if (typeof object.playid === "string")
                    message.playid = parseInt(object.playid, 10);
                else if (typeof object.playid === "number")
                    message.playid = object.playid;
                else if (typeof object.playid === "object")
                    message.playid = new $util.LongBits(object.playid.low >>> 0, object.playid.high >>> 0).toNumber(true);
            if (object.result != null)
                if ($util.Long)
                    (message.result = $util.Long.fromValue(object.result)).unsigned = true;
                else if (typeof object.result === "string")
                    message.result = parseInt(object.result, 10);
                else if (typeof object.result === "number")
                    message.result = object.result;
                else if (typeof object.result === "object")
                    message.result = new $util.LongBits(object.result.low >>> 0, object.result.high >>> 0).toNumber(true);
            if (object.state != null)
                if ($util.Long)
                    (message.state = $util.Long.fromValue(object.state)).unsigned = true;
                else if (typeof object.state === "string")
                    message.state = parseInt(object.state, 10);
                else if (typeof object.state === "number")
                    message.state = object.state;
                else if (typeof object.state === "object")
                    message.state = new $util.LongBits(object.state.low >>> 0, object.state.high >>> 0).toNumber(true);
            if (object.dizhuCard) {
                if (!Array.isArray(object.dizhuCard))
                    throw TypeError(".PB.MsgQiangDiZhuResult.dizhuCard: array expected");
                message.dizhuCard = [];
                for (var i = 0; i < object.dizhuCard.length; ++i) {
                    if (typeof object.dizhuCard[i] !== "object")
                        throw TypeError(".PB.MsgQiangDiZhuResult.dizhuCard: object expected");
                    message.dizhuCard[i] = $root.PB.MsgCards.fromObject(object.dizhuCard[i]);
                }
            }
            if (object.CardCount != null)
                if ($util.Long)
                    (message.CardCount = $util.Long.fromValue(object.CardCount)).unsigned = true;
                else if (typeof object.CardCount === "string")
                    message.CardCount = parseInt(object.CardCount, 10);
                else if (typeof object.CardCount === "number")
                    message.CardCount = object.CardCount;
                else if (typeof object.CardCount === "object")
                    message.CardCount = new $util.LongBits(object.CardCount.low >>> 0, object.CardCount.high >>> 0).toNumber(true);
            if (object.multiple != null)
                if ($util.Long)
                    (message.multiple = $util.Long.fromValue(object.multiple)).unsigned = true;
                else if (typeof object.multiple === "string")
                    message.multiple = parseInt(object.multiple, 10);
                else if (typeof object.multiple === "number")
                    message.multiple = object.multiple;
                else if (typeof object.multiple === "object")
                    message.multiple = new $util.LongBits(object.multiple.low >>> 0, object.multiple.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgQiangDiZhuResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgQiangDiZhuResult
         * @static
         * @param {PB.MsgQiangDiZhuResult} message MsgQiangDiZhuResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgQiangDiZhuResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.dizhuCard = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.result = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.result = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.state = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.state = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.CardCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CardCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.multiple = options.longs === String ? "0" : 0;
            }
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (typeof message.playid === "number")
                    object.playid = options.longs === String ? String(message.playid) : message.playid;
                else
                    object.playid = options.longs === String ? $util.Long.prototype.toString.call(message.playid) : options.longs === Number ? new $util.LongBits(message.playid.low >>> 0, message.playid.high >>> 0).toNumber(true) : message.playid;
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result === "number")
                    object.result = options.longs === String ? String(message.result) : message.result;
                else
                    object.result = options.longs === String ? $util.Long.prototype.toString.call(message.result) : options.longs === Number ? new $util.LongBits(message.result.low >>> 0, message.result.high >>> 0).toNumber(true) : message.result;
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state === "number")
                    object.state = options.longs === String ? String(message.state) : message.state;
                else
                    object.state = options.longs === String ? $util.Long.prototype.toString.call(message.state) : options.longs === Number ? new $util.LongBits(message.state.low >>> 0, message.state.high >>> 0).toNumber(true) : message.state;
            if (message.dizhuCard && message.dizhuCard.length) {
                object.dizhuCard = [];
                for (var j = 0; j < message.dizhuCard.length; ++j)
                    object.dizhuCard[j] = $root.PB.MsgCards.toObject(message.dizhuCard[j], options);
            }
            if (message.CardCount != null && message.hasOwnProperty("CardCount"))
                if (typeof message.CardCount === "number")
                    object.CardCount = options.longs === String ? String(message.CardCount) : message.CardCount;
                else
                    object.CardCount = options.longs === String ? $util.Long.prototype.toString.call(message.CardCount) : options.longs === Number ? new $util.LongBits(message.CardCount.low >>> 0, message.CardCount.high >>> 0).toNumber(true) : message.CardCount;
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (typeof message.multiple === "number")
                    object.multiple = options.longs === String ? String(message.multiple) : message.multiple;
                else
                    object.multiple = options.longs === String ? $util.Long.prototype.toString.call(message.multiple) : options.longs === Number ? new $util.LongBits(message.multiple.low >>> 0, message.multiple.high >>> 0).toNumber(true) : message.multiple;
            return object;
        };

        /**
         * Converts this MsgQiangDiZhuResult to JSON.
         * @function toJSON
         * @memberof PB.MsgQiangDiZhuResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgQiangDiZhuResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgQiangDiZhuResult;
    })();

    PB.MsgBRQiangDiZhuResult = (function() {

        /**
         * Properties of a MsgBRQiangDiZhuResult.
         * @memberof PB
         * @interface IMsgBRQiangDiZhuResult
         * @property {Array.<PB.IMsgQiangDiZhuResult>|null} [playerList] MsgBRQiangDiZhuResult playerList
         * @property {number|Long|null} [multiple] MsgBRQiangDiZhuResult multiple
         * @property {Array.<PB.IMsgDiPaiMutiple>|null} [dipaiMultiList] MsgBRQiangDiZhuResult dipaiMultiList
         */

        /**
         * Constructs a new MsgBRQiangDiZhuResult.
         * @memberof PB
         * @classdesc Represents a MsgBRQiangDiZhuResult.
         * @implements IMsgBRQiangDiZhuResult
         * @constructor
         * @param {PB.IMsgBRQiangDiZhuResult=} [properties] Properties to set
         */
        function MsgBRQiangDiZhuResult(properties) {
            this.playerList = [];
            this.dipaiMultiList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBRQiangDiZhuResult playerList.
         * @member {Array.<PB.IMsgQiangDiZhuResult>} playerList
         * @memberof PB.MsgBRQiangDiZhuResult
         * @instance
         */
        MsgBRQiangDiZhuResult.prototype.playerList = $util.emptyArray;

        /**
         * MsgBRQiangDiZhuResult multiple.
         * @member {number|Long} multiple
         * @memberof PB.MsgBRQiangDiZhuResult
         * @instance
         */
        MsgBRQiangDiZhuResult.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgBRQiangDiZhuResult dipaiMultiList.
         * @member {Array.<PB.IMsgDiPaiMutiple>} dipaiMultiList
         * @memberof PB.MsgBRQiangDiZhuResult
         * @instance
         */
        MsgBRQiangDiZhuResult.prototype.dipaiMultiList = $util.emptyArray;

        /**
         * Creates a new MsgBRQiangDiZhuResult instance using the specified properties.
         * @function create
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {PB.IMsgBRQiangDiZhuResult=} [properties] Properties to set
         * @returns {PB.MsgBRQiangDiZhuResult} MsgBRQiangDiZhuResult instance
         */
        MsgBRQiangDiZhuResult.create = function create(properties) {
            return new MsgBRQiangDiZhuResult(properties);
        };

        /**
         * Encodes the specified MsgBRQiangDiZhuResult message. Does not implicitly {@link PB.MsgBRQiangDiZhuResult.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {PB.IMsgBRQiangDiZhuResult} message MsgBRQiangDiZhuResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBRQiangDiZhuResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.PB.MsgQiangDiZhuResult.encode(message.playerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.multiple);
            if (message.dipaiMultiList != null && message.dipaiMultiList.length)
                for (var i = 0; i < message.dipaiMultiList.length; ++i)
                    $root.PB.MsgDiPaiMutiple.encode(message.dipaiMultiList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgBRQiangDiZhuResult message, length delimited. Does not implicitly {@link PB.MsgBRQiangDiZhuResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {PB.IMsgBRQiangDiZhuResult} message MsgBRQiangDiZhuResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBRQiangDiZhuResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBRQiangDiZhuResult message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgBRQiangDiZhuResult} MsgBRQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBRQiangDiZhuResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgBRQiangDiZhuResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.playerList && message.playerList.length))
                        message.playerList = [];
                    message.playerList.push($root.PB.MsgQiangDiZhuResult.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.multiple = reader.uint64();
                    break;
                case 3:
                    if (!(message.dipaiMultiList && message.dipaiMultiList.length))
                        message.dipaiMultiList = [];
                    message.dipaiMultiList.push($root.PB.MsgDiPaiMutiple.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgBRQiangDiZhuResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgBRQiangDiZhuResult} MsgBRQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBRQiangDiZhuResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBRQiangDiZhuResult message.
         * @function verify
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBRQiangDiZhuResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.PB.MsgQiangDiZhuResult.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple) && !(message.multiple && $util.isInteger(message.multiple.low) && $util.isInteger(message.multiple.high)))
                    return "multiple: integer|Long expected";
            if (message.dipaiMultiList != null && message.hasOwnProperty("dipaiMultiList")) {
                if (!Array.isArray(message.dipaiMultiList))
                    return "dipaiMultiList: array expected";
                for (var i = 0; i < message.dipaiMultiList.length; ++i) {
                    var error = $root.PB.MsgDiPaiMutiple.verify(message.dipaiMultiList[i]);
                    if (error)
                        return "dipaiMultiList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MsgBRQiangDiZhuResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgBRQiangDiZhuResult} MsgBRQiangDiZhuResult
         */
        MsgBRQiangDiZhuResult.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgBRQiangDiZhuResult)
                return object;
            var message = new $root.PB.MsgBRQiangDiZhuResult();
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".PB.MsgBRQiangDiZhuResult.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".PB.MsgBRQiangDiZhuResult.playerList: object expected");
                    message.playerList[i] = $root.PB.MsgQiangDiZhuResult.fromObject(object.playerList[i]);
                }
            }
            if (object.multiple != null)
                if ($util.Long)
                    (message.multiple = $util.Long.fromValue(object.multiple)).unsigned = true;
                else if (typeof object.multiple === "string")
                    message.multiple = parseInt(object.multiple, 10);
                else if (typeof object.multiple === "number")
                    message.multiple = object.multiple;
                else if (typeof object.multiple === "object")
                    message.multiple = new $util.LongBits(object.multiple.low >>> 0, object.multiple.high >>> 0).toNumber(true);
            if (object.dipaiMultiList) {
                if (!Array.isArray(object.dipaiMultiList))
                    throw TypeError(".PB.MsgBRQiangDiZhuResult.dipaiMultiList: array expected");
                message.dipaiMultiList = [];
                for (var i = 0; i < object.dipaiMultiList.length; ++i) {
                    if (typeof object.dipaiMultiList[i] !== "object")
                        throw TypeError(".PB.MsgBRQiangDiZhuResult.dipaiMultiList: object expected");
                    message.dipaiMultiList[i] = $root.PB.MsgDiPaiMutiple.fromObject(object.dipaiMultiList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgBRQiangDiZhuResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgBRQiangDiZhuResult
         * @static
         * @param {PB.MsgBRQiangDiZhuResult} message MsgBRQiangDiZhuResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgBRQiangDiZhuResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.dipaiMultiList = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.multiple = options.longs === String ? "0" : 0;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.PB.MsgQiangDiZhuResult.toObject(message.playerList[j], options);
            }
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (typeof message.multiple === "number")
                    object.multiple = options.longs === String ? String(message.multiple) : message.multiple;
                else
                    object.multiple = options.longs === String ? $util.Long.prototype.toString.call(message.multiple) : options.longs === Number ? new $util.LongBits(message.multiple.low >>> 0, message.multiple.high >>> 0).toNumber(true) : message.multiple;
            if (message.dipaiMultiList && message.dipaiMultiList.length) {
                object.dipaiMultiList = [];
                for (var j = 0; j < message.dipaiMultiList.length; ++j)
                    object.dipaiMultiList[j] = $root.PB.MsgDiPaiMutiple.toObject(message.dipaiMultiList[j], options);
            }
            return object;
        };

        /**
         * Converts this MsgBRQiangDiZhuResult to JSON.
         * @function toJSON
         * @memberof PB.MsgBRQiangDiZhuResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgBRQiangDiZhuResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgBRQiangDiZhuResult;
    })();

    PB.MsgDiPaiMutiple = (function() {

        /**
         * Properties of a MsgDiPaiMutiple.
         * @memberof PB
         * @interface IMsgDiPaiMutiple
         * @property {number|null} [eventId] MsgDiPaiMutiple eventId
         * @property {number|null} [count] MsgDiPaiMutiple count
         */

        /**
         * Constructs a new MsgDiPaiMutiple.
         * @memberof PB
         * @classdesc Represents a MsgDiPaiMutiple.
         * @implements IMsgDiPaiMutiple
         * @constructor
         * @param {PB.IMsgDiPaiMutiple=} [properties] Properties to set
         */
        function MsgDiPaiMutiple(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDiPaiMutiple eventId.
         * @member {number} eventId
         * @memberof PB.MsgDiPaiMutiple
         * @instance
         */
        MsgDiPaiMutiple.prototype.eventId = 0;

        /**
         * MsgDiPaiMutiple count.
         * @member {number} count
         * @memberof PB.MsgDiPaiMutiple
         * @instance
         */
        MsgDiPaiMutiple.prototype.count = 0;

        /**
         * Creates a new MsgDiPaiMutiple instance using the specified properties.
         * @function create
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {PB.IMsgDiPaiMutiple=} [properties] Properties to set
         * @returns {PB.MsgDiPaiMutiple} MsgDiPaiMutiple instance
         */
        MsgDiPaiMutiple.create = function create(properties) {
            return new MsgDiPaiMutiple(properties);
        };

        /**
         * Encodes the specified MsgDiPaiMutiple message. Does not implicitly {@link PB.MsgDiPaiMutiple.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {PB.IMsgDiPaiMutiple} message MsgDiPaiMutiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDiPaiMutiple.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eventId);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified MsgDiPaiMutiple message, length delimited. Does not implicitly {@link PB.MsgDiPaiMutiple.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {PB.IMsgDiPaiMutiple} message MsgDiPaiMutiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDiPaiMutiple.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDiPaiMutiple message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDiPaiMutiple} MsgDiPaiMutiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDiPaiMutiple.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDiPaiMutiple();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDiPaiMutiple message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDiPaiMutiple} MsgDiPaiMutiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDiPaiMutiple.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDiPaiMutiple message.
         * @function verify
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDiPaiMutiple.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isInteger(message.eventId))
                    return "eventId: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a MsgDiPaiMutiple message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDiPaiMutiple} MsgDiPaiMutiple
         */
        MsgDiPaiMutiple.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDiPaiMutiple)
                return object;
            var message = new $root.PB.MsgDiPaiMutiple();
            if (object.eventId != null)
                message.eventId = object.eventId >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgDiPaiMutiple message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDiPaiMutiple
         * @static
         * @param {PB.MsgDiPaiMutiple} message MsgDiPaiMutiple
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDiPaiMutiple.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = 0;
                object.count = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this MsgDiPaiMutiple to JSON.
         * @function toJSON
         * @memberof PB.MsgDiPaiMutiple
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDiPaiMutiple.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDiPaiMutiple;
    })();

    PB.MsgMingPaiResult = (function() {

        /**
         * Properties of a MsgMingPaiResult.
         * @memberof PB
         * @interface IMsgMingPaiResult
         * @property {number|Long|null} [playid] MsgMingPaiResult playid
         * @property {number|Long|null} [result] MsgMingPaiResult result
         * @property {number|Long|null} [state] MsgMingPaiResult state
         * @property {PB.IMsgCards|null} [dizhuCard] MsgMingPaiResult dizhuCard
         * @property {number|Long|null} [multiple] MsgMingPaiResult multiple
         */

        /**
         * Constructs a new MsgMingPaiResult.
         * @memberof PB
         * @classdesc Represents a MsgMingPaiResult.
         * @implements IMsgMingPaiResult
         * @constructor
         * @param {PB.IMsgMingPaiResult=} [properties] Properties to set
         */
        function MsgMingPaiResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgMingPaiResult playid.
         * @member {number|Long} playid
         * @memberof PB.MsgMingPaiResult
         * @instance
         */
        MsgMingPaiResult.prototype.playid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgMingPaiResult result.
         * @member {number|Long} result
         * @memberof PB.MsgMingPaiResult
         * @instance
         */
        MsgMingPaiResult.prototype.result = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgMingPaiResult state.
         * @member {number|Long} state
         * @memberof PB.MsgMingPaiResult
         * @instance
         */
        MsgMingPaiResult.prototype.state = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgMingPaiResult dizhuCard.
         * @member {PB.IMsgCards|null|undefined} dizhuCard
         * @memberof PB.MsgMingPaiResult
         * @instance
         */
        MsgMingPaiResult.prototype.dizhuCard = null;

        /**
         * MsgMingPaiResult multiple.
         * @member {number|Long} multiple
         * @memberof PB.MsgMingPaiResult
         * @instance
         */
        MsgMingPaiResult.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgMingPaiResult instance using the specified properties.
         * @function create
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {PB.IMsgMingPaiResult=} [properties] Properties to set
         * @returns {PB.MsgMingPaiResult} MsgMingPaiResult instance
         */
        MsgMingPaiResult.create = function create(properties) {
            return new MsgMingPaiResult(properties);
        };

        /**
         * Encodes the specified MsgMingPaiResult message. Does not implicitly {@link PB.MsgMingPaiResult.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {PB.IMsgMingPaiResult} message MsgMingPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgMingPaiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playid != null && message.hasOwnProperty("playid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playid);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.result);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.state);
            if (message.dizhuCard != null && message.hasOwnProperty("dizhuCard"))
                $root.PB.MsgCards.encode(message.dizhuCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.multiple);
            return writer;
        };

        /**
         * Encodes the specified MsgMingPaiResult message, length delimited. Does not implicitly {@link PB.MsgMingPaiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {PB.IMsgMingPaiResult} message MsgMingPaiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgMingPaiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgMingPaiResult message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgMingPaiResult} MsgMingPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgMingPaiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgMingPaiResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playid = reader.uint64();
                    break;
                case 2:
                    message.result = reader.uint64();
                    break;
                case 3:
                    message.state = reader.uint64();
                    break;
                case 4:
                    message.dizhuCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multiple = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgMingPaiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgMingPaiResult} MsgMingPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgMingPaiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgMingPaiResult message.
         * @function verify
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgMingPaiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (!$util.isInteger(message.playid) && !(message.playid && $util.isInteger(message.playid.low) && $util.isInteger(message.playid.high)))
                    return "playid: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result) && !(message.result && $util.isInteger(message.result.low) && $util.isInteger(message.result.high)))
                    return "result: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state) && !(message.state && $util.isInteger(message.state.low) && $util.isInteger(message.state.high)))
                    return "state: integer|Long expected";
            if (message.dizhuCard != null && message.hasOwnProperty("dizhuCard")) {
                var error = $root.PB.MsgCards.verify(message.dizhuCard);
                if (error)
                    return "dizhuCard." + error;
            }
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple) && !(message.multiple && $util.isInteger(message.multiple.low) && $util.isInteger(message.multiple.high)))
                    return "multiple: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgMingPaiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgMingPaiResult} MsgMingPaiResult
         */
        MsgMingPaiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgMingPaiResult)
                return object;
            var message = new $root.PB.MsgMingPaiResult();
            if (object.playid != null)
                if ($util.Long)
                    (message.playid = $util.Long.fromValue(object.playid)).unsigned = true;
                else if (typeof object.playid === "string")
                    message.playid = parseInt(object.playid, 10);
                else if (typeof object.playid === "number")
                    message.playid = object.playid;
                else if (typeof object.playid === "object")
                    message.playid = new $util.LongBits(object.playid.low >>> 0, object.playid.high >>> 0).toNumber(true);
            if (object.result != null)
                if ($util.Long)
                    (message.result = $util.Long.fromValue(object.result)).unsigned = true;
                else if (typeof object.result === "string")
                    message.result = parseInt(object.result, 10);
                else if (typeof object.result === "number")
                    message.result = object.result;
                else if (typeof object.result === "object")
                    message.result = new $util.LongBits(object.result.low >>> 0, object.result.high >>> 0).toNumber(true);
            if (object.state != null)
                if ($util.Long)
                    (message.state = $util.Long.fromValue(object.state)).unsigned = true;
                else if (typeof object.state === "string")
                    message.state = parseInt(object.state, 10);
                else if (typeof object.state === "number")
                    message.state = object.state;
                else if (typeof object.state === "object")
                    message.state = new $util.LongBits(object.state.low >>> 0, object.state.high >>> 0).toNumber(true);
            if (object.dizhuCard != null) {
                if (typeof object.dizhuCard !== "object")
                    throw TypeError(".PB.MsgMingPaiResult.dizhuCard: object expected");
                message.dizhuCard = $root.PB.MsgCards.fromObject(object.dizhuCard);
            }
            if (object.multiple != null)
                if ($util.Long)
                    (message.multiple = $util.Long.fromValue(object.multiple)).unsigned = true;
                else if (typeof object.multiple === "string")
                    message.multiple = parseInt(object.multiple, 10);
                else if (typeof object.multiple === "number")
                    message.multiple = object.multiple;
                else if (typeof object.multiple === "object")
                    message.multiple = new $util.LongBits(object.multiple.low >>> 0, object.multiple.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgMingPaiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgMingPaiResult
         * @static
         * @param {PB.MsgMingPaiResult} message MsgMingPaiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgMingPaiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.result = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.result = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.state = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.state = options.longs === String ? "0" : 0;
                object.dizhuCard = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.multiple = options.longs === String ? "0" : 0;
            }
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (typeof message.playid === "number")
                    object.playid = options.longs === String ? String(message.playid) : message.playid;
                else
                    object.playid = options.longs === String ? $util.Long.prototype.toString.call(message.playid) : options.longs === Number ? new $util.LongBits(message.playid.low >>> 0, message.playid.high >>> 0).toNumber(true) : message.playid;
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result === "number")
                    object.result = options.longs === String ? String(message.result) : message.result;
                else
                    object.result = options.longs === String ? $util.Long.prototype.toString.call(message.result) : options.longs === Number ? new $util.LongBits(message.result.low >>> 0, message.result.high >>> 0).toNumber(true) : message.result;
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state === "number")
                    object.state = options.longs === String ? String(message.state) : message.state;
                else
                    object.state = options.longs === String ? $util.Long.prototype.toString.call(message.state) : options.longs === Number ? new $util.LongBits(message.state.low >>> 0, message.state.high >>> 0).toNumber(true) : message.state;
            if (message.dizhuCard != null && message.hasOwnProperty("dizhuCard"))
                object.dizhuCard = $root.PB.MsgCards.toObject(message.dizhuCard, options);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (typeof message.multiple === "number")
                    object.multiple = options.longs === String ? String(message.multiple) : message.multiple;
                else
                    object.multiple = options.longs === String ? $util.Long.prototype.toString.call(message.multiple) : options.longs === Number ? new $util.LongBits(message.multiple.low >>> 0, message.multiple.high >>> 0).toNumber(true) : message.multiple;
            return object;
        };

        /**
         * Converts this MsgMingPaiResult to JSON.
         * @function toJSON
         * @memberof PB.MsgMingPaiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgMingPaiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgMingPaiResult;
    })();

    PB.MsgJiaBeiResult = (function() {

        /**
         * Properties of a MsgJiaBeiResult.
         * @memberof PB
         * @interface IMsgJiaBeiResult
         * @property {number|Long|null} [playid] MsgJiaBeiResult playid
         * @property {number|Long|null} [result] MsgJiaBeiResult result
         * @property {number|Long|null} [state] MsgJiaBeiResult state
         */

        /**
         * Constructs a new MsgJiaBeiResult.
         * @memberof PB
         * @classdesc Represents a MsgJiaBeiResult.
         * @implements IMsgJiaBeiResult
         * @constructor
         * @param {PB.IMsgJiaBeiResult=} [properties] Properties to set
         */
        function MsgJiaBeiResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgJiaBeiResult playid.
         * @member {number|Long} playid
         * @memberof PB.MsgJiaBeiResult
         * @instance
         */
        MsgJiaBeiResult.prototype.playid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgJiaBeiResult result.
         * @member {number|Long} result
         * @memberof PB.MsgJiaBeiResult
         * @instance
         */
        MsgJiaBeiResult.prototype.result = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgJiaBeiResult state.
         * @member {number|Long} state
         * @memberof PB.MsgJiaBeiResult
         * @instance
         */
        MsgJiaBeiResult.prototype.state = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new MsgJiaBeiResult instance using the specified properties.
         * @function create
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {PB.IMsgJiaBeiResult=} [properties] Properties to set
         * @returns {PB.MsgJiaBeiResult} MsgJiaBeiResult instance
         */
        MsgJiaBeiResult.create = function create(properties) {
            return new MsgJiaBeiResult(properties);
        };

        /**
         * Encodes the specified MsgJiaBeiResult message. Does not implicitly {@link PB.MsgJiaBeiResult.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {PB.IMsgJiaBeiResult} message MsgJiaBeiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgJiaBeiResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playid != null && message.hasOwnProperty("playid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.playid);
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.result);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.state);
            return writer;
        };

        /**
         * Encodes the specified MsgJiaBeiResult message, length delimited. Does not implicitly {@link PB.MsgJiaBeiResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {PB.IMsgJiaBeiResult} message MsgJiaBeiResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgJiaBeiResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgJiaBeiResult message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgJiaBeiResult} MsgJiaBeiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgJiaBeiResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgJiaBeiResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playid = reader.uint64();
                    break;
                case 2:
                    message.result = reader.uint64();
                    break;
                case 3:
                    message.state = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgJiaBeiResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgJiaBeiResult} MsgJiaBeiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgJiaBeiResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgJiaBeiResult message.
         * @function verify
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgJiaBeiResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (!$util.isInteger(message.playid) && !(message.playid && $util.isInteger(message.playid.low) && $util.isInteger(message.playid.high)))
                    return "playid: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result) && !(message.result && $util.isInteger(message.result.low) && $util.isInteger(message.result.high)))
                    return "result: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state) && !(message.state && $util.isInteger(message.state.low) && $util.isInteger(message.state.high)))
                    return "state: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgJiaBeiResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgJiaBeiResult} MsgJiaBeiResult
         */
        MsgJiaBeiResult.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgJiaBeiResult)
                return object;
            var message = new $root.PB.MsgJiaBeiResult();
            if (object.playid != null)
                if ($util.Long)
                    (message.playid = $util.Long.fromValue(object.playid)).unsigned = true;
                else if (typeof object.playid === "string")
                    message.playid = parseInt(object.playid, 10);
                else if (typeof object.playid === "number")
                    message.playid = object.playid;
                else if (typeof object.playid === "object")
                    message.playid = new $util.LongBits(object.playid.low >>> 0, object.playid.high >>> 0).toNumber(true);
            if (object.result != null)
                if ($util.Long)
                    (message.result = $util.Long.fromValue(object.result)).unsigned = true;
                else if (typeof object.result === "string")
                    message.result = parseInt(object.result, 10);
                else if (typeof object.result === "number")
                    message.result = object.result;
                else if (typeof object.result === "object")
                    message.result = new $util.LongBits(object.result.low >>> 0, object.result.high >>> 0).toNumber(true);
            if (object.state != null)
                if ($util.Long)
                    (message.state = $util.Long.fromValue(object.state)).unsigned = true;
                else if (typeof object.state === "string")
                    message.state = parseInt(object.state, 10);
                else if (typeof object.state === "number")
                    message.state = object.state;
                else if (typeof object.state === "object")
                    message.state = new $util.LongBits(object.state.low >>> 0, object.state.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a MsgJiaBeiResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgJiaBeiResult
         * @static
         * @param {PB.MsgJiaBeiResult} message MsgJiaBeiResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgJiaBeiResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.playid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.playid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.result = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.result = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.state = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.state = options.longs === String ? "0" : 0;
            }
            if (message.playid != null && message.hasOwnProperty("playid"))
                if (typeof message.playid === "number")
                    object.playid = options.longs === String ? String(message.playid) : message.playid;
                else
                    object.playid = options.longs === String ? $util.Long.prototype.toString.call(message.playid) : options.longs === Number ? new $util.LongBits(message.playid.low >>> 0, message.playid.high >>> 0).toNumber(true) : message.playid;
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result === "number")
                    object.result = options.longs === String ? String(message.result) : message.result;
                else
                    object.result = options.longs === String ? $util.Long.prototype.toString.call(message.result) : options.longs === Number ? new $util.LongBits(message.result.low >>> 0, message.result.high >>> 0).toNumber(true) : message.result;
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state === "number")
                    object.state = options.longs === String ? String(message.state) : message.state;
                else
                    object.state = options.longs === String ? $util.Long.prototype.toString.call(message.state) : options.longs === Number ? new $util.LongBits(message.state.low >>> 0, message.state.high >>> 0).toNumber(true) : message.state;
            return object;
        };

        /**
         * Converts this MsgJiaBeiResult to JSON.
         * @function toJSON
         * @memberof PB.MsgJiaBeiResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgJiaBeiResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgJiaBeiResult;
    })();

    PB.MsgDDZPlayer = (function() {

        /**
         * Properties of a MsgDDZPlayer.
         * @memberof PB
         * @interface IMsgDDZPlayer
         * @property {PB.IMsgPlayerInfo|null} [playerBase] MsgDDZPlayer playerBase
         * @property {number|null} [state] MsgDDZPlayer state
         * @property {number|null} [handCount] MsgDDZPlayer handCount
         * @property {PB.IMsgCards|null} [cardList] MsgDDZPlayer cardList
         * @property {number|null} [seats] MsgDDZPlayer seats
         * @property {number|Long|null} [score] MsgDDZPlayer score
         * @property {number|Long|null} [showDownScore] MsgDDZPlayer showDownScore
         * @property {number|null} [qingdizhuWiki] MsgDDZPlayer qingdizhuWiki
         * @property {number|null} [qingdizhuValue] MsgDDZPlayer qingdizhuValue
         * @property {number|null} [multiple] MsgDDZPlayer multiple
         * @property {number|null} [integralNum] MsgDDZPlayer integralNum
         * @property {PB.IMsgCards|null} [outCard] MsgDDZPlayer outCard
         * @property {number|null} [outType] MsgDDZPlayer outType
         */

        /**
         * Constructs a new MsgDDZPlayer.
         * @memberof PB
         * @classdesc Represents a MsgDDZPlayer.
         * @implements IMsgDDZPlayer
         * @constructor
         * @param {PB.IMsgDDZPlayer=} [properties] Properties to set
         */
        function MsgDDZPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZPlayer playerBase.
         * @member {PB.IMsgPlayerInfo|null|undefined} playerBase
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.playerBase = null;

        /**
         * MsgDDZPlayer state.
         * @member {number} state
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.state = 0;

        /**
         * MsgDDZPlayer handCount.
         * @member {number} handCount
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.handCount = 0;

        /**
         * MsgDDZPlayer cardList.
         * @member {PB.IMsgCards|null|undefined} cardList
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.cardList = null;

        /**
         * MsgDDZPlayer seats.
         * @member {number} seats
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.seats = 0;

        /**
         * MsgDDZPlayer score.
         * @member {number|Long} score
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgDDZPlayer showDownScore.
         * @member {number|Long} showDownScore
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.showDownScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgDDZPlayer qingdizhuWiki.
         * @member {number} qingdizhuWiki
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.qingdizhuWiki = 0;

        /**
         * MsgDDZPlayer qingdizhuValue.
         * @member {number} qingdizhuValue
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.qingdizhuValue = 0;

        /**
         * MsgDDZPlayer multiple.
         * @member {number} multiple
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.multiple = 0;

        /**
         * MsgDDZPlayer integralNum.
         * @member {number} integralNum
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.integralNum = 0;

        /**
         * MsgDDZPlayer outCard.
         * @member {PB.IMsgCards|null|undefined} outCard
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.outCard = null;

        /**
         * MsgDDZPlayer outType.
         * @member {number} outType
         * @memberof PB.MsgDDZPlayer
         * @instance
         */
        MsgDDZPlayer.prototype.outType = 0;

        /**
         * Creates a new MsgDDZPlayer instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {PB.IMsgDDZPlayer=} [properties] Properties to set
         * @returns {PB.MsgDDZPlayer} MsgDDZPlayer instance
         */
        MsgDDZPlayer.create = function create(properties) {
            return new MsgDDZPlayer(properties);
        };

        /**
         * Encodes the specified MsgDDZPlayer message. Does not implicitly {@link PB.MsgDDZPlayer.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {PB.IMsgDDZPlayer} message MsgDDZPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerBase != null && message.hasOwnProperty("playerBase"))
                $root.PB.MsgPlayerInfo.encode(message.playerBase, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.state);
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.handCount);
            if (message.cardList != null && message.hasOwnProperty("cardList"))
                $root.PB.MsgCards.encode(message.cardList, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.seats != null && message.hasOwnProperty("seats"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.seats);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.score);
            if (message.showDownScore != null && message.hasOwnProperty("showDownScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.showDownScore);
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.qingdizhuWiki);
            if (message.qingdizhuValue != null && message.hasOwnProperty("qingdizhuValue"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.qingdizhuValue);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.multiple);
            if (message.integralNum != null && message.hasOwnProperty("integralNum"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.integralNum);
            if (message.outCard != null && message.hasOwnProperty("outCard"))
                $root.PB.MsgCards.encode(message.outCard, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.outType != null && message.hasOwnProperty("outType"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.outType);
            return writer;
        };

        /**
         * Encodes the specified MsgDDZPlayer message, length delimited. Does not implicitly {@link PB.MsgDDZPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {PB.IMsgDDZPlayer} message MsgDDZPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZPlayer} MsgDDZPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerBase = $root.PB.MsgPlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = reader.uint32();
                    break;
                case 3:
                    message.handCount = reader.uint32();
                    break;
                case 4:
                    message.cardList = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.seats = reader.uint32();
                    break;
                case 6:
                    message.score = reader.int64();
                    break;
                case 7:
                    message.showDownScore = reader.int64();
                    break;
                case 8:
                    message.qingdizhuWiki = reader.uint32();
                    break;
                case 9:
                    message.qingdizhuValue = reader.uint32();
                    break;
                case 10:
                    message.multiple = reader.uint32();
                    break;
                case 11:
                    message.integralNum = reader.uint32();
                    break;
                case 12:
                    message.outCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.outType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZPlayer} MsgDDZPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZPlayer message.
         * @function verify
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerBase != null && message.hasOwnProperty("playerBase")) {
                var error = $root.PB.MsgPlayerInfo.verify(message.playerBase);
                if (error)
                    return "playerBase." + error;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                if (!$util.isInteger(message.handCount))
                    return "handCount: integer expected";
            if (message.cardList != null && message.hasOwnProperty("cardList")) {
                var error = $root.PB.MsgCards.verify(message.cardList);
                if (error)
                    return "cardList." + error;
            }
            if (message.seats != null && message.hasOwnProperty("seats"))
                if (!$util.isInteger(message.seats))
                    return "seats: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                    return "score: integer|Long expected";
            if (message.showDownScore != null && message.hasOwnProperty("showDownScore"))
                if (!$util.isInteger(message.showDownScore) && !(message.showDownScore && $util.isInteger(message.showDownScore.low) && $util.isInteger(message.showDownScore.high)))
                    return "showDownScore: integer|Long expected";
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                if (!$util.isInteger(message.qingdizhuWiki))
                    return "qingdizhuWiki: integer expected";
            if (message.qingdizhuValue != null && message.hasOwnProperty("qingdizhuValue"))
                if (!$util.isInteger(message.qingdizhuValue))
                    return "qingdizhuValue: integer expected";
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple))
                    return "multiple: integer expected";
            if (message.integralNum != null && message.hasOwnProperty("integralNum"))
                if (!$util.isInteger(message.integralNum))
                    return "integralNum: integer expected";
            if (message.outCard != null && message.hasOwnProperty("outCard")) {
                var error = $root.PB.MsgCards.verify(message.outCard);
                if (error)
                    return "outCard." + error;
            }
            if (message.outType != null && message.hasOwnProperty("outType"))
                if (!$util.isInteger(message.outType))
                    return "outType: integer expected";
            return null;
        };

        /**
         * Creates a MsgDDZPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZPlayer} MsgDDZPlayer
         */
        MsgDDZPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZPlayer)
                return object;
            var message = new $root.PB.MsgDDZPlayer();
            if (object.playerBase != null) {
                if (typeof object.playerBase !== "object")
                    throw TypeError(".PB.MsgDDZPlayer.playerBase: object expected");
                message.playerBase = $root.PB.MsgPlayerInfo.fromObject(object.playerBase);
            }
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.handCount != null)
                message.handCount = object.handCount >>> 0;
            if (object.cardList != null) {
                if (typeof object.cardList !== "object")
                    throw TypeError(".PB.MsgDDZPlayer.cardList: object expected");
                message.cardList = $root.PB.MsgCards.fromObject(object.cardList);
            }
            if (object.seats != null)
                message.seats = object.seats >>> 0;
            if (object.score != null)
                if ($util.Long)
                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                else if (typeof object.score === "string")
                    message.score = parseInt(object.score, 10);
                else if (typeof object.score === "number")
                    message.score = object.score;
                else if (typeof object.score === "object")
                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
            if (object.showDownScore != null)
                if ($util.Long)
                    (message.showDownScore = $util.Long.fromValue(object.showDownScore)).unsigned = false;
                else if (typeof object.showDownScore === "string")
                    message.showDownScore = parseInt(object.showDownScore, 10);
                else if (typeof object.showDownScore === "number")
                    message.showDownScore = object.showDownScore;
                else if (typeof object.showDownScore === "object")
                    message.showDownScore = new $util.LongBits(object.showDownScore.low >>> 0, object.showDownScore.high >>> 0).toNumber();
            if (object.qingdizhuWiki != null)
                message.qingdizhuWiki = object.qingdizhuWiki >>> 0;
            if (object.qingdizhuValue != null)
                message.qingdizhuValue = object.qingdizhuValue >>> 0;
            if (object.multiple != null)
                message.multiple = object.multiple >>> 0;
            if (object.integralNum != null)
                message.integralNum = object.integralNum >>> 0;
            if (object.outCard != null) {
                if (typeof object.outCard !== "object")
                    throw TypeError(".PB.MsgDDZPlayer.outCard: object expected");
                message.outCard = $root.PB.MsgCards.fromObject(object.outCard);
            }
            if (object.outType != null)
                message.outType = object.outType >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZPlayer
         * @static
         * @param {PB.MsgDDZPlayer} message MsgDDZPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerBase = null;
                object.state = 0;
                object.handCount = 0;
                object.cardList = null;
                object.seats = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.score = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.showDownScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.showDownScore = options.longs === String ? "0" : 0;
                object.qingdizhuWiki = 0;
                object.qingdizhuValue = 0;
                object.multiple = 0;
                object.integralNum = 0;
                object.outCard = null;
                object.outType = 0;
            }
            if (message.playerBase != null && message.hasOwnProperty("playerBase"))
                object.playerBase = $root.PB.MsgPlayerInfo.toObject(message.playerBase, options);
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                object.handCount = message.handCount;
            if (message.cardList != null && message.hasOwnProperty("cardList"))
                object.cardList = $root.PB.MsgCards.toObject(message.cardList, options);
            if (message.seats != null && message.hasOwnProperty("seats"))
                object.seats = message.seats;
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score === "number")
                    object.score = options.longs === String ? String(message.score) : message.score;
                else
                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
            if (message.showDownScore != null && message.hasOwnProperty("showDownScore"))
                if (typeof message.showDownScore === "number")
                    object.showDownScore = options.longs === String ? String(message.showDownScore) : message.showDownScore;
                else
                    object.showDownScore = options.longs === String ? $util.Long.prototype.toString.call(message.showDownScore) : options.longs === Number ? new $util.LongBits(message.showDownScore.low >>> 0, message.showDownScore.high >>> 0).toNumber() : message.showDownScore;
            if (message.qingdizhuWiki != null && message.hasOwnProperty("qingdizhuWiki"))
                object.qingdizhuWiki = message.qingdizhuWiki;
            if (message.qingdizhuValue != null && message.hasOwnProperty("qingdizhuValue"))
                object.qingdizhuValue = message.qingdizhuValue;
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                object.multiple = message.multiple;
            if (message.integralNum != null && message.hasOwnProperty("integralNum"))
                object.integralNum = message.integralNum;
            if (message.outCard != null && message.hasOwnProperty("outCard"))
                object.outCard = $root.PB.MsgCards.toObject(message.outCard, options);
            if (message.outType != null && message.hasOwnProperty("outType"))
                object.outType = message.outType;
            return object;
        };

        /**
         * Converts this MsgDDZPlayer to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZPlayer;
    })();

    PB.MsgDDZActon = (function() {

        /**
         * Properties of a MsgDDZActon.
         * @memberof PB
         * @interface IMsgDDZActon
         * @property {number|Long|null} [newActionid] MsgDDZActon newActionid
         * @property {number|Long|null} [oldActionid] MsgDDZActon oldActionid
         * @property {PB.IMsgCards|null} [lastOutCard] MsgDDZActon lastOutCard
         * @property {number|null} [lastOutType] MsgDDZActon lastOutType
         * @property {PB.TDDZPlayerWik|null} [wik] MsgDDZActon wik
         * @property {Array.<PB.IMsgDDZPlayer>|null} [playerList] MsgDDZActon playerList
         */

        /**
         * Constructs a new MsgDDZActon.
         * @memberof PB
         * @classdesc Represents a MsgDDZActon.
         * @implements IMsgDDZActon
         * @constructor
         * @param {PB.IMsgDDZActon=} [properties] Properties to set
         */
        function MsgDDZActon(properties) {
            this.playerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZActon newActionid.
         * @member {number|Long} newActionid
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.newActionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZActon oldActionid.
         * @member {number|Long} oldActionid
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.oldActionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZActon lastOutCard.
         * @member {PB.IMsgCards|null|undefined} lastOutCard
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.lastOutCard = null;

        /**
         * MsgDDZActon lastOutType.
         * @member {number} lastOutType
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.lastOutType = 0;

        /**
         * MsgDDZActon wik.
         * @member {PB.TDDZPlayerWik} wik
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.wik = 1;

        /**
         * MsgDDZActon playerList.
         * @member {Array.<PB.IMsgDDZPlayer>} playerList
         * @memberof PB.MsgDDZActon
         * @instance
         */
        MsgDDZActon.prototype.playerList = $util.emptyArray;

        /**
         * Creates a new MsgDDZActon instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZActon
         * @static
         * @param {PB.IMsgDDZActon=} [properties] Properties to set
         * @returns {PB.MsgDDZActon} MsgDDZActon instance
         */
        MsgDDZActon.create = function create(properties) {
            return new MsgDDZActon(properties);
        };

        /**
         * Encodes the specified MsgDDZActon message. Does not implicitly {@link PB.MsgDDZActon.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZActon
         * @static
         * @param {PB.IMsgDDZActon} message MsgDDZActon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZActon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newActionid != null && message.hasOwnProperty("newActionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.newActionid);
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.oldActionid);
            if (message.lastOutCard != null && message.hasOwnProperty("lastOutCard"))
                $root.PB.MsgCards.encode(message.lastOutCard, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.lastOutType != null && message.hasOwnProperty("lastOutType"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.lastOutType);
            if (message.wik != null && message.hasOwnProperty("wik"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wik);
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.PB.MsgDDZPlayer.encode(message.playerList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgDDZActon message, length delimited. Does not implicitly {@link PB.MsgDDZActon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZActon
         * @static
         * @param {PB.IMsgDDZActon} message MsgDDZActon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZActon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZActon message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZActon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZActon} MsgDDZActon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZActon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZActon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.newActionid = reader.uint64();
                    break;
                case 2:
                    message.oldActionid = reader.uint64();
                    break;
                case 3:
                    message.lastOutCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastOutType = reader.uint32();
                    break;
                case 5:
                    message.wik = reader.int32();
                    break;
                case 6:
                    if (!(message.playerList && message.playerList.length))
                        message.playerList = [];
                    message.playerList.push($root.PB.MsgDDZPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZActon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZActon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZActon} MsgDDZActon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZActon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZActon message.
         * @function verify
         * @memberof PB.MsgDDZActon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZActon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.newActionid != null && message.hasOwnProperty("newActionid"))
                if (!$util.isInteger(message.newActionid) && !(message.newActionid && $util.isInteger(message.newActionid.low) && $util.isInteger(message.newActionid.high)))
                    return "newActionid: integer|Long expected";
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                if (!$util.isInteger(message.oldActionid) && !(message.oldActionid && $util.isInteger(message.oldActionid.low) && $util.isInteger(message.oldActionid.high)))
                    return "oldActionid: integer|Long expected";
            if (message.lastOutCard != null && message.hasOwnProperty("lastOutCard")) {
                var error = $root.PB.MsgCards.verify(message.lastOutCard);
                if (error)
                    return "lastOutCard." + error;
            }
            if (message.lastOutType != null && message.hasOwnProperty("lastOutType"))
                if (!$util.isInteger(message.lastOutType))
                    return "lastOutType: integer expected";
            if (message.wik != null && message.hasOwnProperty("wik"))
                switch (message.wik) {
                default:
                    return "wik: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.PB.MsgDDZPlayer.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MsgDDZActon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZActon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZActon} MsgDDZActon
         */
        MsgDDZActon.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZActon)
                return object;
            var message = new $root.PB.MsgDDZActon();
            if (object.newActionid != null)
                if ($util.Long)
                    (message.newActionid = $util.Long.fromValue(object.newActionid)).unsigned = true;
                else if (typeof object.newActionid === "string")
                    message.newActionid = parseInt(object.newActionid, 10);
                else if (typeof object.newActionid === "number")
                    message.newActionid = object.newActionid;
                else if (typeof object.newActionid === "object")
                    message.newActionid = new $util.LongBits(object.newActionid.low >>> 0, object.newActionid.high >>> 0).toNumber(true);
            if (object.oldActionid != null)
                if ($util.Long)
                    (message.oldActionid = $util.Long.fromValue(object.oldActionid)).unsigned = true;
                else if (typeof object.oldActionid === "string")
                    message.oldActionid = parseInt(object.oldActionid, 10);
                else if (typeof object.oldActionid === "number")
                    message.oldActionid = object.oldActionid;
                else if (typeof object.oldActionid === "object")
                    message.oldActionid = new $util.LongBits(object.oldActionid.low >>> 0, object.oldActionid.high >>> 0).toNumber(true);
            if (object.lastOutCard != null) {
                if (typeof object.lastOutCard !== "object")
                    throw TypeError(".PB.MsgDDZActon.lastOutCard: object expected");
                message.lastOutCard = $root.PB.MsgCards.fromObject(object.lastOutCard);
            }
            if (object.lastOutType != null)
                message.lastOutType = object.lastOutType >>> 0;
            switch (object.wik) {
            case "ASK_DDZ_NULL":
            case 1:
                message.wik = 1;
                break;
            case "ASK_DDZ_TISHI":
            case 2:
                message.wik = 2;
                break;
            case "ASK_DDZ_BUCHU":
            case 3:
                message.wik = 3;
                break;
            case "ASK_DDZ_CHUPAI":
            case 4:
                message.wik = 4;
                break;
            case "ASK_DDZ_DIZHU_MINGPAI":
            case 5:
                message.wik = 5;
                break;
            }
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".PB.MsgDDZActon.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".PB.MsgDDZActon.playerList: object expected");
                    message.playerList[i] = $root.PB.MsgDDZPlayer.fromObject(object.playerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZActon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZActon
         * @static
         * @param {PB.MsgDDZActon} message MsgDDZActon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZActon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.playerList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.newActionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.newActionid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.oldActionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.oldActionid = options.longs === String ? "0" : 0;
                object.lastOutCard = null;
                object.lastOutType = 0;
                object.wik = options.enums === String ? "ASK_DDZ_NULL" : 1;
            }
            if (message.newActionid != null && message.hasOwnProperty("newActionid"))
                if (typeof message.newActionid === "number")
                    object.newActionid = options.longs === String ? String(message.newActionid) : message.newActionid;
                else
                    object.newActionid = options.longs === String ? $util.Long.prototype.toString.call(message.newActionid) : options.longs === Number ? new $util.LongBits(message.newActionid.low >>> 0, message.newActionid.high >>> 0).toNumber(true) : message.newActionid;
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                if (typeof message.oldActionid === "number")
                    object.oldActionid = options.longs === String ? String(message.oldActionid) : message.oldActionid;
                else
                    object.oldActionid = options.longs === String ? $util.Long.prototype.toString.call(message.oldActionid) : options.longs === Number ? new $util.LongBits(message.oldActionid.low >>> 0, message.oldActionid.high >>> 0).toNumber(true) : message.oldActionid;
            if (message.lastOutCard != null && message.hasOwnProperty("lastOutCard"))
                object.lastOutCard = $root.PB.MsgCards.toObject(message.lastOutCard, options);
            if (message.lastOutType != null && message.hasOwnProperty("lastOutType"))
                object.lastOutType = message.lastOutType;
            if (message.wik != null && message.hasOwnProperty("wik"))
                object.wik = options.enums === String ? $root.PB.TDDZPlayerWik[message.wik] : message.wik;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.PB.MsgDDZPlayer.toObject(message.playerList[j], options);
            }
            return object;
        };

        /**
         * Converts this MsgDDZActon to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZActon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZActon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZActon;
    })();

    PB.MsgDDZUserOutCard = (function() {

        /**
         * Properties of a MsgDDZUserOutCard.
         * @memberof PB
         * @interface IMsgDDZUserOutCard
         * @property {number|Long|null} [oldActionid] MsgDDZUserOutCard oldActionid
         * @property {number|null} [outType] MsgDDZUserOutCard outType
         * @property {number|null} [handCount] MsgDDZUserOutCard handCount
         * @property {PB.IMsgCards|null} [outCard] MsgDDZUserOutCard outCard
         * @property {number|Long|null} [multiple] MsgDDZUserOutCard multiple
         * @property {PB.IMsgCards|null} [handCard] MsgDDZUserOutCard handCard
         */

        /**
         * Constructs a new MsgDDZUserOutCard.
         * @memberof PB
         * @classdesc Represents a MsgDDZUserOutCard.
         * @implements IMsgDDZUserOutCard
         * @constructor
         * @param {PB.IMsgDDZUserOutCard=} [properties] Properties to set
         */
        function MsgDDZUserOutCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZUserOutCard oldActionid.
         * @member {number|Long} oldActionid
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.oldActionid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZUserOutCard outType.
         * @member {number} outType
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.outType = 0;

        /**
         * MsgDDZUserOutCard handCount.
         * @member {number} handCount
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.handCount = 0;

        /**
         * MsgDDZUserOutCard outCard.
         * @member {PB.IMsgCards|null|undefined} outCard
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.outCard = null;

        /**
         * MsgDDZUserOutCard multiple.
         * @member {number|Long} multiple
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZUserOutCard handCard.
         * @member {PB.IMsgCards|null|undefined} handCard
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         */
        MsgDDZUserOutCard.prototype.handCard = null;

        /**
         * Creates a new MsgDDZUserOutCard instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {PB.IMsgDDZUserOutCard=} [properties] Properties to set
         * @returns {PB.MsgDDZUserOutCard} MsgDDZUserOutCard instance
         */
        MsgDDZUserOutCard.create = function create(properties) {
            return new MsgDDZUserOutCard(properties);
        };

        /**
         * Encodes the specified MsgDDZUserOutCard message. Does not implicitly {@link PB.MsgDDZUserOutCard.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {PB.IMsgDDZUserOutCard} message MsgDDZUserOutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZUserOutCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.oldActionid);
            if (message.outType != null && message.hasOwnProperty("outType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.outType);
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.handCount);
            if (message.outCard != null && message.hasOwnProperty("outCard"))
                $root.PB.MsgCards.encode(message.outCard, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.multiple);
            if (message.handCard != null && message.hasOwnProperty("handCard"))
                $root.PB.MsgCards.encode(message.handCard, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgDDZUserOutCard message, length delimited. Does not implicitly {@link PB.MsgDDZUserOutCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {PB.IMsgDDZUserOutCard} message MsgDDZUserOutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZUserOutCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZUserOutCard message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZUserOutCard} MsgDDZUserOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZUserOutCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZUserOutCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.oldActionid = reader.uint64();
                    break;
                case 2:
                    message.outType = reader.uint32();
                    break;
                case 3:
                    message.handCount = reader.uint32();
                    break;
                case 4:
                    message.outCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multiple = reader.uint64();
                    break;
                case 6:
                    message.handCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZUserOutCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZUserOutCard} MsgDDZUserOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZUserOutCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZUserOutCard message.
         * @function verify
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZUserOutCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                if (!$util.isInteger(message.oldActionid) && !(message.oldActionid && $util.isInteger(message.oldActionid.low) && $util.isInteger(message.oldActionid.high)))
                    return "oldActionid: integer|Long expected";
            if (message.outType != null && message.hasOwnProperty("outType"))
                if (!$util.isInteger(message.outType))
                    return "outType: integer expected";
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                if (!$util.isInteger(message.handCount))
                    return "handCount: integer expected";
            if (message.outCard != null && message.hasOwnProperty("outCard")) {
                var error = $root.PB.MsgCards.verify(message.outCard);
                if (error)
                    return "outCard." + error;
            }
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple) && !(message.multiple && $util.isInteger(message.multiple.low) && $util.isInteger(message.multiple.high)))
                    return "multiple: integer|Long expected";
            if (message.handCard != null && message.hasOwnProperty("handCard")) {
                var error = $root.PB.MsgCards.verify(message.handCard);
                if (error)
                    return "handCard." + error;
            }
            return null;
        };

        /**
         * Creates a MsgDDZUserOutCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZUserOutCard} MsgDDZUserOutCard
         */
        MsgDDZUserOutCard.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZUserOutCard)
                return object;
            var message = new $root.PB.MsgDDZUserOutCard();
            if (object.oldActionid != null)
                if ($util.Long)
                    (message.oldActionid = $util.Long.fromValue(object.oldActionid)).unsigned = true;
                else if (typeof object.oldActionid === "string")
                    message.oldActionid = parseInt(object.oldActionid, 10);
                else if (typeof object.oldActionid === "number")
                    message.oldActionid = object.oldActionid;
                else if (typeof object.oldActionid === "object")
                    message.oldActionid = new $util.LongBits(object.oldActionid.low >>> 0, object.oldActionid.high >>> 0).toNumber(true);
            if (object.outType != null)
                message.outType = object.outType >>> 0;
            if (object.handCount != null)
                message.handCount = object.handCount >>> 0;
            if (object.outCard != null) {
                if (typeof object.outCard !== "object")
                    throw TypeError(".PB.MsgDDZUserOutCard.outCard: object expected");
                message.outCard = $root.PB.MsgCards.fromObject(object.outCard);
            }
            if (object.multiple != null)
                if ($util.Long)
                    (message.multiple = $util.Long.fromValue(object.multiple)).unsigned = true;
                else if (typeof object.multiple === "string")
                    message.multiple = parseInt(object.multiple, 10);
                else if (typeof object.multiple === "number")
                    message.multiple = object.multiple;
                else if (typeof object.multiple === "object")
                    message.multiple = new $util.LongBits(object.multiple.low >>> 0, object.multiple.high >>> 0).toNumber(true);
            if (object.handCard != null) {
                if (typeof object.handCard !== "object")
                    throw TypeError(".PB.MsgDDZUserOutCard.handCard: object expected");
                message.handCard = $root.PB.MsgCards.fromObject(object.handCard);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZUserOutCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZUserOutCard
         * @static
         * @param {PB.MsgDDZUserOutCard} message MsgDDZUserOutCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZUserOutCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.oldActionid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.oldActionid = options.longs === String ? "0" : 0;
                object.outType = 0;
                object.handCount = 0;
                object.outCard = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.multiple = options.longs === String ? "0" : 0;
                object.handCard = null;
            }
            if (message.oldActionid != null && message.hasOwnProperty("oldActionid"))
                if (typeof message.oldActionid === "number")
                    object.oldActionid = options.longs === String ? String(message.oldActionid) : message.oldActionid;
                else
                    object.oldActionid = options.longs === String ? $util.Long.prototype.toString.call(message.oldActionid) : options.longs === Number ? new $util.LongBits(message.oldActionid.low >>> 0, message.oldActionid.high >>> 0).toNumber(true) : message.oldActionid;
            if (message.outType != null && message.hasOwnProperty("outType"))
                object.outType = message.outType;
            if (message.handCount != null && message.hasOwnProperty("handCount"))
                object.handCount = message.handCount;
            if (message.outCard != null && message.hasOwnProperty("outCard"))
                object.outCard = $root.PB.MsgCards.toObject(message.outCard, options);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (typeof message.multiple === "number")
                    object.multiple = options.longs === String ? String(message.multiple) : message.multiple;
                else
                    object.multiple = options.longs === String ? $util.Long.prototype.toString.call(message.multiple) : options.longs === Number ? new $util.LongBits(message.multiple.low >>> 0, message.multiple.high >>> 0).toNumber(true) : message.multiple;
            if (message.handCard != null && message.hasOwnProperty("handCard"))
                object.handCard = $root.PB.MsgCards.toObject(message.handCard, options);
            return object;
        };

        /**
         * Converts this MsgDDZUserOutCard to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZUserOutCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZUserOutCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZUserOutCard;
    })();

    PB.MsgDDZRoom = (function() {

        /**
         * Properties of a MsgDDZRoom.
         * @memberof PB
         * @interface IMsgDDZRoom
         * @property {PB.TDDZState|null} [roomState] MsgDDZRoom roomState
         * @property {number|null} [stateTime] MsgDDZRoom stateTime
         * @property {Array.<PB.IMsgDDZPlayer>|null} [playerList] MsgDDZRoom playerList
         * @property {number|Long|null} [actionId] MsgDDZRoom actionId
         * @property {number|Long|null} [roomId] MsgDDZRoom roomId
         * @property {number|null} [gameCount] MsgDDZRoom gameCount
         * @property {PB.IMsgCreatePrivateRoom|null} [privateRoom] MsgDDZRoom privateRoom
         * @property {PB.IMsgDDZUserOutCard|null} [lastOutcard] MsgDDZRoom lastOutcard
         * @property {PB.TDDZPlayerWik|null} [wik] MsgDDZRoom wik
         * @property {PB.IMsgCards|null} [bottomCard] MsgDDZRoom bottomCard
         * @property {number|Long|null} [multiple] MsgDDZRoom multiple
         * @property {Array.<PB.IMsgDiPaiMutiple>|null} [dipaiMultiList] MsgDDZRoom dipaiMultiList
         * @property {number|null} [roomPayType] MsgDDZRoom roomPayType
         */

        /**
         * Constructs a new MsgDDZRoom.
         * @memberof PB
         * @classdesc Represents a MsgDDZRoom.
         * @implements IMsgDDZRoom
         * @constructor
         * @param {PB.IMsgDDZRoom=} [properties] Properties to set
         */
        function MsgDDZRoom(properties) {
            this.playerList = [];
            this.dipaiMultiList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZRoom roomState.
         * @member {PB.TDDZState} roomState
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.roomState = 0;

        /**
         * MsgDDZRoom stateTime.
         * @member {number} stateTime
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.stateTime = 0;

        /**
         * MsgDDZRoom playerList.
         * @member {Array.<PB.IMsgDDZPlayer>} playerList
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.playerList = $util.emptyArray;

        /**
         * MsgDDZRoom actionId.
         * @member {number|Long} actionId
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.actionId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZRoom roomId.
         * @member {number|Long} roomId
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZRoom gameCount.
         * @member {number} gameCount
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.gameCount = 0;

        /**
         * MsgDDZRoom privateRoom.
         * @member {PB.IMsgCreatePrivateRoom|null|undefined} privateRoom
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.privateRoom = null;

        /**
         * MsgDDZRoom lastOutcard.
         * @member {PB.IMsgDDZUserOutCard|null|undefined} lastOutcard
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.lastOutcard = null;

        /**
         * MsgDDZRoom wik.
         * @member {PB.TDDZPlayerWik} wik
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.wik = 1;

        /**
         * MsgDDZRoom bottomCard.
         * @member {PB.IMsgCards|null|undefined} bottomCard
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.bottomCard = null;

        /**
         * MsgDDZRoom multiple.
         * @member {number|Long} multiple
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZRoom dipaiMultiList.
         * @member {Array.<PB.IMsgDiPaiMutiple>} dipaiMultiList
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.dipaiMultiList = $util.emptyArray;

        /**
         * MsgDDZRoom roomPayType.
         * @member {number} roomPayType
         * @memberof PB.MsgDDZRoom
         * @instance
         */
        MsgDDZRoom.prototype.roomPayType = 0;

        /**
         * Creates a new MsgDDZRoom instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {PB.IMsgDDZRoom=} [properties] Properties to set
         * @returns {PB.MsgDDZRoom} MsgDDZRoom instance
         */
        MsgDDZRoom.create = function create(properties) {
            return new MsgDDZRoom(properties);
        };

        /**
         * Encodes the specified MsgDDZRoom message. Does not implicitly {@link PB.MsgDDZRoom.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {PB.IMsgDDZRoom} message MsgDDZRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomState);
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.stateTime);
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.PB.MsgDDZPlayer.encode(message.playerList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.actionId);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.roomId);
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.gameCount);
            if (message.privateRoom != null && message.hasOwnProperty("privateRoom"))
                $root.PB.MsgCreatePrivateRoom.encode(message.privateRoom, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.lastOutcard != null && message.hasOwnProperty("lastOutcard"))
                $root.PB.MsgDDZUserOutCard.encode(message.lastOutcard, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.wik != null && message.hasOwnProperty("wik"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.wik);
            if (message.bottomCard != null && message.hasOwnProperty("bottomCard"))
                $root.PB.MsgCards.encode(message.bottomCard, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.multiple);
            if (message.dipaiMultiList != null && message.dipaiMultiList.length)
                for (var i = 0; i < message.dipaiMultiList.length; ++i)
                    $root.PB.MsgDiPaiMutiple.encode(message.dipaiMultiList[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.roomPayType != null && message.hasOwnProperty("roomPayType"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.roomPayType);
            return writer;
        };

        /**
         * Encodes the specified MsgDDZRoom message, length delimited. Does not implicitly {@link PB.MsgDDZRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {PB.IMsgDDZRoom} message MsgDDZRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZRoom message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZRoom} MsgDDZRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomState = reader.int32();
                    break;
                case 2:
                    message.stateTime = reader.uint32();
                    break;
                case 3:
                    if (!(message.playerList && message.playerList.length))
                        message.playerList = [];
                    message.playerList.push($root.PB.MsgDDZPlayer.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.actionId = reader.uint64();
                    break;
                case 5:
                    message.roomId = reader.uint64();
                    break;
                case 6:
                    message.gameCount = reader.uint32();
                    break;
                case 7:
                    message.privateRoom = $root.PB.MsgCreatePrivateRoom.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.lastOutcard = $root.PB.MsgDDZUserOutCard.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.wik = reader.int32();
                    break;
                case 10:
                    message.bottomCard = $root.PB.MsgCards.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.multiple = reader.uint64();
                    break;
                case 12:
                    if (!(message.dipaiMultiList && message.dipaiMultiList.length))
                        message.dipaiMultiList = [];
                    message.dipaiMultiList.push($root.PB.MsgDiPaiMutiple.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.roomPayType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZRoom} MsgDDZRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZRoom message.
         * @function verify
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                switch (message.roomState) {
                default:
                    return "roomState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                if (!$util.isInteger(message.stateTime))
                    return "stateTime: integer expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.PB.MsgDDZPlayer.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (!$util.isInteger(message.actionId) && !(message.actionId && $util.isInteger(message.actionId.low) && $util.isInteger(message.actionId.high)))
                    return "actionId: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                if (!$util.isInteger(message.gameCount))
                    return "gameCount: integer expected";
            if (message.privateRoom != null && message.hasOwnProperty("privateRoom")) {
                var error = $root.PB.MsgCreatePrivateRoom.verify(message.privateRoom);
                if (error)
                    return "privateRoom." + error;
            }
            if (message.lastOutcard != null && message.hasOwnProperty("lastOutcard")) {
                var error = $root.PB.MsgDDZUserOutCard.verify(message.lastOutcard);
                if (error)
                    return "lastOutcard." + error;
            }
            if (message.wik != null && message.hasOwnProperty("wik"))
                switch (message.wik) {
                default:
                    return "wik: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.bottomCard != null && message.hasOwnProperty("bottomCard")) {
                var error = $root.PB.MsgCards.verify(message.bottomCard);
                if (error)
                    return "bottomCard." + error;
            }
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple) && !(message.multiple && $util.isInteger(message.multiple.low) && $util.isInteger(message.multiple.high)))
                    return "multiple: integer|Long expected";
            if (message.dipaiMultiList != null && message.hasOwnProperty("dipaiMultiList")) {
                if (!Array.isArray(message.dipaiMultiList))
                    return "dipaiMultiList: array expected";
                for (var i = 0; i < message.dipaiMultiList.length; ++i) {
                    var error = $root.PB.MsgDiPaiMutiple.verify(message.dipaiMultiList[i]);
                    if (error)
                        return "dipaiMultiList." + error;
                }
            }
            if (message.roomPayType != null && message.hasOwnProperty("roomPayType"))
                if (!$util.isInteger(message.roomPayType))
                    return "roomPayType: integer expected";
            return null;
        };

        /**
         * Creates a MsgDDZRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZRoom} MsgDDZRoom
         */
        MsgDDZRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZRoom)
                return object;
            var message = new $root.PB.MsgDDZRoom();
            switch (object.roomState) {
            case "TDDZStateWait":
            case 0:
                message.roomState = 0;
                break;
            case "TDDZStateCheckStartGame":
            case 1:
                message.roomState = 1;
                break;
            case "TDDZStateSelectMingCardStart":
            case 2:
                message.roomState = 2;
                break;
            case "TDDZStateStartGame":
            case 3:
                message.roomState = 3;
                break;
            case "TDDZStateSendCard":
            case 4:
                message.roomState = 4;
                break;
            case "TDDZStateQiangDiZhu":
            case 5:
                message.roomState = 5;
                break;
            case "TDDZStateSelectAddTimes":
            case 6:
                message.roomState = 6;
                break;
            case "TDDZStateAction":
            case 7:
                message.roomState = 7;
                break;
            case "TDDZStateOutCard":
            case 8:
                message.roomState = 8;
                break;
            case "TDDZStateShowDown":
            case 9:
                message.roomState = 9;
                break;
            case "TDDZStateRelieveRoom":
            case 10:
                message.roomState = 10;
                break;
            }
            if (object.stateTime != null)
                message.stateTime = object.stateTime >>> 0;
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".PB.MsgDDZRoom.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".PB.MsgDDZRoom.playerList: object expected");
                    message.playerList[i] = $root.PB.MsgDDZPlayer.fromObject(object.playerList[i]);
                }
            }
            if (object.actionId != null)
                if ($util.Long)
                    (message.actionId = $util.Long.fromValue(object.actionId)).unsigned = true;
                else if (typeof object.actionId === "string")
                    message.actionId = parseInt(object.actionId, 10);
                else if (typeof object.actionId === "number")
                    message.actionId = object.actionId;
                else if (typeof object.actionId === "object")
                    message.actionId = new $util.LongBits(object.actionId.low >>> 0, object.actionId.high >>> 0).toNumber(true);
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
            if (object.gameCount != null)
                message.gameCount = object.gameCount >>> 0;
            if (object.privateRoom != null) {
                if (typeof object.privateRoom !== "object")
                    throw TypeError(".PB.MsgDDZRoom.privateRoom: object expected");
                message.privateRoom = $root.PB.MsgCreatePrivateRoom.fromObject(object.privateRoom);
            }
            if (object.lastOutcard != null) {
                if (typeof object.lastOutcard !== "object")
                    throw TypeError(".PB.MsgDDZRoom.lastOutcard: object expected");
                message.lastOutcard = $root.PB.MsgDDZUserOutCard.fromObject(object.lastOutcard);
            }
            switch (object.wik) {
            case "ASK_DDZ_NULL":
            case 1:
                message.wik = 1;
                break;
            case "ASK_DDZ_TISHI":
            case 2:
                message.wik = 2;
                break;
            case "ASK_DDZ_BUCHU":
            case 3:
                message.wik = 3;
                break;
            case "ASK_DDZ_CHUPAI":
            case 4:
                message.wik = 4;
                break;
            case "ASK_DDZ_DIZHU_MINGPAI":
            case 5:
                message.wik = 5;
                break;
            }
            if (object.bottomCard != null) {
                if (typeof object.bottomCard !== "object")
                    throw TypeError(".PB.MsgDDZRoom.bottomCard: object expected");
                message.bottomCard = $root.PB.MsgCards.fromObject(object.bottomCard);
            }
            if (object.multiple != null)
                if ($util.Long)
                    (message.multiple = $util.Long.fromValue(object.multiple)).unsigned = true;
                else if (typeof object.multiple === "string")
                    message.multiple = parseInt(object.multiple, 10);
                else if (typeof object.multiple === "number")
                    message.multiple = object.multiple;
                else if (typeof object.multiple === "object")
                    message.multiple = new $util.LongBits(object.multiple.low >>> 0, object.multiple.high >>> 0).toNumber(true);
            if (object.dipaiMultiList) {
                if (!Array.isArray(object.dipaiMultiList))
                    throw TypeError(".PB.MsgDDZRoom.dipaiMultiList: array expected");
                message.dipaiMultiList = [];
                for (var i = 0; i < object.dipaiMultiList.length; ++i) {
                    if (typeof object.dipaiMultiList[i] !== "object")
                        throw TypeError(".PB.MsgDDZRoom.dipaiMultiList: object expected");
                    message.dipaiMultiList[i] = $root.PB.MsgDiPaiMutiple.fromObject(object.dipaiMultiList[i]);
                }
            }
            if (object.roomPayType != null)
                message.roomPayType = object.roomPayType >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZRoom
         * @static
         * @param {PB.MsgDDZRoom} message MsgDDZRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.dipaiMultiList = [];
            }
            if (options.defaults) {
                object.roomState = options.enums === String ? "TDDZStateWait" : 0;
                object.stateTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.actionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.actionId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.gameCount = 0;
                object.privateRoom = null;
                object.lastOutcard = null;
                object.wik = options.enums === String ? "ASK_DDZ_NULL" : 1;
                object.bottomCard = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.multiple = options.longs === String ? "0" : 0;
                object.roomPayType = 0;
            }
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                object.roomState = options.enums === String ? $root.PB.TDDZState[message.roomState] : message.roomState;
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                object.stateTime = message.stateTime;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.PB.MsgDDZPlayer.toObject(message.playerList[j], options);
            }
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (typeof message.actionId === "number")
                    object.actionId = options.longs === String ? String(message.actionId) : message.actionId;
                else
                    object.actionId = options.longs === String ? $util.Long.prototype.toString.call(message.actionId) : options.longs === Number ? new $util.LongBits(message.actionId.low >>> 0, message.actionId.high >>> 0).toNumber(true) : message.actionId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                object.gameCount = message.gameCount;
            if (message.privateRoom != null && message.hasOwnProperty("privateRoom"))
                object.privateRoom = $root.PB.MsgCreatePrivateRoom.toObject(message.privateRoom, options);
            if (message.lastOutcard != null && message.hasOwnProperty("lastOutcard"))
                object.lastOutcard = $root.PB.MsgDDZUserOutCard.toObject(message.lastOutcard, options);
            if (message.wik != null && message.hasOwnProperty("wik"))
                object.wik = options.enums === String ? $root.PB.TDDZPlayerWik[message.wik] : message.wik;
            if (message.bottomCard != null && message.hasOwnProperty("bottomCard"))
                object.bottomCard = $root.PB.MsgCards.toObject(message.bottomCard, options);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (typeof message.multiple === "number")
                    object.multiple = options.longs === String ? String(message.multiple) : message.multiple;
                else
                    object.multiple = options.longs === String ? $util.Long.prototype.toString.call(message.multiple) : options.longs === Number ? new $util.LongBits(message.multiple.low >>> 0, message.multiple.high >>> 0).toNumber(true) : message.multiple;
            if (message.dipaiMultiList && message.dipaiMultiList.length) {
                object.dipaiMultiList = [];
                for (var j = 0; j < message.dipaiMultiList.length; ++j)
                    object.dipaiMultiList[j] = $root.PB.MsgDiPaiMutiple.toObject(message.dipaiMultiList[j], options);
            }
            if (message.roomPayType != null && message.hasOwnProperty("roomPayType"))
                object.roomPayType = message.roomPayType;
            return object;
        };

        /**
         * Converts this MsgDDZRoom to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZRoom;
    })();

    PB.MsgDDZRoomShowDown = (function() {

        /**
         * Properties of a MsgDDZRoomShowDown.
         * @memberof PB
         * @interface IMsgDDZRoomShowDown
         * @property {PB.TDDZState|null} [roomState] MsgDDZRoomShowDown roomState
         * @property {number|null} [stateTime] MsgDDZRoomShowDown stateTime
         * @property {Array.<PB.IMsgDDZPlayer>|null} [playerList] MsgDDZRoomShowDown playerList
         * @property {number|Long|null} [roomId] MsgDDZRoomShowDown roomId
         * @property {number|null} [gameCount] MsgDDZRoomShowDown gameCount
         * @property {number|null} [time] MsgDDZRoomShowDown time
         * @property {boolean|null} [gameOver] MsgDDZRoomShowDown gameOver
         * @property {Array.<PB.IMsgDDZShowDownEvent>|null} [eventCount] MsgDDZRoomShowDown eventCount
         * @property {Array.<PB.IMsgDDZIntegralCount>|null} [integralList] MsgDDZRoomShowDown integralList
         */

        /**
         * Constructs a new MsgDDZRoomShowDown.
         * @memberof PB
         * @classdesc Represents a MsgDDZRoomShowDown.
         * @implements IMsgDDZRoomShowDown
         * @constructor
         * @param {PB.IMsgDDZRoomShowDown=} [properties] Properties to set
         */
        function MsgDDZRoomShowDown(properties) {
            this.playerList = [];
            this.eventCount = [];
            this.integralList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZRoomShowDown roomState.
         * @member {PB.TDDZState} roomState
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.roomState = 0;

        /**
         * MsgDDZRoomShowDown stateTime.
         * @member {number} stateTime
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.stateTime = 0;

        /**
         * MsgDDZRoomShowDown playerList.
         * @member {Array.<PB.IMsgDDZPlayer>} playerList
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.playerList = $util.emptyArray;

        /**
         * MsgDDZRoomShowDown roomId.
         * @member {number|Long} roomId
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZRoomShowDown gameCount.
         * @member {number} gameCount
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.gameCount = 0;

        /**
         * MsgDDZRoomShowDown time.
         * @member {number} time
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.time = 0;

        /**
         * MsgDDZRoomShowDown gameOver.
         * @member {boolean} gameOver
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.gameOver = false;

        /**
         * MsgDDZRoomShowDown eventCount.
         * @member {Array.<PB.IMsgDDZShowDownEvent>} eventCount
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.eventCount = $util.emptyArray;

        /**
         * MsgDDZRoomShowDown integralList.
         * @member {Array.<PB.IMsgDDZIntegralCount>} integralList
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         */
        MsgDDZRoomShowDown.prototype.integralList = $util.emptyArray;

        /**
         * Creates a new MsgDDZRoomShowDown instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {PB.IMsgDDZRoomShowDown=} [properties] Properties to set
         * @returns {PB.MsgDDZRoomShowDown} MsgDDZRoomShowDown instance
         */
        MsgDDZRoomShowDown.create = function create(properties) {
            return new MsgDDZRoomShowDown(properties);
        };

        /**
         * Encodes the specified MsgDDZRoomShowDown message. Does not implicitly {@link PB.MsgDDZRoomShowDown.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {PB.IMsgDDZRoomShowDown} message MsgDDZRoomShowDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZRoomShowDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomState);
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.stateTime);
            if (message.playerList != null && message.playerList.length)
                for (var i = 0; i < message.playerList.length; ++i)
                    $root.PB.MsgDDZPlayer.encode(message.playerList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.roomId);
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.gameCount);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.time);
            if (message.gameOver != null && message.hasOwnProperty("gameOver"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.gameOver);
            if (message.eventCount != null && message.eventCount.length)
                for (var i = 0; i < message.eventCount.length; ++i)
                    $root.PB.MsgDDZShowDownEvent.encode(message.eventCount[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.integralList != null && message.integralList.length)
                for (var i = 0; i < message.integralList.length; ++i)
                    $root.PB.MsgDDZIntegralCount.encode(message.integralList[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgDDZRoomShowDown message, length delimited. Does not implicitly {@link PB.MsgDDZRoomShowDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {PB.IMsgDDZRoomShowDown} message MsgDDZRoomShowDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZRoomShowDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZRoomShowDown message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZRoomShowDown} MsgDDZRoomShowDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZRoomShowDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZRoomShowDown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomState = reader.int32();
                    break;
                case 2:
                    message.stateTime = reader.uint32();
                    break;
                case 3:
                    if (!(message.playerList && message.playerList.length))
                        message.playerList = [];
                    message.playerList.push($root.PB.MsgDDZPlayer.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.roomId = reader.uint64();
                    break;
                case 5:
                    message.gameCount = reader.uint32();
                    break;
                case 6:
                    message.time = reader.uint32();
                    break;
                case 8:
                    message.gameOver = reader.bool();
                    break;
                case 9:
                    if (!(message.eventCount && message.eventCount.length))
                        message.eventCount = [];
                    message.eventCount.push($root.PB.MsgDDZShowDownEvent.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.integralList && message.integralList.length))
                        message.integralList = [];
                    message.integralList.push($root.PB.MsgDDZIntegralCount.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZRoomShowDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZRoomShowDown} MsgDDZRoomShowDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZRoomShowDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZRoomShowDown message.
         * @function verify
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZRoomShowDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                switch (message.roomState) {
                default:
                    return "roomState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                if (!$util.isInteger(message.stateTime))
                    return "stateTime: integer expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (var i = 0; i < message.playerList.length; ++i) {
                    var error = $root.PB.MsgDDZPlayer.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                if (!$util.isInteger(message.gameCount))
                    return "gameCount: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.gameOver != null && message.hasOwnProperty("gameOver"))
                if (typeof message.gameOver !== "boolean")
                    return "gameOver: boolean expected";
            if (message.eventCount != null && message.hasOwnProperty("eventCount")) {
                if (!Array.isArray(message.eventCount))
                    return "eventCount: array expected";
                for (var i = 0; i < message.eventCount.length; ++i) {
                    var error = $root.PB.MsgDDZShowDownEvent.verify(message.eventCount[i]);
                    if (error)
                        return "eventCount." + error;
                }
            }
            if (message.integralList != null && message.hasOwnProperty("integralList")) {
                if (!Array.isArray(message.integralList))
                    return "integralList: array expected";
                for (var i = 0; i < message.integralList.length; ++i) {
                    var error = $root.PB.MsgDDZIntegralCount.verify(message.integralList[i]);
                    if (error)
                        return "integralList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MsgDDZRoomShowDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZRoomShowDown} MsgDDZRoomShowDown
         */
        MsgDDZRoomShowDown.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZRoomShowDown)
                return object;
            var message = new $root.PB.MsgDDZRoomShowDown();
            switch (object.roomState) {
            case "TDDZStateWait":
            case 0:
                message.roomState = 0;
                break;
            case "TDDZStateCheckStartGame":
            case 1:
                message.roomState = 1;
                break;
            case "TDDZStateSelectMingCardStart":
            case 2:
                message.roomState = 2;
                break;
            case "TDDZStateStartGame":
            case 3:
                message.roomState = 3;
                break;
            case "TDDZStateSendCard":
            case 4:
                message.roomState = 4;
                break;
            case "TDDZStateQiangDiZhu":
            case 5:
                message.roomState = 5;
                break;
            case "TDDZStateSelectAddTimes":
            case 6:
                message.roomState = 6;
                break;
            case "TDDZStateAction":
            case 7:
                message.roomState = 7;
                break;
            case "TDDZStateOutCard":
            case 8:
                message.roomState = 8;
                break;
            case "TDDZStateShowDown":
            case 9:
                message.roomState = 9;
                break;
            case "TDDZStateRelieveRoom":
            case 10:
                message.roomState = 10;
                break;
            }
            if (object.stateTime != null)
                message.stateTime = object.stateTime >>> 0;
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".PB.MsgDDZRoomShowDown.playerList: array expected");
                message.playerList = [];
                for (var i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".PB.MsgDDZRoomShowDown.playerList: object expected");
                    message.playerList[i] = $root.PB.MsgDDZPlayer.fromObject(object.playerList[i]);
                }
            }
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = true;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber(true);
            if (object.gameCount != null)
                message.gameCount = object.gameCount >>> 0;
            if (object.time != null)
                message.time = object.time >>> 0;
            if (object.gameOver != null)
                message.gameOver = Boolean(object.gameOver);
            if (object.eventCount) {
                if (!Array.isArray(object.eventCount))
                    throw TypeError(".PB.MsgDDZRoomShowDown.eventCount: array expected");
                message.eventCount = [];
                for (var i = 0; i < object.eventCount.length; ++i) {
                    if (typeof object.eventCount[i] !== "object")
                        throw TypeError(".PB.MsgDDZRoomShowDown.eventCount: object expected");
                    message.eventCount[i] = $root.PB.MsgDDZShowDownEvent.fromObject(object.eventCount[i]);
                }
            }
            if (object.integralList) {
                if (!Array.isArray(object.integralList))
                    throw TypeError(".PB.MsgDDZRoomShowDown.integralList: array expected");
                message.integralList = [];
                for (var i = 0; i < object.integralList.length; ++i) {
                    if (typeof object.integralList[i] !== "object")
                        throw TypeError(".PB.MsgDDZRoomShowDown.integralList: object expected");
                    message.integralList[i] = $root.PB.MsgDDZIntegralCount.fromObject(object.integralList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZRoomShowDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZRoomShowDown
         * @static
         * @param {PB.MsgDDZRoomShowDown} message MsgDDZRoomShowDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZRoomShowDown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.playerList = [];
                object.eventCount = [];
                object.integralList = [];
            }
            if (options.defaults) {
                object.roomState = options.enums === String ? "TDDZStateWait" : 0;
                object.stateTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.gameCount = 0;
                object.time = 0;
                object.gameOver = false;
            }
            if (message.roomState != null && message.hasOwnProperty("roomState"))
                object.roomState = options.enums === String ? $root.PB.TDDZState[message.roomState] : message.roomState;
            if (message.stateTime != null && message.hasOwnProperty("stateTime"))
                object.stateTime = message.stateTime;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (var j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.PB.MsgDDZPlayer.toObject(message.playerList[j], options);
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber(true) : message.roomId;
            if (message.gameCount != null && message.hasOwnProperty("gameCount"))
                object.gameCount = message.gameCount;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.gameOver != null && message.hasOwnProperty("gameOver"))
                object.gameOver = message.gameOver;
            if (message.eventCount && message.eventCount.length) {
                object.eventCount = [];
                for (var j = 0; j < message.eventCount.length; ++j)
                    object.eventCount[j] = $root.PB.MsgDDZShowDownEvent.toObject(message.eventCount[j], options);
            }
            if (message.integralList && message.integralList.length) {
                object.integralList = [];
                for (var j = 0; j < message.integralList.length; ++j)
                    object.integralList[j] = $root.PB.MsgDDZIntegralCount.toObject(message.integralList[j], options);
            }
            return object;
        };

        /**
         * Converts this MsgDDZRoomShowDown to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZRoomShowDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZRoomShowDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZRoomShowDown;
    })();

    PB.MsgDDZIntegralCount = (function() {

        /**
         * Properties of a MsgDDZIntegralCount.
         * @memberof PB
         * @interface IMsgDDZIntegralCount
         * @property {number|Long|null} [roleid] MsgDDZIntegralCount roleid
         * @property {number|null} [count] MsgDDZIntegralCount count
         */

        /**
         * Constructs a new MsgDDZIntegralCount.
         * @memberof PB
         * @classdesc Represents a MsgDDZIntegralCount.
         * @implements IMsgDDZIntegralCount
         * @constructor
         * @param {PB.IMsgDDZIntegralCount=} [properties] Properties to set
         */
        function MsgDDZIntegralCount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZIntegralCount roleid.
         * @member {number|Long} roleid
         * @memberof PB.MsgDDZIntegralCount
         * @instance
         */
        MsgDDZIntegralCount.prototype.roleid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * MsgDDZIntegralCount count.
         * @member {number} count
         * @memberof PB.MsgDDZIntegralCount
         * @instance
         */
        MsgDDZIntegralCount.prototype.count = 0;

        /**
         * Creates a new MsgDDZIntegralCount instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {PB.IMsgDDZIntegralCount=} [properties] Properties to set
         * @returns {PB.MsgDDZIntegralCount} MsgDDZIntegralCount instance
         */
        MsgDDZIntegralCount.create = function create(properties) {
            return new MsgDDZIntegralCount(properties);
        };

        /**
         * Encodes the specified MsgDDZIntegralCount message. Does not implicitly {@link PB.MsgDDZIntegralCount.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {PB.IMsgDDZIntegralCount} message MsgDDZIntegralCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZIntegralCount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.roleid);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified MsgDDZIntegralCount message, length delimited. Does not implicitly {@link PB.MsgDDZIntegralCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {PB.IMsgDDZIntegralCount} message MsgDDZIntegralCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZIntegralCount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZIntegralCount message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZIntegralCount} MsgDDZIntegralCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZIntegralCount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZIntegralCount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleid = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZIntegralCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZIntegralCount} MsgDDZIntegralCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZIntegralCount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZIntegralCount message.
         * @function verify
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZIntegralCount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid) && !(message.roleid && $util.isInteger(message.roleid.low) && $util.isInteger(message.roleid.high)))
                    return "roleid: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a MsgDDZIntegralCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZIntegralCount} MsgDDZIntegralCount
         */
        MsgDDZIntegralCount.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZIntegralCount)
                return object;
            var message = new $root.PB.MsgDDZIntegralCount();
            if (object.roleid != null)
                if ($util.Long)
                    (message.roleid = $util.Long.fromValue(object.roleid)).unsigned = true;
                else if (typeof object.roleid === "string")
                    message.roleid = parseInt(object.roleid, 10);
                else if (typeof object.roleid === "number")
                    message.roleid = object.roleid;
                else if (typeof object.roleid === "object")
                    message.roleid = new $util.LongBits(object.roleid.low >>> 0, object.roleid.high >>> 0).toNumber(true);
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZIntegralCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZIntegralCount
         * @static
         * @param {PB.MsgDDZIntegralCount} message MsgDDZIntegralCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZIntegralCount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.roleid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleid = options.longs === String ? "0" : 0;
                object.count = 0;
            }
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (typeof message.roleid === "number")
                    object.roleid = options.longs === String ? String(message.roleid) : message.roleid;
                else
                    object.roleid = options.longs === String ? $util.Long.prototype.toString.call(message.roleid) : options.longs === Number ? new $util.LongBits(message.roleid.low >>> 0, message.roleid.high >>> 0).toNumber(true) : message.roleid;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this MsgDDZIntegralCount to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZIntegralCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZIntegralCount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZIntegralCount;
    })();

    PB.MsgDDZShowDownEvent = (function() {

        /**
         * Properties of a MsgDDZShowDownEvent.
         * @memberof PB
         * @interface IMsgDDZShowDownEvent
         * @property {number|null} [eventId] MsgDDZShowDownEvent eventId
         * @property {number|null} [count] MsgDDZShowDownEvent count
         */

        /**
         * Constructs a new MsgDDZShowDownEvent.
         * @memberof PB
         * @classdesc Represents a MsgDDZShowDownEvent.
         * @implements IMsgDDZShowDownEvent
         * @constructor
         * @param {PB.IMsgDDZShowDownEvent=} [properties] Properties to set
         */
        function MsgDDZShowDownEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgDDZShowDownEvent eventId.
         * @member {number} eventId
         * @memberof PB.MsgDDZShowDownEvent
         * @instance
         */
        MsgDDZShowDownEvent.prototype.eventId = 0;

        /**
         * MsgDDZShowDownEvent count.
         * @member {number} count
         * @memberof PB.MsgDDZShowDownEvent
         * @instance
         */
        MsgDDZShowDownEvent.prototype.count = 0;

        /**
         * Creates a new MsgDDZShowDownEvent instance using the specified properties.
         * @function create
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {PB.IMsgDDZShowDownEvent=} [properties] Properties to set
         * @returns {PB.MsgDDZShowDownEvent} MsgDDZShowDownEvent instance
         */
        MsgDDZShowDownEvent.create = function create(properties) {
            return new MsgDDZShowDownEvent(properties);
        };

        /**
         * Encodes the specified MsgDDZShowDownEvent message. Does not implicitly {@link PB.MsgDDZShowDownEvent.verify|verify} messages.
         * @function encode
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {PB.IMsgDDZShowDownEvent} message MsgDDZShowDownEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZShowDownEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eventId);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.count);
            return writer;
        };

        /**
         * Encodes the specified MsgDDZShowDownEvent message, length delimited. Does not implicitly {@link PB.MsgDDZShowDownEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {PB.IMsgDDZShowDownEvent} message MsgDDZShowDownEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgDDZShowDownEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgDDZShowDownEvent message from the specified reader or buffer.
         * @function decode
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.MsgDDZShowDownEvent} MsgDDZShowDownEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZShowDownEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PB.MsgDDZShowDownEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.eventId = reader.uint32();
                    break;
                case 2:
                    message.count = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgDDZShowDownEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.MsgDDZShowDownEvent} MsgDDZShowDownEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgDDZShowDownEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgDDZShowDownEvent message.
         * @function verify
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgDDZShowDownEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                if (!$util.isInteger(message.eventId))
                    return "eventId: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a MsgDDZShowDownEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PB.MsgDDZShowDownEvent} MsgDDZShowDownEvent
         */
        MsgDDZShowDownEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.PB.MsgDDZShowDownEvent)
                return object;
            var message = new $root.PB.MsgDDZShowDownEvent();
            if (object.eventId != null)
                message.eventId = object.eventId >>> 0;
            if (object.count != null)
                message.count = object.count >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgDDZShowDownEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PB.MsgDDZShowDownEvent
         * @static
         * @param {PB.MsgDDZShowDownEvent} message MsgDDZShowDownEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgDDZShowDownEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.eventId = 0;
                object.count = 0;
            }
            if (message.eventId != null && message.hasOwnProperty("eventId"))
                object.eventId = message.eventId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this MsgDDZShowDownEvent to JSON.
         * @function toJSON
         * @memberof PB.MsgDDZShowDownEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgDDZShowDownEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgDDZShowDownEvent;
    })();

    return PB;
})();

$root.PB_MSG = (function() {

    /**
     * Namespace PB_MSG.
     * @exports PB_MSG
     * @namespace
     */
    var PB_MSG = {};

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
type Long = protobuf.Long;

/** Namespace PB_DEF. */
declare namespace PB_DEF {

    /** TAttribType enum. */
    enum TAttribType {
        INVALID_ATTRIB = 0,
        ID = 2001001,
        LEVEL_UP_EXP_INT = 2001002,
        NAME_STRING = 2001003,
        LIFE_INT = 2001004,
        LIFE_CURR_INT = 2001005
    }

    /** TEvent enum. */
    enum TEvent {
        EventInvalid = 0,
        EventPlayerUp = 2,
        EventCostMoney = 40,
        EventLogin = 46
    }

    /** 标识占据第几位   0-63 */
    enum TPlayerFlagBit {
        PLAYER_FLAG_TEST_0 = 0,
        PLAYER_FLAG_FIRST_CARD_ONE = 1,
        PLAYER_FLAG_FIRST_CARD_TEN = 2
    }

    /** TErrorType enum. */
    enum TErrorType {
        INVALID_TYPE = 0,
        ACCOUNT_LOGGED = 1,
        SERVER_FULL = 2,
        SERVER_NOT_OPEN = 3,
        TEXT_SUCESS = 4,
        TEXT_FAIL = 5,
        PWD_ERROR = 6,
        PLAYER_ONLINE_TO_FES = 7,
        PLAYER_EXISTS = 8,
        PLAYER_RELOAD = 9,
        SUCESS = 23,
        NO_AUTH_TYPE = 24,
        CONFIG_NOT_FOUND = 33,
        NOT_ENOUGH_MONEY = 37,
        PLAYER_BASE_ERROR = 128
    }

    /** TGender enum. */
    enum TGender {
        MALE = 0,
        FEMALE = 1
    }
}

/** Namespace PB_MSG. */
declare namespace PB_MSG {

    /** Properties of a MsgLogin. */
    interface IMsgLogin {

        /** MsgLogin Version */
        Version?: (string|null);

        /** MsgLogin Channel */
        Channel?: (string|null);

        /** MsgLogin AppName */
        AppName?: (string|null);

        /** MsgLogin User */
        User?: (string|null);

        /** MsgLogin NonceStr */
        NonceStr?: (string|null);

        /** MsgLogin Token */
        Token?: (string|null);

        /** MsgLogin Timestamp */
        Timestamp?: (number|Long|null);

        /** MsgLogin UID */
        UID?: (number|Long|null);

        /** MsgLogin RoomType */
        RoomType?: (string|null);
    }

    /** Represents a MsgLogin. */
    class MsgLogin implements IMsgLogin {

        /**
         * Constructs a new MsgLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_MSG.IMsgLogin);

        /** MsgLogin Version. */
        public Version: string;

        /** MsgLogin Channel. */
        public Channel: string;

        /** MsgLogin AppName. */
        public AppName: string;

        /** MsgLogin User. */
        public User: string;

        /** MsgLogin NonceStr. */
        public NonceStr: string;

        /** MsgLogin Token. */
        public Token: string;

        /** MsgLogin Timestamp. */
        public Timestamp: (number|Long);

        /** MsgLogin UID. */
        public UID: (number|Long);

        /** MsgLogin RoomType. */
        public RoomType: string;

        /**
         * Creates a new MsgLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgLogin instance
         */
        public static create(properties?: PB_MSG.IMsgLogin): PB_MSG.MsgLogin;

        /**
         * Encodes the specified MsgLogin message. Does not implicitly {@link PB_MSG.MsgLogin.verify|verify} messages.
         * @param message MsgLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB_MSG.IMsgLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgLogin message, length delimited. Does not implicitly {@link PB_MSG.MsgLogin.verify|verify} messages.
         * @param message MsgLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB_MSG.IMsgLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB_MSG.MsgLogin;

        /**
         * Decodes a MsgLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB_MSG.MsgLogin;

        /**
         * Verifies a MsgLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgLogin
         */
        public static fromObject(object: { [k: string]: any }): PB_MSG.MsgLogin;

        /**
         * Creates a plain object from a MsgLogin message. Also converts values to other types if specified.
         * @param message MsgLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB_MSG.MsgLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgPlayerInfo. */
    interface IMsgPlayerInfo {

        /** MsgPlayerInfo UID */
        UID?: (number|Long|null);

        /** MsgPlayerInfo Nickname */
        Nickname?: (string|null);

        /** MsgPlayerInfo Portrait */
        Portrait?: (number|null);

        /** MsgPlayerInfo Money */
        Money?: (number|Long|null);

        /** MsgPlayerInfo RMB */
        RMB?: (number|Long|null);

        /** MsgPlayerInfo Main */
        Main?: (number|null);

        /** MsgPlayerInfo FlagBit */
        FlagBit?: (number|Long|null);
    }

    /** Represents a MsgPlayerInfo. */
    class MsgPlayerInfo implements IMsgPlayerInfo {

        /**
         * Constructs a new MsgPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_MSG.IMsgPlayerInfo);

        /** MsgPlayerInfo UID. */
        public UID: (number|Long);

        /** MsgPlayerInfo Nickname. */
        public Nickname: string;

        /** MsgPlayerInfo Portrait. */
        public Portrait: number;

        /** MsgPlayerInfo Money. */
        public Money: (number|Long);

        /** MsgPlayerInfo RMB. */
        public RMB: (number|Long);

        /** MsgPlayerInfo Main. */
        public Main: number;

        /** MsgPlayerInfo FlagBit. */
        public FlagBit: (number|Long);

        /**
         * Creates a new MsgPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgPlayerInfo instance
         */
        public static create(properties?: PB_MSG.IMsgPlayerInfo): PB_MSG.MsgPlayerInfo;

        /**
         * Encodes the specified MsgPlayerInfo message. Does not implicitly {@link PB_MSG.MsgPlayerInfo.verify|verify} messages.
         * @param message MsgPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB_MSG.IMsgPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgPlayerInfo message, length delimited. Does not implicitly {@link PB_MSG.MsgPlayerInfo.verify|verify} messages.
         * @param message MsgPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB_MSG.IMsgPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB_MSG.MsgPlayerInfo;

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB_MSG.MsgPlayerInfo;

        /**
         * Verifies a MsgPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): PB_MSG.MsgPlayerInfo;

        /**
         * Creates a plain object from a MsgPlayerInfo message. Also converts values to other types if specified.
         * @param message MsgPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB_MSG.MsgPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgSvrLogin. */
    interface IMsgSvrLogin {

        /** MsgSvrLogin UID */
        UID?: (number|Long|null);

        /** MsgSvrLogin RoomType */
        RoomType?: (string|null);

        /** MsgSvrLogin ConFES */
        ConFES?: (number|null);
    }

    /** Represents a MsgSvrLogin. */
    class MsgSvrLogin implements IMsgSvrLogin {

        /**
         * Constructs a new MsgSvrLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_MSG.IMsgSvrLogin);

        /** MsgSvrLogin UID. */
        public UID: (number|Long);

        /** MsgSvrLogin RoomType. */
        public RoomType: string;

        /** MsgSvrLogin ConFES. */
        public ConFES: number;

        /**
         * Creates a new MsgSvrLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSvrLogin instance
         */
        public static create(properties?: PB_MSG.IMsgSvrLogin): PB_MSG.MsgSvrLogin;

        /**
         * Encodes the specified MsgSvrLogin message. Does not implicitly {@link PB_MSG.MsgSvrLogin.verify|verify} messages.
         * @param message MsgSvrLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB_MSG.IMsgSvrLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgSvrLogin message, length delimited. Does not implicitly {@link PB_MSG.MsgSvrLogin.verify|verify} messages.
         * @param message MsgSvrLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB_MSG.IMsgSvrLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgSvrLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgSvrLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB_MSG.MsgSvrLogin;

        /**
         * Decodes a MsgSvrLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgSvrLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB_MSG.MsgSvrLogin;

        /**
         * Verifies a MsgSvrLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgSvrLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgSvrLogin
         */
        public static fromObject(object: { [k: string]: any }): PB_MSG.MsgSvrLogin;

        /**
         * Creates a plain object from a MsgSvrLogin message. Also converts values to other types if specified.
         * @param message MsgSvrLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB_MSG.MsgSvrLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgSvrLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgGameType. */
    interface IMsgGameType {

        /** MsgGameType Type */
        Type?: (string|null);

        /** MsgGameType Max */
        Max?: (number|null);

        /** MsgGameType Curr */
        Curr?: (number|null);
    }

    /** Represents a MsgGameType. */
    class MsgGameType implements IMsgGameType {

        /**
         * Constructs a new MsgGameType.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_MSG.IMsgGameType);

        /** MsgGameType Type. */
        public Type: string;

        /** MsgGameType Max. */
        public Max: number;

        /** MsgGameType Curr. */
        public Curr: number;

        /**
         * Creates a new MsgGameType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGameType instance
         */
        public static create(properties?: PB_MSG.IMsgGameType): PB_MSG.MsgGameType;

        /**
         * Encodes the specified MsgGameType message. Does not implicitly {@link PB_MSG.MsgGameType.verify|verify} messages.
         * @param message MsgGameType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB_MSG.IMsgGameType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgGameType message, length delimited. Does not implicitly {@link PB_MSG.MsgGameType.verify|verify} messages.
         * @param message MsgGameType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB_MSG.IMsgGameType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgGameType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB_MSG.MsgGameType;

        /**
         * Decodes a MsgGameType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB_MSG.MsgGameType;

        /**
         * Verifies a MsgGameType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGameType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGameType
         */
        public static fromObject(object: { [k: string]: any }): PB_MSG.MsgGameType;

        /**
         * Creates a plain object from a MsgGameType message. Also converts values to other types if specified.
         * @param message MsgGameType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB_MSG.MsgGameType, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGameType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgServiceInfo. */
    interface IMsgServiceInfo {

        /** MsgServiceInfo RoomList */
        RoomList?: (PB_MSG.IMsgGameType[]|null);

        /** MsgServiceInfo MaxPlayer */
        MaxPlayer?: (number|null);

        /** MsgServiceInfo CurrPlayer */
        CurrPlayer?: (number|null);

        /** MsgServiceInfo ServiceID */
        ServiceID?: (number|null);

        /** MsgServiceInfo ServiceName */
        ServiceName?: (string|null);
    }

    /** Represents a MsgServiceInfo. */
    class MsgServiceInfo implements IMsgServiceInfo {

        /**
         * Constructs a new MsgServiceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_MSG.IMsgServiceInfo);

        /** MsgServiceInfo RoomList. */
        public RoomList: PB_MSG.IMsgGameType[];

        /** MsgServiceInfo MaxPlayer. */
        public MaxPlayer: number;

        /** MsgServiceInfo CurrPlayer. */
        public CurrPlayer: number;

        /** MsgServiceInfo ServiceID. */
        public ServiceID: number;

        /** MsgServiceInfo ServiceName. */
        public ServiceName: string;

        /**
         * Creates a new MsgServiceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgServiceInfo instance
         */
        public static create(properties?: PB_MSG.IMsgServiceInfo): PB_MSG.MsgServiceInfo;

        /**
         * Encodes the specified MsgServiceInfo message. Does not implicitly {@link PB_MSG.MsgServiceInfo.verify|verify} messages.
         * @param message MsgServiceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB_MSG.IMsgServiceInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgServiceInfo message, length delimited. Does not implicitly {@link PB_MSG.MsgServiceInfo.verify|verify} messages.
         * @param message MsgServiceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB_MSG.IMsgServiceInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgServiceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB_MSG.MsgServiceInfo;

        /**
         * Decodes a MsgServiceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgServiceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB_MSG.MsgServiceInfo;

        /**
         * Verifies a MsgServiceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgServiceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgServiceInfo
         */
        public static fromObject(object: { [k: string]: any }): PB_MSG.MsgServiceInfo;

        /**
         * Creates a plain object from a MsgServiceInfo message. Also converts values to other types if specified.
         * @param message MsgServiceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB_MSG.MsgServiceInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgServiceInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

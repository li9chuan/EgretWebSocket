type Long = protobuf.Long;

/** Namespace PB. */
declare namespace PB {

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

    /** TCardsType enum. */
    enum TCardsType {
        CardsNone = 0,
        CardsSpade = 1,
        CardsHearts = 2,
        CardsPlumBlossom = 3,
        CardsDiamond = 4
    }

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
        constructor(properties?: PB.IMsgLogin);

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
        public static create(properties?: PB.IMsgLogin): PB.MsgLogin;

        /**
         * Encodes the specified MsgLogin message. Does not implicitly {@link PB.MsgLogin.verify|verify} messages.
         * @param message MsgLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgLogin message, length delimited. Does not implicitly {@link PB.MsgLogin.verify|verify} messages.
         * @param message MsgLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgLogin;

        /**
         * Decodes a MsgLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgLogin;

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
        public static fromObject(object: { [k: string]: any }): PB.MsgLogin;

        /**
         * Creates a plain object from a MsgLogin message. Also converts values to other types if specified.
         * @param message MsgLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: PB.IMsgPlayerInfo);

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
        public static create(properties?: PB.IMsgPlayerInfo): PB.MsgPlayerInfo;

        /**
         * Encodes the specified MsgPlayerInfo message. Does not implicitly {@link PB.MsgPlayerInfo.verify|verify} messages.
         * @param message MsgPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgPlayerInfo message, length delimited. Does not implicitly {@link PB.MsgPlayerInfo.verify|verify} messages.
         * @param message MsgPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgPlayerInfo;

        /**
         * Decodes a MsgPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgPlayerInfo;

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
        public static fromObject(object: { [k: string]: any }): PB.MsgPlayerInfo;

        /**
         * Creates a plain object from a MsgPlayerInfo message. Also converts values to other types if specified.
         * @param message MsgPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCreatePrivateRoom. */
    interface IMsgCreatePrivateRoom {

        /** MsgCreatePrivateRoom roomType */
        roomType?: (string|null);
    }

    /** Represents a MsgCreatePrivateRoom. */
    class MsgCreatePrivateRoom implements IMsgCreatePrivateRoom {

        /**
         * Constructs a new MsgCreatePrivateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgCreatePrivateRoom);

        /** MsgCreatePrivateRoom roomType. */
        public roomType: string;

        /**
         * Creates a new MsgCreatePrivateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCreatePrivateRoom instance
         */
        public static create(properties?: PB.IMsgCreatePrivateRoom): PB.MsgCreatePrivateRoom;

        /**
         * Encodes the specified MsgCreatePrivateRoom message. Does not implicitly {@link PB.MsgCreatePrivateRoom.verify|verify} messages.
         * @param message MsgCreatePrivateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgCreatePrivateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgCreatePrivateRoom message, length delimited. Does not implicitly {@link PB.MsgCreatePrivateRoom.verify|verify} messages.
         * @param message MsgCreatePrivateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgCreatePrivateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgCreatePrivateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgCreatePrivateRoom;

        /**
         * Decodes a MsgCreatePrivateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgCreatePrivateRoom;

        /**
         * Verifies a MsgCreatePrivateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgCreatePrivateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgCreatePrivateRoom
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgCreatePrivateRoom;

        /**
         * Creates a plain object from a MsgCreatePrivateRoom message. Also converts values to other types if specified.
         * @param message MsgCreatePrivateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgCreatePrivateRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgCreatePrivateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgEnterPrivateRoom. */
    interface IMsgEnterPrivateRoom {

        /** MsgEnterPrivateRoom roomId */
        roomId?: (number|Long|null);

        /** MsgEnterPrivateRoom roomType */
        roomType?: (string|null);

        /** MsgEnterPrivateRoom appName */
        appName?: (string|null);

        /** MsgEnterPrivateRoom gameVersione */
        gameVersione?: (number|null);
    }

    /** Represents a MsgEnterPrivateRoom. */
    class MsgEnterPrivateRoom implements IMsgEnterPrivateRoom {

        /**
         * Constructs a new MsgEnterPrivateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgEnterPrivateRoom);

        /** MsgEnterPrivateRoom roomId. */
        public roomId: (number|Long);

        /** MsgEnterPrivateRoom roomType. */
        public roomType: string;

        /** MsgEnterPrivateRoom appName. */
        public appName: string;

        /** MsgEnterPrivateRoom gameVersione. */
        public gameVersione: number;

        /**
         * Creates a new MsgEnterPrivateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgEnterPrivateRoom instance
         */
        public static create(properties?: PB.IMsgEnterPrivateRoom): PB.MsgEnterPrivateRoom;

        /**
         * Encodes the specified MsgEnterPrivateRoom message. Does not implicitly {@link PB.MsgEnterPrivateRoom.verify|verify} messages.
         * @param message MsgEnterPrivateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgEnterPrivateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgEnterPrivateRoom message, length delimited. Does not implicitly {@link PB.MsgEnterPrivateRoom.verify|verify} messages.
         * @param message MsgEnterPrivateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgEnterPrivateRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgEnterPrivateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgEnterPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgEnterPrivateRoom;

        /**
         * Decodes a MsgEnterPrivateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgEnterPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgEnterPrivateRoom;

        /**
         * Verifies a MsgEnterPrivateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgEnterPrivateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgEnterPrivateRoom
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgEnterPrivateRoom;

        /**
         * Creates a plain object from a MsgEnterPrivateRoom message. Also converts values to other types if specified.
         * @param message MsgEnterPrivateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgEnterPrivateRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgEnterPrivateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCard. */
    interface IMsgCard {

        /** MsgCard card */
        card?: (number|null);
    }

    /** Represents a MsgCard. */
    class MsgCard implements IMsgCard {

        /**
         * Constructs a new MsgCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgCard);

        /** MsgCard card. */
        public card: number;

        /**
         * Creates a new MsgCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCard instance
         */
        public static create(properties?: PB.IMsgCard): PB.MsgCard;

        /**
         * Encodes the specified MsgCard message. Does not implicitly {@link PB.MsgCard.verify|verify} messages.
         * @param message MsgCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgCard message, length delimited. Does not implicitly {@link PB.MsgCard.verify|verify} messages.
         * @param message MsgCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgCard;

        /**
         * Decodes a MsgCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgCard;

        /**
         * Verifies a MsgCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgCard
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgCard;

        /**
         * Creates a plain object from a MsgCard message. Also converts values to other types if specified.
         * @param message MsgCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgCard, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCards. */
    interface IMsgCards {

        /** MsgCards cards */
        cards?: (number[]|null);
    }

    /** Represents a MsgCards. */
    class MsgCards implements IMsgCards {

        /**
         * Constructs a new MsgCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgCards);

        /** MsgCards cards. */
        public cards: number[];

        /**
         * Creates a new MsgCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCards instance
         */
        public static create(properties?: PB.IMsgCards): PB.MsgCards;

        /**
         * Encodes the specified MsgCards message. Does not implicitly {@link PB.MsgCards.verify|verify} messages.
         * @param message MsgCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgCards message, length delimited. Does not implicitly {@link PB.MsgCards.verify|verify} messages.
         * @param message MsgCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgCards;

        /**
         * Decodes a MsgCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgCards;

        /**
         * Verifies a MsgCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgCards
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgCards;

        /**
         * Creates a plain object from a MsgCards message. Also converts values to other types if specified.
         * @param message MsgCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgCards, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgInt. */
    interface IMsgInt {

        /** MsgInt value */
        value?: (number|Long|null);
    }

    /** Represents a MsgInt. */
    class MsgInt implements IMsgInt {

        /**
         * Constructs a new MsgInt.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgInt);

        /** MsgInt value. */
        public value: (number|Long);

        /**
         * Creates a new MsgInt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgInt instance
         */
        public static create(properties?: PB.IMsgInt): PB.MsgInt;

        /**
         * Encodes the specified MsgInt message. Does not implicitly {@link PB.MsgInt.verify|verify} messages.
         * @param message MsgInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgInt message, length delimited. Does not implicitly {@link PB.MsgInt.verify|verify} messages.
         * @param message MsgInt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgInt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgInt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgInt;

        /**
         * Decodes a MsgInt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgInt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgInt;

        /**
         * Verifies a MsgInt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgInt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgInt
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgInt;

        /**
         * Creates a plain object from a MsgInt message. Also converts values to other types if specified.
         * @param message MsgInt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgInt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgInt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgBool. */
    interface IMsgBool {

        /** MsgBool value */
        value?: (boolean|null);
    }

    /** Represents a MsgBool. */
    class MsgBool implements IMsgBool {

        /**
         * Constructs a new MsgBool.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgBool);

        /** MsgBool value. */
        public value: boolean;

        /**
         * Creates a new MsgBool instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBool instance
         */
        public static create(properties?: PB.IMsgBool): PB.MsgBool;

        /**
         * Encodes the specified MsgBool message. Does not implicitly {@link PB.MsgBool.verify|verify} messages.
         * @param message MsgBool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgBool, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgBool message, length delimited. Does not implicitly {@link PB.MsgBool.verify|verify} messages.
         * @param message MsgBool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgBool, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgBool message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgBool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgBool;

        /**
         * Decodes a MsgBool message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgBool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgBool;

        /**
         * Verifies a MsgBool message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgBool message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgBool
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgBool;

        /**
         * Creates a plain object from a MsgBool message. Also converts values to other types if specified.
         * @param message MsgBool
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgBool, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgBool to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgString. */
    interface IMsgString {

        /** MsgString str */
        str?: (string|null);
    }

    /** Represents a MsgString. */
    class MsgString implements IMsgString {

        /**
         * Constructs a new MsgString.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgString);

        /** MsgString str. */
        public str: string;

        /**
         * Creates a new MsgString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgString instance
         */
        public static create(properties?: PB.IMsgString): PB.MsgString;

        /**
         * Encodes the specified MsgString message. Does not implicitly {@link PB.MsgString.verify|verify} messages.
         * @param message MsgString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgString message, length delimited. Does not implicitly {@link PB.MsgString.verify|verify} messages.
         * @param message MsgString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgString, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgString;

        /**
         * Decodes a MsgString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgString;

        /**
         * Verifies a MsgString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgString message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgString
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgString;

        /**
         * Creates a plain object from a MsgString message. Also converts values to other types if specified.
         * @param message MsgString
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgString, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgString to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgError. */
    interface IMsgError {

        /** MsgError errno */
        errno?: (number|null);

        /** MsgError value */
        value?: (number|Long|null);
    }

    /** Represents a MsgError. */
    class MsgError implements IMsgError {

        /**
         * Constructs a new MsgError.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgError);

        /** MsgError errno. */
        public errno: number;

        /** MsgError value. */
        public value: (number|Long);

        /**
         * Creates a new MsgError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgError instance
         */
        public static create(properties?: PB.IMsgError): PB.MsgError;

        /**
         * Encodes the specified MsgError message. Does not implicitly {@link PB.MsgError.verify|verify} messages.
         * @param message MsgError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgError message, length delimited. Does not implicitly {@link PB.MsgError.verify|verify} messages.
         * @param message MsgError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgError;

        /**
         * Decodes a MsgError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgError;

        /**
         * Verifies a MsgError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgError
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgError;

        /**
         * Creates a plain object from a MsgError message. Also converts values to other types if specified.
         * @param message MsgError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgError, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TDDZPlayerWik enum. */
    enum TDDZPlayerWik {
        ASK_DDZ_NULL = 1,
        ASK_DDZ_TISHI = 2,
        ASK_DDZ_BUCHU = 3,
        ASK_DDZ_CHUPAI = 4,
        ASK_DDZ_DIZHU_MINGPAI = 5
    }

    /** TDDZPlayerState enum. */
    enum TDDZPlayerState {
        STATE_DDZ_READY = 1,
        STATE_DDZ_GUOPAI = 2,
        STATE_DDZ_CHUNTIAN = 3,
        STATE_DDZ_NEWROLE = 4,
        STATE_DDZ_ROOM_OWNER = 5,
        STATE_DDZ_RELIEVE = 6,
        STATE_DDZ_LEAVE = 7,
        STATE_DDZ_LIMIT = 8,
        STATE_DDZ_OFFLINE = 9,
        STATE_DDZ_MINGPAI = 10,
        STATE_DDZ_DIZHU = 11,
        STATE_DDZ_NONGMING = 12,
        STATE_DDZ_JIABEI = 13,
        STATE_DDZ_QIANGDIZHU = 14,
        STATE_DDZ_SELECT_JIABEI = 15,
        STATE_DDZ_SELECT_MINGPAISTART = 16,
        STATE_DDZ_FENGDING = 17,
        STATE_DDZ_CONTINUE_GAME = 18
    }

    /** TDDZState enum. */
    enum TDDZState {
        TDDZStateWait = 0,
        TDDZStateCheckStartGame = 1,
        TDDZStateSelectMingCardStart = 2,
        TDDZStateStartGame = 3,
        TDDZStateSendCard = 4,
        TDDZStateQiangDiZhu = 5,
        TDDZStateSelectAddTimes = 6,
        TDDZStateAction = 7,
        TDDZStateOutCard = 8,
        TDDZStateShowDown = 9,
        TDDZStateRelieveRoom = 10
    }

    /** TDDZCT enum. */
    enum TDDZCT {
        CT_DDZ_ERROR = 0,
        CT_DDZ_SINGLE = 1,
        CT_DDZ_DOUBLE = 2,
        CT_DDZ_THREE_TIAO = 3,
        CT_DDZ_THREE_TIAO_WITH_ONE = 4,
        CT_DDZ_THREE_TIAO_WITH_YIDUI = 5,
        CT_DDZ_SHUN_ZI = 6,
        CT_DDZ_LIAN_DUI = 7,
        CT_DDZ_FEIJI_WITH_NULL = 8,
        CT_DDZ_FEIJI_WITH_ONE = 9,
        CT_DDZ_FEIJI_WITH_YIDUI = 10,
        CT_DDZ_FOUR_WITHDOUBLE = 11,
        CT_DDZ_FOUR_LIANGDUI = 12,
        CT_DDZ_ZHADAN_SIZHANG = 13,
        CT_DDZ_HUOJIAN = 14
    }

    /** TDDZBottomType enum. */
    enum TDDZBottomType {
        DDZ_BT_NULL = 0,
        DDZ_BT_XIAO_KING = 1,
        DDZ_BT_DA_KING = 2,
        DDZ_BT_DUIZI = 3,
        DDZ_BT_TONGHUA = 4,
        DDZ_BT_SHUNZI = 5,
        DDZ_BT_SANZHANG = 6,
        DDZ_BT_TONGHUASHUN = 7
    }

    /** TDDZQiangDiZhu enum. */
    enum TDDZQiangDiZhu {
        DDZ_QDZ_JIAODIZHU = 1,
        DDZ_QDZ_BUJIAO = 2,
        DDZ_QDZ_QIANGDIZHU = 4,
        DDZ_QDZ_BUQIANG = 8
    }

    /** TDDZJiaoFen enum. */
    enum TDDZJiaoFen {
        DDZ_JF_BUJIAO = 1,
        DDZ_JF_JIAO_ONE = 2,
        DDZ_JF_JIAO_TWO = 4,
        DDZ_JF_JIAO_THREE = 8
    }

    /** TDDZAddTimes enum. */
    enum TDDZAddTimes {
        DDZ_AT_NULL = 0,
        DDZ_AT_BUJIABIE = 1,
        DDZ_AT_JIABIE = 2
    }

    /** TDDZMingPaiType enum. */
    enum TDDZMingPaiType {
        DDZ_MP_NULL = 0,
        DDZ_MP_NORMALSTART = 1,
        DDZ_MP_MINGPAISTART = 2
    }

    /** Properties of a MsgQiangDiZhu. */
    interface IMsgQiangDiZhu {

        /** MsgQiangDiZhu playid */
        playid?: (number|Long|null);

        /** MsgQiangDiZhu qingdizhuWiki */
        qingdizhuWiki?: (number|Long|null);
    }

    /** Represents a MsgQiangDiZhu. */
    class MsgQiangDiZhu implements IMsgQiangDiZhu {

        /**
         * Constructs a new MsgQiangDiZhu.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgQiangDiZhu);

        /** MsgQiangDiZhu playid. */
        public playid: (number|Long);

        /** MsgQiangDiZhu qingdizhuWiki. */
        public qingdizhuWiki: (number|Long);

        /**
         * Creates a new MsgQiangDiZhu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgQiangDiZhu instance
         */
        public static create(properties?: PB.IMsgQiangDiZhu): PB.MsgQiangDiZhu;

        /**
         * Encodes the specified MsgQiangDiZhu message. Does not implicitly {@link PB.MsgQiangDiZhu.verify|verify} messages.
         * @param message MsgQiangDiZhu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgQiangDiZhu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgQiangDiZhu message, length delimited. Does not implicitly {@link PB.MsgQiangDiZhu.verify|verify} messages.
         * @param message MsgQiangDiZhu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgQiangDiZhu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgQiangDiZhu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgQiangDiZhu;

        /**
         * Decodes a MsgQiangDiZhu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgQiangDiZhu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgQiangDiZhu;

        /**
         * Verifies a MsgQiangDiZhu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgQiangDiZhu message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgQiangDiZhu
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgQiangDiZhu;

        /**
         * Creates a plain object from a MsgQiangDiZhu message. Also converts values to other types if specified.
         * @param message MsgQiangDiZhu
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgQiangDiZhu, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgQiangDiZhu to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgQiangDiZhuResult. */
    interface IMsgQiangDiZhuResult {

        /** MsgQiangDiZhuResult playid */
        playid?: (number|Long|null);

        /** MsgQiangDiZhuResult result */
        result?: (number|Long|null);

        /** MsgQiangDiZhuResult state */
        state?: (number|Long|null);

        /** MsgQiangDiZhuResult dizhuCard */
        dizhuCard?: (PB.IMsgCards[]|null);

        /** MsgQiangDiZhuResult CardCount */
        CardCount?: (number|Long|null);

        /** MsgQiangDiZhuResult multiple */
        multiple?: (number|Long|null);
    }

    /** Represents a MsgQiangDiZhuResult. */
    class MsgQiangDiZhuResult implements IMsgQiangDiZhuResult {

        /**
         * Constructs a new MsgQiangDiZhuResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgQiangDiZhuResult);

        /** MsgQiangDiZhuResult playid. */
        public playid: (number|Long);

        /** MsgQiangDiZhuResult result. */
        public result: (number|Long);

        /** MsgQiangDiZhuResult state. */
        public state: (number|Long);

        /** MsgQiangDiZhuResult dizhuCard. */
        public dizhuCard: PB.IMsgCards[];

        /** MsgQiangDiZhuResult CardCount. */
        public CardCount: (number|Long);

        /** MsgQiangDiZhuResult multiple. */
        public multiple: (number|Long);

        /**
         * Creates a new MsgQiangDiZhuResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgQiangDiZhuResult instance
         */
        public static create(properties?: PB.IMsgQiangDiZhuResult): PB.MsgQiangDiZhuResult;

        /**
         * Encodes the specified MsgQiangDiZhuResult message. Does not implicitly {@link PB.MsgQiangDiZhuResult.verify|verify} messages.
         * @param message MsgQiangDiZhuResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgQiangDiZhuResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgQiangDiZhuResult message, length delimited. Does not implicitly {@link PB.MsgQiangDiZhuResult.verify|verify} messages.
         * @param message MsgQiangDiZhuResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgQiangDiZhuResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgQiangDiZhuResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgQiangDiZhuResult;

        /**
         * Decodes a MsgQiangDiZhuResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgQiangDiZhuResult;

        /**
         * Verifies a MsgQiangDiZhuResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgQiangDiZhuResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgQiangDiZhuResult
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgQiangDiZhuResult;

        /**
         * Creates a plain object from a MsgQiangDiZhuResult message. Also converts values to other types if specified.
         * @param message MsgQiangDiZhuResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgQiangDiZhuResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgQiangDiZhuResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgBRQiangDiZhuResult. */
    interface IMsgBRQiangDiZhuResult {

        /** MsgBRQiangDiZhuResult playerList */
        playerList?: (PB.IMsgQiangDiZhuResult[]|null);

        /** MsgBRQiangDiZhuResult multiple */
        multiple?: (number|Long|null);

        /** MsgBRQiangDiZhuResult dipaiMultiList */
        dipaiMultiList?: (PB.IMsgDiPaiMutiple[]|null);
    }

    /** Represents a MsgBRQiangDiZhuResult. */
    class MsgBRQiangDiZhuResult implements IMsgBRQiangDiZhuResult {

        /**
         * Constructs a new MsgBRQiangDiZhuResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgBRQiangDiZhuResult);

        /** MsgBRQiangDiZhuResult playerList. */
        public playerList: PB.IMsgQiangDiZhuResult[];

        /** MsgBRQiangDiZhuResult multiple. */
        public multiple: (number|Long);

        /** MsgBRQiangDiZhuResult dipaiMultiList. */
        public dipaiMultiList: PB.IMsgDiPaiMutiple[];

        /**
         * Creates a new MsgBRQiangDiZhuResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBRQiangDiZhuResult instance
         */
        public static create(properties?: PB.IMsgBRQiangDiZhuResult): PB.MsgBRQiangDiZhuResult;

        /**
         * Encodes the specified MsgBRQiangDiZhuResult message. Does not implicitly {@link PB.MsgBRQiangDiZhuResult.verify|verify} messages.
         * @param message MsgBRQiangDiZhuResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgBRQiangDiZhuResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgBRQiangDiZhuResult message, length delimited. Does not implicitly {@link PB.MsgBRQiangDiZhuResult.verify|verify} messages.
         * @param message MsgBRQiangDiZhuResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgBRQiangDiZhuResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgBRQiangDiZhuResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgBRQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgBRQiangDiZhuResult;

        /**
         * Decodes a MsgBRQiangDiZhuResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgBRQiangDiZhuResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgBRQiangDiZhuResult;

        /**
         * Verifies a MsgBRQiangDiZhuResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgBRQiangDiZhuResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgBRQiangDiZhuResult
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgBRQiangDiZhuResult;

        /**
         * Creates a plain object from a MsgBRQiangDiZhuResult message. Also converts values to other types if specified.
         * @param message MsgBRQiangDiZhuResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgBRQiangDiZhuResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgBRQiangDiZhuResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDiPaiMutiple. */
    interface IMsgDiPaiMutiple {

        /** MsgDiPaiMutiple eventId */
        eventId?: (number|null);

        /** MsgDiPaiMutiple count */
        count?: (number|null);
    }

    /** Represents a MsgDiPaiMutiple. */
    class MsgDiPaiMutiple implements IMsgDiPaiMutiple {

        /**
         * Constructs a new MsgDiPaiMutiple.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDiPaiMutiple);

        /** MsgDiPaiMutiple eventId. */
        public eventId: number;

        /** MsgDiPaiMutiple count. */
        public count: number;

        /**
         * Creates a new MsgDiPaiMutiple instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDiPaiMutiple instance
         */
        public static create(properties?: PB.IMsgDiPaiMutiple): PB.MsgDiPaiMutiple;

        /**
         * Encodes the specified MsgDiPaiMutiple message. Does not implicitly {@link PB.MsgDiPaiMutiple.verify|verify} messages.
         * @param message MsgDiPaiMutiple message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDiPaiMutiple, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDiPaiMutiple message, length delimited. Does not implicitly {@link PB.MsgDiPaiMutiple.verify|verify} messages.
         * @param message MsgDiPaiMutiple message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDiPaiMutiple, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDiPaiMutiple message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDiPaiMutiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDiPaiMutiple;

        /**
         * Decodes a MsgDiPaiMutiple message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDiPaiMutiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDiPaiMutiple;

        /**
         * Verifies a MsgDiPaiMutiple message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDiPaiMutiple message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDiPaiMutiple
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDiPaiMutiple;

        /**
         * Creates a plain object from a MsgDiPaiMutiple message. Also converts values to other types if specified.
         * @param message MsgDiPaiMutiple
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDiPaiMutiple, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDiPaiMutiple to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgMingPaiResult. */
    interface IMsgMingPaiResult {

        /** MsgMingPaiResult playid */
        playid?: (number|Long|null);

        /** MsgMingPaiResult result */
        result?: (number|Long|null);

        /** MsgMingPaiResult state */
        state?: (number|Long|null);

        /** MsgMingPaiResult dizhuCard */
        dizhuCard?: (PB.IMsgCards|null);

        /** MsgMingPaiResult multiple */
        multiple?: (number|Long|null);
    }

    /** Represents a MsgMingPaiResult. */
    class MsgMingPaiResult implements IMsgMingPaiResult {

        /**
         * Constructs a new MsgMingPaiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgMingPaiResult);

        /** MsgMingPaiResult playid. */
        public playid: (number|Long);

        /** MsgMingPaiResult result. */
        public result: (number|Long);

        /** MsgMingPaiResult state. */
        public state: (number|Long);

        /** MsgMingPaiResult dizhuCard. */
        public dizhuCard?: (PB.IMsgCards|null);

        /** MsgMingPaiResult multiple. */
        public multiple: (number|Long);

        /**
         * Creates a new MsgMingPaiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMingPaiResult instance
         */
        public static create(properties?: PB.IMsgMingPaiResult): PB.MsgMingPaiResult;

        /**
         * Encodes the specified MsgMingPaiResult message. Does not implicitly {@link PB.MsgMingPaiResult.verify|verify} messages.
         * @param message MsgMingPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgMingPaiResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgMingPaiResult message, length delimited. Does not implicitly {@link PB.MsgMingPaiResult.verify|verify} messages.
         * @param message MsgMingPaiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgMingPaiResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgMingPaiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgMingPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgMingPaiResult;

        /**
         * Decodes a MsgMingPaiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgMingPaiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgMingPaiResult;

        /**
         * Verifies a MsgMingPaiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgMingPaiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgMingPaiResult
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgMingPaiResult;

        /**
         * Creates a plain object from a MsgMingPaiResult message. Also converts values to other types if specified.
         * @param message MsgMingPaiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgMingPaiResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgMingPaiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgJiaBeiResult. */
    interface IMsgJiaBeiResult {

        /** MsgJiaBeiResult playid */
        playid?: (number|Long|null);

        /** MsgJiaBeiResult result */
        result?: (number|Long|null);

        /** MsgJiaBeiResult state */
        state?: (number|Long|null);
    }

    /** Represents a MsgJiaBeiResult. */
    class MsgJiaBeiResult implements IMsgJiaBeiResult {

        /**
         * Constructs a new MsgJiaBeiResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgJiaBeiResult);

        /** MsgJiaBeiResult playid. */
        public playid: (number|Long);

        /** MsgJiaBeiResult result. */
        public result: (number|Long);

        /** MsgJiaBeiResult state. */
        public state: (number|Long);

        /**
         * Creates a new MsgJiaBeiResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgJiaBeiResult instance
         */
        public static create(properties?: PB.IMsgJiaBeiResult): PB.MsgJiaBeiResult;

        /**
         * Encodes the specified MsgJiaBeiResult message. Does not implicitly {@link PB.MsgJiaBeiResult.verify|verify} messages.
         * @param message MsgJiaBeiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgJiaBeiResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgJiaBeiResult message, length delimited. Does not implicitly {@link PB.MsgJiaBeiResult.verify|verify} messages.
         * @param message MsgJiaBeiResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgJiaBeiResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgJiaBeiResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgJiaBeiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgJiaBeiResult;

        /**
         * Decodes a MsgJiaBeiResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgJiaBeiResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgJiaBeiResult;

        /**
         * Verifies a MsgJiaBeiResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgJiaBeiResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgJiaBeiResult
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgJiaBeiResult;

        /**
         * Creates a plain object from a MsgJiaBeiResult message. Also converts values to other types if specified.
         * @param message MsgJiaBeiResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgJiaBeiResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgJiaBeiResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZPlayer. */
    interface IMsgDDZPlayer {

        /** MsgDDZPlayer playerBase */
        playerBase?: (PB.IMsgPlayerInfo|null);

        /** MsgDDZPlayer state */
        state?: (number|null);

        /** MsgDDZPlayer handCount */
        handCount?: (number|null);

        /** MsgDDZPlayer cardList */
        cardList?: (PB.IMsgCards|null);

        /** MsgDDZPlayer seats */
        seats?: (number|null);

        /** MsgDDZPlayer score */
        score?: (number|Long|null);

        /** MsgDDZPlayer showDownScore */
        showDownScore?: (number|Long|null);

        /** MsgDDZPlayer qingdizhuWiki */
        qingdizhuWiki?: (number|null);

        /** MsgDDZPlayer qingdizhuValue */
        qingdizhuValue?: (number|null);

        /** MsgDDZPlayer multiple */
        multiple?: (number|null);

        /** MsgDDZPlayer integralNum */
        integralNum?: (number|null);

        /** MsgDDZPlayer outCard */
        outCard?: (PB.IMsgCards|null);

        /** MsgDDZPlayer outType */
        outType?: (number|null);
    }

    /** Represents a MsgDDZPlayer. */
    class MsgDDZPlayer implements IMsgDDZPlayer {

        /**
         * Constructs a new MsgDDZPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZPlayer);

        /** MsgDDZPlayer playerBase. */
        public playerBase?: (PB.IMsgPlayerInfo|null);

        /** MsgDDZPlayer state. */
        public state: number;

        /** MsgDDZPlayer handCount. */
        public handCount: number;

        /** MsgDDZPlayer cardList. */
        public cardList?: (PB.IMsgCards|null);

        /** MsgDDZPlayer seats. */
        public seats: number;

        /** MsgDDZPlayer score. */
        public score: (number|Long);

        /** MsgDDZPlayer showDownScore. */
        public showDownScore: (number|Long);

        /** MsgDDZPlayer qingdizhuWiki. */
        public qingdizhuWiki: number;

        /** MsgDDZPlayer qingdizhuValue. */
        public qingdizhuValue: number;

        /** MsgDDZPlayer multiple. */
        public multiple: number;

        /** MsgDDZPlayer integralNum. */
        public integralNum: number;

        /** MsgDDZPlayer outCard. */
        public outCard?: (PB.IMsgCards|null);

        /** MsgDDZPlayer outType. */
        public outType: number;

        /**
         * Creates a new MsgDDZPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZPlayer instance
         */
        public static create(properties?: PB.IMsgDDZPlayer): PB.MsgDDZPlayer;

        /**
         * Encodes the specified MsgDDZPlayer message. Does not implicitly {@link PB.MsgDDZPlayer.verify|verify} messages.
         * @param message MsgDDZPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZPlayer message, length delimited. Does not implicitly {@link PB.MsgDDZPlayer.verify|verify} messages.
         * @param message MsgDDZPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZPlayer;

        /**
         * Decodes a MsgDDZPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZPlayer;

        /**
         * Verifies a MsgDDZPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZPlayer
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZPlayer;

        /**
         * Creates a plain object from a MsgDDZPlayer message. Also converts values to other types if specified.
         * @param message MsgDDZPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZPlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZActon. */
    interface IMsgDDZActon {

        /** MsgDDZActon newActionid */
        newActionid?: (number|Long|null);

        /** MsgDDZActon oldActionid */
        oldActionid?: (number|Long|null);

        /** MsgDDZActon lastOutCard */
        lastOutCard?: (PB.IMsgCards|null);

        /** MsgDDZActon lastOutType */
        lastOutType?: (number|null);

        /** MsgDDZActon wik */
        wik?: (PB.TDDZPlayerWik|null);

        /** MsgDDZActon playerList */
        playerList?: (PB.IMsgDDZPlayer[]|null);
    }

    /** Represents a MsgDDZActon. */
    class MsgDDZActon implements IMsgDDZActon {

        /**
         * Constructs a new MsgDDZActon.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZActon);

        /** MsgDDZActon newActionid. */
        public newActionid: (number|Long);

        /** MsgDDZActon oldActionid. */
        public oldActionid: (number|Long);

        /** MsgDDZActon lastOutCard. */
        public lastOutCard?: (PB.IMsgCards|null);

        /** MsgDDZActon lastOutType. */
        public lastOutType: number;

        /** MsgDDZActon wik. */
        public wik: PB.TDDZPlayerWik;

        /** MsgDDZActon playerList. */
        public playerList: PB.IMsgDDZPlayer[];

        /**
         * Creates a new MsgDDZActon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZActon instance
         */
        public static create(properties?: PB.IMsgDDZActon): PB.MsgDDZActon;

        /**
         * Encodes the specified MsgDDZActon message. Does not implicitly {@link PB.MsgDDZActon.verify|verify} messages.
         * @param message MsgDDZActon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZActon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZActon message, length delimited. Does not implicitly {@link PB.MsgDDZActon.verify|verify} messages.
         * @param message MsgDDZActon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZActon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZActon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZActon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZActon;

        /**
         * Decodes a MsgDDZActon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZActon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZActon;

        /**
         * Verifies a MsgDDZActon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZActon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZActon
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZActon;

        /**
         * Creates a plain object from a MsgDDZActon message. Also converts values to other types if specified.
         * @param message MsgDDZActon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZActon, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZActon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZUserOutCard. */
    interface IMsgDDZUserOutCard {

        /** MsgDDZUserOutCard oldActionid */
        oldActionid?: (number|Long|null);

        /** MsgDDZUserOutCard outType */
        outType?: (number|null);

        /** MsgDDZUserOutCard handCount */
        handCount?: (number|null);

        /** MsgDDZUserOutCard outCard */
        outCard?: (PB.IMsgCards|null);

        /** MsgDDZUserOutCard multiple */
        multiple?: (number|Long|null);

        /** MsgDDZUserOutCard handCard */
        handCard?: (PB.IMsgCards|null);
    }

    /** Represents a MsgDDZUserOutCard. */
    class MsgDDZUserOutCard implements IMsgDDZUserOutCard {

        /**
         * Constructs a new MsgDDZUserOutCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZUserOutCard);

        /** MsgDDZUserOutCard oldActionid. */
        public oldActionid: (number|Long);

        /** MsgDDZUserOutCard outType. */
        public outType: number;

        /** MsgDDZUserOutCard handCount. */
        public handCount: number;

        /** MsgDDZUserOutCard outCard. */
        public outCard?: (PB.IMsgCards|null);

        /** MsgDDZUserOutCard multiple. */
        public multiple: (number|Long);

        /** MsgDDZUserOutCard handCard. */
        public handCard?: (PB.IMsgCards|null);

        /**
         * Creates a new MsgDDZUserOutCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZUserOutCard instance
         */
        public static create(properties?: PB.IMsgDDZUserOutCard): PB.MsgDDZUserOutCard;

        /**
         * Encodes the specified MsgDDZUserOutCard message. Does not implicitly {@link PB.MsgDDZUserOutCard.verify|verify} messages.
         * @param message MsgDDZUserOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZUserOutCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZUserOutCard message, length delimited. Does not implicitly {@link PB.MsgDDZUserOutCard.verify|verify} messages.
         * @param message MsgDDZUserOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZUserOutCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZUserOutCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZUserOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZUserOutCard;

        /**
         * Decodes a MsgDDZUserOutCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZUserOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZUserOutCard;

        /**
         * Verifies a MsgDDZUserOutCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZUserOutCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZUserOutCard
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZUserOutCard;

        /**
         * Creates a plain object from a MsgDDZUserOutCard message. Also converts values to other types if specified.
         * @param message MsgDDZUserOutCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZUserOutCard, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZUserOutCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZRoom. */
    interface IMsgDDZRoom {

        /** MsgDDZRoom roomState */
        roomState?: (PB.TDDZState|null);

        /** MsgDDZRoom stateTime */
        stateTime?: (number|null);

        /** MsgDDZRoom playerList */
        playerList?: (PB.IMsgDDZPlayer[]|null);

        /** MsgDDZRoom actionId */
        actionId?: (number|Long|null);

        /** MsgDDZRoom roomId */
        roomId?: (number|Long|null);

        /** MsgDDZRoom gameCount */
        gameCount?: (number|null);

        /** MsgDDZRoom privateRoom */
        privateRoom?: (PB.IMsgCreatePrivateRoom|null);

        /** MsgDDZRoom lastOutcard */
        lastOutcard?: (PB.IMsgDDZUserOutCard|null);

        /** MsgDDZRoom wik */
        wik?: (PB.TDDZPlayerWik|null);

        /** MsgDDZRoom bottomCard */
        bottomCard?: (PB.IMsgCards|null);

        /** MsgDDZRoom multiple */
        multiple?: (number|Long|null);

        /** MsgDDZRoom dipaiMultiList */
        dipaiMultiList?: (PB.IMsgDiPaiMutiple[]|null);

        /** MsgDDZRoom roomPayType */
        roomPayType?: (number|null);
    }

    /** Represents a MsgDDZRoom. */
    class MsgDDZRoom implements IMsgDDZRoom {

        /**
         * Constructs a new MsgDDZRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZRoom);

        /** MsgDDZRoom roomState. */
        public roomState: PB.TDDZState;

        /** MsgDDZRoom stateTime. */
        public stateTime: number;

        /** MsgDDZRoom playerList. */
        public playerList: PB.IMsgDDZPlayer[];

        /** MsgDDZRoom actionId. */
        public actionId: (number|Long);

        /** MsgDDZRoom roomId. */
        public roomId: (number|Long);

        /** MsgDDZRoom gameCount. */
        public gameCount: number;

        /** MsgDDZRoom privateRoom. */
        public privateRoom?: (PB.IMsgCreatePrivateRoom|null);

        /** MsgDDZRoom lastOutcard. */
        public lastOutcard?: (PB.IMsgDDZUserOutCard|null);

        /** MsgDDZRoom wik. */
        public wik: PB.TDDZPlayerWik;

        /** MsgDDZRoom bottomCard. */
        public bottomCard?: (PB.IMsgCards|null);

        /** MsgDDZRoom multiple. */
        public multiple: (number|Long);

        /** MsgDDZRoom dipaiMultiList. */
        public dipaiMultiList: PB.IMsgDiPaiMutiple[];

        /** MsgDDZRoom roomPayType. */
        public roomPayType: number;

        /**
         * Creates a new MsgDDZRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZRoom instance
         */
        public static create(properties?: PB.IMsgDDZRoom): PB.MsgDDZRoom;

        /**
         * Encodes the specified MsgDDZRoom message. Does not implicitly {@link PB.MsgDDZRoom.verify|verify} messages.
         * @param message MsgDDZRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZRoom message, length delimited. Does not implicitly {@link PB.MsgDDZRoom.verify|verify} messages.
         * @param message MsgDDZRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZRoom, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZRoom;

        /**
         * Decodes a MsgDDZRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZRoom;

        /**
         * Verifies a MsgDDZRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZRoom
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZRoom;

        /**
         * Creates a plain object from a MsgDDZRoom message. Also converts values to other types if specified.
         * @param message MsgDDZRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZRoomShowDown. */
    interface IMsgDDZRoomShowDown {

        /** MsgDDZRoomShowDown roomState */
        roomState?: (PB.TDDZState|null);

        /** MsgDDZRoomShowDown stateTime */
        stateTime?: (number|null);

        /** MsgDDZRoomShowDown playerList */
        playerList?: (PB.IMsgDDZPlayer[]|null);

        /** MsgDDZRoomShowDown roomId */
        roomId?: (number|Long|null);

        /** MsgDDZRoomShowDown gameCount */
        gameCount?: (number|null);

        /** MsgDDZRoomShowDown time */
        time?: (number|null);

        /** MsgDDZRoomShowDown gameOver */
        gameOver?: (boolean|null);

        /** MsgDDZRoomShowDown eventCount */
        eventCount?: (PB.IMsgDDZShowDownEvent[]|null);

        /** MsgDDZRoomShowDown integralList */
        integralList?: (PB.IMsgDDZIntegralCount[]|null);
    }

    /** Represents a MsgDDZRoomShowDown. */
    class MsgDDZRoomShowDown implements IMsgDDZRoomShowDown {

        /**
         * Constructs a new MsgDDZRoomShowDown.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZRoomShowDown);

        /** MsgDDZRoomShowDown roomState. */
        public roomState: PB.TDDZState;

        /** MsgDDZRoomShowDown stateTime. */
        public stateTime: number;

        /** MsgDDZRoomShowDown playerList. */
        public playerList: PB.IMsgDDZPlayer[];

        /** MsgDDZRoomShowDown roomId. */
        public roomId: (number|Long);

        /** MsgDDZRoomShowDown gameCount. */
        public gameCount: number;

        /** MsgDDZRoomShowDown time. */
        public time: number;

        /** MsgDDZRoomShowDown gameOver. */
        public gameOver: boolean;

        /** MsgDDZRoomShowDown eventCount. */
        public eventCount: PB.IMsgDDZShowDownEvent[];

        /** MsgDDZRoomShowDown integralList. */
        public integralList: PB.IMsgDDZIntegralCount[];

        /**
         * Creates a new MsgDDZRoomShowDown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZRoomShowDown instance
         */
        public static create(properties?: PB.IMsgDDZRoomShowDown): PB.MsgDDZRoomShowDown;

        /**
         * Encodes the specified MsgDDZRoomShowDown message. Does not implicitly {@link PB.MsgDDZRoomShowDown.verify|verify} messages.
         * @param message MsgDDZRoomShowDown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZRoomShowDown, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZRoomShowDown message, length delimited. Does not implicitly {@link PB.MsgDDZRoomShowDown.verify|verify} messages.
         * @param message MsgDDZRoomShowDown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZRoomShowDown, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZRoomShowDown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZRoomShowDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZRoomShowDown;

        /**
         * Decodes a MsgDDZRoomShowDown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZRoomShowDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZRoomShowDown;

        /**
         * Verifies a MsgDDZRoomShowDown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZRoomShowDown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZRoomShowDown
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZRoomShowDown;

        /**
         * Creates a plain object from a MsgDDZRoomShowDown message. Also converts values to other types if specified.
         * @param message MsgDDZRoomShowDown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZRoomShowDown, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZRoomShowDown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZIntegralCount. */
    interface IMsgDDZIntegralCount {

        /** MsgDDZIntegralCount roleid */
        roleid?: (number|Long|null);

        /** MsgDDZIntegralCount count */
        count?: (number|null);
    }

    /** Represents a MsgDDZIntegralCount. */
    class MsgDDZIntegralCount implements IMsgDDZIntegralCount {

        /**
         * Constructs a new MsgDDZIntegralCount.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZIntegralCount);

        /** MsgDDZIntegralCount roleid. */
        public roleid: (number|Long);

        /** MsgDDZIntegralCount count. */
        public count: number;

        /**
         * Creates a new MsgDDZIntegralCount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZIntegralCount instance
         */
        public static create(properties?: PB.IMsgDDZIntegralCount): PB.MsgDDZIntegralCount;

        /**
         * Encodes the specified MsgDDZIntegralCount message. Does not implicitly {@link PB.MsgDDZIntegralCount.verify|verify} messages.
         * @param message MsgDDZIntegralCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZIntegralCount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZIntegralCount message, length delimited. Does not implicitly {@link PB.MsgDDZIntegralCount.verify|verify} messages.
         * @param message MsgDDZIntegralCount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZIntegralCount, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZIntegralCount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZIntegralCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZIntegralCount;

        /**
         * Decodes a MsgDDZIntegralCount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZIntegralCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZIntegralCount;

        /**
         * Verifies a MsgDDZIntegralCount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZIntegralCount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZIntegralCount
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZIntegralCount;

        /**
         * Creates a plain object from a MsgDDZIntegralCount message. Also converts values to other types if specified.
         * @param message MsgDDZIntegralCount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZIntegralCount, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZIntegralCount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgDDZShowDownEvent. */
    interface IMsgDDZShowDownEvent {

        /** MsgDDZShowDownEvent eventId */
        eventId?: (number|null);

        /** MsgDDZShowDownEvent count */
        count?: (number|null);
    }

    /** Represents a MsgDDZShowDownEvent. */
    class MsgDDZShowDownEvent implements IMsgDDZShowDownEvent {

        /**
         * Constructs a new MsgDDZShowDownEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.IMsgDDZShowDownEvent);

        /** MsgDDZShowDownEvent eventId. */
        public eventId: number;

        /** MsgDDZShowDownEvent count. */
        public count: number;

        /**
         * Creates a new MsgDDZShowDownEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDDZShowDownEvent instance
         */
        public static create(properties?: PB.IMsgDDZShowDownEvent): PB.MsgDDZShowDownEvent;

        /**
         * Encodes the specified MsgDDZShowDownEvent message. Does not implicitly {@link PB.MsgDDZShowDownEvent.verify|verify} messages.
         * @param message MsgDDZShowDownEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PB.IMsgDDZShowDownEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgDDZShowDownEvent message, length delimited. Does not implicitly {@link PB.MsgDDZShowDownEvent.verify|verify} messages.
         * @param message MsgDDZShowDownEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PB.IMsgDDZShowDownEvent, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgDDZShowDownEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgDDZShowDownEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PB.MsgDDZShowDownEvent;

        /**
         * Decodes a MsgDDZShowDownEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgDDZShowDownEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PB.MsgDDZShowDownEvent;

        /**
         * Verifies a MsgDDZShowDownEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgDDZShowDownEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgDDZShowDownEvent
         */
        public static fromObject(object: { [k: string]: any }): PB.MsgDDZShowDownEvent;

        /**
         * Creates a plain object from a MsgDDZShowDownEvent message. Also converts values to other types if specified.
         * @param message MsgDDZShowDownEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PB.MsgDDZShowDownEvent, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgDDZShowDownEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace PB_MSG. */
declare namespace PB_MSG {

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

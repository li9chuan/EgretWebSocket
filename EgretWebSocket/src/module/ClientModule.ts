class ClientModule {


	Version:string    	= "1.0";                           		// 当前版本
    Channel:string    	= "REG";                            	// 账号渠道
    AppName:string    	= "WX_5E8A";                    		// 游戏包名
    User:string       	= "admin";       						// 帐号名   openid
	RoomType:string 	= "RM_DDZ";								// 请求进入的游戏名字
	UserInfo:JsonUser 	= new JsonUser();




	public static GetInstance(): ClientModule {
        if (this.__self == null) {
            this.__self = new ClientModule();
        }
        return this.__self;
    }

	private constructor() { }
    private static  __self: ClientModule;
}


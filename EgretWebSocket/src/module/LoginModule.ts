class LoginModule {

	public Init() {
		NetMgr.GetInstance().addEventListener("AuthOk", this.CBAuthOk, this);
	 }
    
	public CBAuthOk() {
		console.log("AuthOk回调，进入大厅场景");
	}




	public static GetInstance(): LoginModule {
        if (this.__self == null) {
            this.__self = new LoginModule();
        }
        return this.__self;
    }

	private constructor() {}
    private static  __self: LoginModule;
}

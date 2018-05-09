
class PlayerDataModule{

	public Init() {
		NetMgr.GetInstance().addEventListener("SyncPlayerInfo", this.CBSyncPlayerInfo, this);
	 }
    
	public CBSyncPlayerInfo( event: NetEvent ) {

        let pb_playerinfo: PB.MsgPlayerInfo = event.msg.rprotobuf(PB.MsgPlayerInfo);


		console.log("SyncPlayerInfo");
        console.log(pb_playerinfo);


        
	}


    public static GetInstance(): PlayerDataModule {
        if (this.__self == null) {
            this.__self = new PlayerDataModule();
        }
        return this.__self;
    }

	private constructor() {

     }
    private static  __self: PlayerDataModule;
}



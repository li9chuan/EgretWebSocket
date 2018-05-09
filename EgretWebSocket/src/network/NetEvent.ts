class NetEvent extends egret.Event {

	//public static Net: string = "NetEvent";

	public msg: Message;

	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}


}
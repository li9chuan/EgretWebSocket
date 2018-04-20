local MsgLogin = class("MsgLogin")

-- 构造函数;
function MsgLogin:ctor( Data )

	self._EventRegister = EventRegister.new();
	
	self._EventRegister:RegisterEvent( ClientService.ConnectCallbackEvent,  	self, self.Connect );
	self._EventRegister:RegisterEvent( ClientService.DisConnectCallbackEvent,   self, self.DisConnect );
	
    --  客户端消息
	self._EventRegister:RegisterEvent( "LOGIN",     self, self.CBLogin );

	
end

function MsgLogin:CBLogin( sock_id, msg_login )


    nlinfo( msg_login:rint32() );
    nlinfo( msg_login:rdouble() );
    nlinfo( msg_login:rstring() );
    nlinfo( msg_login:rint64() );
    nlinfo( msg_login:rint64() );
    
    local pb_login  = msg_login:rstring();
	local tbl_login = protobuf.decode("PB_MSG.MsgLogin", pb_login)
	
	PrintTable(tbl_login);
    
    msg_login:invert();
    
    ClientService:Send( sock_id, msg_login );

end

function MsgLogin:Connect( sock_id )
	print("CallbackClient:Connect"..sock_id);
end

function MsgLogin:DisConnect( sock_id )
	print("CallbackClient:DisConnect"..sock_id);
    ClientMgr:RemoveSockID(sock_id);
end


--释放函数
function MsgLogin:OnRelease()
    self._EventRegister:UnRegisterAllEvent();
end


return MsgLogin;

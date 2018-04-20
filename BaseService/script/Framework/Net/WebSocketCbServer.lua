local WebSocketCbServer = class("WebSocketCbServer")

function WebSocketCbServer:ctor()
	self.Service = nil;
	self.ConnectCallbackEvent = "";
	self.DisConnectCallbackEvent = "";
end

function WebSocketCbServer:Listen( name, port )
	self.ConnectCallbackEvent     = name .. "Connection";
	self.DisConnectCallbackEvent  = name .. "DisConnection";
	
	self.Service = NetworkWebSocket.NewInstance(name, port);
end

function WebSocketCbServer:SetUIDMap( uid, sock_id )
	self.Service:SetUIDMap(uid, sock_id);
end

function WebSocketCbServer:RemoveUIDMap( uid )
	self.Service:RemoveUIDMap(uid);
end

function WebSocketCbServer:Send( sock_id, lua_msg )
	self.Service:Send( sock_id, lua_msg );
end

function WebSocketCbServer:SendPB( sock_id, msg_type, proto_type, proto_msg )
	local code      = protobuf.encode(proto_type, proto_msg);
	local lua_msg   = CMessage(msg_type);
    lua_msg:wstring(code);
	self.Service:Send( sock_id, lua_msg );
end

return WebSocketCbServer


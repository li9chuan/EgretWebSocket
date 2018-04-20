--========================================================= 
-- 加载常用模块
--=========================================================

local BasePath = Utility.GetBasePath() .. "/script/";
package.path = BasePath .. "_FES/?.lua;" .. BasePath .. "SharedLib/?.lua;";

require("InitSharedLib")
require("FrontEndService");
require("Client/ClientMgr");


-- Class
Client      = require("Client/Client");
MsgLogin    = require("Msg/MsgLogin");


ClientService   = WebSocketCbServer:new();
LoginModule     = MsgLogin:new();



-- 主入口函数。从这里开始lua逻辑
function ServiceInit()
	
    print(" =========FES Main Start============ ");
    
    ClientMgr:Init();
    FrontEndService:Init();

    ClientService:Listen( "ClientService", 9999 );

end

-- 游戏循环
function ServiceUpdate()
    TimerMgr:Update(math.floor(os.clock() * 1000))
end

function ServiceRelease()
    print("Lua Release.");
end


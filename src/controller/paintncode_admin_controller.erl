-module(paintncode_admin_controller, [Req]).
-compile (export_all).

index('GET', []) ->
	All 		= boss_db:find(base,	[lang="fr"], 	[{order_by, category}]),
	{ok, [{all, All}]}.

addbase ('POST', []) ->
	
	Action 			= Req:post_param("action"),
	Half 			= Req:post_param("half"),
	Time 			= erlang:localtime(),

	NewInfo 		= infos:new(id, Action, Time, Time, Half),
	{ok, Info}		= NewInfo:save(),
	
	Category 		= Req:post_param("category"),

	Frurl 			= Req:post_param("frurl"),
	Frtitle 		= Req:post_param("frtitle"),
	Frdescription 	= Req:post_param("frdescription"),
	Frcontent 		= Req:post_param("frcontent"),
	Frgenre 		= Req:post_param("frgenre"),

	NewBaseFR		= base:new(id, Info:id(), Category, Frurl, Frtitle, Frdescription, Frcontent, Frgenre, "fr"),
	{ok, BaseFR}	= NewBaseFR:save(),

	Enurl 			= Req:post_param("enurl"),
	Entitle 		= Req:post_param("entitle"),
	Endescription 	= Req:post_param("endescription"),
	Encontent 		= Req:post_param("encontent"),
	Engenre 		= Req:post_param("engenre"),

	NewBaseEN		= base:new(id, Info:id(), Category, Enurl, Entitle, Endescription, Encontent, Engenre, "en"),
	{ok, BaseEN}	= NewBaseEN:save(),

	HasCode	= Req:post_param("hascodedetail"),

	case HasCode of
		"true" -> 
			Repos 		= Req:post_param("coderepository"),
			ProgLang 	= Req:post_param("programminglanguage"),
			Runtime 	= Req:post_param("runtime"),
			Target 		= Req:post_param("targetproduct"),
			Level 		= Req:post_param("level"),
			
			NewCode		= codedetail:new(id, Info:id(), ProgLang, Repos, Target, Runtime, Level),
			{ok, Code}	= NewCode:save();
			
		_ -> pass
	end,

	{redirect, "/admin"}.

edit ('POST', []) ->
	Id 			= Req:post_param("id"),
	Info 		= boss_db:find(Id),
	
	{ok, [{info, Info}]}.

update ('POST', []) ->

	InfoId			= Req:post_param("infoid"),
	Action 			= Req:post_param("infoaction"),
	Half 			= Req:post_param("infohalf"),
	Time 			= erlang:localtime(),

	OldInfo			= boss_db:find(InfoId),
	NewInfo			= OldInfo:set([{action, Action}, {half, Half}, {modification_time, Time}]),
	{ok, Info}		= NewInfo:save(),
	
	Category 		= Req:post_param("category"),

	Frurl 			= Req:post_param("frurl"),
	Frtitle 		= Req:post_param("frtitle"),
	Frdescription 	= Req:post_param("frdescription"),
	Frcontent 		= Req:post_param("frcontent"),
	Frgenre 		= Req:post_param("frgenre"),

	FrId			= Req:post_param("frid"),
	OldBaseFR		= boss_db:find(FrId),
	NewBaseFR		= OldBaseFR:set([{url, Frurl}, {title, Frtitle}, {description, Frdescription}, {content, Frcontent}, {genre, Frgenre}, {category, Category}]),
	{ok, BaseFR}	= NewBaseFR:save(),

	Enurl 			= Req:post_param("enurl"),
	Entitle 		= Req:post_param("entitle"),
	Endescription 	= Req:post_param("endescription"),
	Encontent 		= Req:post_param("encontent"),
	Engenre 		= Req:post_param("engenre"),

	EnId			= Req:post_param("enid"),
	OldBaseEN		= boss_db:find(EnId),
	NewBaseEN		= OldBaseEN:set([{url, Enurl}, {title, Entitle}, {description, Endescription}, {content, Encontent}, {genre, Engenre}, {category, Category}]),
	{ok, BaseEN}	= NewBaseEN:save(),

	HasCode			= Req:post_param("hascodedetail"),

	Repos 			= Req:post_param("coderepository"),
	ProgLang		= Req:post_param("programminglanguage"),
	Runtime 		= Req:post_param("runtime"),
	Target 			= Req:post_param("targetproduct"),
	Level 			= Req:post_param("level"),

	case {Info:codedetail(), HasCode} of
		{undefined, "true"} 	-> 	NewCode = codedetail:new(id, Info:id(), ProgLang, Repos, Target, Runtime, Level),
									{ok, Code} = NewCode:save();
		{OldCode, "true"}		-> 	NewCode = OldCode:set([{programming_language, ProgLang}, {repository, Repos}, {target_product, Target}, {runtime, Runtime}, {level, Level}]),
									{ok, Code} = NewCode:save();
		{undefined, _}			-> 	pass;
		{Code, _}				-> 	boss_db:delete(Code:id());
		{_, _}					-> 	pass
	end,

	{redirect, "/admin"}.

delete ('POST', []) ->
	Id 			= Req:post_param("id"),
	Info 		= boss_db:find(Id),
	
	Code 		= Info:codedetail(),
	case Code of
		undefined				-> pass;
		_Else 					-> boss_db:delete(Code:id())
	end,
	
	lists:map (fun(Post) -> boss_db:delete(Post:id()) end, Info:bases()),
	boss_db:delete(Info:id()),

	{redirect, "/admin"}.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

french(List) -> hd(List).
english(List) -> lists:last(List).

lang_ (_,_)->
	"fr".

cache_ (_,_) ->
	none.

before_ (_,_,_) ->
	Pass = Req:header("****"),
	case Pass of
		"****" ->
			ok;
		_Else ->
			{unauthorized, []}
	end.
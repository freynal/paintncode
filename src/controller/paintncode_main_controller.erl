-module(paintncode_main_controller, [Req]).
-compile (export_all).

index('GET', []) ->
	Lang 			= getLang(),
	TranslationURL	= case Lang of
					"en" 	-> "/";
					_	-> "/en"
			  	end,
	{ok, [{translationURL, TranslationURL}]}.

sendmail ('POST', []) ->
	From = Req:post_param("from"),
	Subject = Req:post_param("subject"),
	Message = Req:post_param("message"),
	ValidMail = re:run(From, "^[a-zA-Z0-9\._-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$", [notempty, global, {capture, none}]),
	case {From, Subject, Message, ValidMail} of
		{[], [], [], _} -> {output, "Error : EVERYTHING is empty !"};
		{[], _, _, _} -> {output, "Error : From empty"};
		{_, [], _, _} -> {output, "Error : Subject empty"};
		{_, _, [], _} -> {output, "Error : Message empty"};
		{_, _, _, nomatch} -> {output, "Error : Invalid Mail"};
		{_, _, _, match} -> boss_mail:send(From, "francois-reynal@paint-n-code.com", Subject, Message), {output, "Mail sent !"};
		_ -> {output, "Error: Something went wrong."}
	end.

portfolio('GET', []) ->
	Lang 		= getLang(),
	TranslationURL	= case Lang of
					"en" 	-> "/portfolio";
					_	-> "/en/artwork"
			  	end,
	Paintings 	= boss_db:find(base, [category = "lblPaintings"		, lang = Lang]),
	Concepts 	= boss_db:find(base, [category = "lblConceptArt"		, lang = Lang]),
	Speeds 		= boss_db:find(base, [category = "lblSpeedPainting"	, lang = Lang]),
	Sketches 	= boss_db:find(base, [category = "lblSketches"		, lang = Lang]),
	Sculpt 		= boss_db:find(base, [category = "lblSculpture"		, lang = Lang]),
	Artworks 	= [Paintings, Concepts, Speeds, Sketches, Sculpt],
	{ok, [{list, Artworks}, {translationURL, TranslationURL}]}.

projets ('GET', []) ->
	Lang 		= getLang(),
	TranslationURL	= case Lang of
					"en" 	-> "/projets";
					_	-> "/en/projects"
			  	end,
	Games		= boss_db:find(base, [category = "lblGames"		, lang = Lang]),
	Books 		= boss_db:find(base, [category = "lblBooks"		, lang = Lang]),
	Comics 		= boss_db:find(base, [category = "lblComics"		, lang = Lang]),
	Contests 	= boss_db:find(base, [category = "lblContests"		, lang = Lang]),
	Projects	= [Games, Books, Comics, Contests],
	{ok, [{list, Projects}, {translationURL, TranslationURL}]};

projets ('GET', [Url]) ->
	Lang 		= getLang(),
	[Project|_] 	= boss_db:find(base, [url = Url				, lang = Lang]),
	Info		= Project:info(),
	TranslationURL	= case Lang of
					"en" 	-> Base = french(Info:bases()), "/projets/" 		++ Base:url();
					_		-> Base = english(Info:bases()), "/en/projects/" ++ Base:url()
			  	end,
	{ok, [{post, Project}, {translationURL, TranslationURL}]}.

informatique ('GET', []) ->
	Lang 		= getLang(),
	TranslationURL	= case Lang of
					"en" 	-> "/informatique";
					_	-> "/en/computing"
			  	end,
	Web 		= boss_db:find(base, [category = "lblWeb"			, lang = Lang]),
	Software	= boss_db:find(base, [category = "lblSoftware"		, lang = Lang]),
	Sgbd 		= boss_db:find(base, [category = "lblSGBD"		, lang = Lang]),
	System		= boss_db:find(base, [category = "lblSystem"		, lang = Lang]),

	Computings	= [Web, Software, Sgbd, System],
	{ok, [{list, Computings}, {translationURL, TranslationURL}]};

informatique ('GET', [Url]) ->
	Lang 		= getLang(),
	[Computing|_]	= boss_db:find(base, [url = Url				, lang = Lang]),
	Info		= Computing:infos(),
	TranslationURL	= case Lang of
					"en" 	-> Base = french(Info:bases()), "/informatique/"		++ Base:url();
					_		-> Base = english(Info:bases()), "/en/computing/" 	++ Base:url()
			  	end,
	{ok, [{post, Computing}, {translationURL, TranslationURL}]}.

notfound ('GET', []) ->
	{ok, []}.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%		UTILS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

french([Res | _]) -> Res.
english(List) -> lists:last(List).

getLang () ->
	case string:sub_string(Req:path(), 2, 3) of
		"en" ->
			"en";
		_Else ->
			"fr"
	end.

lang_(_,_) ->
	case string:sub_string(Req:path(), 2, 3) of
		"en" ->
			"en";
		"no" ->
			auto;
		_Else ->
			"fr"
	end.

cache_ (_,_) ->
	{page, [{seconds, 3600}]}.
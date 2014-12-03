-module(paintncode_sitemap_controller, [Req]).
-compile (export_all).

sitemap (_, []) ->
	All		= boss_db:find(infos, [{action, 'in', ["lblProgramming", "lblProjects"]}]),
	{ok, [{list, All}], [{"Content-Type", "application/xml"}]}.
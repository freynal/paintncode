-module(paintncode_custom_filters).
-compile(export_all).

% put custom filters in here, e.g.
%
% my_reverse(Value) ->
%     lists:reverse(binary_to_list(Value)).
%
% "foo"|my_reverse   => "oof"

labelLang(Lang)->
	"lbl" ++ string:to_upper(Lang).

transUpper(Lang) ->
	string:to_upper(trans(Lang)).

trans(Lang)->
	case Lang of
		"fr" -> "en";
		"en" -> "fr";
		_ -> "en"
	end.

french([FR | _]) ->
	FR.

english(Bases) ->
	lists:last(Bases).

debug(Value) ->
	io_lib:format("~w", [Value]).

log(Value) ->
	io:format("~w", [Value]).

isEN(Value) ->
	case Value of
		"en" -> "/en";
		_ -> ""
	end.

fr(Value) ->
	case Value of
		"lblArtwork" 		-> "portfolio";

		"lblProgramming" 	-> "informatique";
		"lblWeb" 		-> "web";
		"lblSoftware" 	-> "logiciel";
		"lblSGBD" 		-> "base-de-donnee";
		"lblSystem" 		-> "systeme";

		"lblProjects" 	-> "projets";
		"lblGames" 		-> "jeux";
		"lblBooks" 		-> "livres";
		"lblComics" 		-> "bandes-dessinees";
		"lblContests" 	-> "concours";

		_ 			-> ""
	end.

en(Value) ->
	case Value of
		"lblArtwork" 		-> "artwork";

		"lblProgramming" 	-> "computing";
		"lblWeb" 		-> "web";
		"lblSoftware" 	-> "software";
		"lblSGBD" 		-> "database";
		"lblSystem" 		-> "system";

		"lblProjects" 	-> "projects";
		"lblGames" 		-> "games";
		"lblBooks" 		-> "books";
		"lblComics" 		-> "comics";
		"lblContests" 	-> "contests";

		_ 			-> ""
	end.
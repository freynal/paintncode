$(function() {

var lHighlighter = ace.require("ace/ext/static_highlight");

$("code").each(function(pIndex, pElement) {
console.log(pElement);
lHighlighter(pElement,
        {mode: "ace/mode/"+ $(this).attr('data-ace-mode'),
        theme: "ace/theme/monokai",
        startLineNumber: 1,
        showGutter: !$(this).hasClass("inline"),
        trim: true},
function (highlighted) {}
)


});
});
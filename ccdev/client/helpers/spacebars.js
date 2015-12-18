UI.registerHelper('textareaToHTML', function( content ) {
    return Spacebars.SafeString( content.replace(/\n/g, '<br/>') );
});
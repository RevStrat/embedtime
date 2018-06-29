$('button').click(function() {
    var content = $('#embedtime-url').val();
    insertEmbed('<div class="shortcode-media-youtube">' + content + '</div>');
});

function insertEmbed(content) {
    top.tinymce.activeEditor.execCommand('mceInsertContent', false, content);

    top.tinymce.activeEditor.windowManager.close();
}

tinymce.PluginManager.add('embedtime', function(editor, url) {
    var iframe = null
    editor.addButton('embedtime', {
        text: false,
        image: url + '/img/embedtime.png',
        onpostrender: updateOnSelect,
        onclick: onClickEmbedTimeButton
    });
    tinymce.DOM.loadCSS(url + '/css/editor.css');
    function onClickEmbedTimeButton() {
        var iframeClasses;
        if (iframe && iframe.parentNode) {
            iframeClasses = iframe.parentNode.getAttribute('class');
        }
        editor.windowManager.open({
            title: 'Embed Responsive iFrame',
            body: [
                {type: 'textbox', name: 'code', label: 'iFrame Embed Code', value: iframe ? iframe.outerHTML : null },
                {type: 'listbox', name: 'aspect', label: 'Aspect Ratio', value: iframeClasses ? iframeClasses.split(' ').filter(function(iframeClass){
                    return iframeClass.startsWith('Aspect');
                }) : null, values: [
                    {text: '16:9 (widescreen)', value: 'Aspect16x9'},
                    {text: '4:3 (old TV)', value: 'Aspect4x3'},
                    {text: '1:1 (square)', value: 'Aspect1x1'},
                    {text: 'None', value: 'AspectNone'}
                ] }
            ],
            onsubmit: function(e) {
                var html = '<div class="Embed-Aspect ' + e.data.aspect + '">' + e.data.code + '</div>';
                editor.insertContent(html);
                iframe = null;
            }
        });
    }
    function updateOnSelect() {
        var button = this;
        editor.on('NodeChange', function(e) {
            var node = editor.selection.getNode();
            var isIframeNode = node.getAttribute('data-mce-object') === 'iframe';
            var iframeNodes = node.querySelectorAll('iframe');
            if (iframeNodes.length > 0) {
                var currentIframe = iframeNodes[0];
                iframe = currentIframe;
            } else {
                iframe = null;
            }
            /*if (isIframe) {
                console.info('editing iframe', );

            }*/
        });
    }
});

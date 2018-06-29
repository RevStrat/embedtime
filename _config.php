<?php

//use SilverStripe\View\Requirements;

define('EMBEDTIME_PATH', dirname(__FILE__));
define('EMBEDTIME_DIR', basename(EMBEDTIME_PATH));

CustomHtmlEditorConfig::get('cms')->enablePlugins(array(
    'embedtime' => '/' . EMBEDTIME_DIR . '/editor_plugin_src.js'
));

CustomHtmlEditorConfig::get('cms')->addButtonsToLine(1, 'embedtime');

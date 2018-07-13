<?php

use SilverStripe\Forms\HTMLEditor\HTMLEditorConfig;

define('EMBEDTIME_PATH', dirname(__FILE__));
define('EMBEDTIME_DIR', basename(EMBEDTIME_PATH));

HTMLEditorConfig::get('cms')->enablePlugins(array(
    'embedtime' => EMBEDTIME_DIR . '/editor_plugin_src.js'
));

HTMLEditorConfig::get('cms')->addButtonsToLine(1, 'embedtime');

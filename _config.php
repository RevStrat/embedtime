<?php

use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\Forms\HTMLEditor\TinyMCEConfig;

// Avoid creating global variables
call_user_func(function () {
    $module = ModuleLoader::inst()->getManifest()->getModule('revstrat/embedtime');

    // Re-enable media dialog
    $config = TinyMCEConfig::get('cms');
    $config->enablePlugins([
        'embedtime' => $module
            ->getResource('editor_plugin_src.js')
    ]);
    $config->insertButtonsAfter('ssembed', 'embedtime');
});

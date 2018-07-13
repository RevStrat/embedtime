<?php

use SilverStripe\ORM\DataExtension;
use SilverStripe\View\Requirements;

class EmbedTimeControllerExtension extends DataExtension {
    public function onAfterInit() {
        Requirements::css(EMBEDTIME_DIR . '/css/embed.css');
    }
}
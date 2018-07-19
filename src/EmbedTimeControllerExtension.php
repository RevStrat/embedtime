<?php

namespace RevStrat\EmbedTime;

use SilverStripe\ORM\DataExtension;
use SilverStripe\View\Requirements;

class EmbedTimeControllerExtension extends DataExtension {
    public function onAfterInit() {
        Requirements::css('revstrat/embedtime:css/embed.css');
    }
}
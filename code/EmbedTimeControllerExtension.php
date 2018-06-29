<?php

class EmbedTimeControllerExtension extends DataExtension {
    public function onAfterInit() {
        Requirements::css(EMBEDTIME_DIR . '/css/embed.css');
    }
}
// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: "com.lazykauai.coffee",
    name: "Coffee Lover's Guide To Kauai",
    description: "A curated guide to coffee paradise. Only the best coffee shops and experiences.",
    author: 'Zendy Web Studio',
    email: 'webmaster@zendy.net',
    website: 'http://www.lazykauai.com/',
    version: '1.0.0'
});

App.icons({
    'iphone': 'assets/iphone/icon-60x60.png',
    'iphone_2x': 'assets/iphone/icon-120x120.png',
    'iphone_3x': 'assets/iphone/icon-180x180.png',
    'ipad': 'assets/iphone/icon-76x76.png',
    'ipad_2x': 'assets/iphone/icon-152x152.png'
});

App.launchScreens({
    'iphone_2x': 'assets/iphone/launchscreen-640x960.png',
    'iphone5': 'assets/iphone/launchscreen-640x1136.png',
    'iphone6': 'assets/iphone/launchscreen-750x1334.png',
    'iphone6p_portrait': 'assets/iphone/launchscreen-1242x2208.png',
    'iphone6p_landscape': 'assets/iphone/launchscreen-2208x1242.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#977350');

App.accessRule('http://*');
App.accessRule('https://*');
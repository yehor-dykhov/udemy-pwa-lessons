const webpush = require('web-push');
const vapid = require('./vapid.json');

webpush.setVapidDetails(
    'mailto:yd@admin.co',
    vapid.publicKey,
    vapid.privateKey
);

const publicSubscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/cdtLQXzyiaY:APA91bFq9VE11WR_VqB_eoYYNF2RCzBG-7s9kzwEQ9Q1rQ9158gMOOImwR1zymTQYe2sttBPs1eBMYu09OSjWCFYDBTwyVFvkfWycNdY3b4ggQ5mplYd0jD-a0qeKY-fbldMda6ZmHSZ",
    keys: {
        auth: 'dO2Oq16iFLYGGIEJ6UxKfA',
        p256dh: 'BOaa4fkhBnAZMcxvoweGFAqpmjpcqUBnHLNlE3Q9MCUu5MQTul-HoZ7qdvImmNBEoltRmUclx51WGy5_cC4NM8U'
    }
};

webpush.sendNotification(publicSubscription, 'Hey! This is a notification from push server!')
console.log('==>Server message was pushed.');

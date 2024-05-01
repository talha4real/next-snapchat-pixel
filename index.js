/**
 *  Next Snapchat Pixel Module
 *
 * @package next-snapchat-pixel-fixed
 * @author talha4real <talhabutt993@gmail.com>
 *
**/

var initialized = false;

module.exports = {
    init(pixelId, email=null) {
        if (!pixelId) {
            console.warn('Please, insert pixel ID to initialize');
        } else {
            if (window !== undefined) {
                (function (e, t, n) {
                    if (e.snaptr) return;
                    var a = e.snaptr = function () {
                        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
                    };
                    a.queue = [];
                    const s = 'script';
                    const r = t.createElement(s); r.async = !0; r.src = n;
                    const u = t.getElementsByTagName(s)[0];
                    u.parentNode.insertBefore(r, u);
                }(window, document, 'https://sc-static.net/scevent.min.js'));
                if(email){
                    snaptr('init', pixelId,{
                        user_email: email
                    });
                }else{
                    snaptr('init', pixelId);
                }
                
                initialized = true;
            } else {
                console.error('Window is not defined')
            }
        }

    },

    track(type) {
        if (!initialized) {
            console.warn('Can not track before initializing.')
        }
        snaptr('track', type);
    },

    trackWithData(type, data) {
        if (!initialized) {
            console.warn('Can not track before initializing.')
        }
        snaptr('track', type, data);
    }
}

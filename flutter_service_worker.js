'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon-invitation.png": "247f1ab45eceafaf2dbe9a975d46b9af",
"flutter_bootstrap.js": "b778c73a52d67aa51707bc380446d6c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"index.html": "cf2d5c3b3d3191c3a7d1a71efe46c7e5",
"/": "cf2d5c3b3d3191c3a7d1a71efe46c7e5",
"main.dart.js": "e279cc28c19320e4a53ec9bb6a135698",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"version.json": "009c9e65172e010890f7f65fde438006",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.bin.json": "799849c443548f2c5de3754ba966f5a7",
"assets/AssetManifest.bin": "646c0a7a9c846ed5ebb0088903b6c1c2",
"assets/NOTICES": "415adb73fce58dfb1797c651da4a8acf",
"assets/AssetManifest.json": "738c60b149d2c17e5cbff4697cc94128",
"assets/fonts/MaterialIcons-Regular.otf": "c160f202d1b58811a8a4024665d5fd28",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "419dc9d91956a3c483d020b08627df13",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/iphone%2520frame.png": "49bea8e98d02c3e8d9cc76d415690848",
"assets/assets/images/button%2520creamy.png": "f1f3eadcd444c27363af65dcf966fcbb",
"assets/assets/images/iphone%2520frame%2520landscape.png": "bc004529bc98d6fb5d4b496dde98f34a",
"assets/assets/images/entrance%2520frame.png": "e34300682521da3b56c9afa80ea8eab2",
"assets/assets/images/button%2520black.png": "896efdaeb6c590911d3daeccaced8322",
"assets/assets/images/invitation%2520background.png": "c567dfb1152ac61cea62613c661fa8cb",
"assets/assets/images/entrance%2520door.png": "786abbbd553e8751d46f96ae19a2c6b8",
"assets/assets/images/map%2520portrait.jpg": "6e6c14e1de2660622ef07c9cfca9dc8c",
"assets/assets/images/macbook%2520frame.png": "369725b03bf3ae16aefb468183195419",
"assets/assets/images/map%2520portr.png": "bcd08c160ac6f4ec737ec944169b692a",
"assets/assets/images/location%2520pin.png": "bde11d627a197af39bf45e58577268e4",
"assets/assets/images/placeholder.png": "8057445ee61f0662c373e0503ec524d5",
"assets/assets/icons/unity.svg": "60ce708ceb521e68cbb0515a06c6b81a",
"assets/assets/icons/whatsapp.svg": "8fb93919d19378e4a81f9973fb1d01a2",
"assets/assets/icons/alert.svg": "b31f04551210857ffbe2ec0f79c73d17",
"assets/assets/icons/mail.svg": "ef9bbda3cf1757a66d3e84b3851c4da3",
"assets/assets/icons/phone.svg": "dd59e59463266b3ec1477aa362501fab",
"assets/assets/icons/eye%2520closed.svg": "9a6786afe446236fbcada3993d26d2eb",
"assets/assets/icons/cv.svg": "6104ed7547dcad8e991f95d26a879602",
"assets/assets/icons/google%2520play.svg": "15793e971f67485141cf46ea72f6d8ff",
"assets/assets/icons/dark%2520mode.svg": "b2ea5505eb74fe310eb50f69a8a44c91",
"assets/assets/icons/eye%2520open.svg": "e8999323976e2319de3d5568436a73d3",
"assets/assets/icons/youtube.svg": "75ba615e943dff38300f674eb6e8079e",
"assets/assets/icons/google%2520drive.svg": "6d7f5c4092cad7363873bf978ac311c1",
"assets/assets/icons/linkedin.svg": "83e649c06a63b03347f25fadf62dec23",
"assets/assets/icons/light%2520mode.svg": "c17bb2e35115ad2b47184fc260153b61",
"assets/assets/icons/link.svg": "2e3ebb582c90b1ab3097e1add8252106",
"assets/assets/icons/github.svg": "ab461b5e7a3215c8625e4220b255d4b8",
"assets/assets/icons/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/icons/back%2520shape2.svg": "69d74858eacb8225c9563dad033d188d",
"assets/assets/icons/app%2520store.svg": "fdabfe2454168f46f347de05ad0bec63",
"assets/assets/fonts/AmiriQuran-Regular.ttf": "f294ac0b92a74fed1018c06af36af076",
"assets/assets/fonts/PlayfairDisplay-Black.ttf": "d1222ef03318f51a628254322b9cc54f",
"assets/assets/fonts/PlayfairDisplay-ExtraBold.ttf": "c40a2ef5334382e328c890bbad61c40c",
"assets/assets/fonts/PlayfairDisplay-SemiBold.ttf": "54a87ef71bd558e23e1bdc47b4496bc1",
"assets/assets/fonts/eb_garamond/EBGaramond-MediumItalic.ttf": "35fba02a060882b7721c0b1c2c729938",
"assets/assets/fonts/eb_garamond/EBGaramond-Regular.ttf": "f91990e0c3728057866c94923db57c17",
"assets/assets/fonts/eb_garamond/EBGaramond-Italic.ttf": "6d58edfc1cfefdbe9fde538722b62017",
"assets/assets/fonts/eb_garamond/EBGaramond-Bold.ttf": "e6bb7b0473fb3c40387a6be71cc26da8",
"assets/assets/fonts/eb_garamond/EBGaramond-SemiBoldItalic.ttf": "57b28989ed0d62e9d13204b403f3b345",
"assets/assets/fonts/eb_garamond/EBGaramond-ExtraBoldItalic.ttf": "29e32a9039ed470e39e6a7ce67b2fd2f",
"assets/assets/fonts/eb_garamond/EBGaramond-Medium.ttf": "f378406baca0209169329de1a810fa17",
"assets/assets/fonts/eb_garamond/EBGaramond-ExtraBold.ttf": "f8e02af7517cde6292b33626dc91d029",
"assets/assets/fonts/eb_garamond/EBGaramond-SemiBold.ttf": "6f5b62aa6aaadb5738659e23c698bea7",
"assets/assets/fonts/eb_garamond/EBGaramond-BoldItalic.ttf": "bafd262fcf4c288b41b1ea1c1e6352f1",
"assets/assets/fonts/cinzel/Cinzel-Black.ttf": "2c9b9deb7c974178ecfc54e6425de4ff",
"assets/assets/fonts/cinzel/Cinzel-SemiBold.ttf": "3b46e60e610c5f493298d3815ad999d4",
"assets/assets/fonts/cinzel/Cinzel-Medium.ttf": "18f1755ffc108cbec9ac27c7a98c0b18",
"assets/assets/fonts/cinzel/Cinzel-Regular.ttf": "1751891facafee36e80586cfed227fc1",
"assets/assets/fonts/cinzel/Cinzel-ExtraBold.ttf": "b12572c89966dc70008bf37a6e6cf5be",
"assets/assets/fonts/cinzel/Cinzel-Bold.ttf": "7fa8033ca19d3d9dea10e6f019712228",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "1a28efdbd2876d90e554a67faabad24b",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "9b38798112efb7cf6eca1de031cec4ca",
"assets/assets/fonts/PlayfairDisplay-Medium.ttf": "42e5edcf78a90b7358c0b95bfc55ce35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "35ec3d8401ed48024a84da6629596fab",
"index.html": "d6ace35de386e4c54e70bbd8a4004b73",
"/": "d6ace35de386e4c54e70bbd8a4004b73",
"main.dart.js": "69591cb27995dea152f48ba9b6934e35",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "b322eb636f2b675600bb47d6334a1457",
".git/objects/61/bcdb7b2465ccde59bce37a265e43e3561978c4": "b28d7f886eecfcb07282629ab6ee688d",
".git/objects/59/d6c0374a9d9950451346ee44033376154a5b4e": "40976bb4ea78340333dfffc41fb47760",
".git/objects/68/8e14d3bc1d46fc7d77b11812d2f883fa76c806": "2a7378cb38d1cc40f4afccdde643b0bc",
".git/objects/57/2f0f4e5002181aa9043b3965685c1de10788e2": "a64021f2f104169158e25863522839f4",
".git/objects/3b/17c4b6382e72a09198a81eebb1e0538b83b673": "14c8faeebdd38efa7b399d7dff98c735",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/9e3136c0ba60e20bed148c6f5f44fffaead8f4": "967bd46efaaed0b7bf766f1a8ca86095",
".git/objects/02/0eac640224ae420fd16d564e8eb49930085d44": "ef83f5d53deeb5615389401a49c6a74a",
".git/objects/bb/f1f9a8fb08e7bce773b11480d03ef6c91371ee": "6c87567d4b39c55b393f751a9eb4f9c6",
".git/objects/b3/9d30e5de12150f7f8faf3c2e152e667af9ba1c": "1309a3dadbd4e3c8de6b141fdb62784f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/a60adac3de64beeb9bdd22b22491829fff51eb": "cc5270dc6561c9bc1cc672ae689e2dde",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/c6/fdcbc1c485446460a2f58e240791cd704257fe": "f6b277d51859d9082dc083e9f6d54658",
".git/objects/4b/123a428c75fef23267e3abc1cf2ed1e0e473a9": "4b6a5d5c39901a7d335a3c13ee4bb323",
".git/objects/16/399a551a4b0987adc89c98120967465e378bf7": "a6872d974720ef78717333c1ac853ebe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ec4477c407614927fcd0fe7168e54ca1ad41cd": "772a6df5e866384dc9428003a8a398f0",
".git/objects/81/725388f6c5433f0f1bdf4e258abafad5ce80a2": "c57a8e08deb5a8fc50bc6620a851660d",
".git/objects/86/fdae0d93f504d3aee7cedbc8c165cd7d9327ba": "f2318ff09e0e1dc8be8493404b007383",
".git/objects/2f/81d4c7621e3ab9955ca953af5b298d2a461db4": "1bdc871ceb605babc37a3b1478f4394b",
".git/objects/43/dd3e9242dbb8eec9859b94ec85fdfe3ef2c3f8": "4c9c7dafa144caa93bbb2cb5b7e3abf9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/417d5307c391e50afcdb5c756a744e47a21e5f": "e6747339ccfd332c9d144f53372df0da",
".git/objects/01/aab226911113373b023338f11141c2530d9af3": "2a3acce4ef17bfe9caa264e9e72abb5d",
".git/objects/6c/106d7416e30c6ad5c08b0ab0d5db1d84d922bf": "fc3fddde3ff300cef496b3ac280684e9",
".git/objects/55/3f098ec1c4d1111eccb70849dee48b113a1436": "b4e014692b8c28fe5e782401ccb6a2e4",
".git/objects/97/90a25223425175704d4a9f619858e596757d01": "3ea6bd26842ad041351a0c78c011cfcb",
".git/objects/d3/9e5fe1c5134ef3deca45dddf41b51acd1d028e": "93b72547db93e4ec6c125bca1e513119",
".git/objects/a7/ec0988782fbbc2c3a91046f042c2a3ce2c0f90": "b8c1c43d7a10d54bdea1234f8efdb5c7",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/dc/13400f21822f8b51f2bd2310746d499d49c38d": "90e52b020f21c3ba6b58ac34f5063d02",
".git/objects/a9/aabb4a1d6ed3ee346cae31bb3c53a347d47464": "b79886c5fb494f82b46fdf019c904e97",
".git/objects/aa/9e06037a17e08c2830ef95cb10b0394d56052d": "edbd08d99e9e71a7a74e7a1da4e474d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0d7caed5a97240c0581e6bf4276b5685ad693e": "7fad6b92f818c5ec2f82f3acab9629b1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/e126e1d52f5f5c38d9db4669a0a8a1469b7af5": "b0bb1a5555603dca3812b9fb55cb4932",
".git/objects/12/480a3c70b9bb988e72d442e8225cf435387f7f": "37fe186ffc890565314dc9734a59669b",
".git/objects/85/7bc4ed161bf2151977cf304b25c2aec6904d76": "9fab5d8fb3434af1a20cd72bc1618574",
".git/objects/76/758ba9a7ee9579af0d286608b45d8c3497a68b": "8e5a7dec4c5192e2cc0421881fa6d2e9",
".git/objects/47/b11cc2b6308bbb19ef888fd36f78fbdff761ae": "ba2bcbb36a07967dd353477623f9dfd6",
".git/objects/13/cea5bdcbe3e17bd689f389c69a7a32c49b44df": "663636a721d0a36352a68ba864a37d9b",
".git/objects/14/4d2cf56dfaca585c453adbf7743a8470094518": "d76086e94270001b91d441425f13f97c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff4476e624c9dfbc0e5bab3ed2186a27",
".git/logs/refs/heads/master": "ff4476e624c9dfbc0e5bab3ed2186a27",
".git/logs/refs/remotes/origin/master": "5f12efbfe1e8b2d4a549ffe8d08be431",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "efbbab52c32960400aa57b6aa3ea6b63",
".git/refs/remotes/origin/master": "efbbab52c32960400aa57b6aa3ea6b63",
".git/index": "65379e949fe40c476eb364748b677b44",
".git/COMMIT_EDITMSG": "cccfb796d5b1faec82fabdcc49972749",
"assets/images/lake.jpeg": "236690c07321de26550682c399675fb4",
"assets/AssetManifest.json": "dcf93df2fdf76abb92749b68e488ed3e",
"assets/NOTICES": "63f3854fd52037b21c68dd30e3759c7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

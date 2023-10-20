// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cu6sN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cf6eb48aa56319bd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bAabt":[function(require,module,exports) {
var _api = require("./api");
if (document) {
    const modalTerms = document.querySelector(".modal-terms");
    const modalReg = document.querySelector(".modal-reg");
    // check query params
    let urlSearchParams;
    if (window && "URLSearchParams" in window) {
        urlSearchParams = new URLSearchParams(window.location.search);
        if (urlSearchParams.has("terms")) modalTerms.classList.add("scale-100");
        if (urlSearchParams.has("reg")) modalReg.classList.add("scale-100");
        if (urlSearchParams.has("reg") && urlSearchParams.has("terms")) {
            modalReg.classList.add("scale-100");
            modalTerms.classList.add("scale-100");
        }
    }
    // 
    // scroll faq
    const scrollToFaq = ()=>{
        const element = document.querySelector("#faq");
        const topPos = element.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scroll({
            top: topPos,
            behavior: "smooth"
        });
    };
    const faqLinks = document.querySelectorAll(".faqLink");
    const faqBtns = document.querySelectorAll(".faqBtn");
    faqLinks.forEach((links)=>{
        links.classList.add("hidden-importent");
    });
    faqBtns.forEach((btns)=>{
        btns.classList.remove("hidden-importent");
        btns.addEventListener("click", scrollToFaq);
    });
    //
    // intesection Observer
    const observerOptions = {
        rootMargin: "-50px 0px -55%",
        threshold: [
            0,
            0.5,
            1
        ]
    };
    const observerAnimationOptions = {
        rootMargin: "50% 0px",
        threshold: [
            0,
            0.5,
            1
        ]
    };
    const observer = new IntersectionObserver(observerCallback, observerAnimationOptions);
    const observerAnimations = new IntersectionObserver(observerMenuCallback, observerOptions);
    const menuItemFirst = document.querySelectorAll(".menu-item-first");
    const menuItemSecond = document.querySelectorAll(".menu-item-second");
    const menuItemThird = document.querySelectorAll(".menu-item-third");
    function observerMenuCallback(entries, observer) {
        entries.forEach((entry)=>{
            if (entry && entry.isIntersecting) {
                if (entry.target.id === "nifOnlineView") {
                    menuItemFirst.forEach((itemFirst)=>{
                        itemFirst.classList.add("active");
                    });
                    menuItemThird.forEach((itemThird)=>{
                        itemThird.classList.remove("active");
                    });
                    menuItemSecond.forEach((itemSecond)=>{
                        itemSecond.classList.remove("active");
                    });
                } else if (entry.target.id === "faqWrapper") {
                    menuItemFirst.forEach((itemFirst)=>{
                        itemFirst.classList.remove("active");
                    });
                    menuItemThird.forEach((itemThird)=>{
                        itemThird.classList.remove("active");
                    });
                    menuItemSecond.forEach((itemSecond)=>{
                        itemSecond.classList.add("active");
                    });
                } else if (entry.target.id === "contactForm") {
                    menuItemFirst.forEach((itemFirst)=>{
                        itemFirst.classList.remove("active");
                    });
                    menuItemThird.forEach((itemThird)=>{
                        itemThird.classList.add("active");
                    });
                    menuItemSecond.forEach((itemSecond)=>{
                        itemSecond.classList.remove("active");
                    });
                }
            }
        });
    }
    function observerCallback(entries, observer) {
        entries.forEach((entry)=>{
            if (entry && entry.isIntersecting && entry.intersectionRatio > 0.40) entry.target.classList.add("active");
            else entry.target.classList.remove("active");
        });
    }
    let target = ".targetSelector";
    document.querySelectorAll(target).forEach((i)=>{
        if (i) {
            i.removeAttribute("hidden");
            if (i.classList.contains("hidden-importent")) i.classList.remove("hidden-importent");
            observer.observe(i);
            observerAnimations.observe(i);
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
        const burgerBtn = document.querySelector(".burger-btn");
        const mainMenu = document.querySelector(".main-menu");
        const langBtn = document.querySelector(".lang-btn");
        const langMenu = document.querySelector(".lang-menu");
        const langComp = document.querySelector(".lang-comp");
        const detailsArr = document.querySelectorAll(".details");
        const modalWrapper = document.querySelector(".modal-wrapper");
        const modaCloseBtnlReg = document.querySelector(".close-reg-form");
        const getNifBtn = document.querySelectorAll(".btn-get-nif");
        const getStartedBtn = document.querySelectorAll(".btn-get-started");
        const orderBtn = document.querySelectorAll(".order-btn");
        const oneDayRadio = document.querySelector("#oneDay");
        const sixDayRadio = document.querySelector("#sixDay");
        const elevenDayRadio = document.querySelector("#elevenDay");
        const modalSucces = document.querySelector(".modal-succes");
        const closeSaccessForm = document.querySelector(".close-saccess-form");
        const closeSaccessBtn = document.querySelector(".close-saccess-btn");
        const showTermsModalBtns = document.querySelectorAll(".show-terms-modal");
        const closeTermsModalBtn = document.querySelector(".close-modal-terms");
        const btnDocumentsModal = document.querySelector(".btn-documents-modal");
        const closeDocumentsModal = document.querySelector(".close-required-documents");
        const requiredDocumentsModal = document.querySelector(".required-documents-modal");
        let searchParams;
        if (window && "URLSearchParams" in window) searchParams = new URLSearchParams(window.location.search);
        const regForm = document.querySelector("#regForm");
        const formFirstName = document.querySelector("#reg-form-name");
        const formLastName = document.querySelector("#reg-form-lastname");
        const formSocial = document.querySelector("#reg-form-social");
        const formEmail = document.querySelector("#reg-form-email");
        const formTel = document.querySelector("#reg-form-tel");
        const selectCountries = document.querySelector("#js-choice");
        const contactForm = document.querySelector("#contactForm");
        const contactInputName = document.querySelector("#contact-form-name");
        const contactInputEmail = document.querySelector("#contact-form-email");
        const contactInputComment = document.querySelector("#contact-form-comment");
        const oneDayDate = document.querySelector("#oneDayDate");
        const sixDayDate = document.querySelector("#sixDayDate");
        const elevenDayDate = document.querySelector("#elevenDayDate");
        // contact form
        contactForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const body = {
                name: contactInputName.value,
                email: contactInputEmail.value,
                comment: contactInputComment.value
            };
            sendContact((0, _api.CONTACTS_URL), JSON.stringify(body));
        });
        async function sendContact(url, data) {
            try {
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: data
                });
                if (response.status === 200) openSuccessModal();
            } catch (error) {
                console.error("Error:", error);
            }
        }
        // reg form
        regForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            const body = {
                name: formFirstName.value,
                last_name: formLastName.value,
                email: formEmail.value,
                phone_number: formTel.value,
                social_network: formSocial.value,
                country: selectCountries.value,
                plan: document.querySelector("input[name=plan]:checked").value
            };
            sendOrder((0, _api.ORDERS_URL), JSON.stringify(body));
        });
        async function sendOrder(url, data) {
            try {
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: data
                });
                if (response.status === 200) {
                    closeRegModal();
                    openSuccessModal();
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        //open/close modal
        const changeUrlParams = ()=>{
            const newUrlWithOpenTerms = `${window.location.pathname}${searchParams.toString().length ? "?" + searchParams.toString() : ""}`;
            history.pushState(null, "", newUrlWithOpenTerms);
        };
        const openTermsModal = ()=>{
            if (modalTerms.classList.contains("scale-0")) {
                modalTerms.classList.remove("scale-0");
                modalTerms.classList.add("scale-100");
                document.body.style.overflow = "hidden";
                searchParams.set("terms", "open");
                changeUrlParams();
            }
        };
        const closeTermsModal = ()=>{
            if (modalTerms.classList.contains("scale-100")) {
                modalTerms.classList.remove("scale-100");
                modalTerms.classList.add("scale-0");
                document.body.style.overflow = "visible";
                searchParams.delete("terms");
                changeUrlParams();
            }
        };
        showTermsModalBtns.forEach((btn)=>{
            btn.addEventListener("click", openTermsModal);
        });
        closeTermsModalBtn.addEventListener("click", closeTermsModal);
        const closeRegModal = ()=>{
            if (modalReg.classList.contains("scale-100")) {
                modalReg.classList.remove("scale-100");
                modalReg.classList.add("scale-0");
                document.body.style.overflow = "visible";
                searchParams.delete("reg");
                changeUrlParams();
            }
        };
        const openSuccessModal = ()=>{
            if (modalSucces.classList.contains("scale-0")) {
                modalSucces.classList.remove("scale-0");
                modalSucces.classList.add("scale-100");
                document.body.style.overflow = "hidden";
            }
        };
        const closeSuccessModal = ()=>{
            if (modalSucces.classList.contains("scale-100")) {
                modalSucces.classList.remove("scale-100");
                modalSucces.classList.add("scale-0");
                document.body.style.overflow = "visible";
            }
        };
        const openRequiredDocumentsModal = ()=>{
            if (requiredDocumentsModal.classList.contains("scale-0")) {
                requiredDocumentsModal.classList.remove("scale-0");
                requiredDocumentsModal.classList.add("scale-100");
                document.body.style.overflow = "hidden";
            }
        };
        const closeRequiredDocumentsModal = ()=>{
            if (requiredDocumentsModal.classList.contains("scale-100")) {
                requiredDocumentsModal.classList.remove("scale-100");
                requiredDocumentsModal.classList.add("scale-0");
                document.body.style.overflow = "visible";
            }
        };
        btnDocumentsModal.addEventListener("click", openRequiredDocumentsModal);
        closeDocumentsModal.addEventListener("click", closeRequiredDocumentsModal);
        const openModalReg = ()=>{
            modalReg.classList.remove("scale-0");
            modalReg.classList.add("scale-100");
            document.body.style.overflow = "hidden";
            searchParams.set("reg", "open");
            changeUrlParams();
        };
        [
            orderBtn,
            getNifBtn,
            getStartedBtn
        ].forEach((btn)=>{
            if (btn.length > 1) btn.forEach((btnOrder)=>{
                if (btnOrder.length > 1) btnOrder.forEach((btn)=>{
                    btn.addEventListener("click", function(event1) {
                        event1.stopPropagation();
                        if (modalReg.classList.contains("scale-0")) openModalReg();
                    });
                });
                btnOrder.addEventListener("click", function() {
                    event.stopPropagation();
                    if (btnOrder.classList.contains("order-btn-first")) {
                        sixDayRadio.checked = false;
                        elevenDayRadio.checked = false;
                        oneDayRadio.checked = true;
                    } else if (btnOrder.classList.contains("order-btn-six")) {
                        elevenDayRadio.checked = false;
                        oneDayRadio.checked = false;
                        sixDayRadio.checked = true;
                    } else if (btnOrder.classList.contains("order-btn-eleven")) {
                        oneDayRadio.checked = false;
                        sixDayRadio.checked = true;
                        elevenDayRadio.checked = true;
                    }
                    if (modalReg.classList.contains("scale-0")) openModalReg();
                });
            });
            else btn.addEventListener("click", function(event1) {
                event1.stopPropagation();
                if (modalReg.classList.contains("scale-0")) openModalReg();
            });
        });
        modaCloseBtnlReg.addEventListener("click", function(event1) {
            event1.stopPropagation();
            closeRegModal();
        });
        [
            closeSaccessForm,
            closeSaccessBtn
        ].forEach((btn)=>{
            btn.addEventListener("click", function(event1) {
                event1.stopPropagation();
                closeSuccessModal();
            });
        });
        //open/close mob menu
        const closeMobMenu = ()=>{
            mainMenu.classList.remove("opened-menu");
            burgerBtn.classList.remove("opened-burger");
            document.body.style.overflow = "visible";
        };
        burgerBtn.addEventListener("click", function(event1) {
            event1.stopPropagation();
            if (mainMenu.classList.contains("opened-menu")) closeMobMenu();
            else {
                mainMenu.classList.add("opened-menu");
                burgerBtn.classList.add("opened-burger");
                document.body.style.overflow = "hidden";
            }
        });
        //open/close lang menu
        langBtn.addEventListener("click", function(event1) {
            event1.stopPropagation();
            if (langMenu.classList.contains("open-lang")) {
                langMenu.classList.remove("open-lang");
                langBtn.classList.remove("opened-swither");
                langComp.classList.remove("opened-swither");
            } else {
                langMenu.classList.add("open-lang");
                langBtn.classList.add("opened-swither");
                langComp.classList.add("opened-swither");
            }
        });
        document.addEventListener("click", function(event1) {
            if (langMenu.classList.contains("open-lang")) {
                langMenu.classList.remove("open-lang");
                langComp.classList.remove("opened-swither");
                langBtn.classList.remove("opened-swither");
            }
            if (mainMenu.classList.contains("opened-menu")) closeMobMenu();
            const targetEl = event1.target;
            if (!modalWrapper.contains(targetEl) && !modalTerms.contains(targetEl)) closeRegModal();
            if (modalTerms.contains(targetEl)) closeTermsModal();
            if (requiredDocumentsModal.contains(targetEl)) closeRequiredDocumentsModal();
        });
        // date in modal
        const bodyDateString = (day)=>`${String(day.getDate()).padStart(2, "0")}.${String(day.getMonth() + 1).padStart(2, "0")}.${day.getFullYear()}`;
        const oneDay = new Date();
        oneDay.setDate(oneDay.getDate() + 1);
        oneDayDate.innerHTML = bodyDateString(oneDay);
        const sixDay = new Date();
        sixDay.setDate(sixDay.getDate() + 6);
        sixDayDate.innerHTML = bodyDateString(sixDay);
        const elevenDay = new Date();
        elevenDay.setDate(elevenDay.getDate() + 11);
        elevenDayDate.innerHTML = bodyDateString(elevenDay);
        // details animation
        const detailsAnimationStart = (el)=>{
            el.addEventListener("click", (e)=>{
                if (el.hasAttribute("open")) {
                    e.preventDefault(); // stop the default behavior, meaning - the hiding
                    el.classList.add("closing"); // add a class which applies the animation in CSS
                }
            });
            // when the "close" animation is over
            el.addEventListener("animationend", (e)=>{
                if (e.animationName === "close") {
                    el.removeAttribute("open"); // close the element
                    el.classList.remove("closing"); // remove the animation
                }
            });
        };
        detailsArr.forEach((detailsEl)=>{
            detailsAnimationStart(detailsEl);
        });
    }, false);
}

},{"./api":"kcudQ"}],"kcudQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ORDERS_URL", ()=>ORDERS_URL);
parcelHelpers.export(exports, "CONTACTS_URL", ()=>CONTACTS_URL);
var _env = require("../../../env");
const API_URL = (0, _env.keys).api_url;
const ORDERS_URL = `${API_URL}api/order/`;
const CONTACTS_URL = `${API_URL}api/contacts/`;

},{"../../../env":"dS1nW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dS1nW":[function(require,module,exports) {
module.exports.dbConfig = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "",
    DB: "nif_db",
    dialect: "mysql"
};
module.exports.keys = {
    jwt: "dev-jwt",
    cors: "http://si4kard-nif-cabinet-front.s3-website.eu-north-1.amazonaws.com",
    cors2: "http://si4kard-nif-font.s3-website.eu-north-1.amazonaws.com",
    port: 4000,
    api_url: "http://13.53.206.241:4000/"
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["cu6sN","bAabt"], "bAabt", "parcelRequire7bbc")

//# sourceMappingURL=index-en.a56319bd.js.map
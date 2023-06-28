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
})({"cnLyj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3f481624c9125a90";
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

},{}],"b9bkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templates", ()=>(0, _templatesDefault.default));
var _choices = require("./scripts/choices");
var _choicesDefault = parcelHelpers.interopDefault(_choices);
var _interfaces = require("./scripts/interfaces");
parcelHelpers.exportAll(_interfaces, exports);
var _constants = require("./scripts/constants");
parcelHelpers.exportAll(_constants, exports);
var _defaults = require("./scripts/defaults");
parcelHelpers.exportAll(_defaults, exports);
var _templates = require("./scripts/templates");
var _templatesDefault = parcelHelpers.interopDefault(_templates);
exports.default = (0, _choicesDefault.default);

},{"./scripts/choices":"7p55D","./scripts/interfaces":"aiyKQ","./scripts/constants":"5fyl3","./scripts/defaults":"dImV8","./scripts/templates":"3DkCJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7p55D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _deepmerge = require("deepmerge");
var _deepmergeDefault = parcelHelpers.interopDefault(_deepmerge);
/* eslint-disable @typescript-eslint/no-explicit-any */ var _fuseJs = require("fuse.js");
var _fuseJsDefault = parcelHelpers.interopDefault(_fuseJs);
var _choices = require("./actions/choices");
var _groups = require("./actions/groups");
var _items = require("./actions/items");
var _misc = require("./actions/misc");
var _components = require("./components");
var _constants = require("./constants");
var _defaults = require("./defaults");
var _utils = require("./lib/utils");
var _reducers = require("./reducers");
var _store = require("./store/store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _templates = require("./templates");
var _templatesDefault = parcelHelpers.interopDefault(_templates);
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ const IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
const USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ class Choices {
    static get defaults() {
        return Object.preventExtensions({
            get options () {
                return USER_DEFAULTS;
            },
            get templates () {
                return 0, _templatesDefault.default;
            }
        });
    }
    constructor(element = "[data-choice]", userConfig = {}){
        if (userConfig.allowHTML === undefined) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
        this.config = (0, _deepmergeDefault.default).all([
            (0, _defaults.DEFAULT_CONFIG),
            Choices.defaults.options,
            userConfig
        ], // When merging array configs, replace with a copy of the userConfig array,
        // instead of concatenating with the default array
        {
            arrayMerge: (_, sourceArray)=>[
                    ...sourceArray
                ]
        });
        const invalidConfigOptions = (0, _utils.diff)(this.config, (0, _defaults.DEFAULT_CONFIG));
        if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
        const passedElement = typeof element === "string" ? document.querySelector(element) : element;
        if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
        this._isTextElement = passedElement.type === (0, _constants.TEXT_TYPE);
        this._isSelectOneElement = passedElement.type === (0, _constants.SELECT_ONE_TYPE);
        this._isSelectMultipleElement = passedElement.type === (0, _constants.SELECT_MULTIPLE_TYPE);
        this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
        this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
        if (![
            "auto",
            "always"
        ].includes(`${this.config.renderSelectedChoices}`)) this.config.renderSelectedChoices = "auto";
        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
            const re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
            this.config.addItemFilter = re.test.bind(re);
        }
        if (this._isTextElement) this.passedElement = new (0, _components.WrappedInput)({
            element: passedElement,
            classNames: this.config.classNames,
            delimiter: this.config.delimiter
        });
        else this.passedElement = new (0, _components.WrappedSelect)({
            element: passedElement,
            classNames: this.config.classNames,
            template: (data)=>this._templates.option(data)
        });
        this.initialised = false;
        this._store = new (0, _storeDefault.default)();
        this._initialState = (0, _reducers.defaultState);
        this._currentState = (0, _reducers.defaultState);
        this._prevState = (0, _reducers.defaultState);
        this._currentValue = "";
        this._canSearch = !!this.config.searchEnabled;
        this._isScrollingOnIe = false;
        this._highlightPosition = 0;
        this._wasTap = true;
        this._placeholderValue = this._generatePlaceholderValue();
        this._baseId = (0, _utils.generateId)(this.passedElement.element, "choices-");
        /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */ this._direction = this.passedElement.dir;
        if (!this._direction) {
            const { direction: elementDirection  } = window.getComputedStyle(this.passedElement.element);
            const { direction: documentDirection  } = window.getComputedStyle(document.documentElement);
            if (elementDirection !== documentDirection) this._direction = elementDirection;
        }
        this._idNames = {
            itemChoice: "item-choice"
        };
        if (this._isSelectElement) {
            // Assign preset groups from passed element
            this._presetGroups = this.passedElement.optionGroups;
            // Assign preset options from passed element
            this._presetOptions = this.passedElement.options;
        }
        // Assign preset choices from passed object
        this._presetChoices = this.config.choices;
        // Assign preset items from passed object first
        this._presetItems = this.config.items;
        // Add any values passed from attribute
        if (this.passedElement.value && this._isTextElement) {
            const splitValues = this.passedElement.value.split(this.config.delimiter);
            this._presetItems = this._presetItems.concat(splitValues);
        }
        // Create array of choices from option elements
        if (this.passedElement.options) this.passedElement.options.forEach((option)=>{
            this._presetChoices.push({
                value: option.value,
                label: option.innerHTML,
                selected: !!option.selected,
                disabled: option.disabled || option.parentNode.disabled,
                placeholder: option.value === "" || option.hasAttribute("placeholder"),
                customProperties: (0, _utils.parseCustomProperties)(option.dataset.customProperties)
            });
        });
        this._render = this._render.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseOver = this._onMouseOver.bind(this);
        this._onFormReset = this._onFormReset.bind(this);
        this._onSelectKey = this._onSelectKey.bind(this);
        this._onEnterKey = this._onEnterKey.bind(this);
        this._onEscapeKey = this._onEscapeKey.bind(this);
        this._onDirectionKey = this._onDirectionKey.bind(this);
        this._onDeleteKey = this._onDeleteKey.bind(this);
        // If element has already been initialised with Choices, fail silently
        if (this.passedElement.isActive) {
            if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                element
            });
            this.initialised = true;
            return;
        }
        // Let's go
        this.init();
    }
    init() {
        if (this.initialised) return;
        this._createTemplates();
        this._createElements();
        this._createStructure();
        this._store.subscribe(this._render);
        this._render();
        this._addEventListeners();
        const shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
        if (shouldDisable) this.disable();
        this.initialised = true;
        const { callbackOnInit  } = this.config;
        // Run callback if it is a function
        if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
    }
    destroy() {
        if (!this.initialised) return;
        this._removeEventListeners();
        this.passedElement.reveal();
        this.containerOuter.unwrap(this.passedElement.element);
        this.clearStore();
        if (this._isSelectElement) this.passedElement.options = this._presetOptions;
        this._templates = (0, _templatesDefault.default);
        this.initialised = false;
    }
    enable() {
        if (this.passedElement.isDisabled) this.passedElement.enable();
        if (this.containerOuter.isDisabled) {
            this._addEventListeners();
            this.input.enable();
            this.containerOuter.enable();
        }
        return this;
    }
    disable() {
        if (!this.passedElement.isDisabled) this.passedElement.disable();
        if (!this.containerOuter.isDisabled) {
            this._removeEventListeners();
            this.input.disable();
            this.containerOuter.disable();
        }
        return this;
    }
    highlightItem(item, runEvent = true) {
        if (!item || !item.id) return this;
        const { id , groupId =-1 , value ="" , label =""  } = item;
        const group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
        this._store.dispatch((0, _items.highlightItem)(id, true));
        if (runEvent) this.passedElement.triggerEvent((0, _constants.EVENTS).highlightItem, {
            id,
            value,
            label,
            groupValue: group && group.value ? group.value : null
        });
        return this;
    }
    unhighlightItem(item) {
        if (!item || !item.id) return this;
        const { id , groupId =-1 , value ="" , label =""  } = item;
        const group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
        this._store.dispatch((0, _items.highlightItem)(id, false));
        this.passedElement.triggerEvent((0, _constants.EVENTS).highlightItem, {
            id,
            value,
            label,
            groupValue: group && group.value ? group.value : null
        });
        return this;
    }
    highlightAll() {
        this._store.items.forEach((item)=>this.highlightItem(item));
        return this;
    }
    unhighlightAll() {
        this._store.items.forEach((item)=>this.unhighlightItem(item));
        return this;
    }
    removeActiveItemsByValue(value) {
        this._store.activeItems.filter((item)=>item.value === value).forEach((item)=>this._removeItem(item));
        return this;
    }
    removeActiveItems(excludedId) {
        this._store.activeItems.filter(({ id  })=>id !== excludedId).forEach((item)=>this._removeItem(item));
        return this;
    }
    removeHighlightedItems(runEvent = false) {
        this._store.highlightedActiveItems.forEach((item)=>{
            this._removeItem(item);
            // If this action was performed by the user
            // trigger the event
            if (runEvent) this._triggerChange(item.value);
        });
        return this;
    }
    showDropdown(preventInputFocus) {
        if (this.dropdown.isActive) return this;
        requestAnimationFrame(()=>{
            this.dropdown.show();
            this.containerOuter.open(this.dropdown.distanceFromTopWindow);
            if (!preventInputFocus && this._canSearch) this.input.focus();
            this.passedElement.triggerEvent((0, _constants.EVENTS).showDropdown, {});
        });
        return this;
    }
    hideDropdown(preventInputBlur) {
        if (!this.dropdown.isActive) return this;
        requestAnimationFrame(()=>{
            this.dropdown.hide();
            this.containerOuter.close();
            if (!preventInputBlur && this._canSearch) {
                this.input.removeActiveDescendant();
                this.input.blur();
            }
            this.passedElement.triggerEvent((0, _constants.EVENTS).hideDropdown, {});
        });
        return this;
    }
    getValue(valueOnly = false) {
        const values = this._store.activeItems.reduce((selectedItems, item)=>{
            const itemValue = valueOnly ? item.value : item;
            selectedItems.push(itemValue);
            return selectedItems;
        }, []);
        return this._isSelectOneElement ? values[0] : values;
    }
    setValue(items) {
        if (!this.initialised) return this;
        items.forEach((value)=>this._setChoiceOrItem(value));
        return this;
    }
    setChoiceByValue(value) {
        if (!this.initialised || this._isTextElement) return this;
        // If only one value has been passed, convert to array
        const choiceValue = Array.isArray(value) ? value : [
            value
        ];
        // Loop through each value and
        choiceValue.forEach((val)=>this._findAndSelectChoiceByValue(val));
        return this;
    }
    /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */ setChoices(choicesArrayOrFetcher = [], value = "value", label = "label", replaceChoices = false) {
        if (!this.initialised) throw new ReferenceError(`setChoices was called on a non-initialized instance of Choices`);
        if (!this._isSelectElement) throw new TypeError(`setChoices can't be used with INPUT based Choices`);
        if (typeof value !== "string" || !value) throw new TypeError(`value parameter must be a name of 'value' field in passed objects`);
        // Clear choices if needed
        if (replaceChoices) this.clearChoices();
        if (typeof choicesArrayOrFetcher === "function") {
            // it's a choices fetcher function
            const fetcher = choicesArrayOrFetcher(this);
            if (typeof Promise === "function" && fetcher instanceof Promise) // that's a promise
            // eslint-disable-next-line no-promise-executor-return
            return new Promise((resolve)=>requestAnimationFrame(resolve)).then(()=>this._handleLoadingState(true)).then(()=>fetcher).then((data)=>this.setChoices(data, value, label, replaceChoices)).catch((err)=>{
                if (!this.config.silent) console.error(err);
            }).then(()=>this._handleLoadingState(false)).then(()=>this);
            // function returned something else than promise, let's check if it's an array of choices
            if (!Array.isArray(fetcher)) throw new TypeError(`.setChoices first argument function must return either array of choices or Promise, got: ${typeof fetcher}`);
            // recursion with results, it's sync and choices were cleared already
            return this.setChoices(fetcher, value, label, false);
        }
        if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(`.setChoices must be called either with array of choices with a function resulting into Promise of array of choices`);
        this.containerOuter.removeLoadingState();
        this._startLoading();
        choicesArrayOrFetcher.forEach((groupOrChoice)=>{
            if (groupOrChoice.choices) this._addGroup({
                id: groupOrChoice.id ? parseInt(`${groupOrChoice.id}`, 10) : null,
                group: groupOrChoice,
                valueKey: value,
                labelKey: label
            });
            else {
                const choice = groupOrChoice;
                this._addChoice({
                    value: choice[value],
                    label: choice[label],
                    isSelected: !!choice.selected,
                    isDisabled: !!choice.disabled,
                    placeholder: !!choice.placeholder,
                    customProperties: choice.customProperties
                });
            }
        });
        this._stopLoading();
        return this;
    }
    clearChoices() {
        this._store.dispatch((0, _choices.clearChoices)());
        return this;
    }
    clearStore() {
        this._store.dispatch((0, _misc.clearAll)());
        return this;
    }
    clearInput() {
        const shouldSetInputWidth = !this._isSelectOneElement;
        this.input.clear(shouldSetInputWidth);
        if (!this._isTextElement && this._canSearch) {
            this._isSearching = false;
            this._store.dispatch((0, _choices.activateChoices)(true));
        }
        return this;
    }
    _render() {
        if (this._store.isLoading()) return;
        this._currentState = this._store.state;
        const stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
        const shouldRenderChoices = this._isSelectElement;
        const shouldRenderItems = this._currentState.items !== this._prevState.items;
        if (!stateChanged) return;
        if (shouldRenderChoices) this._renderChoices();
        if (shouldRenderItems) this._renderItems();
        this._prevState = this._currentState;
    }
    _renderChoices() {
        const { activeGroups , activeChoices  } = this._store;
        let choiceListFragment = document.createDocumentFragment();
        this.choiceList.clear();
        if (this.config.resetScrollPosition) requestAnimationFrame(()=>this.choiceList.scrollToTop());
        // If we have grouped options
        if (activeGroups.length >= 1 && !this._isSearching) {
            // If we have a placeholder choice along with groups
            const activePlaceholders = activeChoices.filter((activeChoice)=>activeChoice.placeholder === true && activeChoice.groupId === -1);
            if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
        } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
        // If we have choices to show
        if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
            const { activeItems  } = this._store;
            const canAddItem = this._canAddItem(activeItems, this.input.value);
            // ...and we can select them
            if (canAddItem.response) {
                // ...append them and highlight the first choice
                this.choiceList.append(choiceListFragment);
                this._highlightChoice();
            } else {
                const notice = this._getTemplate("notice", canAddItem.notice);
                this.choiceList.append(notice);
            }
        } else {
            // Otherwise show a notice
            let dropdownItem;
            let notice;
            if (this._isSearching) {
                notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                dropdownItem = this._getTemplate("notice", notice, "no-results");
            } else {
                notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                dropdownItem = this._getTemplate("notice", notice, "no-choices");
            }
            this.choiceList.append(dropdownItem);
        }
    }
    _renderItems() {
        const activeItems = this._store.activeItems || [];
        this.itemList.clear();
        // Create a fragment to store our list items
        // (so we don't have to update the DOM for each item)
        const itemListFragment = this._createItemsFragment(activeItems);
        // If we have items to add, append them
        if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
    }
    _createGroupsFragment(groups, choices, fragment = document.createDocumentFragment()) {
        const getGroupChoices = (group)=>choices.filter((choice)=>{
                if (this._isSelectOneElement) return choice.groupId === group.id;
                return choice.groupId === group.id && (this.config.renderSelectedChoices === "always" || !choice.selected);
            });
        // If sorting is enabled, filter groups
        if (this.config.shouldSort) groups.sort(this.config.sorter);
        groups.forEach((group)=>{
            const groupChoices = getGroupChoices(group);
            if (groupChoices.length >= 1) {
                const dropdownGroup = this._getTemplate("choiceGroup", group);
                fragment.appendChild(dropdownGroup);
                this._createChoicesFragment(groupChoices, fragment, true);
            }
        });
        return fragment;
    }
    _createChoicesFragment(choices, fragment = document.createDocumentFragment(), withinGroup = false) {
        // Create a fragment to store our list items (so we don't have to update the DOM for each item)
        const { renderSelectedChoices , searchResultLimit , renderChoiceLimit  } = this.config;
        const filter = this._isSearching ? (0, _utils.sortByScore) : this.config.sorter;
        const appendChoice = (choice)=>{
            const shouldRender = renderSelectedChoices === "auto" ? this._isSelectOneElement || !choice.selected : true;
            if (shouldRender) {
                const dropdownItem = this._getTemplate("choice", choice, this.config.itemSelectText);
                fragment.appendChild(dropdownItem);
            }
        };
        let rendererableChoices = choices;
        if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter((choice)=>!choice.selected);
        // Split array into placeholders and "normal" choices
        const { placeholderChoices , normalChoices  } = rendererableChoices.reduce((acc, choice)=>{
            if (choice.placeholder) acc.placeholderChoices.push(choice);
            else acc.normalChoices.push(choice);
            return acc;
        }, {
            placeholderChoices: [],
            normalChoices: []
        });
        // If sorting is enabled or the user is searching, filter choices
        if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
        let choiceLimit = rendererableChoices.length;
        // Prepend placeholeder
        const sortedChoices = this._isSelectOneElement ? [
            ...placeholderChoices,
            ...normalChoices
        ] : normalChoices;
        if (this._isSearching) choiceLimit = searchResultLimit;
        else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
        // Add each choice to dropdown within range
        for(let i = 0; i < choiceLimit; i += 1)if (sortedChoices[i]) appendChoice(sortedChoices[i]);
        return fragment;
    }
    _createItemsFragment(items, fragment = document.createDocumentFragment()) {
        // Create fragment to add elements to
        const { shouldSortItems , sorter , removeItemButton  } = this.config;
        // If sorting is enabled, filter items
        if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
        if (this._isTextElement) // Update the value of the hidden input
        this.passedElement.value = items.map(({ value  })=>value).join(this.config.delimiter);
        else // Update the options of the hidden input
        this.passedElement.options = items;
        const addItemToFragment = (item)=>{
            // Create new list element
            const listItem = this._getTemplate("item", item, removeItemButton);
            // Append it to list
            fragment.appendChild(listItem);
        };
        // Add each list item to list
        items.forEach(addItemToFragment);
        return fragment;
    }
    _triggerChange(value) {
        if (value === undefined || value === null) return;
        this.passedElement.triggerEvent((0, _constants.EVENTS).change, {
            value
        });
    }
    _selectPlaceholderChoice(placeholderChoice) {
        this._addItem({
            value: placeholderChoice.value,
            label: placeholderChoice.label,
            choiceId: placeholderChoice.id,
            groupId: placeholderChoice.groupId,
            placeholder: placeholderChoice.placeholder
        });
        this._triggerChange(placeholderChoice.value);
    }
    _handleButtonAction(activeItems, element) {
        if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
        const itemId = element.parentNode && element.parentNode.dataset.id;
        const itemToRemove = itemId && activeItems.find((item)=>item.id === parseInt(itemId, 10));
        if (!itemToRemove) return;
        // Remove item associated with button
        this._removeItem(itemToRemove);
        this._triggerChange(itemToRemove.value);
        if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
    }
    _handleItemAction(activeItems, element, hasShiftKey = false) {
        if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
        const passedId = element.dataset.id;
        // We only want to select one item with a click
        // so we deselect any items that aren't the target
        // unless shift is being pressed
        activeItems.forEach((item)=>{
            if (item.id === parseInt(`${passedId}`, 10) && !item.highlighted) this.highlightItem(item);
            else if (!hasShiftKey && item.highlighted) this.unhighlightItem(item);
        });
        // Focus input as without focus, a user cannot do anything with a
        // highlighted item
        this.input.focus();
    }
    _handleChoiceAction(activeItems, element) {
        if (!activeItems || !element) return;
        // If we are clicking on an option
        const { id  } = element.dataset;
        const choice = id && this._store.getChoiceById(id);
        if (!choice) return;
        const passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
        const hasActiveDropdown = this.dropdown.isActive;
        // Update choice keyCode
        choice.keyCode = passedKeyCode;
        this.passedElement.triggerEvent((0, _constants.EVENTS).choice, {
            choice
        });
        if (!choice.selected && !choice.disabled) {
            const canAddItem = this._canAddItem(activeItems, choice.value);
            if (canAddItem.response) {
                this._addItem({
                    value: choice.value,
                    label: choice.label,
                    choiceId: choice.id,
                    groupId: choice.groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder,
                    keyCode: choice.keyCode
                });
                this._triggerChange(choice.value);
            }
        }
        this.clearInput();
        // We want to close the dropdown if we are dealing with a single select box
        if (hasActiveDropdown && this._isSelectOneElement) {
            this.hideDropdown(true);
            this.containerOuter.focus();
        }
    }
    _handleBackspace(activeItems) {
        if (!this.config.removeItems || !activeItems) return;
        const lastItem = activeItems[activeItems.length - 1];
        const hasHighlightedItems = activeItems.some((item)=>item.highlighted);
        // If editing the last item is allowed and there are not other selected items,
        // we can edit the item value. Otherwise if we can remove items, remove all selected items
        if (this.config.editItems && !hasHighlightedItems && lastItem) {
            this.input.value = lastItem.value;
            this.input.setWidth();
            this._removeItem(lastItem);
            this._triggerChange(lastItem.value);
        } else {
            if (!hasHighlightedItems) // Highlight last item if none already highlighted
            this.highlightItem(lastItem, false);
            this.removeHighlightedItems(true);
        }
    }
    _startLoading() {
        this._store.dispatch((0, _misc.setIsLoading)(true));
    }
    _stopLoading() {
        this._store.dispatch((0, _misc.setIsLoading)(false));
    }
    _handleLoadingState(setLoading = true) {
        let placeholderItem = this.itemList.getChild(`.${this.config.classNames.placeholder}`);
        if (setLoading) {
            this.disable();
            this.containerOuter.addLoadingState();
            if (this._isSelectOneElement) {
                if (!placeholderItem) {
                    placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                    if (placeholderItem) this.itemList.append(placeholderItem);
                } else placeholderItem.innerHTML = this.config.loadingText;
            } else this.input.placeholder = this.config.loadingText;
        } else {
            this.enable();
            this.containerOuter.removeLoadingState();
            if (this._isSelectOneElement) {
                if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
            } else this.input.placeholder = this._placeholderValue || "";
        }
    }
    _handleSearch(value) {
        if (!this.input.isFocussed) return;
        const { choices  } = this._store;
        const { searchFloor , searchChoices  } = this.config;
        const hasUnactiveChoices = choices.some((option)=>!option.active);
        // Check that we have a value to search and the input was an alphanumeric character
        if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
            const resultCount = searchChoices ? this._searchChoices(value) : 0;
            // Trigger search event
            this.passedElement.triggerEvent((0, _constants.EVENTS).search, {
                value,
                resultCount
            });
        } else if (hasUnactiveChoices) {
            // Otherwise reset choices to active
            this._isSearching = false;
            this._store.dispatch((0, _choices.activateChoices)(true));
        }
    }
    _canAddItem(activeItems, value) {
        let canAddItem = true;
        let notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
        if (!this._isSelectOneElement) {
            const isDuplicateValue = (0, _utils.existsInArray)(activeItems, value);
            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                // If there is a max entry limit and we have reached that limit
                // don't update
                canAddItem = false;
                notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
            }
            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                canAddItem = false;
                notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
            }
            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                canAddItem = false;
                notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
            }
        }
        return {
            response: canAddItem,
            notice
        };
    }
    _searchChoices(value) {
        const newValue = typeof value === "string" ? value.trim() : value;
        const currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
        if (newValue.length < 1 && newValue === `${currentValue} `) return 0;
        // If new value matches the desired length and is not the same as the current value with a space
        const haystack = this._store.searchableChoices;
        const needle = newValue;
        const options = Object.assign(this.config.fuseOptions, {
            keys: [
                ...this.config.searchFields
            ],
            includeMatches: true
        });
        const fuse = new (0, _fuseJsDefault.default)(haystack, options);
        const results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
        this._currentValue = newValue;
        this._highlightPosition = 0;
        this._isSearching = true;
        this._store.dispatch((0, _choices.filterChoices)(results));
        return results.length;
    }
    _addEventListeners() {
        const { documentElement  } = document;
        // capture events - can cancel event processing or propagation
        documentElement.addEventListener("touchend", this._onTouchEnd, true);
        this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
        this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
        // passive events - doesn't call `preventDefault` or `stopPropagation`
        documentElement.addEventListener("click", this._onClick, {
            passive: true
        });
        documentElement.addEventListener("touchmove", this._onTouchMove, {
            passive: true
        });
        this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
            passive: true
        });
        if (this._isSelectOneElement) {
            this.containerOuter.element.addEventListener("focus", this._onFocus, {
                passive: true
            });
            this.containerOuter.element.addEventListener("blur", this._onBlur, {
                passive: true
            });
        }
        this.input.element.addEventListener("keyup", this._onKeyUp, {
            passive: true
        });
        this.input.element.addEventListener("focus", this._onFocus, {
            passive: true
        });
        this.input.element.addEventListener("blur", this._onBlur, {
            passive: true
        });
        if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
            passive: true
        });
        this.input.addEventListeners();
    }
    _removeEventListeners() {
        const { documentElement  } = document;
        documentElement.removeEventListener("touchend", this._onTouchEnd, true);
        this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
        this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
        documentElement.removeEventListener("click", this._onClick);
        documentElement.removeEventListener("touchmove", this._onTouchMove);
        this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
        if (this._isSelectOneElement) {
            this.containerOuter.element.removeEventListener("focus", this._onFocus);
            this.containerOuter.element.removeEventListener("blur", this._onBlur);
        }
        this.input.element.removeEventListener("keyup", this._onKeyUp);
        this.input.element.removeEventListener("focus", this._onFocus);
        this.input.element.removeEventListener("blur", this._onBlur);
        if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
        this.input.removeEventListeners();
    }
    _onKeyDown(event) {
        const { keyCode  } = event;
        const { activeItems  } = this._store;
        const hasFocusedInput = this.input.isFocussed;
        const hasActiveDropdown = this.dropdown.isActive;
        const hasItems = this.itemList.hasChildren();
        const keyString = String.fromCharCode(keyCode);
        // eslint-disable-next-line no-control-regex
        const wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
        const { BACK_KEY , DELETE_KEY , ENTER_KEY , A_KEY , ESC_KEY , UP_KEY , DOWN_KEY , PAGE_UP_KEY , PAGE_DOWN_KEY  } = (0, _constants.KEY_CODES);
        if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
            this.showDropdown();
            if (!this.input.isFocussed) /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */ this.input.value += event.key.toLowerCase();
        }
        switch(keyCode){
            case A_KEY:
                return this._onSelectKey(event, hasItems);
            case ENTER_KEY:
                return this._onEnterKey(event, activeItems, hasActiveDropdown);
            case ESC_KEY:
                return this._onEscapeKey(hasActiveDropdown);
            case UP_KEY:
            case PAGE_UP_KEY:
            case DOWN_KEY:
            case PAGE_DOWN_KEY:
                return this._onDirectionKey(event, hasActiveDropdown);
            case DELETE_KEY:
            case BACK_KEY:
                return this._onDeleteKey(event, activeItems, hasFocusedInput);
            default:
        }
    }
    _onKeyUp({ target , keyCode  }) {
        const { value  } = this.input;
        const { activeItems  } = this._store;
        const canAddItem = this._canAddItem(activeItems, value);
        const { BACK_KEY: backKey , DELETE_KEY: deleteKey  } = (0, _constants.KEY_CODES);
        // We are typing into a text input and have a value, we want to show a dropdown
        // notice. Otherwise hide the dropdown
        if (this._isTextElement) {
            const canShowDropdownNotice = canAddItem.notice && value;
            if (canShowDropdownNotice) {
                const dropdownItem = this._getTemplate("notice", canAddItem.notice);
                this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                this.showDropdown(true);
            } else this.hideDropdown(true);
        } else {
            const wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
            const userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
            const canReactivateChoices = !this._isTextElement && this._isSearching;
            const canSearch = this._canSearch && canAddItem.response;
            if (userHasRemovedValue && canReactivateChoices) {
                this._isSearching = false;
                this._store.dispatch((0, _choices.activateChoices)(true));
            } else if (canSearch) this._handleSearch(this.input.rawValue);
        }
        this._canSearch = this.config.searchEnabled;
    }
    _onSelectKey(event, hasItems) {
        const { ctrlKey , metaKey  } = event;
        const hasCtrlDownKeyPressed = ctrlKey || metaKey;
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if (hasCtrlDownKeyPressed && hasItems) {
            this._canSearch = false;
            const shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
            if (shouldHightlightAll) this.highlightAll();
        }
    }
    _onEnterKey(event, activeItems, hasActiveDropdown) {
        const { target  } = event;
        const { ENTER_KEY: enterKey  } = (0, _constants.KEY_CODES);
        const targetWasButton = target && target.hasAttribute("data-button");
        if (this._isTextElement && target && target.value) {
            const { value  } = this.input;
            const canAddItem = this._canAddItem(activeItems, value);
            if (canAddItem.response) {
                this.hideDropdown(true);
                this._addItem({
                    value
                });
                this._triggerChange(value);
                this.clearInput();
            }
        }
        if (targetWasButton) {
            this._handleButtonAction(activeItems, target);
            event.preventDefault();
        }
        if (hasActiveDropdown) {
            const highlightedChoice = this.dropdown.getChild(`.${this.config.classNames.highlightedState}`);
            if (highlightedChoice) {
                // add enter keyCode value
                if (activeItems[0]) activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                this._handleChoiceAction(activeItems, highlightedChoice);
            }
            event.preventDefault();
        } else if (this._isSelectOneElement) {
            this.showDropdown();
            event.preventDefault();
        }
    }
    _onEscapeKey(hasActiveDropdown) {
        if (hasActiveDropdown) {
            this.hideDropdown(true);
            this.containerOuter.focus();
        }
    }
    _onDirectionKey(event, hasActiveDropdown) {
        const { keyCode , metaKey  } = event;
        const { DOWN_KEY: downKey , PAGE_UP_KEY: pageUpKey , PAGE_DOWN_KEY: pageDownKey  } = (0, _constants.KEY_CODES);
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown || this._isSelectOneElement) {
            this.showDropdown();
            this._canSearch = false;
            const directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
            const skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
            const selectableChoiceIdentifier = "[data-choice-selectable]";
            let nextEl;
            if (skipKey) {
                if (directionInt > 0) nextEl = this.dropdown.element.querySelector(`${selectableChoiceIdentifier}:last-of-type`);
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            } else {
                const currentEl = this.dropdown.element.querySelector(`.${this.config.classNames.highlightedState}`);
                if (currentEl) nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
            if (nextEl) {
                // We prevent default to stop the cursor moving
                // when pressing the arrow
                if (!(0, _utils.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                this._highlightChoice(nextEl);
            }
            // Prevent default to maintain cursor position whilst
            // traversing dropdown options
            event.preventDefault();
        }
    }
    _onDeleteKey(event, activeItems, hasFocusedInput) {
        const { target  } = event;
        // If backspace or delete key is pressed and the input has no value
        if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
            this._handleBackspace(activeItems);
            event.preventDefault();
        }
    }
    _onTouchMove() {
        if (this._wasTap) this._wasTap = false;
    }
    _onTouchEnd(event) {
        const { target  } = event || event.touches[0];
        const touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
        if (touchWasWithinContainer) {
            const containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
            if (containerWasExactTarget) {
                if (this._isTextElement) this.input.focus();
                else if (this._isSelectMultipleElement) this.showDropdown();
            }
            // Prevents focus event firing
            event.stopPropagation();
        }
        this._wasTap = true;
    }
    /**
   * Handles mousedown event in capture mode for containetOuter.element
   */ _onMouseDown(event) {
        const { target  } = event;
        if (!(target instanceof HTMLElement)) return;
        // If we have our mouse down on the scrollbar and are on IE11...
        if (IS_IE11 && this.choiceList.element.contains(target)) {
            // check if click was on a scrollbar area
            const firstChoice = this.choiceList.element.firstElementChild;
            const isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
            this._isScrollingOnIe = isOnScrollbar;
        }
        if (target === this.input.element) return;
        const item = target.closest("[data-button],[data-item],[data-choice]");
        if (item instanceof HTMLElement) {
            const hasShiftKey = event.shiftKey;
            const { activeItems  } = this._store;
            const { dataset  } = item;
            if ("button" in dataset) this._handleButtonAction(activeItems, item);
            else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey);
            else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
        }
        event.preventDefault();
    }
    /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */ _onMouseOver({ target  }) {
        if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
    }
    _onClick({ target  }) {
        const clickWasWithinContainer = this.containerOuter.element.contains(target);
        if (clickWasWithinContainer) {
            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                if (this._isTextElement) {
                    if (document.activeElement !== this.input.element) this.input.focus();
                } else {
                    this.showDropdown();
                    this.containerOuter.focus();
                }
            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
        } else {
            const hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
            if (hasHighlightedItems) this.unhighlightAll();
            this.containerOuter.removeFocusState();
            this.hideDropdown(true);
        }
    }
    _onFocus({ target  }) {
        const focusWasWithinContainer = target && this.containerOuter.element.contains(target);
        if (!focusWasWithinContainer) return;
        const focusActions = {
            [(0, _constants.TEXT_TYPE)]: ()=>{
                if (target === this.input.element) this.containerOuter.addFocusState();
            },
            [(0, _constants.SELECT_ONE_TYPE)]: ()=>{
                this.containerOuter.addFocusState();
                if (target === this.input.element) this.showDropdown(true);
            },
            [(0, _constants.SELECT_MULTIPLE_TYPE)]: ()=>{
                if (target === this.input.element) {
                    this.showDropdown(true);
                    // If element is a select box, the focused element is the container and the dropdown
                    // isn't already open, focus and show dropdown
                    this.containerOuter.addFocusState();
                }
            }
        };
        focusActions[this.passedElement.element.type]();
    }
    _onBlur({ target  }) {
        const blurWasWithinContainer = target && this.containerOuter.element.contains(target);
        if (blurWasWithinContainer && !this._isScrollingOnIe) {
            const { activeItems  } = this._store;
            const hasHighlightedItems = activeItems.some((item)=>item.highlighted);
            const blurActions = {
                [(0, _constants.TEXT_TYPE)]: ()=>{
                    if (target === this.input.element) {
                        this.containerOuter.removeFocusState();
                        if (hasHighlightedItems) this.unhighlightAll();
                        this.hideDropdown(true);
                    }
                },
                [(0, _constants.SELECT_ONE_TYPE)]: ()=>{
                    this.containerOuter.removeFocusState();
                    if (target === this.input.element || target === this.containerOuter.element && !this._canSearch) this.hideDropdown(true);
                },
                [(0, _constants.SELECT_MULTIPLE_TYPE)]: ()=>{
                    if (target === this.input.element) {
                        this.containerOuter.removeFocusState();
                        this.hideDropdown(true);
                        if (hasHighlightedItems) this.unhighlightAll();
                    }
                }
            };
            blurActions[this.passedElement.element.type]();
        } else {
            // On IE11, clicking the scollbar blurs our input and thus
            // closes the dropdown. To stop this, we refocus our input
            // if we know we are on IE *and* are scrolling.
            this._isScrollingOnIe = false;
            this.input.element.focus();
        }
    }
    _onFormReset() {
        this._store.dispatch((0, _misc.resetTo)(this._initialState));
    }
    _highlightChoice(el = null) {
        const choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
        if (!choices.length) return;
        let passedEl = el;
        const highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(`.${this.config.classNames.highlightedState}`));
        // Remove any highlighted choices
        highlightedChoices.forEach((choice)=>{
            choice.classList.remove(this.config.classNames.highlightedState);
            choice.setAttribute("aria-selected", "false");
        });
        if (passedEl) this._highlightPosition = choices.indexOf(passedEl);
        else {
            // Highlight choice based on last known highlight location
            if (choices.length > this._highlightPosition) // If we have an option to highlight
            passedEl = choices[this._highlightPosition];
            else // Otherwise highlight the option before
            passedEl = choices[choices.length - 1];
            if (!passedEl) passedEl = choices[0];
        }
        passedEl.classList.add(this.config.classNames.highlightedState);
        passedEl.setAttribute("aria-selected", "true");
        this.passedElement.triggerEvent((0, _constants.EVENTS).highlightChoice, {
            el: passedEl
        });
        if (this.dropdown.isActive) {
            // IE11 ignores aria-label and blocks virtual keyboard
            // if aria-activedescendant is set without a dropdown
            this.input.setActiveDescendant(passedEl.id);
            this.containerOuter.setActiveDescendant(passedEl.id);
        }
    }
    _addItem({ value , label =null , choiceId =-1 , groupId =-1 , customProperties ={} , placeholder =false , keyCode =-1  }) {
        let passedValue = typeof value === "string" ? value.trim() : value;
        const { items  } = this._store;
        const passedLabel = label || passedValue;
        const passedOptionId = choiceId || -1;
        const group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
        const id = items ? items.length + 1 : 1;
        // If a prepended value has been passed, prepend it
        if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
        // If an appended value has been passed, append it
        if (this.config.appendValue) passedValue += this.config.appendValue.toString();
        this._store.dispatch((0, _items.addItem)({
            value: passedValue,
            label: passedLabel,
            id,
            choiceId: passedOptionId,
            groupId,
            customProperties,
            placeholder,
            keyCode
        }));
        if (this._isSelectOneElement) this.removeActiveItems(id);
        // Trigger change event
        this.passedElement.triggerEvent((0, _constants.EVENTS).addItem, {
            id,
            value: passedValue,
            label: passedLabel,
            customProperties,
            groupValue: group && group.value ? group.value : null,
            keyCode
        });
    }
    _removeItem(item) {
        const { id , value , label , customProperties , choiceId , groupId  } = item;
        const group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
        if (!id || !choiceId) return;
        this._store.dispatch((0, _items.removeItem)(id, choiceId));
        this.passedElement.triggerEvent((0, _constants.EVENTS).removeItem, {
            id,
            value,
            label,
            customProperties,
            groupValue: group && group.value ? group.value : null
        });
    }
    _addChoice({ value , label =null , isSelected =false , isDisabled =false , groupId =-1 , customProperties ={} , placeholder =false , keyCode =-1  }) {
        if (typeof value === "undefined" || value === null) return;
        // Generate unique id
        const { choices  } = this._store;
        const choiceLabel = label || value;
        const choiceId = choices ? choices.length + 1 : 1;
        const choiceElementId = `${this._baseId}-${this._idNames.itemChoice}-${choiceId}`;
        this._store.dispatch((0, _choices.addChoice)({
            id: choiceId,
            groupId,
            elementId: choiceElementId,
            value,
            label: choiceLabel,
            disabled: isDisabled,
            customProperties,
            placeholder,
            keyCode
        }));
        if (isSelected) this._addItem({
            value,
            label: choiceLabel,
            choiceId,
            customProperties,
            placeholder,
            keyCode
        });
    }
    _addGroup({ group , id , valueKey ="value" , labelKey ="label"  }) {
        const groupChoices = (0, _utils.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
        const groupId = id || Math.floor(new Date().valueOf() * Math.random());
        const isDisabled = group.disabled ? group.disabled : false;
        if (groupChoices) {
            this._store.dispatch((0, _groups.addGroup)({
                value: group.label,
                id: groupId,
                active: true,
                disabled: isDisabled
            }));
            const addGroupChoices = (choice)=>{
                const isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                this._addChoice({
                    value: choice[valueKey],
                    label: (0, _utils.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                    isSelected: choice.selected,
                    isDisabled: isOptDisabled,
                    groupId,
                    customProperties: choice.customProperties,
                    placeholder: choice.placeholder
                });
            };
            groupChoices.forEach(addGroupChoices);
        } else this._store.dispatch((0, _groups.addGroup)({
            value: group.label,
            id: group.id,
            active: false,
            disabled: group.disabled
        }));
    }
    _getTemplate(template, ...args) {
        return this._templates[template].call(this, this.config, ...args);
    }
    _createTemplates() {
        const { callbackOnCreateTemplates  } = this.config;
        let userTemplates = {};
        if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, (0, _utils.strToEl));
        this._templates = (0, _deepmergeDefault.default)((0, _templatesDefault.default), userTemplates);
    }
    _createElements() {
        this.containerOuter = new (0, _components.Container)({
            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
        });
        this.containerInner = new (0, _components.Container)({
            element: this._getTemplate("containerInner"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            position: this.config.position
        });
        this.input = new (0, _components.Input)({
            element: this._getTemplate("input", this._placeholderValue),
            classNames: this.config.classNames,
            type: this.passedElement.element.type,
            preventPaste: !this.config.paste
        });
        this.choiceList = new (0, _components.List)({
            element: this._getTemplate("choiceList", this._isSelectOneElement)
        });
        this.itemList = new (0, _components.List)({
            element: this._getTemplate("itemList", this._isSelectOneElement)
        });
        this.dropdown = new (0, _components.Dropdown)({
            element: this._getTemplate("dropdown"),
            classNames: this.config.classNames,
            type: this.passedElement.element.type
        });
    }
    _createStructure() {
        // Hide original element
        this.passedElement.conceal();
        // Wrap input in container preserving DOM ordering
        this.containerInner.wrap(this.passedElement.element);
        // Wrapper inner container with outer container
        this.containerOuter.wrap(this.containerInner.element);
        if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || "";
        else if (this._placeholderValue) {
            this.input.placeholder = this._placeholderValue;
            this.input.setWidth();
        }
        this.containerOuter.element.appendChild(this.containerInner.element);
        this.containerOuter.element.appendChild(this.dropdown.element);
        this.containerInner.element.appendChild(this.itemList.element);
        if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
        if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element);
        else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
        if (this._isSelectElement) {
            this._highlightPosition = 0;
            this._isSearching = false;
            this._startLoading();
            if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups);
            else this._addPredefinedChoices(this._presetChoices);
            this._stopLoading();
        }
        if (this._isTextElement) this._addPredefinedItems(this._presetItems);
    }
    _addPredefinedGroups(groups) {
        // If we have a placeholder option
        const placeholderChoice = this.passedElement.placeholderOption;
        if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
            value: placeholderChoice.value,
            label: placeholderChoice.innerHTML,
            isSelected: placeholderChoice.selected,
            isDisabled: placeholderChoice.disabled,
            placeholder: true
        });
        groups.forEach((group)=>this._addGroup({
                group,
                id: group.id || null
            }));
    }
    _addPredefinedChoices(choices) {
        // If sorting is enabled or the user is searching, filter choices
        if (this.config.shouldSort) choices.sort(this.config.sorter);
        const hasSelectedChoice = choices.some((choice)=>choice.selected);
        const firstEnabledChoiceIndex = choices.findIndex((choice)=>choice.disabled === undefined || !choice.disabled);
        choices.forEach((choice, index)=>{
            const { value ="" , label , customProperties , placeholder  } = choice;
            if (this._isSelectElement) {
                // If the choice is actually a group
                if (choice.choices) this._addGroup({
                    group: choice,
                    id: choice.id || null
                });
                else {
                    /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */ const shouldPreselect = this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                    const isSelected = shouldPreselect ? true : choice.selected;
                    const isDisabled = choice.disabled;
                    this._addChoice({
                        value,
                        label,
                        isSelected: !!isSelected,
                        isDisabled: !!isDisabled,
                        placeholder: !!placeholder,
                        customProperties
                    });
                }
            } else this._addChoice({
                value,
                label,
                isSelected: !!choice.selected,
                isDisabled: !!choice.disabled,
                placeholder: !!choice.placeholder,
                customProperties
            });
        });
    }
    _addPredefinedItems(items) {
        items.forEach((item)=>{
            if (typeof item === "object" && item.value) this._addItem({
                value: item.value,
                label: item.label,
                choiceId: item.id,
                customProperties: item.customProperties,
                placeholder: item.placeholder
            });
            if (typeof item === "string") this._addItem({
                value: item
            });
        });
    }
    _setChoiceOrItem(item) {
        const itemType = (0, _utils.getType)(item).toLowerCase();
        const handleType = {
            object: ()=>{
                if (!item.value) return;
                // If we are dealing with a select input, we need to create an option first
                // that is then selected. For text inputs we can just add items normally.
                if (!this._isTextElement) this._addChoice({
                    value: item.value,
                    label: item.label,
                    isSelected: true,
                    isDisabled: false,
                    customProperties: item.customProperties,
                    placeholder: item.placeholder
                });
                else this._addItem({
                    value: item.value,
                    label: item.label,
                    choiceId: item.id,
                    customProperties: item.customProperties,
                    placeholder: item.placeholder
                });
            },
            string: ()=>{
                if (!this._isTextElement) this._addChoice({
                    value: item,
                    label: item,
                    isSelected: true,
                    isDisabled: false
                });
                else this._addItem({
                    value: item
                });
            }
        };
        handleType[itemType]();
    }
    _findAndSelectChoiceByValue(value) {
        const { choices  } = this._store;
        // Check 'value' property exists and the choice isn't already selected
        const foundChoice = choices.find((choice)=>this.config.valueComparer(choice.value, value));
        if (foundChoice && !foundChoice.selected) this._addItem({
            value: foundChoice.value,
            label: foundChoice.label,
            choiceId: foundChoice.id,
            groupId: foundChoice.groupId,
            customProperties: foundChoice.customProperties,
            placeholder: foundChoice.placeholder,
            keyCode: foundChoice.keyCode
        });
    }
    _generatePlaceholderValue() {
        if (this._isSelectElement && this.passedElement.placeholderOption) {
            const { placeholderOption  } = this.passedElement;
            return placeholderOption ? placeholderOption.text : null;
        }
        const { placeholder , placeholderValue  } = this.config;
        const { element: { dataset  }  } = this.passedElement;
        if (placeholder) {
            if (placeholderValue) return placeholderValue;
            if (dataset.placeholder) return dataset.placeholder;
        }
        return null;
    }
}
exports.default = Choices;

},{"deepmerge":"ck1Q2","fuse.js":"4xnao","./actions/choices":"jhVPm","./actions/groups":"JGkYB","./actions/items":"kz423","./actions/misc":"lIz6x","./components":"1yew0","./constants":"5fyl3","./defaults":"dImV8","./lib/utils":"33FIt","./reducers":"2IiQq","./store/store":"tDSen","./templates":"3DkCJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ck1Q2":[function(require,module,exports) {
"use strict";
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) return deepmerge;
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) return;
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
    else if (sourceIsArray) return options.arrayMerge(target, source, options);
    else return mergeObject(target, source, options);
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) throw new Error("first argument should be an array");
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

},{}],"4xnao":[function(require,module,exports) {
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fuse);
function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
    return value == null ? "" : baseToString(value);
}
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number";
}
// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
    return typeof value === "object";
}
// Checks if `value` is object-like.
function isObjectLike(value) {
    return isObject(value) && value !== null;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isBlank(value) {
    return !value.trim().length;
}
// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
    return value == null ? value === undefined ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
    constructor(keys){
        this._keys = [];
        this._keyMap = {};
        let totalWeight = 0;
        keys.forEach((key)=>{
            let obj = createKey(key);
            totalWeight += obj.weight;
            this._keys.push(obj);
            this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
        });
        // Normalize weights so that their sum is equal to 1
        this._keys.forEach((key)=>{
            key.weight /= totalWeight;
        });
    }
    get(keyId) {
        return this._keyMap[keyId];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
    }
}
function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
        src = key;
        path = createKeyPath(key);
        id = createKeyId(key);
    } else {
        if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
        const name = key.name;
        src = name;
        if (hasOwn.call(key, "weight")) {
            weight = key.weight;
            if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
        path = createKeyPath(name);
        id = createKeyId(name);
        getFn = key.getFn;
    }
    return {
        path,
        id,
        weight,
        src,
        getFn
    };
}
function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj, path, index)=>{
        if (!isDefined(obj)) return;
        if (!path[index]) // If there's no path left, we've arrived at the object we care about.
        list.push(obj);
        else {
            let key = path[index];
            const value = obj[key];
            if (!isDefined(value)) return;
            // If we're at the last value in the path, and if it's a string/number/bool,
            // add it to the list
            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value));
            else if (isArray(value)) {
                arr = true;
                // Search each item in the array.
                for(let i = 0, len = value.length; i < len; i += 1)deepGet(value[i], path, index + 1);
            } else if (path.length) // An object. Recurse further.
            deepGet(value, path, index + 1);
        }
    };
    // Backwards compatibility (since path used to be a string)
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
}
const MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
};
const BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b)=>a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
};
const AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
};
var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
};
const SPACE = /[^ ]+/g;
// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
    const cache = new Map();
    const m = Math.pow(10, mantissa);
    return {
        get (value) {
            const numTokens = value.match(SPACE).length;
            if (cache.has(numTokens)) return cache.get(numTokens);
            // Default function is 1/sqrt(x), weight makes that variable
            const norm = 1 / Math.pow(numTokens, 0.5 * weight);
            // In place of `toFixed(mantissa)`, for faster computation
            const n = parseFloat(Math.round(norm * m) / m);
            cache.set(numTokens, n);
            return n;
        },
        clear () {
            cache.clear();
        }
    };
}
class FuseIndex {
    constructor({ getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}){
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
    setSources(docs = []) {
        this.docs = docs;
    }
    setIndexRecords(records = []) {
        this.records = records;
    }
    setKeys(keys = []) {
        this.keys = keys;
        this._keysMap = {};
        keys.forEach((key, idx)=>{
            this._keysMap[key.id] = idx;
        });
    }
    create() {
        if (this.isCreated || !this.docs.length) return;
        this.isCreated = true;
        // List is Array<String>
        if (isString(this.docs[0])) this.docs.forEach((doc, docIndex)=>{
            this._addString(doc, docIndex);
        });
        else // List is Array<Object>
        this.docs.forEach((doc, docIndex)=>{
            this._addObject(doc, docIndex);
        });
        this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
        const idx = this.size();
        if (isString(doc)) this._addString(doc, idx);
        else this._addObject(doc, idx);
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
        this.records.splice(idx, 1);
        // Change ref index of every subsquent doc
        for(let i = idx, len = this.size(); i < len; i += 1)this.records[i].i -= 1;
    }
    getValueForItemAtKeyId(item, keyId) {
        return item[this._keysMap[keyId]];
    }
    size() {
        return this.records.length;
    }
    _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) return;
        let record = {
            v: doc,
            i: docIndex,
            n: this.norm.get(doc)
        };
        this.records.push(record);
    }
    _addObject(doc, docIndex) {
        let record = {
            i: docIndex,
            $: {}
        };
        // Iterate over every key (i.e, path), and fetch the value at that key
        this.keys.forEach((key, keyIndex)=>{
            let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
            if (!isDefined(value)) return;
            if (isArray(value)) {
                let subRecords = [];
                const stack = [
                    {
                        nestedArrIndex: -1,
                        value
                    }
                ];
                while(stack.length){
                    const { nestedArrIndex , value  } = stack.pop();
                    if (!isDefined(value)) continue;
                    if (isString(value) && !isBlank(value)) {
                        let subRecord = {
                            v: value,
                            i: nestedArrIndex,
                            n: this.norm.get(value)
                        };
                        subRecords.push(subRecord);
                    } else if (isArray(value)) value.forEach((item, k)=>{
                        stack.push({
                            nestedArrIndex: k,
                            value: item
                        });
                    });
                }
                record.$[keyIndex] = subRecords;
            } else if (isString(value) && !isBlank(value)) {
                let subRecord = {
                    v: value,
                    n: this.norm.get(value)
                };
                record.$[keyIndex] = subRecord;
            }
        });
        this.records.push(record);
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        };
    }
}
function createIndex(keys, docs, { getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}) {
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
}
function parseIndex(data, { getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}) {
    const { keys , records  } = data;
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
}
function computeScore$1(pattern, { errors =0 , currentLocation =0 , expectedLocation =0 , distance =Config.distance , ignoreLocation =Config.ignoreLocation  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) return accuracy;
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
    return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for(let len = matchmask.length; i < len; i += 1){
        let match = matchmask[i];
        if (match && start === -1) start = i;
        else if (!match && start !== -1) {
            end = i - 1;
            if (end - start + 1 >= minMatchCharLength) indices.push([
                start,
                end
            ]);
            start = -1;
        }
    }
    // (i-1 - start) + 1 => i - start
    if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([
        start,
        i - 1
    ]);
    return indices;
}
// Machine word size
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, { location =Config.location , distance =Config.distance , threshold =Config.threshold , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , includeMatches =Config.includeMatches , ignoreLocation =Config.ignoreLocation  } = {}) {
    if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    const patternLen = pattern.length;
    // Set starting location at beginning text and initialize the alphabet.
    const textLen = text.length;
    // Handle the case when location > text.length
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    // Highest score beyond which we give up.
    let currentThreshold = threshold;
    // Is there a nearby exact match? (speedup)
    let bestLocation = expectedLocation;
    // Performance: only computer matches when the minMatchCharLength > 1
    // OR if `includeMatches` is true.
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    // A mask of the matches, used for building the indices
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    // Get all exact matches, here for speed up
    while((index = text.indexOf(pattern, bestLocation)) > -1){
        let score = computeScore$1(pattern, {
            currentLocation: index,
            expectedLocation,
            distance,
            ignoreLocation
        });
        currentThreshold = Math.min(score, currentThreshold);
        bestLocation = index + patternLen;
        if (computeMatches) {
            let i = 0;
            while(i < patternLen){
                matchMask[index + i] = 1;
                i += 1;
            }
        }
    }
    // Reset the best location
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for(let i = 0; i < patternLen; i += 1){
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from the match location we can stray
        // at this error level.
        let binMin = 0;
        let binMid = binMax;
        while(binMin < binMid){
            const score = computeScore$1(pattern, {
                errors: i,
                currentLocation: expectedLocation + binMid,
                expectedLocation,
                distance,
                ignoreLocation
            });
            if (score <= currentThreshold) binMin = binMid;
            else binMax = binMid;
            binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }
        // Use the result from this iteration as the maximum for the next.
        binMax = binMid;
        let start = Math.max(1, expectedLocation - binMid + 1);
        let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
        // Initialize the bit array
        let bitArr = Array(finish + 2);
        bitArr[finish + 1] = (1 << i) - 1;
        for(let j = finish; j >= start; j -= 1){
            let currentLocation = j - 1;
            let charMatch = patternAlphabet[text.charAt(currentLocation)];
            if (computeMatches) // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
            matchMask[currentLocation] = +!!charMatch;
            // First pass: exact match
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
            // Subsequent passes: fuzzy match
            if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            if (bitArr[j] & mask) {
                finalScore = computeScore$1(pattern, {
                    errors: i,
                    currentLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                });
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation;
                    // Already passed `loc`, downhill from here on in.
                    if (bestLocation <= expectedLocation) break;
                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        const score = computeScore$1(pattern, {
            errors: i + 1,
            currentLocation: expectedLocation,
            expectedLocation,
            distance,
            ignoreLocation
        });
        if (score > currentThreshold) break;
        lastBitArr = bitArr;
    }
    const result = {
        isMatch: bestLocation >= 0,
        // Count exact matches (those with a score of 0) to be "almost" exact
        score: Math.max(0.001, finalScore)
    };
    if (computeMatches) {
        const indices = convertMaskToIndices(matchMask, minMatchCharLength);
        if (!indices.length) result.isMatch = false;
        else if (includeMatches) result.indices = indices;
    }
    return result;
}
function createPatternAlphabet(pattern) {
    let mask = {};
    for(let i = 0, len = pattern.length; i < len; i += 1){
        const char = pattern.charAt(i);
        mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
}
class BitapSearch {
    constructor(pattern, { location =Config.location , threshold =Config.threshold , distance =Config.distance , includeMatches =Config.includeMatches , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , isCaseSensitive =Config.isCaseSensitive , ignoreLocation =Config.ignoreLocation  } = {}){
        this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) return;
        const addChunk = (pattern, startIndex)=>{
            this.chunks.push({
                pattern,
                alphabet: createPatternAlphabet(pattern),
                startIndex
            });
        };
        const len = this.pattern.length;
        if (len > MAX_BITS) {
            let i = 0;
            const remainder = len % MAX_BITS;
            const end = len - remainder;
            while(i < end){
                addChunk(this.pattern.substr(i, MAX_BITS), i);
                i += MAX_BITS;
            }
            if (remainder) {
                const startIndex = len - MAX_BITS;
                addChunk(this.pattern.substr(startIndex), startIndex);
            }
        } else addChunk(this.pattern, 0);
    }
    searchIn(text) {
        const { isCaseSensitive , includeMatches  } = this.options;
        if (!isCaseSensitive) text = text.toLowerCase();
        // Exact match
        if (this.pattern === text) {
            let result = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) result.indices = [
                [
                    0,
                    text.length - 1
                ]
            ];
            return result;
        }
        // Otherwise, use Bitap algorithm
        const { location , distance , threshold , findAllMatches , minMatchCharLength , ignoreLocation  } = this.options;
        let allIndices = [];
        let totalScore = 0;
        let hasMatches = false;
        this.chunks.forEach(({ pattern , alphabet , startIndex  })=>{
            const { isMatch , score , indices  } = search(text, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
            });
            if (isMatch) hasMatches = true;
            totalScore += score;
            if (isMatch && indices) allIndices = [
                ...allIndices,
                ...indices
            ];
        });
        let result = {
            isMatch: hasMatches,
            score: hasMatches ? totalScore / this.chunks.length : 1
        };
        if (hasMatches && includeMatches) result.indices = allIndices;
        return result;
    }
}
class BaseMatch {
    constructor(pattern){
        this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
    }
    search() {}
}
function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
}
// Token: 'file
class ExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "exact";
    }
    static get multiRegex() {
        return /^="(.*)"$/;
    }
    static get singleRegex() {
        return /^=(.*)$/;
    }
    search(text) {
        const isMatch = text === this.pattern;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !fire
class InverseExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"$/;
    }
    static get singleRegex() {
        return /^!(.*)$/;
    }
    search(text) {
        const index = text.indexOf(this.pattern);
        const isMatch = index === -1;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: ^file
class PrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "prefix-exact";
    }
    static get multiRegex() {
        return /^\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^\^(.*)$/;
    }
    search(text) {
        const isMatch = text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !^fire
class InversePrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-prefix-exact";
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^!\^(.*)$/;
    }
    search(text) {
        const isMatch = !text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: .file$
class SuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "suffix-exact";
    }
    static get multiRegex() {
        return /^"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^(.*)\$$/;
    }
    search(text) {
        const isMatch = text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                text.length - this.pattern.length,
                text.length - 1
            ]
        };
    }
}
// Token: !.file$
class InverseSuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-suffix-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^!(.*)\$$/;
    }
    search(text) {
        const isMatch = !text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
class FuzzyMatch extends BaseMatch {
    constructor(pattern, { location =Config.location , threshold =Config.threshold , distance =Config.distance , includeMatches =Config.includeMatches , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , isCaseSensitive =Config.isCaseSensitive , ignoreLocation =Config.ignoreLocation  } = {}){
        super(pattern);
        this._bitapSearch = new BitapSearch(pattern, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        });
    }
    static get type() {
        return "fuzzy";
    }
    static get multiRegex() {
        return /^"(.*)"$/;
    }
    static get singleRegex() {
        return /^(.*)$/;
    }
    search(text) {
        return this._bitapSearch.searchIn(text);
    }
}
// Token: 'file
class IncludeMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "include";
    }
    static get multiRegex() {
        return /^'"(.*)"$/;
    }
    static get singleRegex() {
        return /^'(.*)$/;
    }
    search(text) {
        let location = 0;
        let index;
        const indices = [];
        const patternLen = this.pattern.length;
        // Get all exact matches
        while((index = text.indexOf(this.pattern, location)) > -1){
            location = index + patternLen;
            indices.push([
                index,
                location - 1
            ]);
        }
        const isMatch = !!indices.length;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices
        };
    }
}
// ❗Order is important. DO NOT CHANGE.
const searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
];
const searchersLen = searchers.length;
// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item)=>{
        let query = item.trim().split(SPACE_RE).filter((item)=>item && !!item.trim());
        let results = [];
        for(let i = 0, len = query.length; i < len; i += 1){
            const queryItem = query[i];
            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
            let found = false;
            let idx = -1;
            while(!found && ++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isMultiMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                }
            }
            if (found) continue;
            // 2. Handle single query matches (i.e, once that are *not* quoted)
            idx = -1;
            while(++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isSingleMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    break;
                }
            }
        }
        return results;
    });
}
// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([
    FuzzyMatch.type,
    IncludeMatch.type
]);
/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */ class ExtendedSearch {
    constructor(pattern, { isCaseSensitive =Config.isCaseSensitive , includeMatches =Config.includeMatches , minMatchCharLength =Config.minMatchCharLength , ignoreLocation =Config.ignoreLocation , findAllMatches =Config.findAllMatches , location =Config.location , threshold =Config.threshold , distance =Config.distance  } = {}){
        this.query = null;
        this.options = {
            isCaseSensitive,
            includeMatches,
            minMatchCharLength,
            findAllMatches,
            ignoreLocation,
            location,
            threshold,
            distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
        return options.useExtendedSearch;
    }
    searchIn(text) {
        const query = this.query;
        if (!query) return {
            isMatch: false,
            score: 1
        };
        const { includeMatches , isCaseSensitive  } = this.options;
        text = isCaseSensitive ? text : text.toLowerCase();
        let numMatches = 0;
        let allIndices = [];
        let totalScore = 0;
        // ORs
        for(let i = 0, qLen = query.length; i < qLen; i += 1){
            const searchers = query[i];
            // Reset indices
            allIndices.length = 0;
            numMatches = 0;
            // ANDs
            for(let j = 0, pLen = searchers.length; j < pLen; j += 1){
                const searcher = searchers[j];
                const { isMatch , indices , score  } = searcher.search(text);
                if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                        const type = searcher.constructor.type;
                        if (MultiMatchSet.has(type)) allIndices = [
                            ...allIndices,
                            ...indices
                        ];
                        else allIndices.push(indices);
                    }
                } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                }
            }
            // OR condition, so if TRUE, return
            if (numMatches) {
                let result = {
                    isMatch: true,
                    score: totalScore / numMatches
                };
                if (includeMatches) result.indices = allIndices;
                return result;
            }
        }
        // Nothing was matched
        return {
            isMatch: false,
            score: 1
        };
    }
}
const registeredSearchers = [];
function register(...args) {
    registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
    for(let i = 0, len = registeredSearchers.length; i < len; i += 1){
        let searcherClass = registeredSearchers[i];
        if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
    }
    return new BitapSearch(pattern, options);
}
const LogicalOperator = {
    AND: "$and",
    OR: "$or"
};
const KeyType = {
    PATH: "$path",
    PATTERN: "$val"
};
const isExpression = (query)=>!!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query)=>!!query[KeyType.PATH];
const isLeaf = (query)=>!isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query)=>({
        [LogicalOperator.AND]: Object.keys(query).map((key)=>({
                [key]: query[key]
            }))
    });
// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto =true  } = {}) {
    const next = (query)=>{
        let keys = Object.keys(query);
        const isQueryPath = isPath(query);
        if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
        if (isLeaf(query)) {
            const key = isQueryPath ? query[KeyType.PATH] : keys[0];
            const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
            if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            const obj = {
                keyId: createKeyId(key),
                pattern
            };
            if (auto) obj.searcher = createSearcher(pattern, options);
            return obj;
        }
        let node = {
            children: [],
            operator: keys[0]
        };
        keys.forEach((key)=>{
            const value = query[key];
            if (isArray(value)) value.forEach((item)=>{
                node.children.push(next(item));
            });
        });
        return node;
    };
    if (!isExpression(query)) query = convertToExplicit(query);
    return next(query);
}
// Practical scoring function
function computeScore(results, { ignoreFieldNorm =Config.ignoreFieldNorm  }) {
    results.forEach((result)=>{
        let totalScore = 1;
        result.matches.forEach(({ key , norm , score  })=>{
            const weight = key ? key.weight : null;
            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
        });
        result.score = totalScore;
    });
}
function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) return;
    matches.forEach((match)=>{
        if (!isDefined(match.indices) || !match.indices.length) return;
        const { indices , value  } = match;
        let obj = {
            indices,
            value
        };
        if (match.key) obj.key = match.key.src;
        if (match.idx > -1) obj.refIndex = match.idx;
        data.matches.push(obj);
    });
}
function transformScore(result, data) {
    data.score = result.score;
}
function format(results, docs, { includeMatches =Config.includeMatches , includeScore =Config.includeScore  } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result)=>{
        const { idx  } = result;
        const data = {
            item: docs[idx],
            refIndex: idx
        };
        if (transformers.length) transformers.forEach((transformer)=>{
            transformer(result, data);
        });
        return data;
    });
}
class Fuse {
    constructor(docs, options = {}, index){
        this.options = {
            ...Config,
            ...options
        };
        this.options.useExtendedSearch;
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
    }
    setCollection(docs, index) {
        this._docs = docs;
        if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
        this._myIndex = index || createIndex(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        });
    }
    add(doc) {
        if (!isDefined(doc)) return;
        this._docs.push(doc);
        this._myIndex.add(doc);
    }
    remove(predicate = ()=>false) {
        const results = [];
        for(let i = 0, len = this._docs.length; i < len; i += 1){
            const doc = this._docs[i];
            if (predicate(doc, i)) {
                this.removeAt(i);
                i -= 1;
                len -= 1;
                results.push(doc);
            }
        }
        return results;
    }
    removeAt(idx) {
        this._docs.splice(idx, 1);
        this._myIndex.removeAt(idx);
    }
    getIndex() {
        return this._myIndex;
    }
    search(query, { limit =-1  } = {}) {
        const { includeMatches , includeScore , shouldSort , sortFn , ignoreFieldNorm  } = this.options;
        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, {
            ignoreFieldNorm
        });
        if (shouldSort) results.sort(sortFn);
        if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
        return format(results, this._docs, {
            includeMatches,
            includeScore
        });
    }
    _searchStringList(query) {
        const searcher = createSearcher(query, this.options);
        const { records  } = this._myIndex;
        const results = [];
        // Iterate over every string in the index
        records.forEach(({ v: text , i: idx , n: norm  })=>{
            if (!isDefined(text)) return;
            const { isMatch , score , indices  } = searcher.searchIn(text);
            if (isMatch) results.push({
                item: text,
                idx,
                matches: [
                    {
                        score,
                        value: text,
                        norm,
                        indices
                    }
                ]
            });
        });
        return results;
    }
    _searchLogical(query) {
        const expression = parse(query, this.options);
        const evaluate = (node, item, idx)=>{
            if (!node.children) {
                const { keyId , searcher  } = node;
                const matches = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                });
                if (matches && matches.length) return [
                    {
                        idx,
                        item,
                        matches
                    }
                ];
                return [];
            }
            const res = [];
            for(let i = 0, len = node.children.length; i < len; i += 1){
                const child = node.children[i];
                const result = evaluate(child, item, idx);
                if (result.length) res.push(...result);
                else if (node.operator === LogicalOperator.AND) return [];
            }
            return res;
        };
        const records = this._myIndex.records;
        const resultMap = {};
        const results = [];
        records.forEach(({ $: item , i: idx  })=>{
            if (isDefined(item)) {
                let expResults = evaluate(expression, item, idx);
                if (expResults.length) {
                    // Dedupe when adding
                    if (!resultMap[idx]) {
                        resultMap[idx] = {
                            idx,
                            item,
                            matches: []
                        };
                        results.push(resultMap[idx]);
                    }
                    expResults.forEach(({ matches  })=>{
                        resultMap[idx].matches.push(...matches);
                    });
                }
            }
        });
        return results;
    }
    _searchObjectList(query) {
        const searcher = createSearcher(query, this.options);
        const { keys , records  } = this._myIndex;
        const results = [];
        // List is Array<Object>
        records.forEach(({ $: item , i: idx  })=>{
            if (!isDefined(item)) return;
            let matches = [];
            // Iterate over every key (i.e, path), and fetch the value at that key
            keys.forEach((key, keyIndex)=>{
                matches.push(...this._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                }));
            });
            if (matches.length) results.push({
                idx,
                item,
                matches
            });
        });
        return results;
    }
    _findMatches({ key , value , searcher  }) {
        if (!isDefined(value)) return [];
        let matches = [];
        if (isArray(value)) value.forEach(({ v: text , i: idx , n: norm  })=>{
            if (!isDefined(text)) return;
            const { isMatch , score , indices  } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                idx,
                norm,
                indices
            });
        });
        else {
            const { v: text , n: norm  } = value;
            const { isMatch , score , indices  } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                norm,
                indices
            });
        }
        return matches;
    }
}
Fuse.version = "6.6.2";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.parseQuery = parse;
register(ExtendedSearch);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhVPm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addChoice", ()=>addChoice);
parcelHelpers.export(exports, "filterChoices", ()=>filterChoices);
parcelHelpers.export(exports, "activateChoices", ()=>activateChoices);
parcelHelpers.export(exports, "clearChoices", ()=>clearChoices);
var _constants = require("../constants");
const addChoice = ({ value , label , id , groupId , disabled , elementId , customProperties , placeholder , keyCode  })=>({
        type: (0, _constants.ACTION_TYPES).ADD_CHOICE,
        value,
        label,
        id,
        groupId,
        disabled,
        elementId,
        customProperties,
        placeholder,
        keyCode
    });
const filterChoices = (results)=>({
        type: (0, _constants.ACTION_TYPES).FILTER_CHOICES,
        results
    });
const activateChoices = (active = true)=>({
        type: (0, _constants.ACTION_TYPES).ACTIVATE_CHOICES,
        active
    });
const clearChoices = ()=>({
        type: (0, _constants.ACTION_TYPES).CLEAR_CHOICES
    });

},{"../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fyl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EVENTS", ()=>EVENTS);
parcelHelpers.export(exports, "ACTION_TYPES", ()=>ACTION_TYPES);
parcelHelpers.export(exports, "KEY_CODES", ()=>KEY_CODES);
parcelHelpers.export(exports, "TEXT_TYPE", ()=>TEXT_TYPE);
parcelHelpers.export(exports, "SELECT_ONE_TYPE", ()=>SELECT_ONE_TYPE);
parcelHelpers.export(exports, "SELECT_MULTIPLE_TYPE", ()=>SELECT_MULTIPLE_TYPE);
parcelHelpers.export(exports, "SCROLLING_SPEED", ()=>SCROLLING_SPEED);
const EVENTS = {
    showDropdown: "showDropdown",
    hideDropdown: "hideDropdown",
    change: "change",
    choice: "choice",
    search: "search",
    addItem: "addItem",
    removeItem: "removeItem",
    highlightItem: "highlightItem",
    highlightChoice: "highlightChoice",
    unhighlightItem: "unhighlightItem"
};
const ACTION_TYPES = {
    ADD_CHOICE: "ADD_CHOICE",
    FILTER_CHOICES: "FILTER_CHOICES",
    ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
    CLEAR_CHOICES: "CLEAR_CHOICES",
    ADD_GROUP: "ADD_GROUP",
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
    CLEAR_ALL: "CLEAR_ALL",
    RESET_TO: "RESET_TO",
    SET_IS_LOADING: "SET_IS_LOADING"
};
const KEY_CODES = {
    BACK_KEY: 46,
    DELETE_KEY: 8,
    ENTER_KEY: 13,
    A_KEY: 65,
    ESC_KEY: 27,
    UP_KEY: 38,
    DOWN_KEY: 40,
    PAGE_UP_KEY: 33,
    PAGE_DOWN_KEY: 34
};
const TEXT_TYPE = "text";
const SELECT_ONE_TYPE = "select-one";
const SELECT_MULTIPLE_TYPE = "select-multiple";
const SCROLLING_SPEED = 4;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JGkYB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addGroup", ()=>addGroup);
var _constants = require("../constants");
const addGroup = ({ value , id , active , disabled  })=>({
        type: (0, _constants.ACTION_TYPES).ADD_GROUP,
        value,
        id,
        active,
        disabled
    });

},{"../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kz423":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItem", ()=>addItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
parcelHelpers.export(exports, "highlightItem", ()=>highlightItem);
var _constants = require("../constants");
const addItem = ({ value , label , id , choiceId , groupId , customProperties , placeholder , keyCode  })=>({
        type: (0, _constants.ACTION_TYPES).ADD_ITEM,
        value,
        label,
        id,
        choiceId,
        groupId,
        customProperties,
        placeholder,
        keyCode
    });
const removeItem = (id, choiceId)=>({
        type: (0, _constants.ACTION_TYPES).REMOVE_ITEM,
        id,
        choiceId
    });
const highlightItem = (id, highlighted)=>({
        type: (0, _constants.ACTION_TYPES).HIGHLIGHT_ITEM,
        id,
        highlighted
    });

},{"../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIz6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearAll", ()=>clearAll);
parcelHelpers.export(exports, "resetTo", ()=>resetTo);
parcelHelpers.export(exports, "setIsLoading", ()=>setIsLoading);
var _constants = require("../constants");
const clearAll = ()=>({
        type: (0, _constants.ACTION_TYPES).CLEAR_ALL
    });
const resetTo = (state)=>({
        type: (0, _constants.ACTION_TYPES).RESET_TO,
        state
    });
const setIsLoading = (isLoading)=>({
        type: (0, _constants.ACTION_TYPES).SET_IS_LOADING,
        isLoading
    });

},{"../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yew0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dropdown", ()=>(0, _dropdownDefault.default));
parcelHelpers.export(exports, "Container", ()=>(0, _containerDefault.default));
parcelHelpers.export(exports, "Input", ()=>(0, _inputDefault.default));
parcelHelpers.export(exports, "List", ()=>(0, _listDefault.default));
parcelHelpers.export(exports, "WrappedInput", ()=>(0, _wrappedInputDefault.default));
parcelHelpers.export(exports, "WrappedSelect", ()=>(0, _wrappedSelectDefault.default));
var _dropdown = require("./dropdown");
var _dropdownDefault = parcelHelpers.interopDefault(_dropdown);
var _container = require("./container");
var _containerDefault = parcelHelpers.interopDefault(_container);
var _input = require("./input");
var _inputDefault = parcelHelpers.interopDefault(_input);
var _list = require("./list");
var _listDefault = parcelHelpers.interopDefault(_list);
var _wrappedInput = require("./wrapped-input");
var _wrappedInputDefault = parcelHelpers.interopDefault(_wrappedInput);
var _wrappedSelect = require("./wrapped-select");
var _wrappedSelectDefault = parcelHelpers.interopDefault(_wrappedSelect);

},{"./dropdown":"gQMnd","./container":"ac8s4","./input":"iUYIx","./list":"cVkvo","./wrapped-input":"2nNso","./wrapped-select":"7Khu8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQMnd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Dropdown {
    constructor({ element , type , classNames  }){
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.isActive = false;
    }
    /**
   * Bottom position of dropdown in viewport coordinates
   */ get distanceFromTopWindow() {
        return this.element.getBoundingClientRect().bottom;
    }
    getChild(selector) {
        return this.element.querySelector(selector);
    }
    /**
   * Show dropdown to user by adding active state class
   */ show() {
        this.element.classList.add(this.classNames.activeState);
        this.element.setAttribute("aria-expanded", "true");
        this.isActive = true;
        return this;
    }
    /**
   * Hide dropdown from user
   */ hide() {
        this.element.classList.remove(this.classNames.activeState);
        this.element.setAttribute("aria-expanded", "false");
        this.isActive = false;
        return this;
    }
}
exports.default = Dropdown;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ac8s4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _constants = require("../constants");
class Container {
    constructor({ element , type , classNames , position  }){
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.position = position;
        this.isOpen = false;
        this.isFlipped = false;
        this.isFocussed = false;
        this.isDisabled = false;
        this.isLoading = false;
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }
    addEventListeners() {
        this.element.addEventListener("focus", this._onFocus);
        this.element.addEventListener("blur", this._onBlur);
    }
    removeEventListeners() {
        this.element.removeEventListener("focus", this._onFocus);
        this.element.removeEventListener("blur", this._onBlur);
    }
    /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */ shouldFlip(dropdownPos) {
        if (typeof dropdownPos !== "number") return false;
        // If flip is enabled and the dropdown bottom position is
        // greater than the window height flip the dropdown.
        let shouldFlip = false;
        if (this.position === "auto") shouldFlip = !window.matchMedia(`(min-height: ${dropdownPos + 1}px)`).matches;
        else if (this.position === "top") shouldFlip = true;
        return shouldFlip;
    }
    setActiveDescendant(activeDescendantID) {
        this.element.setAttribute("aria-activedescendant", activeDescendantID);
    }
    removeActiveDescendant() {
        this.element.removeAttribute("aria-activedescendant");
    }
    open(dropdownPos) {
        this.element.classList.add(this.classNames.openState);
        this.element.setAttribute("aria-expanded", "true");
        this.isOpen = true;
        if (this.shouldFlip(dropdownPos)) {
            this.element.classList.add(this.classNames.flippedState);
            this.isFlipped = true;
        }
    }
    close() {
        this.element.classList.remove(this.classNames.openState);
        this.element.setAttribute("aria-expanded", "false");
        this.removeActiveDescendant();
        this.isOpen = false;
        // A dropdown flips if it does not have space within the page
        if (this.isFlipped) {
            this.element.classList.remove(this.classNames.flippedState);
            this.isFlipped = false;
        }
    }
    focus() {
        if (!this.isFocussed) this.element.focus();
    }
    addFocusState() {
        this.element.classList.add(this.classNames.focusState);
    }
    removeFocusState() {
        this.element.classList.remove(this.classNames.focusState);
    }
    enable() {
        this.element.classList.remove(this.classNames.disabledState);
        this.element.removeAttribute("aria-disabled");
        if (this.type === (0, _constants.SELECT_ONE_TYPE)) this.element.setAttribute("tabindex", "0");
        this.isDisabled = false;
    }
    disable() {
        this.element.classList.add(this.classNames.disabledState);
        this.element.setAttribute("aria-disabled", "true");
        if (this.type === (0, _constants.SELECT_ONE_TYPE)) this.element.setAttribute("tabindex", "-1");
        this.isDisabled = true;
    }
    wrap(element) {
        (0, _utils.wrap)(element, this.element);
    }
    unwrap(element) {
        if (this.element.parentNode) {
            // Move passed element outside this element
            this.element.parentNode.insertBefore(element, this.element);
            // Remove this element
            this.element.parentNode.removeChild(this.element);
        }
    }
    addLoadingState() {
        this.element.classList.add(this.classNames.loadingState);
        this.element.setAttribute("aria-busy", "true");
        this.isLoading = true;
    }
    removeLoadingState() {
        this.element.classList.remove(this.classNames.loadingState);
        this.element.removeAttribute("aria-busy");
        this.isLoading = false;
    }
    _onFocus() {
        this.isFocussed = true;
    }
    _onBlur() {
        this.isFocussed = false;
    }
}
exports.default = Container;

},{"../lib/utils":"33FIt","../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33FIt":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomNumber", ()=>getRandomNumber);
parcelHelpers.export(exports, "generateChars", ()=>generateChars);
parcelHelpers.export(exports, "generateId", ()=>generateId);
parcelHelpers.export(exports, "getType", ()=>getType);
parcelHelpers.export(exports, "isType", ()=>isType);
parcelHelpers.export(exports, "wrap", ()=>wrap);
parcelHelpers.export(exports, "getAdjacentEl", ()=>getAdjacentEl);
parcelHelpers.export(exports, "isScrolledIntoView", ()=>isScrolledIntoView);
parcelHelpers.export(exports, "sanitise", ()=>sanitise);
parcelHelpers.export(exports, "strToEl", ()=>strToEl);
parcelHelpers.export(exports, "sortByAlpha", ()=>sortByAlpha);
parcelHelpers.export(exports, "sortByScore", ()=>sortByScore);
parcelHelpers.export(exports, "dispatchEvent", ()=>dispatchEvent);
parcelHelpers.export(exports, "existsInArray", ()=>existsInArray);
parcelHelpers.export(exports, "cloneObject", ()=>cloneObject);
parcelHelpers.export(exports, "diff", ()=>diff);
parcelHelpers.export(exports, "parseCustomProperties", ()=>parseCustomProperties);
const getRandomNumber = (min, max)=>Math.floor(Math.random() * (max - min) + min);
const generateChars = (length)=>Array.from({
        length
    }, ()=>getRandomNumber(0, 36).toString(36)).join("");
const generateId = (element, prefix)=>{
    let id = element.id || element.name && `${element.name}-${generateChars(2)}` || generateChars(4);
    id = id.replace(/(:|\.|\[|\]|,)/g, "");
    id = `${prefix}-${id}`;
    return id;
};
const getType = (obj)=>Object.prototype.toString.call(obj).slice(8, -1);
const isType = (type, obj)=>obj !== undefined && obj !== null && getType(obj) === type;
const wrap = (element, wrapper = document.createElement("div"))=>{
    if (element.parentNode) {
        if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling);
        else element.parentNode.appendChild(wrapper);
    }
    return wrapper.appendChild(element);
};
const getAdjacentEl = (startEl, selector, direction = 1)=>{
    const prop = `${direction > 0 ? "next" : "previous"}ElementSibling`;
    let sibling = startEl[prop];
    while(sibling){
        if (sibling.matches(selector)) return sibling;
        sibling = sibling[prop];
    }
    return sibling;
};
const isScrolledIntoView = (element, parent, direction = 1)=>{
    if (!element) return false;
    let isVisible;
    if (direction > 0) // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
    else // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
    return isVisible;
};
const sanitise = (value)=>{
    if (typeof value !== "string") return value;
    return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
};
const strToEl = (()=>{
    const tmpEl = document.createElement("div");
    return (str)=>{
        const cleanedInput = str.trim();
        tmpEl.innerHTML = cleanedInput;
        const firldChild = tmpEl.children[0];
        while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
        return firldChild;
    };
})();
const sortByAlpha = ({ value , label =value  }, { value: value2 , label: label2 = value2  })=>label.localeCompare(label2, [], {
        sensitivity: "base",
        ignorePunctuation: true,
        numeric: true
    });
const sortByScore = (a, b)=>{
    const { score: scoreA = 0  } = a;
    const { score: scoreB = 0  } = b;
    return scoreA - scoreB;
};
const dispatchEvent = (element, type, customArgs = null)=>{
    const event = new CustomEvent(type, {
        detail: customArgs,
        bubbles: true,
        cancelable: true
    });
    return element.dispatchEvent(event);
};
const existsInArray = (array, value, key = "value")=>array.some((item)=>{
        if (typeof value === "string") return item[key] === value.trim();
        return item[key] === value;
    });
const cloneObject = (obj)=>JSON.parse(JSON.stringify(obj));
const diff = (a, b)=>{
    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();
    return aKeys.filter((i)=>bKeys.indexOf(i) < 0);
};
const parseCustomProperties = (customProperties)=>{
    if (typeof customProperties !== "undefined") try {
        return JSON.parse(customProperties);
    } catch (e) {
        return customProperties;
    }
    return {};
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUYIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _constants = require("../constants");
class Input {
    constructor({ element , type , classNames , preventPaste  }){
        this.element = element;
        this.type = type;
        this.classNames = classNames;
        this.preventPaste = preventPaste;
        this.isFocussed = this.element.isEqualNode(document.activeElement);
        this.isDisabled = element.disabled;
        this._onPaste = this._onPaste.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }
    set placeholder(placeholder) {
        this.element.placeholder = placeholder;
    }
    get value() {
        return (0, _utils.sanitise)(this.element.value);
    }
    set value(value) {
        this.element.value = value;
    }
    get rawValue() {
        return this.element.value;
    }
    addEventListeners() {
        this.element.addEventListener("paste", this._onPaste);
        this.element.addEventListener("input", this._onInput, {
            passive: true
        });
        this.element.addEventListener("focus", this._onFocus, {
            passive: true
        });
        this.element.addEventListener("blur", this._onBlur, {
            passive: true
        });
    }
    removeEventListeners() {
        this.element.removeEventListener("input", this._onInput);
        this.element.removeEventListener("paste", this._onPaste);
        this.element.removeEventListener("focus", this._onFocus);
        this.element.removeEventListener("blur", this._onBlur);
    }
    enable() {
        this.element.removeAttribute("disabled");
        this.isDisabled = false;
    }
    disable() {
        this.element.setAttribute("disabled", "");
        this.isDisabled = true;
    }
    focus() {
        if (!this.isFocussed) this.element.focus();
    }
    blur() {
        if (this.isFocussed) this.element.blur();
    }
    clear(setWidth = true) {
        if (this.element.value) this.element.value = "";
        if (setWidth) this.setWidth();
        return this;
    }
    /**
   * Set the correct input width based on placeholder
   * value or input value
   */ setWidth() {
        // Resize input to contents or placeholder
        const { style , value , placeholder  } = this.element;
        style.minWidth = `${placeholder.length + 1}ch`;
        style.width = `${value.length + 1}ch`;
    }
    setActiveDescendant(activeDescendantID) {
        this.element.setAttribute("aria-activedescendant", activeDescendantID);
    }
    removeActiveDescendant() {
        this.element.removeAttribute("aria-activedescendant");
    }
    _onInput() {
        if (this.type !== (0, _constants.SELECT_ONE_TYPE)) this.setWidth();
    }
    _onPaste(event) {
        if (this.preventPaste) event.preventDefault();
    }
    _onFocus() {
        this.isFocussed = true;
    }
    _onBlur() {
        this.isFocussed = false;
    }
}
exports.default = Input;

},{"../lib/utils":"33FIt","../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVkvo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constants = require("../constants");
class List {
    constructor({ element  }){
        this.element = element;
        this.scrollPos = this.element.scrollTop;
        this.height = this.element.offsetHeight;
    }
    clear() {
        this.element.innerHTML = "";
    }
    append(node) {
        this.element.appendChild(node);
    }
    getChild(selector) {
        return this.element.querySelector(selector);
    }
    hasChildren() {
        return this.element.hasChildNodes();
    }
    scrollToTop() {
        this.element.scrollTop = 0;
    }
    scrollToChildElement(element, direction) {
        if (!element) return;
        const listHeight = this.element.offsetHeight;
        // Scroll position of dropdown
        const listScrollPosition = this.element.scrollTop + listHeight;
        const elementHeight = element.offsetHeight;
        // Distance from bottom of element to top of parent
        const elementPos = element.offsetTop + elementHeight;
        // Difference between the element and scroll position
        const destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
        requestAnimationFrame(()=>{
            this._animateScroll(destination, direction);
        });
    }
    _scrollDown(scrollPos, strength, destination) {
        const easing = (destination - scrollPos) / strength;
        const distance = easing > 1 ? easing : 1;
        this.element.scrollTop = scrollPos + distance;
    }
    _scrollUp(scrollPos, strength, destination) {
        const easing = (scrollPos - destination) / strength;
        const distance = easing > 1 ? easing : 1;
        this.element.scrollTop = scrollPos - distance;
    }
    _animateScroll(destination, direction) {
        const strength = (0, _constants.SCROLLING_SPEED);
        const choiceListScrollTop = this.element.scrollTop;
        let continueAnimation = false;
        if (direction > 0) {
            this._scrollDown(choiceListScrollTop, strength, destination);
            if (choiceListScrollTop < destination) continueAnimation = true;
        } else {
            this._scrollUp(choiceListScrollTop, strength, destination);
            if (choiceListScrollTop > destination) continueAnimation = true;
        }
        if (continueAnimation) requestAnimationFrame(()=>{
            this._animateScroll(destination, direction);
        });
    }
}
exports.default = List;

},{"../constants":"5fyl3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nNso":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _wrappedElement = require("./wrapped-element");
var _wrappedElementDefault = parcelHelpers.interopDefault(_wrappedElement);
class WrappedInput extends (0, _wrappedElementDefault.default) {
    constructor({ element , classNames , delimiter  }){
        super({
            element,
            classNames
        });
        this.delimiter = delimiter;
    }
    get value() {
        return this.element.value;
    }
    set value(value) {
        this.element.setAttribute("value", value);
        this.element.value = value;
    }
}
exports.default = WrappedInput;

},{"./wrapped-element":"9ZciQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ZciQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
class WrappedElement {
    constructor({ element , classNames  }){
        this.element = element;
        this.classNames = classNames;
        if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
        this.isDisabled = false;
    }
    get isActive() {
        return this.element.dataset.choice === "active";
    }
    get dir() {
        return this.element.dir;
    }
    get value() {
        return this.element.value;
    }
    set value(value) {
        // you must define setter here otherwise it will be readonly property
        this.element.value = value;
    }
    conceal() {
        // Hide passed input
        this.element.classList.add(this.classNames.input);
        this.element.hidden = true;
        // Remove element from tab index
        this.element.tabIndex = -1;
        // Backup original styles if any
        const origStyle = this.element.getAttribute("style");
        if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
        this.element.setAttribute("data-choice", "active");
    }
    reveal() {
        // Reinstate passed element
        this.element.classList.remove(this.classNames.input);
        this.element.hidden = false;
        this.element.removeAttribute("tabindex");
        // Recover original styles if any
        const origStyle = this.element.getAttribute("data-choice-orig-style");
        if (origStyle) {
            this.element.removeAttribute("data-choice-orig-style");
            this.element.setAttribute("style", origStyle);
        } else this.element.removeAttribute("style");
        this.element.removeAttribute("data-choice");
        // Re-assign values - this is weird, I know
        // @todo Figure out why we need to do this
        this.element.value = this.element.value; // eslint-disable-line no-self-assign
    }
    enable() {
        this.element.removeAttribute("disabled");
        this.element.disabled = false;
        this.isDisabled = false;
    }
    disable() {
        this.element.setAttribute("disabled", "");
        this.element.disabled = true;
        this.isDisabled = true;
    }
    triggerEvent(eventType, data) {
        (0, _utils.dispatchEvent)(this.element, eventType, data);
    }
}
exports.default = WrappedElement;

},{"../lib/utils":"33FIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Khu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _wrappedElement = require("./wrapped-element");
var _wrappedElementDefault = parcelHelpers.interopDefault(_wrappedElement);
class WrappedSelect extends (0, _wrappedElementDefault.default) {
    constructor({ element , classNames , template  }){
        super({
            element,
            classNames
        });
        this.template = template;
    }
    get placeholderOption() {
        return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
        this.element.querySelector("option[placeholder]");
    }
    get optionGroups() {
        return Array.from(this.element.getElementsByTagName("OPTGROUP"));
    }
    get options() {
        return Array.from(this.element.options);
    }
    set options(options) {
        const fragment = document.createDocumentFragment();
        const addOptionToFragment = (data)=>{
            // Create a standard select option
            const option = this.template(data);
            // Append it to fragment
            fragment.appendChild(option);
        };
        // Add each list item to list
        options.forEach((optionData)=>addOptionToFragment(optionData));
        this.appendDocFragment(fragment);
    }
    appendDocFragment(fragment) {
        this.element.innerHTML = "";
        this.element.appendChild(fragment);
    }
}
exports.default = WrappedSelect;

},{"./wrapped-element":"9ZciQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dImV8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_CLASSNAMES", ()=>DEFAULT_CLASSNAMES);
parcelHelpers.export(exports, "DEFAULT_CONFIG", ()=>DEFAULT_CONFIG);
var _utils = require("./lib/utils");
const DEFAULT_CLASSNAMES = {
    containerOuter: "choices",
    containerInner: "choices__inner",
    input: "choices__input",
    inputCloned: "choices__input--cloned",
    list: "choices__list",
    listItems: "choices__list--multiple",
    listSingle: "choices__list--single",
    listDropdown: "choices__list--dropdown",
    item: "choices__item",
    itemSelectable: "choices__item--selectable",
    itemDisabled: "choices__item--disabled",
    itemChoice: "choices__item--choice",
    placeholder: "choices__placeholder",
    group: "choices__group",
    groupHeading: "choices__heading",
    button: "choices__button",
    activeState: "is-active",
    focusState: "is-focused",
    openState: "is-open",
    disabledState: "is-disabled",
    highlightedState: "is-highlighted",
    selectedState: "is-selected",
    flippedState: "is-flipped",
    loadingState: "is-loading",
    noResults: "has-no-results",
    noChoices: "has-no-choices"
};
const DEFAULT_CONFIG = {
    items: [],
    choices: [],
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    addItems: true,
    addItemFilter: null,
    removeItems: true,
    removeItemButton: false,
    editItems: false,
    allowHTML: true,
    duplicateItemsAllowed: true,
    delimiter: ",",
    paste: true,
    searchEnabled: true,
    searchChoices: true,
    searchFloor: 1,
    searchResultLimit: 4,
    searchFields: [
        "label",
        "value"
    ],
    position: "auto",
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    sorter: (0, _utils.sortByAlpha),
    placeholder: true,
    placeholderValue: null,
    searchPlaceholderValue: null,
    prependValue: null,
    appendValue: null,
    renderSelectedChoices: "auto",
    loadingText: "Loading...",
    noResultsText: "No results found",
    noChoicesText: "No choices to choose from",
    itemSelectText: "Press to select",
    uniqueItemText: "Only unique values can be added",
    customAddItemText: "Only values matching specific conditions can be added",
    addItemText: (value)=>`Press Enter to add <b>"${(0, _utils.sanitise)(value)}"</b>`,
    maxItemText: (maxItemCount)=>`Only ${maxItemCount} values can be added`,
    valueComparer: (value1, value2)=>value1 === value2,
    fuseOptions: {
        includeScore: true
    },
    labelId: "",
    callbackOnInit: null,
    callbackOnCreateTemplates: null,
    classNames: DEFAULT_CLASSNAMES
};

},{"./lib/utils":"33FIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IiQq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
var _redux = require("redux");
var _items = require("./items");
var _itemsDefault = parcelHelpers.interopDefault(_items);
var _groups = require("./groups");
var _groupsDefault = parcelHelpers.interopDefault(_groups);
var _choices = require("./choices");
var _choicesDefault = parcelHelpers.interopDefault(_choices);
var _loading = require("./loading");
var _loadingDefault = parcelHelpers.interopDefault(_loading);
var _utils = require("../lib/utils");
const defaultState = {
    groups: [],
    items: [],
    choices: [],
    loading: false
};
const appReducer = (0, _redux.combineReducers)({
    items: (0, _itemsDefault.default),
    groups: (0, _groupsDefault.default),
    choices: (0, _choicesDefault.default),
    loading: (0, _loadingDefault.default)
});
const rootReducer = (passedState, action)=>{
    let state = passedState;
    // If we are clearing all items, groups and options we reassign
    // state and then pass that state to our proper reducer. This isn't
    // mutating our actual state
    // See: http://stackoverflow.com/a/35641992
    if (action.type === "CLEAR_ALL") state = defaultState;
    else if (action.type === "RESET_TO") return (0, _utils.cloneObject)(action.state);
    return appReducer(state, action);
};
exports.default = rootReducer;

},{"redux":"cDNB3","./items":"5lZf6","./groups":"5VzdC","./choices":"lnldG","./loading":"bxR15","../lib/utils":"33FIt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDNB3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DO_NOT_USE__ActionTypes", ()=>ActionTypes);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware);
parcelHelpers.export(exports, "bindActionCreators", ()=>bindActionCreators);
parcelHelpers.export(exports, "combineReducers", ()=>combineReducers);
parcelHelpers.export(exports, "compose", ()=>compose);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "legacy_createStore", ()=>legacy_createStore);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    var type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            return type;
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    var constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    var typeOfVal = typeof val;
    typeOfVal = miniKindOf(val);
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== "function") throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== "function") throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        if (typeof action.type === "undefined") throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        if (isDispatching) throw new Error("Reducers may not dispatch actions.");
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== "object" || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                function observeState() {
                    if (observer.next) observer.next(getState());
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(inputState)) return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === "undefined") throw new Error('The slice reducer for key "' + key + '" returned undefined during initialization. ' + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === "undefined") throw new Error('The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + '\' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if (typeof reducers[key] === "undefined") warning('No reducer provided for key "' + key + '"');
        if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    unexpectedKeyCache = {};
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) state = {};
        if (shapeAssertionError) throw shapeAssertionError;
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) warning(warningMessage);
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. ' + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
    if (typeof actionCreators !== "object" || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bS0uk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectSpread2);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, _definePropertyJsDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

},{"./defineProperty.js":"hbmCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbmCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_defineProperty);
var _toPropertyKeyJs = require("./toPropertyKey.js");
var _toPropertyKeyJsDefault = parcelHelpers.interopDefault(_toPropertyKeyJs);
function _defineProperty(obj, key, value) {
    key = (0, _toPropertyKeyJsDefault.default)(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"./toPropertyKey.js":"cviYI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cviYI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_toPropertyKey);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _toPrimitiveJs = require("./toPrimitive.js");
var _toPrimitiveJsDefault = parcelHelpers.interopDefault(_toPrimitiveJs);
function _toPropertyKey(arg) {
    var key = (0, _toPrimitiveJsDefault.default)(arg, "string");
    return (0, _typeofJsDefault.default)(key) === "symbol" ? key : String(key);
}

},{"./typeof.js":"i7HWY","./toPrimitive.js":"497Dv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7HWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_typeof);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"497Dv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_toPrimitive);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
function _toPrimitive(input, hint) {
    if ((0, _typeofJsDefault.default)(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ((0, _typeofJsDefault.default)(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}

},{"./typeof.js":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5lZf6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
parcelHelpers.export(exports, "default", ()=>items);
const defaultState = [];
function items(state = defaultState, action = {}) {
    switch(action.type){
        case "ADD_ITEM":
            {
                const addItemAction = action;
                // Add object to items array
                const newState = [
                    ...state,
                    {
                        id: addItemAction.id,
                        choiceId: addItemAction.choiceId,
                        groupId: addItemAction.groupId,
                        value: addItemAction.value,
                        label: addItemAction.label,
                        active: true,
                        highlighted: false,
                        customProperties: addItemAction.customProperties,
                        placeholder: addItemAction.placeholder || false,
                        keyCode: null
                    }
                ];
                return newState.map((obj)=>{
                    const item = obj;
                    item.highlighted = false;
                    return item;
                });
            }
        case "REMOVE_ITEM":
            // Set item to inactive
            return state.map((obj)=>{
                const item = obj;
                if (item.id === action.id) item.active = false;
                return item;
            });
        case "HIGHLIGHT_ITEM":
            {
                const highlightItemAction = action;
                return state.map((obj)=>{
                    const item = obj;
                    if (item.id === highlightItemAction.id) item.highlighted = highlightItemAction.highlighted;
                    return item;
                });
            }
        default:
            return state;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VzdC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
parcelHelpers.export(exports, "default", ()=>groups);
const defaultState = [];
function groups(state = defaultState, action = {}) {
    switch(action.type){
        case "ADD_GROUP":
            {
                const addGroupAction = action;
                return [
                    ...state,
                    {
                        id: addGroupAction.id,
                        value: addGroupAction.value,
                        active: addGroupAction.active,
                        disabled: addGroupAction.disabled
                    }
                ];
            }
        case "CLEAR_CHOICES":
            return [];
        default:
            return state;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnldG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
parcelHelpers.export(exports, "default", ()=>choices);
const defaultState = [];
function choices(state = defaultState, action = {}) {
    switch(action.type){
        case "ADD_CHOICE":
            {
                const addChoiceAction = action;
                const choice = {
                    id: addChoiceAction.id,
                    elementId: addChoiceAction.elementId,
                    groupId: addChoiceAction.groupId,
                    value: addChoiceAction.value,
                    label: addChoiceAction.label || addChoiceAction.value,
                    disabled: addChoiceAction.disabled || false,
                    selected: false,
                    active: true,
                    score: 9999,
                    customProperties: addChoiceAction.customProperties,
                    placeholder: addChoiceAction.placeholder || false
                };
                /*
        A disabled choice appears in the choice dropdown but cannot be selected
        A selected choice has been added to the passed input's value (added as an item)
        An active choice appears within the choice dropdown
      */ return [
                    ...state,
                    choice
                ];
            }
        case "ADD_ITEM":
            {
                const addItemAction = action;
                // When an item is added and it has an associated choice,
                // we want to disable it so it can't be chosen again
                if (addItemAction.choiceId > -1) return state.map((obj)=>{
                    const choice = obj;
                    if (choice.id === parseInt(`${addItemAction.choiceId}`, 10)) choice.selected = true;
                    return choice;
                });
                return state;
            }
        case "REMOVE_ITEM":
            {
                const removeItemAction = action;
                // When an item is removed and it has an associated choice,
                // we want to re-enable it so it can be chosen again
                if (removeItemAction.choiceId && removeItemAction.choiceId > -1) return state.map((obj)=>{
                    const choice = obj;
                    if (choice.id === parseInt(`${removeItemAction.choiceId}`, 10)) choice.selected = false;
                    return choice;
                });
                return state;
            }
        case "FILTER_CHOICES":
            {
                const filterChoicesAction = action;
                return state.map((obj)=>{
                    const choice = obj;
                    // Set active state based on whether choice is
                    // within filtered results
                    choice.active = filterChoicesAction.results.some(({ item , score  })=>{
                        if (item.id === choice.id) {
                            choice.score = score;
                            return true;
                        }
                        return false;
                    });
                    return choice;
                });
            }
        case "ACTIVATE_CHOICES":
            {
                const activateChoicesAction = action;
                return state.map((obj)=>{
                    const choice = obj;
                    choice.active = activateChoicesAction.active;
                    return choice;
                });
            }
        case "CLEAR_CHOICES":
            return defaultState;
        default:
            return state;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxR15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultState", ()=>defaultState);
const defaultState = false;
const general = (state = defaultState, action = {})=>{
    switch(action.type){
        case "SET_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
};
exports.default = general;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tDSen":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _index = require("../reducers/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
class Store {
    constructor(){
        this._store = (0, _redux.createStore)((0, _indexDefault.default), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    /**
   * Subscribe store to function call (wrapped Redux method)
   */ subscribe(onChange) {
        this._store.subscribe(onChange);
    }
    /**
   * Dispatch event to store (wrapped Redux method)
   */ dispatch(action) {
        this._store.dispatch(action);
    }
    /**
   * Get store object (wrapping Redux method)
   */ get state() {
        return this._store.getState();
    }
    /**
   * Get items from store
   */ get items() {
        return this.state.items;
    }
    /**
   * Get active items from store
   */ get activeItems() {
        return this.items.filter((item)=>item.active === true);
    }
    /**
   * Get highlighted items from store
   */ get highlightedActiveItems() {
        return this.items.filter((item)=>item.active && item.highlighted);
    }
    /**
   * Get choices from store
   */ get choices() {
        return this.state.choices;
    }
    /**
   * Get active choices from store
   */ get activeChoices() {
        return this.choices.filter((choice)=>choice.active === true);
    }
    /**
   * Get selectable choices from store
   */ get selectableChoices() {
        return this.choices.filter((choice)=>choice.disabled !== true);
    }
    /**
   * Get choices that can be searched (excluding placeholders)
   */ get searchableChoices() {
        return this.selectableChoices.filter((choice)=>choice.placeholder !== true);
    }
    /**
   * Get placeholder choice from store
   */ get placeholderChoice() {
        return [
            ...this.choices
        ].reverse().find((choice)=>choice.placeholder === true);
    }
    /**
   * Get groups from store
   */ get groups() {
        return this.state.groups;
    }
    /**
   * Get active groups from store
   */ get activeGroups() {
        const { groups , choices  } = this;
        return groups.filter((group)=>{
            const isActive = group.active === true && group.disabled === false;
            const hasActiveOptions = choices.some((choice)=>choice.active === true && choice.disabled === false);
            return isActive && hasActiveOptions;
        }, []);
    }
    /**
   * Get loading state from store
   */ isLoading() {
        return this.state.loading;
    }
    /**
   * Get single choice by it's ID
   */ getChoiceById(id) {
        return this.activeChoices.find((choice)=>choice.id === parseInt(id, 10));
    }
    /**
   * Get group by group id
   */ getGroupById(id) {
        return this.groups.find((group)=>group.id === id);
    }
}
exports.default = Store;

},{"redux":"cDNB3","../reducers/index":"2IiQq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3DkCJ":[function(require,module,exports) {
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const templates = {
    containerOuter ({ classNames: { containerOuter  }  }, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
        const div = Object.assign(document.createElement("div"), {
            className: containerOuter
        });
        div.dataset.type = passedElementType;
        if (dir) div.dir = dir;
        if (isSelectOneElement) div.tabIndex = 0;
        if (isSelectElement) {
            div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
            if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
        }
        div.setAttribute("aria-haspopup", "true");
        div.setAttribute("aria-expanded", "false");
        if (labelId) div.setAttribute("aria-labelledby", labelId);
        return div;
    },
    containerInner ({ classNames: { containerInner  }  }) {
        return Object.assign(document.createElement("div"), {
            className: containerInner
        });
    },
    itemList ({ classNames: { list , listSingle , listItems  }  }, isSelectOneElement) {
        return Object.assign(document.createElement("div"), {
            className: `${list} ${isSelectOneElement ? listSingle : listItems}`
        });
    },
    placeholder ({ allowHTML , classNames: { placeholder  }  }, value) {
        return Object.assign(document.createElement("div"), {
            className: placeholder,
            [allowHTML ? "innerHTML" : "innerText"]: value
        });
    },
    item ({ allowHTML , classNames: { item , button , highlightedState , itemSelectable , placeholder  }  }, { id , value , label , customProperties , active , disabled , highlighted , placeholder: isPlaceholder  }, removeItemButton) {
        const div = Object.assign(document.createElement("div"), {
            className: item,
            [allowHTML ? "innerHTML" : "innerText"]: label
        });
        Object.assign(div.dataset, {
            item: "",
            id,
            value,
            customProperties
        });
        if (active) div.setAttribute("aria-selected", "true");
        if (disabled) div.setAttribute("aria-disabled", "true");
        if (isPlaceholder) div.classList.add(placeholder);
        div.classList.add(highlighted ? highlightedState : itemSelectable);
        if (removeItemButton) {
            if (disabled) div.classList.remove(itemSelectable);
            div.dataset.deletable = "";
            /** @todo This MUST be localizable, not hardcoded! */ const REMOVE_ITEM_TEXT = "Remove item";
            const removeButton = Object.assign(document.createElement("button"), {
                type: "button",
                className: button,
                [allowHTML ? "innerHTML" : "innerText"]: REMOVE_ITEM_TEXT
            });
            removeButton.setAttribute("aria-label", `${REMOVE_ITEM_TEXT}: '${value}'`);
            removeButton.dataset.button = "";
            div.appendChild(removeButton);
        }
        return div;
    },
    choiceList ({ classNames: { list  }  }, isSelectOneElement) {
        const div = Object.assign(document.createElement("div"), {
            className: list
        });
        if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
        div.setAttribute("role", "listbox");
        return div;
    },
    choiceGroup ({ allowHTML , classNames: { group , groupHeading , itemDisabled  }  }, { id , value , disabled  }) {
        const div = Object.assign(document.createElement("div"), {
            className: `${group} ${disabled ? itemDisabled : ""}`
        });
        div.setAttribute("role", "group");
        Object.assign(div.dataset, {
            group: "",
            id,
            value
        });
        if (disabled) div.setAttribute("aria-disabled", "true");
        div.appendChild(Object.assign(document.createElement("div"), {
            className: groupHeading,
            [allowHTML ? "innerHTML" : "innerText"]: value
        }));
        return div;
    },
    choice ({ allowHTML , classNames: { item , itemChoice , itemSelectable , selectedState , itemDisabled , placeholder  }  }, { id , value , label , groupId , elementId , disabled: isDisabled , selected: isSelected , placeholder: isPlaceholder  }, selectText) {
        const div = Object.assign(document.createElement("div"), {
            id: elementId,
            [allowHTML ? "innerHTML" : "innerText"]: label,
            className: `${item} ${itemChoice}`
        });
        if (isSelected) div.classList.add(selectedState);
        if (isPlaceholder) div.classList.add(placeholder);
        div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
        Object.assign(div.dataset, {
            choice: "",
            id,
            value,
            selectText
        });
        if (isDisabled) {
            div.classList.add(itemDisabled);
            div.dataset.choiceDisabled = "";
            div.setAttribute("aria-disabled", "true");
        } else {
            div.classList.add(itemSelectable);
            div.dataset.choiceSelectable = "";
        }
        return div;
    },
    input ({ classNames: { input , inputCloned  }  }, placeholderValue) {
        const inp = Object.assign(document.createElement("input"), {
            type: "search",
            name: "search_terms",
            className: `${input} ${inputCloned}`,
            autocomplete: "off",
            autocapitalize: "off",
            spellcheck: false
        });
        inp.setAttribute("role", "textbox");
        inp.setAttribute("aria-autocomplete", "list");
        inp.setAttribute("aria-label", placeholderValue);
        return inp;
    },
    dropdown ({ classNames: { list , listDropdown  }  }) {
        const div = document.createElement("div");
        div.classList.add(list, listDropdown);
        div.setAttribute("aria-expanded", "false");
        return div;
    },
    notice ({ allowHTML , classNames: { item , itemChoice , noResults , noChoices  }  }, innerText, type = "") {
        const classes = [
            item,
            itemChoice
        ];
        if (type === "no-choices") classes.push(noChoices);
        else if (type === "no-results") classes.push(noResults);
        return Object.assign(document.createElement("div"), {
            [allowHTML ? "innerHTML" : "innerText"]: innerText,
            className: classes.join(" ")
        });
    },
    option ({ label , value , customProperties , active , disabled  }) {
        const opt = new Option(label, value, false, active);
        if (customProperties) opt.dataset.customProperties = `${customProperties}`;
        opt.disabled = !!disabled;
        return opt;
    }
};
exports.default = templates;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aiyKQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _actionType = require("./action-type");
parcelHelpers.exportAll(_actionType, exports);
var _choice = require("./choice");
parcelHelpers.exportAll(_choice, exports);
var _choices = require("./choices");
parcelHelpers.exportAll(_choices, exports);
var _classNames = require("./class-names");
parcelHelpers.exportAll(_classNames, exports);
var _eventType = require("./event-type");
parcelHelpers.exportAll(_eventType, exports);
var _group = require("./group");
parcelHelpers.exportAll(_group, exports);
var _item = require("./item");
parcelHelpers.exportAll(_item, exports);
var _keycodeMap = require("./keycode-map");
parcelHelpers.exportAll(_keycodeMap, exports);
var _notice = require("./notice");
parcelHelpers.exportAll(_notice, exports);
var _options = require("./options");
parcelHelpers.exportAll(_options, exports);
var _passedElement = require("./passed-element");
parcelHelpers.exportAll(_passedElement, exports);
var _passedElementType = require("./passed-element-type");
parcelHelpers.exportAll(_passedElementType, exports);
var _positionOptionsType = require("./position-options-type");
parcelHelpers.exportAll(_positionOptionsType, exports);
var _state = require("./state");
parcelHelpers.exportAll(_state, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./action-type":"10fqD","./choice":"ck4Zm","./choices":"hLAif","./class-names":"3zRm1","./event-type":"4FPcF","./group":"lgU0T","./item":"gcUtU","./keycode-map":"hiGze","./notice":"ere4j","./options":"bpbsp","./passed-element":"4ohN0","./passed-element-type":"d88TS","./position-options-type":"dtHBP","./state":"7H9u0","./types":"4n0JX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10fqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ck4Zm":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLAif":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zRm1":[function(require,module,exports) {
/** Classes added to HTML generated by  By default classnames follow the BEM notation. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FPcF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgU0T":[function(require,module,exports) {
/* eslint-disable @typescript-eslint/no-explicit-any */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcUtU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiGze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ere4j":[function(require,module,exports) {
// @todo rename
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpbsp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ohN0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d88TS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtHBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7H9u0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4n0JX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cnLyj","b9bkJ"], "b9bkJ", "parcelRequire7bbc")

//# sourceMappingURL=index.c9125a90.js.map

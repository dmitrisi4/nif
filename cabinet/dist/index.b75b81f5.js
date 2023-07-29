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
})({"dRASG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "19ac41cab75b81f5";
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

},{}],"hRSfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
const COUNTRIES = [
    {
        label: "Afghanistan",
        value: "AF"
    },
    {
        label: "\xc5land Islands",
        value: "AX"
    },
    {
        label: "Albania",
        value: "AL"
    },
    {
        label: "Algeria",
        value: "DZ"
    },
    {
        label: "American Samoa",
        value: "AS"
    },
    {
        label: "AndorrA",
        value: "AD"
    },
    {
        label: "Angola",
        value: "AO"
    },
    {
        label: "Anguilla",
        value: "AI"
    },
    {
        label: "Antarctica",
        value: "AQ"
    },
    {
        label: "Antigua and Barbuda",
        value: "AG"
    },
    {
        label: "Argentina",
        value: "AR"
    },
    {
        label: "Armenia",
        value: "AM"
    },
    {
        label: "Aruba",
        value: "AW"
    },
    {
        label: "Australia",
        value: "AU"
    },
    {
        label: "Austria",
        value: "AT"
    },
    {
        label: "Azerbaijan",
        value: "AZ"
    },
    {
        label: "Bahamas",
        value: "BS"
    },
    {
        label: "Bahrain",
        value: "BH"
    },
    {
        label: "Bangladesh",
        value: "BD"
    },
    {
        label: "Barbados",
        value: "BB"
    },
    {
        label: "Belarus",
        value: "BY"
    },
    {
        label: "Belgium",
        value: "BE"
    },
    {
        label: "Belize",
        value: "BZ"
    },
    {
        label: "Benin",
        value: "BJ"
    },
    {
        label: "Bermuda",
        value: "BM"
    },
    {
        label: "Bhutan",
        value: "BT"
    },
    {
        label: "Bolivia",
        value: "BO"
    },
    {
        label: "Bosnia and Herzegovina",
        value: "BA"
    },
    {
        label: "Botswana",
        value: "BW"
    },
    {
        label: "Bouvet Island",
        value: "BV"
    },
    {
        label: "Brazil",
        value: "BR"
    },
    {
        label: "British Indian Ocean Territory",
        value: "IO"
    },
    {
        label: "Brunei Darussalam",
        value: "BN"
    },
    {
        label: "Bulgaria",
        value: "BG"
    },
    {
        label: "Burkina Faso",
        value: "BF"
    },
    {
        label: "Burundi",
        value: "BI"
    },
    {
        label: "Cambodia",
        value: "KH"
    },
    {
        label: "Cameroon",
        value: "CM"
    },
    {
        label: "Canada",
        value: "CA"
    },
    {
        label: "Cape Verde",
        value: "CV"
    },
    {
        label: "Cayman Islands",
        value: "KY"
    },
    {
        label: "Central African Republic",
        value: "CF"
    },
    {
        label: "Chad",
        value: "TD"
    },
    {
        label: "Chile",
        value: "CL"
    },
    {
        label: "China",
        value: "CN"
    },
    {
        label: "Christmas Island",
        value: "CX"
    },
    {
        label: "Cocos (Keeling) Islands",
        value: "CC"
    },
    {
        label: "Colombia",
        value: "CO"
    },
    {
        label: "Comoros",
        value: "KM"
    },
    {
        label: "Congo",
        value: "CG"
    },
    {
        label: "Congo, The Democratic Republic of the",
        value: "CD"
    },
    {
        label: "Cook Islands",
        value: "CK"
    },
    {
        label: "Costa Rica",
        value: "CR"
    },
    {
        label: "Cote D'Ivoire",
        value: "CI"
    },
    {
        label: "Croatia",
        value: "HR"
    },
    {
        label: "Cuba",
        value: "CU"
    },
    {
        label: "Cyprus",
        value: "CY"
    },
    {
        label: "Czech Republic",
        value: "CZ"
    },
    {
        label: "Denmark",
        value: "DK"
    },
    {
        label: "Djibouti",
        value: "DJ"
    },
    {
        label: "Dominica",
        value: "DM"
    },
    {
        label: "Dominican Republic",
        value: "DO"
    },
    {
        label: "Ecuador",
        value: "EC"
    },
    {
        label: "Egypt",
        value: "EG"
    },
    {
        label: "El Salvador",
        value: "SV"
    },
    {
        label: "Equatorial Guinea",
        value: "GQ"
    },
    {
        label: "Eritrea",
        value: "ER"
    },
    {
        label: "Estonia",
        value: "EE"
    },
    {
        label: "Ethiopia",
        value: "ET"
    },
    {
        label: "Falkland Islands (Malvinas)",
        value: "FK"
    },
    {
        label: "Faroe Islands",
        value: "FO"
    },
    {
        label: "Fiji",
        value: "FJ"
    },
    {
        label: "Finland",
        value: "FI"
    },
    {
        label: "France",
        value: "FR"
    },
    {
        label: "French Guiana",
        value: "GF"
    },
    {
        label: "French Polynesia",
        value: "PF"
    },
    {
        label: "French Southern Territories",
        value: "TF"
    },
    {
        label: "Gabon",
        value: "GA"
    },
    {
        label: "Gambia",
        value: "GM"
    },
    {
        label: "Georgia",
        value: "GE"
    },
    {
        label: "Germany",
        value: "DE"
    },
    {
        label: "Ghana",
        value: "GH"
    },
    {
        label: "Gibraltar",
        value: "GI"
    },
    {
        label: "Greece",
        value: "GR"
    },
    {
        label: "Greenland",
        value: "GL"
    },
    {
        label: "Grenada",
        value: "GD"
    },
    {
        label: "Guadeloupe",
        value: "GP"
    },
    {
        label: "Guam",
        value: "GU"
    },
    {
        label: "Guatemala",
        value: "GT"
    },
    {
        label: "Guernsey",
        value: "GG"
    },
    {
        label: "Guinea",
        value: "GN"
    },
    {
        label: "Guinea-Bissau",
        value: "GW"
    },
    {
        label: "Guyana",
        value: "GY"
    },
    {
        label: "Haiti",
        value: "HT"
    },
    {
        label: "Heard Island and Mcdonald Islands",
        value: "HM"
    },
    {
        label: "Holy See (Vatican City State)",
        value: "VA"
    },
    {
        label: "Honduras",
        value: "HN"
    },
    {
        label: "Hong Kong",
        value: "HK"
    },
    {
        label: "Hungary",
        value: "HU"
    },
    {
        label: "Iceland",
        value: "IS"
    },
    {
        label: "India",
        value: "IN"
    },
    {
        label: "Indonesia",
        value: "ID"
    },
    {
        label: "Iran, Islamic Republic Of",
        value: "IR"
    },
    {
        label: "Iraq",
        value: "IQ"
    },
    {
        label: "Ireland",
        value: "IE"
    },
    {
        label: "Isle of Man",
        value: "IM"
    },
    {
        label: "Israel",
        value: "IL"
    },
    {
        label: "Italy",
        value: "IT"
    },
    {
        label: "Jamaica",
        value: "JM"
    },
    {
        label: "Japan",
        value: "JP"
    },
    {
        label: "Jersey",
        value: "JE"
    },
    {
        label: "Jordan",
        value: "JO"
    },
    {
        label: "Kazakhstan",
        value: "KZ"
    },
    {
        label: "Kenya",
        value: "KE"
    },
    {
        label: "Kiribati",
        value: "KI"
    },
    {
        label: "Korea, Democratic People'S Republic of",
        value: "KP"
    },
    {
        label: "Korea, Republic of",
        value: "KR"
    },
    {
        label: "Kuwait",
        value: "KW"
    },
    {
        label: "Kyrgyzstan",
        value: "KG"
    },
    {
        label: "Lao People'S Democratic Republic",
        value: "LA"
    },
    {
        label: "Latvia",
        value: "LV"
    },
    {
        label: "Lebanon",
        value: "LB"
    },
    {
        label: "Lesotho",
        value: "LS"
    },
    {
        label: "Liberia",
        value: "LR"
    },
    {
        label: "Libyan Arab Jamahiriya",
        value: "LY"
    },
    {
        label: "Liechtenstein",
        value: "LI"
    },
    {
        label: "Lithuania",
        value: "LT"
    },
    {
        label: "Luxembourg",
        value: "LU"
    },
    {
        label: "Macao",
        value: "MO"
    },
    {
        label: "Macedonia, The Former Yugoslav Republic of",
        value: "MK"
    },
    {
        label: "Madagascar",
        value: "MG"
    },
    {
        label: "Malawi",
        value: "MW"
    },
    {
        label: "Malaysia",
        value: "MY"
    },
    {
        label: "Maldives",
        value: "MV"
    },
    {
        label: "Mali",
        value: "ML"
    },
    {
        label: "Malta",
        value: "MT"
    },
    {
        label: "Marshall Islands",
        value: "MH"
    },
    {
        label: "Martinique",
        value: "MQ"
    },
    {
        label: "Mauritania",
        value: "MR"
    },
    {
        label: "Mauritius",
        value: "MU"
    },
    {
        label: "Mayotte",
        value: "YT"
    },
    {
        label: "Mexico",
        value: "MX"
    },
    {
        label: "Micronesia, Federated States of",
        value: "FM"
    },
    {
        label: "Moldova, Republic of",
        value: "MD"
    },
    {
        label: "Monaco",
        value: "MC"
    },
    {
        label: "Mongolia",
        value: "MN"
    },
    {
        label: "Montserrat",
        value: "MS"
    },
    {
        label: "Morocco",
        value: "MA"
    },
    {
        label: "Mozambique",
        value: "MZ"
    },
    {
        label: "Myanmar",
        value: "MM"
    },
    {
        label: "Namibia",
        value: "NA"
    },
    {
        label: "Nauru",
        value: "NR"
    },
    {
        label: "Nepal",
        value: "NP"
    },
    {
        label: "Netherlands",
        value: "NL"
    },
    {
        label: "Netherlands Antilles",
        value: "AN"
    },
    {
        label: "New Caledonia",
        value: "NC"
    },
    {
        label: "New Zealand",
        value: "NZ"
    },
    {
        label: "Nicaragua",
        value: "NI"
    },
    {
        label: "Niger",
        value: "NE"
    },
    {
        label: "Nigeria",
        value: "NG"
    },
    {
        label: "Niue",
        value: "NU"
    },
    {
        label: "Norfolk Island",
        value: "NF"
    },
    {
        label: "Northern Mariana Islands",
        value: "MP"
    },
    {
        label: "Norway",
        value: "NO"
    },
    {
        label: "Oman",
        value: "OM"
    },
    {
        label: "Pakistan",
        value: "PK"
    },
    {
        label: "Palau",
        value: "PW"
    },
    {
        label: "Palestinian Territory, Occupied",
        value: "PS"
    },
    {
        label: "Panama",
        value: "PA"
    },
    {
        label: "Papua New Guinea",
        value: "PG"
    },
    {
        label: "Paraguay",
        value: "PY"
    },
    {
        label: "Peru",
        value: "PE"
    },
    {
        label: "Philippines",
        value: "PH"
    },
    {
        label: "Pitcairn",
        value: "PN"
    },
    {
        label: "Poland",
        value: "PL"
    },
    {
        label: "Portugal",
        value: "PT"
    },
    {
        label: "Puerto Rico",
        value: "PR"
    },
    {
        label: "Qatar",
        value: "QA"
    },
    {
        label: "Reunion",
        value: "RE"
    },
    {
        label: "Romania",
        value: "RO"
    },
    {
        label: "Russian Federation",
        value: "RU"
    },
    {
        label: "RWANDA",
        value: "RW"
    },
    {
        label: "Saint Helena",
        value: "SH"
    },
    {
        label: "Saint Kitts and Nevis",
        value: "KN"
    },
    {
        label: "Saint Lucia",
        value: "LC"
    },
    {
        label: "Saint Pierre and Miquelon",
        value: "PM"
    },
    {
        label: "Saint Vincent and the Grenadines",
        value: "VC"
    },
    {
        label: "Samoa",
        value: "WS"
    },
    {
        label: "San Marino",
        value: "SM"
    },
    {
        label: "Sao Tome and Principe",
        value: "ST"
    },
    {
        label: "Saudi Arabia",
        value: "SA"
    },
    {
        label: "Senegal",
        value: "SN"
    },
    {
        label: "Serbia and Montenegro",
        value: "CS"
    },
    {
        label: "Seychelles",
        value: "SC"
    },
    {
        label: "Sierra Leone",
        value: "SL"
    },
    {
        label: "Singapore",
        value: "SG"
    },
    {
        label: "Slovakia",
        value: "SK"
    },
    {
        label: "Slovenia",
        value: "SI"
    },
    {
        label: "Solomon Islands",
        value: "SB"
    },
    {
        label: "Somalia",
        value: "SO"
    },
    {
        label: "South Africa",
        value: "ZA"
    },
    {
        label: "South Georgia and the South Sandwich Islands",
        value: "GS"
    },
    {
        label: "Spain",
        value: "ES"
    },
    {
        label: "Sri Lanka",
        value: "LK"
    },
    {
        label: "Sudan",
        value: "SD"
    },
    {
        label: "Suriname",
        value: "SR"
    },
    {
        label: "Svalbard and Jan Mayen",
        value: "SJ"
    },
    {
        label: "Swaziland",
        value: "SZ"
    },
    {
        label: "Sweden",
        value: "SE"
    },
    {
        label: "Switzerland",
        value: "CH"
    },
    {
        label: "Syrian Arab Republic",
        value: "SY"
    },
    {
        label: "Taiwan, Province of China",
        value: "TW"
    },
    {
        label: "Tajikistan",
        value: "TJ"
    },
    {
        label: "Tanzania, United Republic of",
        value: "TZ"
    },
    {
        label: "Thailand",
        value: "TH"
    },
    {
        label: "Timor-Leste",
        value: "TL"
    },
    {
        label: "Togo",
        value: "TG"
    },
    {
        label: "Tokelau",
        value: "TK"
    },
    {
        label: "Tonga",
        value: "TO"
    },
    {
        label: "Trinidad and Tobago",
        value: "TT"
    },
    {
        label: "Tunisia",
        value: "TN"
    },
    {
        label: "Turkey",
        value: "TR"
    },
    {
        label: "Turkmenistan",
        value: "TM"
    },
    {
        label: "Turks and Caicos Islands",
        value: "TC"
    },
    {
        label: "Tuvalu",
        value: "TV"
    },
    {
        label: "Uganda",
        value: "UG"
    },
    {
        label: "Ukraine",
        value: "UA"
    },
    {
        label: "United Arab Emirates",
        value: "AE"
    },
    {
        label: "United Kingdom",
        value: "GB"
    },
    {
        label: "United States",
        value: "US"
    },
    {
        label: "United States Minor Outlying Islands",
        value: "UM"
    },
    {
        label: "Uruguay",
        value: "UY"
    },
    {
        label: "Uzbekistan",
        value: "UZ"
    },
    {
        label: "Vanuatu",
        value: "VU"
    },
    {
        label: "Venezuela",
        value: "VE"
    },
    {
        label: "Viet Nam",
        value: "VN"
    },
    {
        label: "Virgin Islands, British",
        value: "VG"
    },
    {
        label: "Virgin Islands, U.S.",
        value: "VI"
    },
    {
        label: "Wallis and Futuna",
        value: "WF"
    },
    {
        label: "Western Sahara",
        value: "EH"
    },
    {
        label: "Yemen",
        value: "YE"
    },
    {
        label: "Zambia",
        value: "ZM"
    },
    {
        label: "Zimbabwe",
        value: "ZW"
    }
];
let choise;
document.addEventListener("DOMContentLoaded", function() {
    const selectActivePlaceholder = document.querySelector(".selectActivePlaceholder");
    // create counries select
    const selectCounties = document.querySelector("#js-choice");
    // for(var i = 0; i < COUNTRIES.length; i++) {
    // 	var opt = COUNTRIES[i];
    // 	var el = document.createElement("option");
    // 	el.textContent = opt.name;
    // 	el.value = opt.name;
    // 	selectCounties.appendChild(el);
    // }
    const element = selectCounties;
    choise = new (0, _choicesJsDefault.default)(element, {
        allowHTML: true,
        placeholderValue: "This is a placeholder set in the config",
        searchPlaceholderValue: "This is a search placeholder"
    });
    choise.setChoices(COUNTRIES);
    choise.passedElement.element.addEventListener("hideDropdown", function(event) {
        const choiceValue = choise.getValue(true);
        selectActivePlaceholder.classList.add("active");
        if (choiceValue === "Country of residence") selectActivePlaceholder.classList.remove("active");
    });
});
debugger;

},{"choices.js":"7bdLf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dRASG","hRSfJ"], "hRSfJ", "parcelRequire7bbc")

//# sourceMappingURL=index.b75b81f5.js.map

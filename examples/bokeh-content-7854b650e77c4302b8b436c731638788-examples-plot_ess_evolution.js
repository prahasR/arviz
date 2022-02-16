(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("658b8a71-59be-4b48-be50-0bcdcba5c1c1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '658b8a71-59be-4b48-be50-0bcdcba5c1c1' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"40f65f8c-3501-429c-9d84-63531ffe947a":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20878","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20866","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20903"},"selection_policy":{"id":"20902"}},"id":"20869","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20875"},"glyph":{"id":"20876"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20878"},"nonselection_glyph":{"id":"20877"},"view":{"id":"20880"}},"id":"20879","type":"GlyphRenderer"},{"attributes":{},"id":"20900","type":"UnionRenderers"},{"attributes":{},"id":"20849","type":"UndoTool"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20876","type":"Line"},{"attributes":{"source":{"id":"20869"}},"id":"20874","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20863"},"glyph":{"id":"20864"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20866"},"nonselection_glyph":{"id":"20865"},"view":{"id":"20868"}},"id":"20867","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"20827"},0,0]]},"id":"20911","type":"GridBox"},{"attributes":{},"id":"20832","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"20869"},"glyph":{"id":"20870"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20872"},"nonselection_glyph":{"id":"20871"},"view":{"id":"20874"}},"id":"20873","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20864","type":"Circle"},{"attributes":{},"id":"20902","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"20854"}],"tools":[{"id":"20844"},{"id":"20845"},{"id":"20846"},{"id":"20847"},{"id":"20848"},{"id":"20849"},{"id":"20850"},{"id":"20851"}]},"id":"20912","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20884","type":"Circle"},{"attributes":{},"id":"20907","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20907"},"selection_policy":{"id":"20906"}},"id":"20881","type":"ColumnDataSource"},{"attributes":{},"id":"20830","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"20912"},"toolbar_location":"above"},"id":"20913","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20853","type":"PolyAnnotation"},{"attributes":{},"id":"20905","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20891","type":"Title"},{"attributes":{"axis":{"id":"20836"},"coordinates":null,"group":null,"ticker":null},"id":"20839","type":"Grid"},{"attributes":{"source":{"id":"20875"}},"id":"20880","type":"CDSView"},{"attributes":{"callback":null},"id":"20851","type":"HoverTool"},{"attributes":{"axis":{"id":"20840"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20843","type":"Grid"},{"attributes":{},"id":"20906","type":"UnionRenderers"},{"attributes":{"children":[{"id":"20913"},{"id":"20911"}]},"id":"20914","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20901"},"selection_policy":{"id":"20900"}},"id":"20863","type":"ColumnDataSource"},{"attributes":{},"id":"20844","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20905"},"selection_policy":{"id":"20904"}},"id":"20875","type":"ColumnDataSource"},{"attributes":{},"id":"20898","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"20853"}},"id":"20848","type":"LassoSelectTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20867"},{"id":"20873"}]},"id":"20889","type":"LegendItem"},{"attributes":{},"id":"20847","type":"WheelZoomTool"},{"attributes":{},"id":"20828","type":"DataRange1d"},{"attributes":{},"id":"20895","type":"BasicTickFormatter"},{"attributes":{},"id":"20837","type":"BasicTicker"},{"attributes":{},"id":"20901","type":"Selection"},{"attributes":{},"id":"20896","type":"AllLabels"},{"attributes":{},"id":"20841","type":"BasicTicker"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20872","type":"Line"},{"attributes":{},"id":"20850","type":"SaveTool"},{"attributes":{},"id":"20845","type":"PanTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20870","type":"Line"},{"attributes":{},"id":"20899","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20865","type":"Circle"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20885"},{"id":"20879"}]},"id":"20890","type":"LegendItem"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20887","type":"Span"},{"attributes":{"above":[{"id":"20888"}],"below":[{"id":"20836"}],"center":[{"id":"20839"},{"id":"20843"}],"height":500,"left":[{"id":"20840"}],"output_backend":"webgl","renderers":[{"id":"20867"},{"id":"20873"},{"id":"20879"},{"id":"20885"},{"id":"20887"}],"title":{"id":"20891"},"toolbar":{"id":"20854"},"toolbar_location":null,"width":500,"x_range":{"id":"20828"},"x_scale":{"id":"20832"},"y_range":{"id":"20830"},"y_scale":{"id":"20834"}},"id":"20827","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20904","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"20844"},{"id":"20845"},{"id":"20846"},{"id":"20847"},{"id":"20848"},{"id":"20849"},{"id":"20850"},{"id":"20851"}]},"id":"20854","type":"Toolbar"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20889"},{"id":"20890"}],"location":"center_right","orientation":"horizontal"},"id":"20888","type":"Legend"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20882","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20881"},"glyph":{"id":"20882"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20884"},"nonselection_glyph":{"id":"20883"},"view":{"id":"20886"}},"id":"20885","type":"GlyphRenderer"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20895"},"group":null,"major_label_policy":{"id":"20896"},"ticker":{"id":"20841"}},"id":"20840","type":"LinearAxis"},{"attributes":{"source":{"id":"20881"}},"id":"20886","type":"CDSView"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20898"},"group":null,"major_label_policy":{"id":"20899"},"ticker":{"id":"20837"}},"id":"20836","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20871","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20852","type":"BoxAnnotation"},{"attributes":{},"id":"20903","type":"Selection"},{"attributes":{"overlay":{"id":"20852"}},"id":"20846","type":"BoxZoomTool"},{"attributes":{"source":{"id":"20863"}},"id":"20868","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20883","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20877","type":"Line"},{"attributes":{},"id":"20834","type":"LinearScale"}],"root_ids":["20914"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"40f65f8c-3501-429c-9d84-63531ffe947a","root_ids":["20914"],"roots":{"20914":"658b8a71-59be-4b48-be50-0bcdcba5c1c1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
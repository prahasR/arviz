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
    
      
      
    
      const element = document.getElementById("b6d280de-fb37-4b09-bda4-1f9b3aa95a07");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b6d280de-fb37-4b09-bda4-1f9b3aa95a07' but no matching script tag was found.")
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
                    
                  const docs_json = '{"2807c4df-4f86-48ff-9127-c347d7ee4022":{"defs":[],"roots":{"references":[{"attributes":{"tools":[{"id":"20545"},{"id":"20546"},{"id":"20547"},{"id":"20548"},{"id":"20549"},{"id":"20550"},{"id":"20551"},{"id":"20552"}]},"id":"20555","type":"Toolbar"},{"attributes":{"source":{"id":"20565"}},"id":"20567","type":"CDSView"},{"attributes":{},"id":"20578","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20554","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"20537"}],"center":[{"id":"20540"},{"id":"20544"}],"height":288,"left":[{"id":"20541"}],"output_backend":"webgl","renderers":[{"id":"20566"}],"title":{"id":"20568"},"toolbar":{"id":"20555"},"toolbar_location":null,"width":432,"x_range":{"id":"20529"},"x_scale":{"id":"20533"},"y_range":{"id":"20531"},"y_scale":{"id":"20535"}},"id":"20528","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"20555"}],"tools":[{"id":"20545"},{"id":"20546"},{"id":"20547"},{"id":"20548"},{"id":"20549"},{"id":"20550"},{"id":"20551"},{"id":"20552"}]},"id":"20583","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20553","type":"BoxAnnotation"},{"attributes":{},"id":"20550","type":"UndoTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20578"},"selection_policy":{"id":"20577"}},"id":"20565","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"20552","type":"HoverTool"},{"attributes":{"axis":{"id":"20541"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20544","type":"Grid"},{"attributes":{},"id":"20548","type":"WheelZoomTool"},{"attributes":{},"id":"20545","type":"ResetTool"},{"attributes":{},"id":"20575","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"20565"},"glyph":{"id":"20564"},"group":null,"hover_glyph":null,"view":{"id":"20567"}},"id":"20566","type":"GlyphRenderer"},{"attributes":{},"id":"20546","type":"PanTool"},{"attributes":{},"id":"20576","type":"AllLabels"},{"attributes":{},"id":"20577","type":"UnionRenderers"},{"attributes":{},"id":"20529","type":"DataRange1d"},{"attributes":{},"id":"20533","type":"LinearScale"},{"attributes":{"axis":{"id":"20537"},"coordinates":null,"group":null,"ticker":null},"id":"20540","type":"Grid"},{"attributes":{},"id":"20572","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20572"},"group":null,"major_label_policy":{"id":"20573"},"ticker":{"id":"20542"}},"id":"20541","type":"LinearAxis"},{"attributes":{"overlay":{"id":"20554"}},"id":"20549","type":"LassoSelectTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20564","type":"Scatter"},{"attributes":{"overlay":{"id":"20553"}},"id":"20547","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20575"},"group":null,"major_label_policy":{"id":"20576"},"ticker":{"id":"20538"}},"id":"20537","type":"LinearAxis"},{"attributes":{},"id":"20531","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"20583"},"toolbar_location":"above"},"id":"20584","type":"ToolbarBox"},{"attributes":{},"id":"20542","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20568","type":"Title"},{"attributes":{},"id":"20538","type":"BasicTicker"},{"attributes":{},"id":"20573","type":"AllLabels"},{"attributes":{"children":[[{"id":"20528"},0,0]]},"id":"20582","type":"GridBox"},{"attributes":{},"id":"20551","type":"SaveTool"},{"attributes":{},"id":"20535","type":"LinearScale"},{"attributes":{"children":[{"id":"20584"},{"id":"20582"}]},"id":"20585","type":"Column"}],"root_ids":["20585"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"2807c4df-4f86-48ff-9127-c347d7ee4022","root_ids":["20585"],"roots":{"20585":"b6d280de-fb37-4b09-bda4-1f9b3aa95a07"}}];
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
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
    
      
      
    
      const element = document.getElementById("9f51bef7-4e70-4f5f-866e-6a153b7aa155");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9f51bef7-4e70-4f5f-866e-6a153b7aa155' but no matching script tag was found.")
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
                    
                  const docs_json = '{"ba07d739-fd1f-41cb-b747-1b5c6a7d7e78":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"17258"}},"id":"17253","type":"LassoSelectTool"},{"attributes":{},"id":"17233","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"17269"},"glyph":{"id":"17268"},"group":null,"hover_glyph":null,"view":{"id":"17271"}},"id":"17270","type":"GlyphRenderer"},{"attributes":{},"id":"17280","type":"AllLabels"},{"attributes":{"toolbar":{"id":"17287"},"toolbar_location":"above"},"id":"17288","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17272","type":"Title"},{"attributes":{},"id":"17235","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17232"},0,0]]},"id":"17286","type":"GridBox"},{"attributes":{"toolbars":[{"id":"17259"}],"tools":[{"id":"17249"},{"id":"17250"},{"id":"17251"},{"id":"17252"},{"id":"17253"},{"id":"17254"},{"id":"17255"},{"id":"17256"}]},"id":"17287","type":"ProxyToolbar"},{"attributes":{},"id":"17279","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"17245"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17248","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17268","type":"Scatter"},{"attributes":{},"id":"17282","type":"Selection"},{"attributes":{},"id":"17252","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17258","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"17249"},{"id":"17250"},{"id":"17251"},{"id":"17252"},{"id":"17253"},{"id":"17254"},{"id":"17255"},{"id":"17256"}]},"id":"17259","type":"Toolbar"},{"attributes":{},"id":"17237","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17276"},"group":null,"major_label_policy":{"id":"17277"},"ticker":{"id":"17246"}},"id":"17245","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17256","type":"HoverTool"},{"attributes":{"below":[{"id":"17241"}],"center":[{"id":"17244"},{"id":"17248"}],"height":288,"left":[{"id":"17245"}],"output_backend":"webgl","renderers":[{"id":"17270"}],"title":{"id":"17272"},"toolbar":{"id":"17259"},"toolbar_location":null,"width":432,"x_range":{"id":"17233"},"x_scale":{"id":"17237"},"y_range":{"id":"17235"},"y_scale":{"id":"17239"}},"id":"17232","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17281","type":"UnionRenderers"},{"attributes":{},"id":"17277","type":"AllLabels"},{"attributes":{},"id":"17250","type":"PanTool"},{"attributes":{},"id":"17249","type":"ResetTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17282"},"selection_policy":{"id":"17281"}},"id":"17269","type":"ColumnDataSource"},{"attributes":{},"id":"17255","type":"SaveTool"},{"attributes":{},"id":"17254","type":"UndoTool"},{"attributes":{},"id":"17242","type":"BasicTicker"},{"attributes":{},"id":"17239","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"17279"},"group":null,"major_label_policy":{"id":"17280"},"ticker":{"id":"17242"}},"id":"17241","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17257"}},"id":"17251","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17257","type":"BoxAnnotation"},{"attributes":{},"id":"17276","type":"BasicTickFormatter"},{"attributes":{},"id":"17246","type":"BasicTicker"},{"attributes":{"children":[{"id":"17288"},{"id":"17286"}]},"id":"17289","type":"Column"},{"attributes":{"source":{"id":"17269"}},"id":"17271","type":"CDSView"},{"attributes":{"axis":{"id":"17241"},"coordinates":null,"group":null,"ticker":null},"id":"17244","type":"Grid"}],"root_ids":["17289"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"ba07d739-fd1f-41cb-b747-1b5c6a7d7e78","root_ids":["17289"],"roots":{"17289":"9f51bef7-4e70-4f5f-866e-6a153b7aa155"}}];
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
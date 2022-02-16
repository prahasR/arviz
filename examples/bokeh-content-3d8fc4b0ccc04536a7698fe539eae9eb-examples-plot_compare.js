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
    
      
      
    
      const element = document.getElementById("92a106d4-156a-4611-8530-a1be70ee959f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '92a106d4-156a-4611-8530-a1be70ee959f' but no matching script tag was found.")
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
                    
                  const docs_json = '{"016a7ca0-72ce-4268-97f4-905556cd6da1":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18092","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"GFZ2xwOwPsBFCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18108"},"selection_policy":{"id":"18107"}},"id":"18077","type":"ColumnDataSource"},{"attributes":{},"id":"18049","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18079","type":"Circle"},{"attributes":{"callback":null},"id":"18051","type":"HoverTool"},{"attributes":{},"id":"18102","type":"AllLabels"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18072","type":"MultiLine"},{"attributes":{"axis":{"id":"18040"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18043","type":"Grid"},{"attributes":{},"id":"18108","type":"Selection"},{"attributes":{},"id":"18107","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"18071"},"glyph":{"id":"18072"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18074"},"nonselection_glyph":{"id":"18073"},"view":{"id":"18076"}},"id":"18075","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18052","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"18036"}],"center":[{"id":"18039"},{"id":"18043"}],"height":500,"left":[{"id":"18040"}],"output_backend":"webgl","renderers":[{"id":"18069"},{"id":"18075"},{"id":"18081"},{"id":"18087"},{"id":"18093"},{"id":"18095"}],"title":{"id":"18096"},"toolbar":{"id":"18054"},"toolbar_location":null,"width":500,"x_range":{"id":"18028"},"x_scale":{"id":"18032"},"y_range":{"id":"18030"},"y_scale":{"id":"18034"}},"id":"18027","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"xs":[[-32.05285582175997,-29.32225950872766],[-32.23767500713157,-29.383411127464235]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18110"},"selection_policy":{"id":"18109"}},"id":"18083","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-30.89650239461682,-30.724583739978986]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18106"},"selection_policy":{"id":"18105"}},"id":"18071","type":"ColumnDataSource"},{"attributes":{},"id":"18103","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18068","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18065"},"glyph":{"id":"18066"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18068"},"nonselection_glyph":{"id":"18067"},"view":{"id":"18070"}},"id":"18069","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243816},"id":"18095","type":"Span"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18086","type":"MultiLine"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18066","type":"Scatter"},{"attributes":{},"id":"18098","type":"BasicTickFormatter"},{"attributes":{},"id":"18099","type":"AllLabels"},{"attributes":{},"id":"18028","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"18089"},"glyph":{"id":"18090"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18092"},"nonselection_glyph":{"id":"18091"},"view":{"id":"18094"}},"id":"18093","type":"GlyphRenderer"},{"attributes":{},"id":"18045","type":"PanTool"},{"attributes":{"children":[[{"id":"18027"},0,0]]},"id":"18116","type":"GridBox"},{"attributes":{"children":[{"id":"18118"},{"id":"18116"}]},"id":"18119","type":"Column"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18074","type":"MultiLine"},{"attributes":{},"id":"18111","type":"UnionRenderers"},{"attributes":{},"id":"18032","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18083"},"glyph":{"id":"18084"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18086"},"nonselection_glyph":{"id":"18085"},"view":{"id":"18088"}},"id":"18087","type":"GlyphRenderer"},{"attributes":{},"id":"18112","type":"Selection"},{"attributes":{"source":{"id":"18083"}},"id":"18088","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18067","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18112"},"selection_policy":{"id":"18111"}},"id":"18089","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"formatter":{"id":"18098"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18099"},"ticker":{"id":"18063"}},"id":"18040","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"18117"},"toolbar_location":"above"},"id":"18118","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18080","type":"Circle"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18101"},"group":null,"major_label_policy":{"id":"18102"},"ticker":{"id":"18037"}},"id":"18036","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"RQsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18104"},"selection_policy":{"id":"18103"}},"id":"18065","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18077"}},"id":"18082","type":"CDSView"},{"attributes":{"tools":[{"id":"18044"},{"id":"18045"},{"id":"18046"},{"id":"18047"},{"id":"18048"},{"id":"18049"},{"id":"18050"},{"id":"18051"}]},"id":"18054","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18073","type":"MultiLine"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18053","type":"PolyAnnotation"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18084","type":"MultiLine"},{"attributes":{},"id":"18105","type":"UnionRenderers"},{"attributes":{},"id":"18106","type":"Selection"},{"attributes":{"axis":{"id":"18036"},"coordinates":null,"group":null,"ticker":null},"id":"18039","type":"Grid"},{"attributes":{},"id":"18044","type":"ResetTool"},{"attributes":{"source":{"id":"18089"}},"id":"18094","type":"CDSView"},{"attributes":{},"id":"18110","type":"Selection"},{"attributes":{},"id":"18047","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18071"}},"id":"18076","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18085","type":"MultiLine"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18090","type":"Circle"},{"attributes":{},"id":"18034","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18078","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18077"},"glyph":{"id":"18078"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18080"},"nonselection_glyph":{"id":"18079"},"view":{"id":"18082"}},"id":"18081","type":"GlyphRenderer"},{"attributes":{},"id":"18104","type":"Selection"},{"attributes":{"toolbars":[{"id":"18054"}],"tools":[{"id":"18044"},{"id":"18045"},{"id":"18046"},{"id":"18047"},{"id":"18048"},{"id":"18049"},{"id":"18050"},{"id":"18051"}]},"id":"18117","type":"ProxyToolbar"},{"attributes":{"end":0.5,"start":-1.5},"id":"18030","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18091","type":"Circle"},{"attributes":{"overlay":{"id":"18053"}},"id":"18048","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null},"id":"18096","type":"Title"},{"attributes":{},"id":"18109","type":"UnionRenderers"},{"attributes":{},"id":"18050","type":"SaveTool"},{"attributes":{"source":{"id":"18065"}},"id":"18070","type":"CDSView"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18063","type":"FixedTicker"},{"attributes":{},"id":"18101","type":"BasicTickFormatter"},{"attributes":{},"id":"18037","type":"BasicTicker"},{"attributes":{"overlay":{"id":"18052"}},"id":"18046","type":"BoxZoomTool"}],"root_ids":["18119"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"016a7ca0-72ce-4268-97f4-905556cd6da1","root_ids":["18119"],"roots":{"18119":"92a106d4-156a-4611-8530-a1be70ee959f"}}];
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
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
    
      
      
    
      const element = document.getElementById("d74a3b32-75b0-46f8-bbed-0ab7467e8614");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd74a3b32-75b0-46f8-bbed-0ab7467e8614' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9f1030cc-a465-4aa9-9446-e3143930e18d":{"defs":[],"roots":{"references":[{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20444"},"selection_policy":{"id":"20443"}},"id":"20415","type":"ColumnDataSource"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20416","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20448"},"selection_policy":{"id":"20447"}},"id":"20427","type":"ColumnDataSource"},{"attributes":{},"id":"20380","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20430","type":"Circle"},{"attributes":{"below":[{"id":"20382"}],"center":[{"id":"20385"},{"id":"20389"}],"height":360,"left":[{"id":"20386"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20413"},{"id":"20419"},{"id":"20425"},{"id":"20431"}],"title":{"id":"20433"},"toolbar":{"id":"20400"},"toolbar_location":null,"width":720,"x_range":{"id":"20374"},"x_scale":{"id":"20378"},"y_range":{"id":"20376"},"y_scale":{"id":"20380"}},"id":"20373","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20418","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20422","type":"Circle"},{"attributes":{"children":[{"id":"20454"},{"id":"20452"}]},"id":"20455","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"20427"},"glyph":{"id":"20428"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20430"},"nonselection_glyph":{"id":"20429"},"view":{"id":"20432"}},"id":"20431","type":"GlyphRenderer"},{"attributes":{},"id":"20443","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"20400"}],"tools":[{"id":"20390"},{"id":"20391"},{"id":"20392"},{"id":"20393"},{"id":"20394"},{"id":"20395"},{"id":"20396"},{"id":"20397"}]},"id":"20453","type":"ProxyToolbar"},{"attributes":{"source":{"id":"20415"}},"id":"20420","type":"CDSView"},{"attributes":{},"id":"20440","type":"AllLabels"},{"attributes":{},"id":"20395","type":"UndoTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20409"},"glyph":{"id":"20410"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20412"},"nonselection_glyph":{"id":"20411"},"view":{"id":"20414"}},"id":"20413","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20398"}},"id":"20392","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20398","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20428","type":"Circle"},{"attributes":{},"id":"20393","type":"WheelZoomTool"},{"attributes":{},"id":"20378","type":"LinearScale"},{"attributes":{},"id":"20441","type":"UnionRenderers"},{"attributes":{},"id":"20448","type":"Selection"},{"attributes":{},"id":"20390","type":"ResetTool"},{"attributes":{},"id":"20387","type":"BasicTicker"},{"attributes":{"coordinates":null,"formatter":{"id":"20439"},"group":null,"major_label_policy":{"id":"20440"},"ticker":{"id":"20383"}},"id":"20382","type":"LinearAxis"},{"attributes":{},"id":"20436","type":"BasicTickFormatter"},{"attributes":{},"id":"20391","type":"PanTool"},{"attributes":{"toolbar":{"id":"20453"},"toolbar_location":"above"},"id":"20454","type":"ToolbarBox"},{"attributes":{"source":{"id":"20421"}},"id":"20426","type":"CDSView"},{"attributes":{},"id":"20442","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20429","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20415"},"glyph":{"id":"20416"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20418"},"nonselection_glyph":{"id":"20417"},"view":{"id":"20420"}},"id":"20419","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20424","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"20446"},"selection_policy":{"id":"20445"}},"id":"20421","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20409"}},"id":"20414","type":"CDSView"},{"attributes":{},"id":"20396","type":"SaveTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20436"},"group":null,"major_label_policy":{"id":"20437"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20387"}},"id":"20386","type":"LinearAxis"},{"attributes":{},"id":"20439","type":"BasicTickFormatter"},{"attributes":{},"id":"20446","type":"Selection"},{"attributes":{},"id":"20376","type":"DataRange1d"},{"attributes":{"callback":null},"id":"20397","type":"HoverTool"},{"attributes":{},"id":"20445","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"20373"},0,0]]},"id":"20452","type":"GridBox"},{"attributes":{"coordinates":null,"data_source":{"id":"20421"},"glyph":{"id":"20422"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20424"},"nonselection_glyph":{"id":"20423"},"view":{"id":"20426"}},"id":"20425","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20399","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20412","type":"Line"},{"attributes":{},"id":"20447","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20442"},"selection_policy":{"id":"20441"}},"id":"20409","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20417","type":"Line"},{"attributes":{"source":{"id":"20427"}},"id":"20432","type":"CDSView"},{"attributes":{},"id":"20437","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null},"id":"20433","type":"Title"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20410","type":"Line"},{"attributes":{},"id":"20383","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20411","type":"Line"},{"attributes":{"overlay":{"id":"20399"}},"id":"20394","type":"LassoSelectTool"},{"attributes":{},"id":"20374","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20423","type":"Circle"},{"attributes":{},"id":"20444","type":"Selection"},{"attributes":{"tools":[{"id":"20390"},{"id":"20391"},{"id":"20392"},{"id":"20393"},{"id":"20394"},{"id":"20395"},{"id":"20396"},{"id":"20397"}]},"id":"20400","type":"Toolbar"},{"attributes":{"axis":{"id":"20382"},"coordinates":null,"group":null,"ticker":null},"id":"20385","type":"Grid"},{"attributes":{"axis":{"id":"20386"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20389","type":"Grid"}],"root_ids":["20455"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9f1030cc-a465-4aa9-9446-e3143930e18d","root_ids":["20455"],"roots":{"20455":"d74a3b32-75b0-46f8-bbed-0ab7467e8614"}}];
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
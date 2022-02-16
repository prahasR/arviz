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
    
      
      
    
      const element = document.getElementById("07477259-e1ed-44d3-885d-3fe677e81ce5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '07477259-e1ed-44d3-885d-3fe677e81ce5' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0a879361-2712-4793-aad0-ca4baecbd184":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"23776"},"glyph":{"id":"23777"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23779"},"nonselection_glyph":{"id":"23778"},"view":{"id":"23781"}},"id":"23780","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23766","type":"Patch"},{"attributes":{},"id":"23788","type":"BasicTickFormatter"},{"attributes":{},"id":"23790","type":"UnionRenderers"},{"attributes":{},"id":"23735","type":"LinearScale"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23767","type":"Patch"},{"attributes":{"source":{"id":"23764"}},"id":"23769","type":"CDSView"},{"attributes":{},"id":"23751","type":"SaveTool"},{"attributes":{},"id":"23791","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23754","type":"PolyAnnotation"},{"attributes":{"source":{"id":"23776"}},"id":"23781","type":"CDSView"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23777","type":"Patch"},{"attributes":{},"id":"23746","type":"PanTool"},{"attributes":{"toolbars":[{"id":"23755"}],"tools":[{"id":"23745"},{"id":"23746"},{"id":"23747"},{"id":"23748"},{"id":"23749"},{"id":"23750"},{"id":"23751"},{"id":"23752"}]},"id":"23800","type":"ProxyToolbar"},{"attributes":{},"id":"23745","type":"ResetTool"},{"attributes":{"axis":{"id":"23737"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23740","type":"Grid"},{"attributes":{"callback":null},"id":"23752","type":"HoverTool"},{"attributes":{"coordinates":null,"formatter":{"id":"23788"},"group":null,"major_label_policy":{"id":"23789"},"ticker":{"id":"23738"}},"id":"23737","type":"LinearAxis"},{"attributes":{"tools":[{"id":"23745"},{"id":"23746"},{"id":"23747"},{"id":"23748"},{"id":"23749"},{"id":"23750"},{"id":"23751"},{"id":"23752"}]},"id":"23755","type":"Toolbar"},{"attributes":{},"id":"23792","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"23728"},0,0]]},"id":"23799","type":"GridBox"},{"attributes":{"toolbar":{"id":"23800"},"toolbar_location":"above"},"id":"23801","type":"ToolbarBox"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]}},"selected":{"id":"23791"},"selection_policy":{"id":"23790"}},"id":"23764","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23772","type":"Patch"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23765","type":"Patch"},{"attributes":{},"id":"23729","type":"DataRange1d"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23773","type":"Patch"},{"attributes":{},"id":"23794","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23779","type":"Patch"},{"attributes":{},"id":"23731","type":"DataRange1d"},{"attributes":{"below":[{"id":"23737"}],"center":[{"id":"23740"},{"id":"23744"}],"height":500,"left":[{"id":"23741"}],"output_backend":"webgl","renderers":[{"id":"23768"},{"id":"23774"},{"id":"23780"}],"title":{"id":"23782"},"toolbar":{"id":"23755"},"toolbar_location":null,"width":500,"x_range":{"id":"23729"},"x_scale":{"id":"23733"},"y_range":{"id":"23731"},"y_scale":{"id":"23735"}},"id":"23728","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"23770"}},"id":"23775","type":"CDSView"},{"attributes":{},"id":"23789","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"23770"},"glyph":{"id":"23771"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23773"},"nonselection_glyph":{"id":"23772"},"view":{"id":"23775"}},"id":"23774","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23753","type":"BoxAnnotation"},{"attributes":{},"id":"23748","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]}},"selected":{"id":"23793"},"selection_policy":{"id":"23792"}},"id":"23770","type":"ColumnDataSource"},{"attributes":{},"id":"23793","type":"Selection"},{"attributes":{},"id":"23785","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"23785"},"group":null,"major_label_policy":{"id":"23786"},"ticker":{"id":"23742"}},"id":"23741","type":"LinearAxis"},{"attributes":{"overlay":{"id":"23753"}},"id":"23747","type":"BoxZoomTool"},{"attributes":{},"id":"23733","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"Y8zcX2KR8D/JmZnvuYDwP8hKEQi5nvA/YiRcgRGy8D8fkXLy8dvwP5rilXXAKvE/L7lpZdKH8T9O2NE2Y+TxP0SfAmb38PE/ll+lbKls8j+oniotL/DyPziMR+y0FvM/YB4qmIqh8z8kQL2hBkn0P1Rdxi83iPQ/EPQyV1h79T9ZFi/4qov1P8jHE0wRgfY//KeoDKqt9j/Y8VNXN5D3P+dbHsL73/c/oNUF5fDg+D/UD5R3TRL5P8DDCS2fRPo/hSVLl3BT+j+od3/i8Hb7P4iq0l0F9Ps/lCv1l0Kp/D+puxWXtdL9P3/fak2U2/0/bJPgAuYN/z/MNKAgnen/P6wjK9wbIABAov3ltkS5AECY16CRbVIBQPcxgJ1vvwFAjrFbbJbrAUCEixZHv4QCQHhl0SHoHQNAbj+M/BC3A0BkGUfXOVAEQFrzAbJi6QRAUM28jIuCBUDKOIv9ewIGQEand2e0GwZAPIEyQt20BkCgSSmO4PYGQDJb7RwGTgdAkG75xkxnB0D8Rdsy87EHQCg1qPcu5wdAo84EyjX5B0AHHlf9BCoIQA9p8vzqQwhAiqlFA1BNCEBIBVtpfUoIQHAjZx2TOAhAYPY+rg8XCEAoNaj3LucHQKtursmv5QdAprOKq1KpB0D8Il4RTWAHQDJb7RwGTgdAUaWg9QAFB0A8gTJC3bQGQHPDIcEDngZA/hw3Oo4tBkBGp3dntBsGQAALLZN8tgVAUM28jIuCBUBS4DfPRzMFQFrzAbJi6QRAil07swSbBEBkGUfXOVAEQAdEja+i5QNAbj+M/BC3A0CZoCQv1yEDQHhl0SHoHQNAhIsWR7+EAkCpW4rsjVMCQI6xW2yW6wFADNm/1xRoAUCY16CRbVIBQKL95bZEuQBAjjcZRZwyAECsIyvcGyAAQGyT4ALmDf8/gN9qTZTb/T+UK/WXQqn8P6h3f+Lwdvs/wMMJLZ9E+j/UD5R3TRL5P+lbHsL73/c/Vh19MWGX9z/8p6gMqq32PxD0MldYe/U/JEC9oQZJ9D8snpau+hb0PziMR+y0FvM/UsZv1r+N8j9O2NE2Y+TxPynI88DRq/E/jWkbyvgz8T+ODyaCCNnwP2IkXIERsvA/Y8zcX2KR8D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"QoOZgHox+T9yNTGLHUz6P6TnyJXAZvs/JDwI5uK/+z/UmWCgY4H8PwRM+KoGnP0/Nf6Ptam2/j/WIcm6TbL/P2SwJ8BM0f8/SrFf5fd1AEBiiqtqSQMBQP1kVk+6JAFAemP375qQAUDuAbPh/fcBQJI8Q3XsHQJAvsxhYn6hAkCqFY/6PasCQMLu2n+POANA+l8hMldPA0DaxyYF4cUDQD72pkLg6ANA86ByijJTBEBPNEu4UmYEQJr6ZFiE2wRACnq+D4TgBEBM1DA68UgFQCJTCpXVbQVAbInx7wumBUA6LFYaJ/sFQLLLENW9/QVAOEACNgBTBkBSBaKfeIgGQCw/hDmPnAZA1JMG1czXBkCgQ1q23wAHQGze7STKFQdAyJsZOzsfB0C1prAQWDsHQIDBzAB5UAdAPrwuKdJdB0CA5ari9mAHQOYZuAIVWAdASNvHvOA+B0Bs3u0kyhUHQHR972W8CwdAusNETjS7BkBSBaKfeIgGQGwEu0GdJQZAOixWGif7BUAiUwqV1W0FQLH9H08+BAVACnq+D4TgBEDyoHKKMlMEQNrHJgXhxQNAwu7af484A0CqFY/6PasCQJI8Q3XsHQJAemP375qQAUD0LJfAbwcBQGKKq2pJAwFASrFf5fd1AEBksCfATNH/P4TYx1eelf8/NP6Ptam2/j/OExrNx9r9PwRM+KoGnP0/05lgoGOB/D/Uqtc9zVj8P6TnyJXAZvs/xn0ycKD2+j9yNTGLHUz6P8q/d2ktufk/QoOZgHox+T+mEll7PbL4PxLRAXbXFvg/st3sFarQ9z/iHmprNPz2P7nTt4qk9vY/rettR1Ij9j+ybNJgkeH1PwzV7LzZXfU/gro6Vu7G9D8we0qlmq70P1JTn8o9GvQ/UgijS0us8z8O6F3Qb53zP3xZLQTHLPM/wg4rUPzP8j8iVgtBqJHyP+hMCvHkXvI/OGtgLIsz8j8m4kSxczfyP+hZuxpeffI/IlYLQaiR8j82W1+me9DyPz0RrUIcI/M/vzAB4smT8z9SCKNLS6zzP2fPmLKoTPQ/gro6Vu7G9D8kY+s035D1P7Js0mCR4fU/4h5qazT89j8S0QF21xb4P54RrxMjpPg/QoOZgHox+T8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"23795"},"selection_policy":{"id":"23794"}},"id":"23776","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null},"id":"23782","type":"Title"},{"attributes":{"overlay":{"id":"23754"}},"id":"23749","type":"LassoSelectTool"},{"attributes":{},"id":"23786","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"23764"},"glyph":{"id":"23765"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23767"},"nonselection_glyph":{"id":"23766"},"view":{"id":"23769"}},"id":"23768","type":"GlyphRenderer"},{"attributes":{},"id":"23750","type":"UndoTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23778","type":"Patch"},{"attributes":{},"id":"23795","type":"Selection"},{"attributes":{"children":[{"id":"23801"},{"id":"23799"}]},"id":"23802","type":"Column"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23771","type":"Patch"},{"attributes":{},"id":"23738","type":"BasicTicker"},{"attributes":{"axis":{"id":"23741"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23744","type":"Grid"},{"attributes":{},"id":"23742","type":"BasicTicker"}],"root_ids":["23802"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0a879361-2712-4793-aad0-ca4baecbd184","root_ids":["23802"],"roots":{"23802":"07477259-e1ed-44d3-885d-3fe677e81ce5"}}];
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
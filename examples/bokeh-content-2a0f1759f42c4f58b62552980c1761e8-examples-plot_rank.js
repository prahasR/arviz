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
    
      
      
    
      const element = document.getElementById("48f40dbc-8512-495c-b8a7-5aaf8b09299c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '48f40dbc-8512-495c-b8a7-5aaf8b09299c' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9bbc5931-e426-4aae-b314-1a00dfd478c1":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48066","type":"UnionRenderers"},{"attributes":{},"id":"48067","type":"Selection"},{"attributes":{},"id":"47950","type":"LinearScale"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47934","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48064"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48065"},"ticker":{"id":"47953"}},"id":"47952","type":"LinearAxis"},{"attributes":{},"id":"48053","type":"UnionRenderers"},{"attributes":{},"id":"48054","type":"Selection"},{"attributes":{"axis":{"id":"47952"},"coordinates":null,"group":null,"ticker":null},"id":"47955","type":"Grid"},{"attributes":{},"id":"48068","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48061"},"group":null,"major_label_policy":{"id":"48062"},"ticker":{"id":"48039"}},"id":"47956","type":"LinearAxis"},{"attributes":{},"id":"48069","type":"Selection"},{"attributes":{},"id":"48044","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47980","type":"VBar"},{"attributes":{"tools":[{"id":"47926"},{"id":"47927"},{"id":"47928"},{"id":"47929"},{"id":"47930"},{"id":"47931"},{"id":"47932"},{"id":"47933"}]},"id":"47936","type":"Toolbar"},{"attributes":{},"id":"48045","type":"AllLabels"},{"attributes":{},"id":"47953","type":"BasicTicker"},{"attributes":{"callback":null},"id":"47967","type":"HoverTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47935","type":"PolyAnnotation"},{"attributes":{},"id":"48047","type":"BasicTickFormatter"},{"attributes":{},"id":"47960","type":"ResetTool"},{"attributes":{},"id":"47966","type":"SaveTool"},{"attributes":{},"id":"48048","type":"AllLabels"},{"attributes":{},"id":"47963","type":"WheelZoomTool"},{"attributes":{},"id":"48055","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"47969"}},"id":"47964","type":"LassoSelectTool"},{"attributes":{},"id":"47965","type":"UndoTool"},{"attributes":{},"id":"48056","type":"Selection"},{"attributes":{"axis":{"id":"47956"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47959","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48041","type":"Title"},{"attributes":{},"id":"48070","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48050"},"selection_policy":{"id":"48049"}},"id":"47979","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"47968"}},"id":"47962","type":"BoxZoomTool"},{"attributes":{},"id":"48071","type":"Selection"},{"attributes":{},"id":"47961","type":"PanTool"},{"attributes":{},"id":"48061","type":"BasicTickFormatter"},{"attributes":{},"id":"48062","type":"AllLabels"},{"attributes":{},"id":"48049","type":"UnionRenderers"},{"attributes":{},"id":"48064","type":"BasicTickFormatter"},{"attributes":{},"id":"48050","type":"Selection"},{"attributes":{},"id":"48065","type":"AllLabels"},{"attributes":{},"id":"48072","type":"UnionRenderers"},{"attributes":{},"id":"48073","type":"Selection"},{"attributes":{},"id":"48051","type":"UnionRenderers"},{"attributes":{},"id":"48052","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"47992","type":"Span"},{"attributes":{"axis":{"id":"47918"},"coordinates":null,"group":null,"ticker":null},"id":"47921","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47987","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47982","type":"VBar"},{"attributes":{"source":{"id":"47979"}},"id":"47984","type":"CDSView"},{"attributes":{},"id":"47926","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"47979"},"glyph":{"id":"47980"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47982"},"nonselection_glyph":{"id":"47981"},"view":{"id":"47984"}},"id":"47983","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47981","type":"VBar"},{"attributes":{},"id":"47931","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47989","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"47985","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"47999","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48052"},"selection_policy":{"id":"48051"}},"id":"47986","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"47986"},"glyph":{"id":"47987"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47989"},"nonselection_glyph":{"id":"47988"},"view":{"id":"47991"}},"id":"47990","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47994","type":"VBar"},{"attributes":{"source":{"id":"47986"}},"id":"47991","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47988","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47996","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48006","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48054"},"selection_policy":{"id":"48053"}},"id":"47993","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"47933","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"47993"},"glyph":{"id":"47994"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"47996"},"nonselection_glyph":{"id":"47995"},"view":{"id":"47998"}},"id":"47997","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48001","type":"VBar"},{"attributes":{"source":{"id":"47993"}},"id":"47998","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"47995","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48003","type":"VBar"},{"attributes":{},"id":"47919","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48056"},"selection_policy":{"id":"48055"}},"id":"48000","type":"ColumnDataSource"},{"attributes":{},"id":"47927","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48000"},"glyph":{"id":"48001"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48003"},"nonselection_glyph":{"id":"48002"},"view":{"id":"48005"}},"id":"48004","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"47934"}},"id":"47928","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48019","type":"VBar"},{"attributes":{"source":{"id":"48000"}},"id":"48005","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48002","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"48007","type":"FixedTicker"},{"attributes":{"ticks":[0,1,2,3]},"id":"48039","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48067"},"selection_policy":{"id":"48066"}},"id":"48011","type":"ColumnDataSource"},{"attributes":{},"id":"47910","type":"DataRange1d"},{"attributes":{"source":{"id":"48011"}},"id":"48016","type":"CDSView"},{"attributes":{"children":[[{"id":"47909"},0,0],[{"id":"47945"},0,1]]},"id":"48077","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48014","type":"VBar"},{"attributes":{},"id":"47912","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48012","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48024","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48011"},"glyph":{"id":"48012"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48014"},"nonselection_glyph":{"id":"48013"},"view":{"id":"48016"}},"id":"48015","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48009","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48013","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48021","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48017","type":"Span"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48031","type":"Span"},{"attributes":{"axis":{"id":"47922"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47925","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48069"},"selection_policy":{"id":"48068"}},"id":"48018","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"48079"},{"id":"48077"}]},"id":"48080","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"48018"},"glyph":{"id":"48019"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48021"},"nonselection_glyph":{"id":"48020"},"view":{"id":"48023"}},"id":"48022","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48026","type":"VBar"},{"attributes":{"source":{"id":"48018"}},"id":"48023","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48020","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48047"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48048"},"ticker":{"id":"47919"}},"id":"47918","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48028","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48038","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48071"},"selection_policy":{"id":"48070"}},"id":"48025","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48025"},"glyph":{"id":"48026"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48028"},"nonselection_glyph":{"id":"48027"},"view":{"id":"48030"}},"id":"48029","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48033","type":"VBar"},{"attributes":{"source":{"id":"48025"}},"id":"48030","type":"CDSView"},{"attributes":{"below":[{"id":"47918"}],"center":[{"id":"47921"},{"id":"47925"},{"id":"47985"},{"id":"47992"},{"id":"47999"},{"id":"48006"}],"height":331,"left":[{"id":"47922"}],"output_backend":"webgl","renderers":[{"id":"47983"},{"id":"47990"},{"id":"47997"},{"id":"48004"}],"title":{"id":"48009"},"toolbar":{"id":"47936"},"toolbar_location":null,"width":496,"x_range":{"id":"47910"},"x_scale":{"id":"47914"},"y_range":{"id":"47912"},"y_scale":{"id":"47916"}},"id":"47909","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48027","type":"VBar"},{"attributes":{"below":[{"id":"47952"}],"center":[{"id":"47955"},{"id":"47959"},{"id":"48017"},{"id":"48024"},{"id":"48031"},{"id":"48038"}],"height":331,"left":[{"id":"47956"}],"output_backend":"webgl","renderers":[{"id":"48015"},{"id":"48022"},{"id":"48029"},{"id":"48036"}],"title":{"id":"48041"},"toolbar":{"id":"47970"},"toolbar_location":null,"width":496,"x_range":{"id":"47910"},"x_scale":{"id":"47948"},"y_range":{"id":"47912"},"y_scale":{"id":"47950"}},"id":"47945","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"47932","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48035","type":"VBar"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48044"},"group":null,"major_label_policy":{"id":"48045"},"ticker":{"id":"48007"}},"id":"47922","type":"LinearAxis"},{"attributes":{"overlay":{"id":"47935"}},"id":"47930","type":"LassoSelectTool"},{"attributes":{},"id":"47948","type":"LinearScale"},{"attributes":{},"id":"47929","type":"WheelZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48073"},"selection_policy":{"id":"48072"}},"id":"48032","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48032"},"glyph":{"id":"48033"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48035"},"nonselection_glyph":{"id":"48034"},"view":{"id":"48037"}},"id":"48036","type":"GlyphRenderer"},{"attributes":{},"id":"47914","type":"LinearScale"},{"attributes":{"source":{"id":"48032"}},"id":"48037","type":"CDSView"},{"attributes":{},"id":"47916","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48034","type":"VBar"},{"attributes":{"toolbars":[{"id":"47936"},{"id":"47970"}],"tools":[{"id":"47926"},{"id":"47927"},{"id":"47928"},{"id":"47929"},{"id":"47930"},{"id":"47931"},{"id":"47932"},{"id":"47933"},{"id":"47960"},{"id":"47961"},{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"}]},"id":"48078","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48078"},"toolbar_location":"above"},"id":"48079","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"47960"},{"id":"47961"},{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"}]},"id":"47970","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47969","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47968","type":"BoxAnnotation"}],"root_ids":["48080"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9bbc5931-e426-4aae-b314-1a00dfd478c1","root_ids":["48080"],"roots":{"48080":"48f40dbc-8512-495c-b8a7-5aaf8b09299c"}}];
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
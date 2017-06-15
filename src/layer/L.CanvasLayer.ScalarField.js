/**
 * ScalarField on canvas (a 'Raster')
 */
L.CanvasLayer.ScalarField = L.CanvasLayer.Field.extend({

    options: {
        color: null, // function colorFor(value) [e.g. chromajs.scale],
        interpolate: false // TODO - Interpolation doesn't work yet (check some 'artifacts')
    },

    initialize: function (scalarField, options) {
        L.CanvasLayer.Field.prototype.initialize.call(this, scalarField, options);
        L.Util.setOptions(this, options);
        this.image = null
    },

    _defaultColorScale: function () {
        return chroma.scale(['white', 'black']).domain(this._field.range);
    },

    setColor(f) {
        this.options.color = f;
        this.needRedraw();
    },

    onDrawLayer: function (viewInfo) {
        if (!this.isVisible()) return;
        //console.time('onDrawLayer');
        this._ensureColor();
        this._updateOpacity();
        this._drawImage();
        //console.timeEnd('onDrawLayer');
    },

    _ensureColor: function () {
        if (this.options.color === null) {
            this.setColor(this._defaultColorScale());
        }
    },

    _showCanvas() {
        L.CanvasLayer.Field.prototype._showCanvas.call(this);
        this.needRedraw(); // TODO check spurious redraw (e.g. hide/show without moving map)
    },

    setData: function (field) {
        L.CanvasLayer.Field.prototype.setData.call(this, field);
        let ctx = this._canvas.getContext('2d');
        // Prepare an image containing the data grid as colors
        let width = this._field.nCols;
        let height = this._field.nRows;
        let img = ctx.createImageData(width, height);
        this._prepareImageIn(img.data, width, height);
        // To draw the image we need to convert it to a bitmap
        createImageBitmap(img)
        .then(function(response) {
            this.image = response;
        }.bind(this));
    },

    /**
     * Draws the field in an ImageData and applying it with putImageData.
     * Used as a reference: http://geoexamples.com/d3-raster-tools-docs/code_samples/raster-pixels-page.html
     */
    _drawImage: function () {
        // while the image is not ready
        if (!this.image) return;

        let ctx = this._getDrawingContext();
        // Draw the image at the right place
        let topleft = this._field._lonLatAtIndexes(0,0);
        let topright = this._field._lonLatAtIndexes(this._field.nCols-1,0);
        let bottomleft = this._field._lonLatAtIndexes(0,this._field.nRows-1);
        // Lat has to be first for leaflet
        topleft.reverse();
        topright.reverse();
        bottomleft.reverse();
        // Find pixel coordinates in canvas where the image has to be put
        topleft = this._map.latLngToContainerPoint(topleft);
        topright = this._map.latLngToContainerPoint(topright);
        bottomleft = this._map.latLngToContainerPoint(bottomleft);
        // And let the browser scale it for us and perform interpolation
        let screenWidth = topright.x - topleft.x;
        let screenHeight = bottomleft.y - topleft.y;
        let width = this._field.nCols;
        let height = this._field.nRows;
        let center = {
            x: topleft.x + 0.5 * screenWidth,
            y: topleft.y + 0.5 * screenHeight
        }
        let scale = {
            x: screenWidth/width,
            y: screenHeight/height
        }
        ctx.save();
        ctx.translate(topleft.x + 0.5 * screenWidth, topleft.y + 0.5 * screenHeight);
        ctx.scale(scale.x, scale.y);
        ctx.drawImage(this.image, -0.5 * width, -0.5 * height);
        ctx.restore();
    },

    /**
     * Prepares the image in data, as array with RGBAs
     * [R1, G1, B1, A1, R2, G2, B2, A2...]
     * @private
     * @param {[[Type]]} data   [[Description]]
     * @param {Numver} width
     * @param {Number} height
     */
    _prepareImageIn(data, width, height) {
        let pos = 0;
        for (let j = 0; j < height; j++) {
            for (let i = 0; i < width; i++) {
                let v = this._field._valueAtIndexes(i,j);
                if (v !== null) {
                    let color = this._getColorFor(v);
                    let [R, G, B, A] = color.rgba();
                    data[pos] = R;
                    data[pos + 1] = G;
                    data[pos + 2] = B;
                    data[pos + 3] = parseInt(A * 255); // not percent in alpha but hex 0-255
                }
                pos = pos + 4;
            }
        }
    },

    /**
     * Gets a chroma color for a pixel value, according to 'options.color'
     */
    _getColorFor(v) {
        let c = this.options.color; // e.g. for a constant 'red'
        if (typeof c === 'function') {
            c = this.options.color(v);
        }
        let color = chroma(c); // to be more flexible, a chroma color object is always created || TODO improve efficiency
        return color;
    }
});

L.canvasLayer.scalarField = function (scalarField, options) {
    return new L.CanvasLayer.ScalarField(scalarField, options);
};

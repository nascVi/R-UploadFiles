html2Canvas(${'.content'}[0]).then =(canvas => {
    ctx = canvas.getContext('2d')
    let imageData = ctx.getImageData(0,0,canvasWidth, canvasHeight)
    //pixel rate?
    let pixelArr = imageData.data
});


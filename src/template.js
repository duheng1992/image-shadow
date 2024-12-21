const getWidthOffset = (width) => {
  return width < 1000 ? 30 : (width < 2000 ? 50 : 100);
}

const getHeightOffset = (height) => {
  return height < 1000 ? 30 : (height < 2000 ? 50 : 100);
}

const getXShadowOffset = (width) => {
  return width < 1000 ? 15 : (width < 2000 ? 30 : 50);
}

const getYShadowOffset = (height) => {
  return height < 1000 ? 15 : (height < 2000 ? 30 : 50);
}

const getShadowBlur = (width, height) => {
  const length = Math.max(width, height);
  return length < 1000 ? 15 : (length < 2000 ? 30 : 50);
}

const getOffset = length => {
  return length < 1000 ? 15 : (length < 2000 ? 30 : 50);
}

export const shadowPattern = [
  {
    id: 'rectTranslate',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + getWidthOffset(img.width);
      canvas.height = img.height + getHeightOffset(img.height);
      // Shadow
      ctx.shadowColor = "#ccc";
      ctx.shadowOffsetX = getXShadowOffset(img.width);
      ctx.shadowOffsetY = getYShadowOffset(img.height);

      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, 0, 0);
    },
    style: { transform: 'translate(10px, 10px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'rectTranslateBlur',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + getWidthOffset(img.width);
      canvas.height = img.height + getHeightOffset(img.height);
  
      // Shadow
      ctx.shadowColor = "#ccc";
      ctx.shadowBlur = getShadowBlur(img.width, img.height);
      ctx.shadowOffsetX = getXShadowOffset(img.width);
      ctx.shadowOffsetY = getYShadowOffset(img.height);

      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, 0, 0);
    },
    style: { transform: 'translate(10px, 10px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'allBorderBlur1',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + getWidthOffset(img.width);
      canvas.height = img.height + getHeightOffset(img.height);
  
      // Shadow
      ctx.shadowBlur = getShadowBlur(img.width, img.height);
      ctx.shadowColor = "#aaa";

      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, getOffset(img.width), getOffset(img.height));
    },
    style: { transform: 'translate(-1px, -4px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'allBorderBlur2',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + getWidthOffset(img.width);
      canvas.height = img.height + getHeightOffset(img.height);
  
      // Shadow
      ctx.shadowBlur = getShadowBlur(img.width, img.height);
      ctx.shadowColor = "#ccc";

      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, getOffset(img.width), getOffset(img.height))
    },
    style: { transform: 'translate(-1px, -4px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'allBorderBlur3',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + getWidthOffset(img.width);
      canvas.height = img.height + getHeightOffset(img.height);
  
      // Shadow
      ctx.shadowBlur = getShadowBlur(img.width, img.height);
      ctx.shadowColor = "#000";

      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, getOffset(img.width), getOffset(img.height))
    },
    style: { transform: 'translate(-6px, -4px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'borderRadius1',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + 30;
      canvas.height = img.height + 30;

      // 应用圆角
      ctx.beginPath();
      ctx.strokeStyle = "#000";
      ctx.lineWidth = Math.max(img.width, img.height) > 1500 ? 10 : 5;

      ctx.roundRect(20, 20, img.width, img.height, 10);
      ctx.stroke();
      ctx.clip();
      
      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, 20, 20);
    },
    style: { transform: 'translate(-6px, -4px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
  {
    id: 'borderRadius2',
    load: (canvas, ctx, img) => {
      canvas.width = img.width + 30;
      canvas.height = img.height + 30;

      // 应用圆角
      ctx.beginPath();
      ctx.strokeStyle = "#aaa";
      ctx.lineWidth = Math.max(img.width, img.height) > 1500 ? 10 : 5;

      ctx.roundRect(20, 20, img.width, img.height, 10);
      ctx.stroke();
      ctx.clip();
      
      // 图片加载完成后，绘制到canvas上
      ctx.drawImage(img, 20, 20);
    },
    style: { transform: 'translate(-6px, -4px)' },
    radioStyle: {
      transform: 'translate(8px, 8px)'
    }
  },
];
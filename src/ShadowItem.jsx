import React from 'react';
import { useEffect } from 'react';

import { baseImage } from './const';

export default function ShadowItem(props) {
  const { id, load, src = baseImage, style, preview } = props;

  const loadImage = () => {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    const img = new Image();

    img.onload = function () {
      load(canvas, ctx, img);
    };

    img.src = src;
  }

  useEffect(() => {
    if (preview) {
      loadImage();
    }
  }, [preview, id, src]);

  useEffect(() => {
    loadImage();
  }, [src]);

  return (
    <canvas style={style} id={id} />
  )
}

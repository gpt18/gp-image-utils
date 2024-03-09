"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  compressImage: () => compressImage
});
module.exports = __toCommonJS(src_exports);

// src/functions.ts
async function compressImage(file, maxSizeKB, options) {
  const IMAGE_QUALITY_FACTOR = 0.7;
  const SIZE_REDUCTION_PERCENTAGE = 0.2;
  const crop = options?.crop || false;
  if (isNaN(maxSizeKB) || maxSizeKB <= 0) {
    console.error("Invalid size specified.");
    return file;
  }
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = async () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (crop && image.width != image.height) {
        const cropWidth = Math.min(image.width, image.height);
        const cropX = (image.width - cropWidth) / 2;
        const cropY = (image.height - cropWidth) / 2;
        canvas.width = canvas.height = cropWidth;
        context.drawImage(image, cropX, cropY, cropWidth, cropWidth, 0, 0, cropWidth, cropWidth);
        file = await new Promise((resolve2, reject2) => {
          canvas.toBlob((blob) => {
            if (blob) {
              const croppedFile = new File([blob], file.name, { type: "image/jpeg" });
              resolve2(croppedFile);
            } else {
              reject2("Failed to create blob from canvas");
            }
          }, "image/jpeg");
        });
        image.src = URL.createObjectURL(file);
        await new Promise((resolve2) => image.onload = resolve2);
      }
      if (file.size > maxSizeKB * 1024) {
        const width = image.width - image.width * SIZE_REDUCTION_PERCENTAGE;
        const height = image.height - image.height * SIZE_REDUCTION_PERCENTAGE;
        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);
        canvas.toBlob(async (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, { type: "image/jpeg" });
            if (compressedFile.size <= maxSizeKB * 1024) {
              resolve(compressedFile);
            } else {
              const furtherCompressedFile = await compressImage(compressedFile, maxSizeKB, { crop: false });
              if (furtherCompressedFile) {
                resolve(furtherCompressedFile);
              } else {
                reject("Unable to compress file to desired size.");
              }
            }
          }
        }, "image/jpeg", IMAGE_QUALITY_FACTOR);
      } else {
        resolve(file);
      }
    };
    image.onerror = () => {
      reject("Failed to load image");
    };
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compressImage
});
/**
 * Compresses an image file to reduce its size while maintaining its quality.
 * 
 * @param file - The image file to be compressed.
 * @param maxSizeKB - The maximum size (in kilobytes) that the compressed image should be.
 * @param options - Additional options for image compression (e.g., cropping).
 * @returns A Promise that resolves to the compressed image file, or null if compression fails.
 * 
 * @constant IMAGE_QUALITY_FACTOR - The quality factor of the image, used in compression. The value is 0.7.
 * @constant SIZE_REDUCTION_PERCENTAGE - The percentage by which the image size is reduced in each compression iteration. The value is 0.2.
 * 
 * @author Guddu Prajapati (gpt18)
 * @license MIT
 * @version 0.0.1
 */

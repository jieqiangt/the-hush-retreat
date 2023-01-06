import fs from "fs";
import path from "path";
import imageSize from "image-size";

export const formatDir = (pathArr) => path.join(process.cwd(), ...pathArr);

export const getFilePathsInDir = (dirPath) => fs.readdirSync(dirPath);

export function getRandomInArr(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export const getGalleryDetails = (folderPath, scaleFactor) => {
  const dirPath = formatDir(folderPath);
  const files = getFilePathsInDir(dirPath)

  const galleryDetails = files.map((item, idx) => {
    const imgPath = path.join(dirPath, item);
    const dimensions = imageSize(imgPath);
    
    return {
      alt: `retreat-image-${idx}`,
      src: `/img/${folderPath[folderPath.length - 1]}/${item}`,
      width: dimensions.width / scaleFactor,
      height: dimensions.height / scaleFactor,
    };
  });

  return galleryDetails;
};

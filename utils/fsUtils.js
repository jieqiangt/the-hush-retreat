import fs from "fs";
import path from "path";

export const formatDir = (pathArr) => path.join(process.cwd(), ...pathArr);

export const getFilePathsInDir = (dirPath) => fs.readdirSync(dirPath);

export function getRandomInArr(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export const getRetreatImgs = (folderPath, numImg) => {
  const dirPath = formatDir(folderPath);
  const files = getRandomInArr(getFilePathsInDir(dirPath), numImg);

  const retreatImgs = files.map((item, idx) => {
    return { alt: `retreat-image-${idx}`, src: item, width: 640, height: 960 };
  });

  return retreatImgs;
};

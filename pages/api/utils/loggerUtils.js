// get the Console class
import { Console } from "console";
import fs from "fs";

export const getCurrentDateTimeStr = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}-${now.getHours()}hr-${now.getMinutes()}min-${now.getSeconds()}s`;
};

export const getCurrentDateStr = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
};

export const createWriterLogger = () => {
  const dateTimeStr = getCurrentDateTimeStr();
  const dateStr = getCurrentDateStr();
  const WriterLogger = new Console({
    stdout: fs.createWriteStream(`logs/stdout/${dateStr}-normalStdout.txt`),
    stderr: fs.createWriteStream(`logs/stderr/${dateStr}-errStdErr.txt`),
  });

  return WriterLogger;
};

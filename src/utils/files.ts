import {} from "expo-file-system";
import ExcelJS from "exceljs";
import { Buffer as NodeBuffer } from "buffer";
import * as FileSystem from "expo-file-system";
import { printToFileAsync } from "expo-print";

export const writeXlsx = async (
  fileName: string,
  sheetName: string,
  cols: Object[],
  rows: Object[]
) => {
  const now = new Date();

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Miguel";
  workbook.created = now;
  workbook.modified = now;

  const worksheet = workbook.addWorksheet(sheetName);

  worksheet.columns = cols;
  worksheet.addRows(rows);

  const permissions =
    await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!permissions.granted) return;

  const buffer = await workbook.xlsx.writeBuffer();
  const nodeBuffer = NodeBuffer.from(buffer);
  const bufferStr = nodeBuffer.toString("base64");

  await FileSystem.StorageAccessFramework.createFileAsync(
    permissions.directoryUri,
    fileName,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  )
    .then(async (uri) => {
      await FileSystem.writeAsStringAsync(uri, bufferStr, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log("Succesfully Saved");
    })
    .catch((e) => {
      console.log(e);
    });
};

export const writePdf = async (fileName: string, html: string) => {
  const permissions =
    await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!permissions.granted) return;

  try {
    const { uri } = await printToFileAsync({ html, base64: true }); // Save locally and get uri

    const content = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await FileSystem.StorageAccessFramework.createFileAsync(
      permissions.directoryUri,
      fileName,
      "application/pdf"
    )
      .then(async (uri) => {
        await FileSystem.writeAsStringAsync(uri, content, {
          encoding: FileSystem.EncodingType.Base64,
        });
        console.log("Succesfully Saved");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (err) {
    console.error(err);
  }
};

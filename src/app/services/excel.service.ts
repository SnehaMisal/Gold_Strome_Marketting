import * as XLSX from "xlsx";
const getFileName = (name?: string) => {
    let timeSpan = new Date().toISOString();
    let sheetName = name || 'Export_Result';
    let fileName = `${sheetName}-${timeSpan}`;
    return {
      sheetName,
      fileName,
    };
  };
  export class TableUtil {
    static exportTableToExcel(tableId: string, name?: string) {
      let { sheetName, fileName } = getFileName(name);
      let targetTableElm = document.getElementById(tableId);
      let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
        
        
        sheet: sheetName,
      });
      console.log("wb",wb);
      XLSX.writeFile(wb, `${fileName}.xlsx`);
    }

  }
declare module 'html2xlsx' {
    function tableToBook(table: HTMLElement): any;
    function writeFile(workbook: any, filename: string, options?: any): void;
  }
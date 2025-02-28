type TableConstructOptions = {
  expand: boolean,
}

const tableConstructDefaultOptions: TableConstructOptions = {
  expand: true,
}

class Table {
  public sheet: GoogleAppsScript.Spreadsheet.Sheet;
  public headers: GoogleAppsScript.Spreadsheet.Range;

  constructor(
    range: GoogleAppsScript.Spreadsheet.Range,
    options: TableConstructOptions = tableConstructDefaultOptions,
  ) {
    this.sheet = range.getSheet()
    this.headers = options.expand ? headerRangeExpand(range) : range
  }
}
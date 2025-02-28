function headerRangeExpand(range: GoogleAppsScript.Spreadsheet.Range): GoogleAppsScript.Spreadsheet.Range
{
  if (range.getValue() === '') {
    throw new Error(`headerRangeExpand was passed an empty source range`)
  }

  const sheet = range.getSheet()
  
  const entireRowRange = (() => {
    const row = range.getRow()
    const numRows = 1
    const col = 1
    const numCols = sheet.getLastColumn()
    return sheet.getRange(row, col, numRows, numCols)
  })();

  const values = entireRowRange.getValues()
  const headerValues = values[0]
  const originalCol = range.getColumn()
  const finalCol = headerValues.length

  let startCol = 0
  let endCol = finalCol

  for (let i = 0; i < headerValues.length; i++) {
    const value = headerValues[i]
    const currentCol = i + 1
    
    if (currentCol <= originalCol) {
      if (value === '') {
        startCol = 0
      } else if (startCol === 0) {
        startCol = currentCol
      }
    } else {
      if (value === '') {
        endCol = i
        break;
      }
    }
  }

  const expandedRange = (() => {
    const row = range.getRow()
    const numRows = 1
    const col = startCol
    const numCols = endCol - startCol + 1
    return sheet.getRange(row, col, numRows, numCols)
  })();

  return expandedRange
}
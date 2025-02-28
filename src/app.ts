function onOpen(): void {
  SpreadsheetApp.getUi().createMenu('Hello')
    .addItem('Hello', 'hello')
    .addToUi()
}

function hello(): void {
  const activeRange = SpreadsheetApp.getActiveRange()
  const table = new Table(activeRange)
  Browser.msgBox(JSON.stringify({
    headers: table.headers.getA1Notation()
  }))
}
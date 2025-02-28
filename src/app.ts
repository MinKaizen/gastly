function onOpen(): void {
  SpreadsheetApp.getUi().createMenu('Hello')
    .addItem('Hello', 'hello')
    .addToUi()
}

function hello(): void {
  Browser.msgBox('Hello world!')
}
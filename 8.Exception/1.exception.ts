function readFile(fileName: string): string {
  if (fileName === 'invalid fileName 💩') {
    throw new Error(`not found fileName ${fileName}`);
  }

  closeFile(fileName);

  return `${fileName}:Content🧧`;
}

function closeFile(fileName: string): void {
  console.log('파일 닫음');
}

const file = 'invalid fileName 💩';

function run() {
  try {
    console.log(readFile(file));
  } catch (error) {
    console.log('catched!!');
    return;
  } finally {
    closeFile(file);
  }
}

run();

type Position = {
  x: number;
  y: number;
};

type Command = 'up' | 'down' | 'left' | 'right';

const position: Position = {
  x: 0,
  y: 0,
};

function move(command: Command): void {
  switch (command) {
    case 'up':
      position.y++;
      break;
    case 'down':
      position.y--;
      break;
    case 'left':
      position.x--;
      break;
    case 'right':
      position.x++;
      break;
    default:
      throw new Error(`unknown command ${command}`);
  }
}

console.log(position);
move('up');
console.log(position);
move('down');
console.log(position);
move('left');
console.log(position);
move('right');
console.log(position);

import {nickname, arr, user, onAdd} from './A10_Export';

// default로 export 되면 쓰는 쪽에서 임의의 이름으로 정의해서 사용 가능
import main from './A10_ExportDefault';

// 조합
import min, {address as add} from './A10_ExportMix';

console.log(nickname, arr[0], arr[1], user.name);
console.log(onAdd(10, 20));
console.log('');

const result = main();
console.log(result.x, result.y);
result.inner();
console.log('');

min(10, 5);
console.log(add);

const app = document.getElementById('main');
const div = document.createElement('div');
const text = document.createTextNode(add);
div.appendChild(text);
app.appendChild(div);

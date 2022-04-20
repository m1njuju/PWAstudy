// ./library_named.js 파일에서 내보낸 식별자를 가져와 conHello, fnPlusNumbers 객체에 저장
import { conHello, fnPlusNumbers } from "./02-03library_named.js";
console.log(conHello, '이름으로 내보내기입니다.');
console.log('1+2 = ', fnPlusNumbers(1,2));

// ./library_named.js 파일에서 내보낸 모든 식별자를 가져와 myLibrary 객체에 저장
import * as myLibrary from './02-03library_named.js';
console.log(myLibrary.conHello, '*을 사용한 이름으로 내보내기입니다.');
console.log('3+4 = ', myLibrary.fnPlusNumbers(3,4));

// 외부에서 기본 모듈로 내보냈으므로 이름을 변경해서 가져올 수 있음
import fnMyfunction from './02-03library_default.js';
console.log('안녕하세요! 기본으로 내보내기입니다.');
console.log('5+6 = ',fnMyfunction(5,6));

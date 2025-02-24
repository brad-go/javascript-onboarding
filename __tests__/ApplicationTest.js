const problem1 = require('../src/problem1');
const problem2 = require('../src/problem2');
const problem3 = require('../src/problem3');
const problem4 = require('../src/problem4');
const problem5 = require('../src/problem5');
const problem6 = require('../src/problem6');
const problem7 = require('../src/problem7');

describe('problem1', () => {
  test('case1', () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test('case2', () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test('case3', () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });

  test('페이지는 1부터 400페이지여야 한다.', () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test('페이지는 연속되어야 한다.', () => {
    expect(problem1([100, 101], [393, 400])).toEqual(-1);
  });

  test('왼쪽 페이지 번호는 오른쪽 페이지 번호보다 크지 않아야 한다.', () => {
    expect(problem1([50, 30], [393, 394])).toEqual(-1);
  });
});

describe('problem2', () => {
  test('case1', () => {
    expect(problem2('browoanoommnaon')).toEqual('brown');
  });

  test('case2', () => {
    expect(problem2('zyelleyz')).toEqual('');
  });

  test('case3', () => {
    expect(problem2('zyellleyz')).toEqual('');
  });

  test('case4', () => {
    expect(problem2('zyalllelyz')).toEqual('zyaelyz');
  });

  test('case4', () => {
    expect(problem2('aabba')).toEqual('a');
  });

  test('case3', () => {
    expect(
      problem2(
        'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab',
      ),
    ).toEqual(
      'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab',
    );
  });

  test('case4', () => {
    expect(
      problem2(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ),
    ).toEqual('');
  });

  test('case5', () => {
    expect(problem2('aazzqweqweaaq')).toEqual('qweqweq');
  });

  test('case6', () => {
    expect(problem2('ksekkset')).toEqual('kseset');
  });
});

describe('problem3', () => {
  test('case1', () => {
    expect(problem3(13)).toEqual(4);
  });
  test('case2', () => {
    expect(problem3(33)).toEqual(14);
  });
  test('case3', () => {
    expect(problem3(333)).toEqual(228);
  });
  test('case4', () => {
    expect(problem3(2)).toEqual(0);
  });
});

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf');
  });

  test('case2', () => {
    expect(problem4('Hello  Everyone!')).toEqual('Svool  Veviblmv!');
  });

  test('case3', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba',
    );
  });

  test('case4', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz !@#!#  ')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba !@#!#  ',
    );
  });

  test('Hello  Everyone 테스트', () => {
    expect(problem4('Hello  Everyone!')).toEqual('Svool  Veviblmv!');
    expect(problem4('Hello  Everyone! 123')).toEqual('Svool  Veviblmv! 123');
  });

  test('알파벳 테스트', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba',
    );
    expect(problem4('abcdefghijklmnopqrstuvwxyz !@#!#  ')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba !@#!#  ',
    );
    expect(problem4('ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*  ')).toEqual(
      'ZYXWVUTSRQPONMLKJIHGFEDCBA !@#$%^&*  ',
    );
  });
});

describe('problem5', () => {
  test('case1', () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test('case2', () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });

  test('5만원권을 제외한 최대 금액.', () => {
    expect(problem5(49999)).toEqual([0, 4, 1, 4, 1, 4, 1, 4, 9]);
  });

  test('money는 1 이상 1,000,000 이하인 자연수이다.', () => {
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});

describe('problem6', () => {
  test('case1', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
      ]),
    ).toEqual(['jason@email.com', 'jm@email.com', 'mj@email.com']);
  });

  const makeEmail = (index) => {
    const alphabet = 'abcdefghij';

    return `aaaaa${alphabet[~~((index % 10000) / 1000)]}${
      alphabet[~~((index % 1000) / 100)]
    }${alphabet[~~((index % 100) / 10)]}${
      alphabet[~~((index % 10) / 1)]
    }@email.com`;
  };

  const makeNickname = (index) => {
    const first = '가'.charCodeAt(0);
    const bound = '힣'.charCodeAt(0) - '가'.charCodeAt(0) + 1;

    return String.fromCharCode(
      ...Array(19)
        .fill()
        .map((_, chIndex) => first + ((index + (1 << chIndex)) % bound)),
    );
  };

  test('case2', () => {
    expect(
      problem6(
        Array(10000)
          .fill()
          .map((_, index) => [makeEmail(index), makeNickname(index)]),
      ),
    ).toEqual([]);
  });

  test('case3', () => {
    expect(
      problem6(
        Array(10000)
          .fill()
          .map((_, index) => [
            makeEmail(index),
            index % 2500 !== 0
              ? makeNickname(index)
              : `${makeNickname(index).substring(0, 16)}우테코`,
          ]),
      ),
    ).toEqual([
      'aaaaaaaaa@email.com',
      'aaaaacfaa@email.com',
      'aaaaafaaa@email.com',
      'aaaaahfaa@email.com',
    ]);
  });

  test('case4', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['sonjae@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
      ]),
    ).toEqual([
      'jason@email.com',
      'jm@email.com',
      'mj@email.com',
      'sonjae@email.com',
    ]);
  });

  test('case5', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
        ['jasp@email.com', '박이김'],
        ['jp@email.com', '김이박'],
        ['qpw@email.com', '김이순'],
        ['teemo@email.com', '티모'],
        ['banana@email.com', '대위티모'],
        ['secondJm@email.com', '제이엠'],
        ['apple@email.com', '땷횱봵'],
        ['stran@email.com', '횱봵으'],
        ['zebra@email.com', '두글자이상의문자가연속적으로이제맞티모'],
      ]),
    ).toEqual([
      'apple@email.com',
      'banana@email.com',
      'jason@email.com',
      'jm@email.com',
      'jp@email.com',
      'mj@email.com',
      'nowm@email.com',
      'qpw@email.com',
      'secondJm@email.com',
      'stran@email.com',
      'teemo@email.com',
      'zebra@email.com',
    ]);
  });
});

describe('problem7', () => {
  test('case1', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'jun', 'bedi']);
  });

  test('case2', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });

  test('case3', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });

  test('case4', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['bedi', 'jun'],
          ['bedi', 'donut'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['donut', 'shakevan'],
      ),
    ).toEqual(['andole', 'bedi']);
  });

  test('case5', () => {
    expect(
      problem7(
        'andole',
        [
          ['andole', 'jun'],
          ['donut', 'jun'],
          ['donut', 'shakevan'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'bedi'],
          ['anne', 'jun'],
        ],
        ['donut', 'mrko', 'peter', 'sam'],
      ),
    ).toEqual(['donut', 'anne', 'bedi', 'mrko', 'peter']);
  });

  test('case6', () => {
    expect(
      problem7(
        'hello',
        [
          ['andole', 'jun'],
          ['andole', 'bedi'],
          ['jun', 'shakevan'],
          ['jun', 'kane'],
          ['jun', 'sam'],
          ['bedi', 'shakevan'],
          ['bedi', 'anne'],
          ['bedi', 'sam'],
          ['anne', 'mrko'],
        ],
        ['donut', 'anne', 'mrko', 'mrko', 'sam'],
      ),
    ).toEqual(['mrko', 'anne', 'donut', 'sam']);
  });

  test('case7', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        [],
      ),
    ).toEqual(['andole', 'jun']);
  });
});

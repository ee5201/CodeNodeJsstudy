import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  // aaa() {
  //   return 'HelloWOWorld!';
  // }

  findAll() {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다.',
        contents: '내용이에요',
        Phone: '01012345678',
      },
      {
        number: 2,
        writer: '훈수',
        title: '훈제목입니다.',
        contents: '훈내용이에요',
        Phone: '01012345278',
      },
      {
        number: 3,
        writer: '김수',
        title: '김제목입니다.',
        contents: '김내용이에요',
        Phone: '01012345378',
      },
    ];
    return result;
  }

  create() {
    //1. 데이터를 등록하는 로직  => DB에 접속해서 데이터 저장하기
    //2. 결과 알려주기

    return '등록완료하였습니다.';
  }
}

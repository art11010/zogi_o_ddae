import React from 'react';

import { Button, TitleSub } from '../Atom';

// assets
import icoPay from '../../assets/ico_comp-pay.png';

function Payment() {
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2">
      <TitleSub addClass="pb-5">예약이 완료되었습니다.</TitleSub>
      <p>예약번호 : Y01010101010101</p>
      <p>결제 금액 : 100000원</p>
      <img
        src={icoPay}
        alt="예약 완료 아이콘"
        className="m-auto mt-10 pb-5 w-20"
      />
      <Button addClass="mt-5 px-10">예약내역 확인하기</Button>
    </div>
  );
}

export default Payment;
import React from 'react';
import { Link } from 'react-router-dom';
import { Title, TitleSub, BorderBox, Button } from '../../components/Atom';

import UserLayout from '../../components/User/UserLayout';

// assets
import roomImg from '../../assets/img_room.jpeg';

function BookingList() {
  const rommList = [
    {
      imgSrc: roomImg,
      roomName: '마포 신라스테이',
      paydata: '2022.12.25 (일)',
      date: '2월 25일 ~ 2월 26일',
      num: 2,
    },
    {
      imgSrc: roomImg,
      roomName: '그랜드 하얏트 제주',
      paydata: '2020.08.30 (일)',
      date: '3월 1일 ~ 3월 3일',
      num: 4,
    },
    {
      imgSrc: roomImg,
      roomName: '강릉 세인트존스호텔',
      paydata: '2023.01.01 (일)',
      date: '5월 5일 ~ 5월 8일',
      num: 5,
    },
  ];

  const payMap = rommList.map((lst, idx) => (
    <BorderBox key={lst.roomName + idx}>
      <div className="pb-2 flex items-center justify-between border-b border-gray-400">
        <TitleSub>{lst.paydata}</TitleSub>
        <Link to="/mypage/booking/details" className="text-main">
          예약 내역 &gt;
        </Link>
      </div>

      <div className="pt-5 border-t border-gray-400">
        <button>
          <img src={roomImg} alt="" className="w-full rounded-xl" />
        </button>
        <div className="mt-5">
          <p className="text-xs text-gray-400">예약번호 : Y01010101010101</p>
          <h5 className="my-2 text-xl font-bold">{lst.roomName}</h5>
          <p>
            {lst.date}, {lst.num}명
          </p>
          <span className="block mt-3 text-xs">
            2023.02.20 00:00 전까지 <strong>무료취소</strong>
          </span>
          <Button addclass="mt-5 w-full">후기 남기기</Button>
        </div>
      </div>
    </BorderBox>
  ));

  return (
    <UserLayout onMenu="booking">
      <Title>예약 내역</Title>
      <div className="mt-5 grid grid-cols-3 gap-5">{payMap}</div>
    </UserLayout>
  );
}

export default BookingList;
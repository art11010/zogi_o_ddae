import { Title } from '../../components/Atom';
import BookingListBox from '../../components/Mypage/BookingListBox';

function BookingList() {
  const booklist = [
    {
      imgSrc:
        'https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720',
      roomName: '마포 신라스테이',
      paydata: '2022.12.25 (일)',
      date: '2월 25일 ~ 2월 26일',
      num: 2,
    },
    {
      imgSrc:
        'https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720',
      roomName: '그랜드 하얏트 제주',
      paydata: '2020.08.30 (일)',
      date: '3월 1일 ~ 3월 3일',
      num: 4,
    },
    {
      imgSrc:
        'https://a0.muscache.com/im/pictures/miso/Hosting-34846249/original/4fe9caaa-95b2-4113-b283-5fdfb0d9f2c0.jpeg?im_w=720',
      roomName: '강릉 세인트존스호텔',
      paydata: '2023.01.01 (일)',
      date: '5월 5일 ~ 5월 8일',
      num: 5,
    },
  ];

  return (
    <>
      <Title>예약 내역</Title>
      <BookingListBox booklist={booklist} />
    </>
  );
}

export default BookingList;

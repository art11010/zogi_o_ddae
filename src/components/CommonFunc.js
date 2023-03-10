// 테이블 헤더에 들어갈 한글버전
export const TransKR = (str) => {
  let value = '';
  switch (str) {
    case 'id':
      value = 'ID';
      break;
    case 'sellerId':
      value = '판매자 ID';
      break;
    case 'name':
      value = '이름';
      break;
    case 'addr':
      value = '주소';
      break;
    case 'price':
      value = '가격';
      break;
    case 'minPerson':
      value = '최소 인원';
      break;
    case 'maxPerson':
      value = '최대 인원';
      break;
    case 'lat':
      value = '위도';
      break;
    case 'lon':
      value = '경도';
      break;
    case 'pictureUrl':
      value = '등록된 사진명';
      break;
    case 'description':
      value = '한 줄 소개';
      break;
  }
  str = value;
  return str;
};

// 천의 자리
export const ThousandSign = (v, decimalPoint) => {
  return Number(v)
    .toFixed(decimalPoint)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

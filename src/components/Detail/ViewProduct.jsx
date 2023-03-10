import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Title,
  TitleSub,
  IconHeart,
  Button,
  Input,
  ShadowBox,
} from '../../components/Atom';
import ProductMap from '../../components/Atom/Map';
import * as Common from '../CommonFunc.js';

import { useMutation } from '@tanstack/react-query';
import { postCartList } from '../../api/cart';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/reducers/cartReducer';

// style
export const ProductImg = styled.div`
  ${tw`
      relative
      w-full
      h-500
      rounded-3xl
      overflow-hidden
  `}
  img {
    transform: translate(-50%, -50%);
    ${tw`
        relative
        top-1/2
        left-1/2
        w-full
    `}
  }
`;

function ViewProduct(props) {
  const { loadData } = props;

  const { mutate: cartaddList, isLoading: cartaddLoading } =
    useMutation(postCartList);
  if (cartaddLoading) return 'Loading...';

  // 정보
  const needDetailKeys = [
    'description',
    'minPerson',
    'maxPerson',
    'checkInTime',
    'checKOutTime',
  ];
  const keys = Object.keys(loadData);
  const needDetail = keys.map((k, i) => {
    if (needDetailKeys.includes(k)) {
      return (
        <li key={k} className="grid grid-cols-[100px_auto] mb-1">
          <strong className="font-normal">{Common.TransKR(k)}</strong>
          <p className="cols-start-2">{loadData[k]}</p>
        </li>
      );
    }
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <div className="relative pr-8 box-border">
          <IconHeart addClass="absolute top-2 right-2" />
          <Title addClass="mb-2">{loadData.name}</Title>
          <p className="row-start-2 col-span-2 mb-5">{loadData.addr}</p>
        </div>
        <ProductImg>
          <img src={loadData.pictureUrl} alt={loadData.name} />
        </ProductImg>
        <div className="grid grid-cols-[60%_40%] gap-5 mt-20">
          <div className="cols-start-1">
            <TitleSub addClass="mb-4 text-main">정보</TitleSub>
            <ul>{needDetail}</ul>
          </div>
          <div className="cols-start-2">
            <ShadowBox>
              <div className="grid grid-cols-2 gap-5">
                <Input
                  id="in"
                  label="체크인 날짜"
                  type="date"
                  value={loadData.startAt}
                />
                <Input
                  id="out"
                  label="체크아웃 날짜"
                  type="date"
                  value={loadData.endAt}
                />
              </div>
              <Input id="num" label="인원" />
              <div className="flex justify-between items-end mt-5 mb-3">
                <p>총 {'2'}박</p>
                <strong className="text-3xl">
                  {Common.ThousandSign(loadData.price)}원
                </strong>
              </div>
              <Button
                addClass="mt-3 btn-block"
                onClick={() => {
                  cartaddList({
                    productId: 2,
                    persons: 3, // input 인원
                    startAt: '2023-05-30T16:00', // input 체크인
                    endAt: '2023-06-09T20:00', // input 체크아웃
                  });
                  dispatch(cartActions.cartIncrement());
                }}
              >
                장바구니 담기
              </Button>
            </ShadowBox>
          </div>
          <div className="cols-start-1 col-span-2">
            <TitleSub addClass="mb-4 text-main">위치</TitleSub>
            <ProductMap list="/data/productView.json" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;

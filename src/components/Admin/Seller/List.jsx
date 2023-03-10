import React from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PagiNation from '../../Atom/PagiNation';
import { getSellerProductList } from '../../../api/seller';
import Table from '../Table';
import * as Common from '../../CommonFunc.js';

function SellerList() {
  const { mainCate, mainPath } = useOutletContext();
  let loca = useLocation();
  let pathParams = new URLSearchParams(loca.search);

  const { data: productList, isLoading: productLoading } = useQuery(
    ['productList', mainPath, pathParams.get('sellerId')],
    getSellerProductList
  );
  if (productLoading) return 'Loading...';

  const isEmpty = productList.data.empty;
  const tb = productList.data.content;
  const tbKeys = Object.keys(tb[0]);
  let headNameObj = new Object();
  for (var i = 0; i < tbKeys.length; i++) {
    headNameObj[tbKeys[i]] = Common.TransKR(tbKeys[i]);
  }

  return (
    <>
      {isEmpty ? (
        <>
          <p className="flex justify-center items-center h-full text-2xl text-main font-bold">
            등록된 {mainCate} 시설이 없습니다.
          </p>
        </>
      ) : (
        <>
          <Table
            cols={tbKeys.length}
            headNameObj={headNameObj}
            currentPath={loca.pathname}
            sellerId={pathParams.get('sellerId')}
          >
            {tb}
          </Table>
          <PagiNation
            atvPageNum={pathParams.get('page')}
            totalPageNum={productList.data.totalPages}
            currentPath={loca.pathname}
            sellerId={pathParams.get('sellerId')}
          />
        </>
      )}
    </>
  );
}

export default SellerList;

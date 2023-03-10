import { Alink, Button } from '../Atom';
import { useMutation } from '@tanstack/react-query';
import { postKakaopay } from '../../api/kakaopay';
interface Props {
  payList: {
    cartId: number;
    orderItemList: [
      {
        orderItemId: number;
        name: string;
        price: number;
        pictureUrl: string;
        persons: number;
        startAt: string;
        salePrice: number;
        endAt: string;
      }
    ];
    totalPrice: number;
  };
  cart?: boolean;
}

function PayPrice(props: Props) {
  const { payList, cart } = props;
  const { mutate: kakaopayPost, isLoading: kakaopayLoading } = useMutation(
    postKakaopay,
    {
      onSuccess: () => {
        // client.invalidateQueries(['cartGet']);
      },
    }
  );

  let totalSalePrice = payList.orderItemList.reduce((acc, item) => {
    return acc + item.salePrice;
  }, 0);

  return (
    <>
      <div className="py-5 px-2 border-t border-gray-400">
        <p className="flex justify-between">
          총 선택 상품{' '}
          <strong className="text-lg">{payList.orderItemList.length}건</strong>
        </p>
        <p className="flex justify-between">
          총 결제 금액{' '}
          <strong className="text-lg">
            {cart ? (
              <>{payList.totalPrice}원</>
            ) : (
              <>
                {totalSalePrice !== 0 && (
                  <>
                    <span className="line-through mr-2 font-normal text-base">
                      {totalSalePrice + payList.totalPrice}원
                    </span>
                  </>
                )}
                {payList.totalPrice}원
              </>
            )}
          </strong>
        </p>
      </div>
      {cart ? (
        <Alink to="/payment" addClass="mt-5 btn-block">
          예약하기
        </Alink>
      ) : (
        <Button
          addClass="mt-5 btn-block"
          onClick={() => {
            kakaopayPost({
              customerId: 1,
              cartId: payList.cartId,
              productId: payList.orderItemList[0].orderItemId,
              price: payList.totalPrice,
              tid: null,
            });
          }}
        >
          결제하기
        </Button>
      )}
    </>
  );
}

export default PayPrice;

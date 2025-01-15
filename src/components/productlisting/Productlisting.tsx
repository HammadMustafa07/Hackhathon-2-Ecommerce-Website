
import Image from "next/image";
import productlistingheroimage from "../../../public/images/productlistingheroimage.png" 

export default function productlisting() {
  return (
    <div className="h-[759px] w-[1440px] flex">
      <Image src={productlistingheroimage} alt="productimage" height={759} width={721}></Image>
      <div className="h-[657px] w-[602px] mt-[51px]  ml-[52px]">
        <div className="h-[89px] w-[281px] mt-[40px] ml-[40px] flex flex-col gap-[13px]">
          <p className="text-[36px] text-[#2A254B]">The Dandy Chair</p>
          <p className="text-[24px] text-[#2A254B]">£250</p>
        </div>
        <div className="flex justify-center items-center w-[602px] h-[251px] gap-[16px]">
          <div className="h-[195px] w-[522px] flex flex-col gap-[16px]">
            <p className="text-[#2A254B] text-[16px]">Description</p>
            <p className="text-[#2A254B] text-[16px]">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
            <ul className="text-[#2A254B]">
              <li>Premium material </li>
              <li>Handmade upholstery Quality</li>
              <li>timeless classic</li>
            </ul>
          </div>
        </div>
        <div className="w-[602px] h-[134px]">
          <div className="h-[99px] w-[241px] mt-[20px] ml-[40px] flex flex-col gap-[28px]">
            <p className="text-[#2A254B]">Dimensions</p>
            <div className="h-[51px] w-[241px] flex gap-[57px]">
              <div className="h-[51px] w-[44px] flex flex-col gap-[12px]">
                <p className="text-[#2A254B] text-[14px]">Height</p>
                <p className="text-[#2A254B] text-[16px]">110cm</p>
              </div>
              <div className="h-[51px] w-[44px] flex flex-col gap-[12px]">
                <p className="text-[#2A254B] text-[14px]">Width</p>
                <p className="text-[#2A254B] text-[16px]">75cm</p>
              </div>
              <div className="h-[51px] w-[44px] flex flex-col gap-[12px]">
                <p className="text-[#2A254B] text-[14px]">Depth</p>
                <p className="text-[#2A254B] text-[16px]">50cm</p>
              </div>
            </div>
          </div>
          <div className="mt-[10px] h-[115px] w-[602px] flex  ">
            <div className="h-[46px] w-[209px] mt-[27px] ml-[40px] flex gap-[22px]">
              <p className="text-[#2A254B]">Amount:</p>
              <div className="h-[46px] w-[122px] flex justify-center">
                <p className="text-[#2A254B]">+</p>
                <p className="text-[#2A254B]">1</p>
                <p className="text-[#2A254B]">-</p>
              </div>
            </div>
            <button className="w-[143px]  h-[56px] mt-[20px] flex justify-center items-center bg-[#2A254B] text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

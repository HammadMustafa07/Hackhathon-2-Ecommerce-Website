import Image from "next/image"
import RightImage from "../../../public/images/RightImage.png"
import listingsdiv2 from "../../../public/images/listingsdiv2.png"
import ceramicsdiv3 from "../../../public/images/ceramicsdiv3.png"
import ceramicsdiv4 from "../../../public/images/ceramicsdiv4.png"

export default function Listings1() {
    return (
        <div className="h-[634px] ml-[30px] w-[1440px] grid grid-cols-4">
            <div className="w-[305px] h-[462px] flex flex-col gap-[24px]">
                <Image src={RightImage} alt="Chair image" height={375} width={305}></Image>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[18px]">The Dandy chair</p>
                    <p className="text-[18px]">£250</p>
                </div>
            </div>
            <div className="w-[305px] h-[462px] flex flex-col gap-[24px]">
                <Image src={listingsdiv2} alt="Chair image" height={375} width={280}></Image>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[18px]">Rustic Vase Set</p>
                    <p className="text-[18px]">£155</p>
                </div>
            </div>
            <div className="w-[305px] h-[462px] flex flex-col gap-[24px]">
                <Image src={ceramicsdiv3} alt="Chair image" height={375} width={280}></Image>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[18px]">The Silky Vase</p>
                    <p className="text-[18px]">£125</p>
                </div>
            </div>
            <div className="w-[305px] h-[462px] flex flex-col gap-[24px]">
                <Image src={ceramicsdiv4} alt="Chair image" height={375} width={280}></Image>
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[18px]">The Lucy Lamp</p>
                    <p className="text-[18px]">£399</p>
                </div>
            </div>
            <button className="h-[56px] w-[170px] text-[#2A254B] mt-[100px] ml-[535px]">View collection</button>
        </div>
    )
}
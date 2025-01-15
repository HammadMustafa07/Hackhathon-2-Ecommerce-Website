import Image from "next/image";
import frame143 from "../../../public/images/Frame143.png";


export default function Frame143() {
    return (
        <div className="h-[209px] w-[1440px]">
            <Image src={frame143} alt="heroimage" height={209} width={1440}></Image>
        </div>
    )
}
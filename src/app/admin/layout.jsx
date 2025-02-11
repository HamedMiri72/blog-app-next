import { assets } from "@/assets/assets";
import Sidbar from "@/components/adminComponents/Sidbar";
import Image from "next/image";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({children}){

    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidbar/>
                <div className="flex flex-col w-full">

                    <div className="flex items-center justify-between w-full py-2 max-h-[60] px-12 border-b border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} width={43.5} alt=""/>

                    </div>
                    {children}

                </div>
                
            </div>
            
        </>
    )

}
import React from "react"

import Hands from '../image/hands.png'

const Metriks = () => {

    return(
        <div className="flex justify-center mt-55 bg-white pt-90 px-">
            <div className="w-max">    
                <div className="flex text-30 text-black font-bold mt-14 mb-5 justify-center text-center">
                    Установи трекер на свой сайт
                </div>
                <div className="flex justify-center">
                    <a href="https://t.me/GosRequestBot" className="">
                        <div className="flex w-max text-white bg-purpleB rounded-2xl px-45 py-10 hoverEffect">
                            <div className="flex text-white mr-2 items-center">@GosRequestBot</div>
                            <div className="bg-white rounded-full animate-ping-custom">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M36 18C36 27.9405 27.9405 36 18 36C8.0595 36 0 27.9405 0 18C0 8.0595 8.0595 0 18 0C27.9405 0 36 8.0595 36 18ZM18.645 13.2885C16.8945 14.016 13.395 15.5235 8.148 17.8095C7.296 18.1485 6.849 18.48 6.8085 18.804C6.7395 19.353 7.4265 19.569 8.3595 19.8615C8.487 19.902 8.619 19.9425 8.754 19.9875C9.6735 20.286 10.9095 20.6355 11.5515 20.649C12.135 20.661 12.786 20.421 13.5045 19.929C18.4065 16.6185 20.937 14.946 21.096 14.91C21.2085 14.8845 21.3645 14.8515 21.4695 14.946C21.5745 15.039 21.564 15.216 21.5535 15.264C21.4845 15.5535 18.7935 18.057 17.3985 19.353C16.9635 19.7565 16.656 20.043 16.593 20.109C16.452 20.2545 16.308 20.394 16.17 20.5275C15.315 21.3495 14.676 21.9675 16.206 22.9755C16.941 23.46 17.529 23.8605 18.1155 24.2595C18.756 24.696 19.395 25.131 20.223 25.674C20.433 25.812 20.634 25.9545 20.8305 26.094C21.576 26.6265 22.2465 27.1035 23.0745 27.0285C23.5545 26.9835 24.0525 26.532 24.3045 25.1835C24.9 21.9945 26.073 15.0885 26.3445 12.2415C26.361 12.0051 26.351 11.7676 26.3145 11.5335C26.2927 11.3444 26.2006 11.1704 26.0565 11.046C25.842 10.8705 25.509 10.833 25.359 10.836C24.6825 10.848 23.6445 11.2095 18.645 13.2885Z" fill="#AE90FE"/>
                                </svg>
                            </div>    
                        </div>
                    </a>
                </div>
                <div>
                    <img src={Hands} />
                </div>
            </div>    
        </div>
    )
}

export default Metriks
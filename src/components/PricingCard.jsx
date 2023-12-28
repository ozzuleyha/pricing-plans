import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const PricingCard = ({header, description, price, features, className }) => {
    return (
        <div class={`max-w-sm rounded overflow-hidden shadow-lg ${className}`}>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-white">{header}</div>
                <p class="text-white text-base">
                    {description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <p class="text-white text-base">
                    {price}
                </p>
            </div>

                {features.map((feature, key) => ( 
                    <React.Fragment key={key}>
                        <CiCircleCheck sx={{fontSize: "50px"}} />
                        <p class="text-white text-base">
                            {feature.description}
                        </p>
                    </React.Fragment>
                ))}
            </div>
    );
};

export default PricingCard;

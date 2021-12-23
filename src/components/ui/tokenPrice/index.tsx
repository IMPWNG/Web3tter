import { useState } from "react";
import { useTokenPrice } from "react-moralis";

function TokenPrice(props) {
    const { data: formattedData } = useTokenPrice(props);
    const [isUSDMode, setIsUSDMode] = useState(true);
    const toggleDisplayStyle = () => setIsUSDMode(!isUSDMode);
    const noLogoToken = "https://etherscan.io/images/main/empty-token.png";

    return (
        <div className="p-2 h-10 gap-2 object-content flex justify-center item-center whitespace-nowrap">
            <img src={props.image || noLogoToken} alt="logo" style={{ height: props?.size || "35px" }} />
            <span style={{ cursor: "pointer" }} onClick={toggleDisplayStyle} title={`Show in ${isUSDMode ? "ETH" : "USD"}`}>
                {formattedData && (isUSDMode ? formattedData.formattedUsd : formattedData.formattedNative)}
            </span>
        </div>
    );
}
export default TokenPrice;
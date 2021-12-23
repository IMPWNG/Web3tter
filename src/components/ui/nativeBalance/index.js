import { useNativeBalance } from "react-moralis";
import { n4 } from "../../../helpers/formatters";

function NativeBalance(props) {
    const { getBalance, data:balance, nativeToken } = useNativeBalance(props);

    return (
        <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>{`${n4.format(
            balance.formatted
        )} ${nativeToken}`}</div>
    );
}

export default NativeBalance;

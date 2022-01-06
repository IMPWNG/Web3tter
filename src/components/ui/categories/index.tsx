import { useWeb3DappContext } from "../../../context/Web3Provider/Web3Provider";
import { Menu } from "antd"

import { SparklesIcon } from "@heroicons/react/outline";

export default function Categories({ categories })  {
    const { setSelectedCategory } = useWeb3DappContext();

    function selectCategory(categoryId) {
        const selectedCategory = categories.filter((category) => category["categoryId"] === categoryId);
        setSelectedCategory(selectedCategory[0]);
        
    }

    return (
        <div className="text-[#d9d9d9]">
            <Menu
                onClick={(e) => selectCategory(e.key)}
                className="text-lg sm:text-xl font-bold"
                mode="inline">
                <Menu.ItemGroup key="categories" title="Categories">
                    {(categories || []).map((category) => (
                        <Menu.Item key={category["categoryId"]}>{category["category"]}</Menu.Item>
                    ))}
                </Menu.ItemGroup>
            </Menu>
        </div>
    );
}
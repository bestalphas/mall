import { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

const IndexPage = () => {
    
    const navigate = useNavigate()
    const handleClickList = useCallback(()=>{
        navigate({
            pathname:'list'
        })
    })

     const handleClickAdd = useCallback(()=>{
        navigate({
            pathname:'add'
        })
    })
    
    
    return(
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div id="List" className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickList}>List</div>
                <div id="ADD" className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickAdd}>ADD</div>
            </div>

            <div className="flex flex-wrap w-full">
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    )
}

export default IndexPage;
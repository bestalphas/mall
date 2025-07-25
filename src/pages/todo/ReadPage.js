import { useCallback } from "react";
import { useNavigate, useParams,useSearchParams,createSearchParams } from "react-router-dom";

const ReadPage = () => {
    
    const {tno} = useParams()
    
    const navigate = useNavigate()

    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({page,size}).toString()

    const moveToModify = useCallback(  (tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search:queryStr
        },[tno,page,size])
    })

    const moveToList = useCallback(()=>{
        navigate({
            pathname:`/todo/list`,
            search:queryStr
        },[page,size])
    })

    return(
        <div className="text-2xl font-extrabold">
            Todo Read Page Component.......{tno}
        
            <div>
                <button onClick={()=>moveToModify(tno)}>Test Modify</button>
                <br/>
                <button onClick={()=>moveToList()}>Test list</button>
            </div>
        </div>
    )
}

export default ReadPage;
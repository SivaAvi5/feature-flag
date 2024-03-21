import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";


export const FeatureFlagContext = createContext(null)

export default function FeatureFlagGlobalState({children}){
    const [loading,setLoading] = useState(false)
    const [enabledFlags,setEnabledFlags] = useState({})

    const fetchFeatureFlag = async() =>{
        try{
        setLoading(true)
        const response = await featureFlagsDataServiceCall()
        
        setEnabledFlags(response)
        setLoading(false)
        }catch(e){
            console.log(e)
            setLoading(false)
            throw new Error(e)
        }
    }
    
    useEffect(() =>{
        fetchFeatureFlag()
    },[])

    return (
        <FeatureFlagContext.Provider value={{enabledFlags}}>
            {children}
        </FeatureFlagContext.Provider>
    )
}
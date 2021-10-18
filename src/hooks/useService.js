import { useEffect, useState } from "react";


const useService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return {
        service
    }
};

export default useService;
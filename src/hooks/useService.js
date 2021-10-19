import { useEffect, useState } from "react";


const useService = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("/fakeData2.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return {
        services
    }
};

export default useService;
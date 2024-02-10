import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>setData(data))
    setLoading(false);
  }, []);

  return { data, loading };
};

export default useGetData;

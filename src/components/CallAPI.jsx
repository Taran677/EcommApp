import { useEffect } from "react";

function CallAPI({setProducts}) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData(); 
    }, []); 
  }
  export default CallAPI;
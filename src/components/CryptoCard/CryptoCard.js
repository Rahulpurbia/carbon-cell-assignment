import React, { useEffect, useState } from "react";
import "./CryptoCard.css";

const CryptoCard = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchCryptoPrices = () => {
    setIsLoading(true);
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };

  const getLocaleTime = (time) => {
    return new Date(time).toLocaleString();
  };

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="card">
          <div className="container-card bg-green-box">
            <p className="card-title"> {data?.chartName}</p>
            <p className="card-body card-subtitle">
              {data?.chartName} prices as compared to different currencies
            </p>
            <div className="card-body">
              {data?.bpi &&
                Object.values(data?.bpi).map(({ symbol, code, rate }) => {
                  return (
                    <div className="currency-item">
                      <span className="mr-auto">{code}</span>
                      <span>
                        <span dangerouslySetInnerHTML={{ __html: symbol }} />
                        {rate}
                      </span>
                    </div>
                  );
                })}
            </div>
            <span className="last-updated-text">
              Last updated:{" "}
              {getLocaleTime(data?.time?.updatedISO).split(",")[1]}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoCard;

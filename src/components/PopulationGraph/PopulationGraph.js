import React, { useState, useEffect, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./PopulationGraph.css";

const PopulationGraph = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const { populations, years } = useMemo(() => {
    const years = data.map((item) => item.Year).reverse();
    const populations = data.map((item) => item.Population).reverse();
    return { years, populations };
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Country Population Chart",
        color: "white",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Population",
          color: "white",
        },
        grid: {
          display: false,
        },
        axis: {
          color: "white",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        cubicInterpolationMode: "monotone", // Make the line smooth
        point: false,
      },
    },
  };

  const graphData = {
    labels: years,
    datasets: [
      {
        label: "Dataset 1",
        data: populations,
        borderColor: "#2ab42a",
        backgroundColor: "white",
      },
    ],
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="population-chart">
      {isLoading ? (
        <div>isLoading...</div>
      ) : (
        <Line options={options} data={graphData} />
      )}
    </div>
  );
};

export default PopulationGraph;

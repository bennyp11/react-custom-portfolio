import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: "Ben's Skillset",
        fontSize: "64"
      },
    },
  };
  
  const labels = ['ReactJS', 'NodeJS', 'HTML/CSS', 'PostgresQL', 'Oracle Database', 'Cloud Engineering'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Skill Level",
        data: [85, 75, 85, 85, 85, 95],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

ChartJS.defaults.font.size = 16;

export default function Skills() {
    return(
        <div className="skills-chart-container">
            <Bar className="skills-chart" options={options} data={data} />
        </div>
    );
}



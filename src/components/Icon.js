import React, {useEffect} from "react";
import LazyLinePainter from 'lazy-line-painter'

function Icon() {
  useEffect(() => {
    let el = document.querySelector('#havieye');
 
    let myAnimation = new LazyLinePainter(el, {"ease":"easeInOutExpo","strokeWidth":10.6,"strokeOpacity":1,"strokeColor":"#69dadd","strokeCap":"round","repeat":-1}); 
    
    myAnimation.paint();
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="400"
      height="400"
      className="lazy-line-painter"
      data-llp-composed="true"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      viewBox="0 0 400 400"
      id="havieye"
    >
      <defs>
        <path
          id="baSzvPTec"
          fillOpacity="0"
          d="M199.76 26.8c4.15 0 7.52 3.36 7.52 7.51V70.1c0 4.15-3.37 7.51-7.52 7.51-1.5 0 1.51 0 0 0-4.15 0-7.51-3.36-7.51-7.51V34.31c0-4.15 3.36-7.51 7.51-7.51 1.51 0-1.5 0 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-0"
        ></path>
        <path
          id="aatK1O9am"
          fillOpacity="0"
          d="M267.14 32.02c4.02 1 6.47 5.08 5.47 9.11-2.09 8.4-6.56 26.31-8.66 34.72-1 4.02-5.08 6.47-9.11 5.47-1.45-.36 1.46.36 0 0-4.02-1-6.47-5.08-5.47-9.11 2.1-8.4 6.56-26.32 8.66-34.72 1-4.03 5.08-6.48 9.11-5.47 1.46.36-1.46-.37 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-1"
        ></path>
        <path
          id="bVi0AUPZi"
          fillOpacity="0"
          d="M132.39 32.02a7.503 7.503 0 019.11 5.47c2.1 8.4 6.56 26.32 8.66 34.72 1 4.03-1.45 8.11-5.48 9.11-1.45.36 1.46-.36 0 0-4.02 1-8.1-1.45-9.1-5.47-2.1-8.41-6.57-26.32-8.66-34.72a7.51 7.51 0 015.47-9.11c1.46-.37-1.46.36 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-2"
        ></path>
        <path
          id="a1I42O1Qra"
          fillOpacity="0"
          d="M328.17 50.09c3.67 1.94 5.06 6.49 3.11 10.16-4.06 7.64-12.73 23.95-16.8 31.59-1.95 3.67-6.5 5.06-10.16 3.11-1.33-.7 1.33.71 0 0-3.67-1.95-5.06-6.5-3.11-10.16 4.07-7.65 12.74-23.95 16.8-31.6a7.513 7.513 0 0110.16-3.1c1.33.7-1.32-.71 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-3"
        ></path>
        <path
          id="hmv3Zdyh1"
          fillOpacity="0"
          d="M18.47 76.37c3.18-2.67 7.92-2.25 10.59.93 5.56 6.63 17.43 20.77 23 27.41a7.503 7.503 0 01-.93 10.58c-1.15.97 1.15-.96 0 0-3.18 2.67-7.92 2.26-10.58-.92-5.57-6.64-17.44-20.78-23-27.41a7.515 7.515 0 01.92-10.59c1.15-.97-1.15.97 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-4"
        ></path>
        <path
          id="e3XsC0jwJ"
          fillOpacity="0"
          d="M381.73 79.54c3.08 2.78 3.33 7.53.55 10.61-5.79 6.44-18.15 20.16-23.94 26.6-2.78 3.08-7.53 3.33-10.61.55-1.12-1 1.11 1.01 0 0-3.09-2.78-3.34-7.53-.56-10.61 5.79-6.44 18.15-20.16 23.94-26.59a7.516 7.516 0 0110.62-.56c1.11 1.01-1.12-1 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-5"
        ></path>
        <path
          id="av3bwOVqW"
          fillOpacity="0"
          d="M76.65 49.4a7.516 7.516 0 0110.05 3.46c3.8 7.78 11.89 24.38 15.69 32.16 1.82 3.73.27 8.23-3.46 10.05-1.35.66 1.35-.66 0 0a7.516 7.516 0 01-10.05-3.46c-3.8-7.78-11.89-24.38-15.69-32.16a7.516 7.516 0 013.46-10.05c1.35-.66-1.35.66 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-6"
        ></path>
        <path
          id="ecUdGK9qV"
          fillOpacity="0"
          d="M200.24 349.2c-4.15 0-7.52-3.36-7.52-7.51V305.9c0-4.15 3.37-7.51 7.52-7.51 1.5 0-1.51 0 0 0 4.15 0 7.51 3.36 7.51 7.51v35.79c0 4.15-3.36 7.51-7.51 7.51-1.51 0 1.5 0 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-7"
        ></path>
        <path
          id="bB42oHqY"
          fillOpacity="0"
          d="M132.86 343.98c-4.02-1-6.47-5.08-5.47-9.11 2.09-8.4 6.56-26.31 8.66-34.72 1-4.02 5.08-6.47 9.11-5.47 1.45.36-1.46-.36 0 0 4.02 1 6.47 5.08 5.47 9.11-2.1 8.4-6.56 26.32-8.66 34.72-1 4.03-5.08 6.48-9.11 5.47-1.46-.36 1.46.37 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-8"
        ></path>
        <path
          id="aTMtCWYY5"
          fillOpacity="0"
          d="M267.14 343.31a7.503 7.503 0 01-9.11-5.47c-2.1-8.4-6.56-26.32-8.66-34.72-1-4.03 1.45-8.1 5.47-9.11 1.46-.36-1.45.37 0 0 4.03-1 8.11 1.45 9.11 5.48 2.1 8.4 6.57 26.31 8.66 34.72 1 4.02-1.45 8.1-5.47 9.1-1.46.37 1.46-.36 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-9"
        ></path>
        <path
          id="dVkkp4Gu1"
          fillOpacity="0"
          d="M71.16 326.48c-3.67-1.95-5.06-6.5-3.11-10.16 4.07-7.65 12.73-23.95 16.8-31.6a7.513 7.513 0 0110.16-3.1c1.33.7-1.32-.71 0 0 3.67 1.95 5.06 6.5 3.11 10.16-4.07 7.65-12.73 23.95-16.8 31.59-1.95 3.67-6.5 5.06-10.16 3.11-1.33-.7 1.32.71 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-10"
        ></path>
        <path
          id="a6U7mO5z98"
          fillOpacity="0"
          d="M381.53 299.63c-3.18 2.67-7.92 2.25-10.59-.93-5.56-6.63-17.43-20.77-23-27.41a7.503 7.503 0 01.93-10.58c1.15-.97-1.15.96 0 0 3.18-2.67 7.92-2.26 10.58.92 5.57 6.64 17.44 20.78 23 27.41a7.515 7.515 0 01-.92 10.59c-1.15.97 1.15-.97 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-11"
        ></path>
        <path
          id="a8JeusiWVw"
          fillOpacity="0"
          d="M18.27 296.46c-3.08-2.78-3.33-7.53-.55-10.61 5.79-6.44 18.15-20.16 23.94-26.6 2.78-3.08 7.53-3.33 10.61-.55 1.12 1-1.11-1.01 0 0 3.09 2.78 3.34 7.53.56 10.61-5.79 6.44-18.15 20.16-23.94 26.59a7.516 7.516 0 01-10.62.56c-1.11-1.01 1.12 1 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-12"
        ></path>
        <path
          id="f2iQkdWaJl"
          fillOpacity="0"
          d="M364.73 174.94c-1.68-1.61-2.72-2.61-3.14-3.01-91.7-87.83-236.72-86.5-326.79 3.01"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-13"
        ></path>
        <path
          id="a6fFF0dFiy"
          fillOpacity="0"
          d="M323.35 326.6a7.516 7.516 0 01-10.05-3.46c-3.8-7.78-11.89-24.38-15.69-32.16a7.516 7.516 0 013.46-10.05c1.35-.66-1.35.66 0 0a7.516 7.516 0 0110.05 3.46c3.8 7.78 11.89 24.38 15.69 32.16 1.82 3.73.27 8.23-3.46 10.05-1.35.66 1.35-.66 0 0z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-14"
        ></path>
        <path
          id="a6jk0VeRW"
          fillOpacity="0"
          d="M35.27 197.65c1.68 1.61 2.72 2.61 3.14 3.01 91.7 87.83 236.72 86.5 326.79-3.01"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-15"
        ></path>
        <path
          id="ccSouIQbP"
          fillOpacity="0"
          d="M252.18 169.46c0 28.93-23.49 52.42-52.42 52.42-28.92 0-52.41-23.49-52.41-52.42 0-28.92 23.49-52.41 52.41-52.41 28.93 0 52.42 23.49 52.42 52.41z"
          data-llp-delay="0"
          data-llp-duration="3100"
          data-llp-id="havieye-16"
        ></path>
      </defs>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#baSzvPTec"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#aatK1O9am"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#bVi0AUPZi"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#a1I42O1Qra"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#hmv3Zdyh1"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#e3XsC0jwJ"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#av3bwOVqW"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#ecUdGK9qV"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#bB42oHqY"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#aTMtCWYY5"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#dVkkp4Gu1"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#a6U7mO5z98"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#a8JeusiWVw"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="12"
        xlinkHref="#f2iQkdWaJl"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="8"
        xlinkHref="#a6fFF0dFiy"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="12"
        xlinkHref="#a6jk0VeRW"
      ></use>
      <use
        fillOpacity="0"
        stroke="#69dadd"
        strokeWidth="12"
        xlinkHref="#ccSouIQbP"
      ></use>
    </svg>
  );
}

export default Icon;
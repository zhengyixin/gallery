import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from './picture'
var data = [
            {
              "id": "1",
              "fileName": "1.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1529/24276659010_55fa2877e1_z.jpg"
            },
            {
              "id": "2",
              "fileName": "2.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1563/24489753581_15b61414ab_z.jpg"
            },
            {
              "id": "3",
              "fileName": "3.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1685/23947782593_f313667d00_z.jpg"
            },
            {
              "id": "4",
              "fileName": "4.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1470/24276558370_6acfbefca2_z.jpg"
            },
            {
              "id": "5",
              "fileName": "6.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1457/24489691681_f276cb5e17_z.jpg"
            },
            {
              "id": "6",
              "fileName": "7.jpg",
              "title": "Heaven of time",
              "desc": "Here he comes Here comes Speed Racer.",
              "src":"https://farm2.staticflickr.com/1454/24571968175_84b4b1b469_z.jpg"
            }
           ];
ReactDOM.render(<Gallery data = {data} />,document.getElementById('example'));
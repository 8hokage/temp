import React, { useEffect, useRef } from 'react';
import './style.scss';
import classNames from 'classnames';


export interface CircleDiagram {
    data: any;
    className: string;
}

const data = []

const CircleDiagram: React.FC<CircleDiagram> = ({data, className}) => {
  const canvasRef: any = useRef(null);

  const renderCircle = () => {
    let total = 0;
    data.forEach((item: any) => {
      total += item.amount;
    });


    const ctx = canvasRef.current.getContext("2d");

    const grad= ctx.createLinearGradient(0, 0, 200, 200);
    grad.addColorStop(0, "rgb(100, 0, 0)");
    grad.addColorStop(1, "rgb(256, 0, 0)");

    ctx.beginPath();
    ctx.arc(110, 110, 100, 0, 0.1 * Math.PI * 2);
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle="red";
    ctx.stroke();

    const grad1= ctx.createLinearGradient(50, 50, 150, 150);
    grad1.addColorStop(0, "red");
    grad1.addColorStop(1, "green");

    ctx.beginPath();
    ctx.arc(110, 110, 100, 0.1 * Math.PI *2 + 0.4, 1 * Math.PI * 2 - 0.4);
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle=grad;
    ctx.stroke();
  }

  useEffect(() => {
    renderCircle();
  })

  return (
      <canvas 
        width="220" 
        height="220" 
        ref={canvasRef} 
        id="#canvas" 
        className={classNames("canvas", className)}/>
  )
}

export default CircleDiagram;
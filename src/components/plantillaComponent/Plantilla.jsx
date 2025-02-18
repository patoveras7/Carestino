"use client";

import React, { useState, useEffect } from "react";

const Plantilla = () => {



  const [generalColors, setGeneralColors] = useState([]); // Seteamos los colores de todas las celdas 'en tiempo real' mediante el useEffect.
  const [selectedColor, setSelectedColor] = useState("red"); // Default. 
  const [menuVisible, setMenuVisible] = useState(false); // Controlamos la visibilidad y luego las coordenadas del menu.
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false); // Para poder funcionalizar el arrastre que pide la consigna.
  const colors = ["gray", "black", "red", "yellow", "orange"]; // Cinco colores disponibles (arrancamos por defaulr con un red).



  useEffect(() => { // Definimos las 100 columnas y calculamos la cantidad de filas conforme el tamaño de la pantalla.
    const columns = 100;
    const cellSize = 20; // Otorgamos un tamaño en pixeles.
    const rows = Math.floor(window.innerHeight / cellSize);
    setGeneralColors(Array(rows * columns).fill("white"));
  }, []);




  const changeCellColor = (index) => { // Cambiamos el color de la celda y seteamos el estado general de colores.
    setGeneralColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "white" ? selectedColor : "white";
      return newColors;
    });
  };




  const handleContextMenu = (event, index) => { // El menu emergente se muestra (true) conforme la ubicación del cursor.
    event.preventDefault();
    setMenuVisible(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  };




  const selectColor = (color) => { // Cambiamos el color seleccionado y el menu se vuelve invisible (false).
    setSelectedColor(color);
    setMenuVisible(false);
  };




  return (
    <div
      className="w-full h-screen overflow-hidden grid grid-cols-[repeat(100,20px)]"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
    >
       {generalColors.map((color, index) => (
        <div
          key={index}
          onClick={() => changeCellColor(index)}
          onMouseEnter={() => isDrawing && changeCellColor(index)} // Funcion de arrastre.
          onContextMenu={(e) => handleContextMenu(e, index)} // Apertura con el click derecho. 
          className="w-[20px] h-[20px] border border-gray-300"
          style={{ backgroundColor: color }}
        ></div>
      ))}

      {menuVisible && ( // Renderizado condicional del menu emergente.
        <div
          className="absolute p-2 bg-white shadow-md rounded-md fade-in"
          style={{ top: menuPosition.y, left: menuPosition.x }}
          onMouseLeave={() => setMenuVisible(false)}
        >
          {colors.map((color) => ( // Mapeamos el arreglo de colores disponibles.
            <div
              key={color}
              className={`w-8 h-8 m-1 rounded cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)} // Seleccionamos el color.
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Plantilla;

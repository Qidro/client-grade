// src/Overlay.tsx
import React from 'react';
import './Overlay.css'; // Импортируем стили

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps>= ({ isVisible, onClose}) => {
  if (!isVisible) return null;
  console.log(isVisible);

  // const ClodeOverlay = () =>
  //   {   
  //     isVisible = false;
  //   };

  return (
    <div className="overlay" >
      <div className="overlay-content w-2/5 h-2/5">
        тип изменения данных юзера
        <button type="button" onClick={onClose}><img src="\icon\pencil\pencil.png" alt="Иконка" width="25" height="25"/></button>
      </div>
    </div>
  );
};

export default Overlay;
import React, { useEffect, useState } from 'react';
import './gall.css';

const Gall = ({ gallery }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const showImage = (index) => {
      const popupImage = document.querySelector('.popup-imag');
      popupImage.style.display = 'block';
      popupImage.querySelector('img').src = gallery[index].src;
      setCurrentImageIndex(index);
    };

    const closePopup = () => {
      document.querySelector('.popup-imag').style.display = 'none';
    };

    const showNextImage = () => {
      const nextIndex = (currentImageIndex + 1) % gallery.length;
      showImage(nextIndex);
    };

    const showPreviousImage = () => {
      const previousIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
      showImage(previousIndex);
    };

    document.querySelectorAll('.image-container img').forEach((image, index) => {
      image.onclick = () => {
        showImage(index);
      };
    });

    document.querySelector('.popup-imag span').onclick = () => {
      closePopup();
    };

    document.querySelector('.popup-imag .next-btn').onclick = () => {
      showNextImage();
    };

    document.querySelector('.popup-imag .prev-btn').onclick = () => {
      showPreviousImage();
    };
  }, [gallery, currentImageIndex]);

  return (
    <div className='gall-container'>
      <div className='image-container'>
        {gallery.map((el, index) => (
          <div className='image' key={index}>
            <img src={el.src} alt='' />
          </div>
        ))}
      </div>
      <div className='popup-imag'>
        <span>&times;</span>
        <div class='row col-12 justify-content-between align-items-center  '> 
          <button style={{height: 'fit-content'}} class=' col-sm-1 col-2 m-auto prev-btn btn text-white fs-1'><i class="bi bi-arrow-left-circle"></i></button>
          <img class='col-sm-10 col-12 m-auto popupImg' src='' alt='' />
          <button style={{height: 'fit-content'}} class='col-sm-1 col-2 m-auto next-btn btn text-white fs-1'><i class="bi bi-arrow-right-circle"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Gall;

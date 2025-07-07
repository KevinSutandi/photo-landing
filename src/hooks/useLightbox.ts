import { useState } from 'react';

export function useLightbox(images: string[]) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(0);
  };

  const navigateToPrevious = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const navigateToNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return {
    selectedImage,
    selectedIndex,
    isOpen: selectedImage !== null,
    openLightbox,
    closeLightbox,
    navigateToPrevious,
    navigateToNext,
  };
}
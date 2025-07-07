export interface ImageState {
  loaded: boolean;
  error: boolean;
  retryCount: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  index: number;
}
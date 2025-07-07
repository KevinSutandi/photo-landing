export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png' | 'auto';
  sizes?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export interface ImageOptimizerConfig {
  baseUrl: string;
  defaultQuality: number;
  defaultFormat: string;
  enableWebP: boolean;
  enableAVIF: boolean;
  timeout: number;
}

export interface OptimizationParams {
  url: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
}
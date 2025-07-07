import { OptimizationParams, ImageOptimizerConfig } from '../types/image';

const defaultConfig: ImageOptimizerConfig = {
  baseUrl: '/api/image-optimize', // Your custom API endpoint
  defaultQuality: 75,
  defaultFormat: 'webp',
  enableWebP: true,
  enableAVIF: true,
  timeout: 30000, // 30 seconds - no more 7s timeout!
};

// Device pixel ratios for responsive images
const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];

export class ImageOptimizer {
  private config: ImageOptimizerConfig;

  constructor(config?: Partial<ImageOptimizerConfig>) {
    this.config = { ...defaultConfig, ...config };
  }

  /**
   * Generate optimized image URL
   */
  generateOptimizedUrl(params: OptimizationParams): string {
    const {
      url,
      width,
      height,
      quality = this.config.defaultQuality,
      format = this.config.defaultFormat
    } = params;

    const searchParams = new URLSearchParams({
      url: encodeURIComponent(url),
      q: quality.toString(),
      f: format,
    });

    if (width) searchParams.set('w', width.toString());
    if (height) searchParams.set('h', height.toString());

    return `${this.config.baseUrl}?${searchParams.toString()}`;
  }

  /**
   * Generate srcset for responsive images
   */
  generateSrcSet(src: string, width?: number, quality?: number): string {
    if (!width) {
      return imageSizes
        .map(size => {
          const url = this.generateOptimizedUrl({
            url: src,
            width: size,
            quality
          });
          return `${url} ${size}w`;
        })
        .join(', ');
    }

    // Generate 1x, 2x versions for fixed width images
    const sizes = [width, width * 2];
    return sizes
      .map((size, index) => {
        const url = this.generateOptimizedUrl({
          url: src,
          width: size,
          quality
        });
        return `${url} ${index + 1}x`;
      })
      .join(', ');
  }

  /**
   * Detect best format based on browser support
   */
  getBestFormat(acceptHeader?: string): string {
    if (!acceptHeader) return this.config.defaultFormat;

    if (this.config.enableAVIF && acceptHeader.includes('image/avif')) {
      return 'avif';
    }
    if (this.config.enableWebP && acceptHeader.includes('image/webp')) {
      return 'webp';
    }
    return 'jpeg';
  }

  /**
   * Generate blur placeholder URL
   */
  generateBlurPlaceholder(src: string): string {
    return this.generateOptimizedUrl({
      url: src,
      width: 8,
      height: 8,
      quality: 10,
      format: 'jpeg'
    });
  }

  /**
   * Parse sizes attribute to determine which width to use
   */
  getWidthFromSizes(sizes?: string, fallbackWidth?: number): number {
    if (!sizes) return fallbackWidth || 800;

    // Simple parsing - in production you might want more sophisticated parsing
    const match = sizes.match(/(\d+)(?:px|vw)/);
    if (match) {
      const value = parseInt(match[1]);
      return sizes.includes('vw') ? Math.round((value / 100) * 1920) : value;
    }

    return fallbackWidth || 800;
  }
}

// Export singleton instance
export const imageOptimizer = new ImageOptimizer();

// Utility function to check if browser supports format
export function supportsFormat(format: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    return canvas.toDataURL(`image/${format}`).indexOf(`data:image/${format}`) === 0;
  } catch {
    return false;
  }
}
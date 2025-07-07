"use client"

import React, { useState, useRef, useEffect } from 'react';
import { OptimizedImageProps } from '@/types/image';
import { imageOptimizer, supportsFormat } from '@/utils/imageOptimizer';

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 75,
  format = 'auto',
  sizes,
  priority = false,
  loading = 'lazy',
  className,
  style,
  onLoad,
  onError,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [bestFormat, setBestFormat] = useState(format);
  const imgRef = useRef<HTMLImageElement>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  // Detect best format on client side
  useEffect(() => {
    if (format === 'auto') {
      let detectedFormat = 'jpeg';
      if (supportsFormat('avif')) detectedFormat = 'avif';
      else if (supportsFormat('webp')) detectedFormat = 'webp';
      setBestFormat(detectedFormat as 'auto' | 'webp' | 'avif' | 'jpeg' | 'png');
    } else {
      setBestFormat(format);
    }
  }, [format]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            intersectionObserverRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    intersectionObserverRef.current.observe(imgRef.current);

    return () => {
      intersectionObserverRef.current?.disconnect();
    };
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized URLs
  const optimizedSrc = imageOptimizer.generateOptimizedUrl({
    url: src,
    width: width || imageOptimizer.getWidthFromSizes(sizes, width),
    height,
    quality,
    format: bestFormat,
  });

  const srcSet = sizes
    ? imageOptimizer.generateSrcSet(src, undefined, quality)
    : width
      ? imageOptimizer.generateSrcSet(src, width, quality)
      : undefined;

  // Generate blur placeholder if needed
  const blurPlaceholder = placeholder === 'blur' && !blurDataURL
    ? imageOptimizer.generateBlurPlaceholder(src)
    : blurDataURL;

  // Container styles for aspect ratio and positioning
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    ...style,
  };

  // Image styles
  const imageStyle: React.CSSProperties = {
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0,
  };

  // Blur placeholder styles
  const placeholderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: 'blur(8px)',
    transform: 'scale(1.1)', // Prevent blur edges
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease',
    zIndex: 1,
  };

  const imageAttributes = {
    ref: imgRef,
    alt,
    src: isInView ? optimizedSrc : undefined,
    srcSet: isInView && srcSet ? srcSet : undefined,
    sizes: sizes,
    width: width,
    height: height,
    loading: loading,
    onLoad: handleLoad,
    onError: handleError,
    className,
    style: imageStyle,
    decoding: 'async' as const,
    ...props,
  };

  return (
    <div style={containerStyle}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurPlaceholder && !hasError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blurPlaceholder}
          alt=""
          style={placeholderStyle}
          aria-hidden="true"
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && !hasError && placeholder === 'empty' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              border: '2px solid #e5e7eb',
              borderTop: '2px solid #6b7280',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fef2f2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#dc2626',
            zIndex: 2,
          }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span style={{ fontSize: '12px', marginTop: '4px' }}>Failed to load</span>
        </div>
      )}

      {/* Main image */}
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...imageAttributes} style={{ ...imageStyle, position: 'relative', zIndex: 2 }} />

      {/* Add spinner animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
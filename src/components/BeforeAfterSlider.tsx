import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ComparisonPair } from '../data/beforeAfterData';
import { CropMarks } from './CropMarks';
import { Sliders, Columns, Maximize2, Sparkles, AlertCircle } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface BeforeAfterSliderProps {
  pair: ComparisonPair;
  onOpenLightbox?: (src: string, title: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  pair,
  onOpenLightbox,
}) => {
  const { lang, theme, t } = useSite();
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'split'>('slider');
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
    setHasInteracted(true);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
      setHasInteracted(true);
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
      setHasInteracted(true);
    }
  };

  return (
    <div
      className="crop-box"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-bright)',
        padding: 'clamp(1rem, 2.5vw, 1.75rem)',
        position: 'relative',
      }}
    >
      <CropMarks size={12} />

      {/* Header of the Slider Card */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBlockEnd: '1.25rem',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-copper-light)',
              marginBlockEnd: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Sparkles size={14} />
            <span>محطة المقارنة الهندسية التفاعلية</span>
          </div>
          <h3
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {pair.title}
          </h3>
          <p
            style={{
              fontSize: '0.86rem',
              color: 'var(--color-text-muted)',
              margin: 0,
              marginBlockStart: '0.25rem',
            }}
          >
            {pair.subtitle}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--color-bg-primary)',
            border: '1px solid var(--color-border-subtle)',
            padding: '0.25rem',
          }}
        >
          <button
            type="button"
            onClick={() => setViewMode('slider')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              paddingBlock: '0.35rem',
              paddingInline: '0.75rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              backgroundColor: viewMode === 'slider' ? 'var(--color-copper)' : 'transparent',
              color: viewMode === 'slider' ? '#FFFFFF' : 'var(--color-text-primary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: viewMode === 'slider' ? 600 : 400,
              transition: 'all var(--transition-standard)',
            }}
            title={lang === 'ar' ? 'سلايدر السحب التفاعلي' : 'Interactive slider'}
          >
            <Sliders size={13} />
            <span>{lang === 'ar' ? 'سلايدر تفاعلي' : 'Slider View'}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('split')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              paddingBlock: '0.35rem',
              paddingInline: '0.75rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              backgroundColor: viewMode === 'split' ? 'var(--color-copper)' : 'transparent',
              color: viewMode === 'split' ? '#FFFFFF' : 'var(--color-text-primary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: viewMode === 'split' ? 600 : 400,
              transition: 'all var(--transition-standard)',
            }}
            title={lang === 'ar' ? 'عرض الصورتين جنباً إلى جنب' : 'Side-by-side view'}
          >
            <Columns size={13} />
            <span>{lang === 'ar' ? 'عرض متجاور' : 'Side by Side'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="مقارنة قبل وبعد بالسحب"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(380px, 55vw, 620px)',
            borderRadius: '2px',
            overflow: 'hidden',
            cursor: isDragging ? 'ew-resize' : 'col-resize',
            userSelect: 'none',
            border: '1px solid var(--color-border-subtle)',
            backgroundColor: '#161819',
            boxShadow: '0 18px 40px rgba(0, 0, 0, 0.45)',
            outline: 'none',
          }}
        >
          {/* Layer 1: AFTER (بعد) - Full background */}
          <img
            src={pair.afterImage}
            alt={pair.afterLabel || 'بعد الإنجاز'}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
            loading="lazy"
          />

          {/* Layer 2: BEFORE (قبل) - Clipped by Slider position from Left */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              pointerEvents: 'none',
            }}
          >
            <img
              src={pair.beforeImage}
              alt={pair.beforeLabel || 'قبل التنفيذ'}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              loading="lazy"
            />
          </div>

          {/* Vertical Divider Line with Gold Handle */}
          <div
            style={{
              position: 'absolute',
              insetBlockStart: 0,
              insetBlockEnd: 0,
              left: `${sliderPosition}%`,
              width: '2px',
              backgroundColor: '#BA9368',
              boxShadow: '0 0 10px rgba(186, 147, 104, 0.8), 0 0 2px #fff',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            {/* Center Handle Badge */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#BA9368',
                border: '2.5px solid #FFFFFF',
                boxShadow: '0 4px 16px rgba(79, 79, 79, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 800,
                cursor: 'grab',
                transition: 'transform 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '13px' }}>
                <span>❮</span>
                <span>❯</span>
              </div>
            </div>
          </div>

          {/* Floated Status Badges */}
          {/* Before Badge (Left Side) */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(79, 79, 79, 0.92)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(186, 147, 104, 0.5)',
              color: '#FFFFFF',
              paddingBlock: '0.35rem',
              paddingInline: '0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              zIndex: 5,
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#BA9368',
                display: 'inline-block',
              }}
            />
            <span>{pair.beforeLabel || (lang === 'ar' ? 'قبل البدء (المرحلة الإنشائية)' : 'BEFORE (Under Construction)')}</span>
          </div>

          {/* After Badge (Right Side) */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: '#BA9368',
              backdropFilter: 'blur(8px)',
              border: '1px solid #FFFFFF',
              color: '#FFFFFF',
              paddingBlock: '0.35rem',
              paddingInline: '0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              zIndex: 5,
              pointerEvents: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                display: 'inline-block',
              }}
            />
            <span>{pair.afterLabel || (lang === 'ar' ? 'بعد التسليم (الإنجاز المعماري)' : 'AFTER (Handover)')}</span>
          </div>

          {/* Hint Overlay (fades out after first interaction) */}
          {!hasInteracted && (
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(20, 22, 23, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--color-border-bright)',
                paddingBlock: '0.4rem',
                paddingInline: '1rem',
                fontSize: '0.8rem',
                color: 'var(--color-copper-light)',
                borderRadius: '20px',
                zIndex: 6,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                animation: 'pulse 2s infinite',
              }}
            >
              <span>{lang === 'ar' ? '↔ اسحب المقبض الذهبي يميناً ويساراً للمقارنة' : '↔ Drag the golden handle to compare before & after'}</span>
            </div>
          )}
        </div>
      ) : (
        /* Split View Mode (Side by Side) */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {/* Before Card */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border-subtle)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                backgroundColor: 'rgba(79, 79, 79, 0.92)',
                color: '#FFFFFF',
                border: '1px solid rgba(186, 147, 104, 0.4)',
                paddingBlock: '0.25rem',
                paddingInline: '0.65rem',
                fontSize: '0.78rem',
                zIndex: 2,
              }}
            >
              الحالة قبل التنفيذ
            </div>
            <img
              src={pair.beforeImage}
              alt={pair.beforeLabel || 'قبل'}
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {onOpenLightbox && (
              <button
                type="button"
                onClick={() => onOpenLightbox(pair.beforeImage, `قبل التنفيذ — ${pair.title}`)}
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(79,79,79,0.75)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff',
                  padding: '0.4rem',
                  cursor: 'pointer',
                  display: 'flex',
                }}
                title="تكبير الصورة"
              >
                <Maximize2 size={15} />
              </button>
            )}
          </div>

          {/* After Card */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border-bright)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                backgroundColor: '#BA9368',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                paddingBlock: '0.25rem',
                paddingInline: '0.65rem',
                fontSize: '0.78rem',
                zIndex: 2,
              }}
            >
              النتيجة بعد التسليم
            </div>
            <img
              src={pair.afterImage}
              alt={pair.afterLabel || 'بعد'}
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {onOpenLightbox && (
              <button
                type="button"
                onClick={() => onOpenLightbox(pair.afterImage, `بعد الإنجاز — ${pair.title}`)}
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '0.4rem',
                  cursor: 'pointer',
                  display: 'flex',
                }}
                title="تكبير الصورة"
              >
                <Maximize2 size={15} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quick Jump Position Bar */}
      {viewMode === 'slider' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBlockStart: '1rem',
            paddingBlockStart: '0.75rem',
            borderBlockStart: '1px dashed var(--color-border-subtle)',
            fontSize: '0.82rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => {
                setSliderPosition(100);
                setHasInteracted(true);
              }}
              style={{
                background: sliderPosition > 85 ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                color: sliderPosition > 85 ? '#FFFFFF' : 'var(--color-text-primary)',
                paddingBlock: '0.25rem',
                paddingInline: '0.65rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                fontWeight: sliderPosition > 85 ? 600 : 400,
              }}
            >
              {lang === 'ar' ? 'عرض (قبل) بالكامل' : '100% Before'}
            </button>
            <button
              type="button"
              onClick={() => {
                setSliderPosition(50);
                setHasInteracted(true);
              }}
              style={{
                background: sliderPosition >= 45 && sliderPosition <= 55 ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                color: sliderPosition >= 45 && sliderPosition <= 55 ? '#FFFFFF' : 'var(--color-text-primary)',
                paddingBlock: '0.25rem',
                paddingInline: '0.65rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                fontWeight: sliderPosition >= 45 && sliderPosition <= 55 ? 600 : 400,
              }}
            >
              {lang === 'ar' ? 'مقارنة متساوية 50%' : '50% Split'}
            </button>
            <button
              type="button"
              onClick={() => {
                setSliderPosition(0);
                setHasInteracted(true);
              }}
              style={{
                background: sliderPosition < 15 ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                color: sliderPosition < 15 ? '#FFFFFF' : 'var(--color-text-primary)',
                paddingBlock: '0.25rem',
                paddingInline: '0.65rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                fontWeight: sliderPosition < 15 ? 600 : 400,
              }}
            >
              {lang === 'ar' ? 'عرض (بعد) بالكامل' : '100% After'}
            </button>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            {lang === 'ar' ? 'موقع المقارنة:' : 'Position:'} {Math.round(sliderPosition)}%
          </div>
        </div>
      )}
    </div>
  );
};

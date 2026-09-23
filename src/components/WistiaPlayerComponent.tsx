import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, AlertCircle, Play, Pause } from 'lucide-react';

interface WistiaPlayerComponentProps {
  mediaId?: string;
}

export const WistiaPlayerComponent: React.FC<WistiaPlayerComponentProps> = ({
  mediaId = '46umdi0fy9',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoInstance, setVideoInstance] = useState<any>(null);

  useEffect(() => {
    // 1. Inject the wistia-player custom element with all controls disabled
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <wistia-player 
          media-id="${mediaId}" 
          aspect="1.7777777777777777"
          controls-visible-on-load="false"
          playbar="false"
          small-play-button="false"
          volume-control="false"
          fullscreen-button="false"
          settings-control="false"
          playback-rate-control="false"
          quality-control="false"
          wistia-logo="false"
          player-color="000000"
        ></wistia-player>
      `;
    }

    // 2. Connect via Wistia queue API with all extraneous controls removed
    const win = window as any;
    win._wq = win._wq || [];

    win._wq.push({
      id: mediaId,
      options: {
        playbar: false,
        controlsVisibleOnLoad: false,
        volumeControl: false,
        fullscreenButton: false,
        settingsControl: false,
        smallPlayButton: false,
        playbackRateControl: false,
        qualityControl: false,
        wistiaLogo: false,
      },
      onReady: function (video: any) {
        setVideoInstance(video);

        video.bind('volumechange', function (vol: number) {
          setIsMuted(video.isMuted ? video.isMuted() : vol === 0);
        });

        video.bind('play', function () {
          setIsPlaying(true);
        });

        video.bind('pause', function () {
          setIsPlaying(false);
        });

        // Ensure auto-start
        try {
          video.play();
        } catch (e) {
          console.error(e);
        }
      },
    });
  }, [mediaId]);

  // Handler: Toggle Play / Pause only
  const handleTogglePlayPause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (videoInstance) {
      try {
        if (isPlaying) {
          videoInstance.pause();
          setIsPlaying(false);
        } else {
          videoInstance.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error('Play/pause error:', err);
      }
    } else {
      const el = containerRef.current?.querySelector('wistia-player') as any;
      if (el) {
        if (isPlaying) {
          if (typeof el.pause === 'function') el.pause();
          setIsPlaying(false);
        } else {
          if (typeof el.play === 'function') el.play();
          setIsPlaying(true);
        }
      }
    }
  };

  // Handler: Unmute to 100% full audio
  const handleUnmuteFullAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const win = window as any;

    if (videoInstance) {
      try {
        videoInstance.unmute();
        videoInstance.volume(1.0);
        videoInstance.play();
      } catch (err) {
        console.error('Error unmuting:', err);
      }
    }

    if (win._wq) {
      win._wq.push({
        id: mediaId,
        run: function (video: any) {
          try {
            video.unmute();
            video.volume(1.0);
            video.play();
          } catch (e) {
            console.error(e);
          }
        },
      });
    }

    const wistiaEl = containerRef.current?.querySelector('wistia-player') as any;
    if (wistiaEl) {
      try {
        if (typeof wistiaEl.unmute === 'function') wistiaEl.unmute();
        wistiaEl.muted = false;
        wistiaEl.volume = 1.0;
        if (typeof wistiaEl.play === 'function') wistiaEl.play();
      } catch (domErr) {
        console.error(domErr);
      }
    }

    setIsMuted(false);
    setIsPlaying(true);
  };

  // Handler: Mute audio
  const handleMuteAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (videoInstance) {
      try {
        videoInstance.mute();
      } catch (e) {
        console.error(e);
      }
    }

    const wistiaEl = containerRef.current?.querySelector('wistia-player') as any;
    if (wistiaEl) {
      try {
        if (typeof wistiaEl.mute === 'function') wistiaEl.mute();
        wistiaEl.muted = true;
      } catch (domErr) {
        console.error(domErr);
      }
    }

    setIsMuted(true);
  };

  // Main video area click: if muted, unmute & play; if unmuted, toggle pause/play
  const handleVideoAreaClick = () => {
    if (isMuted) {
      handleUnmuteFullAudio();
    } else {
      handleTogglePlayPause();
    }
  };

  return (
    <div className="w-full">
      {/* ⚠️ Warning above the video: Please Watch the Video Don't Skip */}
      <div className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-red-950/90 border border-red-500/70 px-3 py-1.5 text-center shadow-lg">
        <AlertCircle className="h-4 w-4 text-red-400 shrink-0 animate-pulse" />
        <div className="text-xs sm:text-sm font-black text-white tracking-wide">
          <span className="text-red-300 uppercase">⚠️ PLEASE WATCH THE VIDEO — DON'T SKIP!</span>
          <span className="hidden sm:inline text-neutral-300 font-normal"> · </span>
          <span className="block sm:inline text-[11px] sm:text-xs text-amber-300 font-bold">
            தயவுசெய்து வீடியோவை தவிர்க்காமல் பார்க்கவும்!
          </span>
        </div>
      </div>

      {/* Video Container: Completely shields default Wistia control bar */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-[#E5B83B]/60 group">
        
        {/* The Wistia Web Component */}
        <div ref={containerRef} className="w-full h-full" />

        {/* Full-frame Click Interceptor Layer: Handles Pause/Play and Unmute, blocks scrub bar clicks */}
        <div 
          onClick={handleVideoAreaClick}
          className="absolute inset-0 z-10 cursor-pointer"
          title={isMuted ? 'Tap to unmute full audio' : isPlaying ? 'Tap to pause' : 'Tap to play'}
        />

        {/* Bottom Mask: Ensures default Wistia blue control bar is covered on any browser/device */}
        <div 
          className="pointer-events-none absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black via-black/90 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* Paused State Center Indicator */}
        {!isPlaying && (
          <div 
            onClick={handleTogglePlayPause}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs cursor-pointer"
          >
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#F5D061] to-[#E5B83B] text-black shadow-2xl hover:scale-110 transition-transform">
              <Play className="h-7 w-7 sm:h-8 sm:w-8 fill-black translate-x-0.5" />
            </div>
            <span className="mt-2 text-xs sm:text-sm font-black text-white bg-black/80 px-3 py-1 rounded-full border border-neutral-700">
              Video Paused • Tap to Play
            </span>
          </div>
        )}

        {/* Floating Tap-to-Unmute Banner Overlay (Shows when audio is muted) */}
        {isMuted && (
          <div 
            onClick={handleUnmuteFullAudio}
            className="absolute inset-x-2 bottom-3 sm:inset-x-4 sm:bottom-4 z-20 flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-black/95 border-2 border-[#E5B83B] backdrop-blur-md text-white shadow-2xl animate-pulse hover:animate-none hover:scale-[1.01] transition-transform cursor-pointer"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#F5D061] to-[#E5B83B] text-black shadow-md">
                <VolumeX className="h-4 w-4 stroke-[2.5]" />
              </span>
              <div className="text-left leading-tight truncate">
                <div className="text-xs sm:text-sm font-black text-white truncate">
                  🔊 Tap To Unmute Audio
                </div>
                <div className="text-[10px] sm:text-xs text-[#E5B83B] font-bold truncate">
                  முழுமையான ஆடியோ கேட்க இங்கே தொடவும்
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleUnmuteFullAudio}
              className="shrink-0 rounded-lg bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] hover:from-[#FFE28A] hover:via-[#F5D061] hover:to-[#E5B83B] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-black text-black shadow-[0_0_15px_rgba(229,184,59,0.5)] whitespace-nowrap cursor-pointer"
            >
              Unmute 🔊
            </button>
          </div>
        )}
      </div>

      {/* ONLY Allowed Controls Bar: Pause/Play & Mute/Unmute — ZERO OTHER CONTROLS */}
      <div className="mt-2.5 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
        {/* 1. Pause / Play Control */}
        <button
          type="button"
          onClick={handleTogglePlayPause}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold transition cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="h-3.5 w-3.5 fill-white" />
              <span>Pause Video</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 fill-white translate-x-0.5" />
              <span className="text-[#E5B83B]">Play Video</span>
            </>
          )}
        </button>

        {/* 2. Unmute / Mute Control */}
        <button
          type="button"
          onClick={isMuted ? handleUnmuteFullAudio : handleMuteAudio}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-black transition cursor-pointer ${
            isMuted
              ? 'bg-gradient-to-r from-[#F5D061] via-[#E5B83B] to-[#C99700] text-black shadow-[0_0_12px_rgba(229,184,59,0.4)]'
              : 'bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300'
          }`}
        >
          {isMuted ? (
            <>
              <Volume2 className="h-3.5 w-3.5 stroke-[3]" />
              <span>Unmute Full Audio</span>
            </>
          ) : (
            <>
              <VolumeX className="h-3.5 w-3.5" />
              <span>Mute Audio</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

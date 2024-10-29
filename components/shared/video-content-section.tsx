'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BorderBeam } from '@/components/magicui/border-beam';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoContentSectionProps {
  title: string;
  description: string;
  videoUrl: string | null;
  reverseLayout?: boolean;
}

export default function VideoContentSection({
  title,
  description,
  videoUrl,
  reverseLayout = false,
}: VideoContentSectionProps) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const contentOrder = reverseLayout ? 'md:order-last' : '';

  return (
    <section ref={ref} className="relative z-10 pb-10">
      <div className="container mx-auto">
        <div className="relative p-[2px] rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.01] group -mt-8 md:-mt-12">
          <Card className="overflow-hidden bg-transparent bg-gradient-to-b from-primary-light/30 to-primary-light backdrop-blur-sm border-accent/20 border-2 rounded-[10px] relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.1),0_0_3px_rgba(0,0,0,0.05)]">
            <CardContent className="p-6 md:p-10">
              <div
                className={`grid ${videoUrl ? 'md:grid-cols-2' : 'grid-cols-1'} gap-10 items-center`}
              >
                <div className={contentOrder}>
                  <BoxReveal>
                    <div className="py-2">
                      <motion.h2
                        className="text-3xl md:text-4xl font-bold text-primary-dark"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {title}
                      </motion.h2>
                    </div>
                  </BoxReveal>
                  <BorderBeam
                    className="w-1/2 h-1"
                    colorFrom="hsl(var(--accent))"
                    colorTo="hsl(var(--secondary))"
                  />
                  <TextGenerateEffect
                    words={description}
                    className="text-lg xl:text-2xl text-primary-dark font-light leading-relaxed"
                    color="text-primary-dark"
                  />
                </div>
                {videoUrl && (
                  <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[16/9] flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-full h-full"
                    >
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        controls
                        autoPlay
                        muted
                      >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <button
                          onClick={togglePlay}
                          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

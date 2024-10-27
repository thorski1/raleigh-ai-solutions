'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { BorderBeam } from '@/components/magicui/border-beam';
import { BoxReveal } from '@/components/magicui/box-reveal';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface IntroductionSectionProps {
  introductionTitle: string;
  introductionDescription: string;
  introductionVideo: string | null;
}

export default function IntroductionSection({
  introductionTitle,
  introductionDescription,
  introductionVideo,
}: IntroductionSectionProps) {
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

  return (
    <section ref={ref} className="relative z-10 pb-10">
      <div className="container mx-auto">
        <div className="relative p-[2px] rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.01] group -mt-8 md:-mt-12">
          <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-secondary/20 border-2 rounded-[10px] relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.1),0_0_3px_rgba(0,0,0,0.05)]">
            <CardContent className="p-6 md:p-10">
              <div
                className={`grid ${introductionVideo ? 'md:grid-cols-2' : 'grid-cols-1'} gap-10 items-center`}
              >
                <div>
                  <BoxReveal>
                    <div className="py-2">
                      <motion.h2
                        className="text-2xl md:text-3xl font-bold text-secondary-dark"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {introductionTitle}
                      </motion.h2>
                    </div>
                  </BoxReveal>
                  <BorderBeam
                    className="w-1/2 h-1"
                    colorFrom="hsl(var(--secondary))"
                    colorTo="hsl(var(--primary))"
                  />
                  <TextGenerateEffect
                    words={introductionDescription}
                    className="text-lg xl:text-xl text-secondary-dark font-light leading-tight mt-4"
                    color="text-secondary-dark"
                  />
                </div>
                {introductionVideo && (
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
                        <source src={introductionVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <button
                          onClick={togglePlay}
                          className="bg-secondary/50 text-white p-2 rounded-full hover:bg-secondary/70 transition-colors"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button
                          onClick={toggleMute}
                          className="bg-secondary/50 text-white p-2 rounded-full hover:bg-secondary/70 transition-colors"
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

'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { BorderBeam } from '@/components/magicui/border-beam';
import SectionHeadline from '@/components/reusables/section-headline';
import { MagicCard } from '@/components/magicui/magic-card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const values = [
  {
    title: 'Innovation',
    description: 'Embracing cutting-edge artificial intelligence solutions.',
    color: 'bg-gradient-to-r from-blue-200 to-blue-400 text-secondary-foreground',
  },
  {
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in AI consulting and automation.',
    color: 'bg-gradient-to-r from-green-200 to-green-400 text-secondary-foreground',
  },
  {
    title: 'Excellence',
    description: 'Delivering outstanding results through AI integration services.',
    color: 'bg-gradient-to-r from-purple-200 to-purple-400 text-secondary-foreground',
  },
  {
    title: 'Collaboration',
    description: 'Working closely with clients to design customized AI solutions.',
    color: 'bg-gradient-to-r from-yellow-200 to-yellow-400 text-secondary-foreground',
  },
];

const ValuesVideo = () => {
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
    <section ref={ref} className="relative py-16 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <SectionHeadline text="Our Values" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <MagicCard key={index} className="bg-primary-dark backdrop-blur-sm shadow-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Badge className={cn('text-background', value.color)}>{value.title}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-background">{value.description}</p>
                  </CardContent>
                </MagicCard>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden rounded-lg shadow-xl aspect-[16/9]"
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
                <source
                  src="https://mbbrauqirbosaodnbpff.supabase.co/storage/v1/object/public/videos/about-us.mp4?t=2024-11-12T20%3A45%3A23.174Z"
                  type="video/mp4"
                />
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
        </div>
      </div>
    </section>
  );
};

export default ValuesVideo;

import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCTAProps {
  service: {
    videoSrc: string;
    thumbnailSrc: string;
  };
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-6">
              Take your business to the next level with our expert services.
            </p>
            <Link href="/contact" className=" w-full sm:w-auto">
              <Button className="w-full sm:w-auto">Contact Us</Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <HeroVideoDialog
              videoSrc={service.videoSrc}
              thumbnailSrc={service.thumbnailSrc}
              animationStyle="from-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { FadeText } from "../magicui/fade-text";

const SectionHeadline = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h2 className={cn(`text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12`, className)}>
      <FadeText className={`text-slate-600`} text={text} />
    </h2>
  );
};

export default SectionHeadline;

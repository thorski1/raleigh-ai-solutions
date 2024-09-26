import { FadeText } from "../magicui/fade-text";

const SectionHeadline = ({ text, color }: { text: string, color: string }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
      <FadeText className={`text-${color}`} text={text} />
    </h2>
  );
};

export default SectionHeadline;

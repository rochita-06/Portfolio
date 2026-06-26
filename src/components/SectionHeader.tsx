import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  gradientTitle?: boolean;
  className?: string;
}

const SectionHeader = ({
  title,
  highlight,
  description,
  gradientTitle = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-12 sm:mb-16", className)}>
      <h2
        className={cn(
          "font-heading text-responsive-4xl lg:text-5xl font-bold mb-4",
          gradientTitle ? "gradient-text" : "text-foreground"
        )}
      >
        {gradientTitle ? (
          title
        ) : (
          <>
            {title}
            {highlight && <> <span className="gradient-text">{highlight}</span></>}
          </>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

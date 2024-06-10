import { useState, useRef, useEffect, memo } from "react";

type ReadMoreLessProps = {
  content: any;
  maxLineCount?: number;
};

const ReadMoreLess = ({ content, maxLineCount = 3 }: ReadMoreLessProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isReadMore, setIsReadMore] = useState(true);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      if (contentRef.current) {
        const actualLineCount = Math.ceil(
          contentRef.current.scrollHeight /
            parseFloat(getComputedStyle(contentRef.current).lineHeight)
        );
        if (actualLineCount > maxLineCount) {
          setIsTruncated(true);
        } else {
          setIsTruncated(false);
        }
      }
    };
    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [maxLineCount, content]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p
        ref={contentRef}
        className="lineClamp"
        style={{
          lineHeight: "normal",
          lineClamp: isReadMore ? maxLineCount : "",
        }}
      >
        {content}
      </p>
      {isTruncated && (
        <button onClick={toggleReadMore} style={{ background: "" }}>
          {isReadMore ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default memo(ReadMoreLess);

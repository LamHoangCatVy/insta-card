import React from 'react';
import Image from 'next/image';
import frame from '../../public/images/frame.png';
import ChatBubble from './ChatBubble';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Demo = () => {
  const [isFlipped, setFlipped] = React.useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const { targetRef: bubble1Ref, isVisible: isVisibleBubble1 } = useIntersectionObserver();
  const { targetRef: bubble2Ref, isVisible: isVisibleBubble2 } = useIntersectionObserver();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <Image src={frame} alt="iPhone Frame" width={800} height={1000} />

        {/* First ChatBubble positioned at top left */}
        <div ref={bubble1Ref} className="absolute top-0 left-0 p-2 ">
          <ChatBubble
            message="Easy way for users to create and share their business cards on the digital platform"
            isVisible={isVisibleBubble1}
          />
        </div>

        {/* Second ChatBubble positioned at bottom right */}
        <div ref={bubble2Ref} className="absolute bottom-0 right-0 p-2 w-64">
          <ChatBubble
            message="Allow users to share links to social media channels like: FB, Insta,..."
            isVisible={isVisibleBubble2}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;

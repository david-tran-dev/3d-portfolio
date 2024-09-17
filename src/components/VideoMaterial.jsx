import { useGSAP } from '@gsap/react';
import { useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect } from 'react';

const VideoMaterial = ({ url, group }) => {
  const txt = useVideoTexture(url);
	useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);
  return <meshBasicMaterial map={txt} toneMapped={false} />;
};

export default VideoMaterial;

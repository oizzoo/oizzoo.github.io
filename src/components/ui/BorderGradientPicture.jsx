import { motion, useTime, useTransform } from 'framer-motion';

function BorderGradient({ children }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const animatedGradient = useTransform(
    rotate,
    (r) =>
      `conic-gradient(
        from ${r}deg,
        #4776e6 0%,
        #42a5f5 25%,
        #03a9f4 50%,
        #005bea 75%,
        #4776e6 100%
      )`
  );

  return (
    <motion.div
      style={{
        borderRadius: '50%',
        background: animatedGradient,
        display: 'inline-block',
        padding: '4px',
      }}
    >
      <div
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#0d1117',
          display: 'flex',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
export default BorderGradient;

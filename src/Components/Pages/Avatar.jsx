import glit from '../../assets/glit.jpg';
import glitti from '../../assets/glitti.jpg';
import glity from '../../assets/glity.jpg';
import { motion } from 'framer-motion';

export default function AvatarGroup() {
  return (
    <motion.div className="avatar-group"
    animate={{transition: {staggerChildren: 0.6}}}>
      <motion.img
      initial={{ y: -80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring", stiffness: 100,
    damping: 15, duration: 1.0
  }}
  viewport={{ once: false, amount: 0.3 }}
  className="w-64 p-4 bg-white shadow-xl rounded-2xl" src={glity} alt='img' className="avatar" />
      <motion.img  src={glitti} alt='img' className="avatar"
       initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring", stiffness: 100,
    damping: 15, duration: 1.0
  }}
  viewport={{ once: false, amount: 0.3 }} />
      <motion.img src={glit} alt='img' className="avatar"
      initial={{ y: -80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring", stiffness: 100,
    damping: 15, duration: 1.0
  }}
  viewport={{ once: false, amount: 0.3 }} />
      <motion.div className="avatar add-more"
      initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring", stiffness: 100,
    damping: 15, duration: 1.0
  }}
  viewport={{ once: false, amount: 0.3 }}>
        <span>+</span>
      </motion.div>
    </motion.div>
  );
}

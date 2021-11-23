import React from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile}) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }} 
        ></motion.div>
    );
}

export default function ProgressBar({ progress }) {
  return (
    <div className="progress__bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
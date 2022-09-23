import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(7, 12, 247, 1);
`;

const Box = styled(motion.div)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const MotionBox = () => {
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-500, 0, 500], [-500, 0, 500]);
    const background = useTransform(
        x,
        [-500, 0, 500],
        [
            "linear-gradient(135deg, rgb(129, 236, 236), rgb(162, 155, 254))",
            "linear-gradient(135deg, rgb(255, 234, 167), rgb(225, 112, 85))",
            "linear-gradient(135deg, rgb(9, 132, 227), rgb(85, 239, 196))",
        ]
    );

    return (
        <Wrapper style={{ background: background }}>
            <Box
                style={{ x, rotateZ: rotateZ }}
                drag="x"
                dragElastic={0.6}
                dragConstraints={{ left: -0, right: 0 }}
            />
        </Wrapper>
    );
};

export default MotionBox;

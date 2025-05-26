export const animations = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.25 },
  }),
};
export const animationsTop = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.25 },
  }),
};
export const animationsRight = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.25 },
  }),
};

export const animationsLeft = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.25 },
  }),
};

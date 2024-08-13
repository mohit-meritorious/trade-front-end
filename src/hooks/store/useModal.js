import { create } from "zustand";
export const MODAL_TYPES = { SEARCH: "seacrh", PERFORMANCE: "performance" };
const useModal = create((set) => ({
  open: false,
  type: "",
  top: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  width: undefined,

  openModal: (type, { top, left, right } = {}, width) => {
    if (!Object.values(MODAL_TYPES).includes(type)) {
      throw new Error({
        msg: "invalid modal type",
        validTypes: Object.values(MODAL_TYPES),
      });
    }
    return set(() => ({ open: true, type, top, left, right, width }));
  },
  closeModal: () => set(() => ({ open: false, type: "" })),
}));
export default useModal;

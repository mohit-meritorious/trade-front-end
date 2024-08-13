import { create } from "zustand";
const useModal = create((set) => ({
  open: false,
  type: "",
  top: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  width: undefined,

  openModal: (type, { top, left, right }, width) =>
    set(() => ({ open: true, type, top, left, right, width })),
  closeModal: () => set(() => ({ open: false, type: "" })),
}));
export default useModal;
